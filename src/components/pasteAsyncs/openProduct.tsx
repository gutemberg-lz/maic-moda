import { ProductPage } from "@/components/pasteProduct/productPage";
import { getProduct, getRelationsProducts } from "@/pasteHttp/getProducts";
type Props = {
  id: number;
};

export const OpenProduct = async ({ id }: Props) => {
  const product = await getProduct(id);
  const relations = getRelationsProducts(product.nameProduct, id);
  return (
    <>
      <ProductPage productProps={product} relations={relations} />
    </>
  );
};
