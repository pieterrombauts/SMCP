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
        this._tutors = [];
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
    get tutors() { return this._tutors }
    get consoles() { return this._consoles }
    get player_count() { return this._player_count }
    get in_progress() { return this._in_progress }
    get flight_notes() { return this._flight_notes }
    get events() { return this._events }
    get current_time() { return this._current_time }
    get time_interval_id() { return this._time_interval_id }
    set room_id(new_room_id) { if (new_room_id) this._room_id = new_room_id }
    set host_id(new_host_id) { if (new_host_id) this._host_id = new_host_id }
    set tutors(new_tutors) { if (new_tutors) this._tutors = new_tutors }
    set consoles(new_consoles) { if (new_consoles) this._consoles = new_consoles }
    set player_count(new_player_count) { if (new_player_count) this._player_count = new_player_count }
    set in_progress(new_in_progress) { if (new_in_progress) this._in_progress = new_in_progress }
    set flight_notes(new_flight_notes) { if (new_flight_notes) this._flight_notes = new_flight_notes }
    set events(new_events) { if (new_events) this._events = new_events }
    set current_time(new_current_time) { if (new_current_time) this._current_time = new_current_time }
    set time_interval_id(new_time_interval_id) { if (new_time_interval_id) this._time_interval_id}
    add_position(position, value)  { this._consoles[position] = [ ...this._consoles[position], value ] }
    remove_position(position, value) { this._consoles[position] = this._consoles[position].filter(e => e !== value) }
    add_tutor(value)  { this._tutors = [ ...this._tutors, value ] }
    remove_tutor(value) { this._tutors = this._tutors.filter(e => e !== value) }
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
    // When a new client connects to socket, create a new player instance to store their data.
    var new_client = new Player(socket.id);
    players[socket.id] = new_client;
    console.log('Client has connected with socketID: ' + socket.id);

    // ------------------------------------------------------------------------------------------------
    // Socket event to get list of currently existing rooms.
    // Used to ensure generated room code is unique and there are no duplicate rooms.
    socket.on('GET_ROOMS', (cb) => {
        console.log('GET_ROOMS request received. ' + rooms.length + ' rooms currently active.');
        cb(rooms);
    })

    // ------------------------------------------------------------------------------------------------
    // Socket event to get a count of how many users have selected each console for a specific room.
    // Used to style the console buttons to show availability (i.e. empty, striped, filled)
    socket.on('GET_CONSOLES', (roomID, cb) => {
        if (rooms.hasOwnProperty(roomID)) {
            console.log('GET_CONSOLES request received.');
            cb(rooms[roomID].consoles_taken());
        } else {
            console.error('GET_CONSOLES request error! Room ID does not exist in rooms object.')
            io.to(socket.id).emit('ROOMID_ERROR');
        }
    })

    // ------------------------------------------------------------------------------------------------
    // Socket event to get the current scenario time. This begins at 2019-11-15T15:00:00.
    // Used to update the OSTPV now indicator.
    socket.on('GET_CURRENT_TIME', (roomID, cb) => {
        if (rooms.hasOwnProperty(roomID)) {
            cb(rooms[roomID].current_time)
        } else {
            console.error('GET_CURRENT_TIME request error! Room ID: ' + roomID + ' does not exist in rooms object.')
            io.to(socket.id).emit('ROOMID_ERROR');
        }
    })

    // ------------------------------------------------------------------------------------------------
    // Socket event that creates a new room instance and stores this in the rooms object.
    // Used when the tutor clicks on tutor login and creates a new lab session.
    socket.on('CREATE_ROOM', (roomID) => {
        console.log('CREATE_ROOM request received with room ID: ' + roomID);
        socket.join(roomID);
        var new_room = new Room(roomID, socket.id);
        rooms[roomID] = new_room;
        players[socket.id].current_room = roomID;
        players[socket.id].name = 'HOST';
        players[socket.id].console = 'host';
        io.in(roomID).emit('UPDATE_CONSOLES', rooms[roomID].consoles_taken());
    })

    // ------------------------------------------------------------------------------------------------
    // Socket event that places a client into the correct socket room, and saves their player info such as name.
    // Used when a client clicks on student login and enters a username and room code.
    socket.on('JOIN_ROOM', (roomID, username) => {
        if (rooms.hasOwnProperty(roomID)) {
            console.log('JOIN_ROOM request received from: ' + username + ' with room ID: ' + roomID);
            socket.join(roomID);
            rooms[roomID].player_count = rooms[roomID].player_count + 1;
            players[socket.id].current_room = roomID;
            players[socket.id].name = username;
        } else {
            console.error('JOIN_ROOM request error!' + username + ' tried to join room with room ID ' + roomID + ' which does not exist in rooms object.')
            io.to(socket.id).emit('ROOMID_ERROR');
        }
    });

    // ------------------------------------------------------------------------------------------------
    // Socket event that places a client into the correct socket room, and saves their player info such as name.
    // Used when a client clicks on student login and enters a username and room code.
    socket.on('TUTOR_JOIN_ROOM', (roomID) => {
        if (rooms.hasOwnProperty(roomID)) {
            console.log('TUTOR_JOIN_ROOM request received with room ID: ' + roomID);
            socket.join(roomID);
            players[socket.id].current_room = roomID;
            players[socket.id].name = 'TUTOR';
            players[socket.id].console = 'tutor';
            rooms[roomID].add_tutor(socket.id);
        } else {
            console.error('TUTOR_JOIN_ROOM request error! Someone tried to join with room ID ' + roomID + ' which does not exist in rooms object.')
            io.to(socket.id).emit('ROOMID_ERROR');
        }
    });

    // ------------------------------------------------------------------------------------------------
    // Socket event that allows client to select which console they are playing as.
    // Used when a client clicks on student login and enters a username and room code.
    socket.on('SELECT_CONSOLE', (roomID, position) => {
        if (rooms.hasOwnProperty(roomID)) {
            console.log('SELECT_CONSOLE request received from: ' + players[socket.id].name + ' with room ID: ' + roomID + ' and console: ' + position);
            rooms[roomID].add_position(position, socket.id);
            players[socket.id].console = position;
            io.in(roomID).emit('UPDATE_CONSOLES', rooms[roomID].consoles_taken());
            if (rooms[roomID].in_progress === true) {
                socket.emit('SHOW_DISPLAY');
                socket.emit('UPDATE_REPORTS', rooms[roomID].flight_notes)
                io.in(roomID).emit('UPDATE_CONSOLE_USERS', rooms[roomID].console_users());
                io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} joined the lab session as ${position.toUpperCase()}`);
            }
        } else {
            console.error('SELECT_CONSOLE request error!' + players[socket.id].name + ' tried to select a console with room ID ' + roomID + ' which does not exist in rooms object.')
            io.to(socket.id).emit('ROOMID_ERROR');
        }
    })

    // ------------------------------------------------------------------------------------------------
    // Socket event that fires when a user leaves the lab session.
    // Used when a client clicks on cancel button to update their current room and console info.
    socket.on('LEAVE_ROOM', (roomID) => {
        if (rooms.hasOwnProperty(roomID)) {
            console.log('LEAVE_ROOM request received with position: ' + players[socket.id].console)
            if (['spartan', 'cronus', 'ethos', 'flight', 'capcom', 'bme'].includes(players[socket.id].console)) {
                rooms[roomID].remove_position(players[socket.id].console, socket.id);
                rooms[roomID].player_count = rooms[roomID].player_count - 1;
            } else if (players[socket.id].console === 'host') {
                rooms[roomID].host_id = null;
                socket.to(roomID).emit('HOST_LEFT', roomID);
                console.log('HOST_LEFT event emitted for room: ' + roomID)
            } else if (players[socket.id].console === 'tutor') {
                rooms[roomID].remove_tutor(socket.id);
            } else {
                console.error('LEAVE_ROOM request error!' + players[socket.id].name + ' tried to leave room ' + roomID + ' but was not a valid console.')
            }
            if (rooms[roomID].player_count === 0 && rooms[roomID].host_id === null) {
                clearInterval(rooms[roomID].time_interval_id)
                delete rooms[roomID];
            } else {
                socket.to(roomID).emit('UPDATE_CONSOLES', rooms[roomID].consoles_taken());
                io.in(roomID).emit('UPDATE_CONSOLE_USERS', rooms[roomID].console_users());
            }
            players[socket.id].name = null;
            players[socket.id].current_room = null;
            players[socket.id].console = null;
            socket.leave(roomID);
        } else {
            console.error('LEAVE_ROOM request error!' + players[socket.id].name + ' tried to leave room ' + roomID + ' which does not exist in rooms object.')
            io.to(socket.id).emit('ROOMID_ERROR');
        }
    })

    // ------------------------------------------------------------------------------------------------
    // Socket event that fires when a user disconnects the lab session.
    // Destroys player info unless disconnected due to ping timeout..
    socket.on('disconnect', (reason) => {
        console.log(socket.id + ' disconnected because of ' + reason);
        if (players[socket.id].current_room !== null) {
            const roomID = players[socket.id].current_room;
            if (rooms.hasOwnProperty(roomID)) {
                if (['spartan', 'cronus', 'ethos', 'flight', 'capcom', 'bme'].includes(players[socket.id].console)) {
                    rooms[roomID].remove_position(players[socket.id].console, socket.id);
                    rooms[roomID].player_count = rooms[roomID].player_count - 1;
                    socket.to(roomID).emit('UPDATE_CONSOLES', rooms[roomID].consoles_taken());
                    io.in(roomID).emit('UPDATE_CONSOLE_USERS', rooms[roomID].console_users());
                    io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) disconnected from the lab session`);
                } else if (players[socket.id].console === 'host') {
                    rooms[roomID].host_id = null;
                    socket.to(roomID).emit('HOST_LEFT', roomID);
                    console.log('HOST_LEFT event emitted for room: ' + roomID);
                } else if (players[socket.id].console === 'tutor') {
                    rooms[roomID].remove_tutor(socket.id);
                } else {
                    console.error('DISCONNECT error!' + players[socket.id].name + ' disconnected from ' + roomID + ' but was not a valid console.')
                }
                if (rooms[roomID].player_count === 0 && rooms[roomID].host_id === null) {
                    clearInterval(rooms[roomID].time_interval_id)
                    delete rooms[roomID];
                }
                socket.leave(roomID);
                delete players[socket.id];
                socket.emit('FORCE_DISCONNECT');
            }
        }
    })

    // ------------------------------------------------------------------------------------------------
    socket.on('GAME_START', (roomID) => {
        if (rooms.hasOwnProperty(roomID)) {
            var taken = rooms[roomID].consoles_taken();
            var total_consoles_taken = taken.spartan + taken.cronus + taken.ethos + taken.flight + taken.capcom + taken.bme;
            if (total_consoles_taken === rooms[roomID].player_count) {
                rooms[roomID].in_progress = true;
                io.in(roomID).emit('SHOW_DISPLAY');
                rooms[roomID].time_interval_id = setInterval(() => {
                    rooms[roomID].current_time = rooms[roomID].current_time.add(1, 'seconds');
                    io.in(roomID).emit('UPDATE_TIME', rooms[roomID].current_time.format("YYYY-MM-DDTHH:mm:ss"));
                }, 1000)
                io.in(roomID).emit('UPDATE_CONSOLE_USERS', rooms[roomID].console_users());
                io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + " - Lab session started");
            } else {
                io.to(socket.id).emit('STUDENT_NO_CONSOLE');
            }
        } else {
            console.error('GAME_START request error!' + players[socket.id].name + ' tried to start the session with room ID: ' + roomID + ' which does not exist in rooms object.')
            io.to(socket.id).emit('ROOMID_ERROR');
        }
    })

    // ------------------------------------------------------------------------------------------------
    socket.on('STATUS_REPORT', (values, roomID) => {
        if (rooms.hasOwnProperty(roomID)) {
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
            io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) submitted an EFN (${newEFNID}) with subject: ${values.subject}`);
        } else {
            console.error('STATUS_REPORT request error!' + players[socket.id].name + ' tried to submit an EFN in room ID: ' + roomID + ' which does not exist in rooms object.')
            io.to(socket.id).emit('ROOMID_ERROR');
        }
    })

    // ------------------------------------------------------------------------------------------------
    socket.on('UPDATE_EFN_STATUS', (efnID, newStatus) => {
        var roomID = players[socket.id].current_room;
        if (rooms.hasOwnProperty(roomID)) {
            var old_efns = rooms[roomID].flight_notes;
            var updated_efns = old_efns.map(efn => {
                if (efn.ID === efnID) {
                    efn.status = newStatus;
                }
                return efn;
            })
            rooms[roomID].flight_notes = updated_efns;
            io.in(roomID).emit('UPDATE_REPORTS', rooms[roomID].flight_notes)
            io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) updated EFN (${efnID}) with a new status: ${newStatus.toUpperCase()}`);
        } else {
            console.error('UPDATE_EFN_STATUS request error!' + players[socket.id].name + ' tried to update an EFN in room: ' + roomID + ' which does not exist in rooms object.')
            io.to(socket.id).emit('ROOMID_ERROR');
        }
    })

    // ------------------------------------------------------------------------------------------------
    socket.on('ADD_EFN_COMMENT', (comment, efnID, roomID) => {
        if (rooms.hasOwnProperty(roomID)) {
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
            io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) added a new comment to EFN (${efnID})`);
        } else {
            console.error('ADD_EFN_COMMENT request error!' + players[socket.id].name + ' tried to add a comment to an EFN in room: ' + roomID + ' which does not exist in rooms object.')
            io.to(socket.id).emit('ROOMID_ERROR');
        }
    })

    // ------------------------------------------------------------------------------------------------
    socket.on('UPDATE_EVENT_STATUS', (eventID, title, astronaut, newStatus) => {
        var roomID = players[socket.id].current_room;
        if (rooms.hasOwnProperty(roomID)) {
            io.in(roomID).emit('UPDATE_EVENTS', eventID, newStatus, rooms[roomID].current_time)
            io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) updated event (${astronaut}: ${title.substring(2)}) with a new status: ${newStatus.toUpperCase()}`);
        } else {
            console.error('UPDATE_EVENT_STATUS request error!' + players[socket.id].name + ' tried to update an OSTPV activity in room: ' + roomID + ' which does not exist in rooms object.')
            io.to(socket.id).emit('ROOMID_ERROR');
        }
    })

    // ------------------------------------------------------------------------------------------------
    socket.on('FIRST_CONSOLE_OPEN', (opened_console) => {
        var roomID = players[socket.id].current_room;
        if (rooms.hasOwnProperty(roomID)) { 
            if ((players[socket.id].console !== "host" && players[socket.id].console !== "tutor")) {
                switch(opened_console) {
                    case 'spartan-pc':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the SPARTAN Power Console display for the first time`);
                        break;
                    case 'spartan-etc':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the SPARTAN External Thermal Control display for the first time`);
                        break;
                    case 'cronus-cn':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the CRONUS Computer Network display for the first time`);
                        break;
                    case 'cronus-uhf':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the CRONUS UHF Comms display for the first time`);
                        break;
                    case 'cronus-sband':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the CRONUS S-Band Comms display for the first time`);
                        break;
                    case 'cronus-vc1':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the CRONUS Video Comms 1 display for the first time`);
                        break;
                    case 'cronus-vc2':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the CRONUS Video Comms 2 display for the first time`);
                        break;
                    case 'ethos-ls':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the ETHOS Life Support display for the first time`);
                        break;
                    case 'ethos-ts':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the ETHOS Thermal System display for the first time`);
                        break;
                    case 'ethos-rls':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the ETHOS Regenerative Life Support display for the first time`);
                        break;
                    case 'flight':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the FLIGHT display for the first time`);
                        break;
                    case 'capcom':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the CAPCOM display for the first time`);
                        break;
                    case 'bme-eva':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the BME EVA Suit display for the first time`);
                        break;
                    case 'bme-vs':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the BME Vital Signs display for the first time`);
                        break;
                    case 'efn':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the EFN modal for the first time`);
                        break;
                    case 'ostpv':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the OSTPV modal for the first time`);
                        break;
                    case 'event-modal':
                        io.in(roomID).emit('TUTOR_LOG', moment().format("YYYY-MM-DDTHH:mm:ss") + ` - ${players[socket.id].name} (${players[socket.id].console.toUpperCase()}) opened the Event Details modal for the first time`);
                        break;
                }
            }
        } else {
            console.error('FIRST_CONSOLE_OPEN request error!' + players[socket.id].name + ' opened a console for the first time in room: ' + roomID + ' which does not exist in rooms object.')
            io.to(socket.id).emit('ROOMID_ERROR');
        }
    })
})

server.listen(port, () => console.log(`Listening on port ${port}`));

