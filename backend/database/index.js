require('dotenv').config();
const mongoose = require("mongoose");
const vendorSchema = require('./vendor');
const purchaseOrderSchema = require("./purchaseOrder");
const historicalPerformanceSchema = require("./historicalPerformance");

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
const historicalPerformance = mongoose.model("Historical Performance", historicalPerformanceSchema);

module.exports = {
    connectToMongoDB,
    vendor,
    purchaseOrder,
    historicalPerformance
}
