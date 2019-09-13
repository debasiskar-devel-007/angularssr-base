import { NgModule } from '@angular/core';
import { UploadfileComponent } from './uploadfile.component';
import { DemoMaterialModule } from'./material-module';
//import { from } from 'rxjs';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
//import {UploadAdapter} from './uploadfile.component'

@NgModule({
  declarations: [UploadfileComponent],
  imports: [
    DemoMaterialModule,
    CKEditorModule,
    //UploadAdapter
    
    
  ],
  exports: [UploadfileComponent]
})
export class UploadfileModule { }
