import { NgModule } from '@angular/core';
import { NewsTitleComponent } from './news-title.component';
import { DemoMaterialModule } from './material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NewsTitleComponent],
  imports: [
    DemoMaterialModule,
    ReactiveFormsModule,FormsModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [NewsTitleComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsTitleModule { }



