import { v4 as uuidv4 } from 'uuid';
import { model, Schema } from 'mongoose';
import { TProducts } from './product.interface';

const productSchema = new Schema<TProducts>(
  {
    id: { type: String, default: uuidv4, unique: true },
    name: { type: String, required: true, unique: true },
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

const productModel = model<TProducts>('Product', productSchema);
export default productModel;
