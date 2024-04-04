const express = require("express");
const zodPurchaseOrder = require("../zod/zod-purchaseOrder");
const {purchaseOrderExists, createPurchaseOrder} = require("../database");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const {success, data} = zodPurchaseOrder.safeParse(req.body);
        if(!success){
            return res.status(400).json({message: "Invalid purchase order data"});
        }

        const existingPurchaseOrder = await purchaseOrderExists(data);
        if(existingPurchaseOrder){
            return res.status(403).json({message: "Purchase order already exists"});
        }

        const newPurchaseOrder = await createPurchaseOrder(data);

        return res.status(201).json({message: "Purchase order created successfully", purchaseOrder: newPurchaseOrder});
    }
    catch (e) {
        console.error("Error creating purchase order:", e);
        return res.status(500).json({message: "Failed to create purchase order"});
    }
})

module.exports = router;
