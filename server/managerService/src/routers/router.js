const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('manager service is running');
}); 

router.use('/api/v1', require('./api.js'));

module.exports = router;