// PAGINA DO PRODUTO SELECIONADO

import { OpenProduct } from "@/components/pasteAsyncs/openProduct";
import { SkeletonPageProduct } from "@/components/pasteSkeletons/skeletonPageProduct";
import { getIdProduct } from "@/pasteHttp/getProducts";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Produto"
}

type Props = {
  params: {
    title: string;
  };
};
const Page = ({ params }: Props) => {
  const id: number = getIdProduct(decodeURI(params.title));
  if (!id) return <div>Não encontramos</div>;

  return (
    
    <div>
      <div className="mt-[10px] w-full flex justify-center">
        <div className="w-4/5 max-w-[1400px] ">
          <section className="w-full">
            <Suspense fallback={<SkeletonPageProduct />}>
              <OpenProduct id={id} />
            </Suspense>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
