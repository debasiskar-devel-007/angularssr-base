import { NgModule } from '@angular/core';
import { DyanmicFormComponent } from './dyanmic-form.component';
import { FormpageComponent } from './components/formpage/formpage.component';
import { SuccessModalComponent } from './components/formpage/formpage.component';

import {ApiService} from './services/api.service';
import { CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {DemoMaterialModule} from '../material-module';
import {FileUploadModule} from 'file-upload';

@NgModule({
  declarations: [DyanmicFormComponent, FormpageComponent,SuccessModalComponent],
  imports: [CommonModule,BrowserModule,ReactiveFormsModule,FormsModule,DemoMaterialModule,
    FileUploadModule
  ],
  exports: [DyanmicFormComponent,FormpageComponent,SuccessModalComponent],
   providers: [ApiService,CookieService],
  entryComponents:[DyanmicFormComponent,FormpageComponent,SuccessModalComponent]
})
export class DyanmicFormModule { }
