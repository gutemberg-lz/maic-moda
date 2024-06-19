"use client";

import { Button } from "@/components/ui/button";
import { ProductType } from "@/pasteTypes/product";
import { ProductItem } from "@/components/pasteProduct/product";
import { MouseEvent, useContext, useState } from "react";
import { useBagStore } from "@/pasteStore/bag";
import { Cart } from "@/pasteTypes/cart";
import { Product } from "@/Classes/productClass";
import { OpenSideBarContext } from "@/contexts/openSideBar";

type Props = {
  productProps: ProductType;
  relations: ProductType[];
};
export const ProductPage = ({ productProps, relations }: Props) => {
  const product = new Product(productProps);

  const [msg, setMsg] = useState(false);
  const [srcImg, setSrcImg] = useState<string | null>(null);
  const [clickId, setClickId] = useState<number>(0);
  const [clickSize, setCickSize] = useState<number | null>(null);
  const openCtx = useContext(OpenSideBarContext);

  const { upsertCartItem, cart } = useBagStore((state) => state);

  const handleBtnImg = (p: MouseEvent<HTMLImageElement>) => {
    setSrcImg(p.currentTarget.getAttribute("src"));
  };

  const handleAddStorage = () => {
    setMsg(true);
    if (clickSize !== null) {
      const cartProduct: Cart = {
        id: cart.length + 1,
        data: product,
        quantity: 0,
        size: product.sizes[clickSize]
      };
      upsertCartItem(cartProduct);
      setMsg(false);
      openCtx?.setOpen(true)
    }
  };

  const handleClickSize = (index: number) => {
    setCickSize(index);
    setMsg(false);
  };
  return (
    <>
      <title>{`${product.title} - MModa`}</title>
      <div className=" bg-muted/40">
        <div className="box-border w-full h-[calc(4*140px)] py-4 flex flex-col md:flex-row">
          <div className="h-full w-1/6 px-2  flex flex-col gap-4 justify-start items-center md:flex-col">
            {product.listImage.map((img) => (
              <div
                key={img.id}
                className={`w-3/4 h-32 border-[4px] rounded-md overflow-hidden transition-all ease-in-out duration-200 ${
                  clickId === img.id ? "border-layout" : "border-transparent"
                }`}
                onClick={() => {
                  setClickId(img.id);
                }}
              >
                <img
                  className={`object-cover object-top transition-all ease-out duration-200 cursor-pointer hover:opacity-100 ${
                    clickId === img.id ? "opacity-100" : "opacity-30"
                  }`}
                  src={`../${img.link}`}
                  onClick={handleBtnImg}
                />
              </div>
            ))}
          </div>
          <div className="h-full flex-1 flex justify-around">
            <div className="flex-1 h-full overflow-hidden">
              <img
                src={
                  srcImg !== null ? `../${srcImg}` : `../${product.mainImage}`
                }
                className="h-full transition-all ease-in-out cursor-zoom-in select-none hover:scale-150"
              />
            </div>
            <div className="flex-1 px-3 py-3 flex flex-col justify-end">
              <div className="w-full flex-1 flex justify-center">
                {msg && (
                  <p className="text-xl font-bold animate-pulse text-layout ease-in">
                    Selecione o tamanho
                  </p>
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold text-start text-muted-foreground">
                  {product.title}
                </h1>
                <div className="mt-3 ml-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xs font-bold text-muted-foreground">
                      Cores predominante:
                    </h2>
                    <p className="text-xs font-semibold text-layout">
                      {product.colorsMain.join(", ")}
                    </p>
                  </div>
                  {product.colorsList.length > 0 && (
                    <div className="flex items-center gap-2">
                      <h2 className="text-xs font-bold text-muted-foreground">
                        Cores secundárias:
                      </h2>

                      <p className="text-xs font-semibold text-layout">
                        {product.colorsList.join(", ")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full flex my-5">
                <div className="h-full flex flex-col items-start justify-end ">
                  {product.haveDiscount && (
                    <p className="mt-3 font-semibold text-md text-layout/70 line-through decoration-primary/60">
                      {product.initPrice}
                    </p>
                  )}
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-2xl text-secondary-foreground dark:text-muted-foreground">
                      {product.price}
                    </p>
                    {product.haveDiscount && (
                      <p className="size-10 flex justify-center items-center rounded-full font-semibold text-sm bg-layout/70">
                        {product.discontFormat}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-wrap  border border-muted-foreground my-5  rounded-sm">
                {product.sizes.map((size, index) => (
                  <p
                    key={size}
                    className={`flex-1 py-1.5 w-10 text-center transition-all ease-in-out duration-300 cursor-pointer hover:bg-layout/70 ${
                      clickSize === index ? "bg-layout" : ""
                    }`}
                    onClick={() => handleClickSize(index)}
                  >
                    {size.toUpperCase()}
                  </p>
                ))}
              </div>
              <Button
                size={"lg"}
                className="w-fullfont-semibold text-lg bg-layout/80 hover:bg-layout text-white"
              >
                Comprar
              </Button>
              <Button
                size={"lg"}
                variant={"ghost"}
                className="w-full mt-4 font-semibold text-md border-[2px] border-layout text-layout hover:bg-transparent"
                onClick={handleAddStorage}
              >
                Adicionar ao carrinho
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <h3 className="ml-5 text-2xl text-muted-foreground">
            Produtos Relacionados
          </h3>
          {relations.length > 0 && (
            <div className="w-full  mt-5  grid grid-cols-4 px-3 py-1 gap-3">
              {relations.map((product) => (
                <ProductItem key={product.id} productProps={product} />
              ))}
            </div>
          )}
          {relations.length === 0 && (
            <div className="ml-10 text-lg">
              Não encontramos produtos relacionados :(
            </div>
          )}
        </div>
        <div className="w-full mt-10">
          <h4 className="ml-5 text-2xl text-muted-foreground">
            Descrição do Produto
          </h4>
          <p className="h-20 px-4">{product.description}</p>
        </div>
      </div>
    </>
  );
};
