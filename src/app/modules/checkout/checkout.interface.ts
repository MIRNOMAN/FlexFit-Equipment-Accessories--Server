export interface IOrder {
  products: {
    productId: string;
    quantity: number;
  }[];
  totalAmount: number;
  paymentMethod: 'Cash on Delivery'; // Only COD allowed
  status: 'Pending' | 'Completed';
}
