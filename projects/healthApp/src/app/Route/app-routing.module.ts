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
import { AddEditTeamComponent } from '../Component/Team-Library/add-edit-team/add-edit-team.component';
import { AddEditComponent } from '../Component/Team-Library/Category-Management/add-edit/add-edit.component';
import { ListComponent } from '../Component/Team-Library/Category-Management/list/list.component';
/**Share-tools Library**/
import { ShareToolComponent } from '../Component/share-tool/share-tool.component';
/**Image-Gallery start here**/
import { AddeditImageCategoryComponent } from '../Component/ImageGallery/categoryManagement/addedit-image-category/addedit-image-category.component';
import { ListingCategoryComponent } from '../Component/ImageGallery/categoryManagement/listing-category/listing-category.component'
import { AddeditImageComponent } from '../Component/ImageGallery/ImageManagement/addedit-image/addedit-image.component';
import { ListImagesComponent } from '../Component/ImageGallery/ImageManagement/list-images/list-images.component';
import { from } from 'rxjs';


const appRoutes: Routes = [
  /* Category Management Routes Start */
  {
    path: 'category-management',
    component: ListCategoryComponent,
    resolve: { categoryListData: ResolveService },
    data: { requestcondition: { source: 'category', condition: {} }, endpoint: 'datalist' }
  },
  { path: 'test', component: TestComponent },
  {
    path: 'category-management/list',
    component: ListCategoryComponent,
    resolve: { categoryListData: ResolveService },
    data: { requestcondition: { source: 'category', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'category-management/create-new',
    component: AddEditCategoryComponent
  },
  {
    path: 'category-management/edit/:_id',
    component: AddEditCategoryComponent,
    resolve: { categoryData: ResolveService },
    data: { requestcondition: { source: 'category', condition: {} }, endpoint: 'datalist' }
  },
  /* Category Management Routes End */

  /* Lesson Management Routes Start */
  {
    path: 'lession-management',
    component: ListLessionComponent,
    resolve: { lessionData: ResolveService },
    data: { requestcondition: { source: 'lession', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'lession-management/list',
    component: ListLessionComponent,
    resolve: { lessionData: ResolveService },
    data: { requestcondition: { source: 'lession', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'lession-management/create-new',
    component: AddEditLessionComponent
  },
  {
    path: 'lession-management/edit/:_id',
    component: AddEditLessionComponent,
    resolve: { lessionData: ResolveService },
    data: { requestcondition: { source: 'lession', condition: {} }, endpoint: 'datalist' }
  },
  /* Lesson Management Routes End */

  /** Video category Library start Route here**/
  {
    path: 'video-category/list',
    component: ListVideosComponent,
    resolve: { videoData: ResolveService },
    data: {
      requestcondition: {
        source: 'video_category_view', 
        "condition": {
          "limit": 10,
          "skip": 0
        },
        "sort": {
          "type": "desc",
          "field": "title"
        }
      }, endpoint: 'videocategorydata'
    }

  },
  {
    path: 'video-category/add',
    component: VideoCategoryManagementComponent,

  },
  {

    path: 'video-category/edit/:_id',
    component: VideoCategoryManagementComponent,
    resolve: { videoData: ResolveService },
    data: { requestcondition: { source: 'video_category', condition: {} }, endpoint: 'getvideocategorydata' }
  },

  /** Video Library End Route here**/
  /** Video Library management start here**/
  {
    path: 'video-library-management/add',
    component: AddEditVideosComponent

  },

  {
    path: 'video-library-management/edit/:_id',
    component: AddEditVideosComponent,
    resolve: { videodata: ResolveService },
    data: { requestcondition: { source: 'video_management', condition: {} }, endpoint: 'getvideodata' }

  },
  {
    path: 'video-library-management/list',
    component: ListVideoManagementComponent,
    resolve: { videoData: ResolveService },
    data: { requestcondition: { source: 'video_management_view', condition: {} }, endpoint: 'videogallerydata' }
  },

  /**Team Library start here**/

  {
    path: 'team/list',
    component: ListTeamComponent,
    resolve: { teamdata: ResolveService },
    data: { requestcondition: { source: 'team_management_view', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'team/add',
    component: AddEditTeamComponent,
    resolve: { teamdata: ResolveService },
    data: { requestcondition: { source: 'team_category', condition: {} }, endpoint: 'datalist' },

  },
  {
    path: 'team/edit/:_id',
    component: AddEditTeamComponent,
    resolve: { teamdata: ResolveService },
    data: { requestcondition: { source: 'team_management', condition: {} }, endpoint: 'datalist' },

  },
  {
    path: 'team/category-management/add',
    component: AddEditComponent,
    // resolve : {teamdata : ResolveService },
    // data : { requestcondition : { source : 'rolemanagement',condition : {}}, endpoint : 'datalist'}
  },
  {
    path: 'team/category-management/edit/:_id',
    component: AddEditComponent,
    resolve: { teamdata: ResolveService },
    data: { requestcondition: { source: 'team_category', condition: {} }, endpoint: 'datalist' },


  },
  {
    path: 'team/category-management/list',
    component: ListComponent,
    resolve: { teamdata: ResolveService },
    data: { requestcondition: { source: 'team_category_view', condition: {} }, endpoint: 'datalist' }
  },
  /**share-tool library start here**/
  {
    path: 'sharetool/home',
    component: ShareToolComponent
  },
  // {
  //   path : '',
  //   component : ShareToolComponent 
  // },
  /**Image Gallery start here**/
  {
    path: 'image-gallery/category-management/add',
    component: AddeditImageCategoryComponent
  },
  {
    path: 'image-gallery/category-management/edit/:_id',
    component: AddeditImageCategoryComponent,
    resolve: { ImageData: ResolveService },
    data: { requestcondition: { source: 'imageGallery_category', condition: {} }, endpoint: 'getimagecategorydata' },
  },
  {
    path: 'image-gallery/category-management/list',
    component: ListingCategoryComponent,
    resolve: { ImageData: ResolveService },
    data: { requestcondition: { source: 'imageGallery_category_view', condition: {
      limit: 10,
      skip: 0
    },
    sort: {
      type: 'desc',                                       
      field: 'title' 
    } }, endpoint: 'imagecategorydata' }
  },
  {
    path: 'image-gallery/add',
    component: AddeditImageComponent
  },
  {
    path: 'image-gallery/edit/:_id',
    component: AddeditImageComponent,
    resolve: { ImageData: ResolveService },
    data: { requestcondition: { source: 'imageGallery_management', condition: {} }, endpoint: 'getimagedata' }
  },
  {
    path: 'image-gallery/list',
    component: ListImagesComponent,
    resolve: { ImageData: ResolveService },
    data: { requestcondition: { source: 'imageGallery_management_view', condition: {} }, endpoint: 'datalist' }
  },


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  constructor(public cookieService: CookieService) {
  }

}
