const moment = require('moment');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, { 
    origins: '*:*',
    transports: ['websocket']
});
 
const port = process.env.PORT || 4001;
const index = require('./routes/index');

app.use(index);

class Player {
    constructor(new_socket_id) {
        this._socket_id = new_socket_id;
        this._name = null;
        this._current_room = null;
        this._console = null;
    }
    get socket_id() { return this._socket_id }
    get name() { return this._name }
    get current_room() { return this._current_room }
    get console() { return this._console }
    set socket_id(new_socket_id) { if (new_socket_id) this._socket_id = new_socket_id }
    set name(new_name) { if (new_name) this._name = new_name }
    set current_room(new_room) { this._current_room = new_room }
    set console(new_console) { this._console = new_console }
}

class Room {
    constructor(new_room_id, new_host_id) {
        this._room_id = new_room_id;
        this._host_id = new_host_id;
        this._consoles = {
            spartan: [],
            cronus: [],
            ethos: [],
            bme: [],
            flight: [],
            capcom: []
        };
        this._player_count = 0;
        this._in_progress = false;
        this._flight_notes = [];
        this._events = [];
        this._current_time = moment('2019-11-15T15:00:00');
        this._time_interval_id = null;
    }
    get room_id() { return this._room_id }
    get host_id() { return this._host_id }
    get consoles() { return this._consoles }
    get player_count() { return this._player_count }
    get in_progress() { return this._in_progress }
    get flight_notes() { return this._flight_notes }
    get events() { return this._events }
    get current_time() { return this._current_time }
    get time_interval_id() { return this._time_interval_id }
    set room_id(new_room_id) { if (new_room_id) this._room_id = new_room_id }
    set host_id(new_host_id) { if (new_host_id) this._host_id = new_host_id }
    set consoles(new_consoles) { if (new_consoles) this._consoles = new_consoles }
    set player_count(new_player_count) { if (new_player_count) this._player_count = new_player_count }
    set in_progress(new_in_progress) { if (new_in_progress) this._in_progress = new_in_progress }
    set flight_notes(new_flight_notes) { if (new_flight_notes) this._flight_notes = new_flight_notes }
    set events(new_events) { if (new_events) this._events = new_events }
    set current_time(new_current_time) { if (new_current_time) this._current_time = new_current_time }
    set time_interval_id(new_time_interval_id) { if (new_time_interval_id) this._time_interval_id}
    add_position(position, value)  { this._consoles[position] = [ ...this._consoles[position], value ] }
    remove_position(position, value) { this._consoles[position] = this._consoles[position].filter(e => e !== value) }
    add_efn(new_efn)  { this._flight_notes = [ ...this._flight_notes, new_efn ] }
    consoles_taken() {
        return {
            spartan: (this._consoles['spartan'].length),
            cronus: (this._consoles['cronus'].length),
            ethos: (this._consoles['ethos'].length),
            bme: (this._consoles['bme'].length),
            flight: (this._consoles['flight'].length),
            capcom: (this._consoles['capcom'].length)
        }
    }
    console_users() {
        return {
            spartan: this._consoles['spartan'].map((userID) => {return players[userID].name}),
            cronus: this._consoles['cronus'].map((userID) => {return players[userID].name}),
            ethos: this._consoles['ethos'].map((userID) => {return players[userID].name}),
            bme: this._consoles['bme'].map((userID) => {return players[userID].name}),
            flight: this._consoles['flight'].map((userID) => {return players[userID].name}),
            capcom: this._consoles['capcom'].map((userID) => {return players[userID].name})
        }
    }
}

class EFN {
    constructor(ID, sender, subject, content, time) {
        this._ID = ID;
        this._sender = sender;
        this._subject = subject;
        this._content = content;
        this._status = "open";
        this._time = time;
        this._comments = [];
    }
    get ID() { return this._ID }
    get sender() { return this._sender }
    get subject() { return this._subject }
    get content() { return this._content }
    get status() { return this._status }
    get time() { return this._time }
    get comments() { return this._comments }
    set ID(new_ID) { if (new_ID) this._ID = new_ID }
    set sender(new_sender) { if (new_sender) this._sender = new_sender }
    set subject(new_subject) { if (new_subject) this._subject = new_subject }
    set content(new_content) { if (new_content) this._content = new_content }
    set status(new_status) { if (new_status) this._status = new_status }
    set time(new_time) { if (new_time) this._time = new_time }
    set comments(new_comments) { if (new_comments) this._comments = new_comments }
    add_comment(new_comment) { this._comments = [ ...this._comments, new_comment ] }
    remove_comment(comment) { this._comments = this._comments.filter(e => e !== comment)}
}

var players = {};
var rooms = {};

