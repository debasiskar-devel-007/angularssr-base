/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
export class AutoShareComponent {
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
if (false) {
    /** @type {?} */
    AutoShareComponent.prototype.routeingUrlValue;
    /** @type {?} */
    AutoShareComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1zaGFyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hdXRvLXNoYXJlLyIsInNvdXJjZXMiOlsibGliL2F1dG8tc2hhcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRekMsTUFBTSxPQUFPLGtCQUFrQjs7OztJQVU3QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVQzQixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7SUFTSSxDQUFDOzs7OztJQVB2QyxJQUNJLFdBQVcsQ0FBQyxjQUFtQjtRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDNUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFJRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHFIQUEwQzs7YUFFM0M7Ozs7WUFQUSxNQUFNOzs7MEJBV1osS0FBSzs7OztJQUZOLDhDQUFrQzs7SUFTckIsb0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2xpYi1hdXRvU2hhcmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0by1zaGFyZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dG8tc2hhcmUuY29tcG9uZW50Lmh0bWwnXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvU2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgcm91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgVXJsIGZyb20gcHJvamVjdFxuICBzZXQgcm91dGVpbmdVcmwocm91dGVpbmdVcmx2YWw6IGFueSkge1xuICAgIHRoaXMucm91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMucm91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGVpbmdVcmxWYWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciggcHVibGljIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdvVG9NZWRpYU1hbmFnZW1lbnQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLnJvdXRlaW5nVXJsVmFsdWUpO1xuICB9XG5cbn1cbiJdfQ==