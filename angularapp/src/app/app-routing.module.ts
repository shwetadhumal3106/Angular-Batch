import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { AuthGuard } from './auth.guard';
import { PipeComponent } from './pipe/pipe.component';


const routes : Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'}, // localhost:4200
  {path: 'login', component: LoginComponent}, 
  { path: 'about-us', component: AboutusComponent}, // localhost:4200/about-us
  { path: 'contact-us', component: ContactusComponent},
  //used for single router outlet
  // { path: 'product', children: [ // localhost:4200/product nested n child route concept
  //   { path: '', component: ProductComponent},
  //   {path : 'laptop', component: LaptopComponent},
  //   {path: 'tv', component: TvComponent},
  //   {path: 'mobile', component: MobileComponent},
  //   {path: 'washingmachine', component : WashingmashineComponent}
  // ]},
  //used for multi router outlet
  {path: 'product',canActivate:[AuthGuard], loadChildren : './product/products.module#ProductsModule'},
  {path: 'posts', component:PostlistComponent},
  {path:'postdetails/:id',component:PostdetailsComponent},
  {path: 'pipe', component:PipeComponent},
  { path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log('app routing module call');
    
  }
}
