'use strict';

module.exports = (req, res, next) => {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
  const Schema = mongoose.Schema;

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

// dancing