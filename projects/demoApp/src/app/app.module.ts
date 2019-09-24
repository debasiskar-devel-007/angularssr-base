import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {CalendarManagementModule} from 'calendar-management';
import { AppComponent } from './app.component';
import {DemoMaterialModule} from '../material-module';
import { ManageAvailabiltyComponent } from './components/manage-availabilty/manage-availabilty.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListingModule } from 'listing-angular7';
import { SlotsComponent } from './components/slots/slots.component';
import {Resolveservice} from './services/route-resolve.service';
import { TestformComponent } from './components/testform/testform.component';
import {DyanmicFormModule} from 'dynamic-form';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
@NgModule({
  declarations: [
    AppComponent,
    ManageAvailabiltyComponent,
    HomepageComponent,
    SlotsComponent,
    TestformComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    CalendarManagementModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ListingModule,
    DyanmicFormModule
  ],
  providers: [Resolveservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
