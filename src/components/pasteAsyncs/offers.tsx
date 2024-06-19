import { getProductsWithOffers } from "@/pasteHttp/getProductsWithOffers";
import { ProductItem } from "@/components/pasteProduct/product";

export const OffersAsync = async () => {
  const products = await getProductsWithOffers();
  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} productProps={product} />
      ))}
    </>
  );
};
