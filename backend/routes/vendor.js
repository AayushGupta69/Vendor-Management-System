const express = require("express");
const {vendorExists, createVendor, vendor, verifyPassword} = require("../database");
const zodVendor = require("../zod/zod-vendor");
const signInBody = require("../zod/signInBody");
const jwt = require("jsonwebtoken");
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

router.post("/signin", async (req, res) => {
    try {
        const {success, data} = signInBody.safeParse(req.body);
        if(!success){
            return res.status(400).json({message: "Invalid vendorCode or password"});
        }

        const existingVendor = await vendorExists(data);
        if(!existingVendor){
            return res.status(404).json({message: "Vendor doesn't exists. Please signup first."});
        }

        const verified = await verifyPassword(data.password, existingVendor.password);
        if(!verified){
            return res.status(403).json({message: "Incorrect password. Please double-check your password and try again."})
        }

        const token = jwt.sign({vendorCode: existingVendor.vendorCode}, process.env.JWT_SECRET);

        return res.status(200).json({token});
    }
    catch (e) {
        console.error("Error during sign-in: ", e);
        return res.status(500).json({message: "Failed to sign in."});
    }
})

router.get("/:vendorCode", async (req, res) => {
    try {
        const vendorCode = req.params.vendorCode;
        const foundVendor = await vendor.findOne({vendorCode});
        if(!foundVendor){
            return res.status(404).json({message: "Vendor not found."});
        }

        return res.status(200).json({foundVendor});
    }
    catch (e) {
        console.error("Error during retrieving vendor details", e);
        return res.status(500).json({message: "Failed to retrieve vendor details."});
    }
})

module.exports = router;
