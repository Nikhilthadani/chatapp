const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const EVENTS = require("./constants");
const app = express();
const server = http.createServer(app);

const io = new Server(server);

const userSocketsMap = {};
const chats = {};

function getAllConnetcedUsers(id) {
  return Array.from(io.sockets.adapter.rooms.get(id)).map((socketId) => {
    return {
      socketId,
      username: userSocketsMap[socketId],
    };
  });
}

io.on("connection", (socket) => {
  console.log(socket.id);

  // listen for the events forim this socket
  socket.on(EVENTS.JOIN, ({ roomId, username }) => {
    userSocketsMap[socket.id] = username;
    socket.join(roomId);

    // get all users in same room ID
    const users = getAllConnetcedUsers(roomId);
    users.forEach(({ socketId }) => {
      io.to(socketId).emit(EVENTS.JOINED, {
        users,
        username,
        socketId: socket.id,
        roomChats: chats[roomId] || [],
      });
    });
  });

  socket.on(EVENTS.NEW_CHAT, ({ roomId, username, message }) => {
    console.log(username, ": ", message);
    if (!chats[roomId]) {
      chats[roomId] = [];
    }
    chats[roomId] = [...chats[roomId], { username, message }];

    // emit a new event
    io.to(roomId).emit(EVENTS.BROADCAST_MSG, {
      roomId,
      username,
      chats: chats[roomId],
    });
  });

  socket.on(EVENTS.CHECK_OLD_CHATS, ({ roomId }) => {
    io.to(roomId).emit(EVENTS.RECEIVE_OLD_CHATS, { oldChats: chats[roomId] });
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("Server is Listening On Port ", PORT));
