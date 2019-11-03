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
var NewsTitleModule = /** @class */ (function () {
    function NewsTitleModule() {
    }
    NewsTitleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [Modal2, Modal, NewsTitleComponent, modalData, ListingNewsletterComponent, AddEditSubcategoryComponent, ListingSubcategoryComponent, AddEditSubscriptiongroupComponent],
                    imports: [
                        DemoMaterialModule,
                        ReactiveFormsModule, FormsModule,
                        BrowserAnimationsModule,
                        CommonModule,
                        ListingModule,
                        RouterModule,
                        HttpClientModule
                    ],
                    exports: [AddEditSubscriptiongroupComponent, Modal, NewsTitleComponent, ListingNewsletterComponent, AddEditSubcategoryComponent, ListingSubcategoryComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [ApiService],
                    entryComponents: [NewsTitleComponent, modalData, Modal, Modal2]
                },] }
    ];
    return NewsTitleModule;
}());
export { NewsTitleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL25ld3MtdGl0bGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDMUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSwyQkFBMkIsRUFBQyxLQUFLLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUMxSSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDbEksT0FBTyxFQUFFLGlDQUFpQyxFQUFDLE1BQU0sRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBRXhJO0lBQUE7SUFnQitCLENBQUM7O2dCQWhCL0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLDBCQUEwQixFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLGlDQUFpQyxDQUFDO29CQUNuTCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixtQkFBbUIsRUFBQyxXQUFXO3dCQUMvQix1QkFBdUI7d0JBQ3ZCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixZQUFZO3dCQUNaLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsaUNBQWlDLEVBQUMsS0FBSyxFQUFDLGtCQUFrQixFQUFDLDBCQUEwQixFQUFDLDJCQUEyQixFQUFDLDJCQUEyQixDQUFDO29CQUN4SixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDakMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUN2QixlQUFlLEVBQUMsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQztpQkFDN0Q7O0lBQzhCLHNCQUFDO0NBQUEsQUFoQmhDLElBZ0JnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmV3c1RpdGxlQ29tcG9uZW50LCBtb2RhbERhdGEgfSBmcm9tICcuL25ld3MtdGl0bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVtb01hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC1tb2R1bGUnO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IExpc3RpbmdOZXdzbGV0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2xpc3RpbmctbmV3c2xldHRlci9saXN0aW5nLW5ld3NsZXR0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdGluZ01vZHVsZSB9IGZyb20gJ2xpc3RpbmctYW5ndWxhcjcnO1xyXG5pbXBvcnQgeyBBZGRFZGl0U3ViY2F0ZWdvcnlDb21wb25lbnQsTW9kYWwgfSBmcm9tICcuL0NvbXBvbmVudHMvc3Vic2NyaXB0aW9uY2F0ZWdvcnkvYWRkLWVkaXQtc3ViY2F0ZWdvcnkvYWRkLWVkaXQtc3ViY2F0ZWdvcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL3N1YnNjcmlwdGlvbmNhdGVnb3J5L2xpc3Rpbmctc3ViY2F0ZWdvcnkvbGlzdGluZy1zdWJjYXRlZ29yeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRFZGl0U3Vic2NyaXB0aW9uZ3JvdXBDb21wb25lbnQsTW9kYWwyIH0gZnJvbSAnLi9Db21wb25lbnRzL2FkZC1lZGl0LXN1YnNjcmlwdGlvbmdyb3VwL2FkZC1lZGl0LXN1YnNjcmlwdGlvbmdyb3VwLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW01vZGFsMixNb2RhbCxOZXdzVGl0bGVDb21wb25lbnQsIG1vZGFsRGF0YSwgTGlzdGluZ05ld3NsZXR0ZXJDb21wb25lbnQsIEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCwgTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50LCBBZGRFZGl0U3Vic2NyaXB0aW9uZ3JvdXBDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsRm9ybXNNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIExpc3RpbmdNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbQWRkRWRpdFN1YnNjcmlwdGlvbmdyb3VwQ29tcG9uZW50LE1vZGFsLE5ld3NUaXRsZUNvbXBvbmVudCxMaXN0aW5nTmV3c2xldHRlckNvbXBvbmVudCxBZGRFZGl0U3ViY2F0ZWdvcnlDb21wb25lbnQsTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXHJcbiAgcHJvdmlkZXJzOiBbQXBpU2VydmljZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOltOZXdzVGl0bGVDb21wb25lbnQsIG1vZGFsRGF0YSxNb2RhbCxNb2RhbDJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdzVGl0bGVNb2R1bGUgeyB9XHJcblxyXG5cclxuXHJcbiJdfQ==