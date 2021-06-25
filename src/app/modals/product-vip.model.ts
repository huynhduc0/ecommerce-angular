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
  rating: Number
  price?: Number | 1
  maxPrice?: Number
  minPrice?: Number

  constructor(
  id?: bigint,
  name?: string,
  shortDescription?: string,
  description?: string,
  categories?: Categories[],
  medias?:Media[],
  shop?:Shop,
  productProperties?: ProductProperties[],
  totalRating?: bigint,
  rating?: Number
  ){
  this.id = id
  this.name = name
  this.shortDescription = shortDescription
  this.description =  description
  this.categories = categories
  this.medias = medias
  this.shop = shop
  this.productProperties = productProperties || []
  this.totalRating = totalRating
  this.rating = rating
  var max:Number = 0;
  var min:Number = 0;
  this.productProperties.forEach((prop)=>{
    prop.options.forEach((op)=>{
      max = (max > op.subPrice) ? max: op.subPrice
      min = (min < op.subPrice) ? min: op.subPrice
    }
    )
  })
  this.maxPrice = max
  this.minPrice = min
  this.price = min
  }
}
