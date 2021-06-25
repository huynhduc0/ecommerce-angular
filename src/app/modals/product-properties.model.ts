export class ProductProperties{
  id: bigint
  propertyName: string
  options: ProductOption[]
}
export class ProductOption {
  id: bigint
  name: string
  value: string
  subQuantity: Number
  subPrice: number
}
