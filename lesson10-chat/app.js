'use strict';

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);
const api = require('./api.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/', api);

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('send message', (msg) => {
    io.emit('get message', msg);
  });
});

server.listen(8000, () => {
  console.log('Listening on port 8000');
});
