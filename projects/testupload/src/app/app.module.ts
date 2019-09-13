import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UploadfileModule} from 'uploadfile';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UploadfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
