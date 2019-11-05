/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ListingTestemaillibComponent {
    // ====================================================================================================
    constructor() {
        this.loader = true;
    }
    // =====================================================================================================
    // ================================================Input For Lib Listing================================
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
        this.senderConfigForm = {
            apiUrl: receivedData.apiBaseUrl,
            listEndPoint: receivedData.listEndPoint,
            datasource: receivedData.datasource,
            tableName: receivedData.tableName,
            listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
            listArray_modify_header: { "name": "Sender's Name", "email": "Sender's Email" },
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
}
ListingTestemaillibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-listing-testemaillib',
                template: "<mat-card *ngIf=\"loader==true\">\r\n  <mat-spinner class=\"spinner\"></mat-spinner>\r\n</mat-card>\r\n\r\n\r\n\r\n<!-- ------------------------lib listing being called------------------------ -->\r\n<mat-card *ngIf=\"loader==false\">\r\n  <lib-listing class=\"formfilterdiv\"\r\n      *ngIf=\"senderConfigForm.datasource !=null && senderConfigForm.datasource.length > 0\"\r\n      [datasource]=\"senderConfigForm.datasource\" [skip]=\"senderConfigForm.listArray_skip\"\r\n      [modify_header_array]=\"senderConfigForm.listArray_modify_header\" [sourcedata]=\"senderConfigForm.tableName\"\r\n      [statusarr]=\"senderConfigForm.statusarr\" [jwttoken]=\"senderConfigForm.jwtToken\"\r\n      [apiurl]=\"senderConfigForm.apiUrl\" [editroute]=\"senderConfigForm.editUrl\"\r\n      [deleteendpoint]=\"senderConfigForm.deleteEndPoint\">\r\n  </lib-listing>\r\n<!-- ----------------------------------------------------------------------------->\r\n\r\n  <h2 *ngIf=\"senderConfigForm.datasource.length == 0\">No record found.</h2>\r\n</mat-card>",
                styles: [""]
            }] }
];
/** @nocollapse */
ListingTestemaillibComponent.ctorParameters = () => [];
ListingTestemaillibComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListingTestemaillibComponent.prototype.senderConfigForm;
    /** @type {?} */
    ListingTestemaillibComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy10ZXN0ZW1haWxsaWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV3cy10aXRsZS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL3Rlc3RlbWFpbHMvbGlzdGluZy10ZXN0ZW1haWxsaWIvbGlzdGluZy10ZXN0ZW1haWxsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU94RCxNQUFNLE9BQU8sNEJBQTRCOztJQWtDdkM7UUE5Qk8sV0FBTSxHQUFZLElBQUksQ0FBQztJQThCZCxDQUFDOzs7Ozs7O0lBdkJqQixJQUNJLE1BQU0sQ0FBQyxZQUFpQjtRQUUxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEIsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVO1lBQy9CLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtZQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDbkMsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO1lBQ2pDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUM7WUFDbkUsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQztZQUM3RSx1QkFBdUIsRUFBRSxPQUFPO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztZQUNyRSxTQUFTLEVBQUUsWUFBWSxDQUFDLGNBQWM7WUFDdEMsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPO1lBQzdCLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtZQUMvQixjQUFjLEVBQUUsWUFBWSxDQUFDLGNBQWM7WUFDM0MsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJO1NBRXhCLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBS0QsUUFBUTtJQUNSLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsMmhDQUFvRDs7YUFFckQ7Ozs7O3FCQVlFLEtBQUs7Ozs7SUFSTix3REFBNkI7O0lBQzdCLDhDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICxJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nLXRlc3RlbWFpbGxpYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmctdGVzdGVtYWlsbGliLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9saXN0aW5nLXRlc3RlbWFpbGxpYi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RpbmdUZXN0ZW1haWxsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHB1YmxpYyBzZW5kZXJDb25maWdGb3JtOiBhbnk7XHJcbiAgcHVibGljIGxvYWRlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbmZpZyhyZWNlaXZlZERhdGE6IGFueSkge1xyXG4gICBcclxuICAgIHRoaXMuc2VuZGVyQ29uZmlnRm9ybSA9IHtcclxuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcclxuICAgICAgbGlzdEVuZFBvaW50OiByZWNlaXZlZERhdGEubGlzdEVuZFBvaW50LFxyXG4gICAgICBkYXRhc291cmNlOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSxcclxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxyXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcImlkXCIsIFwidXBkYXRlZF9hdFwiXSxcclxuICAgICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHsgXCJuYW1lXCI6IFwiU2VuZGVyJ3MgTmFtZVwiLCBcImVtYWlsXCI6XCJTZW5kZXIncyBFbWFpbFwifSxcclxuICAgICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcclxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXHJcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxyXG4gICAgICBlZGl0VXJsOiByZWNlaXZlZERhdGEuZWRpdFVybCxcclxuICAgICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcclxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcclxuICAgICAgdmlldzogcmVjZWl2ZWREYXRhLnZpZXcsXHJcbiAgICBcclxuICAgIH1cclxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gIFxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgIl19