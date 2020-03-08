/**
 * @fileoverview added by tsickle
 * Generated from: lib/blog.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BrowserModule } from '@angular/platform-browser';
import { DemoMaterialModule } from './material-module';
import { FileUploadModule } from 'file-upload-lib-influxiq';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AddBlogComponent, Modal2 } from './add-blog/add-blog.component';
import { ListingModule } from 'listing-angular7';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { AddeditBlogmanagementComponent, Modal, YoutubeComponent } from './addedit-blogmanagement/addedit-blogmanagement.component';
import { YoutubeplayerComponent } from './youtubeplayer/youtubeplayer.component';
import { ListingBlogmanagementlibComponent } from './listing-blogmanagementlib/listing-blogmanagementlib.component';
import { CKEditorModule } from 'ngx-ckeditor';
export class BlogModule {
}
BlogModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BlogComponent,
                    AddBlogComponent,
                    AddeditBlogmanagementComponent,
                    Modal,
                    YoutubeplayerComponent,
                    YoutubeComponent,
                    ListingBlogmanagementlibComponent, Modal2
                ],
                imports: [
                    DemoMaterialModule,
                    RouterModule,
                    AppRoutingModule,
                    ListingModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    BrowserModule,
                    FileUploadModule,
                    CommonModule,
                    CKEditorModule
                ],
                exports: [BlogComponent, AddBlogComponent, AddeditBlogmanagementComponent, ListingBlogmanagementlibComponent],
                providers: [ApiService],
                entryComponents: [Modal2, Modal, YoutubeComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9ibG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDhCQUE4QixFQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ25JLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUErQjlDLE1BQU0sT0FBTyxVQUFVOzs7WUE3QnRCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLDhCQUE4QjtvQkFDOUIsS0FBSztvQkFDTCxzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsaUNBQWlDLEVBQUMsTUFBTTtpQkFDekM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osY0FBYztpQkFFZjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsOEJBQThCLEVBQUMsaUNBQWlDLENBQUM7Z0JBQzVHLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDdkIsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQzthQUVsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9ibG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLW1vZHVsZSdcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdmaWxlLXVwbG9hZC1saWItaW5mbHV4aXEnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBZGRCbG9nQ29tcG9uZW50LE1vZGFsMiB9IGZyb20gJy4vYWRkLWJsb2cvYWRkLWJsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaXN0aW5nLWFuZ3VsYXI3JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFkZGVkaXRCbG9nbWFuYWdlbWVudENvbXBvbmVudCxNb2RhbCwgWW91dHViZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkZWRpdC1ibG9nbWFuYWdlbWVudC9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBZb3V0dWJlcGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi95b3V0dWJlcGxheWVyL3lvdXR1YmVwbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdCbG9nbWFuYWdlbWVudGxpYkNvbXBvbmVudCB9IGZyb20gJy4vbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ25neC1ja2VkaXRvcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJsb2dDb21wb25lbnQsXG4gICAgQWRkQmxvZ0NvbXBvbmVudCxcbiAgICBBZGRlZGl0QmxvZ21hbmFnZW1lbnRDb21wb25lbnQsXG4gICAgTW9kYWwsXG4gICAgWW91dHViZXBsYXllckNvbXBvbmVudCxcbiAgICBZb3V0dWJlQ29tcG9uZW50LFxuICAgIExpc3RpbmdCbG9nbWFuYWdlbWVudGxpYkNvbXBvbmVudCxNb2RhbDJcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZpbGVVcGxvYWRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENLRWRpdG9yTW9kdWxlXG4gIFxuICBdLFxuICBleHBvcnRzOiBbQmxvZ0NvbXBvbmVudCwgQWRkQmxvZ0NvbXBvbmVudCwgQWRkZWRpdEJsb2dtYW5hZ2VtZW50Q29tcG9uZW50LExpc3RpbmdCbG9nbWFuYWdlbWVudGxpYkNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbDIsTW9kYWwsIFlvdXR1YmVDb21wb25lbnRdLFxuXG59KVxuZXhwb3J0IGNsYXNzIEJsb2dNb2R1bGUgeyB9XG4iXX0=