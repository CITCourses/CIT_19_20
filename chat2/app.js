'use strict';

const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./api.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', api);

const start = async () => {
  try {

    await mongoose.connect(config.get('mongoUri'), { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    const PORT = config.get('port') || 8000;
    app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

start();
