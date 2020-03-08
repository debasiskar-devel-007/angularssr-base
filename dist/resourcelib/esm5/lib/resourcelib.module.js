/**
 * @fileoverview added by tsickle
 * Generated from: lib/resourcelib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ResourcelibComponent } from './resourcelib.component';
import { ListingModule } from 'listing-angular7';
import { DemoMaterialModule } from './Modules/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddeditResourceappComponent, Modal } from './Components/addedit-resourceapp/addedit-resourceapp.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
var ResourcelibModule = /** @class */ (function () {
    function ResourcelibModule() {
    }
    ResourcelibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ResourcelibComponent, AddeditResourceappComponent, Modal],
                    imports: [
                        ListingModule,
                        DemoMaterialModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CommonModule,
                        BrowserModule
                    ],
                    exports: [ResourcelibComponent, AddeditResourceappComponent],
                    entryComponents: [Modal]
                },] }
    ];
    return ResourcelibModule;
}());
export { ResourcelibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VsaWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVzb3VyY2VsaWIvIiwic291cmNlcyI6WyJsaWIvcmVzb3VyY2VsaWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwyQkFBMkIsRUFBQyxLQUFLLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNuSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFEO0lBQUE7SUFhaUMsQ0FBQzs7Z0JBYmpDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSwyQkFBMkIsRUFBQyxLQUFLLENBQUM7b0JBQ3ZFLE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQywyQkFBMkIsQ0FBQztvQkFDM0QsZUFBZSxFQUFDLENBQUMsS0FBSyxDQUFDO2lCQUN4Qjs7SUFDZ0Msd0JBQUM7Q0FBQSxBQWJsQyxJQWFrQztTQUFyQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzb3VyY2VsaWJDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGlzdGluZy1hbmd1bGFyNyc7XG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGV9IGZyb20gJy4vTW9kdWxlcy9tYXRlcmlhbC1tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBZGRlZGl0UmVzb3VyY2VhcHBDb21wb25lbnQsTW9kYWwgfSBmcm9tICcuL0NvbXBvbmVudHMvYWRkZWRpdC1yZXNvdXJjZWFwcC9hZGRlZGl0LXJlc291cmNlYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtSZXNvdXJjZWxpYkNvbXBvbmVudCwgQWRkZWRpdFJlc291cmNlYXBwQ29tcG9uZW50LE1vZGFsXSxcbiAgaW1wb3J0czogW1xuICAgIExpc3RpbmdNb2R1bGUsXG4gICAgRGVtb01hdGVyaWFsTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1Jlc291cmNlbGliQ29tcG9uZW50LEFkZGVkaXRSZXNvdXJjZWFwcENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czpbTW9kYWxdXG59KVxuZXhwb3J0IGNsYXNzIFJlc291cmNlbGliTW9kdWxlIHsgfVxuIl19