import { NgModule } from '@angular/core';
import { CalenderlibComponent } from './calenderlib.component';
import {DemoMaterialModule} from './material-module';
//import { AddAvailabilityFormComponent } from './add-availability-form/add-availability-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalenderlibComponent],
  imports: [
    DemoMaterialModule,
    //AddAvailabilityFormComponent,
    ReactiveFormsModule
  ],
  exports: [CalenderlibComponent]
})
export class CalenderlibModule { }
