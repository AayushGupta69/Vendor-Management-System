require('dotenv').config();
const mongoose = require("mongoose");

async function connectToMongoDB(){
    try {
        await mongoose.connect(process.env.URL);
        console.log("Connected to MongoDB...");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
}

module.exports = {
    connectToMongoDB
}
