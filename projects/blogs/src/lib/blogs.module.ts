import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlogsComponent } from './blogs.component';
import { TextBoxComponent } from './atoms/textbox';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { RadioComponent } from './atoms/radio';
import { FileComponent } from './atoms/file';
import { DropDownComponent } from './atoms/dropdown';
import { CheckBoxComponent } from './atoms/checkbox';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-module';

@NgModule({
  declarations: [BlogsComponent, 
    TextBoxComponent,
    FieldBuilderComponent,
    RadioComponent,
    FileComponent,
    DropDownComponent,
    CheckBoxComponent],
  imports: [
  
    CommonModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  exports: [BlogsComponent],
  providers:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogsModule { }
