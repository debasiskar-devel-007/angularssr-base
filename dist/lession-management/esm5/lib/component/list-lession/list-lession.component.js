/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { LessionManagementService } from '../../lession-management.service';
import { Router } from '@angular/router';
var ListLessionComponent = /** @class */ (function () {
    function ListLessionComponent(httpRequest, router) {
        this.httpRequest = httpRequest;
        this.router = router;
        this.loader = true;
    }
    Object.defineProperty(ListLessionComponent.prototype, "config", {
        set: /**
         * @param {?} receivedLessionData
         * @return {?}
         */
        function (receivedLessionData) {
            this.lessionListingConfig = {
                apiUrl: receivedLessionData.apiBaseUrl,
                listEndPoint: "datalist",
                datasource: receivedLessionData.datasource,
                tableName: receivedLessionData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedLessionData.updateEndpoint,
                editUrl: receivedLessionData.editUrl,
                jwtToken: receivedLessionData.jwtToken,
                deleteEndPoint: receivedLessionData.deleteEndPoint
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListLessionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListLessionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-list-lession',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<!-- <mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\" *ngIf=\"lessionListingConfig.datasource !=null && lessionListingConfig.datasource.length > 0\"\n    [datasource]=\"lessionListingConfig.datasource\"\n    [skip]=\"lessionListingConfig.listArray_skip\"\n    [modify_header_array]=\"lessionListingConfig.listArray_modify_header\"\n    [sourcedata]=\"lessionListingConfig.tableName\"\n    [statusarr]=\"lessionListingConfig.statusArray\"\n    [jwttoken]=\"lessionListingConfig.jwtToken\" \n    [apiurl]=\"lessionListingConfig.apiUrl\"\n    [editroute]=\"lessionListingConfig.editUrl\"\n    [deleteendpoint]=\"lessionListingConfig.deleteEndPoint\">\n  </lib-listing> -->\n\n\n\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"lessionListingConfig.datasource != null && lessionListingConfig.datasource.length > 0\"\n      [datasource]=\"lessionListingConfig.datasource\" [skip]=\"lessionListingConfig.listArray_skip\"\n      [modify_header_array]=\"lessionListingConfig.listArray_modify_header\" [sourcedata]=\"lessionListingConfig.tableName\"\n      [statusarr]=\"lessionListingConfig.statusarr\" [jwttoken]=\"lessionListingConfig.jwtToken\"\n      [apiurl]=\"lessionListingConfig.apiUrl\" [editroute]=\"lessionListingConfig.editUrl\"\n      [deleteendpoint]=\"lessionListingConfig.deleteEndPoint\">\n  </lib-listing>\n\n  <h2 *ngIf=\"lessionListingConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: ["h2{margin:auto}mat-card{background-color:#e3e2e1}.example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.add-new-button{float:right}.spinner{text-align:center;margin:auto;height:100px}mat-toolbar{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    ListLessionComponent.ctorParameters = function () { return [
        { type: LessionManagementService },
        { type: Router }
    ]; };
    ListLessionComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListLessionComponent;
}());
export { ListLessionComponent };
if (false) {
    /** @type {?} */
    ListLessionComponent.prototype.lessionListingConfig;
    /** @type {?} */
    ListLessionComponent.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    ListLessionComponent.prototype.httpRequest;
    /**
     * @type {?}
     * @private
     */
    ListLessionComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1sZXNzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlc3Npb24tbWFuYWdlbWVudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbGlzdC1sZXNzaW9uL2xpc3QtbGVzc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RSxPQUFPLEVBQWtCLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpEO0lBbUNFLDhCQUFvQixXQUFxQyxFQUFVLE1BQWM7UUFBN0QsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTFCMUUsV0FBTSxHQUFZLElBQUksQ0FBQztJQTBCdUQsQ0FBQztJQXhCdEYsc0JBQ0ksd0NBQU07Ozs7O1FBRFYsVUFDVyxtQkFBd0I7WUFFakMsSUFBSSxDQUFDLG9CQUFvQixHQUFHO2dCQUMxQixNQUFNLEVBQUUsbUJBQW1CLENBQUMsVUFBVTtnQkFDdEMsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO2dCQUMxQyxTQUFTLEVBQUUsbUJBQW1CLENBQUMsU0FBUztnQkFDeEMsY0FBYyxFQUFFLENBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBRTtnQkFDckUsdUJBQXVCLEVBQUUsT0FBTztnQkFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNuRSxTQUFTLEVBQUUsbUJBQW1CLENBQUMsY0FBYztnQkFDN0MsT0FBTyxFQUFFLG1CQUFtQixDQUFDLE9BQU87Z0JBQ3BDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRO2dCQUN0QyxjQUFjLEVBQUUsbUJBQW1CLENBQUMsY0FBYzthQUVuRCxDQUFBO1lBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7Ozs7SUFPRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHlqREFBNEM7O2lCQUU3Qzs7OztnQkFQUSx3QkFBd0I7Z0JBQ1IsTUFBTTs7O3lCQWE1QixLQUFLOztJQTZCUiwyQkFBQztDQUFBLEFBeENELElBd0NDO1NBbENZLG9CQUFvQjs7O0lBRS9CLG9EQUFpQzs7SUFDakMsc0NBQThCOzs7OztJQTBCbEIsMkNBQTZDOzs7OztJQUFFLHNDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBMZXNzaW9uTWFuYWdlbWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9sZXNzaW9uLW1hbmFnZW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxpc3QtbGVzc2lvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LWxlc3Npb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LWxlc3Npb24uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdExlc3Npb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBsZXNzaW9uTGlzdGluZ0NvbmZpZzogYW55O1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkTGVzc2lvbkRhdGE6IGFueSkge1xuXG4gICAgdGhpcy5sZXNzaW9uTGlzdGluZ0NvbmZpZyA9IHtcbiAgICAgIGFwaVVybDogcmVjZWl2ZWRMZXNzaW9uRGF0YS5hcGlCYXNlVXJsLFxuICAgICAgbGlzdEVuZFBvaW50OiBcImRhdGFsaXN0XCIsXG4gICAgICBkYXRhc291cmNlOiByZWNlaXZlZExlc3Npb25EYXRhLmRhdGFzb3VyY2UsXG4gICAgICB0YWJsZU5hbWU6IHJlY2VpdmVkTGVzc2lvbkRhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFsgXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwiaWRcIiwgXCJ1cGRhdGVkX2F0XCIgXSxcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIn0sIHsgdmFsOiAwLCBuYW1lOidJbmFjdGl2ZScgfV0sXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkTGVzc2lvbkRhdGEudXBkYXRlRW5kcG9pbnQsXG4gICAgICBlZGl0VXJsOiByZWNlaXZlZExlc3Npb25EYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWRMZXNzaW9uRGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZExlc3Npb25EYXRhLmRlbGV0ZUVuZFBvaW50XG4gICAgICBcbiAgICB9XG4gICBcbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG5cbiBcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFJlcXVlc3Q6IExlc3Npb25NYW5hZ2VtZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuICJdfQ==