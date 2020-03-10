const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 4001;
const index = require('./routes/index');

app.use(index);

io.on('connection', socket => {
    console.log('client has connected');
    console.log(io.sockets.adapter.rooms);
    socket.emit('message', 'a new player has joined');

    socket.on('get rooms', (cb) => {
        console.log('Get rooms request received')
        cb(io.sockets.adapter.rooms);
    })

    socket.on('get consoles', (lobbyID, cb) => {
        console.log('Get consoles request received')
        console.log(io.sockets.adapter.rooms[lobbyID].consoles);
        cb(io.sockets.adapter.rooms[lobbyID].consoles)
    })

    socket.on('create room', lobbyID => {
        console.log('Create room request received. Room name: ' + lobbyID);
        socket.username = 'display';
        socket.lobbyID = lobbyID
        socket.join(lobbyID);
        io.sockets.adapter.rooms[lobbyID].consoles = {
            cosmo: false,
            spartan: false,
            cronus: false,
            ethos: false,
            payload: false,
            ops: false,
            adco: false,
            robo: false,
            eva: false,
            bme: false,
            flight: false,
            capcom: false
        };
        console.log(io.sockets.adapter.rooms);
    })

    socket.on('join room', (lobbyID, username) => {
        console.log('Join room request received. Room name: ' + lobbyID);
        socket.username = username;
        socket.lobbyID = lobbyID;
        socket.join(lobbyID);
        io.sockets.adapter.rooms[lobbyID].consoles[username] = true;
        io.in(lobbyID).emit('update consoles', io.sockets.adapter.rooms[lobbyID].consoles);
    })

    socket.on('host leave room', (lobbyID) => {
        console.log('Host leave room request received. Closing room name: ' + lobbyID);
        socket.username = null;
        socket.lobbyID = null;
        socket.to(lobbyID).emit('host disconnect', lobbyID);
        socket.leave(lobbyID);
    })

    socket.on('leave room', (lobbyID, username) => {
        console.log('Leave room request received. Room name: ' + lobbyID + '. User role: ' + username);
        socket.username = null;
        socket.lobbyID = null;
        if (username !== 'display' || username !== false) {
            io.sockets.adapter.rooms[lobbyID].consoles[username] = false;
        }
        io.in(lobbyID).emit('update consoles', io.sockets.adapter.rooms[lobbyID].consoles);
        socket.leave(lobbyID);
    })
})

server.listen(port, () => console.log(`Listening on port ${port}`));

