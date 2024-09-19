import { Router } from 'express';
import { productController } from './product.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { productsValidation } from './product.validations';

const router = Router();

router.post(
  '/',
  validateRequest(productsValidation.ProductSchema),
  productController.createProduct,
);

export const productRouter = router;
