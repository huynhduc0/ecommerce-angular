import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { AuthService } from 'src/app/service/auth.service';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent implements OnInit {
  socialUser: SocialUser;
  isLoggedin: boolean;
  private authService: AuthService;

  constructor(
    private socialAuthService: SocialAuthService,
    private httpClient: HttpClient,
    private userService: UserService
  ) {
    this.authService = new AuthService();
  }
  ngOnInit() {


    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(d =>
        this.userService.login(d.idToken).subscribe(user=>{
          this.authService.setUser(user)
        })
      )
      .catch(error => {
        console.log(error);
      });
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

}
