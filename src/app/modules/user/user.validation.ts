import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string(),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const LoginValidationSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const UserValidation = {
  userValidationSchema,
  LoginValidationSchema,
};
