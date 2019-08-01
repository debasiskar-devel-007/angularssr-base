import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManageAvailabiltyComponent } from './manage-availabilty/manage-availabilty.component';
import {CalendarManagementModule} from 'calendar-management'; 

@NgModule({
  declarations: [
    AppComponent,
    ManageAvailabiltyComponent,
    CalendarManagementModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
