export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  categoryId: string;
  categoryName: string;
  imageUrl?: string;
}
