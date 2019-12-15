'use strict';

const path = require('path');

module.exports.get = function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'chat.html'));
};
