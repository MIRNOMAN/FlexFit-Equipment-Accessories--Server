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
exports.checkoutController = exports.createOrder = void 0;
const checkout_service_1 = require("./checkout.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cartItems, user, paymentMethod } = req.body;
    try {
        if (paymentMethod !== 'COD') {
            return res.status(400).json({
                success: false,
                message: 'Only Cash on Delivery is supported',
            });
        }
        // Prepare order data
        const orderData = {
            cartItems,
            user,
            paymentMethod,
        };
        // Place the order using the service
        const order = yield checkout_service_1.checkoutService.placeOrder(orderData);
        return res.status(200).json({
            success: true,
            message: 'Order placed successfully',
            order,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error placing order',
            error: error,
        });
    }
});
exports.createOrder = createOrder;
exports.checkoutController = {
    createOrder: exports.createOrder,
};
