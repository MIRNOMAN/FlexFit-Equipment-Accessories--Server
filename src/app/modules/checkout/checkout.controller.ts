import { catchAsync } from './../../utils/catchAsync';
import productModel from '../Products/product.model';

const createOrder = catchAsync(async (req, res) => {
  const { cartItems, user, paymentMethod } = req.body;

  try {
    if (paymentMethod !== 'COD') {
      return res.status(400).json({
        success: false,
        message: 'Only Cash on Delivery is supported',
      });
    }

    // Initialize totalPrice to 0
    let totalPrice = 0;

    // Fetch product details for each item in cartItems and reduce stock
    for (const item of cartItems) {
      const product = await productModel.findById(item.productId);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product with ID ${item.productId} not found`,
        });
      }

      // Check if the product stock is sufficient
      if (product.stockQuantity < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for product ${product.name}`,
        });
      }

      // Calculate price for the current product
      const productPrice = product.price * item.quantity;
      totalPrice += productPrice;

      // Reduce the product quantity in stock
      product.stockQuantity -= item.quantity;

      // Save the updated product to the database
      await product.save();
    }

    // Proceed to create the order with the dynamically calculated totalPrice
    const newOrder = {
      cartItems,
      user,
      paymentMethod,
      totalPrice, // Use the calculated totalPrice
    };

    // Save the order to the database (assuming you have an order model)
    // await orderModel.create(newOrder);

    return res.status(200).json({
      success: true,
      message: 'Order placed successfully',
      order: newOrder,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error creating order',
      error: error,
    });
  }
});

export const checkoutController = {
  createOrder,
};
