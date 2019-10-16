(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('auto-share', ['exports', '@angular/router', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/core'], factory) :
    (factory((global['auto-share'] = {}),global.ng.router,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.dialog,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree,global.ng.core));
}(this, (function (exports,router,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,dialog,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AutoShareService = /** @class */ (function () {
        function AutoShareService() {
        }
        AutoShareService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AutoShareService.ctorParameters = function () { return []; };
        /** @nocollapse */ AutoShareService.ngInjectableDef = i0.defineInjectable({ factory: function AutoShareService_Factory() { return new AutoShareService(); }, token: AutoShareService, providedIn: "root" });
        return AutoShareService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AutoShareComponent = /** @class */ (function () {
        function AutoShareComponent(router$$1) {
            this.router = router$$1;
            this.routeingUrlValue = '';
        }
        Object.defineProperty(AutoShareComponent.prototype, "routeingUrl", {
            set: /**
             * @param {?} routeingUrlval
             * @return {?}
             */ function (routeingUrlval) {
                this.routeingUrlValue = (routeingUrlval) || '<no name set>';
                this.routeingUrlValue = routeingUrlval;
                console.log(this.routeingUrlValue);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AutoShareComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        AutoShareComponent.prototype.goToMediaManagement = /**
         * @return {?}
         */
            function () {
                this.router.navigateByUrl('/' + this.routeingUrlValue);
            };
        AutoShareComponent.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'lib-autoShare',
                        template: "\n<p>hi</p>\n<button mat-raised-button color=\"accent\" (click)=\"goToMediaManagement()\">Accent</button>",
                        styles: ["\n<p>hi</p>\n<button mat-raised-button color=\"accent\" (click)=\"goToMediaManagement()\">Accent</button>"]
                    }] }
        ];
        /** @nocollapse */
        AutoShareComponent.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        AutoShareComponent.propDecorators = {
            routeingUrl: [{ type: i0.Input }]
        };
        return AutoShareComponent;
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
    var SocialMediaManagementComponent = /** @class */ (function () {
        function SocialMediaManagementComponent() {
        }
        /**
         * @return {?}
         */
        SocialMediaManagementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SocialMediaManagementComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-social-media-management',
                        template: "\n\n<mat-card class=\"social_wrapper\">\n  <mat-card class=\"items\">\n\n    <span class=\"inner_icon\">\n      <img src=\"https://cdn.iconscout.com/icon/free/png-512/tumblr-170-569320.png\">\n    </span>\n    <mat-card-content class=\"content_sec\">\n      <span class=\"profile_wrapper\">\n        <img\n          src=\"https://cdn.vox-cdn.com/thumbor/wI3iu8sNbFJSQB4yMLsoPMNzIHU=/0x0:3368x3368/1200x800/filters:focal(1188x715:1726x1253)/cdn.vox-cdn.com/uploads/chorus_image/image/62994726/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.0.jpg\">\n      </span>\n\n      <h2>fghjkl</h2>\n      <h3>hdgfkhjdlf</h3>\n    </mat-card-content>\n\n\n  </mat-card>\n  <mat-card class=\"items\">\n\n    <span class=\"inner_icon\">\n      <img src=\"https://image.flaticon.com/icons/png/512/124/124010.png\">\n    </span>\n    <mat-card-content class=\"content_sec\">\n      <span class=\"profile_wrapper\">\n        <img\n          src=\"https://cdn.vox-cdn.com/thumbor/wI3iu8sNbFJSQB4yMLsoPMNzIHU=/0x0:3368x3368/1200x800/filters:focal(1188x715:1726x1253)/cdn.vox-cdn.com/uploads/chorus_image/image/62994726/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.0.jpg\">\n      </span>\n\n      <h2>fghjkl</h2>\n      <h3>hdgfkhjdlf</h3>\n    </mat-card-content>\n\n\n  </mat-card>\n  <mat-card class=\"items\">\n\n    <span class=\"inner_icon\">\n      <img src=\"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png\">\n    </span>\n    <mat-card-content class=\"content_sec\">\n      <span class=\"profile_wrapper\">\n        <img\n          src=\"https://cdn.vox-cdn.com/thumbor/wI3iu8sNbFJSQB4yMLsoPMNzIHU=/0x0:3368x3368/1200x800/filters:focal(1188x715:1726x1253)/cdn.vox-cdn.com/uploads/chorus_image/image/62994726/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.0.jpg\">\n      </span>\n\n      <h2>fghjkl</h2>\n      <h3>hdgfkhjdlf</h3>\n    </mat-card-content>\n\n\n  </mat-card>\n\n  <mat-card class=\"items\">\n\n    <span class=\"inner_icon\">\n      <img src=\"https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png\">\n    </span>\n    <mat-card-content class=\"content_sec\">\n      <span class=\"profile_wrapper\">\n        <img\n          src=\"https://cdn.vox-cdn.com/thumbor/wI3iu8sNbFJSQB4yMLsoPMNzIHU=/0x0:3368x3368/1200x800/filters:focal(1188x715:1726x1253)/cdn.vox-cdn.com/uploads/chorus_image/image/62994726/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.0.jpg\">\n      </span>\n\n      <h2>fghjkl</h2>\n      <h3>hdgfkhjdlf</h3>\n    </mat-card-content>\n\n\n  </mat-card>\n\n  \n</mat-card>",
                        styles: [".social_wrapper{display:flex;flex-wrap:wrap;justify-content:space-between}.social_wrapper .items{width:21%;margin:1%}.inner_icon{width:50px;height:50px;display:block;margin-left:auto}.inner_icon img{max-width:100%}.content_sec{text-align:center}.content_sec .profile_wrapper{margin:0 auto;display:block;width:120px;height:120px;background:#fff;box-shadow:2px 2px 2px #000;border-radius:50%;overflow:hidden}.content_sec img{max-width:100%;min-height:100%}"]
                    }] }
        ];
        /** @nocollapse */
        SocialMediaManagementComponent.ctorParameters = function () { return []; };
        return SocialMediaManagementComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AutoShareModule = /** @class */ (function () {
        function AutoShareModule() {
        }
        AutoShareModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [AutoShareComponent, SocialMediaManagementComponent],
                        imports: [
                            DemoMaterialModule,
                        ],
                        exports: [AutoShareComponent, SocialMediaManagementComponent]
                    },] }
        ];
        return AutoShareModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AutoShareService = AutoShareService;
    exports.AutoShareComponent = AutoShareComponent;
    exports.AutoShareModule = AutoShareModule;
    exports.ɵb = DemoMaterialModule;
    exports.ɵa = SocialMediaManagementComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=auto-share.umd.js.map