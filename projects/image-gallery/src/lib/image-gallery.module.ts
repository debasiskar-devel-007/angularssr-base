import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImageGalleryComponent } from './image-gallery.component';
import { AddEditCaegoryComponent } from './component/categoryManagement/add-edit-caegory/add-edit-caegory.component';
import { ListCategoryComponent } from './component/categoryManagement/list-category/list-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './Service/api.service';
import { ListingModule } from 'lib-listing';

import { DemoMaterialModule } from './modules/material-module';

@NgModule({
  imports: [
    DemoMaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    ListingModule
  ],
  declarations: [ImageGalleryComponent, AddEditCaegoryComponent, ListCategoryComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ApiService],
  exports: [ImageGalleryComponent, AddEditCaegoryComponent, ListCategoryComponent]
})
export class ImageGalleryModule { }
