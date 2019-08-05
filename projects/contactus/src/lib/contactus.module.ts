import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactusComponent } from './contactus.component';
import {DemoMaterialModule} from './material-module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { AgmCoreModule } from '@agm/core';
import { ApiService } from './api.service';
import { AgmCoreModule} from '@agm/core';
import { ListingModule } from 'listing-angular7';
@NgModule({
  declarations: [ContactusComponent],
  imports: [
    DemoMaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ListingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlOhz19g-XWMWhLpfcxTvIFxX3EMY-U4Y'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    })
  ],
  exports: [ContactusComponent],
  providers: [ApiService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactusModule { }

