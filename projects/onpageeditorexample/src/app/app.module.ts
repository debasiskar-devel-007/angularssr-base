import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OnPageEditorModule} from 'on-page-editor'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,OnPageEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
