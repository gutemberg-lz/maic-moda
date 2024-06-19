import { Search } from "@/components/pasteAsyncs/search";
import { GridProducts } from "@/components/pasteProduct/productGrid";

type Props = {
  params: {
    search: string;
  };
};

const Page = ({ params }: Props) => {
  if (params.search === null || params.search === "")
    return (window.location.href = "/");
  const search = decodeURIComponent(params.search);
  return (
    <GridProducts title={search} h1={"Pesquisa: "}>
      <Search search={search} />
    </GridProducts>
  );
};

export default Page;
