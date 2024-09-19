import { z } from 'zod';

const productSchema = z.object({
  name: z.string(),
  price: z.number(),
  stockQuantity: z.number().int(),
  description: z.string(),
  images: z.array(z.string()),
  category: z.string(),
  isDeleted: z.boolean().optional(),
});

export const productsValidation = {
  productSchema,
};
