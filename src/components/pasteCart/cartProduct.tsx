import { Cart } from "@/pasteTypes/cart";
import {
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBagStore } from "@/pasteStore/bag";
import { Separator } from "@/components/ui/separator";

type Props = {
  cartItem: Cart;
};

export const CartProduct = ({ cartItem }: Props) => {
  const { quantityMinusCart, quantityPlusCart } = useBagStore((state) => state);

  const handleMinusProduct = () => {
    quantityMinusCart(cartItem.id);
  };

  const handlePlusProduct = () => {
    quantityPlusCart(cartItem.id);
  };
  return (
    <>
      <div className="flex gap-2 my-4">
        <div className="size-16 overflow-hidden rounded-md">
          <img
            className="w-full"
            src={`${window.location.origin}/${cartItem.data.mainImage}`}
            alt={`img ${cartItem.data.mainImage}`}
          />
        </div>
        <div className=" flex flex-col ">
          <p className="text-sm">{cartItem.data.nameProduct} - ({cartItem.size})</p>
          <p className="text-xs text-muted-foreground mt-1">{cartItem.data.title}</p>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <div className="flex gap-2 items-center justify-end">
            
            <Button
              size={"icon"}
              className="size-6"
              variant={"outline"}
              onClick={handleMinusProduct}
            >
              <MinusIcon className="size-3 " />
            </Button>
            <p>{cartItem.quantity}</p>
            <Button
              size={"icon"}
              variant={"outline"}
              className="size-6 bg-[#da5095] hover:bg-[#da5095]/70 dark:bg-[#da5095]/70 dark:hover:bg-[#da5095] text-white"
              onClick={handlePlusProduct}
            >
              <PlusIcon className="size-3" />
            </Button>
          </div>
          <div className="flex-1 flex items-end">
            <p className="text-sm text-muted-foreground">
              {cartItem.data.formatPrice(cartItem.data.priceNoFormat * cartItem.quantity)}
            </p>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};
