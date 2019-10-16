(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/core'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('on-page-editor', ['exports', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/core', '@angular/material'], factory) :
    (factory((global['on-page-editor'] = {}),global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.core,global.ng.material));
}(this, (function (exports,a11y,dragDrop,portal,scrolling,stepper,table,tree,i0,material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OnPageEditorService = /** @class */ (function () {
        function OnPageEditorService() {
        }
        OnPageEditorService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        OnPageEditorService.ctorParameters = function () { return []; };
        /** @nocollapse */ OnPageEditorService.ngInjectableDef = i0.defineInjectable({ factory: function OnPageEditorService_Factory() { return new OnPageEditorService(); }, token: OnPageEditorService, providedIn: "root" });
        return OnPageEditorService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OnPageEditorComponent = /** @class */ (function () {
        function OnPageEditorComponent() {
        }
        /**
         * @return {?}
         */
        OnPageEditorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        OnPageEditorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-on-page-editor',
                        template: "<mat-card class=\"example-card\">\n    <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Shiba Inu</mat-card-title>\n        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n        <p>\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n            bred for hunting.\n        </p>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-button>LIKE</button>\n        <button mat-button>SHARE</button>\n    </mat-card-actions>\n</mat-card>\n",
                        styles: [".example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}"]
                    }] }
        ];
        /** @nocollapse */
        OnPageEditorComponent.ctorParameters = function () { return []; };
        return OnPageEditorComponent;
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
                            material.MatAutocompleteModule,
                            material.MatBadgeModule,
                            material.MatBottomSheetModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatStepperModule,
                            material.MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatDividerModule,
                            material.MatExpansionModule,
                            material.MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatNativeDateModule,
                            material.MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            material.MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            material.MatSnackBarModule,
                            material.MatSortModule,
                            material.MatTableModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule,
                            material.MatTreeModule,
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
    var OnPageEditorModule = /** @class */ (function () {
        function OnPageEditorModule() {
        }
        OnPageEditorModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [OnPageEditorComponent],
                        imports: [
                            DemoMaterialModule
                        ],
                        exports: [OnPageEditorComponent]
                    },] }
        ];
        return OnPageEditorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.OnPageEditorService = OnPageEditorService;
    exports.OnPageEditorComponent = OnPageEditorComponent;
    exports.OnPageEditorModule = OnPageEditorModule;
    exports.ɵa = DemoMaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=on-page-editor.umd.js.map