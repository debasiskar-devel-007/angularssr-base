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
import { DatePipe } from '@angular/common';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9uZXdzLXRpdGxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUMsS0FBSyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDMUksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQ2xJLE9BQU8sRUFBRSxpQ0FBaUMsRUFBQyxNQUFNLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUN4SSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUNoSSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUM5SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUcsTUFBTSxFQUFDLE1BQU0sb0VBQW9FLENBQUM7QUFDcEgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDMUcsT0FBTyxFQUFFLDRCQUE0QixFQUFDLE1BQU0sRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBQzNILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFHMUM7SUFBQTtJQTBCK0IsQ0FBQzs7Z0JBMUIvQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLDBCQUEwQjt3QkFDMUYsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsaUNBQWlDO3dCQUMzRiw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSxzQkFBc0I7d0JBQ3BGLHNCQUFzQixFQUFDLE1BQU0sRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEI7cUJBQ3hGO29CQUNILE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLG1CQUFtQixFQUFDLFdBQVc7d0JBQy9CLHVCQUF1Qjt3QkFDdkIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQix1QkFBdUI7d0JBQ3ZCLGNBQWM7cUJBRWY7b0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUMsNkJBQTZCLEVBQUMsaUNBQWlDO3dCQUM5RixLQUFLLEVBQUMsa0JBQWtCLEVBQUMsMEJBQTBCLEVBQUMsMkJBQTJCO3dCQUMvRSwyQkFBMkIsRUFBQyw0QkFBNEIsRUFBQyw0QkFBNEIsRUFBQyw2QkFBNkI7d0JBQ25ILHNCQUFzQixDQUFDO29CQUN6QixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDakMsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFDLFFBQVEsQ0FBQztvQkFDaEMsZUFBZSxFQUFDLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQztpQkFDM0U7O0lBQzhCLHNCQUFDO0NBQUEsQUExQmhDLElBMEJnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5ld3NUaXRsZUNvbXBvbmVudCwgbW9kYWxEYXRhIH0gZnJvbSAnLi9uZXdzLXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLW1vZHVsZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBMaXN0aW5nTmV3c2xldHRlckNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9saXN0aW5nLW5ld3NsZXR0ZXIvbGlzdGluZy1uZXdzbGV0dGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGlzdGluZy1hbmd1bGFyNyc7XG5pbXBvcnQgeyBBZGRFZGl0U3ViY2F0ZWdvcnlDb21wb25lbnQsTW9kYWwgfSBmcm9tICcuL0NvbXBvbmVudHMvc3Vic2NyaXB0aW9uY2F0ZWdvcnkvYWRkLWVkaXQtc3ViY2F0ZWdvcnkvYWRkLWVkaXQtc3ViY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL3N1YnNjcmlwdGlvbmNhdGVnb3J5L2xpc3Rpbmctc3ViY2F0ZWdvcnkvbGlzdGluZy1zdWJjYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdFN1YnNjcmlwdGlvbmdyb3VwQ29tcG9uZW50LE1vZGFsMiB9IGZyb20gJy4vQ29tcG9uZW50cy9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvbmV3c2xldHRlci9hZGQtZWRpdC1uZXdzbGV0dGVybGliL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdOZXdzbGV0dGVybGliQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL25ld3NsZXR0ZXIvbGlzdGluZy1uZXdzbGV0dGVybGliL2xpc3RpbmctbmV3c2xldHRlcmxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdFNlbmRlckNvbXBvbmVudCAsIE1vZGFsM30gZnJvbSAnLi9Db21wb25lbnRzL3NlbmRlcnNsaXN0L2FkZC1lZGl0LXNlbmRlci9hZGQtZWRpdC1zZW5kZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdTZW5kZXJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvc2VuZGVyc2xpc3QvbGlzdGluZy1zZW5kZXIvbGlzdGluZy1zZW5kZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZEVkaXRUZXN0ZW1haWxsaWJDb21wb25lbnQsTW9kYWw0IH0gZnJvbSAnLi9Db21wb25lbnRzL3Rlc3RlbWFpbHMvYWRkLWVkaXQtdGVzdGVtYWlsbGliL2FkZC1lZGl0LXRlc3RlbWFpbGxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdGluZ1Rlc3RlbWFpbGxpYkNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy90ZXN0ZW1haWxzL2xpc3RpbmctdGVzdGVtYWlsbGliL2xpc3RpbmctdGVzdGVtYWlsbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbWF6aW5nVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJ2FtYXppbmctdGltZS1waWNrZXInO1xuaW1wb3J0IHsgQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWFuZ3VsYXInO1xuaW1wb3J0IHsgRGF0ZVBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTW9kYWw0LE1vZGFsMixNb2RhbCxOZXdzVGl0bGVDb21wb25lbnQsIG1vZGFsRGF0YSwgTGlzdGluZ05ld3NsZXR0ZXJDb21wb25lbnQsIFxuICAgIEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCwgTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50LCBBZGRFZGl0U3Vic2NyaXB0aW9uZ3JvdXBDb21wb25lbnQsIFxuICAgIEFkZEVkaXROZXdzbGV0dGVybGliQ29tcG9uZW50LCBMaXN0aW5nTmV3c2xldHRlcmxpYkNvbXBvbmVudCwgQWRkRWRpdFNlbmRlckNvbXBvbmVudCwgXG4gICAgTGlzdGluZ1NlbmRlckNvbXBvbmVudCxNb2RhbDMsIEFkZEVkaXRUZXN0ZW1haWxsaWJDb21wb25lbnQsIExpc3RpbmdUZXN0ZW1haWxsaWJDb21wb25lbnQsXG4gICAgXSxcbiAgaW1wb3J0czogW1xuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLEZvcm1zTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEFtYXppbmdUaW1lUGlja2VyTW9kdWxlLFxuICAgIENLRWRpdG9yTW9kdWxlLFxuICAgIFxuICBdLFxuICBleHBvcnRzOiBbQWRkRWRpdFNlbmRlckNvbXBvbmVudCxBZGRFZGl0TmV3c2xldHRlcmxpYkNvbXBvbmVudCxBZGRFZGl0U3Vic2NyaXB0aW9uZ3JvdXBDb21wb25lbnQsXG4gICAgTW9kYWwsTmV3c1RpdGxlQ29tcG9uZW50LExpc3RpbmdOZXdzbGV0dGVyQ29tcG9uZW50LEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCxcbiAgICBMaXN0aW5nU3ViY2F0ZWdvcnlDb21wb25lbnQsQWRkRWRpdFRlc3RlbWFpbGxpYkNvbXBvbmVudCxMaXN0aW5nVGVzdGVtYWlsbGliQ29tcG9uZW50LExpc3RpbmdOZXdzbGV0dGVybGliQ29tcG9uZW50LFxuICAgIExpc3RpbmdTZW5kZXJDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2UsRGF0ZVBpcGVdLFxuICBlbnRyeUNvbXBvbmVudHM6W01vZGFsNCxNb2RhbDMsTmV3c1RpdGxlQ29tcG9uZW50LCBtb2RhbERhdGEsTW9kYWwsTW9kYWwyXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdzVGl0bGVNb2R1bGUgeyB9XG5cblxuXG4iXX0=