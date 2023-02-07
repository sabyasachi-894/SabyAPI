
const mongoose = require("mongoose");

uri = "mongodb+srv://sabyasachi:JCZ8iyJhJiG4y8ZN@sabyapi.hjr9rxx.mongodb.net/?retryWrites=true&w=majority"

const connectDB = () => {
    console.log("Connected to Database");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connectDB;