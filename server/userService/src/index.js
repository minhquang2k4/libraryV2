const express = require('express');
const app = express();
const port = 8003;

app.get('/', (req, res) => {
    res.send('userService!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});