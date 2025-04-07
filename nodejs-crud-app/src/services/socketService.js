exports.initializeSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('A user connected: ' + socket.id);

        socket.on('disconnect', () => {
            console.log('User disconnected: ' + socket.id);
        });

        // Additional socket event handlers can be added here
    });
};

exports.emitEvent = (eventName, data) => {
    io.emit(eventName, data);
};