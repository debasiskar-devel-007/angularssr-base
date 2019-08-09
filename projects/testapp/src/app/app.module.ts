import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material-module';
import { MyteamModule } from 'myteam';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { AddmyteamComponent } from './addmyteam/addmyteam.component';
import { EditappComponent } from './editapp/editapp.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamlistComponent,
    AddmyteamComponent,
    EditappComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    MyteamModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
