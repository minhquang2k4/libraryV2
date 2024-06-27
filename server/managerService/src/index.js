const express = require('express');
const app = express();
const dotenv = require('dotenv');
// const db = require('./config/database.js');
dotenv.config();
// db.connect();

const port = process.env.PORT || 8003;

app.get('/', (req, res) => {
    res.send('manager!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});