import { Img } from "@/pasteTypes/img";
import { ProductType } from "@/pasteTypes/product";


export class Product {
  public  id: number;
  public readonly nameProduct: string;
  public readonly type: string | undefined;
  public readonly mainImage: string;
  public readonly listImage: Img[];
  public readonly title: string;
  public readonly colorsMain: string[];
  public readonly colorsList: string[];
  public readonly haveDiscount: boolean;
  public readonly initPrice: number;
  private readonly percentage: number | undefined;
  public readonly sizes: string[]
  constructor(Product: ProductType) {

    this.id = Product.id;

    this.mainImage = Product.mainImage;
    this.title = Product.title;
    this.haveDiscount = Product.discount.disc;
    this.initPrice = Product.price;
    this.percentage = Product.discount.Pct;
    this.nameProduct = Product.nameProduct;
    this.type = Product.type;
    this.listImage = Product.secondaryImages
    this.colorsMain = Product.predominantColor;
    this.colorsList = Product.secondaryColor;
    this.sizes = Product.sizeAvailable
  }

  public get link(): string {
    // const noAccents = this.title
    //   .normalize("NFD")
    //   .replace(/[\u0300-\u036f]/gi, "")
    //   .toLowerCase();
    // const link = noAccents.replace(/\s/gi, "-");
    const link = encodeURI(this.title)
    return link;
  }

  public get description(): string {
    return `${this.nameProduct} - ${this.type}`;
  }

  public get discount(): number {
    if (this.haveDiscount) {
      if (typeof this.percentage === "number") return this.percentage;
    }
    return 0;
  }

  public get discontFormat(): string {
    if (this.haveDiscount) {
      return `-${this.discount}%`;
    }
    return "";
  }

  public get initialPrice(): string {
    return this.formatPrice(this.initPrice);
  }

  public get price(): string {
    const discount = (this.initPrice * this.discount) / 100;
    const price = this.initPrice - discount;
    


    return this.formatPrice(parseFloat(price.toFixed(2)));
  }

  public get priceNoFormat(): number {
    const discount = this.initPrice * this.discount/ 100;
    const price = this.initPrice - discount;

    return parseFloat(price.toFixed(2));
  }

  public formatPrice(price: number): string {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}
