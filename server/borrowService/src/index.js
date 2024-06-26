const express = require('express');
const app = express();
const port = 8001;

app.get('/', (req, res) => {
    res.send('BorrowService!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});