require('dotenv').config();
const mongoose = require("mongoose");
const vendorSchema = require('./vendor');
const purchaseOrderSchema = require("./purchaseOrder");

async function connectToMongoDB(){
    try {
        await mongoose.connect(process.env.URL);
        console.log("Connected to MongoDB...");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
}

const vendor = mongoose.model("Vendor", vendorSchema);
const purchaseOrder = mongoose.model("Purchase Order", purchaseOrderSchema);

module.exports = {
    connectToMongoDB,
    vendor,
    purchaseOrder
}
