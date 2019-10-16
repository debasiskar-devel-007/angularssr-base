/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var FromComponent = /** @class */ (function () {
    function FromComponent() {
    }
    Object.defineProperty(FromComponent.prototype, "fields", {
        set: /**
         * @param {?} fieldsVal
         * @return {?}
         */
        function (fieldsVal) {
            this.fieldsValue = (fieldsVal) || '<no name set>';
            this.fieldsValue = fieldsVal;
            console.log(this.fieldsValue);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FromComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FromComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-from',
                    template: "<p>\n    from works!\n\n\n</p>\n\n<ng-container *ngFor=\"let field of fieldsValue\">\n    <span [ngSwitch]=\"field.type\">\n        <textbox *ngSwitchCase=\"'text'\"></textbox>\n        <!-- <p *ngSwitchCase=\"false\">\n\n        </p>\n        <p *ngSwitchDefault>\n\n        </p> -->\n    </span>\n</ng-container>\n \n    \n\n<!-- <textbox> </textbox> -->",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FromComponent.ctorParameters = function () { return []; };
    FromComponent.propDecorators = {
        fields: [{ type: Input }]
    };
    return FromComponent;
}());
export { FromComponent };
if (false) {
    /** @type {?} */
    FromComponent.prototype.fieldsValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mcm9tLyIsInNvdXJjZXMiOlsibGliL2Zyb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQWdCRTtJQUFnQixDQUFDO0lBUGpCLHNCQUNJLGlDQUFNOzs7OztRQURWLFVBQ1csU0FBYztZQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksZUFBZSxDQUFDO1lBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7OztPQUFBOzs7O0lBSUQsZ0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsZ1hBQW9DOztpQkFFckM7Ozs7O3lCQUtFLEtBQUs7O0lBWVIsb0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWhCWSxhQUFhOzs7SUFFeEIsb0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1mcm9tJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zyb20uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mcm9tLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGcm9tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZmllbGRzVmFsdWU6IGFueTtcblxuICBASW5wdXQoKVxuICBzZXQgZmllbGRzKGZpZWxkc1ZhbDogYW55KXtcbiAgICB0aGlzLmZpZWxkc1ZhbHVlID0gKGZpZWxkc1ZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZmllbGRzVmFsdWUgPSBmaWVsZHNWYWw7XG4gICAgY29uc29sZS5sb2codGhpcy5maWVsZHNWYWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==