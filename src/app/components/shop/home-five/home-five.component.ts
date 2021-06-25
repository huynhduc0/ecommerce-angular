import { RecommendService } from './recommed.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { CartItem } from 'src/app/modals/cart-item';
import {BannerService} from "./banner.service";
import {Banner} from "./banner.model";
import { Products } from 'src/app/modals/product-vip.model';
import { ProductVipService } from './product-vip.service';
import { MEDIA_URL } from 'src/app/constant/url.constant';


@Component({
  selector: 'app-home-five',
  templateUrl: './home-five.component.html',
  styleUrls: ['./home-five.component.sass']
})
export class HomeFiveComponent implements OnInit {
  products: Products[] = [];
  shoppingCartItems: CartItem[] = [];
  recommendProducts: Products[];
  public imageUrl = MEDIA_URL;
  public selectedProductImageIndex;
  public slidesVip = [
    { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
    { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
    { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
    { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
    { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
  ];

  public slides:Banner[] = [];

  constructor(private recommendSerivce: RecommendService,private productService: ProductVipService, private cartService: CartService, private bannerService: BannerService) { }

  ngOnInit() {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    // this.productService.getProducts()
    // .subscribe(
    //   (product: Products[]) => {
    //   this.products = product;
    //   }
    // )
    // this.productService.getProductVip().subscribe((prod) =>{
    //   // console.log("j1");
    //   this.products = prod;
    //   console.log(prod);
    // })
    console.log("j");
    this.bannerService.getBanner().subscribe(banners =>
      this.slides =  banners
    );
    console.log("dmmm");
    this.recommendSerivce.getRecommendProduct().subscribe((prod) => {
      // console.log("1231312312312")
      this.recommendProducts = prod;
      // for (let i of this.recommendProducts){
      //   console.log(i.productProperties);
      // }
    })
  }


       // Collection banner
       public discount = [{
        image: 'assets/images/product/tablet_bn.png',
        title: 'Tablets, Smartphones and more',
        subtitle: 'Sale up to 30%',
      }, {
        image: 'assets/images/product/camera_bn.png',
        title: 'New Cameras Collection',
        subtitle: 'Sale up to 30%',
      }]

  }


