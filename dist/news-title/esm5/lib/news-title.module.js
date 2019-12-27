/**
 * @fileoverview added by tsickle
 * Generated from: lib/news-title.module.ts
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
// import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { DatePipe } from '@angular/common';
import { CKEditorModule } from 'ngx-ckeditor';
var NewsTitleModule = /** @class */ (function () {
    function NewsTitleModule() {
    }
    NewsTitleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [Modal4, Modal2, Modal, NewsTitleComponent, modalData, ListingNewsletterComponent,
                        AddEditSubcategoryComponent, ListingSubcategoryComponent, AddEditSubscriptiongroupComponent,
                        AddEditNewsletterlibComponent, ListingNewsletterlibComponent, AddEditSenderComponent,
                        ListingSenderComponent, Modal3, AddEditTestemaillibComponent, ListingTestemaillibComponent,
                    ],
                    imports: [
                        DemoMaterialModule,
                        ReactiveFormsModule, FormsModule,
                        BrowserAnimationsModule,
                        CommonModule,
                        ListingModule,
                        RouterModule,
                        HttpClientModule,
                        AmazingTimePickerModule,
                        // NgxMaterialTimepickerModule,
                        CKEditorModule,
                    ],
                    exports: [AddEditSenderComponent, AddEditNewsletterlibComponent, AddEditSubscriptiongroupComponent,
                        Modal, NewsTitleComponent, ListingNewsletterComponent, AddEditSubcategoryComponent,
                        ListingSubcategoryComponent, AddEditTestemaillibComponent, ListingTestemaillibComponent, ListingNewsletterlibComponent,
                        ListingSenderComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [ApiService, DatePipe],
                    entryComponents: [Modal4, Modal3, NewsTitleComponent, modalData, Modal, Modal2]
                },] }
    ];
    return NewsTitleModule;
}());
export { NewsTitleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9uZXdzLXRpdGxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLDJCQUEyQixFQUFDLEtBQUssRUFBRSxNQUFNLHVGQUF1RixDQUFDO0FBQzFJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxRkFBcUYsQ0FBQztBQUNsSSxPQUFPLEVBQUUsaUNBQWlDLEVBQUMsTUFBTSxFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDeEksT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDaEksT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDOUgsT0FBTyxFQUFFLHNCQUFzQixFQUFHLE1BQU0sRUFBQyxNQUFNLG9FQUFvRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzFHLE9BQU8sRUFBRSw0QkFBNEIsRUFBQyxNQUFNLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUNwSSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFOUQsT0FBTyxFQUFFLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHOUM7SUFBQTtJQTJCK0IsQ0FBQzs7Z0JBM0IvQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLDBCQUEwQjt3QkFDMUYsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsaUNBQWlDO3dCQUMzRiw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSxzQkFBc0I7d0JBQ3BGLHNCQUFzQixFQUFDLE1BQU0sRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEI7cUJBQ3hGO29CQUNILE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLG1CQUFtQixFQUFDLFdBQVc7d0JBQy9CLHVCQUF1Qjt3QkFDdkIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQix1QkFBdUI7d0JBQ3ZCLCtCQUErQjt3QkFDL0IsY0FBYztxQkFFZjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQyw2QkFBNkIsRUFBQyxpQ0FBaUM7d0JBQzlGLEtBQUssRUFBQyxrQkFBa0IsRUFBQywwQkFBMEIsRUFBQywyQkFBMkI7d0JBQy9FLDJCQUEyQixFQUFDLDRCQUE0QixFQUFDLDRCQUE0QixFQUFDLDZCQUE2Qjt3QkFDbkgsc0JBQXNCLENBQUM7b0JBQ3pCLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNqQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUMsUUFBUSxDQUFDO29CQUNoQyxlQUFlLEVBQUMsQ0FBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxDQUFDO2lCQUMzRTs7SUFDOEIsc0JBQUM7Q0FBQSxBQTNCaEMsSUEyQmdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmV3c1RpdGxlQ29tcG9uZW50LCBtb2RhbERhdGEgfSBmcm9tICcuL25ld3MtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IERlbW9NYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwtbW9kdWxlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IExpc3RpbmdOZXdzbGV0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2xpc3RpbmctbmV3c2xldHRlci9saXN0aW5nLW5ld3NsZXR0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaXN0aW5nLWFuZ3VsYXI3JztcbmltcG9ydCB7IEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCxNb2RhbCB9IGZyb20gJy4vQ29tcG9uZW50cy9zdWJzY3JpcHRpb25jYXRlZ29yeS9hZGQtZWRpdC1zdWJjYXRlZ29yeS9hZGQtZWRpdC1zdWJjYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBMaXN0aW5nU3ViY2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvc3Vic2NyaXB0aW9uY2F0ZWdvcnkvbGlzdGluZy1zdWJjYXRlZ29yeS9saXN0aW5nLXN1YmNhdGVnb3J5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRFZGl0U3Vic2NyaXB0aW9uZ3JvdXBDb21wb25lbnQsTW9kYWwyIH0gZnJvbSAnLi9Db21wb25lbnRzL2FkZC1lZGl0LXN1YnNjcmlwdGlvbmdyb3VwL2FkZC1lZGl0LXN1YnNjcmlwdGlvbmdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRFZGl0TmV3c2xldHRlcmxpYkNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9uZXdzbGV0dGVyL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIvYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdGluZ05ld3NsZXR0ZXJsaWJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvbmV3c2xldHRlci9saXN0aW5nLW5ld3NsZXR0ZXJsaWIvbGlzdGluZy1uZXdzbGV0dGVybGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRFZGl0U2VuZGVyQ29tcG9uZW50ICwgTW9kYWwzfSBmcm9tICcuL0NvbXBvbmVudHMvc2VuZGVyc2xpc3QvYWRkLWVkaXQtc2VuZGVyL2FkZC1lZGl0LXNlbmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdGluZ1NlbmRlckNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9zZW5kZXJzbGlzdC9saXN0aW5nLXNlbmRlci9saXN0aW5nLXNlbmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdFRlc3RlbWFpbGxpYkNvbXBvbmVudCxNb2RhbDQgfSBmcm9tICcuL0NvbXBvbmVudHMvdGVzdGVtYWlscy9hZGQtZWRpdC10ZXN0ZW1haWxsaWIvYWRkLWVkaXQtdGVzdGVtYWlsbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0aW5nVGVzdGVtYWlsbGliQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL3Rlc3RlbWFpbHMvbGlzdGluZy10ZXN0ZW1haWxsaWIvbGlzdGluZy10ZXN0ZW1haWxsaWIuY29tcG9uZW50JztcbmltcG9ydCB7IEFtYXppbmdUaW1lUGlja2VyTW9kdWxlIH0gZnJvbSAnYW1hemluZy10aW1lLXBpY2tlcic7XG4vLyBpbXBvcnQge05neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZX0gZnJvbSAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXInO1xuaW1wb3J0IHsgRGF0ZVBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ25neC1ja2VkaXRvcic7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTW9kYWw0LE1vZGFsMixNb2RhbCxOZXdzVGl0bGVDb21wb25lbnQsIG1vZGFsRGF0YSwgTGlzdGluZ05ld3NsZXR0ZXJDb21wb25lbnQsIFxuICAgIEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCwgTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50LCBBZGRFZGl0U3Vic2NyaXB0aW9uZ3JvdXBDb21wb25lbnQsIFxuICAgIEFkZEVkaXROZXdzbGV0dGVybGliQ29tcG9uZW50LCBMaXN0aW5nTmV3c2xldHRlcmxpYkNvbXBvbmVudCwgQWRkRWRpdFNlbmRlckNvbXBvbmVudCwgXG4gICAgTGlzdGluZ1NlbmRlckNvbXBvbmVudCxNb2RhbDMsIEFkZEVkaXRUZXN0ZW1haWxsaWJDb21wb25lbnQsIExpc3RpbmdUZXN0ZW1haWxsaWJDb21wb25lbnQsXG4gICAgXSxcbiAgaW1wb3J0czogW1xuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLEZvcm1zTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEFtYXppbmdUaW1lUGlja2VyTW9kdWxlLFxuICAgIC8vIE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZSxcbiAgICBDS0VkaXRvck1vZHVsZSxcbiAgICBcbiAgXSxcbiAgZXhwb3J0czogW0FkZEVkaXRTZW5kZXJDb21wb25lbnQsQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQsQWRkRWRpdFN1YnNjcmlwdGlvbmdyb3VwQ29tcG9uZW50LFxuICAgIE1vZGFsLE5ld3NUaXRsZUNvbXBvbmVudCxMaXN0aW5nTmV3c2xldHRlckNvbXBvbmVudCxBZGRFZGl0U3ViY2F0ZWdvcnlDb21wb25lbnQsXG4gICAgTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50LEFkZEVkaXRUZXN0ZW1haWxsaWJDb21wb25lbnQsTGlzdGluZ1Rlc3RlbWFpbGxpYkNvbXBvbmVudCxMaXN0aW5nTmV3c2xldHRlcmxpYkNvbXBvbmVudCxcbiAgICBMaXN0aW5nU2VuZGVyQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlLERhdGVQaXBlXSxcbiAgZW50cnlDb21wb25lbnRzOltNb2RhbDQsTW9kYWwzLE5ld3NUaXRsZUNvbXBvbmVudCwgbW9kYWxEYXRhLE1vZGFsLE1vZGFsMl1cbn0pXG5leHBvcnQgY2xhc3MgTmV3c1RpdGxlTW9kdWxlIHsgfVxuXG5cblxuIl19