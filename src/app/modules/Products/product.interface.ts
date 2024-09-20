export type TProducts = {
  id: string;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  images: string[]; // Array of image URLs or file paths
  category: string;
  isDeleted?: boolean;
};

export type DeleteServiceInput = {
  params: {
    id: string;
  };
};
