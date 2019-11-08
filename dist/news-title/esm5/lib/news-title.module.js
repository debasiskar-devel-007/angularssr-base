/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewsTitleComponent, modalData } from './news-title.component';
import { DemoMaterialModule } from './material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { ListingNewsletterComponent } from './Components/listing-newsletter/listing-newsletter.component';
import { ListingModule } from 'listing-angular7';
import { AddEditSubcategoryComponent, Modal } from './Components/subscriptioncategory/add-edit-subcategory/add-edit-subcategory.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListingSubcategoryComponent } from './Components/subscriptioncategory/listing-subcategory/listing-subcategory.component';
import { AddEditSubscriptiongroupComponent, Modal2 } from './Components/add-edit-subscriptiongroup/add-edit-subscriptiongroup.component';
import { AddEditNewsletterlibComponent } from './Components/newsletter/add-edit-newsletterlib/add-edit-newsletterlib.component';
import { ListingNewsletterlibComponent } from './Components/newsletter/listing-newsletterlib/listing-newsletterlib.component';
import { AddEditSenderComponent, Modal3 } from './Components/senderslist/add-edit-sender/add-edit-sender.component';
import { ListingSenderComponent } from './Components/senderslist/listing-sender/listing-sender.component';
import { AddEditTestemaillibComponent, Modal4 } from './Components/testemails/add-edit-testemaillib/add-edit-testemaillib.component';
import { ListingTestemaillibComponent } from './Components/testemails/listing-testemaillib/listing-testemaillib.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
var NewsTitleModule = /** @class */ (function () {
    function NewsTitleModule() {
    }
    NewsTitleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [Modal4, Modal2, Modal, NewsTitleComponent, modalData, ListingNewsletterComponent,
                        AddEditSubcategoryComponent, ListingSubcategoryComponent, AddEditSubscriptiongroupComponent,
                        AddEditNewsletterlibComponent, ListingNewsletterlibComponent, AddEditSenderComponent,
                        ListingSenderComponent, Modal3, AddEditTestemaillibComponent, ListingTestemaillibComponent],
                    imports: [
                        DemoMaterialModule,
                        ReactiveFormsModule, FormsModule,
                        BrowserAnimationsModule,
                        CommonModule,
                        ListingModule,
                        RouterModule,
                        HttpClientModule,
                        AmazingTimePickerModule,
                        CKEditorModule
                    ],
                    exports: [AddEditSenderComponent, AddEditNewsletterlibComponent, AddEditSubscriptiongroupComponent,
                        Modal, NewsTitleComponent, ListingNewsletterComponent, AddEditSubcategoryComponent,
                        ListingSubcategoryComponent, AddEditTestemaillibComponent, ListingTestemaillibComponent,
                        ListingSenderComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [ApiService],
                    entryComponents: [Modal4, Modal3, NewsTitleComponent, modalData, Modal, Modal2]
                },] }
    ];
    return NewsTitleModule;
}());
export { NewsTitleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL25ld3MtdGl0bGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDMUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSwyQkFBMkIsRUFBQyxLQUFLLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUMxSSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDbEksT0FBTyxFQUFFLGlDQUFpQyxFQUFDLE1BQU0sRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQ3hJLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ2hJLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQzlILE9BQU8sRUFBRSxzQkFBc0IsRUFBRyxNQUFNLEVBQUMsTUFBTSxvRUFBb0UsQ0FBQztBQUNwSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMxRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUMsTUFBTSxFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDcEksT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDM0gsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdEO0lBQUE7SUF3QitCLENBQUM7O2dCQXhCL0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSwwQkFBMEI7d0JBQzFGLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLGlDQUFpQzt3QkFDM0YsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsc0JBQXNCO3dCQUNwRixzQkFBc0IsRUFBQyxNQUFNLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLENBQUM7b0JBQzVGLE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLG1CQUFtQixFQUFDLFdBQVc7d0JBQy9CLHVCQUF1Qjt3QkFDdkIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQix1QkFBdUI7d0JBQ3ZCLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUMsNkJBQTZCLEVBQUMsaUNBQWlDO3dCQUM5RixLQUFLLEVBQUMsa0JBQWtCLEVBQUMsMEJBQTBCLEVBQUMsMkJBQTJCO3dCQUMvRSwyQkFBMkIsRUFBQyw0QkFBNEIsRUFBQyw0QkFBNEI7d0JBQ3JGLHNCQUFzQixDQUFDO29CQUN6QixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDakMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUN2QixlQUFlLEVBQUMsQ0FBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxDQUFDO2lCQUMzRTs7SUFDOEIsc0JBQUM7Q0FBQSxBQXhCaEMsSUF3QmdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZXdzVGl0bGVDb21wb25lbnQsIG1vZGFsRGF0YSB9IGZyb20gJy4vbmV3cy10aXRsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLW1vZHVsZSc7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGlzdGluZ05ld3NsZXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvbGlzdGluZy1uZXdzbGV0dGVyL2xpc3RpbmctbmV3c2xldHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGlzdGluZy1hbmd1bGFyNyc7XHJcbmltcG9ydCB7IEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCxNb2RhbCB9IGZyb20gJy4vQ29tcG9uZW50cy9zdWJzY3JpcHRpb25jYXRlZ29yeS9hZGQtZWRpdC1zdWJjYXRlZ29yeS9hZGQtZWRpdC1zdWJjYXRlZ29yeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBMaXN0aW5nU3ViY2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvc3Vic2NyaXB0aW9uY2F0ZWdvcnkvbGlzdGluZy1zdWJjYXRlZ29yeS9saXN0aW5nLXN1YmNhdGVnb3J5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkZEVkaXRTdWJzY3JpcHRpb25ncm91cENvbXBvbmVudCxNb2RhbDIgfSBmcm9tICcuL0NvbXBvbmVudHMvYWRkLWVkaXQtc3Vic2NyaXB0aW9uZ3JvdXAvYWRkLWVkaXQtc3Vic2NyaXB0aW9uZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvbmV3c2xldHRlci9hZGQtZWRpdC1uZXdzbGV0dGVybGliL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdGluZ05ld3NsZXR0ZXJsaWJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvbmV3c2xldHRlci9saXN0aW5nLW5ld3NsZXR0ZXJsaWIvbGlzdGluZy1uZXdzbGV0dGVybGliLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkZEVkaXRTZW5kZXJDb21wb25lbnQgLCBNb2RhbDN9IGZyb20gJy4vQ29tcG9uZW50cy9zZW5kZXJzbGlzdC9hZGQtZWRpdC1zZW5kZXIvYWRkLWVkaXQtc2VuZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpc3RpbmdTZW5kZXJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvc2VuZGVyc2xpc3QvbGlzdGluZy1zZW5kZXIvbGlzdGluZy1zZW5kZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkRWRpdFRlc3RlbWFpbGxpYkNvbXBvbmVudCxNb2RhbDQgfSBmcm9tICcuL0NvbXBvbmVudHMvdGVzdGVtYWlscy9hZGQtZWRpdC10ZXN0ZW1haWxsaWIvYWRkLWVkaXQtdGVzdGVtYWlsbGliLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpc3RpbmdUZXN0ZW1haWxsaWJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvdGVzdGVtYWlscy9saXN0aW5nLXRlc3RlbWFpbGxpYi9saXN0aW5nLXRlc3RlbWFpbGxpYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbWF6aW5nVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJ2FtYXppbmctdGltZS1waWNrZXInO1xyXG5pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYW5ndWxhcic7XHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTW9kYWw0LE1vZGFsMixNb2RhbCxOZXdzVGl0bGVDb21wb25lbnQsIG1vZGFsRGF0YSwgTGlzdGluZ05ld3NsZXR0ZXJDb21wb25lbnQsIFxyXG4gICAgQWRkRWRpdFN1YmNhdGVnb3J5Q29tcG9uZW50LCBMaXN0aW5nU3ViY2F0ZWdvcnlDb21wb25lbnQsIEFkZEVkaXRTdWJzY3JpcHRpb25ncm91cENvbXBvbmVudCwgXHJcbiAgICBBZGRFZGl0TmV3c2xldHRlcmxpYkNvbXBvbmVudCwgTGlzdGluZ05ld3NsZXR0ZXJsaWJDb21wb25lbnQsIEFkZEVkaXRTZW5kZXJDb21wb25lbnQsIFxyXG4gICAgTGlzdGluZ1NlbmRlckNvbXBvbmVudCxNb2RhbDMsIEFkZEVkaXRUZXN0ZW1haWxsaWJDb21wb25lbnQsIExpc3RpbmdUZXN0ZW1haWxsaWJDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsRm9ybXNNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIExpc3RpbmdNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgQW1hemluZ1RpbWVQaWNrZXJNb2R1bGUsXHJcbiAgICBDS0VkaXRvck1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0FkZEVkaXRTZW5kZXJDb21wb25lbnQsQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQsQWRkRWRpdFN1YnNjcmlwdGlvbmdyb3VwQ29tcG9uZW50LFxyXG4gICAgTW9kYWwsTmV3c1RpdGxlQ29tcG9uZW50LExpc3RpbmdOZXdzbGV0dGVyQ29tcG9uZW50LEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCxcclxuICAgIExpc3RpbmdTdWJjYXRlZ29yeUNvbXBvbmVudCxBZGRFZGl0VGVzdGVtYWlsbGliQ29tcG9uZW50LExpc3RpbmdUZXN0ZW1haWxsaWJDb21wb25lbnQsXHJcbiAgICBMaXN0aW5nU2VuZGVyQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXHJcbiAgcHJvdmlkZXJzOiBbQXBpU2VydmljZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOltNb2RhbDQsTW9kYWwzLE5ld3NUaXRsZUNvbXBvbmVudCwgbW9kYWxEYXRhLE1vZGFsLE1vZGFsMl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld3NUaXRsZU1vZHVsZSB7IH1cclxuXHJcblxyXG5cclxuIl19