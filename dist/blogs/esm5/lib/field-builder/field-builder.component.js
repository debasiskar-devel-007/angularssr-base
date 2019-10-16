/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var FieldBuilderComponent = /** @class */ (function () {
    function FieldBuilderComponent() {
    }
    Object.defineProperty(FieldBuilderComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldBuilderComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FieldBuilderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FieldBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'field-builder',
                    template: "\n  <div class=\"form-group row\" [formGroup]=\"form\">\n    <label class=\"col-md-3 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n      <strong class=\"text-danger\" *ngIf=\"field.required\">*</strong>\n    </label>\n    <div class=\"col-md-9\" [ngSwitch]=\"field.type\">\n      <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n      <dropdown *ngSwitchCase=\"'dropdown'\" [field]=\"field\" [form]=\"form\"></dropdown>\n      <checkbox *ngSwitchCase=\"'checkbox'\" [field]=\"field\" [form]=\"form\"></checkbox>\n      <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n      <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\n      <div class=\"alert alert-danger my-1 p-2 fadeInDown animated\" *ngIf=\"!isValid && isDirty\">{{field.label}} is required</div>\n    </div>\n  </div>\n  "
                }] }
    ];
    /** @nocollapse */
    FieldBuilderComponent.ctorParameters = function () { return []; };
    FieldBuilderComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return FieldBuilderComponent;
}());
export { FieldBuilderComponent };
if (false) {
    /** @type {?} */
    FieldBuilderComponent.prototype.field;
    /** @type {?} */
    FieldBuilderComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9ncy8iLCJzb3VyY2VzIjpbImxpYi9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQTBCRTtJQUFnQixDQUFDO0lBSGpCLHNCQUFJLDBDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ25FLHNCQUFJLDBDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBOzs7O0lBSW5FLHdDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSw4M0JBZVQ7aUJBQ0Y7Ozs7O3dCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFVUiw0QkFBQztDQUFBLEFBL0JELElBK0JDO1NBWlkscUJBQXFCOzs7SUFDaEMsc0NBQW1COztJQUNuQixxQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmllbGQtYnVpbGRlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGZvcm0tY29udHJvbC1sYWJlbFwiIFthdHRyLmZvcl09XCJmaWVsZC5sYWJlbFwiPlxuICAgICAge3tmaWVsZC5sYWJlbH19XG4gICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZpZWxkLnJlcXVpcmVkXCI+Kjwvc3Ryb25nPlxuICAgIDwvbGFiZWw+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC05XCIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cbiAgICAgIDx0ZXh0Ym94ICpuZ1N3aXRjaENhc2U9XCIndGV4dCdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuICAgICAgPGRyb3Bkb3duICpuZ1N3aXRjaENhc2U9XCInZHJvcGRvd24nXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZHJvcGRvd24+XG4gICAgICA8Y2hlY2tib3ggKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9jaGVja2JveD5cbiAgICAgIDxyYWRpbyAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3JhZGlvPlxuICAgICAgPGZpbGUgKm5nU3dpdGNoQ2FzZT1cIidmaWxlJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2ZpbGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIG15LTEgcC0yIGZhZGVJbkRvd24gYW5pbWF0ZWRcIiAqbmdJZj1cIiFpc1ZhbGlkICYmIGlzRGlydHlcIj57e2ZpZWxkLmxhYmVsfX0gaXMgcmVxdWlyZWQ8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRCdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmllbGQ6YW55O1xuICBASW5wdXQoKSBmb3JtOmFueTtcbiAgXG4gIGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsaWQ7IH1cbiAgZ2V0IGlzRGlydHkoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTsgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19