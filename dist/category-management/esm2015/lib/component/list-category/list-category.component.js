/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CategoryManagementService } from '../../category-management.service';
import { Router } from '@angular/router';
export class ListCategoryComponent {
    /**
     * @param {?} httpRequest
     * @param {?} router
     */
    constructor(httpRequest, router) {
        this.httpRequest = httpRequest;
        this.router = router;
        this.loader = true;
    }
    /**
     * @param {?} receivedCategoryData
     * @return {?}
     */
    set config(receivedCategoryData) {
        this.categoryListingConfig = {
            apiUrl: receivedCategoryData.apiBaseUrl,
            listEndPoint: "datalist",
            datasource: receivedCategoryData.datasource,
            tableName: receivedCategoryData.tableName,
            listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
            listArray_modify_header: { "title": "Title", "description": "Description", "priority": "Priority", "roll": "Roll", "status": "Status" },
            admintablenameTableName: "admin",
            statusarray: [{ val: 1, name: 'Active' }, { val: 0, name: 'Inactive' }],
            updateurl: receivedCategoryData.updateEndpoint,
            editUrl: receivedCategoryData.editUrl,
            jwtToken: receivedCategoryData.jwtToken,
            deleteEndPoint: receivedCategoryData.deleteEndPoint,
            addLink: receivedCategoryData.addLink
        };
        this.loader = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    gotoUrl(url) {
        this.router.navigate([url]);
    }
}
ListCategoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-list-category',
                template: "\n<mat-card>\n  <mat-toolbar color=\"primary\">\n      <h2>Manage Category</h2>\n  </mat-toolbar>\n</mat-card>\n\n<br />\n\n<mat-card>\n  <button (click)=\"gotoUrl(categoryListingConfig.addLink);\" class=\"add-new-button\" mat-raised-button matTooltip=\"Create New Category.\" aria-label=\"Button that displays a tooltip when focused or hovered over\">Create New</button>\n\n</mat-card>\n<br />\n\n<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\" *ngIf=\"categoryListingConfig.datasource !=null && categoryListingConfig.datasource.length > 0\"\n      [datasource]=\"categoryListingConfig.datasource\"\n      [skip]=\"categoryListingConfig.listArray_skip\"\n      [modify_header_array]=\"categoryListingConfig.listArray_modify_header\"\n      [sourcedata]=\"categoryListingConfig.tableName\"\n      [statusarr]=\"categoryListingConfig.statusarray\"\n      [jwttoken]=\"categoryListingConfig.jwtToken\" \n      [apiurl]=\"categoryListingConfig.apiUrl\"\n      [editroute]=\"categoryListingConfig.editUrl\"\n      [deleteendpoint]=\"categoryListingConfig.deleteEndPoint\">\n  </lib-listing>\n\n  <h2 *ngIf=\"categoryListingConfig.datasource.length == 0\">No record found.</h2>\n  </mat-card>\n\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ListCategoryComponent.ctorParameters = () => [
    { type: CategoryManagementService },
    { type: Router }
];
ListCategoryComponent.propDecorators = {
    config: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jYXRlZ29yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXRlZ29yeS1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9saXN0LWNhdGVnb3J5L2xpc3QtY2F0ZWdvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxFQUFrQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVF6RCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQTBCaEMsWUFBb0IsV0FBc0MsRUFBVSxNQUFjO1FBQTlELGdCQUFXLEdBQVgsV0FBVyxDQUEyQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUF0QjNFLFdBQU0sR0FBWSxJQUFJLENBQUM7SUF3QjlCLENBQUM7Ozs7O0lBdEJELElBQ0ksTUFBTSxDQUFDLG9CQUF5QjtRQUNsQyxJQUFJLENBQUMscUJBQXFCLEdBQUc7WUFDM0IsTUFBTSxFQUFFLG9CQUFvQixDQUFDLFVBQVU7WUFDdkMsWUFBWSxFQUFFLFVBQVU7WUFDeEIsVUFBVSxFQUFFLG9CQUFvQixDQUFDLFVBQVU7WUFDM0MsU0FBUyxFQUFFLG9CQUFvQixDQUFDLFNBQVM7WUFDekMsY0FBYyxFQUFFLENBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBRTtZQUNyRSx1QkFBdUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtZQUN2SSx1QkFBdUIsRUFBRSxPQUFPO1lBQ2hDLFdBQVcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsQ0FBQztZQUMzRCxTQUFTLEVBQUUsb0JBQW9CLENBQUMsY0FBYztZQUM5QyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsT0FBTztZQUNyQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsUUFBUTtZQUN2QyxjQUFjLEVBQUUsb0JBQW9CLENBQUMsY0FBYztZQUNuRCxPQUFPLEVBQUUsb0JBQW9CLENBQUMsT0FBTztTQUN0QyxDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQU1ELFFBQVE7SUFDUixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxHQUFHO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsaXpDQUE2Qzs7YUFFOUM7Ozs7WUFQUSx5QkFBeUI7WUFDVCxNQUFNOzs7cUJBYzVCLEtBQUs7Ozs7SUFKTiw2Q0FBeUI7O0lBQ3pCLHNEQUFrQzs7SUFDbEMsdUNBQThCOzs7OztJQXNCbEIsNENBQThDOzs7OztJQUFFLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBDYXRlZ29yeU1hbmFnZW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2F0ZWdvcnktbWFuYWdlbWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdC1jYXRlZ29yeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LWNhdGVnb3J5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC1jYXRlZ29yeS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Q2F0ZWdvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBjYXRlZ29yeURhdGE6IGFueTtcbiAgcHVibGljIGNhdGVnb3J5TGlzdGluZ0NvbmZpZzogYW55O1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkQ2F0ZWdvcnlEYXRhOiBhbnkpIHtcbiAgICB0aGlzLmNhdGVnb3J5TGlzdGluZ0NvbmZpZyA9IHtcbiAgICAgIGFwaVVybDogcmVjZWl2ZWRDYXRlZ29yeURhdGEuYXBpQmFzZVVybCxcbiAgICAgIGxpc3RFbmRQb2ludDogXCJkYXRhbGlzdFwiLFxuICAgICAgZGF0YXNvdXJjZTogcmVjZWl2ZWRDYXRlZ29yeURhdGEuZGF0YXNvdXJjZSxcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWRDYXRlZ29yeURhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFsgXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwiaWRcIiwgXCJ1cGRhdGVkX2F0XCIgXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwidGl0bGVcIjogXCJUaXRsZVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb25cIiwgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFwicm9sbFwiOiBcIlJvbGxcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiB9LFxuICAgICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcbiAgICAgIHN0YXR1c2FycmF5Olt7dmFsOjEsbmFtZTonQWN0aXZlJ30se3ZhbDowLG5hbWU6J0luYWN0aXZlJ31dLFxuICAgICAgdXBkYXRldXJsOiByZWNlaXZlZENhdGVnb3J5RGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkQ2F0ZWdvcnlEYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWRDYXRlZ29yeURhdGEuand0VG9rZW4sXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWRDYXRlZ29yeURhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgICBhZGRMaW5rOiByZWNlaXZlZENhdGVnb3J5RGF0YS5hZGRMaW5rXG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBSZXF1ZXN0OiBDYXRlZ29yeU1hbmFnZW1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnb3RvVXJsKHVybCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmxdKTtcbiAgfVxuXG59XG4iXX0=