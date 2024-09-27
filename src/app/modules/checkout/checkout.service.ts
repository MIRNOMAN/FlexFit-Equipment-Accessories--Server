import { TOrder } from './checkout.interface';
import productModel from '../Products/product.model';
import OrderModel from './checkout.model';

const placeOrder = async (orderData: TOrder) => {
  // Check product stock availability and update it
  for (const item of orderData.products) {
    const product = await productModel.findById(item.productId);
    if (!product || product.stockQuantity < item.quantity) {
      throw new Error(`Product ${item.productId} is out of stock`);
    }
    // Reduce product stock
    product.stockQuantity -= item.quantity;
    await product.save();
  }

  // Create the order
  const order = new OrderModel(orderData);
  await order.save();
  return order;
};

export const checkoutService = {
  placeOrder,
};
