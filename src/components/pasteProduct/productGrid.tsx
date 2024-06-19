import { SkeletonProduct } from "@/components/pasteSkeletons/skeletonProduct";
import { ReactNode, Suspense } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  h1?: string;
};
export const GridProducts = ({ children, title, h1 }: Props) => {
  return (
    <div className="mt-[50px] w-full flex justify-center">
      <div className="w-4/5 max-w-[1400px] ">
        {title && (
          <h1 className="font-bold text-3xl text-muted-foreground mb-5">
            {typeof h1 !== "undefined" ? h1 : "Produtos"} {title}
          </h1>
        )}
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <Suspense
            fallback={Array.from({ length: 12 }).map((ele, index) => (
              <SkeletonProduct key={index} />
            ))}
          >
            {children}
          </Suspense>
        </section>
      </div>
    </div>
  );
};
