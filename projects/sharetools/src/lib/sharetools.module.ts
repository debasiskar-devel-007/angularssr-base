import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SharetoolsComponent } from './sharetools.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FacebookModule } from 'ngx-facebook';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

@NgModule({
  declarations: [SharetoolsComponent],
  imports: [
    MaterialModule,
    BrowserModule,
    FacebookModule.forRoot(),
    JwSocialButtonsModule
  ],
  exports: [SharetoolsComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class SharetoolsModule { }
