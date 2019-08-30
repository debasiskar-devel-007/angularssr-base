import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './Route/app-routing.module';
import { MaterialModule } from './Module/material-module';
import 'hammerjs';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';

/* Category Management Lib */
import { CategoryManagementModule } from 'category-management';
import { AddEditCategoryComponent } from './Component/category-management/add-edit-category/add-edit-category.component';
import { ListCategoryComponent } from './Component/category-management/list-category/list-category.component';

/* Category Management Lib */
import { LessionManagementModule } from 'lession-management';
import { ListLessionComponent } from './Component/lession-management/list-lession/list-lession.component';
import { AddEditLessionComponent } from './Component/lession-management/add-edit-lession/add-edit-lession.component';
import { TestComponent } from './Component/test/test.component';
import { ListingModule } from 'listing-angular7';

@NgModule({
  declarations: [
    AppComponent,
    AddEditCategoryComponent,
    ListCategoryComponent,
    ListLessionComponent,
    AddEditLessionComponent,
    TestComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    CategoryManagementModule,
    LessionManagementModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ListingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
