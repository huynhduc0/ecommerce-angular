import {AuthService} from "../../../service/auth.service";

import {catchError, retry} from "rxjs/operators";
import {CATEGORIES, httpError, PRODUCT_RECOMMEND} from '../../../constant/url.constant'
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import { Products } from "src/app/modals/product-vip.model";
@Injectable({
  providedIn: 'root'
})

export class RecommendService{
  constructor(private http:HttpClient,private  authService: AuthService) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.authService.loggedInUserValue.token}`,
      'Content-Type': 'application/json'
    })
  }
  getRecommendProduct(): Observable<Products[]>{
    return this.http.get<any>(PRODUCT_RECOMMEND,{headers: this.httpHeader.headers})
      .pipe(
        map(response => {
          return response.content;
        })
      )
  }
}
