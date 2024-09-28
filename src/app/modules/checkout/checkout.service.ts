import { IOrder } from './checkout.model';
import productModel from '../Products/product.model';
import OrderModel from '../checkout/checkout.model';

const placeOrder = async (orderData: IOrder) => {
  let totalPrice = 0;

  // Check product stock availability and update it
  for (const item of orderData.cartItems) {
    const product = await productModel.findById(item.productId);

    if (!product || product.stockQuantity < item.quantity) {
      throw new Error(`Product ${item.productId} is out of stock`);
    }

    // Calculate total price
    totalPrice += product.price * item.quantity;

    // Reduce product stock
    product.stockQuantity -= item.quantity;
    await product.save();
  }

  // Add the calculated totalPrice to the order
  const orderWithPrice = { ...orderData, totalPrice };

  // Create the order
  const order = new OrderModel(orderWithPrice);
  await order.save();

  return order;
};

export const checkoutService = {
  placeOrder,
};
