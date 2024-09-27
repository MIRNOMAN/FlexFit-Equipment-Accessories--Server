import { Router } from 'express';
import { checkoutController } from './checkout.controller';

const router = Router();

router.post('/checkout', checkoutController.createOrder);

export const checkoutRouter = router;
