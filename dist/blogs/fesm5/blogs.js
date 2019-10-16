import { __values } from 'tslib';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Injectable, Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA, defineInjectable, EventEmitter, Output } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BlogsService = /** @class */ (function () {
    function BlogsService() {
    }
    BlogsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BlogsService.ctorParameters = function () { return []; };
    /** @nocollapse */ BlogsService.ngInjectableDef = defineInjectable({ factory: function BlogsService_Factory() { return new BlogsService(); }, token: BlogsService, providedIn: "root" });
    return BlogsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            for (var _c = __values(this.fields), _d = _c.next(); !_d.done; _d = _c.next()) {
                var f = _d.value;
                if (f.type != 'checkbox') {
                    fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
                }
                else {
                    /** @type {?} */
                    var opts = {};
                    try {
                        for (var _e = __values(f.options), _f = _e.next(); !_f.done; _f = _e.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// text,email,tel,textarea,password, 
var TextBoxComponent = /** @class */ (function () {
    function TextBoxComponent() {
        this.field = {};
    }
    Object.defineProperty(TextBoxComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    TextBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'textbox',
                    template: "\n      <div [formGroup]=\"form\">\n        <input *ngIf=\"!field.multiline\" [attr.type]=\"field.type\" class=\"form-control\"  [id]=\"field.name\" [name]=\"field.name\" [formControlName]=\"field.name\">\n        <textarea *ngIf=\"field.multiline\" [class.is-invalid]=\"isDirty && !isValid\" [formControlName]=\"field.name\" [id]=\"field.name\"\n        rows=\"9\" class=\"form-control\" [placeholder]=\"field.placeholder\"></textarea>\n      </div> \n\n    "
                }] }
    ];
    /** @nocollapse */
    TextBoxComponent.ctorParameters = function () { return []; };
    TextBoxComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return TextBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldBuilderComponent = /** @class */ (function () {
    function FieldBuilderComponent() {
    }
    Object.defineProperty(FieldBuilderComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldBuilderComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FieldBuilderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FieldBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'field-builder',
                    template: "\n  <div class=\"form-group row\" [formGroup]=\"form\">\n    <label class=\"col-md-3 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n      <strong class=\"text-danger\" *ngIf=\"field.required\">*</strong>\n    </label>\n    <div class=\"col-md-9\" [ngSwitch]=\"field.type\">\n      <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n      <dropdown *ngSwitchCase=\"'dropdown'\" [field]=\"field\" [form]=\"form\"></dropdown>\n      <checkbox *ngSwitchCase=\"'checkbox'\" [field]=\"field\" [form]=\"form\"></checkbox>\n      <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n      <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\n      <div class=\"alert alert-danger my-1 p-2 fadeInDown animated\" *ngIf=\"!isValid && isDirty\">{{field.label}} is required</div>\n    </div>\n  </div>\n  "
                }] }
    ];
    /** @nocollapse */
    FieldBuilderComponent.ctorParameters = function () { return []; };
    FieldBuilderComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return FieldBuilderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.field = {};
    }
    RadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'radio',
                    template: "\n      <div [formGroup]=\"form\">\n        <div class=\"form-check\" *ngFor=\"let opt of field.options\">\n          <input class=\"form-check-input\" type=\"radio\" [value]=\"opt.key\" >\n          <label class=\"form-check-label\">\n            {{opt.label}}\n          </label>\n        </div>\n      </div> \n    "
                }] }
    ];
    RadioComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return RadioComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// text,email,tel,textarea,password, 
