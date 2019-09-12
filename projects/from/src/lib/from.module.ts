import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FromComponent } from './from.component';
import { TextBoxComponent } from './textbox/textbox.component';
import {DemoMaterialModule} from './material-module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [FromComponent, TextBoxComponent],
  imports: [
    DemoMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  schemas:[NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  exports: [FromComponent]
})
export class FromModule { }
