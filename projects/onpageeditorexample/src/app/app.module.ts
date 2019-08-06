import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {OnPageEditorModule} from 'on-page-editor';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactusModule } from 'contactus';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    OnPageEditorModule,
    AppRoutingModule,
    ContactusModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ContactusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
