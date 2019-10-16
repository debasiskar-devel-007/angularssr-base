/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactusComponent } from './contactus.component';
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
                    declarations: [ContactusComponent, ContactusListingComponent, LoadingComponent],
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
                    entryComponents: []
                },] }
    ];
    return ContactusModule;
}());
export { ContactusModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3R1cy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0dXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTSxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRDtJQUFBO0lBd0IrQixDQUFDOztnQkF4Qi9CLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDL0UsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3dCQUN2QixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGdCQUFnQjtxQkFRakI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUseUJBQXlCLENBQUM7b0JBQ3hELFNBQVMsRUFBRSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUM7b0JBQ3hELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNqQyxlQUFlLEVBQUMsRUFBRTtpQkFDbkI7O0lBQzhCLHNCQUFDO0NBQUEsQUF4QmhDLElBd0JnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRhY3R1c0NvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdHVzLmNvbXBvbmVudCc7XG5pbXBvcnQge0RlbW9NYXRlcmlhbE1vZHVsZX0gZnJvbSAnLi9tYXRlcmlhbC1tb2R1bGUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgQWdtQ29yZU1vZHVsZX0gZnJvbSAnQGFnbS9jb3JlJztcblxuaW1wb3J0IHsgQ29udGFjdHVzTGlzdGluZ0NvbXBvbmVudH0gZnJvbSAnLi9jb250YWN0dXMtbGlzdGluZy9jb250YWN0dXMtbGlzdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0e0Nvb2tpZVNlcnZpY2V9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGlzdGluZy1hbmd1bGFyNyc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ29udGFjdHVzQ29tcG9uZW50LCBDb250YWN0dXNMaXN0aW5nQ29tcG9uZW50LCBMb2FkaW5nQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gIC8qICBBZ21Db3JlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgYXBpS2V5OiAnQUl6YVN5QmxPaHoxOWctWFdNV2hMcGZjeFR2SUZ4WDNFTVktVTRZJ1xuICAgICAgLyEqIGFwaUtleSBpcyByZXF1aXJlZCwgdW5sZXNzIHlvdSBhcmUgYVxuICAgICAgcHJlbWl1bSBjdXN0b21lciwgaW4gd2hpY2ggY2FzZSB5b3UgY2FuXG4gICAgICB1c2UgY2xpZW50SWRcbiAgICAgICohL1xuICAgIH0pKi9cbiAgXSxcbiAgZXhwb3J0czogW0NvbnRhY3R1c0NvbXBvbmVudCwgQ29udGFjdHVzTGlzdGluZ0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2UsIExvYWRpbmdDb21wb25lbnQsIENvb2tpZVNlcnZpY2VdLFxuICBib290c3RyYXA6IFtdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG4gIGVudHJ5Q29tcG9uZW50czpbXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0dXNNb2R1bGUgeyB9XG5cbiJdfQ==