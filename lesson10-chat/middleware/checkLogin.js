'use strict';

module.exports = function (req, res, next) {
  if (!req.cookies.id)
    return res.redirect('/login');
    
    next();
};
