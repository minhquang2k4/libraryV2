const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller.js');

router.post('/books', controller.createBook);

module.exports = router;