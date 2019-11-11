/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
var ListingSenderComponent = /** @class */ (function () {
    // ====================================================================================================
    function ListingSenderComponent(cookieService) {
        this.cookieService = cookieService;
        this.loader = true;
    }
    Object.defineProperty(ListingSenderComponent.prototype, "config", {
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        set: 
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            this.senderConfigForm2 = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
                listArray_modify_header: { "name": "Sender's Name", "email": "Sender's Email", "date": "Date" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListingSenderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ListingSenderComponent.prototype.setMailAddress = /**
     * @return {?}
     */
    function () {
        this.cookieService.set('get_mail', this.get_mail);
    };
    ListingSenderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-sender',
                    template: "<mat-card *ngIf=\"loader==true\">\r\n  <mat-spinner class=\"spinner\"></mat-spinner>\r\n</mat-card>\r\n\r\n\r\n\r\n<!-- ------------------------lib listing being called------------------------ -->\r\n<mat-card *ngIf=\"loader==false\">\r\n  <lib-listing class=\"formfilterdiv\"\r\n      *ngIf=\"senderConfigForm2.datasource !=null && senderConfigForm2.datasource.length > 0\"\r\n      [datasource]=\"senderConfigForm2.datasource\" [skip]=\"senderConfigForm2.listArray_skip\"\r\n      [modify_header_array]=\"senderConfigForm2.listArray_modify_header\" [sourcedata]=\"senderConfigForm2.tableName\"\r\n      [statusarr]=\"senderConfigForm2.statusarr\" [jwttoken]=\"senderConfigForm2.jwtToken\"\r\n      [apiurl]=\"senderConfigForm2.apiUrl\" [editroute]=\"senderConfigForm2.editUrl\"\r\n      [deleteendpoint]=\"senderConfigForm2.deleteEndPoint\">\r\n  </lib-listing>\r\n<!-- ----------------------------------------------------------------------------->\r\n\r\n<mat-form-field class=\"sender_message\">\r\n  <input matInput placeholder=\"Send Newsletter reply to sender\" [(ngModel)]=\"get_mail\">\r\n  <input type=\"button\" (click)=\"setMailAddress()\" value=\"Set Token\" />\r\n</mat-form-field>\r\n\r\n  <h2 *ngIf=\"senderConfigForm2.datasource.length == 0\">No record found.</h2>\r\n</mat-card>",
                    styles: [".sender_message{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    ListingSenderComponent.ctorParameters = function () { return [
        { type: CookieService }
    ]; };
    ListingSenderComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingSenderComponent;
}());
export { ListingSenderComponent };
if (false) {
    /** @type {?} */
    ListingSenderComponent.prototype.senderConfigForm2;
    /** @type {?} */
    ListingSenderComponent.prototype.loader;
    /** @type {?} */
    ListingSenderComponent.prototype.get_mail;
    /**
     * @type {?}
     * @private
     */
    ListingSenderComponent.prototype.cookieService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1zZW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV3cy10aXRsZS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL3NlbmRlcnNsaXN0L2xpc3Rpbmctc2VuZGVyL2xpc3Rpbmctc2VuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5EO0lBc0NFLHVHQUF1RztJQUV2RyxnQ0FBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUEvQnpDLFdBQU0sR0FBWSxJQUFJLENBQUM7SUFpQzlCLENBQUM7SUF6QkQsc0JBQ0ksMENBQU07UUFQVix3R0FBd0c7UUFLeEcsd0dBQXdHOzs7Ozs7OztRQUN4RyxVQUNXLFlBQWlCO1lBRTFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRztnQkFDdkIsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVO2dCQUMvQixZQUFZLEVBQUUsWUFBWSxDQUFDLFlBQVk7Z0JBQ3ZDLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDbkMsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO2dCQUNqQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDO2dCQUNuRSx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7Z0JBQy9GLHVCQUF1QixFQUFFLE9BQU87Z0JBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDckUsU0FBUyxFQUFFLFlBQVksQ0FBQyxjQUFjO2dCQUN0QyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87Z0JBQzdCLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtnQkFDL0IsY0FBYyxFQUFFLFlBQVksQ0FBQyxjQUFjO2dCQUMzQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7YUFFeEIsQ0FBQTtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7O0lBT0QseUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUdELCtDQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Z0JBbERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qiw0eENBQThDOztpQkFFL0M7Ozs7Z0JBTlEsYUFBYTs7O3lCQW1CbkIsS0FBSzs7SUFrQ1IsNkJBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQTlDWSxzQkFBc0I7OztJQUdqQyxtREFBOEI7O0lBQzlCLHdDQUE4Qjs7SUFDOUIsMENBQWE7Ozs7O0lBOEJELCtDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWxpc3Rpbmctc2VuZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdGluZy1zZW5kZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xpc3Rpbmctc2VuZGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdGluZ1NlbmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgcHVibGljIHNlbmRlckNvbmZpZ0Zvcm0yOiBhbnk7XHJcbiAgcHVibGljIGxvYWRlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgZ2V0X21haWw6YW55O1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgQElucHV0KClcclxuICBzZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7XHJcblxyXG4gICAgdGhpcy5zZW5kZXJDb25maWdGb3JtMiA9IHtcclxuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcclxuICAgICAgbGlzdEVuZFBvaW50OiByZWNlaXZlZERhdGEubGlzdEVuZFBvaW50LFxyXG4gICAgICBkYXRhc291cmNlOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSxcclxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxyXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcImlkXCIsIFwidXBkYXRlZF9hdFwiXSxcclxuICAgICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHsgXCJuYW1lXCI6IFwiU2VuZGVyJ3MgTmFtZVwiLCBcImVtYWlsXCI6IFwiU2VuZGVyJ3MgRW1haWxcIiwgXCJkYXRlXCI6IFwiRGF0ZVwiIH0sXHJcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXHJcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxyXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcclxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXHJcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXHJcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXHJcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxyXG5cclxuICAgIH1cclxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlKSB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcblxyXG4gIHNldE1haWxBZGRyZXNzKCkge1xyXG4gICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldCgnZ2V0X21haWwnLCB0aGlzLmdldF9tYWlsKTsgICAgXHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19