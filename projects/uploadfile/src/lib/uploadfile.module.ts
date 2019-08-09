import { NgModule } from '@angular/core';
import { UploadfileComponent } from './uploadfile.component';
import { DemoMaterialModule } from'./material-module';
//import { from } from 'rxjs';

@NgModule({
  declarations: [UploadfileComponent],
  imports: [DemoMaterialModule
  ],
  exports: [UploadfileComponent]
})
export class UploadfileModule { }
