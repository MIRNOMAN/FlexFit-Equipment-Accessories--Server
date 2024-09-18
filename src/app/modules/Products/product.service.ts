import { TProducts } from './product.interface';
import productModel from './product.model';

const createProduct = async (product: TProducts) => {
  const result = await productModel.create(product);
  return result;
};

export const productServices = {
  createProduct,
};
