import { catchAsync } from '../../utils/catchAsync';
import { productServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const productData = req.body;

  const product = await productServices.createProduct(productData);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'products created successfully',
    data: product,
  });
});

export const productController = {
  createProduct,
};
