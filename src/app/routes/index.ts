import { checkoutRouter } from './../modules/checkout/checkout.route';
import { Router } from 'express';
import { productRouter } from '../modules/Products/product.route';
import { AuthRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: productRouter,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '',
    route: checkoutRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
