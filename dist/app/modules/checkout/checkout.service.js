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
exports.checkoutService = void 0;
const product_model_1 = __importDefault(require("../Products/product.model"));
const checkout_model_1 = __importDefault(require("../checkout/checkout.model"));
const placeOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    let totalPrice = 0;
    // Check product stock availability and update it
    for (const item of orderData.cartItems) {
        const product = yield product_model_1.default.findById(item.productId);
        if (!product || product.stockQuantity < item.quantity) {
            throw new Error(`Product ${item.productId} is out of stock`);
        }
        // Calculate total price
        totalPrice += product.price * item.quantity;
        // Reduce product stock
        product.stockQuantity -= item.quantity;
        yield product.save();
    }
    // Add the calculated totalPrice to the order
    const orderWithPrice = Object.assign(Object.assign({}, orderData), { totalPrice });
    // Create the order
    const order = new checkout_model_1.default(orderWithPrice);
    yield order.save();
    return order;
});
exports.checkoutService = {
    placeOrder,
};
