import { Products } from "@/pasteData/products";
import { Gender } from "@/pasteTypes/gender";
import { ProductType } from "@/pasteTypes/product";


export const getProductsOfTheGender = async (
  gender: Gender
): Promise<ProductType[]> => {
  const products = Products.filter((product) => product.gender === gender);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};
