'use strict';

const express = require('express');
const router = express.Router();
const checkLogin = require('./middleware/checkLogin.js');
const path = require('path');


router.get('/', checkLogin, require('./controllers/chat.js').get);
router.get('/login', require('./controllers/login.js').get);
router.post('/login', require('./controllers/login.js').post);

module.exports = router;