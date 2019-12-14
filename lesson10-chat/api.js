'use strict';

const express = require('express');
const router = express.Router();

router.get('/login', require('./controllers/getLogin.js'));
router.post('/login', require('./controllers/postLogin.js'));

module.exports = router;
