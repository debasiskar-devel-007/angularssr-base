/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
var AutoShareComponent = /** @class */ (function () {
    function AutoShareComponent(router) {
        this.router = router;
        this.routeingUrlValue = '';
    }
    Object.defineProperty(AutoShareComponent.prototype, "routeingUrl", {
        set: /**
         * @param {?} routeingUrlval
         * @return {?}
         */
        function (routeingUrlval) {
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
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'lib-autoShare',
                    template: "\n<p>hi</p>\n<button mat-raised-button color=\"accent\" (click)=\"goToMediaManagement()\">Accent</button>",
                    styles: ["\n<p>hi</p>\n<button mat-raised-button color=\"accent\" (click)=\"goToMediaManagement()\">Accent</button>"]
                }] }
    ];
    /** @nocollapse */
    AutoShareComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    AutoShareComponent.propDecorators = {
        routeingUrl: [{ type: Input }]
    };
    return AutoShareComponent;
}());
export { AutoShareComponent };
if (false) {
    /** @type {?} */
    AutoShareComponent.prototype.routeingUrlValue;
    /** @type {?} */
    AutoShareComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1zaGFyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hdXRvLXNoYXJlLyIsInNvdXJjZXMiOlsibGliL2F1dG8tc2hhcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekM7SUFnQkUsNEJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVDNCLHFCQUFnQixHQUFRLEVBQUUsQ0FBQztJQVNJLENBQUM7SUFQdkMsc0JBQ0ksMkNBQVc7Ozs7O1FBRGYsVUFDZ0IsY0FBbUI7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksZUFBZSxDQUFDO1lBQzVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTs7OztJQUlELHFDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxnREFBbUI7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RCxDQUFDOztnQkF2QkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIscUhBQTBDOztpQkFFM0M7Ozs7Z0JBUFEsTUFBTTs7OzhCQVdaLEtBQUs7O0lBZ0JSLHlCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FuQlksa0JBQWtCOzs7SUFDN0IsOENBQWtDOztJQVNyQixvQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbGliLWF1dG9TaGFyZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvLXNoYXJlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0by1zaGFyZS5jb21wb25lbnQuaHRtbCddXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9TaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyByb3V0ZWluZ1VybFZhbHVlOiBhbnkgPSAnJztcblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBVcmwgZnJvbSBwcm9qZWN0XG4gIHNldCByb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XG4gICAgdGhpcy5yb3V0ZWluZ1VybFZhbHVlID0gKHJvdXRlaW5nVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5yb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XG4gICAgY29uc29sZS5sb2codGhpcy5yb3V0ZWluZ1VybFZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ29Ub01lZGlhTWFuYWdlbWVudCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyArIHRoaXMucm91dGVpbmdVcmxWYWx1ZSk7XG4gIH1cblxufVxuIl19