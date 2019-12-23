/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ServicelibComponent } from './servicelib.component';
import { DemoMaterialModule } from './modules/material-module';
import { AddeditServiceComponent, Modal } from './Component/addedit-service/addedit-service.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListingModule } from 'listing-angular7';
import { FileUploadModule } from 'file-upload-lib-influxiq';
var ServicelibModule = /** @class */ (function () {
    function ServicelibModule() {
    }
    ServicelibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ServicelibComponent, AddeditServiceComponent, Modal],
                    imports: [
                        DemoMaterialModule,
                        HttpClientModule,
                        RouterModule,
                        CKEditorModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CommonModule,
                        BrowserModule,
                        ListingModule,
                        FileUploadModule
                    ],
                    exports: [ServicelibComponent, AddeditServiceComponent, Modal],
                    entryComponents: [Modal]
                },] }
    ];
    return ServicelibModule;
}());
export { ServicelibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXJ2aWNlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDdEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUcsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFNUQ7SUFBQTtJQWlCZ0MsQ0FBQzs7Z0JBakJoQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUMsdUJBQXVCLEVBQUMsS0FBSyxDQUFDO29CQUNqRSxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQyx1QkFBdUIsRUFBQyxLQUFLLENBQUM7b0JBQzVELGVBQWUsRUFBQyxDQUFDLEtBQUssQ0FBQztpQkFDeEI7O0lBQytCLHVCQUFDO0NBQUEsQUFqQmpDLElBaUJpQztTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VydmljZWxpYkNvbXBvbmVudCB9IGZyb20gJy4vc2VydmljZWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVtb01hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL21hdGVyaWFsLW1vZHVsZSc7XG5pbXBvcnQgeyBBZGRlZGl0U2VydmljZUNvbXBvbmVudCAsTW9kYWx9IGZyb20gJy4vQ29tcG9uZW50L2FkZGVkaXQtc2VydmljZS9hZGRlZGl0LXNlcnZpY2UuY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWFuZ3VsYXInO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSAsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaXN0aW5nLWFuZ3VsYXI3JztcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdmaWxlLXVwbG9hZC1saWItaW5mbHV4aXEnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTZXJ2aWNlbGliQ29tcG9uZW50LEFkZGVkaXRTZXJ2aWNlQ29tcG9uZW50LE1vZGFsXSxcbiAgaW1wb3J0czogW1xuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBDS0VkaXRvck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIExpc3RpbmdNb2R1bGUsXG4gICAgRmlsZVVwbG9hZE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbU2VydmljZWxpYkNvbXBvbmVudCxBZGRlZGl0U2VydmljZUNvbXBvbmVudCxNb2RhbF0sXG4gIGVudHJ5Q29tcG9uZW50czpbTW9kYWxdXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VsaWJNb2R1bGUgeyB9XG4iXX0=