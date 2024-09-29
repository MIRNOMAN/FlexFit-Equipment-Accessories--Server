import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser,
);

router.post(
  '/login',
  validateRequest(UserValidation.LoginValidationSchema),
  UserControllers.loginUser,
);

router.get('/users/:userId', UserControllers.getUser);

export const AuthRoutes = router;
