import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewsTitleComponent, modalData } from './news-title.component';
import { DemoMaterialModule } from './material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { ListingNewsletterComponent } from './Components/listing-newsletter/listing-newsletter.component';
import { ListingModule } from 'listing-angular7';
import { AddEditSubcategoryComponent,Modal } from './Components/subscriptioncategory/add-edit-subcategory/add-edit-subcategory.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListingSubcategoryComponent } from './Components/subscriptioncategory/listing-subcategory/listing-subcategory.component';
import { AddEditSubscriptiongroupComponent,Modal2 } from './Components/add-edit-subscriptiongroup/add-edit-subscriptiongroup.component';

@NgModule({
  declarations: [Modal2,Modal,NewsTitleComponent, modalData, ListingNewsletterComponent, AddEditSubcategoryComponent, ListingSubcategoryComponent, AddEditSubscriptiongroupComponent],
  imports: [
    DemoMaterialModule,
    ReactiveFormsModule,FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ListingModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [AddEditSubscriptiongroupComponent,Modal,NewsTitleComponent,ListingNewsletterComponent,AddEditSubcategoryComponent,ListingSubcategoryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService],
  entryComponents:[NewsTitleComponent, modalData,Modal,Modal2]
})
export class NewsTitleModule { }



