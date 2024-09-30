"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkout_route_1 = require("./../modules/checkout/checkout.route");
const express_1 = require("express");
const product_route_1 = require("../modules/Products/product.route");
const user_route_1 = require("../modules/user/user.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/products',
        route: product_route_1.productRouter,
    },
    {
        path: '/auth',
        route: user_route_1.AuthRoutes,
    },
    {
        path: '',
        route: checkout_route_1.checkoutRouter,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
