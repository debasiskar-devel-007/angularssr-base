/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactusComponent, successModalComponent } from './contactus.component';
import { DemoMaterialModule } from './material-module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
// import { AgmCoreModule} from '@agm/core';
import { ContactusListingComponent } from './contactus-listing/contactus-listing.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ListingModule } from 'listing-angular7';
var ContactusModule = /** @class */ (function () {
    function ContactusModule() {
    }
    ContactusModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ContactusComponent, successModalComponent, ContactusListingComponent, LoadingComponent],
                    imports: [
                        DemoMaterialModule,
                        BrowserAnimationsModule,
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        ListingModule,
                        HttpClientModule,
                    ],
                    exports: [ContactusComponent, ContactusListingComponent],
                    providers: [ApiService, LoadingComponent, CookieService],
                    bootstrap: [],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    entryComponents: [successModalComponent]
                },] }
    ];
    return ContactusModule;
}());
export { ContactusModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3R1cy1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvY29udGFjdHVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU0sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQ7SUFBQTtJQXdCK0IsQ0FBQzs7Z0JBeEIvQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3RHLE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLHVCQUF1Qjt3QkFDdkIsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixnQkFBZ0I7cUJBUWpCO29CQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHlCQUF5QixDQUFDO29CQUN4RCxTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDO29CQUN4RCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDakMsZUFBZSxFQUFDLENBQUMscUJBQXFCLENBQUM7aUJBQ3hDOztJQUM4QixzQkFBQztDQUFBLEFBeEJoQyxJQXdCZ0M7U0FBbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250YWN0dXNDb21wb25lbnQsIHN1Y2Nlc3NNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdHVzLmNvbXBvbmVudCc7XG5pbXBvcnQge0RlbW9NYXRlcmlhbE1vZHVsZX0gZnJvbSAnLi9tYXRlcmlhbC1tb2R1bGUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgQWdtQ29yZU1vZHVsZX0gZnJvbSAnQGFnbS9jb3JlJztcblxuaW1wb3J0IHsgQ29udGFjdHVzTGlzdGluZ0NvbXBvbmVudH0gZnJvbSAnLi9jb250YWN0dXMtbGlzdGluZy9jb250YWN0dXMtbGlzdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0e0Nvb2tpZVNlcnZpY2V9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGlzdGluZy1hbmd1bGFyNyc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ29udGFjdHVzQ29tcG9uZW50LCBzdWNjZXNzTW9kYWxDb21wb25lbnQsIENvbnRhY3R1c0xpc3RpbmdDb21wb25lbnQsIExvYWRpbmdDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgRGVtb01hdGVyaWFsTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIExpc3RpbmdNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgLyogIEFnbUNvcmVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBhcGlLZXk6ICdBSXphU3lCbE9oejE5Zy1YV01XaExwZmN4VHZJRnhYM0VNWS1VNFknXG4gICAgICAvISogYXBpS2V5IGlzIHJlcXVpcmVkLCB1bmxlc3MgeW91IGFyZSBhXG4gICAgICBwcmVtaXVtIGN1c3RvbWVyLCBpbiB3aGljaCBjYXNlIHlvdSBjYW5cbiAgICAgIHVzZSBjbGllbnRJZFxuICAgICAgKiEvXG4gICAgfSkqL1xuICBdLFxuICBleHBvcnRzOiBbQ29udGFjdHVzQ29tcG9uZW50LCBDb250YWN0dXNMaXN0aW5nQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbQXBpU2VydmljZSwgTG9hZGluZ0NvbXBvbmVudCwgQ29va2llU2VydmljZV0sXG4gIGJvb3RzdHJhcDogW10sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbiAgZW50cnlDb21wb25lbnRzOltzdWNjZXNzTW9kYWxDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3R1c01vZHVsZSB7IH1cblxuIl19