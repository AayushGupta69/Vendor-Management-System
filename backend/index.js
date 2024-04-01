const express = require("express");
const { connectToMongoDB } = require("./database");

const app = express();

connectToMongoDB();

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
