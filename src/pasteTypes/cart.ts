import { Product } from "@/Classes/productClass";

export type Cart = {
  id: number;
  data: Product;
  quantity: number;
  size: string
};
