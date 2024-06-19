import { ProductItem } from "@/components/pasteProduct/product";
import { getProducts } from "@/pasteHttp/getProducts";

export const ProductsAsync = async () => {
  const ProductsPs = await getProducts();
  return (
    <>
      {ProductsPs.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
};
