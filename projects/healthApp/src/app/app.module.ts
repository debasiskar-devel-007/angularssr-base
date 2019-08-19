import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryManagementModule } from 'category-management';
import { AddEditCategoryComponent } from './Component/add-edit-category/add-edit-category.component';
import { ListCategoryComponent } from './Component/list-category/list-category.component';
import { AppRoutingModule } from './Route/app-routing.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    AddEditCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    BrowserModule,
    CategoryManagementModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
