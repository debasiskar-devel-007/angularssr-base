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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9uZXdzLXRpdGxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLDJCQUEyQixFQUFDLEtBQUssRUFBRSxNQUFNLHVGQUF1RixDQUFDO0FBQzFJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxRkFBcUYsQ0FBQztBQUNsSSxPQUFPLEVBQUUsaUNBQWlDLEVBQUMsTUFBTSxFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDeEksT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDaEksT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDOUgsT0FBTyxFQUFFLHNCQUFzQixFQUFHLE1BQU0sRUFBQyxNQUFNLG9FQUFvRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzFHLE9BQU8sRUFBRSw0QkFBNEIsRUFBQyxNQUFNLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUNwSSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRzFDO0lBQUE7SUEwQitCLENBQUM7O2dCQTFCL0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSwwQkFBMEI7d0JBQzFGLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLGlDQUFpQzt3QkFDM0YsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsc0JBQXNCO3dCQUNwRixzQkFBc0IsRUFBQyxNQUFNLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCO3FCQUN4RjtvQkFDSCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixtQkFBbUIsRUFBQyxXQUFXO3dCQUMvQix1QkFBdUI7d0JBQ3ZCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsdUJBQXVCO3dCQUN2QixjQUFjO3FCQUVmO29CQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFDLDZCQUE2QixFQUFDLGlDQUFpQzt3QkFDOUYsS0FBSyxFQUFDLGtCQUFrQixFQUFDLDBCQUEwQixFQUFDLDJCQUEyQjt3QkFDL0UsMkJBQTJCLEVBQUMsNEJBQTRCLEVBQUMsNEJBQTRCLEVBQUMsNkJBQTZCO3dCQUNuSCxzQkFBc0IsQ0FBQztvQkFDekIsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ2pDLFNBQVMsRUFBRSxDQUFDLFVBQVUsRUFBQyxRQUFRLENBQUM7b0JBQ2hDLGVBQWUsRUFBQyxDQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsa0JBQWtCLEVBQUUsU0FBUyxFQUFDLEtBQUssRUFBQyxNQUFNLENBQUM7aUJBQzNFOztJQUM4QixzQkFBQztDQUFBLEFBMUJoQyxJQTBCZ0M7U0FBbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZXdzVGl0bGVDb21wb25lbnQsIG1vZGFsRGF0YSB9IGZyb20gJy4vbmV3cy10aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVtb01hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC1tb2R1bGUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGlzdGluZ05ld3NsZXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvbGlzdGluZy1uZXdzbGV0dGVyL2xpc3RpbmctbmV3c2xldHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdGluZ01vZHVsZSB9IGZyb20gJ2xpc3RpbmctYW5ndWxhcjcnO1xuaW1wb3J0IHsgQWRkRWRpdFN1YmNhdGVnb3J5Q29tcG9uZW50LE1vZGFsIH0gZnJvbSAnLi9Db21wb25lbnRzL3N1YnNjcmlwdGlvbmNhdGVnb3J5L2FkZC1lZGl0LXN1YmNhdGVnb3J5L2FkZC1lZGl0LXN1YmNhdGVnb3J5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IExpc3RpbmdTdWJjYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9zdWJzY3JpcHRpb25jYXRlZ29yeS9saXN0aW5nLXN1YmNhdGVnb3J5L2xpc3Rpbmctc3ViY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZEVkaXRTdWJzY3JpcHRpb25ncm91cENvbXBvbmVudCxNb2RhbDIgfSBmcm9tICcuL0NvbXBvbmVudHMvYWRkLWVkaXQtc3Vic2NyaXB0aW9uZ3JvdXAvYWRkLWVkaXQtc3Vic2NyaXB0aW9uZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZEVkaXROZXdzbGV0dGVybGliQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL25ld3NsZXR0ZXIvYWRkLWVkaXQtbmV3c2xldHRlcmxpYi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0aW5nTmV3c2xldHRlcmxpYkNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9uZXdzbGV0dGVyL2xpc3RpbmctbmV3c2xldHRlcmxpYi9saXN0aW5nLW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZEVkaXRTZW5kZXJDb21wb25lbnQgLCBNb2RhbDN9IGZyb20gJy4vQ29tcG9uZW50cy9zZW5kZXJzbGlzdC9hZGQtZWRpdC1zZW5kZXIvYWRkLWVkaXQtc2VuZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0aW5nU2VuZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL3NlbmRlcnNsaXN0L2xpc3Rpbmctc2VuZGVyL2xpc3Rpbmctc2VuZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRFZGl0VGVzdGVtYWlsbGliQ29tcG9uZW50LE1vZGFsNCB9IGZyb20gJy4vQ29tcG9uZW50cy90ZXN0ZW1haWxzL2FkZC1lZGl0LXRlc3RlbWFpbGxpYi9hZGQtZWRpdC10ZXN0ZW1haWxsaWIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdUZXN0ZW1haWxsaWJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvdGVzdGVtYWlscy9saXN0aW5nLXRlc3RlbWFpbGxpYi9saXN0aW5nLXRlc3RlbWFpbGxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW1hemluZ1RpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICdhbWF6aW5nLXRpbWUtcGlja2VyJztcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1hbmd1bGFyJztcbmltcG9ydCB7IERhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01vZGFsNCxNb2RhbDIsTW9kYWwsTmV3c1RpdGxlQ29tcG9uZW50LCBtb2RhbERhdGEsIExpc3RpbmdOZXdzbGV0dGVyQ29tcG9uZW50LCBcbiAgICBBZGRFZGl0U3ViY2F0ZWdvcnlDb21wb25lbnQsIExpc3RpbmdTdWJjYXRlZ29yeUNvbXBvbmVudCwgQWRkRWRpdFN1YnNjcmlwdGlvbmdyb3VwQ29tcG9uZW50LCBcbiAgICBBZGRFZGl0TmV3c2xldHRlcmxpYkNvbXBvbmVudCwgTGlzdGluZ05ld3NsZXR0ZXJsaWJDb21wb25lbnQsIEFkZEVkaXRTZW5kZXJDb21wb25lbnQsIFxuICAgIExpc3RpbmdTZW5kZXJDb21wb25lbnQsTW9kYWwzLCBBZGRFZGl0VGVzdGVtYWlsbGliQ29tcG9uZW50LCBMaXN0aW5nVGVzdGVtYWlsbGliQ29tcG9uZW50LFxuICAgIF0sXG4gIGltcG9ydHM6IFtcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxGb3Jtc01vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTGlzdGluZ01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBBbWF6aW5nVGltZVBpY2tlck1vZHVsZSxcbiAgICBDS0VkaXRvck1vZHVsZSxcbiAgICBcbiAgXSxcbiAgZXhwb3J0czogW0FkZEVkaXRTZW5kZXJDb21wb25lbnQsQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQsQWRkRWRpdFN1YnNjcmlwdGlvbmdyb3VwQ29tcG9uZW50LFxuICAgIE1vZGFsLE5ld3NUaXRsZUNvbXBvbmVudCxMaXN0aW5nTmV3c2xldHRlckNvbXBvbmVudCxBZGRFZGl0U3ViY2F0ZWdvcnlDb21wb25lbnQsXG4gICAgTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50LEFkZEVkaXRUZXN0ZW1haWxsaWJDb21wb25lbnQsTGlzdGluZ1Rlc3RlbWFpbGxpYkNvbXBvbmVudCxMaXN0aW5nTmV3c2xldHRlcmxpYkNvbXBvbmVudCxcbiAgICBMaXN0aW5nU2VuZGVyQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlLERhdGVQaXBlXSxcbiAgZW50cnlDb21wb25lbnRzOltNb2RhbDQsTW9kYWwzLE5ld3NUaXRsZUNvbXBvbmVudCwgbW9kYWxEYXRhLE1vZGFsLE1vZGFsMl1cbn0pXG5leHBvcnQgY2xhc3MgTmV3c1RpdGxlTW9kdWxlIHsgfVxuXG5cblxuIl19