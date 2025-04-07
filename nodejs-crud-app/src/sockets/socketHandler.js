const socketIO = require('socket.io');

const socketHandler = (server) => {
    const io = socketIO(server);

    io.on('connection', (socket) => {
        console.log('New client connected');

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });

        // Add more socket event handlers here
        socket.on('testEvent', (data) => {
            console.log('Received testEvent:', data);
            // Handle the event
            socket.emit('testResponse', { message: 'Response from server' });
        });
    });

    return io;
};

module.exports = socketHandler;