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
                        HttpClientModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL25ld3MtdGl0bGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDMUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSwyQkFBMkIsRUFBQyxLQUFLLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUMxSSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDbEksT0FBTyxFQUFFLGlDQUFpQyxFQUFDLE1BQU0sRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQ3hJLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ2hJLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQzlILE9BQU8sRUFBRSxzQkFBc0IsRUFBRyxNQUFNLEVBQUMsTUFBTSxvRUFBb0UsQ0FBQztBQUNwSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMxRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUMsTUFBTSxFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDcEksT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFFM0g7SUFBQTtJQXFCK0IsQ0FBQzs7Z0JBckIvQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLDBCQUEwQjt3QkFDMUYsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsaUNBQWlDO3dCQUMzRiw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSxzQkFBc0I7d0JBQ3BGLHNCQUFzQixFQUFDLE1BQU0sRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsQ0FBQztvQkFDNUYsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsbUJBQW1CLEVBQUMsV0FBVzt3QkFDL0IsdUJBQXVCO3dCQUN2QixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFDLDZCQUE2QixFQUFDLGlDQUFpQzt3QkFDOUYsS0FBSyxFQUFDLGtCQUFrQixFQUFDLDBCQUEwQixFQUFDLDJCQUEyQjt3QkFDL0UsMkJBQTJCLEVBQUMsNEJBQTRCLEVBQUMsNEJBQTRCLENBQUM7b0JBQ3hGLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNqQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ3ZCLGVBQWUsRUFBQyxDQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsa0JBQWtCLEVBQUUsU0FBUyxFQUFDLEtBQUssRUFBQyxNQUFNLENBQUM7aUJBQzNFOztJQUM4QixzQkFBQztDQUFBLEFBckJoQyxJQXFCZ0M7U0FBbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5ld3NUaXRsZUNvbXBvbmVudCwgbW9kYWxEYXRhIH0gZnJvbSAnLi9uZXdzLXRpdGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlbW9NYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwtbW9kdWxlJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMaXN0aW5nTmV3c2xldHRlckNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9saXN0aW5nLW5ld3NsZXR0ZXIvbGlzdGluZy1uZXdzbGV0dGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaXN0aW5nLWFuZ3VsYXI3JztcclxuaW1wb3J0IHsgQWRkRWRpdFN1YmNhdGVnb3J5Q29tcG9uZW50LE1vZGFsIH0gZnJvbSAnLi9Db21wb25lbnRzL3N1YnNjcmlwdGlvbmNhdGVnb3J5L2FkZC1lZGl0LXN1YmNhdGVnb3J5L2FkZC1lZGl0LXN1YmNhdGVnb3J5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IExpc3RpbmdTdWJjYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9zdWJzY3JpcHRpb25jYXRlZ29yeS9saXN0aW5nLXN1YmNhdGVnb3J5L2xpc3Rpbmctc3ViY2F0ZWdvcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkRWRpdFN1YnNjcmlwdGlvbmdyb3VwQ29tcG9uZW50LE1vZGFsMiB9IGZyb20gJy4vQ29tcG9uZW50cy9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRFZGl0TmV3c2xldHRlcmxpYkNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9uZXdzbGV0dGVyL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIvYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXN0aW5nTmV3c2xldHRlcmxpYkNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9uZXdzbGV0dGVyL2xpc3RpbmctbmV3c2xldHRlcmxpYi9saXN0aW5nLW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkRWRpdFNlbmRlckNvbXBvbmVudCAsIE1vZGFsM30gZnJvbSAnLi9Db21wb25lbnRzL3NlbmRlcnNsaXN0L2FkZC1lZGl0LXNlbmRlci9hZGQtZWRpdC1zZW5kZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdGluZ1NlbmRlckNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9zZW5kZXJzbGlzdC9saXN0aW5nLXNlbmRlci9saXN0aW5nLXNlbmRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRFZGl0VGVzdGVtYWlsbGliQ29tcG9uZW50LE1vZGFsNCB9IGZyb20gJy4vQ29tcG9uZW50cy90ZXN0ZW1haWxzL2FkZC1lZGl0LXRlc3RlbWFpbGxpYi9hZGQtZWRpdC10ZXN0ZW1haWxsaWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdGluZ1Rlc3RlbWFpbGxpYkNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy90ZXN0ZW1haWxzL2xpc3RpbmctdGVzdGVtYWlsbGliL2xpc3RpbmctdGVzdGVtYWlsbGliLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW01vZGFsNCxNb2RhbDIsTW9kYWwsTmV3c1RpdGxlQ29tcG9uZW50LCBtb2RhbERhdGEsIExpc3RpbmdOZXdzbGV0dGVyQ29tcG9uZW50LCBcclxuICAgIEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCwgTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50LCBBZGRFZGl0U3Vic2NyaXB0aW9uZ3JvdXBDb21wb25lbnQsIFxyXG4gICAgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQsIExpc3RpbmdOZXdzbGV0dGVybGliQ29tcG9uZW50LCBBZGRFZGl0U2VuZGVyQ29tcG9uZW50LCBcclxuICAgIExpc3RpbmdTZW5kZXJDb21wb25lbnQsTW9kYWwzLCBBZGRFZGl0VGVzdGVtYWlsbGliQ29tcG9uZW50LCBMaXN0aW5nVGVzdGVtYWlsbGliQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLEZvcm1zTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBMaXN0aW5nTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0FkZEVkaXRTZW5kZXJDb21wb25lbnQsQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQsQWRkRWRpdFN1YnNjcmlwdGlvbmdyb3VwQ29tcG9uZW50LFxyXG4gICAgTW9kYWwsTmV3c1RpdGxlQ29tcG9uZW50LExpc3RpbmdOZXdzbGV0dGVyQ29tcG9uZW50LEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCxcclxuICAgIExpc3RpbmdTdWJjYXRlZ29yeUNvbXBvbmVudCxBZGRFZGl0VGVzdGVtYWlsbGliQ29tcG9uZW50LExpc3RpbmdUZXN0ZW1haWxsaWJDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcclxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6W01vZGFsNCxNb2RhbDMsTmV3c1RpdGxlQ29tcG9uZW50LCBtb2RhbERhdGEsTW9kYWwsTW9kYWwyXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV3c1RpdGxlTW9kdWxlIHsgfVxyXG5cclxuXHJcblxyXG4iXX0=