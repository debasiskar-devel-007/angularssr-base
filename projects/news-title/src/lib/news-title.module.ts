import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewsTitleComponent, modalData } from './news-title.component';
import { DemoMaterialModule } from './material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { ListingNewsletterComponent } from './Components/listing-newsletter/listing-newsletter.component';
import { ListingModule } from 'listing-angular7';
import { AddEditSubcategoryComponent } from './Components/subscriptioncategory/add-edit-subcategory/add-edit-subcategory.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListingSubcategoryComponent } from './Components/subscriptioncategory/listing-subcategory/listing-subcategory.component';

@NgModule({
  declarations: [NewsTitleComponent, modalData, ListingNewsletterComponent, AddEditSubcategoryComponent, ListingSubcategoryComponent],
  imports: [
    DemoMaterialModule,
    ReactiveFormsModule,FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ListingModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [NewsTitleComponent,ListingNewsletterComponent,AddEditSubcategoryComponent,ListingSubcategoryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService],
  entryComponents:[NewsTitleComponent, modalData]
})
export class NewsTitleModule { }



