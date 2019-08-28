import { NgModule } from '@angular/core';
import { AutoShareComponent } from './auto-share.component';
import {DemoMaterialModule} from './material-module';
import { SocialMediaManagementComponent } from './social-media-management/social-media-management.component';

@NgModule({
  declarations: [AutoShareComponent, SocialMediaManagementComponent],
  imports: [
    DemoMaterialModule,
  ],
  exports: [AutoShareComponent, SocialMediaManagementComponent]
  
})
export class AutoShareModule { }
