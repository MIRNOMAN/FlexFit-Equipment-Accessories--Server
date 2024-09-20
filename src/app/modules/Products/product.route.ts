import { Router } from 'express';
import { productController } from './product.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { productsValidation } from './product.validations';

const router = Router();

router.post(
  '/',
  //   validateRequest(productsValidation.ProductSchema),
  productController.createProduct,
);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export const productRouter = router;
