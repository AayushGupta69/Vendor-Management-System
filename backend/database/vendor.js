const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    contactDetails: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    vendorCode: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    onTimeDeliveryRate: Number,
    qualityRatingAvg: Number,
    averageResponseTime: Number,
    fulfillmentRate: Number
})

module.exports = vendorSchema;
