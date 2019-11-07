/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryManagementService } from '../../category-management.service';
import { ActivatedRoute, Router } from '@angular/router';
export class AddEditCategoryComponent {
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
        this.buttonText = 'Create';
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
                /* Button text */
                this.buttonText = "Create";
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "Update";
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
        this.categoryForm = this.formBuilder.group({
            title: [null, [Validators.required, Validators.maxLength(150)]],
            description: [null, [Validators.required, Validators.maxLength(1000)]],
            priority: [1, [Validators.required, Validators.max(100)]],
            role: ['public', null],
            status: [false, null],
            userId: [this.configData.userData.id, null]
        });
    }
    /* Category form submit */
    /**
     * @return {?}
     */
    categoryFormSubmit() {
        this.loader = true;
        /* stop here if form is invalid */
        if (this.categoryForm.invalid) {
            return;
        }
        else {
            if (this.categoryForm.value.status) {
                this.categoryForm.value.status = parseInt("1");
            }
            else {
                this.categoryForm.value.status = parseInt("0");
                ;
            }
            /* start process to submited data */
            /** @type {?} */
            let postData = {
                source: this.configData.source,
                data: Object.assign(this.categoryForm.value, this.configData.condition)
            };
            this.httpRequest.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                if (response.status == "success") {
                    this.resetCategoryForm();
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
        }
    }
    /* reset Category form */
    /**
     * @return {?}
     */
    resetCategoryForm() {
        this.categoryForm.reset();
    }
    /* Set default category form value */
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    setDefaultValue(defaultValue) {
        this.categoryForm.setValue({
            title: defaultValue.title,
            description: defaultValue.description,
            priority: defaultValue.priority,
            role: defaultValue.role,
            status: defaultValue.status,
            userId: null
        });
    }
}
AddEditCategoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-add-edit-category',
                template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<mat-card *ngIf=\"loader==false\">\n  <form class=\"example-form\" [formGroup]=\"categoryForm\" autocomplete=\"off\">\n    <div class=\"example-container\">\n      <mat-form-field>\n        <input matInput formControlName=\"title\" placeholder=\"Title\">\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"categoryForm.controls['title']?.touched && categoryForm.controls['title'].errors && categoryForm.controls['title'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"categoryForm.controls['title']?.touched && categoryForm.controls['title'].errors && categoryForm.controls['title'].errors.maxlength\">Title is not more then 150 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n      <mat-form-field hintLabel=\"Max 1000 characters\">\n        <textarea matInput formControlName=\"description\" #description maxlength=\"1000\" placeholder=\"Description\"></textarea>\n        <mat-hint align=\"end\">{{ description.value?.length || 0 }}/1000</mat-hint>\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"categoryForm.controls['description']?.touched && categoryForm.controls['description'].errors && categoryForm.controls['description'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"categoryForm.controls['description']?.touched && categoryForm.controls['description'].errors && categoryForm.controls['description'].errors.maxlength\">Title is not more then 1000 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput formControlName=\"priority\" placeholder=\"Priority\" type=\"number\">\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"categoryForm.controls['priority']?.touched && categoryForm.controls['priority'].errors && categoryForm.controls['priority'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"categoryForm.controls['priority']?.touched && categoryForm.controls['priority'].errors && categoryForm.controls['priority'].errors.max\">Title is not more then 100.</mat-error>\n        <!-- error message start -->\n      </mat-form-field>\n    \n      <mat-form-field>\n        <mat-select formControlName=\"role\" placeholder=\"Role\">\n          <mat-option value=\"public\">Public</mat-option>\n          <mat-option value=\"private\">Private</mat-option>\n        </mat-select>\n        <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n      </mat-form-field>\n\n      <mat-checkbox formControlName=\"status\">Active</mat-checkbox>\n    </div>\n  </form>\n\n  <br />\n  \n  <button (click)=\"categoryFormSubmit();\" mat-button [disabled]=\"!categoryForm.valid\">{{ buttonText }}</button>\n  <button mat-button (click)=\"resetCategoryForm();\">Reset</button>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}mat-card{background-color:#e3e2e1}.example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.spinner{text-align:center;margin:auto}.input-field{background-color:#fff;width:100%}"]
            }] }
];
/** @nocollapse */
AddEditCategoryComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CategoryManagementService },
    { type: ActivatedRoute },
    { type: Router }
];
AddEditCategoryComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AddEditCategoryComponent.prototype.categoryForm;
    /** @type {?} */
    AddEditCategoryComponent.prototype.usersData;
    /** @type {?} */
    AddEditCategoryComponent.prototype.buttonText;
    /** @type {?} */
    AddEditCategoryComponent.prototype.configData;
    /** @type {?} */
    AddEditCategoryComponent.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    AddEditCategoryComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddEditCategoryComponent.prototype.httpRequest;
    /**
     * @type {?}
     * @private
     */
    AddEditCategoryComponent.prototype.ActivatedRoute;
    /**
     * @type {?}
     * @private
     */
    AddEditCategoryComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2F0ZWdvcnktbWFuYWdlbWVudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvYWRkLWVkaXQtY2F0ZWdvcnkvYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpELE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7SUFhbkMsWUFBb0IsV0FBd0IsRUFBVSxXQUFzQyxFQUNsRixjQUE4QixFQUFVLE1BQWM7UUFENUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBMkI7UUFDbEYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVh6RCxjQUFTLEdBQVEsSUFBSSxDQUFDO1FBQ3RCLGVBQVUsR0FBUSxRQUFRLENBQUM7UUFFM0IsV0FBTSxHQUFZLEtBQUssQ0FBQztJQVFxQyxDQUFDOzs7OztJQU5yRSxJQUNJLE1BQU0sQ0FBQyxTQUFjO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFLRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFcEIsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixjQUFjO1FBQ2QsUUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUM3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ZSxDQUFDLFlBQVk7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDekIsS0FBSyxFQUFTLFlBQVksQ0FBQyxLQUFLO1lBQ2hDLFdBQVcsRUFBRyxZQUFZLENBQUMsV0FBVztZQUN0QyxRQUFRLEVBQU0sWUFBWSxDQUFDLFFBQVE7WUFDbkMsSUFBSSxFQUFVLFlBQVksQ0FBQyxJQUFJO1lBQy9CLE1BQU0sRUFBUSxZQUFZLENBQUMsTUFBTTtZQUNqQyxNQUFNLEVBQVEsSUFBSTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF2R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLG82RkFBaUQ7O2FBRWxEOzs7O1lBVFEsV0FBVztZQUVYLHlCQUF5QjtZQUN6QixjQUFjO1lBQUUsTUFBTTs7O3FCQWdCNUIsS0FBSzs7OztJQU5OLGdEQUErQjs7SUFDL0IsNkNBQTZCOztJQUM3Qiw4Q0FBa0M7O0lBQ2xDLDhDQUF1Qjs7SUFDdkIsMENBQStCOzs7OztJQU9uQiwrQ0FBZ0M7Ozs7O0lBQUUsK0NBQThDOzs7OztJQUMxRixrREFBc0M7Ozs7O0lBQUUsMENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IENhdGVnb3J5TWFuYWdlbWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXRlZ29yeS1tYW5hZ2VtZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC1jYXRlZ29yeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZC1lZGl0LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFkZEVkaXRDYXRlZ29yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGNhdGVnb3J5Rm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgdXNlcnNEYXRhOiBhbnkgPSBudWxsO1xuICBwdWJsaWMgYnV0dG9uVGV4dDogYW55ID0gJ0NyZWF0ZSc7XG4gIHB1YmxpYyBjb25maWdEYXRhOiBhbnk7XG4gIHB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBodHRwUmVxdWVzdDogQ2F0ZWdvcnlNYW5hZ2VtZW50U2VydmljZSxcbiAgICBwcml2YXRlIEFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgICBcbiAgICAvKiBHZW5lcmF0ZSBmb3JtICovXG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuICAgIC8qIENoZWNraW5nICovXG4gICAgc3dpdGNoKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiQ3JlYXRlXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVXBkYXRlXCI7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qIENyZWF0ZSBmb3JtIGNvbnRyb2xsICovXG4gIGdlbmVyYXRlRm9ybSgpIHtcbiAgICAvKiBDYXRlZ29yeSBjcmVhdGUgZm9ybSB2YWxpZGF0aW9uICovXG4gICAgdGhpcy5jYXRlZ29yeUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHRpdGxlOiAgICAgICAgWyBudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDE1MCkgXSBdLFxuICAgICAgZGVzY3JpcHRpb246ICBbIG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwMCkgXSBdLFxuICAgICAgcHJpb3JpdHk6ICAgICBbIDEsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXgoMTAwKSBdIF0sXG4gICAgICByb2xlOiAgICAgICAgIFsgJ3B1YmxpYycsIG51bGwgXSxcbiAgICAgIHN0YXR1czogICAgICAgWyBmYWxzZSwgbnVsbCBdLFxuICAgICAgdXNlcklkOiAgICAgICBbIHRoaXMuY29uZmlnRGF0YS51c2VyRGF0YS5pZCwgbnVsbCBdXG4gICAgfSk7XG4gIH1cblxuICAvKiBDYXRlZ29yeSBmb3JtIHN1Ym1pdCAqL1xuICBjYXRlZ29yeUZvcm1TdWJtaXQoKSB7XG4gICAgdGhpcy5sb2FkZXIgPSB0cnVlO1xuXG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xuICAgIGlmICh0aGlzLmNhdGVnb3J5Rm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKHRoaXMuY2F0ZWdvcnlGb3JtLnZhbHVlLnN0YXR1cykge1xuICAgICAgICB0aGlzLmNhdGVnb3J5Rm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3J5Rm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjBcIik7O1xuICAgICAgfVxuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0geyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLmNhdGVnb3J5Rm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cFJlcXVlc3QuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5yZXNldENhdGVnb3J5Rm9ybSgpO1xuXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY29uZmlnRGF0YS5jYWxsQmFja10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiByZXNldCBDYXRlZ29yeSBmb3JtICovXG4gIHJlc2V0Q2F0ZWdvcnlGb3JtKCkge1xuICAgIHRoaXMuY2F0ZWdvcnlGb3JtLnJlc2V0KCk7XG4gIH1cblxuICAvKiBTZXQgZGVmYXVsdCBjYXRlZ29yeSBmb3JtIHZhbHVlICovXG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcbiAgICB0aGlzLmNhdGVnb3J5Rm9ybS5zZXRWYWx1ZSh7ICBcbiAgICAgIHRpdGxlOiAgICAgICAgZGVmYXVsdFZhbHVlLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246ICBkZWZhdWx0VmFsdWUuZGVzY3JpcHRpb24sXG4gICAgICBwcmlvcml0eTogICAgIGRlZmF1bHRWYWx1ZS5wcmlvcml0eSxcbiAgICAgIHJvbGU6ICAgICAgICAgZGVmYXVsdFZhbHVlLnJvbGUsXG4gICAgICBzdGF0dXM6ICAgICAgIGRlZmF1bHRWYWx1ZS5zdGF0dXMsXG4gICAgICB1c2VySWQ6ICAgICAgIG51bGxcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=