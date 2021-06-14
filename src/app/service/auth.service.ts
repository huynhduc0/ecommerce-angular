import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  
  public baseUrl = "localhost:8000";
  private loggedUserSubject: BehaviorSubject<User>;
  public loggedInUser: Observable<any>;
  private http: HttpClient;
  private socialAuthService: SocialAuthService;
  private socialUser: any;
  private isLoggedin: boolean;
  constructor() {
    const getLoggedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    this.loggedUserSubject = new BehaviorSubject(getLoggedUser);
    this.loggedInUser = this.loggedUserSubject.asObservable();
    // this.socialAuthService =
  }
  ngOnInit() {
    console.log("INIT VIEW");
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
  }

  loginUser(emailAddress: string, password: string) {
    return this.http.post<User>(`${this.baseUrl}/`, { emailAddress, password })
      .pipe(map(response => {
        localStorage.setItem('loggedInUser', JSON.stringify(response));
        this.loggedUserSubject.next(response);
        console.log(response);
        return response;
      }));
  }

  logoutUser() {
    localStorage.removeItem('loggedInUser');
    this.loggedUserSubject.next(null);
  }
  public get loggedInUserValue() {
    return this.loggedUserSubject.value;
  }
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  generateToken(authToken: string): boolean {
    
    return true
  }

}
