/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// text,email,tel,textarea,password, 
export class TextBoxComponent {
    constructor() {
        this.field = {};
    }
    /**
     * @return {?}
     */
    get isValid() { return this.form.controls[this.field.name].valid; }
    /**
     * @return {?}
     */
    get isDirty() { return this.form.controls[this.field.name].dirty; }
}
TextBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'textbox',
                template: `
      <div [formGroup]="form">
        <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control"  [id]="field.name" [name]="field.name" [formControlName]="field.name">
        <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControlName]="field.name" [id]="field.name"
        rows="9" class="form-control" [placeholder]="field.placeholder"></textarea>
      </div> 

    `
            }] }
];
/** @nocollapse */
TextBoxComponent.ctorParameters = () => [];
TextBoxComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TextBoxComponent.prototype.field;
    /** @type {?} */
    TextBoxComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jsb2dzLyIsInNvdXJjZXMiOlsibGliL2F0b21zL3RleHRib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFjM0MsTUFBTSxPQUFPLGdCQUFnQjtJQU16QjtRQUxTLFVBQUssR0FBTyxFQUFFLENBQUM7SUFPeEIsQ0FBQzs7OztJQUxELElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7O0lBQ25FLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7WUFmdEUsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7Ozs7S0FPVDthQUNKOzs7OztvQkFFSSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixpQ0FBd0I7O0lBQ3hCLGdDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gdGV4dCxlbWFpbCx0ZWwsdGV4dGFyZWEscGFzc3dvcmQsIFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0ZXh0Ym94JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgPGlucHV0ICpuZ0lmPVwiIWZpZWxkLm11bHRpbGluZVwiIFthdHRyLnR5cGVdPVwiZmllbGQudHlwZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgIFtpZF09XCJmaWVsZC5uYW1lXCIgW25hbWVdPVwiZmllbGQubmFtZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiPlxuICAgICAgICA8dGV4dGFyZWEgKm5nSWY9XCJmaWVsZC5tdWx0aWxpbmVcIiBbY2xhc3MuaXMtaW52YWxpZF09XCJpc0RpcnR5ICYmICFpc1ZhbGlkXCIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCIgW2lkXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICByb3dzPVwiOVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW3BsYWNlaG9sZGVyXT1cImZpZWxkLnBsYWNlaG9sZGVyXCI+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PiBcblxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEJveENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZmllbGQ6YW55ID0ge307XG4gICAgQElucHV0KCkgZm9ybTpGb3JtR3JvdXA7XG4gICAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICAgIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cbiAgXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG59Il19