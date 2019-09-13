import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { BloglistComponent } from './bloglist/bloglist.component'
import { ResolveService } from './resolve.service';
<<<<<<< HEAD
import { AddeditBlogmanagementComponent} from './addedit-blogmanagement/addedit-blogmanagement.component';
=======
>>>>>>> 7acdf98a6e6573520ca6d7aa154b7eefa094645b

/* Routes path */
const appRoutes: Routes = [
  /* Blog Management Routes Start */
  { path: 'blog', component: BloglistComponent },
<<<<<<< HEAD
  {
    path: 'blog/list', component: BloglistComponent, resolve: { results: ResolveService },
    data: { requestcondition: { source: 'blog_category_view', condition: {} }, endpoint: 'datalist' }
  },
  { 
    path: 'blog/add', component: AddComponent,resolve :{results :ResolveService},
    data:{requestcondition:{source:'blog_category_view',condition:{}},endpoint:'datalist'} 
  },
  {
    path: 'blog/edit/:id', component: AddComponent, resolve: { results: ResolveService },
    data: { requestcondition: { source: 'blog_category', condition: { key_id: '' } }, endpoint: 'datalist' }
  },
  { path:'blog-management/add' , component: AddeditBlogmanagementComponent}
=======
  { path: 'blog/list', component: BloglistComponent,resolve: {results: ResolveService},
   data: { requestcondition:{source: 'blog_category_view', condition: {} },endpoint:'datalist'}},

  { path: 'blog/add', component: AddComponent },

  { path: 'blog/edit/:id', component: AddComponent,resolve: {results: ResolveService},
  data: { requestcondition:{source: 'blog_category', condition: {key_id:''} },endpoint:'datalist'} }
>>>>>>> 7acdf98a6e6573520ca6d7aa154b7eefa094645b
  /* Blog Management Routes End */
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }