/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(router) {
        var _this = this;
        this.router = router;
        this.loading = false;
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (true) {
                case event instanceof NavigationStart: {
                    _this.loading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    _this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    LoadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-loading',
                    template: "\n\n\n\n<div style=\"width:100vw; height:100vh; display:table-cell; vertical-align:middle; text-align:center;\" *ngIf=\"loading==true\">\n  <mat-spinner></mat-spinner>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LoadingComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return LoadingComponent;
}());
export { LoadingComponent };
if (false) {
    /** @type {?} */
    LoadingComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    LoadingComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb250YWN0dXMtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBRW5IO0lBT0UsMEJBQW9CLE1BQWM7UUFBbEMsaUJBa0JEO1FBbEJxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRDNCLFlBQU8sR0FBUSxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBWTtZQUN0QyxRQUFRLElBQUksRUFBRTtnQkFDVixLQUFLLEtBQUssWUFBWSxlQUFlLENBQUMsQ0FBQztvQkFDbkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3BCLE1BQU07aUJBQ1Q7Z0JBQ0QsS0FBSyxLQUFLLFlBQVksYUFBYSxDQUFDO2dCQUNwQyxLQUFLLEtBQUssWUFBWSxnQkFBZ0IsQ0FBQztnQkFDdkMsS0FBSyxLQUFLLFlBQVksZUFBZSxDQUFDLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixNQUFNO2lCQUNUO2dCQUNELE9BQU8sQ0FBQyxDQUFDO29CQUNMLE1BQU07aUJBQ1Q7YUFDSjtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVDLG1DQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQTVCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDJMQUF1Qzs7aUJBRXhDOzs7O2dCQU4yRSxNQUFNOztJQWdDbEYsdUJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXpCWSxnQkFBZ0I7OztJQUMzQixtQ0FBNEI7Ozs7O0lBQ2hCLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25DYW5jZWwsIE5hdmlnYXRpb25FcnJvciwgUm91dGVyLCBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1sb2FkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGxvYWRpbmc6IGFueSA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydDoge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZDpcbiAgICAgICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsOlxuICAgICAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcjoge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19