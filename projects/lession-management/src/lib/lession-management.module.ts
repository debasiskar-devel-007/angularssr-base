import { NgModule } from '@angular/core';
import { LessionManagementComponent } from './lession-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './Module/material-module';

import { HttpClientModule } from '@angular/common/http';

import { ListingModule } from "listing-angular7";

import { ListLessionComponent } from './component/list-lession/list-lession.component';
import { AddEditLessionComponent } from './component/add-edit-lession/add-edit-lession.component';

@NgModule({
  declarations: [
    LessionManagementComponent,
    ListLessionComponent,
    AddEditLessionComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListingModule,
  ],
  exports: [
    LessionManagementComponent,
    AddEditLessionComponent
  ]
})
export class LessionManagementModule { }
