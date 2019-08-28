import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login.component';
import { DemoMaterialModule } from './material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, ForgetPasswordComponent],
  imports: [
    DemoMaterialModule,
    FormsModule,
     ReactiveFormsModule,
     BrowserAnimationsModule,
     CommonModule,
     HttpClientModule
  ],
  exports: [LoginComponent, SignUpComponent, ForgetPasswordComponent],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
