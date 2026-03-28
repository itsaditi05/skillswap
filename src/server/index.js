const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:5173" } // Your Vite App URL
});

// 1. Connect to MongoDB
mongoose.connect('your_mongodb_connection_string');

// 2. Define Message Schema
const CommunityMsg = mongoose.model('CommunityMsg', {
  sender: String,
  text: String,
  timestamp: { type: Date, default: Date.now }
});

io.on('connection', (socket) => {
  // 1. Send previous community history when someone opens the tab
  CommunityMsg.find().sort({ timestamp: 1 }).limit(50).then(msgs => {
    socket.emit('community_history', msgs);
  });

  // 2. Listen for Community Messages
  socket.on('send_community_msg', async (data) => {
    const newMsg = new CommunityMsg(data);
    await newMsg.save();
    io.emit('receive_community_msg', data); // Broadcast to EVERYONE
  });
});

// 3. Socket.io "Telephone Line" Logic
io.on('connection', (socket) => {
  console.log('User Connected:', socket.id);

  // Send old messages to the user when they join
  Message.find().then(msgs => socket.emit('previous_messages', msgs));

  // Listen for a new message
  socket.on('send_message', async (data) => {
    const newMessage = new Message(data);
    await newMessage.save(); // Save to Mongo
    io.emit('receive_message', data); // Broadcast to EVERYONE
  });
});

server.listen(3001, () => console.log("Server running on port 3001"));