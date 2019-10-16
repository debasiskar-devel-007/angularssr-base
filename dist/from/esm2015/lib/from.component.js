/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class FromComponent {
    constructor() { }
    /**
     * @param {?} fieldsVal
     * @return {?}
     */
    set fields(fieldsVal) {
        this.fieldsValue = (fieldsVal) || '<no name set>';
        this.fieldsValue = fieldsVal;
        console.log(this.fieldsValue);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FromComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-from',
                template: "<p>\n    from works!\n\n\n</p>\n\n<ng-container *ngFor=\"let field of fieldsValue\">\n    <span [ngSwitch]=\"field.type\">\n        <textbox *ngSwitchCase=\"'text'\"></textbox>\n        <!-- <p *ngSwitchCase=\"false\">\n\n        </p>\n        <p *ngSwitchDefault>\n\n        </p> -->\n    </span>\n</ng-container>\n \n    \n\n<!-- <textbox> </textbox> -->",
                styles: [""]
            }] }
];
/** @nocollapse */
FromComponent.ctorParameters = () => [];
FromComponent.propDecorators = {
    fields: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FromComponent.prototype.fieldsValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mcm9tLyIsInNvdXJjZXMiOlsibGliL2Zyb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQVd4QixnQkFBZ0IsQ0FBQzs7Ozs7SUFQakIsSUFDSSxNQUFNLENBQUMsU0FBYztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksZUFBZSxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFJRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsZ1hBQW9DOzthQUVyQzs7Ozs7cUJBS0UsS0FBSzs7OztJQUZOLG9DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZnJvbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mcm9tLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZnJvbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRnJvbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGZpZWxkc1ZhbHVlOiBhbnk7XG5cbiAgQElucHV0KClcbiAgc2V0IGZpZWxkcyhmaWVsZHNWYWw6IGFueSl7XG4gICAgdGhpcy5maWVsZHNWYWx1ZSA9IChmaWVsZHNWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmZpZWxkc1ZhbHVlID0gZmllbGRzVmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZmllbGRzVmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=