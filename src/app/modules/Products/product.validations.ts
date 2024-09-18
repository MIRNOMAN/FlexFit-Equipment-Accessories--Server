import { z } from 'zod';
const ProductSchema = z.object({
  id: z.string().uuid(), // Assuming ID should be a UUID, adjust if needed
  name: z.string().min(1, 'Name is required'),
  price: z.number().positive('Price must be a positive number'),
  stockQuantity: z
    .number()
    .int()
    .nonnegative('Stock quantity must be a non-negative integer'),
  description: z.string().optional(),
  images: z.array(z.string().url()).optional(), // Adjust if you have a different format for images
  category: z.string().min(1, 'Category is required'),
  isDeleted: z.boolean().optional(),
});

export const productsValidation = {
  ProductSchema,
};
