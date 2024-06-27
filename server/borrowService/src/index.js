const express = require('express');
const app = express();
const dotenv = require('dotenv');
// const db = require('./config/database.js');
dotenv.config();
// db.connect();

const port = process.env.PORT || 8002;

app.get('/', (req, res) => {
    res.send('borrow!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});