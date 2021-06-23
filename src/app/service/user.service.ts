import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {GOOGLE_LOGIN_URL} from "../constant/url.constant";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  login(authToken): Observable<any> {
    const formData = new FormData();
    formData.append("oAuthToken",authToken)
    formData.append("platform","WEB")
    formData.append("isShop","false")
    return this.httpClient.post<any>(GOOGLE_LOGIN_URL,formData )
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }


  httpError(error) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

}
