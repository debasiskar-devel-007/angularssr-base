/**
 * @fileoverview added by tsickle
 * Generated from: lib/servicelib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ServicelibComponent } from './servicelib.component';
import { DemoMaterialModule } from './modules/material-module';
import { AddeditServiceComponent, Modal } from './Component/addedit-service/addedit-service.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ngx-ckeditor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListingModule } from 'listing-angular7';
import { FileUploadModule } from 'file-upload-lib-influxiq';
import { CookieService } from 'ngx-cookie-service';
export class ServicelibModule {
}
ServicelibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ServicelibComponent, AddeditServiceComponent, Modal],
                imports: [
                    DemoMaterialModule,
                    HttpClientModule,
                    RouterModule,
                    CKEditorModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                    BrowserModule,
                    ListingModule,
                    FileUploadModule
                ],
                exports: [ServicelibComponent, AddeditServiceComponent, Modal],
                entryComponents: [Modal],
                providers: [CookieService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXJ2aWNlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRyxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFvQm5ELE1BQU0sT0FBTyxnQkFBZ0I7OztZQWxCNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFDLHVCQUF1QixFQUFDLEtBQUssQ0FBQztnQkFDakUsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLGNBQWM7b0JBQ2QsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixhQUFhO29CQUNiLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUMsdUJBQXVCLEVBQUMsS0FBSyxDQUFDO2dCQUM1RCxlQUFlLEVBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZCLFNBQVMsRUFBQyxDQUFDLGFBQWEsQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXJ2aWNlbGliQ29tcG9uZW50IH0gZnJvbSAnLi9zZXJ2aWNlbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvbWF0ZXJpYWwtbW9kdWxlJztcbmltcG9ydCB7IEFkZGVkaXRTZXJ2aWNlQ29tcG9uZW50ICxNb2RhbH0gZnJvbSAnLi9Db21wb25lbnQvYWRkZWRpdC1zZXJ2aWNlL2FkZGVkaXQtc2VydmljZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ25neC1ja2VkaXRvcic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlICwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTGlzdGluZ01vZHVsZSB9IGZyb20gJ2xpc3RpbmctYW5ndWxhcjcnO1xuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ2ZpbGUtdXBsb2FkLWxpYi1pbmZsdXhpcSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2VydmljZWxpYkNvbXBvbmVudCxBZGRlZGl0U2VydmljZUNvbXBvbmVudCxNb2RhbF0sXG4gIGltcG9ydHM6IFtcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQ0tFZGl0b3JNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICAgIEZpbGVVcGxvYWRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1NlcnZpY2VsaWJDb21wb25lbnQsQWRkZWRpdFNlcnZpY2VDb21wb25lbnQsTW9kYWxdLFxuICBlbnRyeUNvbXBvbmVudHM6W01vZGFsXSxcbiAgcHJvdmlkZXJzOltDb29raWVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlbGliTW9kdWxlIHsgfVxuIl19