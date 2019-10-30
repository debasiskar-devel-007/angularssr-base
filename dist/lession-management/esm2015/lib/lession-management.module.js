/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LessionManagementComponent } from './lession-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './Module/material-module';
import { HttpClientModule } from '@angular/common/http';
import { ListingModule } from "listing-angular7";
import { ListLessionComponent } from './component/list-lession/list-lession.component';
import { AddEditLessionComponent } from './component/add-edit-lession/add-edit-lession.component';
export class LessionManagementModule {
}
LessionManagementModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    LessionManagementComponent,
                    ListLessionComponent,
                    AddEditLessionComponent
                ],
                imports: [
                    BrowserModule,
                    MaterialModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    ListingModule,
                ],
                exports: [
                    LessionManagementComponent,
                    AddEditLessionComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVzc2lvbi1tYW5hZ2VtZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlc3Npb24tbWFuYWdlbWVudC8iLCJzb3VyY2VzIjpbImxpYi9sZXNzaW9uLW1hbmFnZW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQW9CbEcsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBbEJuQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLDBCQUEwQjtvQkFDMUIsb0JBQW9CO29CQUNwQix1QkFBdUI7aUJBQUM7Z0JBQzFCLE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGNBQWM7b0JBQ2QsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsYUFBYTtpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsMEJBQTBCO29CQUMxQix1QkFBdUI7aUJBQ3hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGVzc2lvbk1hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2xlc3Npb24tbWFuYWdlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vTW9kdWxlL21hdGVyaWFsLW1vZHVsZSc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tIFwibGlzdGluZy1hbmd1bGFyN1wiO1xuXG5pbXBvcnQgeyBMaXN0TGVzc2lvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2xpc3QtbGVzc2lvbi9saXN0LWxlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7IEFkZEVkaXRMZXNzaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvYWRkLWVkaXQtbGVzc2lvbi9hZGQtZWRpdC1sZXNzaW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExlc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50LFxuICAgIExpc3RMZXNzaW9uQ29tcG9uZW50LFxuICAgIEFkZEVkaXRMZXNzaW9uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIExpc3RpbmdNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMZXNzaW9uTWFuYWdlbWVudENvbXBvbmVudCxcbiAgICBBZGRFZGl0TGVzc2lvbkNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExlc3Npb25NYW5hZ2VtZW50TW9kdWxlIHsgfVxuIl19