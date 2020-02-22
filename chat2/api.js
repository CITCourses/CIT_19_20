'use strict';

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

router.post(
  '/auth/register', 
  [
    check('email', 'Здесь должна быть почта!').isEmail(),
    check('password', 'Пароль должен быть минимум 6 символов').isLength({ min: 6 }),
  ], 
  require('./controllers/register.js').post);

module.exports = router;
