import {throwError} from "rxjs";
export const httpError = (error) => {
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
};

export const BASE_URL = "http://thduc.me:9900"
export const GOOGLE_LOGIN_URL = BASE_URL+"/users/google"
export const BANNERS = BASE_URL+"/users/banners"
export const MEDIA_URL = BASE_URL+"/media/"
export const CATEGORIES = BASE_URL+"/users/categories"
export const PRODUCT_RECOMMEND = BASE_URL+"/products/recommend"
