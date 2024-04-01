const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
    poNumber: {
        type: String,
        unique: true,
        required: true
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vendor",
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    expectedDeliveryDate: {
        type: Date,
        required: true
    },
    items: {
        type: JSON,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    qualityRating: Number,
    issueDate: {
        type: Date,
        required: true
    },
    acknowledgementDate: Date 
})

module.exports = purchaseOrderSchema;
