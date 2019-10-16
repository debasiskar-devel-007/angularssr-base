/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
export class BlogsComponent {
    constructor() {
        this.onSubmit = new EventEmitter();
        this.fields = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let fieldsCtrls = {};
        for (let f of this.fields) {
            if (f.type != 'checkbox') {
                fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
            }
            else {
                /** @type {?} */
                let opts = {};
                for (let opt of f.options) {
                    opts[opt.key] = new FormControl(opt.value);
                }
                fieldsCtrls[f.name] = new FormGroup(opts);
            }
        }
        this.form = new FormGroup(fieldsCtrls);
    }
}
BlogsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-Blogs',
                template: `
  <form (ngSubmit)="onSubmit.emit(this.form.value)" [formGroup]="form" class="form-horizontal">
  <div *ngFor="let field of fields">
      <field-builder [field]="field" [form]="form"></field-builder>
  </div>
  <div class="form-row"></div>
  <div class="form-group row">
    <div class="col-md-3"></div>
    <div class="col-md-9">
      <button type="submit" [disabled]="!form.valid" class="btn btn-primary">Save</button>
      <strong >Saved all values</strong>
    </div>
  </div>
</form>




<mat-checkbox>Check me!</mat-checkbox>
  `
            }] }
];
/** @nocollapse */
BlogsComponent.ctorParameters = () => [];
BlogsComponent.propDecorators = {
    onSubmit: [{ type: Output }],
    fields: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BlogsComponent.prototype.onSubmit;
    /** @type {?} */
    BlogsComponent.prototype.fields;
    /** @type {?} */
    BlogsComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmxvZ3MvIiwic291cmNlcyI6WyJsaWIvYmxvZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBMEJwRSxNQUFNLE9BQU8sY0FBYztJQUt6QjtRQUhVLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLFdBQU0sR0FBVSxFQUFFLENBQUM7SUFFWixDQUFDOzs7O0lBRWpCLFFBQVE7O1lBQ0YsV0FBVyxHQUFHLEVBQUU7UUFDcEIsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUU7Z0JBQ3hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQzFFO2lCQUFNOztvQkFDRCxJQUFJLEdBQUcsRUFBRTtnQkFDYixLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM1QztnQkFDRCxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQzFDO1NBQ0Y7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVDthQUVGOzs7Ozt1QkFHRSxNQUFNO3FCQUNOLEtBQUs7Ozs7SUFETixrQ0FBd0M7O0lBQ3hDLGdDQUE0Qjs7SUFDNUIsOEJBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLUJsb2dzJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0LmVtaXQodGhpcy5mb3JtLnZhbHVlKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XG4gIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGZpZWxkc1wiPlxuICAgICAgPGZpZWxkLWJ1aWxkZXIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZmllbGQtYnVpbGRlcj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTlcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhZm9ybS52YWxpZFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgPHN0cm9uZyA+U2F2ZWQgYWxsIHZhbHVlczwvc3Ryb25nPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZm9ybT5cblxuXG5cblxuPG1hdC1jaGVja2JveD5DaGVjayBtZSE8L21hdC1jaGVja2JveD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCbG9nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBAT3V0cHV0KCkgb25TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGZpZWxkczogYW55W10gPSBbXTtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBmaWVsZHNDdHJscyA9IHt9O1xuICAgIGZvciAobGV0IGYgb2YgdGhpcy5maWVsZHMpIHtcbiAgICAgIGlmIChmLnR5cGUgIT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBmaWVsZHNDdHJsc1tmLm5hbWVdID0gbmV3IEZvcm1Db250cm9sKGYudmFsdWUgfHwgJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgb3B0cyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBvcHQgb2YgZi5vcHRpb25zKSB7XG4gICAgICAgICAgb3B0c1tvcHQua2V5XSA9IG5ldyBGb3JtQ29udHJvbChvcHQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkc0N0cmxzW2YubmFtZV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICB9XG59Il19