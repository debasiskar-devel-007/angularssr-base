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
import { AddEditSubcategoryComponent } from './Components/subscriptioncategory/add-edit-subcategory/add-edit-subcategory.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListingSubcategoryComponent } from './Components/subscriptioncategory/listing-subcategory/listing-subcategory.component';
export class NewsTitleModule {
}
NewsTitleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NewsTitleComponent, modalData, ListingNewsletterComponent, AddEditSubcategoryComponent, ListingSubcategoryComponent],
                imports: [
                    DemoMaterialModule,
                    ReactiveFormsModule, FormsModule,
                    BrowserAnimationsModule,
                    CommonModule,
                    ListingModule,
                    RouterModule,
                    HttpClientModule
                ],
                exports: [NewsTitleComponent, ListingNewsletterComponent, AddEditSubcategoryComponent, ListingSubcategoryComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                providers: [ApiService],
                entryComponents: [NewsTitleComponent, modalData]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL25ld3MtdGl0bGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDMUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVGQUF1RixDQUFDO0FBQ3BJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxRkFBcUYsQ0FBQztBQWtCbEksTUFBTSxPQUFPLGVBQWU7OztZQWhCM0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSwwQkFBMEIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsQ0FBQztnQkFDbkksT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsbUJBQW1CLEVBQUMsV0FBVztvQkFDL0IsdUJBQXVCO29CQUN2QixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFDLDBCQUEwQixFQUFDLDJCQUEyQixFQUFDLDJCQUEyQixDQUFDO2dCQUNoSCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUN2QixlQUFlLEVBQUMsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZXdzVGl0bGVDb21wb25lbnQsIG1vZGFsRGF0YSB9IGZyb20gJy4vbmV3cy10aXRsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLW1vZHVsZSc7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGlzdGluZ05ld3NsZXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvbGlzdGluZy1uZXdzbGV0dGVyL2xpc3RpbmctbmV3c2xldHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGlzdGluZy1hbmd1bGFyNyc7XHJcbmltcG9ydCB7IEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9zdWJzY3JpcHRpb25jYXRlZ29yeS9hZGQtZWRpdC1zdWJjYXRlZ29yeS9hZGQtZWRpdC1zdWJjYXRlZ29yeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBMaXN0aW5nU3ViY2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvc3Vic2NyaXB0aW9uY2F0ZWdvcnkvbGlzdGluZy1zdWJjYXRlZ29yeS9saXN0aW5nLXN1YmNhdGVnb3J5LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW05ld3NUaXRsZUNvbXBvbmVudCwgbW9kYWxEYXRhLCBMaXN0aW5nTmV3c2xldHRlckNvbXBvbmVudCwgQWRkRWRpdFN1YmNhdGVnb3J5Q29tcG9uZW50LCBMaXN0aW5nU3ViY2F0ZWdvcnlDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsRm9ybXNNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIExpc3RpbmdNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTmV3c1RpdGxlQ29tcG9uZW50LExpc3RpbmdOZXdzbGV0dGVyQ29tcG9uZW50LEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCxMaXN0aW5nU3ViY2F0ZWdvcnlDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcclxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6W05ld3NUaXRsZUNvbXBvbmVudCwgbW9kYWxEYXRhXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV3c1RpdGxlTW9kdWxlIHsgfVxyXG5cclxuXHJcblxyXG4iXX0=