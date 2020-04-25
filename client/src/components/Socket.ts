import ioclient from 'socket.io-client';

const endpoint = 'http://127.0.0.1:4001';
const socket = ioclient(endpoint, { transports: ['websocket']});

export default socket;