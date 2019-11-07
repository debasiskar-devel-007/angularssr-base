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
                this.categoryForm.value.status = parseInt("1");
            }
            else {
                this.categoryForm.value.status = parseInt("0");
                ;
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
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                alert("Some error occurred. Please try angain.");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2F0ZWdvcnktbWFuYWdlbWVudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvYWRkLWVkaXQtY2F0ZWdvcnkvYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpEO0lBbUJFLGtDQUFvQixXQUF3QixFQUFVLFdBQXNDLEVBQ2xGLGNBQThCLEVBQVUsTUFBYztRQUQ1QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUEyQjtRQUNsRixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBWHpELGNBQVMsR0FBUSxJQUFJLENBQUM7UUFDdEIsZUFBVSxHQUFRLFFBQVEsQ0FBQztRQUUzQixXQUFNLEdBQVksS0FBSyxDQUFDO0lBUXFDLENBQUM7SUFOckUsc0JBQ0ksNENBQU07Ozs7O1FBRFYsVUFDVyxTQUFjO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzlCLENBQUM7OztPQUFBOzs7O0lBS0QsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFcEIsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixjQUFjO1FBQ2QsUUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUM3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QUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxxQ0FBcUM7Ozs7OztJQUNyQyxrREFBZTs7Ozs7SUFBZixVQUFnQixZQUFZO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQ3pCLEtBQUssRUFBUyxZQUFZLENBQUMsS0FBSztZQUNoQyxXQUFXLEVBQUcsWUFBWSxDQUFDLFdBQVc7WUFDdEMsUUFBUSxFQUFNLFlBQVksQ0FBQyxRQUFRO1lBQ25DLElBQUksRUFBVSxZQUFZLENBQUMsSUFBSTtZQUMvQixNQUFNLEVBQVEsWUFBWSxDQUFDLE1BQU07WUFDakMsTUFBTSxFQUFRLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBdkdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxvNkZBQWlEOztpQkFFbEQ7Ozs7Z0JBVFEsV0FBVztnQkFFWCx5QkFBeUI7Z0JBQ3pCLGNBQWM7Z0JBQUUsTUFBTTs7O3lCQWdCNUIsS0FBSzs7SUEyRlIsK0JBQUM7Q0FBQSxBQXpHRCxJQXlHQztTQW5HWSx3QkFBd0I7OztJQUVuQyxnREFBK0I7O0lBQy9CLDZDQUE2Qjs7SUFDN0IsOENBQWtDOztJQUNsQyw4Q0FBdUI7O0lBQ3ZCLDBDQUErQjs7Ozs7SUFPbkIsK0NBQWdDOzs7OztJQUFFLCtDQUE4Qzs7Ozs7SUFDMUYsa0RBQXNDOzs7OztJQUFFLDBDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBDYXRlZ29yeU1hbmFnZW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2F0ZWdvcnktbWFuYWdlbWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkLWVkaXQtY2F0ZWdvcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBZGRFZGl0Q2F0ZWdvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBjYXRlZ29yeUZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHVzZXJzRGF0YTogYW55ID0gbnVsbDtcbiAgcHVibGljIGJ1dHRvblRleHQ6IGFueSA9ICdDcmVhdGUnO1xuICBwdWJsaWMgY29uZmlnRGF0YTogYW55O1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gZmFsc2U7XG4gIFxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgaHR0cFJlcXVlc3Q6IENhdGVnb3J5TWFuYWdlbWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBBY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gICAgXG4gICAgLyogR2VuZXJhdGUgZm9ybSAqL1xuICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG5cbiAgICAvKiBDaGVja2luZyAqL1xuICAgIHN3aXRjaCh0aGlzLmNvbmZpZ0RhdGEuYWN0aW9uKSB7XG4gICAgICBjYXNlICdhZGQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIkNyZWF0ZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVwZGF0ZVwiO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZ0RhdGEuZGVmYXVsdERhdGEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKiBDcmVhdGUgZm9ybSBjb250cm9sbCAqL1xuICBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgLyogQ2F0ZWdvcnkgY3JlYXRlIGZvcm0gdmFsaWRhdGlvbiAqL1xuICAgIHRoaXMuY2F0ZWdvcnlGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB0aXRsZTogICAgICAgIFsgbnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxNTApIF0gXSxcbiAgICAgIGRlc2NyaXB0aW9uOiAgWyBudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwMDApIF0gXSxcbiAgICAgIHByaW9yaXR5OiAgICAgWyAxLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4KDEwMCkgXSBdLFxuICAgICAgcm9sZTogICAgICAgICBbICdwdWJsaWMnLCBudWxsIF0sXG4gICAgICBzdGF0dXM6ICAgICAgIFsgZmFsc2UsIG51bGwgXSxcbiAgICAgIHVzZXJJZDogICAgICAgWyB0aGlzLmNvbmZpZ0RhdGEudXNlckRhdGEuaWQsIG51bGwgXVxuICAgIH0pO1xuICB9XG5cbiAgLyogQ2F0ZWdvcnkgZm9ybSBzdWJtaXQgKi9cbiAgY2F0ZWdvcnlGb3JtU3VibWl0KCkge1xuICAgIHRoaXMubG9hZGVyID0gdHJ1ZTtcblxuICAgIC8qIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWQgKi9cbiAgICBpZiAodGhpcy5jYXRlZ29yeUZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZih0aGlzLmNhdGVnb3J5Rm9ybS52YWx1ZS5zdGF0dXMpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeUZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIxXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeUZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIwXCIpOztcbiAgICAgIH1cblxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5jYXRlZ29yeUZvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICB0aGlzLmh0dHBSZXF1ZXN0LmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMucmVzZXRDYXRlZ29yeUZvcm0oKTtcblxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyogcmVzZXQgQ2F0ZWdvcnkgZm9ybSAqL1xuICByZXNldENhdGVnb3J5Rm9ybSgpIHtcbiAgICB0aGlzLmNhdGVnb3J5Rm9ybS5yZXNldCgpO1xuICB9XG5cbiAgLyogU2V0IGRlZmF1bHQgY2F0ZWdvcnkgZm9ybSB2YWx1ZSAqL1xuICBzZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlKSB7XG4gICAgdGhpcy5jYXRlZ29yeUZvcm0uc2V0VmFsdWUoeyAgXG4gICAgICB0aXRsZTogICAgICAgIGRlZmF1bHRWYWx1ZS50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAgZGVmYXVsdFZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgcHJpb3JpdHk6ICAgICBkZWZhdWx0VmFsdWUucHJpb3JpdHksXG4gICAgICByb2xlOiAgICAgICAgIGRlZmF1bHRWYWx1ZS5yb2xlLFxuICAgICAgc3RhdHVzOiAgICAgICBkZWZhdWx0VmFsdWUuc3RhdHVzLFxuICAgICAgdXNlcklkOiAgICAgICBudWxsXG4gICAgfSk7XG4gIH1cblxufVxuIl19