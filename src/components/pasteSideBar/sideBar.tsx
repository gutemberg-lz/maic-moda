"use client";
import { useBagStore } from "@/pasteStore/bag";
import { BagIcon } from "@/components/pasteHeader/bag-svg";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { CartProduct } from "@/components/pasteCart/cartProduct";
import { Product } from "@/Classes/productClass";
import { useContext, useState } from "react";
import { OpenSideBarContext } from "@/contexts/openSideBar";

export const SideBar = () => {
  const { cart } = useBagStore((state) => state);
  const openCtx = useContext(OpenSideBarContext);
  let total: number = 0;
  for (let cartItem of cart) {
    total += cartItem.data.priceNoFormat * cartItem.quantity;
  }
  
 
  return (
    <Sheet open={openCtx?.open} onOpenChange={openCtx?.setOpen}>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="relative bg-transparent"
        >
          <BagIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-end">
        <SheetHeader>
          <SheetTitle>Carinho de compras</SheetTitle>
          <SheetDescription>
            {cart.length === 0 && "Carrinho vazio"}
            {cart.length > 0 && `Total de produtos (${cart.length})`}
          </SheetDescription>
        </SheetHeader>
        <div className="my-5 h-full overflow-y-scroll offScroll">
          {cart.map((cart, index) => (
            <CartProduct key={index} cartItem={cart} />
          ))}
        </div>
        <div className="w-full my-4 flex justify-between">
          <p>Total:</p>
          <p>
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <Button className="w-full mb-3" variant={"ghost"}>
          Finalizar compra
        </Button>
      </SheetContent>
    </Sheet>
  );
};
