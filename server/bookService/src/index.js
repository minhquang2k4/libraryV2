const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/database.js');

dotenv.config();
db.connect();

const port = process.env.PORT || 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(require("./routers/router.js"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});