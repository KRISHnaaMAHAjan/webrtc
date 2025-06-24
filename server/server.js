const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "*", // for development — restrict in production
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-joined', socket.id);
  });

  socket.on('send-offer', ({ offer, roomId }) => {
    socket.to(roomId).emit('receive-offer', offer);
  });

  socket.on('send-answer', ({ answer, roomId }) => {
    socket.to(roomId).emit('receive-answer', answer);
  });

  socket.on('send-ice', ({ ice, roomId }) => {
    socket.to(roomId).emit('receive-ice', ice);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Signaling server running on port ${PORT}`);
});
