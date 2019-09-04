import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { AddEditCategoryComponent } from './lib/component/add-edit-category/add-edit-category.component';
import { ListCategoryComponent } from './lib/component/list-category/list-category.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path:'add-team',component: AddEditCategoryComponent },
  { path:'edit',component: ListCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
