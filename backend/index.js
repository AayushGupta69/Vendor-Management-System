const express = require("express");
const { connectToMongoDB } = require("./database");
const rootRouter = require("./routes/index");
const app = express();

app.use("/api", rootRouter);

connectToMongoDB();

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
