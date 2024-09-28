import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  cartItems: {
    productId: mongoose.Types.ObjectId;
    quantity: number;
  }[];
  user: {
    name: string;
    email: string;
    address: string;
    phone: string;
  };
  paymentMethod: 'COD';
  totalPrice: number;
}

const orderSchema = new Schema<IOrder>(
  {
    cartItems: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      address: { type: String, required: true },
      phone: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      enum: ['COD'],
      default: 'COD',
      required: true,
    },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

const OrderModel = mongoose.model<IOrder>('Order', orderSchema);
export default OrderModel;
