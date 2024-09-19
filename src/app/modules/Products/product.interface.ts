export type TProducts = {
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  images: string[]; // Array of image URLs or file paths
  category: string;
  isDeleted?: boolean;
};

export type TProductRequestBody = {
  name?: string;
  price?: number;
  category?: string;
  description?: string;
  quantity?: number;
  image?: string;
};
