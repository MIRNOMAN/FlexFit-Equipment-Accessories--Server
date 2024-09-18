import { TProducts } from './Product.interface';
import ProductModel from './product.model';

const createProduct = async (product: TProducts) => {
  const result = await ProductModel.create(product);
  return result;
};

export const productServices = {
  createProduct,
};
