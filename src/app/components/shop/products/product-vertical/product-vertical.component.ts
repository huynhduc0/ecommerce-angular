import { Products } from './../../../../modals/product-vip.model';
import { Component, OnInit, Input } from '@angular/core';
// import { ProductService } from 'src/app/components/shared/services/product.service';
import { Product } from 'src/app/modals/product.model';
import { MEDIA_URL } from 'src/app/constant/url.constant';
import { ProductVipService } from '../../home-five/product-vip.service';

@Component({
  selector: 'app-product-vertical',
  templateUrl: './product-vertical.component.html',
  styleUrls: ['./product-vertical.component.sass']
})
export class ProductVerticalComponent implements OnInit {

  public imageUrl = MEDIA_URL;
 @Input() products: Products[];
  productVip: Products[];
  constructor(private productService: ProductVipService ) { }

  ngOnInit() {
    this.productService.getProductVip().subscribe((prod) =>{
      console.log("j1");
      console.log(prod);
      // this.products = prod;
      this.products = prod;
    })
  }

}
