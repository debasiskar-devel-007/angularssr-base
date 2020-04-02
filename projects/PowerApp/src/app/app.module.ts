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
import { ServicelibModule } from 'dist/servicelib';
import { AddeditServiceComponent } from './Components/ServiceApp/addedit-service/addedit-service.component';
import { ListingServiceComponent } from './Components/ServiceApp/listing-service/listing-service.component';


//________________________________RESOURCE LIBRARY_____________________________
import { ResourcelibModule } from 'resourcelib';
import { AddeditResourceComponent } from './Components/ResourceApp/addedit-resource/addedit-resource.component';
import { ListingResourceComponent } from './Components/ResourceApp/listing-resource/listing-resource.component';


//_______________________________NEWS LETTER____________________________________

import { AddEditSubcategoryComponent } from './Components/NewsletterApp/add-edit-subcategory/add-edit-subcategory.component';
import { ListingSubcategoryComponent } from './Components/NewsletterApp/listing-subcategory/listing-subcategory.component';
import { AddEditSubscriptionComponent } from './Components/NewsletterApp/add-edit-subscription/add-edit-subscription.component';
import { ListingSubscriptionComponent } from './Components/NewsletterApp/listing-subscription/listing-subscription.component';
import { AddEditGroupComponent } from './Components/NewsletterApp/add-edit-group/add-edit-group.component';
import { AddEditNewsletterComponent } from './Components/NewsletterApp/add-edit-newsletter/add-edit-newsletter.component';
import { ListingNewsletterComponent } from './Components/NewsletterApp/listing-newsletter/listing-newsletter.component';
import { AddEditSenderappComponent } from './Components/NewsletterApp/add-edit-senderapp/add-edit-senderapp.component';
import { ListingSenderappComponent } from './Components/NewsletterApp/listing-senderapp/listing-senderapp.component';
import { AddEditTestemailappComponent } from './Components/NewsletterApp/add-edit-testemailapp/add-edit-testemailapp.component';
import { LisitngTestemailappComponent } from './Components/NewsletterApp/lisitng-testemailapp/lisitng-testemailapp.component';
import { FormsModule } from '@angular/forms';
import { NewsTitleModule } from 'news-title';


@NgModule({
  declarations: [
    AppComponent,
    AddeditTestimonialComponent,
    ListingTestimonialComponent,
    AddeditServiceComponent,
    ListingServiceComponent,
    AddeditResourceComponent,
    ListingResourceComponent,
    AddEditSubcategoryComponent,
    ListingSubcategoryComponent,
    AddEditSubscriptionComponent,
    ListingSubscriptionComponent,
    AddEditGroupComponent,
    AddEditNewsletterComponent,
    ListingNewsletterComponent,
    AddEditSenderappComponent,
    ListingSenderappComponent,
    AddEditTestemailappComponent,
    LisitngTestemailappComponent
    
    
   
    
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
    ResourcelibModule,
    NewsTitleModule,
    FormsModule
   
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
