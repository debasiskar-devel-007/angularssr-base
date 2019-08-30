import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveService } from '../service/resolve.service';
import { CookieService } from 'ngx-cookie-service';

/* Category Management */
import { ListCategoryComponent } from '../Component/category-management/list-category/list-category.component';
import { AddEditCategoryComponent } from '../Component/category-management/add-edit-category/add-edit-category.component';

/* Category Management */
import { ListLessionComponent } from '../Component/lession-management/list-lession/list-lession.component';
import { AddEditLessionComponent } from '../Component/lession-management/add-edit-lession/add-edit-lession.component';

/* Test route */
import { TestComponent } from '../Component/test/test.component';
import { SetCookieComponent } from 'src/app/set-cookie/set-cookie.component';

const appRoutes: Routes = [
    /* Category Management Routes Start */
    { 
      path:'category-management',
      component: ListCategoryComponent,
      resolve: { categoryListData: ResolveService },
      data: { requestcondition: { source: 'category', condition: {} }, endpoint: 'datalist'}
    },
    {
      path:'category-management/list',
      component: ListCategoryComponent,
      resolve: { categoryListData: ResolveService },
      data: { requestcondition: { source: 'category', condition: {} }, endpoint: 'datalist'}
    },
    {
      path:'category-management/create-new',
      component: AddEditCategoryComponent
    },
    { 
      path:'category-management/edit/:_id',
      component: AddEditCategoryComponent,
      resolve: { categoryData: ResolveService },
      data: { requestcondition: { source: 'category', condition: {} }, endpoint: 'datalist'}
    },
    /* Category Management Routes End */

    /* Lesson Management Routes Start */
    { 
      path:'lession-management',
      component: ListLessionComponent,
      resolve: { lessionData: ResolveService },
      data: { requestcondition: { source: 'lession', condition: {} }, endpoint: 'datalist'}
    },
    {
      path:'lession-management/list',
      component: ListLessionComponent,
      resolve: { lessionData: ResolveService },
      data: { requestcondition: { source: 'lession', condition: {} }, endpoint: 'datalist'}
    },
    {
      path:'lession-management/create-new',
      component: AddEditLessionComponent
    },
    { 
      path:'lession-management/edit/:_id',
      component: AddEditLessionComponent,
      resolve: { lessionData: ResolveService },
      data: { requestcondition: { source: 'lession', condition: {} }, endpoint: 'datalist'}
    },
    /* Lesson Management Routes End */

    /* Test Route */
    // { path:'', component: TestComponent },
    // { path:'test', component: TestComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  constructor(public cookieService: CookieService) {
  }
  
}
