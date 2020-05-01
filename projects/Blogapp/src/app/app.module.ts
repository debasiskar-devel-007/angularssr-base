import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { BlogModule } from 'blog';
import { AppRoutingModule } from './app-routing.module';
import { AddComponent } from './add/add.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { DemoMaterialModule } from './material-module'
import { CookieService } from 'ngx-cookie-service';
import { AddeditBlogmanagementComponent } from './addedit-blogmanagement/addedit-blogmanagement.component';
import { ListingBlogmanagementComponent} from './listing-blogmanagement/listing-blogmanagement.component';
import { BlogModule } from 'blog';

//import {ResolveService} from './resolve.service';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    BloglistComponent,
    AddeditBlogmanagementComponent,
    ListingBlogmanagementComponent
    
  ],
  imports: [
    BrowserModule,
    BlogModule,
    RouterModule,
    AppRoutingModule,
    DemoMaterialModule
    //ResolveService
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
