import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './Route/app-routing.module';
import { MaterialModule } from './Module/material-module';
import 'hammerjs';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';


/* Category Management Lib */
import { CategoryManagementModule } from 'category-management';
import { AddEditCategoryComponent } from './Component/category-management/add-edit-category/add-edit-category.component';
import { ListCategoryComponent } from './Component/category-management/list-category/list-category.component';

/* Category Management Lib */
import { LessionManagementModule } from 'lession-management';
import { ListLessionComponent } from './Component/lession-management/list-lession/list-lession.component';
import { AddEditLessionComponent } from './Component/lession-management/add-edit-lession/add-edit-lession.component';
import { TestComponent } from './Component/test/test.component';
import { ListingModule } from 'lib-listing';

/**Video Library **/
 import { VideoModule } from 'video';
import { VideoCategoryManagementComponent } from './Component/video-management/video-category-management/video-category-management.component';
import { ListVideosComponent } from './Component/video-management/list-videos/list-videos.component';
import { AddEditVideosComponent } from './Component/video-management/video-library-management/add-edit-videos/add-edit-videos.component';
import { ListVideoManagementComponent } from './Component/video-management/video-library-management/list-video-management/list-video-management.component';

/** Team Library**/
import { TeamModule } from 'team';
import { AddEditTeamComponent } from './Component/Team-Library/add-edit-team/add-edit-team.component';
import { ListTeamComponent } from './Component/Team-Library/list-team/list-team.component';
import { AddEditComponent } from './Component/Team-Library/Category-Management/add-edit/add-edit.component';
import { ListComponent } from './Component/Team-Library/Category-Management/list/list.component';
/**Share-tool Library**/
import { SharetoolsModule } from 'sharetools';
import { ShareToolComponent } from './Component/share-tool/share-tool.component';
/**Image Gallery start here**/
import { ImageGalleryModule } from 'image-gallery';
import { ListingCategoryComponent } from './Component/ImageGallery/categoryManagement/listing-category/listing-category.component';
import { AddeditImageCategoryComponent} from './Component/ImageGallery/categoryManagement/addedit-image-category/addedit-image-category.component';
@NgModule({
  declarations: [
    AppComponent,
    AddEditCategoryComponent,
    ListCategoryComponent,
    ListLessionComponent,
    AddEditLessionComponent,
    TestComponent,
    VideoCategoryManagementComponent,
    ListVideosComponent,
    AddEditVideosComponent,
    ListVideoManagementComponent,
    AddEditTeamComponent,
    ListTeamComponent,
    AddEditComponent,
    ListComponent,
    ShareToolComponent,
    ListingCategoryComponent,
    AddeditImageCategoryComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    CategoryManagementModule,
    LessionManagementModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ListingModule,
    VideoModule,
    TeamModule,
    SharetoolsModule,
    ImageGalleryModule

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
