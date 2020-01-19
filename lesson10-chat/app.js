'use strict';

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);
const api = require('./api.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

// view ejs engine
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use('/', api);

server.listen(8000, () => {
  console.log('Listening on port 8000');
});
