import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {OnPageEditorModule} from 'on-page-editor';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactusModule } from 'contactus';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SocialMediaComponent } from './social-media/social-media.component';
// @ts-ignore
import { AutoShareModule } from 'auto-share';
import { LoginModule } from 'login';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { from } from 'rxjs';
import { ResetFromComponent } from './reset-from/reset-from.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    SocialMediaComponent,
    LoginComponent,
    ForgetPasswordComponent,
    SignUpComponent,
    ResetFromComponent
  ],
  imports: [
    BrowserModule,
    OnPageEditorModule,
    AppRoutingModule,
    ContactusModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AutoShareModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
