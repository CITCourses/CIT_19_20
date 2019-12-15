'use strict';

const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
const Schema = mongoose.Schema;

module.exports.get = function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
};

module.exports.post = function (req, res, next) {
  const User = mongoose.model('User', Schema({
    name: String,
    lastname: String,
    username: String
  }, { collection: 'users' }));

  (async () => {

    console.log(await User.find());
  })();


  console.log(req.body.name);
};

