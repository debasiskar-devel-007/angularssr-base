/**
 * @fileoverview added by tsickle
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
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { AddeditBlogmanagementComponent, Modal, YoutubeComponent } from './addedit-blogmanagement/addedit-blogmanagement.component';
import { YoutubeplayerComponent } from './youtubeplayer/youtubeplayer.component';
import { ListingBlogmanagementlibComponent } from './listing-blogmanagementlib/listing-blogmanagementlib.component';
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
                    CKEditorModule,
                    FileUploadModule,
                    CommonModule,
                ],
                exports: [BlogComponent, AddBlogComponent, AddeditBlogmanagementComponent, ListingBlogmanagementlibComponent],
                providers: [ApiService],
                entryComponents: [Modal2, Modal, YoutubeComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9ibG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDhCQUE4QixFQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ25JLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBZ0NwSCxNQUFNLE9BQU8sVUFBVTs7O1lBN0J0QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQiw4QkFBOEI7b0JBQzlCLEtBQUs7b0JBQ0wsc0JBQXNCO29CQUN0QixnQkFBZ0I7b0JBQ2hCLGlDQUFpQyxFQUFDLE1BQU07aUJBQ3pDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLFlBQVk7aUJBRWI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLDhCQUE4QixFQUFDLGlDQUFpQyxDQUFDO2dCQUM1RyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZCLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUM7YUFFbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmxvZ0NvbXBvbmVudCB9IGZyb20gJy4vYmxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRGVtb01hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC1tb2R1bGUnXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnZmlsZS11cGxvYWQtbGliLWluZmx1eGlxJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQWRkQmxvZ0NvbXBvbmVudCxNb2RhbDIgfSBmcm9tICcuL2FkZC1ibG9nL2FkZC1ibG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGlzdGluZy1hbmd1bGFyNyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1hbmd1bGFyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZGRlZGl0QmxvZ21hbmFnZW1lbnRDb21wb25lbnQsTW9kYWwsIFlvdXR1YmVDb21wb25lbnQgfSBmcm9tICcuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQvYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgWW91dHViZXBsYXllckNvbXBvbmVudCB9IGZyb20gJy4veW91dHViZXBsYXllci95b3V0dWJlcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnQgfSBmcm9tICcuL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIvbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJsb2dDb21wb25lbnQsXG4gICAgQWRkQmxvZ0NvbXBvbmVudCxcbiAgICBBZGRlZGl0QmxvZ21hbmFnZW1lbnRDb21wb25lbnQsXG4gICAgTW9kYWwsXG4gICAgWW91dHViZXBsYXllckNvbXBvbmVudCxcbiAgICBZb3V0dWJlQ29tcG9uZW50LFxuICAgIExpc3RpbmdCbG9nbWFuYWdlbWVudGxpYkNvbXBvbmVudCxNb2RhbDJcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENLRWRpdG9yTW9kdWxlLFxuICAgIEZpbGVVcGxvYWRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBcbiAgXSxcbiAgZXhwb3J0czogW0Jsb2dDb21wb25lbnQsIEFkZEJsb2dDb21wb25lbnQsIEFkZGVkaXRCbG9nbWFuYWdlbWVudENvbXBvbmVudCxMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTW9kYWwyLE1vZGFsLCBZb3V0dWJlQ29tcG9uZW50XSxcblxufSlcbmV4cG9ydCBjbGFzcyBCbG9nTW9kdWxlIHsgfVxuIl19