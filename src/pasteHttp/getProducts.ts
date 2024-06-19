import { Products } from "@/pasteData/products";
import { ProductType } from "@/pasteTypes/product";

export const getProducts = async (): Promise<ProductType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Products);
    }, 3000);
  });
};

export const getProduct = async (p: number): Promise<ProductType> => {
  const product = Products.find((ele) => ele.id === p) as ProductType;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product);
    }, 3000);
  });
};

export const getIdProduct = (p: string): number => {
  const productFind = Products.find((ele) => ele.title === p);
  if (productFind) return productFind.id;

  return 0;
};

export const getRelationsProducts = (p: string, id: number): ProductType[] => {
  const producFilter = Products.filter(
    (ele) => ele.nameProduct === p && ele.id !== id
  );
  return producFilter;
};
