"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    id: { type: String, default: uuid_1.v4, unique: true },
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    stockQuantity: { type: Number, required: true },
    images: { type: [String], required: true },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});
const productModel = (0, mongoose_1.model)('Product', productSchema);
exports.default = productModel;
