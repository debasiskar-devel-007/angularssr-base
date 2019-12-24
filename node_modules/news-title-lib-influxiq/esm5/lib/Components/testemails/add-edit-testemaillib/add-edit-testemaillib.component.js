/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NewsTitleService } from '../../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
}
var AddEditTestemaillibComponent = /** @class */ (function () {
    // ===========================================
    function AddEditTestemaillibComponent(formBuilder, newsService, router, dialog) {
        this.formBuilder = formBuilder;
        this.newsService = newsService;
        this.router = router;
        this.dialog = dialog;
        this.buttonText = "SUBMIT";
        this.header_name = "Add Sender(Test)";
        this.successMessage = "Submitted Successfully!!!";
    }
    /**
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //generating the form
        this.generateForm();
        // --------------------------------checking the cases------------------------ 
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "One row updated!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "Edit sender's Information";
                break;
        }
        // --------------------------------------------------------------------------
    };
    // ===============generate form====================
    // ===============generate form====================
    /**
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.generateForm = 
    // ===============generate form====================
    /**
     * @return {?}
     */
    function () {
        this.senderForm = this.formBuilder.group({
            name: [],
            email: []
        });
    };
    Object.defineProperty(AddEditTestemaillibComponent.prototype, "config", {
        // ================================================
        set: 
        // ================================================
        /**
         * @param {?} getConfig
         * @return {?}
         */
        function (getConfig) {
            this.configData = getConfig;
        },
        enumerable: true,
        configurable: true
    });
    // =========================================MODAL functions==========================================
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.openDialog = 
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.dialogRef = this.dialog.open(Modal4, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    // =====================================================================================================
    // ================================================Default value======================================
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.setDefaultValue = 
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        this.senderForm.patchValue({
            name: defaultValue.name,
            email: defaultValue.email
        });
    };
    // ==================================================================================================
    // =======================On SUBMIT======================
    // ==================================================================================================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    AddEditTestemaillibComponent.prototype.onSubmit = 
    // ==================================================================================================
    // =======================On SUBMIT======================
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* stop here if form is invalid */
        if (this.senderForm.invalid) {
            return;
        }
        else {
            /* start process to submited data */
            /** @type {?} */
            var postData = {
                source: this.configData.source,
                data: Object.assign(this.senderForm.value, this.configData.condition),
            };
            this.newsService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.status == "success") {
                    console.log(response.status);
                    _this.openDialog(_this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.dialogRef.close();
                    }), 2000);
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
    AddEditTestemaillibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-testemaillib',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\" [formGroup]=\"senderForm\">\n        <!-- Senders name -->\n        <mat-form-field>\n          <mat-label>Sender's Name</mat-label>\n          <input matInput formControlName=\"name\">\n        </mat-form-field>\n\n        <!-- Sender's email  -->\n        <mat-form-field>\n          <mat-label>Email</mat-label>\n          <input matInput formControlName=\"email\">\n        </mat-form-field>\n\n\n        <!-- Button  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n          (click)=\"onSubmit()\">{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditTestemaillibComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: NewsTitleService },
        { type: Router },
        { type: MatDialog }
    ]; };
    AddEditTestemaillibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return AddEditTestemaillibComponent;
}());
export { AddEditTestemaillibComponent };
if (false) {
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.senderForm;
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.buttonText;
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.header_name;
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.configData;
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.successMessage;
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    AddEditTestemaillibComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddEditTestemaillibComponent.prototype.newsService;
    /**
     * @type {?}
     * @private
     */
    AddEditTestemaillibComponent.prototype.router;
    /** @type {?} */
    AddEditTestemaillibComponent.prototype.dialog;
}
// ============================================MODAL COMPONENT===========================================
var Modal4 = /** @class */ (function () {
    function Modal4(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    Modal4.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    Modal4.decorators = [
        { type: Component, args: [{
                    selector: 'app-modal',
                    template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    Modal4.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return Modal4;
}());
export { Modal4 };
if (false) {
    /** @type {?} */
    Modal4.prototype.dialogRef;
    /** @type {?} */
    Modal4.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtdGVzdGVtYWlsbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ld3MtdGl0bGUtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvdGVzdGVtYWlscy9hZGQtZWRpdC10ZXN0ZW1haWxsaWIvYWRkLWVkaXQtdGVzdGVtYWlsbGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBUyxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBMEIsV0FBVyxFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBQ3BGLGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFJZDtJQWVFLDhDQUE4QztJQUM5QyxzQ0FBb0IsV0FBd0IsRUFBVSxXQUE2QixFQUN2RSxNQUFjLEVBQVMsTUFBaUI7UUFEaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDdkUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQcEQsZUFBVSxHQUFRLFFBQVEsQ0FBQztRQUMzQixnQkFBVyxHQUFRLGtCQUFrQixDQUFBO1FBRXJDLG1CQUFjLEdBQVEsMkJBQTJCLENBQUM7SUFJTSxDQUFDOzs7O0lBRXpELCtDQUFROzs7SUFBUjtRQUNFLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHcEIsOEVBQThFO1FBQzlFLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFD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Q0gsQ0FBQzs7OztZQUFFLFVBQUMsS0FBSztnQkFDUCxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUNuRCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBckhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyx5akNBQXFEOztpQkFFdEQ7Ozs7Z0JBYmdDLFdBQVc7Z0JBQ25DLGdCQUFnQjtnQkFDaEIsTUFBTTtnQkFDTixTQUFTOzs7eUJBNERmLEtBQUs7O0lBaUVSLG1DQUFDO0NBQUEsQUF2SEQsSUF1SEM7U0FsSFksNEJBQTRCOzs7SUFJdkMsa0RBQXNCOztJQUN0QixrREFBMkI7O0lBQzNCLG1EQUFxQzs7SUFDckMsa0RBQWdCOztJQUNoQixzREFBa0Q7O0lBQ2xELGlEQUFlOzs7OztJQUVILG1EQUFnQzs7Ozs7SUFBRSxtREFBcUM7Ozs7O0lBQy9FLDhDQUFzQjs7SUFBRSw4Q0FBd0I7OztBQTZHdEQ7SUFNRSxnQkFDUyxTQUErQixFQUNOLElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQXNCO1FBQ04sU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7SUFFdkQsMEJBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDZHQUEwQjtpQkFDM0I7Ozs7Z0JBdkltQixZQUFZO2dEQTRJM0IsTUFBTSxTQUFDLGVBQWU7O0lBTTNCLGFBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxNQUFNOzs7SUFHZiwyQkFBc0M7O0lBQ3RDLHNCQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LElucHV0ICxJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZXdzVGl0bGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbmV3cy10aXRsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogc3RyaW5nO1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hZGQtZWRpdC10ZXN0ZW1haWxsaWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLWVkaXQtdGVzdGVtYWlsbGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWVkaXQtdGVzdGVtYWlsbGliLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRFZGl0VGVzdGVtYWlsbGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIC8vID09PT09PT09PT09PT09PURlY2xhcmF0aW9ucz09PT09PT09PT09PT09PT1cbiAgc2VuZGVyRm9ybTogRm9ybUdyb3VwO1xuICBidXR0b25UZXh0OiBhbnkgPSBcIlNVQk1JVFwiO1xuICBoZWFkZXJfbmFtZTogYW55ID0gXCJBZGQgU2VuZGVyKFRlc3QpXCJcbiAgY29uZmlnRGF0YTogYW55O1xuICBzdWNjZXNzTWVzc2FnZTogYW55ID0gXCJTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5ISEhXCI7XG4gIGRpYWxvZ1JlZjogYW55O1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIG5ld3NTZXJ2aWNlOiBOZXdzVGl0bGVTZXJ2aWNlXG4gICAgLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vZ2VuZXJhdGluZyB0aGUgZm9ybVxuICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY2hlY2tpbmcgdGhlIGNhc2VzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxuICAgIHN3aXRjaCAodGhpcy5jb25maWdEYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVQREFURVwiO1xuICAgICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gXCJPbmUgcm93IHVwZGF0ZWQhISFcIjtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5jb25maWdEYXRhLmRlZmF1bHREYXRhKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiRWRpdCBzZW5kZXIncyBJbmZvcm1hdGlvblwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgfVxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT1nZW5lcmF0ZSBmb3JtPT09PT09PT09PT09PT09PT09PT1cbiAgZ2VuZXJhdGVGb3JtKCkge1xuICAgIHRoaXMuc2VuZGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgbmFtZTogW10sXG4gICAgICBlbWFpbDogW11cbiAgICB9KTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGdldENvbmZpZztcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgZnVuY3Rpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsNCwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgfSk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1EZWZhdWx0IHZhbHVlPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc2V0RGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSkge1xuICAgIHRoaXMuc2VuZGVyRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIG5hbWU6IGRlZmF1bHRWYWx1ZS5uYW1lLFxuICAgICAgZW1haWw6IGRlZmF1bHRWYWx1ZS5lbWFpbFxuICAgIH0pO1xuXG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PU9uIFNVQk1JVD09PT09PT09PT09PT09PT09PT09PT1cbiAgb25TdWJtaXQoKSB7XG5cbiAgICBcbiAgICAvKiBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkICovXG4gICAgaWYgKHRoaXMuc2VuZGVyRm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcblxuICAgICAgLyogc3RhcnQgcHJvY2VzcyB0byBzdWJtaXRlZCBkYXRhICovXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcbiAgICAgICAgc291cmNlOiB0aGlzLmNvbmZpZ0RhdGEuc291cmNlLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMuc2VuZGVyRm9ybS52YWx1ZSwgdGhpcy5jb25maWdEYXRhLmNvbmRpdGlvbiksXG4gICAgICB9O1xuICAgICAgdGhpcy5uZXdzU2VydmljZS5hZGREYXRhKHRoaXMuY29uZmlnRGF0YS5lbmRwb2ludCwgcG9zdERhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5zdWNjZXNzTWVzc2FnZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ0RhdGEuY2FsbEJhY2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYW5nYWluLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxufVxuXG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgQ09NUE9ORU5UPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbDQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsNCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsND4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiJdfQ==