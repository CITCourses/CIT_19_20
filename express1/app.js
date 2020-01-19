'use strict';

const express = require('express');
const app = express();
const path = require('path');
const api = require('./api.js');

app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', api);

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
