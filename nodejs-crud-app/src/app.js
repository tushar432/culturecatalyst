const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const resource1Routes = require('./routes/resource1Routes');
const resource2Routes = require('./routes/resource2Routes');
const authMiddleware = require('./middlewares/authMiddleware');
const {errorHandler} = require('./middlewares/errorMiddleware');
const messageHandler = require('./controllers/socketController');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
// app.use(authMiddleware);

app.use('/api/resource1', resource1Routes); 
app.use('/api/resource2', resource2Routes);

app.use(errorHandler);

messageHandler(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});