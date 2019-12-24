import { NgModule } from '@angular/core';
import { TestimonialComponent } from './testimonial.component';
import { AddeditComponent , Modal, PreviewComponent } from './Components/addedit/addedit.component';
import { DemoMaterialModule } from './Modules/material-module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListingModule } from 'listing-angular7';
import { FileUploadModule } from 'file-upload-lib-influxiq';

@NgModule({
  declarations: [TestimonialComponent, AddeditComponent ,Modal, PreviewComponent],
  imports: [
    DemoMaterialModule,
    CKEditorModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    ListingModule,
    FileUploadModule
  ],
  exports: [TestimonialComponent,AddeditComponent] ,
  entryComponents:[Modal, PreviewComponent ]
  
})
export class TestimonialModule {

  
 }
