/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
/**
 * A router wrapper, adding extra functions.
 */
var prevroute = /** @class */ (function () {
    function prevroute(router) {
        var _this = this;
        this.router = router;
        this.previousUrl = undefined;
        this.currentUrl = undefined;
        this.currentUrl = this.router.url;
        router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationEnd) {
                _this.previousUrl = _this.currentUrl;
                _this.currentUrl = event.url;
            }
            ;
        }));
    }
    /**
     * @return {?}
     */
    prevroute.prototype.getPreviousUrl = /**
     * @return {?}
     */
    function () {
        console.log('=========================');
        console.log('prev- ' + this.previousUrl);
        console.log('currnt- ' + this.currentUrl);
        console.log('=========================');
        return this.previousUrl;
    };
    prevroute.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    prevroute.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return prevroute;
}());
export { prevroute };
if (false) {
    /**
     * @type {?}
     * @private
     */
    prevroute.prototype.previousUrl;
    /**
     * @type {?}
     * @private
     */
    prevroute.prototype.currentUrl;
    /**
     * @type {?}
     * @private
     */
    prevroute.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldnJvdXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL3ByZXZyb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFlLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBR3JFO0lBTUUsbUJBQW9CLE1BQWU7UUFBbkMsaUJBUUM7UUFSbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUgzQixnQkFBVyxHQUFXLFNBQVMsQ0FBQztRQUNoQyxlQUFVLEdBQVcsU0FBUyxDQUFDO1FBR3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQzNCLElBQUksS0FBSyxZQUFZLGFBQWEsRUFBRTtnQkFDbEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDN0I7WUFBQSxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0sa0NBQWM7OztJQUFyQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Z0JBdEJGLFVBQVU7Ozs7Z0JBSEYsTUFBTTs7SUEwQmYsZ0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXRCWSxTQUFTOzs7Ozs7SUFFcEIsZ0NBQXdDOzs7OztJQUN4QywrQkFBdUM7Ozs7O0lBRTNCLDJCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyRXZlbnQsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKiogQSByb3V0ZXIgd3JhcHBlciwgYWRkaW5nIGV4dHJhIGZ1bmN0aW9ucy4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBwcmV2cm91dGUge1xuXG4gIHByaXZhdGUgcHJldmlvdXNVcmw6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBjdXJyZW50VXJsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIpIHtcbiAgICB0aGlzLmN1cnJlbnRVcmwgPSB0aGlzLnJvdXRlci51cmw7XG4gICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICB0aGlzLnByZXZpb3VzVXJsID0gdGhpcy5jdXJyZW50VXJsO1xuICAgICAgICB0aGlzLmN1cnJlbnRVcmwgPSBldmVudC51cmw7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFByZXZpb3VzVXJsKCl7XG4gICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgICBjb25zb2xlLmxvZygncHJldi0gJyt0aGlzLnByZXZpb3VzVXJsKTtcbiAgICBjb25zb2xlLmxvZygnY3Vycm50LSAnK3RoaXMuY3VycmVudFVybCk7XG4gICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgICByZXR1cm4gdGhpcy5wcmV2aW91c1VybDtcbiAgfVxufSJdfQ==