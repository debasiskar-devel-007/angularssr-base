/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
var AddEditNewsletterlibComponent = /** @class */ (function () {
    /**ckeditor end here*/
    function AddEditNewsletterlibComponent(atp) {
        this.atp = atp;
        // =================declaration==================
        this.header_name = "Newsletter";
        this.buttonText = "SAVE";
        // ==============================================
        /**
         * ckeditor start here
         */
        this.Editor = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Content...',
        };
        this.model = {
            editorData: ''
        };
    }
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AddEditNewsletterlibComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe((/**
         * @param {?} time
         * @return {?}
         */
        function (time) {
            console.log(time);
        }));
    };
    AddEditNewsletterlibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-add-edit-newsletterlib',
                    template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n      <form autocomplete=\"off\">\n\n\n\n        <!-- Newsletter title  -->\n        <mat-form-field>\n          <mat-label>Newsletter Title:</mat-label>\n          <input matInput>\n        </mat-form-field>\n\n        <!-- Newsletter Subject  -->\n        <mat-form-field>\n          <mat-label>Newsletter Subject:</mat-label>\n          <input matInput>\n        </mat-form-field>\n\n\n        <!-- share newsletter with -->\n        <mat-form-field>\n          <mat-label>SHare newsletter with</mat-label>\n          <mat-select matNativeControl required>\n            <mat-option value=\"volvo\">Volvo</mat-option>\n            <mat-option value=\"saab\">Saab</mat-option>\n            <mat-option value=\"mercedes\">Mercedes</mat-option>\n            <mat-option value=\"audi\">Audi</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- sender's address  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required>\n            <mat-option value=\"volvo\">Volvo</mat-option>\n            <mat-option value=\"saab\">Saab</mat-option>\n            <mat-option value=\"mercedes\">Mercedes</mat-option>\n            <mat-option value=\"audi\">Audi</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Set Publish Date  -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n\n        <!-- Time Picker  -->\n        <mat-form-field>\n        <input matInput  atp-time-picker value=\"00:00\" />\n        </mat-form-field>\n         <!-- Content  -->\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" ></ckeditor>\n\n\n\n       <h1> SET FREQUENCY </h1><hr>\n\n\n         <!-- Automatically send newsletters to -->\n         <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required>\n            <mat-option value=\"volvo\">Volvo</mat-option>\n            <mat-option value=\"saab\">Saab</mat-option>\n            <mat-option value=\"mercedes\">Mercedes</mat-option>\n            <mat-option value=\"audi\">Audi</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- Newsletter frequency  -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required>\n            <mat-option value=\"volvo\">Volvo</mat-option>\n            <mat-option value=\"saab\">Saab</mat-option>\n            <mat-option value=\"mercedes\">Mercedes</mat-option>\n            <mat-option value=\"audi\">Audi</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <!-- News letter Day of the week  -->\n        <mat-card-content class=\"date_wrapper\">\n        <mat-checkbox>Sunday</mat-checkbox>\n        <mat-checkbox>Sunday</mat-checkbox>\n        <mat-checkbox>Sunday</mat-checkbox>\n        <mat-checkbox>Sunday</mat-checkbox>\n        <mat-checkbox>Sunday</mat-checkbox>   \n        <mat-checkbox>Sunday</mat-checkbox>\n        <mat-checkbox>Sunday</mat-checkbox>\n      </mat-card-content>\n        <!-- News Letter time of the day -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required>\n            <mat-option value=\"volvo\">Volvo</mat-option>\n            <mat-option value=\"saab\">Saab</mat-option>\n            <mat-option value=\"mercedes\">Mercedes</mat-option>\n            <mat-option value=\"audi\">Audi</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- News Letter Time Zone -->\n        <mat-form-field>\n          <mat-label>Sender's address</mat-label>\n          <mat-select matNativeControl required>\n            <mat-option value=\"volvo\">Volvo</mat-option>\n            <mat-option value=\"saab\">Saab</mat-option>\n            <mat-option value=\"mercedes\">Mercedes</mat-option>\n            <mat-option value=\"audi\">Audi</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- News letter start Date -->\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n        </mat-form-field>\n\n\n        <!-- NewsLetter reply to email address  -->\n        <mat-form-field>\n          <input matInput>\n        </mat-form-field>\n\n\n\n\n\n\n        <!-- Buttons  -->\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n        color=\"primary\" >PREVIEW</button>\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\n          color=\"primary\" >{{buttonText}}</button>\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\n\n\n\n\n      </form>\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\n    </mat-card-content>\n  </span>\n</mat-card>",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}"]
                }] }
    ];
    /** @nocollapse */
    AddEditNewsletterlibComponent.ctorParameters = function () { return [
        { type: AmazingTimePickerService }
    ]; };
    return AddEditNewsletterlibComponent;
}());
export { AddEditNewsletterlibComponent };
if (false) {
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.header_name;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.buttonText;
    /**
     * ckeditor start here
     * @type {?}
     */
    AddEditNewsletterlibComponent.prototype.Editor;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.editorConfig;
    /** @type {?} */
    AddEditNewsletterlibComponent.prototype.model;
    /**
     * @type {?}
     * @private
     */
    AddEditNewsletterlibComponent.prototype.atp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvbmV3c2xldHRlci9hZGQtZWRpdC1uZXdzbGV0dGVybGliL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sS0FBSyxhQUFhLE1BQU0sbUNBQW1DLENBQUM7QUFFbkU7SUFxQkksc0JBQXNCO0lBQ3hCLHVDQUFxQixHQUE4QjtRQUE5QixRQUFHLEdBQUgsR0FBRyxDQUEyQjs7UUFibkQsZ0JBQVcsR0FBSyxZQUFZLENBQUE7UUFDNUIsZUFBVSxHQUFLLE1BQU0sQ0FBQzs7Ozs7UUFJYixXQUFNLEdBQUcsYUFBYSxDQUFDLENBQUUsY0FBYzs7UUFDOUMsaUJBQVksR0FBRztZQUNiLFdBQVcsRUFBRSxZQUFZO1NBQzFCLENBQUM7UUFDSyxVQUFLLEdBQUc7WUFDYixVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUM7SUFFb0QsQ0FBQzs7OztJQUV6RCxnREFBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsNENBQUk7OztJQUFKOztZQUVRLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ3pDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsczlLQUFzRDs7aUJBRXZEOzs7O2dCQVBRLHdCQUF3Qjs7SUFxQ2pDLG9DQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E3QlksNkJBQTZCOzs7SUFJeEMsb0RBQTRCOztJQUM1QixtREFBc0I7Ozs7O0lBSXBCLCtDQUE4Qjs7SUFDOUIscURBRUU7O0lBQ0YsOENBRUU7Ozs7O0lBRVMsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSB9IGZyb20gJ2FtYXppbmctdGltZS1waWNrZXInO1xuaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWRkLWVkaXQtbmV3c2xldHRlcmxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PVxuICBoZWFkZXJfbmFtZTphbnk9XCJOZXdzbGV0dGVyXCJcbiAgYnV0dG9uVGV4dDphbnk9XCJTQVZFXCI7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKmNrZWRpdG9yIHN0YXJ0IGhlcmUqL1xuICAgIHB1YmxpYyBFZGl0b3IgPSBDbGFzc2ljRWRpdG9yOyAgLy9mb3IgY2tlZGl0b3JcbiAgICBlZGl0b3JDb25maWcgPSB7XG4gICAgICBwbGFjZWhvbGRlcjogJ0NvbnRlbnQuLi4nLFxuICAgIH07XG4gICAgcHVibGljIG1vZGVsID0ge1xuICAgICAgZWRpdG9yRGF0YTogJydcbiAgICB9O1xuICAgIC8qKmNrZWRpdG9yIGVuZCBoZXJlKi9cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgYXRwIDogQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvcGVuKClcbiAge1xuICAgIGNvbnN0IGFtYXppbmdUaW1lUGlja2VyID0gdGhpcy5hdHAub3BlbigpO1xuICAgIGFtYXppbmdUaW1lUGlja2VyLmFmdGVyQ2xvc2UoKS5zdWJzY3JpYmUodGltZT0+e1xuICAgICAgY29uc29sZS5sb2codGltZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==