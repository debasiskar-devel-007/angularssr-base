import { NgModule } from '@angular/core';
import { SharetoolsComponent } from './sharetools.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SharetoolsComponent],
  imports: [
    MaterialModule,
    BrowserModule
  ],
  exports: [SharetoolsComponent]
})
export class SharetoolsModule { }
