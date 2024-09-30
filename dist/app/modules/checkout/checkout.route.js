"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutRouter = void 0;
const express_1 = require("express");
const checkout_controller_1 = require("./checkout.controller");
const router = (0, express_1.Router)();
router.post('/checkout', checkout_controller_1.checkoutController.createOrder);
exports.checkoutRouter = router;
