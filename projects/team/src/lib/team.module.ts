import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TeamComponent } from './team.component';
import { AddEditTeamComponent } from './Component/add-edit-team/add-edit-team.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from './Module/material/material.module';

@NgModule({
  declarations: [TeamComponent, AddEditTeamComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [TeamComponent,AddEditTeamComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TeamModule { }
