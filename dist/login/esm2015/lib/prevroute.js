/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
/**
 * A router wrapper, adding extra functions.
 */
export class prevroute {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.previousUrl = undefined;
        this.currentUrl = undefined;
        this.currentUrl = this.router.url;
        router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof NavigationEnd) {
                this.previousUrl = this.currentUrl;
                this.currentUrl = event.url;
            }
            ;
        }));
    }
    /**
     * @return {?}
     */
    getPreviousUrl() {
        console.log('=========================');
        console.log('prev- ' + this.previousUrl);
        console.log('currnt- ' + this.currentUrl);
        console.log('=========================');
        return this.previousUrl;
    }
}
prevroute.decorators = [
    { type: Injectable }
];
/** @nocollapse */
prevroute.ctorParameters = () => [
    { type: Router }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldnJvdXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL3ByZXZyb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFlLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBSXJFLE1BQU0sT0FBTyxTQUFTOzs7O0lBS3BCLFlBQW9CLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBSDNCLGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBQ2hDLGVBQVUsR0FBVyxTQUFTLENBQUM7UUFHckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQzdCO1lBQUEsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVNLGNBQWM7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7WUF0QkYsVUFBVTs7OztZQUhGLE1BQU07Ozs7Ozs7SUFNYixnQ0FBd0M7Ozs7O0lBQ3hDLCtCQUF1Qzs7Ozs7SUFFM0IsMkJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJFdmVudCwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8qKiBBIHJvdXRlciB3cmFwcGVyLCBhZGRpbmcgZXh0cmEgZnVuY3Rpb25zLiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIHByZXZyb3V0ZSB7XG5cbiAgcHJpdmF0ZSBwcmV2aW91c1VybDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIGN1cnJlbnRVcmw6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlcikge1xuICAgIHRoaXMuY3VycmVudFVybCA9IHRoaXMucm91dGVyLnVybDtcbiAgICByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNVcmwgPSB0aGlzLmN1cnJlbnRVcmw7XG4gICAgICAgIHRoaXMuY3VycmVudFVybCA9IGV2ZW50LnVybDtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJldmlvdXNVcmwoKXtcbiAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIGNvbnNvbGUubG9nKCdwcmV2LSAnK3RoaXMucHJldmlvdXNVcmwpO1xuICAgIGNvbnNvbGUubG9nKCdjdXJybnQtICcrdGhpcy5jdXJyZW50VXJsKTtcbiAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIHJldHVybiB0aGlzLnByZXZpb3VzVXJsO1xuICB9XG59Il19