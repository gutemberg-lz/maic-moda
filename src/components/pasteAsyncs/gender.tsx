import { ProductItem } from "@/components/pasteProduct/product";
import { getProductsOfTheGender } from "@/pasteHttp/getProductsOfTheGender";
import { Gender as Gend } from "@/pasteTypes/gender";

type Props = {
  gender: Gend;
};
export const GenderAsync = async ({ gender }: Props) => {
  const products = await getProductsOfTheGender(gender);
  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} productProps={product} />
      ))}
    </>
  );
};
