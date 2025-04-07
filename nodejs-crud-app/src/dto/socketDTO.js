module.exports = {
    connectSocket: (socket) => {
        return {
            id: socket.id,
            userId: socket.userId,
            connectedAt: new Date(),
        };
    },
    disconnectSocket: (socket) => {
        return {
            id: socket.id,
            disconnectedAt: new Date(),
        };
    },
    emitMessage: (message) => {
        return {
            content: message.content,
            senderId: message.senderId,
            timestamp: new Date(),
        };
    },
};