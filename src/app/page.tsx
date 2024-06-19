/*Pagina home*/


import { GridProducts } from "@/components/pasteProduct/productGrid";
import { HomeAsync } from "@/components/pasteAsyncs/home";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Início - MModa",
};

const Page = () => {
  return (
    <GridProducts>
      <HomeAsync />
    </GridProducts>
  );
};

export default Page;
