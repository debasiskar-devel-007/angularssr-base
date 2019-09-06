import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BrowserModule } from '@angular/platform-browser';
import { DemoMaterialModule } from './material-module'
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AddBlogComponent, Dialogtest } from './add-blog/add-blog.component';
import { ListingModule } from 'listing-angular7';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ApiService } from './api.service';
import { AddeditBlogmanagementComponent } from './addedit-blogmanagement/addedit-blogmanagement.component';
@NgModule({
  declarations: [
    BlogComponent,
    AddBlogComponent,
    Dialogtest,
    AddeditBlogmanagementComponent
  ],
  imports: [
    DemoMaterialModule,
    RouterModule,
    AppRoutingModule,
    ListingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CKEditorModule
  ],
  exports: [BlogComponent, AddBlogComponent, AddeditBlogmanagementComponent],
  providers: [ApiService],
  entryComponents: [Dialogtest],

})
export class BlogModule { }
