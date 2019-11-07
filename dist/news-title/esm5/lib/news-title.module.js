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
                        ListingSubcategoryComponent, AddEditTestemaillibComponent, ListingTestemaillibComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [ApiService],
                    entryComponents: [Modal4, Modal3, NewsTitleComponent, modalData, Modal, Modal2]
                },] }
    ];
    return NewsTitleModule;
}());
export { NewsTitleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL25ld3MtdGl0bGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDMUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSwyQkFBMkIsRUFBQyxLQUFLLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUMxSSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDbEksT0FBTyxFQUFFLGlDQUFpQyxFQUFDLE1BQU0sRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQ3hJLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ2hJLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQzlILE9BQU8sRUFBRSxzQkFBc0IsRUFBRyxNQUFNLEVBQUMsTUFBTSxvRUFBb0UsQ0FBQztBQUNwSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMxRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUMsTUFBTSxFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDcEksT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDM0gsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRzdEO0lBQUE7SUF3QitCLENBQUM7O2dCQXhCL0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSwwQkFBMEI7d0JBQzFGLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLGlDQUFpQzt3QkFDM0YsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsc0JBQXNCO3dCQUNwRixzQkFBc0IsRUFBQyxNQUFNLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLENBQUM7b0JBQzVGLE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLG1CQUFtQixFQUFDLFdBQVc7d0JBQy9CLHVCQUF1Qjt3QkFDdkIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQix1QkFBdUI7d0JBQ3ZCLGNBQWM7cUJBRWY7b0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUMsNkJBQTZCLEVBQUMsaUNBQWlDO3dCQUM5RixLQUFLLEVBQUMsa0JBQWtCLEVBQUMsMEJBQTBCLEVBQUMsMkJBQTJCO3dCQUMvRSwyQkFBMkIsRUFBQyw0QkFBNEIsRUFBQyw0QkFBNEIsQ0FBQztvQkFDeEYsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ2pDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDdkIsZUFBZSxFQUFDLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQztpQkFDM0U7O0lBQzhCLHNCQUFDO0NBQUEsQUF4QmhDLElBd0JnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5ld3NUaXRsZUNvbXBvbmVudCwgbW9kYWxEYXRhIH0gZnJvbSAnLi9uZXdzLXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLW1vZHVsZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBMaXN0aW5nTmV3c2xldHRlckNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9saXN0aW5nLW5ld3NsZXR0ZXIvbGlzdGluZy1uZXdzbGV0dGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGlzdGluZy1hbmd1bGFyNyc7XG5pbXBvcnQgeyBBZGRFZGl0U3ViY2F0ZWdvcnlDb21wb25lbnQsTW9kYWwgfSBmcm9tICcuL0NvbXBvbmVudHMvc3Vic2NyaXB0aW9uY2F0ZWdvcnkvYWRkLWVkaXQtc3ViY2F0ZWdvcnkvYWRkLWVkaXQtc3ViY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL3N1YnNjcmlwdGlvbmNhdGVnb3J5L2xpc3Rpbmctc3ViY2F0ZWdvcnkvbGlzdGluZy1zdWJjYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdFN1YnNjcmlwdGlvbmdyb3VwQ29tcG9uZW50LE1vZGFsMiB9IGZyb20gJy4vQ29tcG9uZW50cy9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvbmV3c2xldHRlci9hZGQtZWRpdC1uZXdzbGV0dGVybGliL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdOZXdzbGV0dGVybGliQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL25ld3NsZXR0ZXIvbGlzdGluZy1uZXdzbGV0dGVybGliL2xpc3RpbmctbmV3c2xldHRlcmxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdFNlbmRlckNvbXBvbmVudCAsIE1vZGFsM30gZnJvbSAnLi9Db21wb25lbnRzL3NlbmRlcnNsaXN0L2FkZC1lZGl0LXNlbmRlci9hZGQtZWRpdC1zZW5kZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdTZW5kZXJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvc2VuZGVyc2xpc3QvbGlzdGluZy1zZW5kZXIvbGlzdGluZy1zZW5kZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZEVkaXRUZXN0ZW1haWxsaWJDb21wb25lbnQsTW9kYWw0IH0gZnJvbSAnLi9Db21wb25lbnRzL3Rlc3RlbWFpbHMvYWRkLWVkaXQtdGVzdGVtYWlsbGliL2FkZC1lZGl0LXRlc3RlbWFpbGxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdGluZ1Rlc3RlbWFpbGxpYkNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy90ZXN0ZW1haWxzL2xpc3RpbmctdGVzdGVtYWlsbGliL2xpc3RpbmctdGVzdGVtYWlsbGliLmNvbXBvbmVudCc7XG5pbXBvcnQge0FtYXppbmdUaW1lUGlja2VyTW9kdWxlfSBmcm9tICdhbWF6aW5nLXRpbWUtcGlja2VyJztcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1hbmd1bGFyJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNb2RhbDQsTW9kYWwyLE1vZGFsLE5ld3NUaXRsZUNvbXBvbmVudCwgbW9kYWxEYXRhLCBMaXN0aW5nTmV3c2xldHRlckNvbXBvbmVudCwgXG4gICAgQWRkRWRpdFN1YmNhdGVnb3J5Q29tcG9uZW50LCBMaXN0aW5nU3ViY2F0ZWdvcnlDb21wb25lbnQsIEFkZEVkaXRTdWJzY3JpcHRpb25ncm91cENvbXBvbmVudCwgXG4gICAgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQsIExpc3RpbmdOZXdzbGV0dGVybGliQ29tcG9uZW50LCBBZGRFZGl0U2VuZGVyQ29tcG9uZW50LCBcbiAgICBMaXN0aW5nU2VuZGVyQ29tcG9uZW50LE1vZGFsMywgQWRkRWRpdFRlc3RlbWFpbGxpYkNvbXBvbmVudCwgTGlzdGluZ1Rlc3RlbWFpbGxpYkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxGb3Jtc01vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTGlzdGluZ01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBBbWF6aW5nVGltZVBpY2tlck1vZHVsZSxcbiAgICBDS0VkaXRvck1vZHVsZVxuICAgIFxuICBdLFxuICBleHBvcnRzOiBbQWRkRWRpdFNlbmRlckNvbXBvbmVudCxBZGRFZGl0TmV3c2xldHRlcmxpYkNvbXBvbmVudCxBZGRFZGl0U3Vic2NyaXB0aW9uZ3JvdXBDb21wb25lbnQsXG4gICAgTW9kYWwsTmV3c1RpdGxlQ29tcG9uZW50LExpc3RpbmdOZXdzbGV0dGVyQ29tcG9uZW50LEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCxcbiAgICBMaXN0aW5nU3ViY2F0ZWdvcnlDb21wb25lbnQsQWRkRWRpdFRlc3RlbWFpbGxpYkNvbXBvbmVudCxMaXN0aW5nVGVzdGVtYWlsbGliQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOltNb2RhbDQsTW9kYWwzLE5ld3NUaXRsZUNvbXBvbmVudCwgbW9kYWxEYXRhLE1vZGFsLE1vZGFsMl1cbn0pXG5leHBvcnQgY2xhc3MgTmV3c1RpdGxlTW9kdWxlIHsgfVxuXG5cblxuIl19