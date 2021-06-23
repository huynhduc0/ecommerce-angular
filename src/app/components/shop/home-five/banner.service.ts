import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BANNERS, GOOGLE_LOGIN_URL, httpError} from "../../../constant/url.constant";
import {catchError, retry} from "rxjs/operators";
import {Observable} from "rxjs";
import {Banner} from "./banner.model";
import {AuthService} from "../../../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class BannerService{
  constructor(private http:HttpClient,private  authService: AuthService) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.authService.loggedInUserValue.token}`,
      'Content-Type': 'application/json'
    })
  }
   getBanner(): Observable<Banner[]>{
    return this.http.get<Banner[]>(BANNERS,{headers: this.httpHeader.headers})
      .pipe(
        retry(1),
        catchError(httpError)
      )
  }
}
