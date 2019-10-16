/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
var BlogsComponent = /** @class */ (function () {
    function BlogsComponent() {
        this.onSubmit = new EventEmitter();
        this.fields = [];
    }
    /**
     * @return {?}
     */
    BlogsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var fieldsCtrls = {};
        try {
            for (var _c = tslib_1.__values(this.fields), _d = _c.next(); !_d.done; _d = _c.next()) {
                var f = _d.value;
                if (f.type != 'checkbox') {
                    fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
                }
                else {
                    /** @type {?} */
                    var opts = {};
                    try {
                        for (var _e = tslib_1.__values(f.options), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var opt = _f.value;
                            opts[opt.key] = new FormControl(opt.value);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    fieldsCtrls[f.name] = new FormGroup(opts);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.form = new FormGroup(fieldsCtrls);
    };
    BlogsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-Blogs',
                    template: "\n  <form (ngSubmit)=\"onSubmit.emit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n  <div *ngFor=\"let field of fields\">\n      <field-builder [field]=\"field\" [form]=\"form\"></field-builder>\n  </div>\n  <div class=\"form-row\"></div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-9\">\n      <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\">Save</button>\n      <strong >Saved all values</strong>\n    </div>\n  </div>\n</form>\n\n\n\n\n<mat-checkbox>Check me!</mat-checkbox>\n  "
                }] }
    ];
    /** @nocollapse */
    BlogsComponent.ctorParameters = function () { return []; };
    BlogsComponent.propDecorators = {
        onSubmit: [{ type: Output }],
        fields: [{ type: Input }]
    };
    return BlogsComponent;
}());
export { BlogsComponent };
if (false) {
    /** @type {?} */
    BlogsComponent.prototype.onSubmit;
    /** @type {?} */
    BlogsComponent.prototype.fields;
    /** @type {?} */
    BlogsComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmxvZ3MvIiwic291cmNlcyI6WyJsaWIvYmxvZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRTtJQTZCRTtRQUhVLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLFdBQU0sR0FBVSxFQUFFLENBQUM7SUFFWixDQUFDOzs7O0lBRWpCLGlDQUFROzs7SUFBUjs7O1lBQ00sV0FBVyxHQUFHLEVBQUU7O1lBQ3BCLEtBQWMsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxNQUFNLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXRCLElBQUksQ0FBQyxXQUFBO2dCQUNSLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUU7b0JBQ3hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lCQUMxRTtxQkFBTTs7d0JBQ0QsSUFBSSxHQUFHLEVBQUU7O3dCQUNiLEtBQWdCLElBQUEsS0FBQSxpQkFBQSxDQUFDLENBQUMsT0FBTyxDQUFBLGdCQUFBLDRCQUFFOzRCQUF0QixJQUFJLEdBQUcsV0FBQTs0QkFDVixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDNUM7Ozs7Ozs7OztvQkFDRCxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO2lCQUMxQzthQUNGOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSx5a0JBbUJUO2lCQUVGOzs7OzsyQkFHRSxNQUFNO3lCQUNOLEtBQUs7O0lBbUJSLHFCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0F0QlksY0FBYzs7O0lBRXpCLGtDQUF3Qzs7SUFDeEMsZ0NBQTRCOztJQUM1Qiw4QkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItQmxvZ3MnLFxuICB0ZW1wbGF0ZTogYFxuICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQuZW1pdCh0aGlzLmZvcm0udmFsdWUpXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGRzXCI+XG4gICAgICA8ZmllbGQtYnVpbGRlciBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9maWVsZC1idWlsZGVyPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFmb3JtLnZhbGlkXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TYXZlPC9idXR0b24+XG4gICAgICA8c3Ryb25nID5TYXZlZCBhbGwgdmFsdWVzPC9zdHJvbmc+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9mb3JtPlxuXG5cblxuXG48bWF0LWNoZWNrYm94PkNoZWNrIG1lITwvbWF0LWNoZWNrYm94PlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJsb2dzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIEBPdXRwdXQoKSBvblN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgZmllbGRzOiBhbnlbXSA9IFtdO1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG4gICAgZm9yIChsZXQgZiBvZiB0aGlzLmZpZWxkcykge1xuICAgICAgaWYgKGYudHlwZSAhPSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGZpZWxkc0N0cmxzW2YubmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woZi52YWx1ZSB8fCAnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvcHRzID0ge307XG4gICAgICAgIGZvciAobGV0IG9wdCBvZiBmLm9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzQ3RybHNbZi5uYW1lXSA9IG5ldyBGb3JtR3JvdXAob3B0cylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG4gIH1cbn0iXX0=