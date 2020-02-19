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
export class ResourcelibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VsaWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVzb3VyY2VsaWIvIiwic291cmNlcyI6WyJsaWIvcmVzb3VyY2VsaWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwyQkFBMkIsRUFBQyxLQUFLLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNuSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBZTFELE1BQU0sT0FBTyxpQkFBaUI7OztZQWI3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsMkJBQTJCLEVBQUMsS0FBSyxDQUFDO2dCQUN2RSxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUMsMkJBQTJCLENBQUM7Z0JBQzNELGVBQWUsRUFBQyxDQUFDLEtBQUssQ0FBQzthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvdXJjZWxpYkNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2VsaWIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaXN0aW5nLWFuZ3VsYXI3JztcbmltcG9ydCB7IERlbW9NYXRlcmlhbE1vZHVsZX0gZnJvbSAnLi9Nb2R1bGVzL21hdGVyaWFsLW1vZHVsZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSAsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFkZGVkaXRSZXNvdXJjZWFwcENvbXBvbmVudCxNb2RhbCB9IGZyb20gJy4vQ29tcG9uZW50cy9hZGRlZGl0LXJlc291cmNlYXBwL2FkZGVkaXQtcmVzb3VyY2VhcHAuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1Jlc291cmNlbGliQ29tcG9uZW50LCBBZGRlZGl0UmVzb3VyY2VhcHBDb21wb25lbnQsTW9kYWxdLFxuICBpbXBvcnRzOiBbXG4gICAgTGlzdGluZ01vZHVsZSxcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbUmVzb3VyY2VsaWJDb21wb25lbnQsQWRkZWRpdFJlc291cmNlYXBwQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOltNb2RhbF1cbn0pXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VsaWJNb2R1bGUgeyB9XG4iXX0=