import { Router } from 'express';
import { productRouter } from '../modules/Products/product.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: productRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
