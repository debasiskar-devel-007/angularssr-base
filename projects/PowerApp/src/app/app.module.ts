import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './Route/app-routing.module';
import { AppComponent } from './app.component';


import { CookieService } from 'ngx-cookie-service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from './Modules/material-module';
import { FileUploadModule } from 'file-upload';




// __________________________TESTIMONIAL LIBRARY_____________________________
import { TestimonialModule } from 'testimonial';
import { AddeditTestimonialComponent } from './Components/TestimonialApp/addedit-testimonial/addedit-testimonial.component';
import { ListingTestimonialComponent } from './Components/TestimonialApp/listing-testimonial/listing-testimonial.component';



// _____________________________SERVICE LIBRARY_________________________________
import { ServicelibModule } from 'servicelib';
import { AddeditServiceComponent } from './Components/ServiceApp/addedit-service/addedit-service.component';
import { ListingServiceComponent } from './Components/ServiceApp/listing-service/listing-service.component';


// ___________________________NEWSLETTER LIBRARY__________________________________
import { NewsTitleModule } from 'news-title';
import { ListingNewsletterComponent } from './Components/NewsletterApp/listing-newsletter/listing-newsletter.component';



@NgModule({
  declarations: [
    AppComponent,
    AddeditTestimonialComponent,
    ListingTestimonialComponent,
    AddeditServiceComponent,
    ListingServiceComponent,
    ListingNewsletterComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    TestimonialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    DemoMaterialModule,
    ServicelibModule,
    FileUploadModule,
    NewsTitleModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
