/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CategoryManagementService } from '../../category-management.service';
import { Router } from '@angular/router';
var ListCategoryComponent = /** @class */ (function () {
    function ListCategoryComponent(httpRequest, router) {
        this.httpRequest = httpRequest;
        this.router = router;
        this.loader = true;
        console.log('Step 4 =================================== Component LIB');
    }
    Object.defineProperty(ListCategoryComponent.prototype, "config", {
        set: /**
         * @param {?} receivedCategoryData
         * @return {?}
         */
        function (receivedCategoryData) {
            this.categoryListingConfig = {
                apiUrl: receivedCategoryData.apiBaseUrl,
                listEndPoint: "datalist",
                datasource: receivedCategoryData.datasource,
                tableName: receivedCategoryData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
                listArray_modify_header: { "title": "Title", "description": "Description", "priority": "Priority", "roll": "Roll", "status": "Status" },
                admintablenameTableName: "admin",
                updateurl: receivedCategoryData.updateEndpoint,
                editUrl: receivedCategoryData.editUrl,
                jwtToken: receivedCategoryData.jwtToken,
                deleteEndPoint: receivedCategoryData.deleteEndPoint
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListCategoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ListCategoryComponent.prototype.addNewCategory = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['/category-management/create-new']);
    };
    ListCategoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-list-category',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\" *ngIf=\"categoryListingConfig.datasource !=null && categoryListingConfig.datasource.length > 0\"\n      [datasource]=\"categoryListingConfig.datasource\"\n      [skip]=\"categoryListingConfig.listArray_skip\"\n      [modify_header_array]=\"categoryListingConfig.listArray_modify_header\"\n      [sourcedata]=\"categoryListingConfig.tableName\"\n      [statusarr]=\"categoryListingConfig.statusArray\"\n      [jwttoken]=\"categoryListingConfig.jwtToken\" \n      [apiurl]=\"categoryListingConfig.apiUrl\"\n      [editroute]=\"categoryListingConfig.editUrl\"\n      [deleteendpoint]=\"categoryListingConfig.deleteEndPoint\">\n  </lib-listing>\n\n  <h2 *ngIf=\"categoryListingConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>\n",
                    styles: ["h2{margin:auto}mat-card{background-color:#e3e2e1}.example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.add-new-button{float:right}.spinner{text-align:center;margin:auto;height:100px}mat-toolbar{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    ListCategoryComponent.ctorParameters = function () { return [
        { type: CategoryManagementService },
        { type: Router }
    ]; };
    ListCategoryComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListCategoryComponent;
}());
export { ListCategoryComponent };
if (false) {
    /** @type {?} */
    ListCategoryComponent.prototype.categoryData;
    /** @type {?} */
    ListCategoryComponent.prototype.categoryListingConfig;
    /** @type {?} */
    ListCategoryComponent.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    ListCategoryComponent.prototype.httpRequest;
    /**
     * @type {?}
     * @private
     */
    ListCategoryComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jYXRlZ29yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXRlZ29yeS1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9saXN0LWNhdGVnb3J5L2xpc3QtY2F0ZWdvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxFQUFrQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RDtJQThCRSwrQkFBb0IsV0FBc0MsRUFBVSxNQUFjO1FBQTlELGdCQUFXLEdBQVgsV0FBVyxDQUEyQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFwQjNFLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFxQjVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBcEJELHNCQUNJLHlDQUFNOzs7OztRQURWLFVBQ1csb0JBQXlCO1lBQ2xDLElBQUksQ0FBQyxxQkFBcUIsR0FBRztnQkFDM0IsTUFBTSxFQUFFLG9CQUFvQixDQUFDLFVBQVU7Z0JBQ3ZDLFlBQVksRUFBRSxVQUFVO2dCQUN4QixVQUFVLEVBQUUsb0JBQW9CLENBQUMsVUFBVTtnQkFDM0MsU0FBUyxFQUFFLG9CQUFvQixDQUFDLFNBQVM7Z0JBQ3pDLGNBQWMsRUFBRSxDQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUU7Z0JBQ3JFLHVCQUF1QixFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO2dCQUN2SSx1QkFBdUIsRUFBRSxPQUFPO2dCQUNoQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsY0FBYztnQkFDOUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLE9BQU87Z0JBQ3JDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxRQUFRO2dCQUN2QyxjQUFjLEVBQUUsb0JBQW9CLENBQUMsY0FBYzthQUNwRCxDQUFBO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7Ozs7SUFNRCx3Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsOENBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QiwrNUJBQTZDOztpQkFFOUM7Ozs7Z0JBUFEseUJBQXlCO2dCQUNULE1BQU07Ozt5QkFjNUIsS0FBSzs7SUE2QlIsNEJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQW5DWSxxQkFBcUI7OztJQUVoQyw2Q0FBeUI7O0lBQ3pCLHNEQUFrQzs7SUFDbEMsdUNBQThCOzs7OztJQW9CbEIsNENBQThDOzs7OztJQUFFLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBDYXRlZ29yeU1hbmFnZW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2F0ZWdvcnktbWFuYWdlbWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdC1jYXRlZ29yeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LWNhdGVnb3J5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC1jYXRlZ29yeS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Q2F0ZWdvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBjYXRlZ29yeURhdGE6IGFueTtcbiAgcHVibGljIGNhdGVnb3J5TGlzdGluZ0NvbmZpZzogYW55O1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkQ2F0ZWdvcnlEYXRhOiBhbnkpIHtcbiAgICB0aGlzLmNhdGVnb3J5TGlzdGluZ0NvbmZpZyA9IHtcbiAgICAgIGFwaVVybDogcmVjZWl2ZWRDYXRlZ29yeURhdGEuYXBpQmFzZVVybCxcbiAgICAgIGxpc3RFbmRQb2ludDogXCJkYXRhbGlzdFwiLFxuICAgICAgZGF0YXNvdXJjZTogcmVjZWl2ZWRDYXRlZ29yeURhdGEuZGF0YXNvdXJjZSxcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWRDYXRlZ29yeURhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFsgXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwiaWRcIiwgXCJ1cGRhdGVkX2F0XCIgXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwidGl0bGVcIjogXCJUaXRsZVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb25cIiwgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFwicm9sbFwiOiBcIlJvbGxcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiB9LFxuICAgICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWRDYXRlZ29yeURhdGEudXBkYXRlRW5kcG9pbnQsXG4gICAgICBlZGl0VXJsOiByZWNlaXZlZENhdGVnb3J5RGF0YS5lZGl0VXJsLFxuICAgICAgand0VG9rZW46IHJlY2VpdmVkQ2F0ZWdvcnlEYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkQ2F0ZWdvcnlEYXRhLmRlbGV0ZUVuZFBvaW50XG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7IFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwUmVxdWVzdDogQ2F0ZWdvcnlNYW5hZ2VtZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIGNvbnNvbGUubG9nKCdTdGVwIDQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ29tcG9uZW50IExJQicpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBhZGROZXdDYXRlZ29yeSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jYXRlZ29yeS1tYW5hZ2VtZW50L2NyZWF0ZS1uZXcnXSk7XG4gIH1cblxufVxuIl19