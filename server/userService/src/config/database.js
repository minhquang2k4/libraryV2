const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://minhwang1708:1!Balabala@borrowbook.daakl9a.mongodb.net/borrowBook?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed");
    }
}

module.exports = { connect };