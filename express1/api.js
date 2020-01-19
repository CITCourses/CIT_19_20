'use strict';

const express = require('express');
const router = express.Router();

router.get('/', require('./controllers/home.js').get);

module.exports = router;
