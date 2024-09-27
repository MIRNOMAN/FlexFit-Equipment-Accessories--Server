export type TOrder = {
  products: {
    productId: string;
    quantity: number;
  }[];
  totalAmount: number;
  paymentMethod: 'Cash on Delivery'; // Only COD allowed
  status: 'Pending' | 'Completed';
};
