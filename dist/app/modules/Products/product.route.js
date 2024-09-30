"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
router.post('/', 
//   validateRequest(productsValidation.ProductSchema),
product_controller_1.productController.createProduct);
router.get('/', product_controller_1.productController.getAllProducts);
router.get('/:id', product_controller_1.productController.getProductById);
router.put('/:id', product_controller_1.productController.updateProduct);
router.delete('/:id', product_controller_1.productController.deleteProduct);
exports.productRouter = router;
