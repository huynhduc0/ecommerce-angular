import { Products } from 'src/app/modals/product-vip.model';


// cart items
export interface CartItem {
  product: Products;
  quantity: number;
}
