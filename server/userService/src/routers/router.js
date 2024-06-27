const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('user!');
});

router.use('/api/v1', require('./api.js'));

module.exports = router;