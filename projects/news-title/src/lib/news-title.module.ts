import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewsTitleComponent, modalData } from './news-title.component';
import { DemoMaterialModule } from './material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { ListingNewsletterComponent } from './listing-newsletter/listing-newsletter.component';
import { ListingModule } from 'lib-listing'; 

@NgModule({
  declarations: [NewsTitleComponent, modalData, ListingNewsletterComponent],
  imports: [
    DemoMaterialModule,
    ReactiveFormsModule,FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ListingModule
  ],
  exports: [NewsTitleComponent,ListingNewsletterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService],
  entryComponents:[NewsTitleComponent, modalData]
})
export class NewsTitleModule { }



