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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const product_service_1 = require("./product.service");
const product_validations_1 = require("./product.validations");
const createProduct = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_service_1.productServices.createProduct(req.body);
    if (!product) {
        return res.status(404).json({
            success: false,
            statusCode: 404,
            message: 'product not found',
            data: [],
        });
    }
    return res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'product created successfully',
        data: product,
    });
}));
const getAllProducts = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_service_1.productServices.findAllProducts();
    if (product.length === 0) {
        res.status(404).json({
            success: false,
            message: 'No Data Found',
            data: [],
        });
    }
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Product retrieved successfully',
        data: product,
    });
}));
const getProductById = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_service_1.productServices.findProductById(id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found',
            data: [],
        });
    }
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Product retrieved successfully',
        data: product,
    });
}));
const updateProduct = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateData = product_validations_1.productsValidation.updateproductSchema.parse(req.body);
    const product = yield product_service_1.productServices.updateProductById(id, updateData);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found',
            data: [],
        });
    }
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Product updated successfully',
        data: product,
    });
}));
const deleteProduct = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteProduct = yield product_service_1.productServices.deleteProductById({
        params: { id: req.params.id },
    });
    if (!deleteProduct) {
        return res.status(404).json({
            success: false,
            statusCode: 404,
            message: 'Product not found',
        });
    }
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Product updated successfully',
        data: deleteProduct,
    });
}));
exports.productController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
