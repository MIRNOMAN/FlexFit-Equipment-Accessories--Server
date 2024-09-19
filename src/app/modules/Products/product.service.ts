import { TProducts } from './product.interface';
import productModel from './product.model';

const createProduct = async (product: TProducts) => {
  const result = await productModel.create(product);
  return result;
};

const findProductById = async (id: string) => {
  const result = await productModel.findById(id);
  return result;
};

export const productServices = {
  createProduct,
  findProductById,
};
