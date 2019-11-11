/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
export class ListingSenderComponent {
    // ====================================================================================================
    /**
     * @param {?} cookieService
     */
    constructor(cookieService) {
        this.cookieService = cookieService;
        this.loader = true;
    }
    // =====================================================================================================
    // ================================================Input For Lib Listing================================
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    setMailAddress() {
        this.cookieService.set('get_mail', this.get_mail);
    }
}
ListingSenderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-listing-sender',
                template: "<mat-card *ngIf=\"loader==true\">\r\n  <mat-spinner class=\"spinner\"></mat-spinner>\r\n</mat-card>\r\n\r\n\r\n\r\n<!-- ------------------------lib listing being called------------------------ -->\r\n<mat-card *ngIf=\"loader==false\">\r\n  <lib-listing class=\"formfilterdiv\"\r\n      *ngIf=\"senderConfigForm2.datasource !=null && senderConfigForm2.datasource.length > 0\"\r\n      [datasource]=\"senderConfigForm2.datasource\" [skip]=\"senderConfigForm2.listArray_skip\"\r\n      [modify_header_array]=\"senderConfigForm2.listArray_modify_header\" [sourcedata]=\"senderConfigForm2.tableName\"\r\n      [statusarr]=\"senderConfigForm2.statusarr\" [jwttoken]=\"senderConfigForm2.jwtToken\"\r\n      [apiurl]=\"senderConfigForm2.apiUrl\" [editroute]=\"senderConfigForm2.editUrl\"\r\n      [deleteendpoint]=\"senderConfigForm2.deleteEndPoint\">\r\n  </lib-listing>\r\n<!-- ----------------------------------------------------------------------------->\r\n\r\n<mat-form-field class=\"sender_message\">\r\n  <input matInput placeholder=\"Send Newsletter reply to sender\" [(ngModel)]=\"get_mail\">\r\n  <input type=\"button\" (click)=\"setMailAddress()\" value=\"Set Token\" />\r\n</mat-form-field>\r\n\r\n  <h2 *ngIf=\"senderConfigForm2.datasource.length == 0\">No record found.</h2>\r\n</mat-card>",
                styles: [".sender_message{width:100%}"]
            }] }
];
/** @nocollapse */
ListingSenderComponent.ctorParameters = () => [
    { type: CookieService }
];
ListingSenderComponent.propDecorators = {
    config: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1zZW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV3cy10aXRsZS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL3NlbmRlcnNsaXN0L2xpc3Rpbmctc2VuZGVyL2xpc3Rpbmctc2VuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT25ELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBbUNqQyxZQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQS9CekMsV0FBTSxHQUFZLElBQUksQ0FBQztJQWlDOUIsQ0FBQzs7Ozs7OztJQXpCRCxJQUNJLE1BQU0sQ0FBQyxZQUFpQjtRQUUxQixJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDdkIsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVO1lBQy9CLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtZQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDbkMsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO1lBQ2pDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUM7WUFDbkUsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO1lBQy9GLHVCQUF1QixFQUFFLE9BQU87WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO1lBQ3JFLFNBQVMsRUFBRSxZQUFZLENBQUMsY0FBYztZQUN0QyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87WUFDN0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQy9CLGNBQWMsRUFBRSxZQUFZLENBQUMsY0FBYztZQUMzQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7U0FFeEIsQ0FBQTtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFPRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUdELGNBQWM7UUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsNHhDQUE4Qzs7YUFFL0M7Ozs7WUFOUSxhQUFhOzs7cUJBbUJuQixLQUFLOzs7O0lBVE4sbURBQThCOztJQUM5Qix3Q0FBOEI7O0lBQzlCLDBDQUFhOzs7OztJQThCRCwrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nLXNlbmRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3Rpbmctc2VuZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9saXN0aW5nLXNlbmRlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RpbmdTZW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHB1YmxpYyBzZW5kZXJDb25maWdGb3JtMjogYW55O1xyXG4gIHB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGdldF9tYWlsOmFueTtcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbmZpZyhyZWNlaXZlZERhdGE6IGFueSkge1xyXG5cclxuICAgIHRoaXMuc2VuZGVyQ29uZmlnRm9ybTIgPSB7XHJcbiAgICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXHJcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcclxuICAgICAgZGF0YXNvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsXHJcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWREYXRhLnRhYmxlTmFtZSxcclxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJpZFwiLCBcInVwZGF0ZWRfYXRcIl0sXHJcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwibmFtZVwiOiBcIlNlbmRlcidzIE5hbWVcIiwgXCJlbWFpbFwiOiBcIlNlbmRlcidzIEVtYWlsXCIsIFwiZGF0ZVwiOiBcIkRhdGVcIiB9LFxyXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxyXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcclxuICAgICAgdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXHJcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxyXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxyXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxyXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcclxuXHJcbiAgICB9XHJcbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xyXG4gIH1cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZSkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG5cclxuICBzZXRNYWlsQWRkcmVzcygpIHtcclxuICAgIHRoaXMuY29va2llU2VydmljZS5zZXQoJ2dldF9tYWlsJywgdGhpcy5nZXRfbWFpbCk7ICAgIFxyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ==