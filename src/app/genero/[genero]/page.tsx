import { GenderAsync } from "@/components/pasteAsyncs/gender";
import { GridProducts } from "@/components/pasteProduct/productGrid";
import { Gender as Gend } from "@/pasteTypes/gender";

type Props = {
  params: {
    genero: string;
  };
};

const Page = ({ params }: Props) => {
  if (
    params.genero === "masculinos" ||
    params.genero === "femininos" ||
    params.genero === "criancas"
  ) {
    const letter = params.genero[0].toUpperCase();
    let gender: Gend = letter as Gend;
    const title =
      params.genero !== "criancas"
        ? params.genero[0].toUpperCase().concat(params.genero.substring(1))
        : "Crianças";
    return (
      <>
        <title>{`${title} - MModa`}</title>
        <GridProducts title={title}>
          <GenderAsync gender={gender} />
        </GridProducts>
      </>
    );
  }
};

export default Page;
