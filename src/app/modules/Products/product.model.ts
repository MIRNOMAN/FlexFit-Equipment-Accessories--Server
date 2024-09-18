import mongoose, { Schema, Document } from 'mongoose';
import { TProducts } from './Product.interface';

const ProductSchema = new Schema<TProducts>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true },
    description: { type: String, default: '' },
    images: { type: [String], default: [] },
    category: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true, // Add timestamps for createdAt and updatedAt
  },
);

const ProductModel = mongoose.model<TProducts>('Product', ProductSchema);

export default ProductModel;
