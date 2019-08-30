import { NgModule } from '@angular/core';
import { RolemanagementlibComponent } from './rolemanagementlib.component';
import { DemoMaterialModule } from './modules/material-module';
import { HttpClientModule } from '@angular/common/http';
import { ListingModule } from 'listing-angular7';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddeditlibComponent, Modal} from './components/addeditlib/addeditlib.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
// import { CookieService } from 'ngx-cookie-service'; 



@NgModule({
  declarations: [RolemanagementlibComponent, AddeditlibComponent,Modal],
  imports: [
    DemoMaterialModule,
    HttpClientModule,
    ListingModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule , FormsModule,
    
  ],
  exports: [RolemanagementlibComponent ,AddeditlibComponent,Modal],
  entryComponents : [Modal]
})
export class RolemanagementlibModule { }
