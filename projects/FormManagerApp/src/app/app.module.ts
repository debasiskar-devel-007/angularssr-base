import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormmanagerlibModule } from 'formmanagerlib'; 
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormmanagerlibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
