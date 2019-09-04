import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';



const appRoutes: Routes = [
    /* Category Management Routes Start */
    // { 
    //   path:'',
    //   component: ,
    //   resolve: { },
    //   data: { requestcondition: { source: 'category', condition: {} }, endpoint: 'datalist'}
    // }
   
   


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  constructor(public cookieService: CookieService) {
  }
  
}
