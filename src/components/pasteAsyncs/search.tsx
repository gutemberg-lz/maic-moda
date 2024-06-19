import { getProductsSearch } from "@/pasteHttp/getProductsSearch";
import { ProductItem } from "../pasteProduct/product";

type Props = {
  search: string;
};

export const Search = async ({ search }: Props) => {
  const products = await getProductsSearch(search.toLowerCase());

  return (
    <>
      {products.map((product, index) => (
        <ProductItem key={index} productProps={product} />
      ))}
      {products.length === 0 && (
        <div>Não encontramos</div>
      )}
    </>
  );
};
