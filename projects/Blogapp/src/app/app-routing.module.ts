import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { AddComponent } from './add/add.component';
import { BloglistComponent } from './bloglist/bloglist.component'
import { ResolveService } from './resolve.service';

/* Routes path */
const appRoutes: Routes = [
  /* Blog Management Routes Start */
  { path: 'blog', component: BloglistComponent },
  { path: 'blog/list', component: BloglistComponent,resolve: { BlogList : ResolveService}},
  { path: 'blog/add', component: AddComponent },
  { path: 'blog/edit/:id', component: AddComponent }
  /* Blog Management Routes End */
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }