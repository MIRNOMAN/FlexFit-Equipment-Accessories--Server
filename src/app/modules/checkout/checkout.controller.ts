import { Request, Response } from 'express';
import { checkoutService } from './checkout.service';

export const createOrder = async (req: Request, res: Response) => {
  const { cartItems, user, paymentMethod } = req.body;

  try {
    if (paymentMethod !== 'COD') {
      return res.status(400).json({
        success: false,
        message: 'Only Cash on Delivery is supported',
      });
    }

    // Prepare order data
    const orderData = {
      cartItems,
      user,
      paymentMethod,
    };

    // Place the order using the service
    const order = await checkoutService.placeOrder(orderData as any);

    return res.status(200).json({
      success: true,
      message: 'Order placed successfully',
      order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error placing order',
      error: error,
    });
  }
};

export const checkoutController = {
  createOrder,
};
