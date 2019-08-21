import { NgModule} from '@angular/core';
import { BlogComponent } from './blog.component';
import { BrowserModule } from '@angular/platform-browser';
import { DemoMaterialModule } from './material-module'
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ListingModule } from 'listing-angular7';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import {AddBlogComponent }
@NgModule({
  declarations: [
    BlogComponent, 
    AddBlogComponent
  ],
  imports: [
    DemoMaterialModule,
    RouterModule,
    AppRoutingModule,
    ListingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [BlogComponent, AddBlogComponent],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BlogModule { }
