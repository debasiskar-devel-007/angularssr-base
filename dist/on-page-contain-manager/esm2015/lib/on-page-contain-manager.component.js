/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './component/common/dialog/dialog.component';
export class OnPageContainManagerComponent {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    openModal() {
        /** @type {?} */
        const dialogRef = this.dialog.open(DialogComponent);
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            console.log(`Dialog result: ${result}`);
        }));
    }
}
OnPageContainManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-on-page-contain-manager',
                template: "<button mat-button type=\"button\" (click)=\"openModal();\">Click me!</button>",
                styles: [""]
            }] }
];
/** @nocollapse */
OnPageContainManagerComponent.ctorParameters = () => [
    { type: MatDialog }
];
if (false) {
    /** @type {?} */
    OnPageContainManagerComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tcGFnZS1jb250YWluLW1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb24tcGFnZS1jb250YWluLW1hbmFnZXIvIiwic291cmNlcyI6WyJsaWIvb24tcGFnZS1jb250YWluLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFPN0UsTUFBTSxPQUFPLDZCQUE2Qjs7OztJQUV4QyxZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQzs7OztJQUV6QyxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFNBQVM7O2NBQ0QsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUVuRCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLDBGQUEyQzs7YUFFNUM7Ozs7WUFQUSxTQUFTOzs7O0lBVUosK0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9jb21tb24vZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItb24tcGFnZS1jb250YWluLW1hbmFnZXInLFxuICB0ZW1wbGF0ZVVybDogJ29uLXBhZ2UtY29udGFpbi1tYW5hZ2VyLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdHlsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPblBhZ2VDb250YWluTWFuYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NvbXBvbmVudCk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBEaWFsb2cgcmVzdWx0OiAke3Jlc3VsdH1gKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=