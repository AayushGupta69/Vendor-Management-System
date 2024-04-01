const express = require("express");
const {vendorExists, createVendor} = require("../database");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const existingVendor = await vendorExists(req.body);
        if(existingVendor){
            return res.status(403).json({message: "Vendor already exists"});
        }

        const newVendor = createVendor(req.body);

        return res.status(201).json({message: "Vendor created successfully", vendor: newVendor});
    }
    catch (e) {
        console.error("Error creating vendor:", e);
        return res.status(500).json({message: "Failed to create vendor"});
    }
})

router.get("/", async (req, res) => {

})

module.exports = router;
