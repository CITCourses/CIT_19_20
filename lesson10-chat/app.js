'use strict';

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('send message', (msg) => {
    io.emit('get message', msg);
  });
});

server.listen(8000, () => {
  console.log('Listening on port 8000');
});
