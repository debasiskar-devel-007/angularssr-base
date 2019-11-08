/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export class AddEditNewsletterlibComponent {
    /**
     * ckeditor end here
     * @param {?} atp
     */
    constructor(atp) {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    open() {
        /** @type {?} */
        const amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe((/**
         * @param {?} time
         * @return {?}
         */
        time => {
            console.log(time);
        }));
    }
}
AddEditNewsletterlibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-add-edit-newsletterlib',
                template: "<mat-card>\r\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\r\n  </mat-toolbar>\r\n  <span class=\"formspan\">\r\n    <mat-card-content class=\"example-container\">\r\n      <form autocomplete=\"off\">\r\n\r\n\r\n\r\n        <!-- Newsletter title  -->\r\n        <mat-form-field>\r\n          <mat-label>Newsletter Title:</mat-label>\r\n          <input matInput>\r\n        </mat-form-field>\r\n\r\n        <!-- Newsletter Subject  -->\r\n        <mat-form-field>\r\n          <mat-label>Newsletter Subject:</mat-label>\r\n          <input matInput>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- share newsletter with -->\r\n        <mat-form-field>\r\n          <mat-label>Share newsletter with</mat-label>\r\n          <mat-select matNativeControl required>\r\n            <mat-option value=\"volvo\">Volvo</mat-option>\r\n            <mat-option value=\"saab\">Saab</mat-option>\r\n            <mat-option value=\"mercedes\">Mercedes</mat-option>\r\n            <mat-option value=\"audi\">Audi</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <!-- sender's address  -->\r\n        <mat-form-field>\r\n          <mat-label>Sender's address</mat-label>\r\n          <mat-select matNativeControl required>\r\n            <mat-option value=\"volvo\">Volvo</mat-option>\r\n            <mat-option value=\"saab\">Saab</mat-option>\r\n            <mat-option value=\"mercedes\">Mercedes</mat-option>\r\n            <mat-option value=\"audi\">Audi</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Set Publish Date  -->\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Time Picker  -->\r\n        <mat-form-field>\r\n        <input matInput  atp-time-picker value=\"00:00\" />\r\n        </mat-form-field>\r\n         <!-- Content  -->\r\n        <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" ></ckeditor>\r\n\r\n\r\n\r\n       <h1> SET FREQUENCY </h1><hr>\r\n\r\n\r\n         <!-- Automatically send newsletters to -->\r\n         <mat-form-field>\r\n          <mat-label>Sender's address</mat-label>\r\n          <mat-select matNativeControl required>\r\n            <mat-option value=\"volvo\">Volvo</mat-option>\r\n            <mat-option value=\"saab\">Saab</mat-option>\r\n            <mat-option value=\"mercedes\">Mercedes</mat-option>\r\n            <mat-option value=\"audi\">Audi</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Newsletter frequency  -->\r\n        <mat-form-field>\r\n          <mat-label>Sender's address</mat-label>\r\n          <mat-select matNativeControl required>\r\n            <mat-option value=\"volvo\">Volvo</mat-option>\r\n            <mat-option value=\"saab\">Saab</mat-option>\r\n            <mat-option value=\"mercedes\">Mercedes</mat-option>\r\n            <mat-option value=\"audi\">Audi</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- News letter Day of the week  -->\r\n        <h5>NewsLetter day of the week</h5>\r\n        <mat-card-content class=\"date_wrapper\">\r\n        <mat-checkbox>Sunday</mat-checkbox>\r\n        <mat-checkbox>Monday</mat-checkbox>\r\n        <mat-checkbox>Tuesday</mat-checkbox>\r\n        <mat-checkbox>Wednesday</mat-checkbox>\r\n        <mat-checkbox>Thursday</mat-checkbox>   \r\n        <mat-checkbox>Friday</mat-checkbox>\r\n        <mat-checkbox>Saturday</mat-checkbox>\r\n      </mat-card-content>\r\n        <!-- News Letter time of the day -->\r\n        <mat-form-field>\r\n          <mat-label>Sender's address</mat-label>\r\n          <mat-select matNativeControl required>\r\n            <mat-option value=\"volvo\">Volvo</mat-option>\r\n            <mat-option value=\"saab\">Saab</mat-option>\r\n            <mat-option value=\"mercedes\">Mercedes</mat-option>\r\n            <mat-option value=\"audi\">Audi</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <!-- News Letter Time Zone -->\r\n        <mat-form-field>\r\n          <mat-label>Sender's address</mat-label>\r\n          <mat-select matNativeControl required>\r\n            <mat-option value=\"volvo\">Volvo</mat-option>\r\n            <mat-option value=\"saab\">Saab</mat-option>\r\n            <mat-option value=\"mercedes\">Mercedes</mat-option>\r\n            <mat-option value=\"audi\">Audi</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <!-- News letter start Date -->\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker2></mat-datepicker>\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- NewsLetter reply to email address  -->\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Newsletter reply to email address\">\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!-- Buttons  -->\r\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\r\n        color=\"primary\" >PREVIEW</button>\r\n        <button type=\"submit\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\r\n          color=\"primary\" >{{buttonText}}</button>\r\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\r\n\r\n\r\n\r\n\r\n      </form>\r\n      <!-- ---------------------------------------FORM ENDS HERE----------------------------- -->\r\n    </mat-card-content>\r\n  </span>\r\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}.date_wrapper .mat-checkbox{margin-right:15px}"]
            }] }
];
/** @nocollapse */
AddEditNewsletterlibComponent.ctorParameters = () => [
    { type: AmazingTimePickerService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtbmV3c2xldHRlcmxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvbmV3c2xldHRlci9hZGQtZWRpdC1uZXdzbGV0dGVybGliL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sS0FBSyxhQUFhLE1BQU0sbUNBQW1DLENBQUM7QUFPbkUsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFpQnhDLFlBQXFCLEdBQThCO1FBQTlCLFFBQUcsR0FBSCxHQUFHLENBQTJCOztRQWJuRCxnQkFBVyxHQUFLLFlBQVksQ0FBQTtRQUM1QixlQUFVLEdBQUssTUFBTSxDQUFDOzs7OztRQUliLFdBQU0sR0FBRyxhQUFhLENBQUMsQ0FBRSxjQUFjOztRQUM5QyxpQkFBWSxHQUFHO1lBQ2IsV0FBVyxFQUFFLFlBQVk7U0FDMUIsQ0FBQztRQUNLLFVBQUssR0FBRztZQUNiLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQztJQUVvRCxDQUFDOzs7O0lBRXpELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsSUFBSTs7Y0FFSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtRQUN6QyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFBLEVBQUU7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsbTNMQUFzRDs7YUFFdkQ7Ozs7WUFQUSx3QkFBd0I7Ozs7SUFZL0Isb0RBQTRCOztJQUM1QixtREFBc0I7Ozs7O0lBSXBCLCtDQUE4Qjs7SUFDOUIscURBRUU7O0lBQ0YsOENBRUU7Ozs7O0lBRVMsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW1hemluZ1RpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnYW1hemluZy10aW1lLXBpY2tlcic7XHJcbmltcG9ydCAqIGFzIENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWFkZC1lZGl0LW5ld3NsZXR0ZXJsaWInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtZWRpdC1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PVxyXG4gIGhlYWRlcl9uYW1lOmFueT1cIk5ld3NsZXR0ZXJcIlxyXG4gIGJ1dHRvblRleHQ6YW55PVwiU0FWRVwiO1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cclxuICAgIHB1YmxpYyBFZGl0b3IgPSBDbGFzc2ljRWRpdG9yOyAgLy9mb3IgY2tlZGl0b3JcclxuICAgIGVkaXRvckNvbmZpZyA9IHtcclxuICAgICAgcGxhY2Vob2xkZXI6ICdDb250ZW50Li4uJyxcclxuICAgIH07XHJcbiAgICBwdWJsaWMgbW9kZWwgPSB7XHJcbiAgICAgIGVkaXRvckRhdGE6ICcnXHJcbiAgICB9O1xyXG4gICAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGF0cCA6IEFtYXppbmdUaW1lUGlja2VyU2VydmljZSApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG9wZW4oKVxyXG4gIHtcclxuICAgIGNvbnN0IGFtYXppbmdUaW1lUGlja2VyID0gdGhpcy5hdHAub3BlbigpO1xyXG4gICAgYW1hemluZ1RpbWVQaWNrZXIuYWZ0ZXJDbG9zZSgpLnN1YnNjcmliZSh0aW1lPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKHRpbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==