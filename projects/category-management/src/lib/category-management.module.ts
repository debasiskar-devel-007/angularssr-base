import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from './Module/material-module';
import { CategoryManagementComponent } from './category-management.component';
import { ListCategoryComponent } from './component/list-category/list-category.component';
import { AddEditCategoryComponent } from './component/add-edit-category/add-edit-category.component';

import { HttpClientModule } from '@angular/common/http';

import { ListingModule } from "listing-angular7";

@NgModule({
  declarations: [
    CategoryManagementComponent,
    ListCategoryComponent,
    AddEditCategoryComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListingModule,
  ],
  exports: [
    CategoryManagementComponent,
    AddEditCategoryComponent
  ]
})
export class CategoryManagementModule { }
