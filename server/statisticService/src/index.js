const express = require('express');
const app = express();
const port = 8002;

app.get('/', (req, res) => {
    res.send('StatisticService!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});