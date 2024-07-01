const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller.js');

router.post('/type', controller.createType);
router.post('/genre', controller.createGenre);

module.exports = router;