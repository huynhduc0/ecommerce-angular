import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/shop/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeFiveComponent } from './components/shop/home-five/home-five.component';
import { ShopModule } from './components/shop/shop.module';
import { AuthService } from './service/auth.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: (new AuthService().loggedInUserValue)?'home/five':'/pages/my-account',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   component: HomeFiveComponent,
  // },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./components/shop/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'pages',
        loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule)

      },
      {
        path: 'blog',
        loadChildren: () => import('./components/blog/blog.module').then(m => m.BlogModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home/five'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
