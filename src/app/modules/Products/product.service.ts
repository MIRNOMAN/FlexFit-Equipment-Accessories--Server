import { DeleteServiceInput, TProducts } from './product.interface';
import productModel from './product.model';

const createProduct = async (product: TProducts) => {
  const result = await productModel.create(product);
  return result;
};

const findProductById = async (id: string) => {
  const result = await productModel.findById(id);
  return result;
};

const findAllProducts = async () => {
  const result = await productModel.find({ isDeleted: false });
  return result;
};

const updateProductById = async (
  id: string,
  updateData: Partial<TProducts>,
) => {
  const result = await productModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  return result;
};

const deleteProductById = async (input: DeleteServiceInput) => {
  const { id } = input.params;
  const result = await productModel.findById(id);
  if (!result) {
    throw new Error('Service not found');
  }
  result.isDeleted = true; // Soft delete
  await result.save();

  return result;
};

export const productServices = {
  createProduct,
  findProductById,
  findAllProducts,
  updateProductById,
  deleteProductById,
};
