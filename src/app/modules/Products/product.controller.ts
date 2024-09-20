import { catchAsync } from '../../utils/catchAsync';
import { productServices } from './product.service';
import { productsValidation } from './product.validations';

const createProduct = catchAsync(async (req, res) => {
  const product = await productServices.createProduct(req.body);

  if (!product) {
    return res.status(404).json({
      success: false,
      statusCode: 404,
      message: 'product not found',
      data: [],
    });
  }

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'product created successfully',
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
  const updateData = productsValidation.updateproductSchema.parse(req.body);

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

const deleteProduct = catchAsync(async (req, res) => {
  const deleteProduct = await productServices.deleteProductById({
    params: { id: req.params.id },
  });

  if (!deleteProduct) {
    return res.status(404).json({
      success: false,
      statusCode: 404,
      message: 'Product not found',
    });
  }

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Product updated successfully',
    data: deleteProduct,
  });
});

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
