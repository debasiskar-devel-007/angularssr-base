/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './component/common/dialog/dialog.component';
var OnPageContainManagerComponent = /** @class */ (function () {
    function OnPageContainManagerComponent(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    OnPageContainManagerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    OnPageContainManagerComponent.prototype.openModal = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dialogRef = this.dialog.open(DialogComponent);
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            console.log("Dialog result: " + result);
        }));
    };
    OnPageContainManagerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-on-page-contain-manager',
                    template: "<button mat-button type=\"button\" (click)=\"openModal();\">Click me!</button>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    OnPageContainManagerComponent.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    return OnPageContainManagerComponent;
}());
export { OnPageContainManagerComponent };
if (false) {
    /** @type {?} */
    OnPageContainManagerComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tcGFnZS1jb250YWluLW1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb24tcGFnZS1jb250YWluLW1hbmFnZXIvIiwic291cmNlcyI6WyJsaWIvb24tcGFnZS1jb250YWluLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFN0U7SUFPRSx1Q0FBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFJLENBQUM7Ozs7SUFFekMsZ0RBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELGlEQUFTOzs7SUFBVDs7WUFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBRW5ELFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQWtCLE1BQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QywwRkFBMkM7O2lCQUU1Qzs7OztnQkFQUSxTQUFTOztJQXVCbEIsb0NBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLDZCQUE2Qjs7O0lBRTVCLCtDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvY29tbW9uL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uLXBhZ2UtY29udGFpbi1tYW5hZ2VyJyxcbiAgdGVtcGxhdGVVcmw6ICdvbi1wYWdlLWNvbnRhaW4tbWFuYWdlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3R5bGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT25QYWdlQ29udGFpbk1hbmFnZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvcGVuTW9kYWwoKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dDb21wb25lbnQpO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgRGlhbG9nIHJlc3VsdDogJHtyZXN1bHR9YCk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19