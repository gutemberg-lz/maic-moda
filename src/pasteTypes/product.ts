import { Gender } from "@/pasteTypes/gender";
import { Img } from "./img";

type Category = "Roupa" | "Calçados";


export type ProductType = {
  id: number,
  category: Category,
  nameProduct: string,
  type?: string | undefined,
  titleLink: string,
  gender: Gender,
  title: string,
  description: string,
  mainImage: string,
  secondaryImages: Img[],
  brand: string,
  predominantColor: string[],
  secondaryColor: string[],
  sizeAvailable: string[],
  price: number,
  discount: {
    disc: boolean,
    Pct?: number | undefined,
    offPct?: Date | undefined
  }
  hashtags?: string[]
  depleted: boolean
}