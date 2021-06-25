import { PRODUCT_URL } from './../../../constant/url.constant';
import { Products } from './../../../modals/product-vip.model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/modals/product.model';
import { MatSnackBar } from '@angular/material';
import { map } from 'rxjs/operators';
import { PRODUCT_RECOMMEND } from 'src/app/constant/url.constant';
import { AuthService } from 'src/app/service/auth.service';



// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("compareItem")) || [];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public currency : string = 'USD';
  public catalogMode : boolean = false;

  private _url: string = "assets/data/";
  public url = "assets/data/banners.json";

  public compareProducts : BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public observer   :  Subscriber<{}>;
  httpHeader = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.authService.loggedInUserValue.token}`,
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient, public snackBar: MatSnackBar,private  authService: AuthService) {
   this.compareProducts.subscribe(products => products = products)
  }

  private products(): Observable<Products[]> {
    return this.httpClient.get<Products[]>('assets/data/products2.json');
  }

  public banners(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.url);
  }


    // Get Banners
    public getBanners() {
      return this.banners();
    }

    // Get Banners
    public getProducts(): Observable<Products[]> {
      return this.products();
    }


      // Get Products By Id
  public getProduct(id: number): Observable<Products> {
    // return this.products().pipe(map(items => {
    //   return items.find((item: Products) =>
    //     { return item.id; });
    //   }));
    // return this.products.find(product=> product.id === id);

    return this.httpClient.get<Products>(PRODUCT_URL+id,this.httpHeader).pipe(map(prods=>{
        console.log(prods)
        return prods
      })
    );
  }


        /*
      ---------------------------------------------
      ----------  Compare Product  ----------------
      ---------------------------------------------
   */

// Get Compare Products
public getComapreProducts(): Observable<Product[]> {
  const itemsStream = new Observable(observer => {
    observer.next(products);
    observer.complete();
  });
  return <Observable<Product[]>>itemsStream;
}

// If item is aleready added In compare
public hasProduct(product: Product): boolean {
  const item = products.find(item => item.id === product.id);
  return item !== undefined;
}

 // Add to compare
 public addToCompare(product: Product): Product | boolean {
  let message, status;
  var item: Product | boolean = false;
  if (this.hasProduct(product)) {
    item = products.filter(item => item.id === product.id)[0];
    const index = products.indexOf(item);
    this.snackBar.open('The product  ' + product.name + ' already added to comparison list.', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

  } else {
    if(products.length < 4)
      products.push(product);
      message = 'The product ' + product.name + ' has been added to comparison list.';
      status = 'success';
      this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });

  }
    localStorage.setItem("compareItem", JSON.stringify(products));
    return item;
}

// Removed Product
public removeFromCompare(product: Product) {
  if (product === undefined) { return; }
  const index = products.indexOf(product);
  products.splice(index, 1);
  localStorage.setItem("compareItem", JSON.stringify(products));
}

   // Get Products By category
   public getProductByCategory(category: string): Observable<Products[]> {
    return this.products().pipe(map(items =>
       items.filter((item: Products) => {
         if(category == 'all')
            return item
            else
            return item.categories;

       })
     ));
  }

}
