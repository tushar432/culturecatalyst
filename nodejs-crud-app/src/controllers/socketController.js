module.exports = function(io) {
    // Handle new connections
    io.on('connection', (socket) => {
        console.log('User connected');

        // Handle the 'chat message' event
        socket.on('clientMessage', (msg) => {
            console.log('Message from client:', msg);

            // Emit a message to all connected clients
            io.emit('serverMessage', msg);
        });

        // Handle disconnect event
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};





// // messageHandler.js
// module.exports = function(io) {
//     // Store the list of connected clients with their socket ids
//     const clients = {};

//     io.on('connection', (socket) => {
//         console.log('User connected:', socket.id);

//         // Store the client by their socket id
//         clients[socket.id] = socket;

//         // Listen for a 'private message' event from a client
//         socket.on('private message', (targetSocketId, msg) => {
//             console.log(`Sending private message to ${targetSocketId}: ${msg}`);

//             // Check if the target socket id exists
//             if (clients[targetSocketId]) {
//                 // Send the message to the specific client
//                 clients[targetSocketId].emit('private message', msg);
//             } else {
//                 console.log(`Client with id ${targetSocketId} not found`);
//             }
//         });

//         // Listen for disconnect events and remove the client from the list
//         socket.on('disconnect', () => {
//             console.log('User disconnected:', socket.id);
//             delete clients[socket.id];
//         });
//     });
// };
