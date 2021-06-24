import { Shop } from './shop.model';
import { Categories } from "../components/shared/categories-menu/categories.model"
import { Media } from "./media.model"
import { ProductProperties } from './product-properties.model';

export class Products {
  id: bigint
  name: string
  shortDescription: string
  description: string
  categories: Categories[]
  medias:Media[]
  shop:Shop
  productProperties: ProductProperties[]
  totalRating: bigint
  rating: number
}
