/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LessionManagementService } from '../../lession-management.service';
import { ActivatedRoute, Router } from '@angular/router';
var AddEditLessionComponent = /** @class */ (function () {
    function AddEditLessionComponent(formBuilder, httpRequest, ActivatedRoute, router) {
        this.formBuilder = formBuilder;
        this.httpRequest = httpRequest;
        this.ActivatedRoute = ActivatedRoute;
        this.router = router;
        this.usersData = null;
        this.buttonText = null;
        this.loader = false;
    }
    Object.defineProperty(AddEditLessionComponent.prototype, "config", {
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
    AddEditLessionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /* Create form controll */
    /* Create form controll */
    /**
     * @return {?}
     */
    AddEditLessionComponent.prototype.generateForm = /* Create form controll */
    /**
     * @return {?}
     */
    function () {
        /* Category create form validation */
        this.lessionForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.maxLength(150)]],
            description: ['', [Validators.required, Validators.maxLength(5000)]],
            userId: ['',]
        });
    };
    /* Category form submit */
    /* Category form submit */
    /**
     * @return {?}
     */
    AddEditLessionComponent.prototype.lessionFormSubmit = /* Category form submit */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loader = true;
        /* stop here if form is invalid */
        if (this.lessionForm.invalid) {
            return;
        }
        /* start process to submited data */
        /** @type {?} */
        var postData = {
            source: this.configData.source,
            data: Object.assign(this.lessionForm.value, this.configData.condition)
        };
        this.httpRequest.addData(this.configData.endpoint, postData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (response.status == "success") {
                _this.resetlessionForm();
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
    }; // console.log("Ekhane asche");
    /* reset Category form */
    // console.log("Ekhane asche");
    /* reset Category form */
    /**
     * @return {?}
     */
    AddEditLessionComponent.prototype.resetlessionForm = 
    // console.log("Ekhane asche");
    /* reset Category form */
    /**
     * @return {?}
     */
    function () {
        this.lessionForm.reset();
    };
    /* Set default category form value */
    /* Set default category form value */
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditLessionComponent.prototype.setDefaultValue = /* Set default category form value */
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.lessionForm.setValue({
            title: defaultValue.title,
            description: defaultValue.description,
            userId: null
        });
    };
    AddEditLessionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-lession',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<mat-card *ngIf=\"loader==false\">\n  <form class=\"example-form\" [formGroup]=\"lessionForm\" autocomplete=\"off\">\n    <div class=\"example-container\">\n      <mat-form-field>\n        <input matInput formControlName=\"title\" placeholder=\"Title\">\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"lessionForm.controls['title']?.touched && lessionForm.controls['title'].errors && lessionForm.controls['title'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"lessionForm.controls['title']?.touched && lessionForm.controls['title'].errors && lessionForm.controls['title'].errors.maxlength\">Title is not more then 150 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n\n\n\n      <mat-form-field hintLabel=\"Max 1000 characters\">\n        <textarea matInput formControlName=\"description\" #description maxlength=\"1000\" placeholder=\"Description\"></textarea>\n        <mat-hint align=\"end\">{{ description.value?.length || 0 }}/1000</mat-hint>\n\n        <!-- error message start -->\n        <mat-error *ngIf=\"lessionForm.controls['description']?.touched && lessionForm.controls['description'].errors && lessionForm.controls['description'].errors.required\">Title is required.</mat-error>\n        <mat-error *ngIf=\"lessionForm.controls['description']?.touched && lessionForm.controls['description'].errors && lessionForm.controls['description'].errors.maxlength\">Title is not more then 1000 charector.</mat-error>\n        <!-- error message end -->\n      </mat-form-field>\n    \n      </div>\n  </form>\n\n  <br />\n  \n  <button (click)=\"lessionFormSubmit();\" mat-button [disabled]=\"!lessionForm.valid\">{{ buttonText }}</button>\n  <button mat-button (click)=\"resetlessionForm();\">Reset</button>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}mat-card{background-color:#e3e2e1}.example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.spinner{text-align:center;margin:auto}.input-field{background-color:#fff;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    AddEditLessionComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: LessionManagementService },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    AddEditLessionComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditLessionComponent;
}());
export { AddEditLessionComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbGVzc2lvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZXNzaW9uLW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2FkZC1lZGl0LWxlc3Npb24vYWRkLWVkaXQtbGVzc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBRWpGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQ7SUFtQkUsaUNBQW9CLFdBQXdCLEVBQVUsV0FBcUMsRUFDakYsY0FBOEIsRUFBVSxNQUFjO1FBRDVDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO1FBQ2pGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYekQsY0FBUyxHQUFRLElBQUksQ0FBQztRQUN0QixlQUFVLEdBQVEsSUFBSSxDQUFDO1FBRXZCLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFVL0IsQ0FBQztJQVJELHNCQUNJLDJDQUFNOzs7OztRQURWLFVBQ1csU0FBYztZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTs7OztJQU9ELDBDQUFROzs7SUFBUjtRQUdFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsY0FBYztRQUNkLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDOUIsS0FB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Qjs7SUFDOUIsNkNBQXVCOztJQUN2Qix5Q0FBK0I7Ozs7O0lBT25CLDhDQUFnQzs7Ozs7SUFBRSw4Q0FBNkM7Ozs7O0lBQ3pGLGlEQUFzQzs7Ozs7SUFBRSx5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFcnJvclN0YXRlTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTGVzc2lvbk1hbmFnZW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGVzc2lvbi1tYW5hZ2VtZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC1sZXNzaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1lZGl0LWxlc3Npb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1sZXNzaW9uLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFkZEVkaXRMZXNzaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgbGVzc2lvbkZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHVzZXJzRGF0YTogYW55ID0gbnVsbDtcbiAgcHVibGljIGJ1dHRvblRleHQ6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBjb25maWdEYXRhOiBhbnk7XG4gIHB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgaHR0cFJlcXVlc3Q6IExlc3Npb25NYW5hZ2VtZW50U2VydmljZSxcbiAgICBwcml2YXRlIEFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgXG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcblxuICAgIC8qIEdlbmVyYXRlIGZvcm0gKi9cbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuXG4gICAgLyogQ2hlY2tpbmcgKi9cbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiQ3JlYXRlXCI7IC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVXBkYXRlXCI7IC8qIEJ1dHRvbiB0ZXh0ICovXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qIENyZWF0ZSBmb3JtIGNvbnRyb2xsICovXG4gIGdlbmVyYXRlRm9ybSgpIHtcbiAgICAvKiBDYXRlZ29yeSBjcmVhdGUgZm9ybSB2YWxpZGF0aW9uICovXG4gICAgdGhpcy5sZXNzaW9uRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdGl0bGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDE1MCldXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MDAwKV1dLFxuICAgICAgdXNlcklkOiBbJycsXVxuICAgIH0pO1xuICB9XG5cbiAgLyogQ2F0ZWdvcnkgZm9ybSBzdWJtaXQgKi9cbiAgbGVzc2lvbkZvcm1TdWJtaXQoKSB7XG4gICAgdGhpcy5sb2FkZXIgPSB0cnVlO1xuXG4gICAgLyogc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZCAqL1xuICAgIGlmICh0aGlzLmxlc3Npb25Gb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IFxuXG4gICAgICAvKiBzdGFydCBwcm9jZXNzIHRvIHN1Ym1pdGVkIGRhdGEgKi9cbiAgICAgIGxldCBwb3N0RGF0YTogYW55ID0ge1xuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odGhpcy5sZXNzaW9uRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbilcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHBSZXF1ZXN0LmFkZERhdGEodGhpcy5jb25maWdEYXRhLmVuZHBvaW50LCBwb3N0RGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0bGVzc2lvbkZvcm0oKTtcblxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfSAvLyBjb25zb2xlLmxvZyhcIkVraGFuZSBhc2NoZVwiKTtcbiAgXG5cbiAgLyogcmVzZXQgQ2F0ZWdvcnkgZm9ybSAqL1xuICByZXNldGxlc3Npb25Gb3JtKCkge1xuICAgIHRoaXMubGVzc2lvbkZvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIC8qIFNldCBkZWZhdWx0IGNhdGVnb3J5IGZvcm0gdmFsdWUgKi9cbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xuICAgIHRoaXMubGVzc2lvbkZvcm0uc2V0VmFsdWUoe1xuICAgICAgdGl0bGU6IGRlZmF1bHRWYWx1ZS50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZWZhdWx0VmFsdWUuZGVzY3JpcHRpb24sXG4gICAgICB1c2VySWQ6IG51bGxcbiAgICB9KTtcbiAgfVxuXG59XG5cbiJdfQ==