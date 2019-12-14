'use strict';

module.exports = function (req, res, next) {
  if (req.cookies && req.cookies.id)
    next();
  else 
    res.redirect('/login');
};
