import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RolemanagementlibModule } from 'rolemanagementlib';
import { ListingComponent } from './components/listing/listing.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule }  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListingModule } from 'listing-angular7';
import { AddroleappComponent } from './components/addroleapp/addroleapp.component';
import { DemoMaterialModule } from './modules/material-module';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    AddroleappComponent
    
   
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RolemanagementlibModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    ListingModule,
    DemoMaterialModule,
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
