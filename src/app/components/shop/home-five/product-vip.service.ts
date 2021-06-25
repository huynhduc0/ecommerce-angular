import {AuthService} from "../../../service/auth.service";
import {catchError, retry} from "rxjs/operators";
import {PRODUCT_URL, httpError, PRODUCT_RECOMMEND} from '../../../constant/url.constant'
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import { ConstantPool } from "@angular/compiler";
@Injectable({
  providedIn: 'root'
})

export class ProductVipService{
  constructor(private http:HttpClient,private  authService: AuthService) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.authService.loggedInUserValue.token}`,
      'Content-Type': 'application/json'
    })
  }
  getProductVip(){
    return this.http.get<any>(PRODUCT_URL,{headers: this.httpHeader.headers})
      .pipe(
        map(response => {
          console.log(PRODUCT_URL);
          console.log(response);
          return response.content;
        })
      )
  }
}
