import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { BloglistComponent } from './bloglist/bloglist.component'
import { ResolveService } from './resolve.service';
import { AddeditBlogmanagementComponent } from './addedit-blogmanagement/addedit-blogmanagement.component';
import { ListingBlogmanagementComponent } from './listing-blogmanagement/listing-blogmanagement.component';

/* Routes path */
const appRoutes: Routes = [
  /* Blog Management Routes Start */

  // ______________________BLOG CATEGORY___________________
  
  { path: 'blog-category/add', component: AddComponent },
  {
    path: 'blog-category/list',
    component: BloglistComponent,
    resolve: { blogCatList: ResolveService },
    data: { requestcondition: { source: 'blog_category_view', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'blog-category/edit/:_id',
    component: AddComponent,
    resolve: { blogCatList: ResolveService },
    data: { requestcondition: { source: '', condition: {_id:"_id"} }, endpoint: 'getcategorydata' }
  },


  // ______________________BLOG LIST____________________

  
  { path: 'blog-management/add', component: AddeditBlogmanagementComponent },
  {
    path: 'blog-management/list',
    component: ListingBlogmanagementComponent,
    resolve: { blogList: ResolveService },
    data: { requestcondition: { source: 'blogs_desc_priority', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'blog-management/edit/:_id',
    component: AddeditBlogmanagementComponent,
    resolve: { blogList: ResolveService },
    data: { requestcondition: { source: 'blogs', condition: {} }, endpoint: 'datalist' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }