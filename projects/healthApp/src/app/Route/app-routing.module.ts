import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveService } from '../service/resolve.service';
import { CookieService } from 'ngx-cookie-service';

/* Category Management */
import { ListCategoryComponent } from '../Component/category-management/list-category/list-category.component';
import { AddEditCategoryComponent } from '../Component/category-management/add-edit-category/add-edit-category.component';

/* lesson Management */
import { ListLessionComponent } from '../Component/lession-management/list-lession/list-lession.component';
import { AddEditLessionComponent } from '../Component/lession-management/add-edit-lession/add-edit-lession.component';

/* Test route */
import { TestComponent } from '../Component/test/test.component';
import { SetCookieComponent } from 'src/app/set-cookie/set-cookie.component';
/** Video Library**/
import { ListVideosComponent } from '../Component/video-management/list-videos/list-videos.component';
import { VideoCategoryManagementComponent } from '../Component/video-management/video-category-management/video-category-management.component';
import { AddEditVideosComponent } from '../Component/video-management/video-library-management/add-edit-videos/add-edit-videos.component';
import { ListVideoManagementComponent } from '../Component/video-management/video-library-management/list-video-management/list-video-management.component'
/**Team Library**/
import { ListTeamComponent } from '../Component/Team-Library/list-team/list-team.component';
import { AddEditTeamComponent} from '../Component/Team-Library/add-edit-team/add-edit-team.component';
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
    
    /** Video Library start Route here**/
    { 
      path:'video-management/list',
      component: ListVideosComponent,
      resolve:{ videoData : ResolveService},
      data:{ requestcondition : {source:'video_category_view',condition:{} },endpoint:'datalist'}
      
    },
    { 
      path:'video-management/add',
      component: VideoCategoryManagementComponent,
      resolve:{ videoData : ResolveService},
      data:{ requestcondition : {source:'video_category',condition:{} },endpoint:'datalist'}
    },
    { 

      path:'video-management/edit/:_id',
      component: VideoCategoryManagementComponent,
      resolve:{ videoData : ResolveService},
      data:{ requestcondition : {source:'video_category',condition:{} },endpoint:'datalist'}
    },

    /** Video Library End Route here**/
    /** Video Library management start here**/
    { 
      path:'video-library-management/add',
      component: AddEditVideosComponent
      
    },
    
     { 
      path:'video-library-management/edit/:_id',
      component: AddEditVideosComponent,
      resolve : {videodata : ResolveService },
      data : { requestcondition : {source : 'video_management', condition : {} },endpoint :'datalist'}
      
    },
    { 
      path:'video-library-management/list',
      component: ListVideoManagementComponent,
      resolve:{ videoData : ResolveService },
      data : {requestcondition : {source :'video_management',condition : {} }, endpoint : 'datalist'}
    },
    /**Team Library start here**/
    {
      path:'team/list',
      component : ListTeamComponent
    },
    {
      path:'team/add',
      component : AddEditTeamComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  constructor(public cookieService: CookieService) {
  }
  
}
