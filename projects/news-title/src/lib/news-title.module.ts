import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewsTitleComponent, modalData } from './news-title.component';
import { DemoMaterialModule } from './material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';

@NgModule({
  declarations: [NewsTitleComponent, modalData],
  imports: [
    DemoMaterialModule,
    ReactiveFormsModule,FormsModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [NewsTitleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService],
  entryComponents:[NewsTitleComponent, modalData]
})
export class NewsTitleModule { }



