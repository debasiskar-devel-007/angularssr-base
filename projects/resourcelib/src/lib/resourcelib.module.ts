import { NgModule } from '@angular/core';
import { ResourcelibComponent } from './resourcelib.component';
import { ListingModule } from 'listing-angular7';
import { DemoMaterialModule} from './Modules/material-module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AddeditResourceappComponent,Modal } from './Components/addedit-resourceapp/addedit-resourceapp.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ResourcelibComponent, AddeditResourceappComponent,Modal],
  imports: [
    ListingModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule
  ],
  exports: [ResourcelibComponent,AddeditResourceappComponent],
  entryComponents:[Modal]
})
export class ResourcelibModule { }
