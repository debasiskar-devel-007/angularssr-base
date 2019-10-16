/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// text,email,tel,textarea,password, 
var TextBoxComponent = /** @class */ (function () {
    function TextBoxComponent() {
        this.field = {};
    }
    Object.defineProperty(TextBoxComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    TextBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'textbox',
                    template: "\n      <div [formGroup]=\"form\">\n        <input *ngIf=\"!field.multiline\" [attr.type]=\"field.type\" class=\"form-control\"  [id]=\"field.name\" [name]=\"field.name\" [formControlName]=\"field.name\">\n        <textarea *ngIf=\"field.multiline\" [class.is-invalid]=\"isDirty && !isValid\" [formControlName]=\"field.name\" [id]=\"field.name\"\n        rows=\"9\" class=\"form-control\" [placeholder]=\"field.placeholder\"></textarea>\n      </div> \n\n    "
                }] }
    ];
    /** @nocollapse */
    TextBoxComponent.ctorParameters = function () { return []; };
    TextBoxComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return TextBoxComponent;
}());
export { TextBoxComponent };
if (false) {
    /** @type {?} */
    TextBoxComponent.prototype.field;
    /** @type {?} */
    TextBoxComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jsb2dzLyIsInNvdXJjZXMiOlsibGliL2F0b21zL3RleHRib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHM0M7SUFpQkk7UUFMUyxVQUFLLEdBQU8sRUFBRSxDQUFDO0lBT3hCLENBQUM7SUFMRCxzQkFBSSxxQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNuRSxzQkFBSSxxQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTs7Z0JBZnRFLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLDZjQU9UO2lCQUNKOzs7Ozt3QkFFSSxLQUFLO3VCQUNMLEtBQUs7O0lBT1YsdUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQVRZLGdCQUFnQjs7O0lBQ3pCLGlDQUF3Qjs7SUFDeEIsZ0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyB0ZXh0LGVtYWlsLHRlbCx0ZXh0YXJlYSxwYXNzd29yZCwgXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RleHRib3gnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICA8aW5wdXQgKm5nSWY9XCIhZmllbGQubXVsdGlsaW5lXCIgW2F0dHIudHlwZV09XCJmaWVsZC50eXBlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAgW2lkXT1cImZpZWxkLm5hbWVcIiBbbmFtZV09XCJmaWVsZC5uYW1lXCIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCI+XG4gICAgICAgIDx0ZXh0YXJlYSAqbmdJZj1cImZpZWxkLm11bHRpbGluZVwiIFtjbGFzcy5pcy1pbnZhbGlkXT1cImlzRGlydHkgJiYgIWlzVmFsaWRcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIiBbaWRdPVwiZmllbGQubmFtZVwiXG4gICAgICAgIHJvd3M9XCI5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbcGxhY2Vob2xkZXJdPVwiZmllbGQucGxhY2Vob2xkZXJcIj48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+IFxuXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Qm94Q29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBmaWVsZDphbnkgPSB7fTtcbiAgICBASW5wdXQoKSBmb3JtOkZvcm1Hcm91cDtcbiAgICBnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkOyB9XG4gICAgZ2V0IGlzRGlydHkoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTsgfVxuICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbn0iXX0=