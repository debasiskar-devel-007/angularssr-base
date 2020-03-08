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
var BlogModule = /** @class */ (function () {
    function BlogModule() {
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
    return BlogModule;
}());
export { BlogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9ibG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDhCQUE4QixFQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ25JLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFOUM7SUFBQTtJQTZCMEIsQ0FBQzs7Z0JBN0IxQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQiw4QkFBOEI7d0JBQzlCLEtBQUs7d0JBQ0wsc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLGlDQUFpQyxFQUFDLE1BQU07cUJBQ3pDO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLGNBQWM7cUJBRWY7b0JBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLDhCQUE4QixFQUFDLGlDQUFpQyxDQUFDO29CQUM1RyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ3ZCLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUM7aUJBRWxEOztJQUN5QixpQkFBQztDQUFBLEFBN0IzQixJQTZCMkI7U0FBZCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJsb2dDb21wb25lbnQgfSBmcm9tICcuL2Jsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERlbW9NYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwtbW9kdWxlJ1xuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ2ZpbGUtdXBsb2FkLWxpYi1pbmZsdXhpcSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFkZEJsb2dDb21wb25lbnQsTW9kYWwyIH0gZnJvbSAnLi9hZGQtYmxvZy9hZGQtYmxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdGluZ01vZHVsZSB9IGZyb20gJ2xpc3RpbmctYW5ndWxhcjcnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWRkZWRpdEJsb2dtYW5hZ2VtZW50Q29tcG9uZW50LE1vZGFsLCBZb3V0dWJlQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50L2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFlvdXR1YmVwbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL3lvdXR1YmVwbGF5ZXIveW91dHViZXBsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50JztcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmd4LWNrZWRpdG9yJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQmxvZ0NvbXBvbmVudCxcbiAgICBBZGRCbG9nQ29tcG9uZW50LFxuICAgIEFkZGVkaXRCbG9nbWFuYWdlbWVudENvbXBvbmVudCxcbiAgICBNb2RhbCxcbiAgICBZb3V0dWJlcGxheWVyQ29tcG9uZW50LFxuICAgIFlvdXR1YmVDb21wb25lbnQsXG4gICAgTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50LE1vZGFsMlxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgRGVtb01hdGVyaWFsTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIExpc3RpbmdNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRmlsZVVwbG9hZE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ0tFZGl0b3JNb2R1bGVcbiAgXG4gIF0sXG4gIGV4cG9ydHM6IFtCbG9nQ29tcG9uZW50LCBBZGRCbG9nQ29tcG9uZW50LCBBZGRlZGl0QmxvZ21hbmFnZW1lbnRDb21wb25lbnQsTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbQXBpU2VydmljZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW01vZGFsMixNb2RhbCwgWW91dHViZUNvbXBvbmVudF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQmxvZ01vZHVsZSB7IH1cbiJdfQ==