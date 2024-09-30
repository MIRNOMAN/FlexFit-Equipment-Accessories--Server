"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsValidation = void 0;
const zod_1 = require("zod");
const productSchema = zod_1.z.object({
    name: zod_1.z.string(),
    price: zod_1.z.number(),
    stockQuantity: zod_1.z.number().int(),
    description: zod_1.z.string(),
    images: zod_1.z.array(zod_1.z.string()),
    category: zod_1.z.string(),
    isDeleted: zod_1.z.boolean().optional(),
});
const updateproductSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    price: zod_1.z.number().optional(),
    stockQuantity: zod_1.z.number().int().optional(),
    description: zod_1.z.string().optional(),
    category: zod_1.z.string().optional(),
    isDeleted: zod_1.z.boolean().optional(),
});
exports.productsValidation = {
    productSchema,
    updateproductSchema,
};
