import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveService } from '../services/resolve.service';
import { CookieService } from 'ngx-cookie-service';
import { AddeditTestimonialComponent } from '../Components/TestimonialApp/addedit-testimonial/addedit-testimonial.component';
import { ListingTestimonialComponent } from '../Components/TestimonialApp/listing-testimonial/listing-testimonial.component';
import { AddeditServiceComponent } from '../Components/ServiceApp/addedit-service/addedit-service.component';
import { ListingServiceComponent } from '../Components/ServiceApp/listing-service/listing-service.component';
import { AddeditResourceComponent } from '../Components/ResourceApp/addedit-resource/addedit-resource.component';
import { ListingResourceComponent } from '../Components/ResourceApp/listing-resource/listing-resource.component';



const appRoutes: Routes = [

  // _______________________TESTIMONIAL LIBRARY_________________
  { path: 'testimonial/add', component: AddeditTestimonialComponent },
  {
    path: 'testimonial/list',
    component: ListingTestimonialComponent,
    resolve: { testimonialList: ResolveService },
    data: { requestcondition: { source: 'testimonial_view', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'testimonial/edit/:_id',
    component: AddeditTestimonialComponent,
    resolve: { testimonialData: ResolveService },
    data: { requestcondition: { source: 'testimonial', condition: {} }, endpoint: 'datalist' }
  },


  // _______________________SERVICE LIBRARY____________________
  { path: 'service/add', component: AddeditServiceComponent },
  {
    path: 'service/list',
    component: ListingServiceComponent,
    resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'services_view', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'service/edit/:_id',
    component: AddeditServiceComponent,
    resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'services', condition: {} }, endpoint: 'datalist' }
  },

   
  //_______________________RESOURCE LIBRARY_____________________
  { path:'resource/add',component:AddeditResourceComponent},
  {
    path: 'resource/list',
    component: ListingResourceComponent,
    resolve: { resourceList: ResolveService },
    data: { requestcondition: { source: 'resources_view', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'resource/edit/:_id',
    component: AddeditResourceComponent,
    resolve: { resourceList: ResolveService },
    data: { requestcondition: { source: 'resources', condition: {} }, endpoint: 'datalist' }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  constructor(public cookieService: CookieService) {
  }

}
