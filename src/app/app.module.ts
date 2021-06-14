import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './components/demo/demo.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxImgZoomModule } from 'ngx-img-zoom';


import { MainComponent } from './components/main/main.component';



import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './components/shop/shop.module';
import { SharedModule } from './components/shared/shared.module';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    MainComponent



  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    SharedModule,
    ShopModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxImgZoomModule,
    SocialLoginModule
  ],
  providers: [ {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '213239061541-lhm7o6vso9gsu58lvfv31svmj4bio7tf.apps.googleusercontent.com'
          )
        },
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
