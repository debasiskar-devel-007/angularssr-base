/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var CategoryManagementComponent = /** @class */ (function () {
    function CategoryManagementComponent() {
        console.log('Step 3 =================================== Component LIB');
    }
    Object.defineProperty(CategoryManagementComponent.prototype, "config", {
        set: /**
         * @param {?} receivedCategoryData
         * @return {?}
         */
        function (receivedCategoryData) {
            this.categoryData = receivedCategoryData;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CategoryManagementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CategoryManagementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-category-management',
                    template: "<lib-list-category [config]=\"categoryData\"></lib-list-category>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CategoryManagementComponent.ctorParameters = function () { return []; };
    CategoryManagementComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return CategoryManagementComponent;
}());
export { CategoryManagementComponent };
if (false) {
    /** @type {?} */
    CategoryManagementComponent.prototype.categoryData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXRlZ29yeS1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL2NhdGVnb3J5LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBRWxCLE1BQU0sZUFBZSxDQUFDO0FBRWhEO0lBY0U7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQVBELHNCQUNJLCtDQUFNOzs7OztRQURWLFVBQ1csb0JBQXlCO1lBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7Ozs7SUFNRCw4Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLDZFQUFpRDs7aUJBRWxEOzs7Ozt5QkFLRSxLQUFLOztJQVlSLGtDQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FmWSwyQkFBMkI7OztJQUV0QyxtREFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgSW5qZWN0LFxuICAgICAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLFxuICAgICAgICBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jYXRlZ29yeS1tYW5hZ2VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdjYXRlZ29yeS1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbICcuL3N0eWxlLmNzcycgXVxufSlcblxuZXhwb3J0IGNsYXNzIENhdGVnb3J5TWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGNhdGVnb3J5RGF0YTogYW55O1xuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkQ2F0ZWdvcnlEYXRhOiBhbnkpIHtcbiAgICB0aGlzLmNhdGVnb3J5RGF0YSA9IHJlY2VpdmVkQ2F0ZWdvcnlEYXRhO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IFxuICAgIGNvbnNvbGUubG9nKCdTdGVwIDMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ29tcG9uZW50IExJQicpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19