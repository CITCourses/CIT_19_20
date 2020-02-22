'use strict';

const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

module.exports.post = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) 
      return res.status(400).json({
        errors: errors.array(),
        message: 'Данные не валидны!'
      });

    const { username, email, password } = req.body;

    const isUserExists = await User.findOne({ username });
    if (isUserExists)
      return res.status(400).json({ message: 'Такой пользователь уже существует!' });

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ username, email, password: hashedPassword });

    await user.save();

    res.json({ message: 'Пользователь успешно зарегистрирован!' });

  } catch (err) {
    return next(err);
  }
};
