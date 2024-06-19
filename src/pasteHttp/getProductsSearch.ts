import { Products } from "@/pasteData/products";
import { ProductType } from "@/pasteTypes/product";

export const getProductsSearch = (search: string): Promise<ProductType[]> => {
  const products = Products.filter(
    (product) =>
      product.nameProduct.toLowerCase().includes(search.toLowerCase()) ||
      product.nameProduct.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/gi, "").includes(search.toLowerCase()) ||
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/gi, "").includes(search.toLowerCase())
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};