var FileComponent = /** @class */ (function () {
    function FileComponent() {
        this.field = {};
    }
    Object.defineProperty(FileComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileComponent.prototype.ngOnChange = /**
     * @return {?}
     */
    function () {
        console.log(this.field.value);
        // this.field.value.
    };
    /**
     * @param {?} val
     * @return {?}
     */
    FileComponent.prototype.toggleHover = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
    };
    FileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'file',
                    template: "\n      <div [formGroup]=\"form\">\n        <div *ngIf=\"!field.value\" class=\"drop-container dropzone\" dropZone (hovered)=\"toggleHover($event)\"\n          (dropped)=\"field.onUpload($event)\">\n          <p class=\"m-0\">\n            Drag a file here or\n            <label class=\"upload-button\">\n              <input type=\"file\" multiple=\"\" (change)=\"field.onUpload($event.target.files)\"> browse\n            </label>\n            to upload.\n          </p>\n        </div>\n        <div *ngIf=\"field.value\">\n          <!-- <button type=\"button\" class=\"btn btn-primary\">Change</button> -->\n          <div class=\"card\">\n            <img class=\"card-img-top\" [src]=\"field.value\">\n          </div>\n        </div>\n      </div> \n    ",
                    styles: ["\n      .drop-container {\n        background: #fff;\n        border-radius: 6px;\n        height: 150px;\n        width: 100%;\n        box-shadow: 1px 2px 20px hsla(0,0%,4%,.1);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border: 2px dashed #c0c4c7;\n      }\n      p {\n        font-size: 16px;\n        font-weight: 400;\n        color: #c0c4c7; \n      }\n      .upload-button {\n        display: inline-block;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        color: #5754a3;\n      }\n      .upload-button input {\n        display: none;\n      }\n      .dropzone { \n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column; \n        border-radius: 5px;\n        background: white;\n        margin: 10px 0;\n      }\n      .dropzone.hovering {\n          border: 2px solid #f16624;\n          color: #dadada !important;\n      }\n      progress::-webkit-progress-value {\n        transition: width 0.1s ease;\n      }\n      "]
                }] }
    ];
    /** @nocollapse */
    FileComponent.ctorParameters = function () { return []; };
    FileComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return FileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
        this.field = {};
    }
    DropDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dropdown',
                    template: "\n      <div [formGroup]=\"form\">\n        <select class=\"form-control\" [id]=\"field.name\" [formControlName]=\"field.name\">\n          <option *ngFor=\"let opt of field.options\" [value]=\"opt.key\">{{opt.label}}</option>\n        </select>\n      </div> \n    "
                }] }
    ];
    /** @nocollapse */
    DropDownComponent.ctorParameters = function () { return []; };
    DropDownComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return DropDownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckBoxComponent = /** @class */ (function () {
    function CheckBoxComponent() {
        this.field = {};
    }
    Object.defineProperty(CheckBoxComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBoxComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    CheckBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'checkbox',
                    template: "\n      <div [formGroup]=\"form\">\n        <div [formGroupName]=\"field.name\" >\n          <div *ngFor=\"let opt of field.options\" class=\"form-check form-check\">\n          <label class=\"form-check-label\">\n             <input [formControlName]=\"opt.key\" class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" />\n             {{opt.label}}</label>\n          </div>\n        </div>\n\n      </div> \n    "
                }] }
    ];
    CheckBoxComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return CheckBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        A11yModule,
                        CdkStepperModule,
                        CdkTableModule,
                        CdkTreeModule,
                        DragDropModule,
                        MatAutocompleteModule,
                        MatBadgeModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatChipsModule,
                        MatStepperModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        MatDividerModule,
                        MatExpansionModule,
                        MatGridListModule,
                        MatIconModule,
                        MatInputModule,
                        MatListModule,
                        MatMenuModule,
                        MatNativeDateModule,
                        MatPaginatorModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatSidenavModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        MatSnackBarModule,
                        MatSortModule,
                        MatTableModule,
                        MatTabsModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        MatTreeModule,
                        PortalModule,
                        ScrollingModule,
                    ]
                },] }
    ];
    return DemoMaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BlogsModule = /** @class */ (function () {
    function BlogsModule() {
    }
    BlogsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BlogsComponent,
                        TextBoxComponent,
                        FieldBuilderComponent,
                        RadioComponent,
                        FileComponent,
                        DropDownComponent,
                        CheckBoxComponent],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        DemoMaterialModule
                    ],
                    exports: [BlogsComponent],
                    providers: [],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                },] }
    ];
    return BlogsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BlogsService, BlogsComponent, BlogsModule, CheckBoxComponent as ɵf, DropDownComponent as ɵe, FileComponent as ɵd, RadioComponent as ɵc, TextBoxComponent as ɵa, FieldBuilderComponent as ɵb, DemoMaterialModule as ɵg };

//# sourceMappingURL=blogs.js.map