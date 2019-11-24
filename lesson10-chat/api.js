'use strict';

const express = require('express');
const router = express.Router();

router.post('/login', require('./controllers/login.js'));

module.exports = router;