io.on('connection', socket => {
    var new_client = new Player(socket.id);
    players[socket.id] = new_client;
    console.log('client has connected');

    socket.on('GET_ROOMS', (cb) => {
        console.log('GET_ROOMS request received');
        cb(rooms);
    })

    socket.on('GET_CONSOLES', (roomID, cb) => {
        console.log('GET_CONSOLES request received');
        console.log(rooms[roomID].consoles_taken())
        cb(rooms[roomID].consoles_taken());
    })

    socket.on('CREATE_ROOM', (roomID) => {
        console.log('CREATE_ROOM request received with room ID: ' + roomID);
        socket.join(roomID);
        var new_room = new Room(roomID, socket.id);
        console.log("Room Object: ", new_room)
        rooms[roomID] = new_room;
        console.log("Array Object: ", rooms[roomID])
        players[socket.id].current_room = roomID;
        players[socket.id].name = 'HOST';
        players[socket.id].console = 'host';
        io.in(roomID).emit('UPDATE_CONSOLES', rooms[roomID].consoles_taken());
    })

    socket.on('JOIN_ROOM', (roomID, username) => {
        console.log('JOIN_ROOM request received with room ID: ' + roomID);
        socket.join(roomID);
        rooms[roomID].player_count = rooms[roomID].player_count + 1;
        players[socket.id].current_room = roomID;
        players[socket.id].name = username;
    });

    socket.on('SELECT_CONSOLE', (roomID, position) => {
        console.log('SELECT_CONSOLE request received with room ID: ' + roomID + ' and console: ' + position);
        rooms[roomID].add_position(position, socket.id);
        players[socket.id].console = position;
        io.in(roomID).emit('UPDATE_CONSOLES', rooms[roomID].consoles_taken());
        if (rooms[roomID].in_progress === true) {
            socket.emit('SHOW_DISPLAY');
            socket.emit('UPDATE_REPORTS', rooms[roomID].flight_notes)
            io.to(rooms[roomID].host_id).emit('UPDATE_CONSOLE_USERS', rooms[roomID].console_users());
            io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} joined the lab session as ${position.toUpperCase()}`);
        }
        console.log(rooms[roomID])
        console.log(players[socket.id])
    })

    socket.on('LEAVE_ROOM', (roomID) => {
        console.log('LEAVE_ROOM request received with position: ' + players[socket.id].console)
        if (players[socket.id].console !== 'host' && players[socket.id].console !== null) {
            rooms[roomID].remove_position(players[socket.id].console, socket.id);
            rooms[roomID].player_count = rooms[roomID].player_count - 1;
        } else if (players[socket.id].console === 'host') {
            rooms[roomID].host_id = null;
            socket.to(roomID).emit('HOST_LEFT', roomID);
            console.log('HOST_LEFT event emitted for room: ' + roomID)
        }
        if (rooms[roomID].player_count === 0 && rooms[roomID].host_id === null ) {
            delete rooms[roomID];
        } else {
            socket.to(roomID).emit('UPDATE_CONSOLES', rooms[roomID].consoles_taken());
            io.to(rooms[roomID].host_id).emit('UPDATE_CONSOLE_USERS', rooms[roomID].console_users());
        }
        players[socket.id].name = null;
        players[socket.id].current_room = null;
        players[socket.id].console = null;
        socket.leave(roomID);
    })

    socket.on('disconnect', (reason) => {
        console.log(socket.id + ' disconnected because of ' + reason);
        if (players[socket.id].current_room !== null) {
            const roomID = players[socket.id].current_room;
            if (players[socket.id].console !== 'host' && players[socket.id].console !== null) {
                rooms[roomID].remove_position(players[socket.id].console, socket.id);
                rooms[roomID].player_count = rooms[roomID].player_count - 1;
                socket.to(roomID).emit('UPDATE_CONSOLES', rooms[roomID].consoles_taken());
                io.to(rooms[roomID].host_id).emit('UPDATE_CONSOLE_USERS', rooms[roomID].console_users());
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) disconnected from the lab session`);
                socket.leave(roomID);
            } else if (players[socket.id].console === 'host') {
                rooms[roomID].host_id = null;
                socket.to(roomID).emit('HOST_LEFT', roomID);
                console.log('HOST_LEFT event emitted for room: ' + roomID);
                socket.leave(roomID);
            }
        }
        delete players[socket.id];
    })

    socket.on('GAME_START', (roomID) => {
        var taken = rooms[roomID].consoles_taken();
        var total_consoles_taken = taken.spartan + taken.cronus + taken.ethos + taken.flight + taken.capcom + taken.bme;
        if (total_consoles_taken === rooms[roomID].player_count) {
            rooms[roomID].in_progress = true;
            io.in(roomID).emit('SHOW_DISPLAY');
            rooms[roomID].time_interval_id = setInterval(() => {
                rooms[roomID].current_time = rooms[roomID].current_time.add(1, 'seconds');
                io.in(roomID).emit('UPDATE_TIME', rooms[roomID].current_time.format("YYYY-MM-DDTHH:mm:ss"));
            }, 1000)
            io.to(rooms[roomID].host_id).emit('UPDATE_CONSOLE_USERS', rooms[roomID].console_users());
            io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + " - Lab session started");
        } else {
            io.to(rooms[roomID].host_id).emit('STUDENT_NO_CONSOLE');
        }
    })

    socket.on('STATUS_REPORT', (values, roomID) => {
        console.log(values.time + ": " + players[socket.id].name + " submitted status report with subject: " + values.subject);
        const newEFNID = "EFN" + (rooms[roomID].flight_notes.length+1).toString().padStart(4, '0');
        rooms[roomID].add_efn(new EFN(newEFNID,
                                      players[socket.id].console,
                                      values.subject,
                                      values.content,
                                      values.time
                                    ))
        console.log(rooms[roomID].flight_notes);
        io.in(roomID).emit('UPDATE_REPORTS', rooms[roomID].flight_notes);
        io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) submitted an EFN (${newEFNID}) with subject: ${values.subject}`);
    })

    socket.on('UPDATE_EFN_STATUS', (efnID, newStatus) => {
        var roomID = players[socket.id].current_room;
        var old_efns = rooms[roomID].flight_notes;
        var updated_efns = old_efns.map(efn => {
            console.log(efn.ID, efnID)
            if (efn.ID === efnID) {
                efn.status = newStatus;
            }
            return efn;
        })
        console.log(updated_efns);
        rooms[roomID].flight_notes = updated_efns;
        io.in(roomID).emit('UPDATE_REPORTS', rooms[roomID].flight_notes)
        io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) updated EFN (${efnID}) with a new status: ${newStatus.toUpperCase()}`);
    })

    socket.on('ADD_EFN_COMMENT', (comment, efnID, roomID) => {
        console.log(comment)
        var old_efns = rooms[roomID].flight_notes;
        var updated_efns = old_efns.map(efn => {
            if (efn.ID === efnID) {
                efn.add_comment(comment);
                console.log(efn);
            }
            return efn;
        })
        rooms[roomID].flight_notes = updated_efns;
        io.in(roomID).emit('UPDATE_REPORTS', rooms[roomID].flight_notes)
        io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) added a new comment to EFN (${efnID})`);
    })

    socket.on('FIRST_CONSOLE_OPEN', (opened_console) => {
        var roomID = players[socket.id].current_room;
        if (roomID === null) { return; }
        switch(opened_console) {
            case 'spartan-pc':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the SPARTAN Power Console display for the first time`);
                break;
            case 'spartan-etc':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the SPARTAN External Thermal Control display for the first time`);
                break;
            case 'cronus-cn':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the CRONUS Computer Network display for the first time`);
                break;
            case 'cronus-uhf':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the CRONUS UHF Comms display for the first time`);
                break;
            case 'cronus-sband':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the CRONUS S-Band Comms display for the first time`);
                break;
            case 'cronus-vc1':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the CRONUS Video Comms 1 display for the first time`);
                break;
            case 'cronus-vc2':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the CRONUS Video Comms 2 display for the first time`);
                break;
            case 'ethos-ls':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the ETHOS Life Support display for the first time`);
                break;
            case 'ethos-ts':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the ETHOS Thermal System display for the first time`);
                break;
            case 'ethos-rls':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the ETHOS Regenerative Life Support display for the first time`);
                break;
            case 'flight':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the FLIGHT display for the first time`);
                break;
            case 'capcom':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the CAPCOM display for the first time`);
                break;
            case 'bme-eva':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the BME EVA Suit display for the first time`);
                break;
            case 'bme-vs':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the BME Vital Signs display for the first time`);
                break;
            case 'efn':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the EFN modal for the first time`);
                break;
            case 'ostpv':
                io.to(rooms[roomID].host_id).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the OSTPV modal for the first time`);
                break;
        }
    })

    // NO MORE NEED FOR CALL REQUESTS AS THIS WAS REMOVED FROM REQUIREMENTS
    // socket.on('CALL_REQUEST', (target, sender, roomID) => {
    //     console.log(target, sender)
    //     console.log(rooms[roomID].consoles[target])
    //     var recipients = rooms[roomID].consoles[target];
    //     if (recipients.length === 1) {
    //         io.to(`${recipients[0]}`).emit("CALL_REQUESTED", sender, rooms[roomID].current_time.format("HH:mm:ss"));
    //     } else if (recipients.length === 2) {
    //         io.to(`${recipients[0]}`).emit("CALL_REQUESTED", sender, rooms[roomID].current_time.format("HH:mm:ss"));
    //         io.to(`${recipients[1]}`).emit("CALL_REQUESTED", sender, rooms[roomID].current_time.format("HH:mm:ss"));
    //     }
    // })
})

server.listen(port, () => console.log(`Listening on port ${port}`));

