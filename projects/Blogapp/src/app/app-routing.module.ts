import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { BloglistComponent } from './bloglist/bloglist.component'
import { ResolveService } from './resolve.service';
import { AddeditBlogmanagementComponent} from './addedit-blogmanagement/addedit-blogmanagement.component';

/* Routes path */
const appRoutes: Routes = [
  /* Blog Management Routes Start */
  { path: 'blog', component: BloglistComponent },
  {
    path: 'blog/list', component: BloglistComponent, resolve: { results: ResolveService },
    data: { requestcondition: { source: 'blog_category_view', condition: {} }, endpoint: 'datalist' }
  },
  { path: 'blog/add', component: AddComponent },
  {
    path: 'blog/edit/:id', component: AddComponent, resolve: { results: ResolveService },
    data: { requestcondition: { source: 'blog_category', condition: { key_id: '' } }, endpoint: 'datalist' }
  },
  { path:'blog-management/add' , component: AddeditBlogmanagementComponent}
  /* Blog Management Routes End */
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }