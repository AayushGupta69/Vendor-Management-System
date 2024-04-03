const zod = require("zod");

const updateBody = zod.object({
    name: zod.string().max(30).optional(),
    contactDetails: zod.string().optional(),
    address: zod.string().optional(),
    password: zod.string().min(8).optional(),
    onTimeDeliveryRate: zod.number().optional(),
    qualityRatingAvg: zod.number().optional(),
    averageResponseTime: zod.number().optional(),
    fulfillmentRate: zod.number().optional()
});

module.exports = updateBody;