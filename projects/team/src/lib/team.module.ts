import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TeamComponent } from './team.component';
import { AddEditTeamComponent } from './Component/add-edit-team/add-edit-team.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from './material.module';
import { ListingModule } from 'lib-listing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddeditTeamComponent } from './Category-Management/addedit-team/addedit-team.component';
import { ListTeamComponent } from './Category-Management/list-team/list-team.component';
import { ApiService } from '../lib/Service/api.service';
import { TeamListComponent } from './Component/team-list/team-list.component';
import { FileUploadModule } from 'file-upload';

@NgModule({
  declarations: [TeamComponent, AddEditTeamComponent, AddeditTeamComponent, ListTeamComponent, TeamListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ListingModule,
    FileUploadModule
  ],
  providers: [ApiService],
  exports: [TeamComponent,AddEditTeamComponent,AddeditTeamComponent,ListTeamComponent,TeamListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TeamModule { }
