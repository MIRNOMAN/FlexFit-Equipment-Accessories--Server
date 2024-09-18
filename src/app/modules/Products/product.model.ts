import { Schema, model } from 'mongoose';
import { TProducts } from './product.interface';

const productSchema = new Schema<TProducts>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    stockQuantity: { type: Number, required: true },
    images: { type: [String], required: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const productModel = model<TProducts>('product', productSchema);
export default productModel;
