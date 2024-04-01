const express = require("express");
const {vendorExists, createVendor, vendor} = require("../database");
const zodVendor = require("../zod/zod-vendor");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const {success, data} = zodVendor.safeParse(req.body);
        if(!success){
            return res.status(400).json({message: "Invalid vendor data"});
        }

        const existingVendor = await vendorExists(data);
        if(existingVendor){
            return res.status(403).json({message: "Vendor already exists"});
        }

        const newVendor = await createVendor(data);

        return res.status(201).json({message: "Vendor created successfully"});
    }
    catch (e) {
        console.error("Error creating vendor:", e);
        return res.status(500).json({message: "Failed to create vendor"});
    }
})

router.get("/", async (req, res) => {
    try {
        const vendors = await vendor.find({});
        return res.status(200).json({vendors});
    }
    catch (e) {
        console.error("Error fetching vendors:", e);
        return res.status(500).json({ message: "Failed to fetch vendors" });
    }
})

module.exports = router;
