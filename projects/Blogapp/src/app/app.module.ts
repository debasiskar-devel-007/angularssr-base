import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogModule } from 'blog'
import { AppRoutingModule } from './app-routing.module';
import { AddComponent } from './add/add.component';
import { BloglistComponent } from './bloglist/bloglist.component';
//import {ResolveService} from './resolve.service';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    BloglistComponent
  ],
  imports: [
    BrowserModule,
    BlogModule,
    RouterModule,
    AppRoutingModule,
    //ResolveService
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
