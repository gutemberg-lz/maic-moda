import { ProductItem } from "@/components/pasteProduct/product";
import { getProducts } from "@/pasteHttp/getProducts";

export const HomeAsync = async () => {
  const products = await getProducts();
  

  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} productProps={product} />
      ))}
    </>
  );
};
