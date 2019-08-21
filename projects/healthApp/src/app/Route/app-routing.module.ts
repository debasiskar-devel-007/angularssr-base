import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCategoryComponent } from '../Component/list-category/list-category.component';
import { AddEditCategoryComponent } from '../Component/add-edit-category/add-edit-category.component';
import { ResolveService } from '../service/resolve.service';

const appRoutes: Routes = [
    /* Category Management Routes Start */
    { path:'category-management', component: ListCategoryComponent, resolve: { categoryListData: ResolveService } },
    { path:'category-management/list', component: ListCategoryComponent, resolve: { categoryListData: ResolveService } },
    { path:'category-management/create-new', component: AddEditCategoryComponent },
    { path:'category-management/edit/:_id', component: AddEditCategoryComponent },
    /* Category Management Routes End */
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
