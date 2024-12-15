export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}