import {AuthService} from "../../../service/auth.service";
import { Categories } from "./categories.model";
import {catchError, retry} from "rxjs/operators";
import {CATEGORIES, httpError} from '../../../constant/url.constant'
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class CategoriesService{
  constructor(private http:HttpClient,private  authService: AuthService) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.authService.loggedInUserValue.token}`,
      'Content-Type': 'application/json'
    })
  }
  getCategories(): Observable<Categories[]>{
    return this.http.get<Categories[]>(CATEGORIES,{headers: this.httpHeader.headers})
      .pipe(
        map(response => {

          console.log("12312312");
          console.log(response);
          return response;
        })
      )
  }
}
