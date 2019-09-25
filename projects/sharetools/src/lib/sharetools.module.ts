import { NgModule } from '@angular/core';
import { SharetoolsComponent } from './sharetools.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [SharetoolsComponent],
  imports: [
    MaterialModule,
    BrowserModule,
    FacebookModule.forRoot()
  ],
  exports: [SharetoolsComponent]
})
export class SharetoolsModule { }
