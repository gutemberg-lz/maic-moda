import { OffersAsync } from "@/components/pasteAsyncs/offers";
import { GridProducts } from "@/components/pasteProduct/productGrid"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ofertas"
}

const Page = () => {
  return (
    <GridProducts title="Ofertas">
      <OffersAsync />
    </GridProducts>
  );
};

export default Page;
