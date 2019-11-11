/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { TestimonialComponent } from './testimonial.component';
import { AddeditComponent, Modal } from './Components/addedit/addedit.component';
import { DemoMaterialModule } from './Modules/material-module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListingModule } from 'listing-angular7';
import { FileUploadModule } from 'file-upload';
export class TestimonialModule {
}
TestimonialModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TestimonialComponent, AddeditComponent, Modal],
                imports: [
                    DemoMaterialModule,
                    CKEditorModule,
                    HttpClientModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                    BrowserModule,
                    ListingModule,
                    FileUploadModule
                ],
                exports: [TestimonialComponent, AddeditComponent],
                entryComponents: [Modal]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGltb25pYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVzdGltb25pYWwvIiwic291cmNlcyI6WyJsaWIvdGVzdGltb25pYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRyxLQUFLLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUMsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFtQi9DLE1BQU0sT0FBTyxpQkFBaUI7OztZQWpCN0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQztnQkFDN0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixhQUFhO29CQUNiLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hELGVBQWUsRUFBQyxDQUFDLEtBQUssQ0FBRTthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRlc3RpbW9uaWFsQ29tcG9uZW50IH0gZnJvbSAnLi90ZXN0aW1vbmlhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRlZGl0Q29tcG9uZW50ICwgTW9kYWwgfSBmcm9tICcuL0NvbXBvbmVudHMvYWRkZWRpdC9hZGRlZGl0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlbW9NYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vTW9kdWxlcy9tYXRlcmlhbC1tb2R1bGUnO1xyXG5pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYW5ndWxhcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTGlzdGluZ01vZHVsZSB9IGZyb20gJ2xpc3RpbmctYW5ndWxhcjcnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnZmlsZS11cGxvYWQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtUZXN0aW1vbmlhbENvbXBvbmVudCwgQWRkZWRpdENvbXBvbmVudCAsTW9kYWxdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcclxuICAgIENLRWRpdG9yTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBMaXN0aW5nTW9kdWxlLFxyXG4gICAgRmlsZVVwbG9hZE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1Rlc3RpbW9uaWFsQ29tcG9uZW50LEFkZGVkaXRDb21wb25lbnRdICxcclxuICBlbnRyeUNvbXBvbmVudHM6W01vZGFsIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRlc3RpbW9uaWFsTW9kdWxlIHsgfVxyXG4iXX0=