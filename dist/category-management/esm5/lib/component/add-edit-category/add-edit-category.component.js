/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryManagementService } from '../../category-management.service';
import { ActivatedRoute, Router } from '@angular/router';
var AddEditCategoryComponent = /** @class */ (function () {
    function AddEditCategoryComponent(formBuilder, httpRequest, ActivatedRoute, router) {
        this.formBuilder = formBuilder;
        this.httpRequest = httpRequest;
        this.ActivatedRoute = ActivatedRoute;
        this.router = router;
        this.usersData = null;
        this.buttonText = 'Create';
        this.loader = false;
    }
    Object.defineProperty(AddEditCategoryComponent.prototype, "config", {
        set: /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AddEditCategoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /* Create form controll */
    /* Create form controll */
    /**
     * @return {?}
     */
    AddEditCategoryComponent.prototype.generateForm = /* Create form controll */
    /**
     * @return {?}
     */
    function () {
        /* Category create form validation */
        this.categoryForm = this.formBuilder.group({
            title: [null, [Validators.required, Validators.maxLength(150)]],
            description: [null, [Validators.required, Validators.maxLength(1000)]],
            priority: [1, [Validators.required, Validators.max(100)]],
            role: ['public', null],
            status: [false, null],
            userId: [this.configData.userData.id, null]
        });
    };
    /* Category form submit */
    /* Category form submit */
    /**
     * @return {?}
     */
    AddEditCategoryComponent.prototype.categoryFormSubmit = /* Category form submit */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loader = true;
        /* stop here if form is invalid */
        if (this.categoryForm.invalid) {
            return;
        }
        else {
            if (this.categoryForm.value.status) {
                this.categoryForm.value.status = 1;
            }
            else {
                this.categoryForm.value.status = 0;
            }
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.categoryForm.value, this.configData.condition)
            };
            this.httpRequest.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    _this.resetCategoryForm();
                    _this.router.navigate([_this.configData.callBack]);
                }
                else {
                    alert("Some error occord. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occord. Please try angain.");
            }));
        }
    };
    /* reset Category form */
    /* reset Category form */
    /**
     * @return {?}
     */
    AddEditCategoryComponent.prototype.resetCategoryForm = /* reset Category form */
    /**
     * @return {?}
     */
    function () {
        this.categoryForm.reset();
    };
    /* Set default category form value */
    /* Set default category form value */
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditCategoryComponent.prototype.setDefaultValue = /* Set default category form value */
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.categoryForm.setValue({
            title: defaultValue.title,
            description: defaultValue.description,
            priority: defaultValue.priority,
            role: defaultValue.role,
            status: defaultValue.status,
            userId: null
        });
    };
    AddEditCategoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-category',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<mat-card *ngIf=\"loader==false\">\n  <form class=\"example-form\" [formGroup]=\"categoryForm\" autocomplete=\"off\">\n    <div class=\"example-container\">\n      <mat-form-field>\n        <input matInput formControlName=\"title\" placeholder=\"Title\">\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"categoryForm.controls['title']?.touched && categoryForm.controls['title'].errors && categoryForm.controls['title'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"categoryForm.controls['title']?.touched && categoryForm.controls['title'].errors && categoryForm.controls['title'].errors.maxlength\">Title is not more then 150 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n      <mat-form-field hintLabel=\"Max 1000 characters\">\n        <textarea matInput formControlName=\"description\" #description maxlength=\"1000\" placeholder=\"Description\"></textarea>\n        <mat-hint align=\"end\">{{ description.value?.length || 0 }}/1000</mat-hint>\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"categoryForm.controls['description']?.touched && categoryForm.controls['description'].errors && categoryForm.controls['description'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"categoryForm.controls['description']?.touched && categoryForm.controls['description'].errors && categoryForm.controls['description'].errors.maxlength\">Title is not more then 1000 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput formControlName=\"priority\" placeholder=\"Priority\" type=\"number\">\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"categoryForm.controls['priority']?.touched && categoryForm.controls['priority'].errors && categoryForm.controls['priority'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"categoryForm.controls['priority']?.touched && categoryForm.controls['priority'].errors && categoryForm.controls['priority'].errors.max\">Title is not more then 100.</mat-error>\n        <!-- error message start -->\n      </mat-form-field>\n    \n      <mat-form-field>\n        <mat-select formControlName=\"role\" placeholder=\"Role\">\n          <mat-option value=\"public\">Public</mat-option>\n          <mat-option value=\"private\">Private</mat-option>\n        </mat-select>\n        <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n      </mat-form-field>\n\n      <mat-checkbox formControlName=\"status\">Active</mat-checkbox>\n    </div>\n  </form>\n\n  <br />\n  \n  <button (click)=\"categoryFormSubmit();\" mat-button [disabled]=\"!categoryForm.valid\">{{ buttonText }}</button>\n  <button mat-button (click)=\"resetCategoryForm();\">Reset</button>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}mat-card{background-color:#e3e2e1}.example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.spinner{text-align:center;margin:auto}.input-field{background-color:#fff;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    AddEditCategoryComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CategoryManagementService },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    AddEditCategoryComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditCategoryComponent;
}());
export { AddEditCategoryComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2F0ZWdvcnktbWFuYWdlbWVudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvYWRkLWVkaXQtY2F0ZWdvcnkvYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpEO0lBbUJFLGtDQUFvQixXQUF3QixFQUFVLFdBQXNDLEVBQ2xGLGNBQThCLEVBQVUsTUFBYztRQUQ1QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUEyQjtRQUNsRixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBWHpELGNBQVMsR0FBUSxJQUFJLENBQUM7UUFDdEIsZUFBVSxHQUFRLFFBQVEsQ0FBQztRQUUzQixXQUFNLEdBQVksS0FBSyxDQUFDO0lBUXFDLENBQUM7SUFOckUsc0JBQ0ksNENBQU07Ozs7O1FBRFYsVUFDVyxTQUFjO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzlCLENBQUM7OztPQUFBOzs7O0lBS0QsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFcEIsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixjQUFjO1FBQ2QsUUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUM3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QUFDO0lBRUQscUNBQXFDOzs7Ozs7SUFDckMsa0RBQWU7Ozs7O0lBQWYsVUFBZ0IsWUFBWTtRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUN6QixLQUFLLEVBQVMsWUFBWSxDQUFDLEtBQUs7WUFDaEMsV0FBVyxFQUFHLFlBQVksQ0FBQyxXQUFXO1lBQ3RDLFFBQVEsRUFBTSxZQUFZLENBQUMsUUFBUTtZQUNuQyxJQUFJLEVBQVUsWUFBWSxDQUFDLElBQUk7WUFDL0IsTUFBTSxFQUFRLFlBQVksQ0FBQyxNQUFNO1lBQ2pDLE1BQU0sRUFBUSxJQUFJO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXZHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsbzZGQUFpRDs7aUJBRWxEOzs7O2dCQVRRLFdBQVc7Z0JBRVgseUJBQXlCO2dCQUN6QixjQUFjO2dCQUFFLE1BQU07Ozt5QkFnQjVCLEtBQUs7O0lBMkZSLCtCQUFDO0NBQUEsQUF6R0QsSUF5R0M7U0FuR1ksd0JBQXdCOzs7SUFFbkMsZ0RBQStCOztJQUMvQiw2Q0FBNkI7O0lBQzdCLDhDQUFrQzs7SUFDbEMsOENBQXVCOztJQUN2QiwwQ0FBK0I7Ozs7O0lBT25CLCtDQUFnQzs7Ozs7SUFBRSwrQ0FBOEM7Ozs7O0lBQzFGLGtEQUFzQzs7Ozs7SUFBRSwwQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFcnJvclN0YXRlTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgQ2F0ZWdvcnlNYW5hZ2VtZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2NhdGVnb3J5LW1hbmFnZW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZC1lZGl0LWNhdGVnb3J5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1lZGl0LWNhdGVnb3J5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWRkRWRpdENhdGVnb3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgY2F0ZWdvcnlGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyB1c2Vyc0RhdGE6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBidXR0b25UZXh0OiBhbnkgPSAnQ3JlYXRlJztcbiAgcHVibGljIGNvbmZpZ0RhdGE6IGFueTtcbiAgcHVibGljIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBcbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGh0dHBSZXF1ZXN0OiBDYXRlZ29yeU1hbmFnZW1lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgQWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICAgIFxuICAgIC8qIEdlbmVyYXRlIGZvcm0gKi9cbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuXG4gICAgLyogQ2hlY2tpbmcgKi9cbiAgICBzd2l0Y2godGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJDcmVhdGVcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJVcGRhdGVcIjtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyogQ3JlYXRlIGZvcm0gY29udHJvbGwgKi9cbiAgZ2VuZXJhdGVGb3JtKCkge1xuICAgIC8qIENhdGVnb3J5IGNyZWF0ZSBmb3JtIHZhbGlkYXRpb24gKi9cbiAgICB0aGlzLmNhdGVnb3J5Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdGl0bGU6ICAgICAgICBbIG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTUwKSBdIF0sXG4gICAgICBkZXNjcmlwdGlvbjogIFsgbnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMDAwKSBdIF0sXG4gICAgICBwcmlvcml0eTogICAgIFsgMSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heCgxMDApIF0gXSxcbiAgICAgIHJvbGU6ICAgICAgICAgWyAncHVibGljJywgbnVsbCBdLFxuICAgICAgc3RhdHVzOiAgICAgICBbIGZhbHNlLCBudWxsIF0sXG4gICAgICB1c2VySWQ6ICAgICAgIFsgdGhpcy5jb25maWdEYXRhLnVzZXJEYXRhLmlkLCBudWxsIF1cbiAgICB9KTtcbiAgfVxuXG4gIC8qIENhdGVnb3J5IGZvcm0gc3VibWl0ICovXG4gIGNhdGVnb3J5Rm9ybVN1Ym1pdCgpIHtcbiAgICB0aGlzLmxvYWRlciA9IHRydWU7XG5cbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXG4gICAgaWYgKHRoaXMuY2F0ZWdvcnlGb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYodGhpcy5jYXRlZ29yeUZvcm0udmFsdWUuc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlGb3JtLnZhbHVlLnN0YXR1cyA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3J5Rm9ybS52YWx1ZS5zdGF0dXMgPSAwO1xuICAgICAgfVxuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0geyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLmNhdGVnb3J5Rm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cFJlcXVlc3QuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5yZXNldENhdGVnb3J5Rm9ybSgpO1xuXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY29uZmlnRGF0YS5jYWxsQmFja10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2NvcmQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2NvcmQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qIHJlc2V0IENhdGVnb3J5IGZvcm0gKi9cbiAgcmVzZXRDYXRlZ29yeUZvcm0oKSB7XG4gICAgdGhpcy5jYXRlZ29yeUZvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIC8qIFNldCBkZWZhdWx0IGNhdGVnb3J5IGZvcm0gdmFsdWUgKi9cbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xuICAgIHRoaXMuY2F0ZWdvcnlGb3JtLnNldFZhbHVlKHsgIFxuICAgICAgdGl0bGU6ICAgICAgICBkZWZhdWx0VmFsdWUudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogIGRlZmF1bHRWYWx1ZS5kZXNjcmlwdGlvbixcbiAgICAgIHByaW9yaXR5OiAgICAgZGVmYXVsdFZhbHVlLnByaW9yaXR5LFxuICAgICAgcm9sZTogICAgICAgICBkZWZhdWx0VmFsdWUucm9sZSxcbiAgICAgIHN0YXR1czogICAgICAgZGVmYXVsdFZhbHVlLnN0YXR1cyxcbiAgICAgIHVzZXJJZDogICAgICAgbnVsbFxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==