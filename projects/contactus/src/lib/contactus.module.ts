import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactusComponent } from './contactus.component';
import {DemoMaterialModule} from './material-module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
// import { AgmCoreModule} from '@agm/core';
import { ListingModule } from 'lib-listing';
import { ContactusListingComponent} from './contactus-listing/contactus-listing.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import{CookieService} from 'ngx-cookie-service';


@NgModule({
  declarations: [ContactusComponent, ContactusListingComponent, LoadingComponent],
  imports: [
    DemoMaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ListingModule,
    HttpClientModule,
  /*  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlOhz19g-XWMWhLpfcxTvIFxX3EMY-U4Y'
      /!* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      *!/
    })*/
  ],
  exports: [ContactusComponent, ContactusListingComponent],
  providers: [ApiService, LoadingComponent, CookieService],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[]
})
export class ContactusModule { }

