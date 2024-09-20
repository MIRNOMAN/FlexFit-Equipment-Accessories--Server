import mongoose, { Schema } from 'mongoose';
import { TProducts } from './product.interface';

const productSchema = new Schema<TProducts>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    stockQuantity: { type: Number, required: true },
    images: { type: [String], required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const productModel = mongoose.model<TProducts>('Product', productSchema);
export default productModel;
