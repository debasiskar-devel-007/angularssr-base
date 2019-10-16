import { Router } from '@angular/router';
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
import { Injectable, Component, NgModule, Input, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutoShareService {
    constructor() { }
}
AutoShareService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AutoShareService.ctorParameters = () => [];
/** @nocollapse */ AutoShareService.ngInjectableDef = defineInjectable({ factory: function AutoShareService_Factory() { return new AutoShareService(); }, token: AutoShareService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutoShareComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.routeingUrlValue = '';
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set routeingUrl(routeingUrlval) {
        this.routeingUrlValue = (routeingUrlval) || '<no name set>';
        this.routeingUrlValue = routeingUrlval;
        console.log(this.routeingUrlValue);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    goToMediaManagement() {
        this.router.navigateByUrl('/' + this.routeingUrlValue);
    }
}
AutoShareComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'lib-autoShare',
                template: "\n<p>hi</p>\n<button mat-raised-button color=\"accent\" (click)=\"goToMediaManagement()\">Accent</button>",
                styles: ["\n<p>hi</p>\n<button mat-raised-button color=\"accent\" (click)=\"goToMediaManagement()\">Accent</button>"]
            }] }
];
/** @nocollapse */
AutoShareComponent.ctorParameters = () => [
    { type: Router }
];
AutoShareComponent.propDecorators = {
    routeingUrl: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DemoMaterialModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SocialMediaManagementComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SocialMediaManagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-social-media-management',
                template: "\n\n<mat-card class=\"social_wrapper\">\n  <mat-card class=\"items\">\n\n    <span class=\"inner_icon\">\n      <img src=\"https://cdn.iconscout.com/icon/free/png-512/tumblr-170-569320.png\">\n    </span>\n    <mat-card-content class=\"content_sec\">\n      <span class=\"profile_wrapper\">\n        <img\n          src=\"https://cdn.vox-cdn.com/thumbor/wI3iu8sNbFJSQB4yMLsoPMNzIHU=/0x0:3368x3368/1200x800/filters:focal(1188x715:1726x1253)/cdn.vox-cdn.com/uploads/chorus_image/image/62994726/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.0.jpg\">\n      </span>\n\n      <h2>fghjkl</h2>\n      <h3>hdgfkhjdlf</h3>\n    </mat-card-content>\n\n\n  </mat-card>\n  <mat-card class=\"items\">\n\n    <span class=\"inner_icon\">\n      <img src=\"https://image.flaticon.com/icons/png/512/124/124010.png\">\n    </span>\n    <mat-card-content class=\"content_sec\">\n      <span class=\"profile_wrapper\">\n        <img\n          src=\"https://cdn.vox-cdn.com/thumbor/wI3iu8sNbFJSQB4yMLsoPMNzIHU=/0x0:3368x3368/1200x800/filters:focal(1188x715:1726x1253)/cdn.vox-cdn.com/uploads/chorus_image/image/62994726/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.0.jpg\">\n      </span>\n\n      <h2>fghjkl</h2>\n      <h3>hdgfkhjdlf</h3>\n    </mat-card-content>\n\n\n  </mat-card>\n  <mat-card class=\"items\">\n\n    <span class=\"inner_icon\">\n      <img src=\"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png\">\n    </span>\n    <mat-card-content class=\"content_sec\">\n      <span class=\"profile_wrapper\">\n        <img\n          src=\"https://cdn.vox-cdn.com/thumbor/wI3iu8sNbFJSQB4yMLsoPMNzIHU=/0x0:3368x3368/1200x800/filters:focal(1188x715:1726x1253)/cdn.vox-cdn.com/uploads/chorus_image/image/62994726/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.0.jpg\">\n      </span>\n\n      <h2>fghjkl</h2>\n      <h3>hdgfkhjdlf</h3>\n    </mat-card-content>\n\n\n  </mat-card>\n\n  <mat-card class=\"items\">\n\n    <span class=\"inner_icon\">\n      <img src=\"https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png\">\n    </span>\n    <mat-card-content class=\"content_sec\">\n      <span class=\"profile_wrapper\">\n        <img\n          src=\"https://cdn.vox-cdn.com/thumbor/wI3iu8sNbFJSQB4yMLsoPMNzIHU=/0x0:3368x3368/1200x800/filters:focal(1188x715:1726x1253)/cdn.vox-cdn.com/uploads/chorus_image/image/62994726/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.0.jpg\">\n      </span>\n\n      <h2>fghjkl</h2>\n      <h3>hdgfkhjdlf</h3>\n    </mat-card-content>\n\n\n  </mat-card>\n\n  \n</mat-card>",
                styles: [".social_wrapper{display:flex;flex-wrap:wrap;justify-content:space-between}.social_wrapper .items{width:21%;margin:1%}.inner_icon{width:50px;height:50px;display:block;margin-left:auto}.inner_icon img{max-width:100%}.content_sec{text-align:center}.content_sec .profile_wrapper{margin:0 auto;display:block;width:120px;height:120px;background:#fff;box-shadow:2px 2px 2px #000;border-radius:50%;overflow:hidden}.content_sec img{max-width:100%;min-height:100%}"]
            }] }
];
/** @nocollapse */
SocialMediaManagementComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutoShareModule {
}
AutoShareModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AutoShareComponent, SocialMediaManagementComponent],
                imports: [
                    DemoMaterialModule,
                ],
                exports: [AutoShareComponent, SocialMediaManagementComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AutoShareService, AutoShareComponent, AutoShareModule, DemoMaterialModule as ɵb, SocialMediaManagementComponent as ɵa };

//# sourceMappingURL=auto-share.js.map