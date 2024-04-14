const zod = require("zod");

const zodPurchaseOrder = zod.object({
    poNumber: zod.string(),
    vendor: zod.string(),
    orderDate: zod.date().optional(),
    deliveryDate: zod.date(),
    expectedDeliveryDate: zod.date(),
    items: zod.object({}),
    quantity: zod.number(),
    status: zod.enum(["pending", "completed", "canceled"]).optional(),
    qualityRating: zod.number().optional(),
    issueDate: zod.date().optional(),
    acknowledgementDate: zod.date().optional()
})

module.exports = zodPurchaseOrder;
