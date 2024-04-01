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

async function createVendor(name, contactDetails, address, vendorCode, onTimeDeliveryRate = 0, qualityRatingAvg = 0, averageResponseTime = 0, fulfillmentRate = 0){
    return await vendor.create({
        name,
        contactDetails,
        address,
        vendorCode,
        onTimeDeliveryRate,
        qualityRatingAvg,
        averageResponseTime,
        fulfillmentRate
    });
}

module.exports = {
    connectToMongoDB,
    vendor,
    purchaseOrder,
    historicalPerformance,
    createVendor
}
