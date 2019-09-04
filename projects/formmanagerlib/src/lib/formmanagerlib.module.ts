import { NgModule } from '@angular/core';
import { FormmanagerlibComponent } from './formmanagerlib.component';
import { DemoMaterialModule } from './modules/material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [FormmanagerlibComponent],
  imports: [
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  exports: [FormmanagerlibComponent]
})
export class FormmanagerlibModule { }
