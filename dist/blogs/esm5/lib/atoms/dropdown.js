/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
        this.field = {};
    }
    DropDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dropdown',
                    template: "\n      <div [formGroup]=\"form\">\n        <select class=\"form-control\" [id]=\"field.name\" [formControlName]=\"field.name\">\n          <option *ngFor=\"let opt of field.options\" [value]=\"opt.key\">{{opt.label}}</option>\n        </select>\n      </div> \n    "
                }] }
    ];
    /** @nocollapse */
    DropDownComponent.ctorParameters = function () { return []; };
    DropDownComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return DropDownComponent;
}());
export { DropDownComponent };
if (false) {
    /** @type {?} */
    DropDownComponent.prototype.field;
    /** @type {?} */
    DropDownComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9ncy8iLCJzb3VyY2VzIjpbImxpYi9hdG9tcy9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBY0k7UUFIUyxVQUFLLEdBQU8sRUFBRSxDQUFDO0lBS3hCLENBQUM7O2dCQWhCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSw0UUFNVDtpQkFDSjs7Ozs7d0JBRUksS0FBSzt1QkFDTCxLQUFLOztJQUtWLHdCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FQWSxpQkFBaUI7OztJQUMxQixrQ0FBd0I7O0lBQ3hCLGlDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkcm9wZG93bicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbaWRdPVwiZmllbGQubmFtZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiPlxuICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5vcHRpb25zXCIgW3ZhbHVlXT1cIm9wdC5rZXlcIj57e29wdC5sYWJlbH19PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+IFxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIGZpZWxkOmFueSA9IHt9O1xuICAgIEBJbnB1dCgpIGZvcm06Rm9ybUdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG59Il19