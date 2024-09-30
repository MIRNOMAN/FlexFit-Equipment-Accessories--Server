"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(product);
    return result;
});
const findProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findById(id);
    return result;
});
const findAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find({ isDeleted: false });
    return result;
});
const updateProductById = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndUpdate(id, updateData, {
        new: true,
    });
    return result;
});
const deleteProductById = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = input.params;
    const result = yield product_model_1.default.findById(id);
    if (!result) {
        throw new Error('Service not found');
    }
    result.isDeleted = true; // Soft delete
    yield result.save();
    return result;
});
exports.productServices = {
    createProduct,
    findProductById,
    findAllProducts,
    updateProductById,
    deleteProductById,
};
