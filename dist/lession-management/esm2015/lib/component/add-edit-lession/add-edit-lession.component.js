/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LessionManagementService } from '../../lession-management.service';
import { ActivatedRoute, Router } from '@angular/router';
export class AddEditLessionComponent {
    /**
     * @param {?} formBuilder
     * @param {?} httpRequest
     * @param {?} ActivatedRoute
     * @param {?} router
     */
    constructor(formBuilder, httpRequest, ActivatedRoute, router) {
        this.formBuilder = formBuilder;
        this.httpRequest = httpRequest;
        this.ActivatedRoute = ActivatedRoute;
        this.router = router;
        this.usersData = null;
        this.buttonText = null;
        this.loader = false;
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loader = false;
        /* Generate form */
        this.generateForm();
        /* Checking */
        switch (this.configData.action) {
            case 'add':
                this.buttonText = "Create"; /* Button text */
                break;
            case 'edit':
                this.buttonText = "Update"; /* Button text */
                this.setDefaultValue(this.configData.defaultData);
                break;
        }
    }
    /* Create form controll */
    /**
     * @return {?}
     */
    generateForm() {
        /* Category create form validation */
        this.lessionForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.maxLength(150)]],
            description: ['', [Validators.required, Validators.maxLength(5000)]],
            userId: ['',]
        });
    }
    /* Category form submit */
    /**
     * @return {?}
     */
    lessionFormSubmit() {
        this.loader = true;
        /* stop here if form is invalid */
        if (this.lessionForm.invalid) {
            return;
        }
        /* start process to submited data */
        /** @type {?} */
        let postData = {
            source: this.configData.source,
            data: Object.assign(this.lessionForm.value, this.configData.condition)
        };
        this.httpRequest.addData(this.configData.endpoint, postData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response.status == "success") {
                this.resetlessionForm();
                this.router.navigate([this.configData.callBack]);
            }
            else {
                alert("Some error occurred. Please try angain.");
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            alert("Some error occurred. Please try angain.");
        }));
    } // console.log("Ekhane asche");
    // console.log("Ekhane asche");
    /* reset Category form */
    /**
     * @return {?}
     */
    resetlessionForm() {
        this.lessionForm.reset();
    }
    /* Set default category form value */
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    setDefaultValue(defaultValue) {
        this.lessionForm.setValue({
            title: defaultValue.title,
            description: defaultValue.description,
            userId: null
        });
    }
}
AddEditLessionComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-add-edit-lession',
                template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<mat-card *ngIf=\"loader==false\">\n  <form class=\"example-form\" [formGroup]=\"lessionForm\" autocomplete=\"off\">\n    <div class=\"example-container\">\n      <mat-form-field>\n        <input matInput formControlName=\"title\" placeholder=\"Title\">\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"lessionForm.controls['title']?.touched && lessionForm.controls['title'].errors && lessionForm.controls['title'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"lessionForm.controls['title']?.touched && lessionForm.controls['title'].errors && lessionForm.controls['title'].errors.maxlength\">Title is not more then 150 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n\n\n\n      <mat-form-field hintLabel=\"Max 1000 characters\">\n        <textarea matInput formControlName=\"description\" #description maxlength=\"1000\" placeholder=\"Description\"></textarea>\n        <mat-hint align=\"end\">{{ description.value?.length || 0 }}/1000</mat-hint>\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"lessionForm.controls['description']?.touched && lessionForm.controls['description'].errors && lessionForm.controls['description'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"lessionForm.controls['description']?.touched && lessionForm.controls['description'].errors && lessionForm.controls['description'].errors.maxlength\">Title is not more then 1000 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n      </div>\n  </form>\n\n  <br />\n  \n  <button (click)=\"lessionFormSubmit();\" mat-button [disabled]=\"!lessionForm.valid\">{{ buttonText }}</button>\n  <button mat-button (click)=\"resetlessionForm();\">Reset</button>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}mat-card{background-color:#e3e2e1}.example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.spinner{text-align:center;margin:auto}.input-field{background-color:#fff;width:100%}"]
            }] }
];
/** @nocollapse */
AddEditLessionComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: LessionManagementService },
    { type: ActivatedRoute },
    { type: Router }
];
AddEditLessionComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AddEditLessionComponent.prototype.lessionForm;
    /** @type {?} */
    AddEditLessionComponent.prototype.usersData;
    /** @type {?} */
    AddEditLessionComponent.prototype.buttonText;
    /** @type {?} */
    AddEditLessionComponent.prototype.configData;
    /** @type {?} */
    AddEditLessionComponent.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    AddEditLessionComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddEditLessionComponent.prototype.httpRequest;
    /**
     * @type {?}
     * @private
     */
    AddEditLessionComponent.prototype.ActivatedRoute;
    /**
     * @type {?}
     * @private
     */
    AddEditLessionComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbGVzc2lvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZXNzaW9uLW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2FkZC1lZGl0LWxlc3Npb24vYWRkLWVkaXQtbGVzc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBRWpGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRekQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7OztJQWFsQyxZQUFvQixXQUF3QixFQUFVLFdBQXFDLEVBQ2pGLGNBQThCLEVBQVUsTUFBYztRQUQ1QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtRQUNqRixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBWHpELGNBQVMsR0FBUSxJQUFJLENBQUM7UUFDdEIsZUFBVSxHQUFRLElBQUksQ0FBQztRQUV2QixXQUFNLEdBQVksS0FBSyxDQUFDO0lBVS9CLENBQUM7Ozs7O0lBUkQsSUFDSSxNQUFNLENBQUMsU0FBYztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDOzs7O0lBT0QsUUFBUTtRQUdOLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsY0FBYztRQUNkLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDOUIsS0FB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dCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBMZXNzaW9uTWFuYWdlbWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9sZXNzaW9uLW1hbmFnZW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZC1lZGl0LWxlc3Npb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLWVkaXQtbGVzc2lvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZC1lZGl0LWxlc3Npb24uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWRkRWRpdExlc3Npb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBsZXNzaW9uRm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgdXNlcnNEYXRhOiBhbnkgPSBudWxsO1xuICBwdWJsaWMgYnV0dG9uVGV4dDogYW55ID0gbnVsbDtcbiAgcHVibGljIGNvbmZpZ0RhdGE6IGFueTtcbiAgcHVibGljIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBodHRwUmVxdWVzdDogTGVzc2lvbk1hbmFnZW1lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgQWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICBcbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuXG4gICAgLyogR2VuZXJhdGUgZm9ybSAqL1xuICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG5cbiAgICAvKiBDaGVja2luZyAqL1xuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJDcmVhdGVcIjsgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVcGRhdGVcIjsgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyogQ3JlYXRlIGZvcm0gY29udHJvbGwgKi9cbiAgZ2VuZXJhdGVGb3JtKCkge1xuICAgIC8qIENhdGVnb3J5IGNyZWF0ZSBmb3JtIHZhbGlkYXRpb24gKi9cbiAgICB0aGlzLmxlc3Npb25Gb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB0aXRsZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTUwKV1dLFxuICAgICAgZGVzY3JpcHRpb246IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwMDApXV0sXG4gICAgICB1c2VySWQ6IFsnJyxdXG4gICAgfSk7XG4gIH1cblxuICAvKiBDYXRlZ29yeSBmb3JtIHN1Ym1pdCAqL1xuICBsZXNzaW9uRm9ybVN1Ym1pdCgpIHtcbiAgICB0aGlzLmxvYWRlciA9IHRydWU7XG5cbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXG4gICAgaWYgKHRoaXMubGVzc2lvbkZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gXG5cbiAgICAgIC8qIHN0YXJ0IHByb2Nlc3MgdG8gc3VibWl0ZWQgZGF0YSAqL1xuICAgICAgbGV0IHBvc3REYXRhOiBhbnkgPSB7XG4gICAgICAgIHNvdXJjZTogdGhpcy5jb25maWdEYXRhLnNvdXJjZSxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLmxlc3Npb25Gb3JtLnZhbHVlLCB0aGlzLmNvbmZpZ0RhdGEuY29uZGl0aW9uKVxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cFJlcXVlc3QuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMucmVzZXRsZXNzaW9uRm9ybSgpO1xuXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY29uZmlnRGF0YS5jYWxsQmFja10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICB9KTtcbiAgICB9IC8vIGNvbnNvbGUubG9nKFwiRWtoYW5lIGFzY2hlXCIpO1xuICBcblxuICAvKiByZXNldCBDYXRlZ29yeSBmb3JtICovXG4gIHJlc2V0bGVzc2lvbkZvcm0oKSB7XG4gICAgdGhpcy5sZXNzaW9uRm9ybS5yZXNldCgpO1xuICB9XG5cbiAgLyogU2V0IGRlZmF1bHQgY2F0ZWdvcnkgZm9ybSB2YWx1ZSAqL1xuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG4gICAgdGhpcy5sZXNzaW9uRm9ybS5zZXRWYWx1ZSh7XG4gICAgICB0aXRsZTogZGVmYXVsdFZhbHVlLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGRlZmF1bHRWYWx1ZS5kZXNjcmlwdGlvbixcbiAgICAgIHVzZXJJZDogbnVsbFxuICAgIH0pO1xuICB9XG5cbn1cblxuIl19