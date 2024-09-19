import { catchAsync } from '../../utils/catchAsync';
import { productServices } from './product.service';
import { productsValidation } from './product.validations';

const createProduct = catchAsync(async (req, res) => {
  const productData = req.body;

  const validation = productsValidation.productSchema.safeParse(productData);

  if (!validation.success) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: 'Invalid product data',
      error: validation.error.errors,
    });
  }

  const product = await productServices.createProduct(productData);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'products created successfully',
    data: product,
  });
  return product;
});

export const productController = {
  createProduct,
};
