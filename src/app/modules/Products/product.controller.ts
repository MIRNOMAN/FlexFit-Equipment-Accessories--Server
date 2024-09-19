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
});

const getAllProducts = catchAsync(async (req, res) => {
  const product = await productServices.findAllProducts();
  if (product.length === 0) {
    res.status(404).json({
      success: false,
      message: 'No Data Found',
      data: [],
    });
  }
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Product retrieved successfully',
    data: product,
  });
});

const getProductById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const product = await productServices.findProductById(id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found',
      data: [],
    });
  }
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Product retrieved successfully',
    data: product,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const product = await productServices.updateProductById(id, updateData);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found',
      data: [],
    });
  }
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Product updated successfully',
    data: product,
  });
});

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
};
