(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/forms'), require('@angular/core'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree')) :
    typeof define === 'function' && define.amd ? define('blogs', ['exports', '@angular/common', '@angular/forms', '@angular/core', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree'], factory) :
    (factory((global.blogs = {}),global.ng.common,global.ng.forms,global.ng.core,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.dialog,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree));
}(this, (function (exports,common,forms,i0,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,dialog,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BlogsService = /** @class */ (function () {
        function BlogsService() {
        }
        BlogsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BlogsService.ctorParameters = function () { return []; };
        /** @nocollapse */ BlogsService.ngInjectableDef = i0.defineInjectable({ factory: function BlogsService_Factory() { return new BlogsService(); }, token: BlogsService, providedIn: "root" });
        return BlogsService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BlogsComponent = /** @class */ (function () {
        function BlogsComponent() {
            this.onSubmit = new i0.EventEmitter();
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
                            fieldsCtrls[f.name] = new forms.FormControl(f.value || '', forms.Validators.required);
                        }
                        else {
                            /** @type {?} */
                            var opts = {};
                            try {
                                for (var _e = __values(f.options), _f = _e.next(); !_f.done; _f = _e.next()) {
                                    var opt = _f.value;
                                    opts[opt.key] = new forms.FormControl(opt.value);
                                }
                            }
                            catch (e_2_1) {
                                e_2 = { error: e_2_1 };
                            }
                            finally {
                                try {
                                    if (_f && !_f.done && (_b = _e.return))
                                        _b.call(_e);
                                }
                                finally {
                                    if (e_2)
                                        throw e_2.error;
                                }
                            }
                            fieldsCtrls[f.name] = new forms.FormGroup(opts);
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return))
                            _a.call(_c);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this.form = new forms.FormGroup(fieldsCtrls);
            };
        BlogsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-Blogs',
                        template: "\n  <form (ngSubmit)=\"onSubmit.emit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n  <div *ngFor=\"let field of fields\">\n      <field-builder [field]=\"field\" [form]=\"form\"></field-builder>\n  </div>\n  <div class=\"form-row\"></div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-9\">\n      <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\">Save</button>\n      <strong >Saved all values</strong>\n    </div>\n  </div>\n</form>\n\n\n\n\n<mat-checkbox>Check me!</mat-checkbox>\n  "
                    }] }
        ];
        /** @nocollapse */
        BlogsComponent.ctorParameters = function () { return []; };
        BlogsComponent.propDecorators = {
            onSubmit: [{ type: i0.Output }],
            fields: [{ type: i0.Input }]
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
             */ function () { return this.form.controls[this.field.name].valid; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextBoxComponent.prototype, "isDirty", {
            get: /**
             * @return {?}
             */ function () { return this.form.controls[this.field.name].dirty; },
            enumerable: true,
            configurable: true
        });
        TextBoxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'textbox',
                        template: "\n      <div [formGroup]=\"form\">\n        <input *ngIf=\"!field.multiline\" [attr.type]=\"field.type\" class=\"form-control\"  [id]=\"field.name\" [name]=\"field.name\" [formControlName]=\"field.name\">\n        <textarea *ngIf=\"field.multiline\" [class.is-invalid]=\"isDirty && !isValid\" [formControlName]=\"field.name\" [id]=\"field.name\"\n        rows=\"9\" class=\"form-control\" [placeholder]=\"field.placeholder\"></textarea>\n      </div> \n\n    "
                    }] }
        ];
        /** @nocollapse */
        TextBoxComponent.ctorParameters = function () { return []; };
        TextBoxComponent.propDecorators = {
            field: [{ type: i0.Input }],
            form: [{ type: i0.Input }]
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
             */ function () { return this.form.controls[this.field.name].valid; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldBuilderComponent.prototype, "isDirty", {
            get: /**
             * @return {?}
             */ function () { return this.form.controls[this.field.name].dirty; },
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
            { type: i0.Component, args: [{
                        selector: 'field-builder',
                        template: "\n  <div class=\"form-group row\" [formGroup]=\"form\">\n    <label class=\"col-md-3 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n      <strong class=\"text-danger\" *ngIf=\"field.required\">*</strong>\n    </label>\n    <div class=\"col-md-9\" [ngSwitch]=\"field.type\">\n      <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n      <dropdown *ngSwitchCase=\"'dropdown'\" [field]=\"field\" [form]=\"form\"></dropdown>\n      <checkbox *ngSwitchCase=\"'checkbox'\" [field]=\"field\" [form]=\"form\"></checkbox>\n      <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n      <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\n      <div class=\"alert alert-danger my-1 p-2 fadeInDown animated\" *ngIf=\"!isValid && isDirty\">{{field.label}} is required</div>\n    </div>\n  </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        FieldBuilderComponent.ctorParameters = function () { return []; };
        FieldBuilderComponent.propDecorators = {
            field: [{ type: i0.Input }],
            form: [{ type: i0.Input }]
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
            { type: i0.Component, args: [{
                        selector: 'radio',
                        template: "\n      <div [formGroup]=\"form\">\n        <div class=\"form-check\" *ngFor=\"let opt of field.options\">\n          <input class=\"form-check-input\" type=\"radio\" [value]=\"opt.key\" >\n          <label class=\"form-check-label\">\n            {{opt.label}}\n          </label>\n        </div>\n      </div> \n    "
                    }] }
        ];
        RadioComponent.propDecorators = {
            field: [{ type: i0.Input }],
            form: [{ type: i0.Input }]
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
             */ function () { return this.form.controls[this.field.name].valid; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileComponent.prototype, "isDirty", {
            get: /**
             * @return {?}
             */ function () { return this.form.controls[this.field.name].dirty; },
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
            { type: i0.Component, args: [{
                        selector: 'file',
                        template: "\n      <div [formGroup]=\"form\">\n        <div *ngIf=\"!field.value\" class=\"drop-container dropzone\" dropZone (hovered)=\"toggleHover($event)\"\n          (dropped)=\"field.onUpload($event)\">\n          <p class=\"m-0\">\n            Drag a file here or\n            <label class=\"upload-button\">\n              <input type=\"file\" multiple=\"\" (change)=\"field.onUpload($event.target.files)\"> browse\n            </label>\n            to upload.\n          </p>\n        </div>\n        <div *ngIf=\"field.value\">\n          <!-- <button type=\"button\" class=\"btn btn-primary\">Change</button> -->\n          <div class=\"card\">\n            <img class=\"card-img-top\" [src]=\"field.value\">\n          </div>\n        </div>\n      </div> \n    ",
                        styles: ["\n      .drop-container {\n        background: #fff;\n        border-radius: 6px;\n        height: 150px;\n        width: 100%;\n        box-shadow: 1px 2px 20px hsla(0,0%,4%,.1);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border: 2px dashed #c0c4c7;\n      }\n      p {\n        font-size: 16px;\n        font-weight: 400;\n        color: #c0c4c7; \n      }\n      .upload-button {\n        display: inline-block;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        color: #5754a3;\n      }\n      .upload-button input {\n        display: none;\n      }\n      .dropzone { \n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column; \n        border-radius: 5px;\n        background: white;\n        margin: 10px 0;\n      }\n      .dropzone.hovering {\n          border: 2px solid #f16624;\n          color: #dadada !important;\n      }\n      progress::-webkit-progress-value {\n        transition: width 0.1s ease;\n      }\n      "]
                    }] }
        ];
        /** @nocollapse */
        FileComponent.ctorParameters = function () { return []; };
        FileComponent.propDecorators = {
            field: [{ type: i0.Input }],
            form: [{ type: i0.Input }]
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
            { type: i0.Component, args: [{
                        selector: 'dropdown',
                        template: "\n      <div [formGroup]=\"form\">\n        <select class=\"form-control\" [id]=\"field.name\" [formControlName]=\"field.name\">\n          <option *ngFor=\"let opt of field.options\" [value]=\"opt.key\">{{opt.label}}</option>\n        </select>\n      </div> \n    "
                    }] }
        ];
        /** @nocollapse */
        DropDownComponent.ctorParameters = function () { return []; };
        DropDownComponent.propDecorators = {
            field: [{ type: i0.Input }],
            form: [{ type: i0.Input }]
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
             */ function () { return this.form.controls[this.field.name].valid; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CheckBoxComponent.prototype, "isDirty", {
            get: /**
             * @return {?}
             */ function () { return this.form.controls[this.field.name].dirty; },
            enumerable: true,
            configurable: true
        });
        CheckBoxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'checkbox',
                        template: "\n      <div [formGroup]=\"form\">\n        <div [formGroupName]=\"field.name\" >\n          <div *ngFor=\"let opt of field.options\" class=\"form-check form-check\">\n          <label class=\"form-check-label\">\n             <input [formControlName]=\"opt.key\" class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" />\n             {{opt.label}}</label>\n          </div>\n        </div>\n\n      </div> \n    "
                    }] }
        ];
        CheckBoxComponent.propDecorators = {
            field: [{ type: i0.Input }],
            form: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
                        exports: [
                            a11y.A11yModule,
                            stepper.CdkStepperModule,
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            dragDrop.DragDropModule,
                            autocomplete.MatAutocompleteModule,
                            badge.MatBadgeModule,
                            bottomSheet.MatBottomSheetModule,
                            button.MatButtonModule,
                            buttonToggle.MatButtonToggleModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            chips.MatChipsModule,
                            stepper$1.MatStepperModule,
                            datepicker.MatDatepickerModule,
                            dialog.MatDialogModule,
                            divider.MatDividerModule,
                            expansion.MatExpansionModule,
                            gridList.MatGridListModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            list.MatListModule,
                            menu.MatMenuModule,
                            core.MatNativeDateModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            core.MatRippleModule,
                            select.MatSelectModule,
                            sidenav.MatSidenavModule,
                            slider.MatSliderModule,
                            slideToggle.MatSlideToggleModule,
                            snackBar.MatSnackBarModule,
                            sort.MatSortModule,
                            table$1.MatTableModule,
                            tabs.MatTabsModule,
                            toolbar.MatToolbarModule,
                            tooltip.MatTooltipModule,
                            tree$1.MatTreeModule,
                            portal.PortalModule,
                            scrolling.ScrollingModule,
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
            { type: i0.NgModule, args: [{
                        declarations: [BlogsComponent,
                            TextBoxComponent,
                            FieldBuilderComponent,
                            RadioComponent,
                            FileComponent,
                            DropDownComponent,
                            CheckBoxComponent],
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            DemoMaterialModule
                        ],
                        exports: [BlogsComponent],
                        providers: [],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA],
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

    exports.BlogsService = BlogsService;
    exports.BlogsComponent = BlogsComponent;
    exports.BlogsModule = BlogsModule;
    exports.ɵf = CheckBoxComponent;
    exports.ɵe = DropDownComponent;
    exports.ɵd = FileComponent;
    exports.ɵc = RadioComponent;
    exports.ɵa = TextBoxComponent;
    exports.ɵb = FieldBuilderComponent;
    exports.ɵg = DemoMaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=blogs.umd.js.map