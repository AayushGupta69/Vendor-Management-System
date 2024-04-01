const zod = require("zod");

const zodVendor = zod.object({
    name: zod.string().max(30),
    contactDetails: zod.string(),
    address: zod.string(),
    vendorCode: zod.string(),
    onTimeDeliveryRate: zod.number().optional(),
    qualityRatingAvg: zod.number().optional(),
    averageResponseTime: zod.number().optional(),
    fulfillmentRate: zod.number().optional()
})

module.exports = zodVendor;