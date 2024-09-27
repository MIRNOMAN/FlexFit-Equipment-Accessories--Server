import { Schema, model } from 'mongoose';
import { TOrder } from './checkout.interface';

const orderSchema = new Schema<TOrder>(
  {
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['Cash on Delivery'], required: true },
    status: {
      type: String,
      enum: ['Pending', 'Completed'],
      default: 'Pending',
    },
  },
  { timestamps: true },
);

const OrderModel = model<TOrder>('Order', orderSchema);
export default OrderModel;
