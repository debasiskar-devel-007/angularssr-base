/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { TestimonialComponent } from './testimonial.component';
import { AddeditComponent, Modal, PreviewComponent } from './Components/addedit/addedit.component';
import { DemoMaterialModule } from './Modules/material-module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListingModule } from 'listing-angular7';
import { FileUploadModule } from 'file-upload-lib-influxiq';
var TestimonialModule = /** @class */ (function () {
    function TestimonialModule() {
    }
    TestimonialModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TestimonialComponent, AddeditComponent, Modal, PreviewComponent],
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
                    entryComponents: [Modal, PreviewComponent]
                },] }
    ];
    return TestimonialModule;
}());
export { TestimonialModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGltb25pYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVzdGltb25pYWwtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL3Rlc3RpbW9uaWFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUcsS0FBSyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDcEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFDLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFNUQ7SUFBQTtJQXFCQyxDQUFDOztnQkFyQkQsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQztvQkFDL0UsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixhQUFhO3dCQUNiLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUMsZ0JBQWdCLENBQUM7b0JBQ2hELGVBQWUsRUFBQyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBRTtpQkFFM0M7O0lBSUEsd0JBQUM7Q0FBQSxBQXJCRixJQXFCRTtTQUhXLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXN0aW1vbmlhbENvbXBvbmVudCB9IGZyb20gJy4vdGVzdGltb25pYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZGVkaXRDb21wb25lbnQgLCBNb2RhbCwgUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9hZGRlZGl0L2FkZGVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IERlbW9NYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vTW9kdWxlcy9tYXRlcmlhbC1tb2R1bGUnO1xuaW1wb3J0IHsgQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWFuZ3VsYXInO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaXN0aW5nLWFuZ3VsYXI3JztcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdmaWxlLXVwbG9hZC1saWItaW5mbHV4aXEnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUZXN0aW1vbmlhbENvbXBvbmVudCwgQWRkZWRpdENvbXBvbmVudCAsTW9kYWwsIFByZXZpZXdDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgRGVtb01hdGVyaWFsTW9kdWxlLFxuICAgIENLRWRpdG9yTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgTGlzdGluZ01vZHVsZSxcbiAgICBGaWxlVXBsb2FkTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtUZXN0aW1vbmlhbENvbXBvbmVudCxBZGRlZGl0Q29tcG9uZW50XSAsXG4gIGVudHJ5Q29tcG9uZW50czpbTW9kYWwsIFByZXZpZXdDb21wb25lbnQgXVxuICBcbn0pXG5leHBvcnQgY2xhc3MgVGVzdGltb25pYWxNb2R1bGUge1xuXG4gIFxuIH1cbiJdfQ==