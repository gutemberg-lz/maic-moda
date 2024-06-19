import { Products } from "@/pasteData/products";
import { ProductType } from "@/pasteTypes/product";

export const getProductsWithOffers = async (): Promise<ProductType[]> => {
  const offers = Products.filter(product => product.discount.disc !== false);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(offers);
    }, 3000)
  })
}