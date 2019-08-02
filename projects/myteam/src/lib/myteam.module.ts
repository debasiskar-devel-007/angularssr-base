import { NgModule } from '@angular/core';
import { MyteamComponent } from './myteam.component';
import { DemoMaterialModule } from './material-module';
import { ListingModule } from 'listing-angular7';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { AddteamformComponent } from './addteamform/addteamform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [MyteamComponent, AddteamformComponent],
  imports: [
    DemoMaterialModule,
    ListingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  //  AppRoutingModule
  ],
  exports: [MyteamComponent,AddteamformComponent]
})
export class MyteamModule { }
