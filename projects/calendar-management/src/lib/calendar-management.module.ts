import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CalendarManagementComponent, AddAvailabilityComponent } from './calendar-management.component';
import {DemoMaterialModule} from '../material-module';
import { AddAvailabilityFormComponent } from './add-availability-form/add-availability-form.component';
import { CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MaterialTimePickerModule } from '@candidosales/material-time-picker';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { ListingModule } from 'listing-angular7';
@NgModule({
  declarations: [ 
    CalendarManagementComponent,
     AddAvailabilityComponent,
     AddAvailabilityFormComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    DemoMaterialModule,  
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    MaterialTimePickerModule,
    HttpClientModule,
    ListingModule
  ],
  exports: [CalendarManagementComponent,AddAvailabilityComponent,AddAvailabilityFormComponent],
  providers: [ApiService],
  entryComponents:[AddAvailabilityComponent]
})

export class CalendarManagementModule { }
