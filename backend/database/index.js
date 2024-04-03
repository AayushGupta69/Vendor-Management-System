require('dotenv').config();
const mongoose = require("mongoose");
const vendorSchema = require('./vendor');
const purchaseOrderSchema = require("./purchaseOrder");
const historicalPerformanceSchema = require("./historicalPerformance");
const bcrypt = require('bcrypt');

async function connectToMongoDB(){
    try {
        await mongoose.connect(process.env.URL);
        console.log("Connected to MongoDB...");
    } catch (e) {
        console.log("MongoDB connection error:", e);
    }
}

const vendor = mongoose.model("Vendor", vendorSchema);
const purchaseOrder = mongoose.model("Purchase Order", purchaseOrderSchema);
const historicalPerformance = mongoose.model("Historical Performance", historicalPerformanceSchema);

async function vendorExists({vendorCode}){
    return vendor.findOne({vendorCode: vendorCode});
}

async function hashPassword(password, saltRounds){
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
           if(err){
               console.error("Error hashing password: ", err);
               reject();
           }
           else{
               resolve(hash);
           }
        });
    })
}

async function verifyPassword(password, hash){
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if(err){
                console.error("Error verifying password: ", err);
                reject();
            }
            else{
                resolve(result);
            }
        })
    })
}

async function createVendor({name, contactDetails, address, vendorCode, password, onTimeDeliveryRate = 0, qualityRatingAvg = 0, averageResponseTime = 0, fulfillmentRate = 0}){
    const hashPass = await hashPassword(password, 10);
    return await vendor.create({
        name,
        contactDetails,
        address,
        vendorCode,
        password: hashPass,
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
    vendorExists,
    createVendor,
    hashPassword,
    verifyPassword
}
