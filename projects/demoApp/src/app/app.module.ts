import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CalendarManagementModule} from 'calendar-management';
import { AppComponent } from './app.component';
import {DemoMaterialModule} from '../material-module';
import { ManageAvailabiltyComponent } from './manage-availabilty/manage-availabilty.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ListingModule } from 'listing-angular7';
import { SlotsComponent } from './slots/slots.component';
@NgModule({
  declarations: [
    AppComponent,
    ManageAvailabiltyComponent,
    HomepageComponent,
    SlotsComponent
  ],
  imports: [
    BrowserModule,
    CalendarManagementModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ListingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
