"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "@/Classes/productClass";
import { ProductType } from "@/pasteTypes/product";

type Props = {
  productProps: ProductType;
};
export const ProductItem = ({ productProps }: Props) => {
  const product = new Product(productProps);
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    if (window) {
      setUrl(window.location.origin);
    }
  });

  return (
    <Link href={`${url}/produto/${product.link}`} target="_self">
      <Card className="cursor-pointer transition-all ease-in-out border-2 border-layout/50 hover:bg-muted-foreground/5 dark:border-muted">
        <CardContent className="py-3 flex flex-col items-center">
          <div className="size-52 overflow-hidden">
            <img
              className="rounded-md"
              src={`${product.mainImage}`}
              alt={product.description}
            />
          </div>
          <CardHeader className="mt-4 p-0 flex flex-col">
            <CardTitle className="text-lg line-clamp-1 text-center">{product.title}</CardTitle>
            <CardDescription className="-mt-1 line-clamp-1 text-center">{product.description}</CardDescription>
          </CardHeader>
          <div className="h-14">
            <div className="h-full flex flex-col items-center justify-end ">
              {product.haveDiscount && (
                <p className="mt-3 font-semibold text-md text-layout/70 line-through decoration-primary/60">
                  {product.initialPrice}
                </p>
              )}
              <div className="flex items-center gap-1">
                <p className="font-bold text-lg text-secondary-foreground dark:text-muted-foreground">
                  {product.price}
                </p>
                <p className="font-semibold text-layout">
                  {product.discontFormat}
                </p>
              </div>
            </div>
          </div>
          <Button
            className="mt-5 w-full text-white bg-layout/80 hover:bg-layout hover:text-white dark:bg-layout/50 dark:hover:bg-layout"
            variant={"ghost"}
          >
            Ver Mais
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};
