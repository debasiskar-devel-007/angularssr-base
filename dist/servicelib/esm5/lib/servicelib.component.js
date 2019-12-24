/**
 * @fileoverview added by tsickle
 * Generated from: lib/servicelib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ServicelibComponent = /** @class */ (function () {
    // ====================================================================================================
    function ServicelibComponent() {
        this.loader = true;
    }
    Object.defineProperty(ServicelibComponent.prototype, "config", {
        // =====================================================================================================
        // =============================================Input For Lib Listing================================
        set: 
        // =====================================================================================================
        // =============================================Input For Lib Listing================================
        /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            this.serviceListConfig = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "id", "updated_at", "service_desc", "image", "additional_img", "description_html"],
                listArray_modify_header: { "service title": "Service title", "priority": "Priority",
                    "status": "Status", "bulletarr": "Number of Bullets", "date added": "Date Added" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                /*Search settings in the Listing*/
                search_settings: {
                    textsearch: [{ label: "Search by title", field: 'service_title' }],
                    selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
                },
                /*Showing Image in the Modal*/
                // pendingmodelapplicationarray_detail_datatype:[{
                //   key: "images",
                //   value: 'image',
                //   fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/services/'    
                // }],
                detail_header: ['_id']
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ServicelibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ServicelibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-servicelib',
                    template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"serviceListConfig.datasource !=null && serviceListConfig.datasource.length > 0\"\n        [datasource]=\"serviceListConfig.datasource\" [skip]=\"serviceListConfig.listArray_skip\"\n        [modify_header_array]=\"serviceListConfig.listArray_modify_header\" [sourcedata]=\"serviceListConfig.tableName\"\n        [statusarr]=\"serviceListConfig.statusarr\" [jwttoken]=\"serviceListConfig.jwtToken\"\n        [apiurl]=\"serviceListConfig.apiUrl\" [editroute]=\"serviceListConfig.editUrl\"\n        [deleteendpoint]=\"serviceListConfig.deleteEndPoint\" [date_search_source]=\"serviceListConfig.view\"\n        [detail_datatype]=\"serviceListConfig.pendingmodelapplicationarray_detail_datatype\"\n        [date_search_endpoint]=\"serviceListConfig.listEndPoint\" [search_settings]=\"serviceListConfig.search_settings\"\n        [detail_skip_array]=\"serviceListConfig.detail_header\">\n    </lib-listing>\n    <!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"serviceListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ServicelibComponent.ctorParameters = function () { return []; };
    ServicelibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ServicelibComponent;
}());
export { ServicelibComponent };
if (false) {
    /** @type {?} */
    ServicelibComponent.prototype.serviceListConfig;
    /** @type {?} */
    ServicelibComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXJ2aWNlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlbGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBa0RFLHVHQUF1RztJQUV2RztRQTNDTyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBNEM5QixDQUFDO0lBdkNELHNCQUNJLHVDQUFNO1FBTFYsd0dBQXdHO1FBR3hHLHFHQUFxRzs7Ozs7Ozs7UUFDckcsVUFDVyxZQUFpQjtZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUc7Z0JBQ3ZCLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO2dCQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQ25DLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FBUztnQkFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLENBQUM7Z0JBQ2xILHVCQUF1QixFQUFFLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsVUFBVTtvQkFDbkYsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBRTtnQkFDaEYsdUJBQXVCLEVBQUUsT0FBTztnQkFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUNyRSxTQUFTLEVBQUUsWUFBWSxDQUFDLGNBQWM7Z0JBQ3RDLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTztnQkFDN0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO2dCQUMvQixjQUFjLEVBQUUsWUFBWSxDQUFDLGNBQWM7Z0JBQzNDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTs7Z0JBR3ZCLGVBQWUsRUFBRTtvQkFDZixVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUM7b0JBQ2xFLFlBQVksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDbkk7Ozs7Ozs7Z0JBUUQsYUFBYSxFQUFDLENBQUMsS0FBSyxDQUFDO2FBRXRCLENBQUE7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTs7OztJQU9ELHNDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsaTJDQUEwQzs7aUJBRTNDOzs7Ozt5QkFVRSxLQUFLOztJQTRDUiwwQkFBQztDQUFBLEFBMURELElBMERDO1NBckRZLG1CQUFtQjs7O0lBRzlCLGdEQUE4Qjs7SUFDOUIscUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zZXJ2aWNlbGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlcnZpY2VsaWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZXJ2aWNlbGliLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlbGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc2VydmljZUxpc3RDb25maWc6IGFueTtcbiAgcHVibGljIGxvYWRlcjogYm9vbGVhbiA9IHRydWU7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7XG4gICAgdGhpcy5zZXJ2aWNlTGlzdENvbmZpZyA9IHtcbiAgICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXG4gICAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXG4gICAgICBkYXRhc291cmNlOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSxcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWREYXRhLnRhYmxlTmFtZSxcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJpZFwiLCBcInVwZGF0ZWRfYXRcIiwgXCJzZXJ2aWNlX2Rlc2NcIiwgXCJpbWFnZVwiLFwiYWRkaXRpb25hbF9pbWdcIixcImRlc2NyaXB0aW9uX2h0bWxcIl0sXG4gICAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjogeyBcInNlcnZpY2UgdGl0bGVcIjogXCJTZXJ2aWNlIHRpdGxlXCIsIFwicHJpb3JpdHlcIjogXCJQcmlvcml0eVwiLCBcbiAgICAgIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIsIFwiYnVsbGV0YXJyXCI6IFwiTnVtYmVyIG9mIEJ1bGxldHNcIixcImRhdGUgYWRkZWRcIjpcIkRhdGUgQWRkZWRcIiB9LFxuICAgICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxuICAgICAgdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXG4gICAgICBlZGl0VXJsOiByZWNlaXZlZERhdGEuZWRpdFVybCxcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxuICAgICAgdmlldzogcmVjZWl2ZWREYXRhLnZpZXcsXG5cbiAgICAgIC8qU2VhcmNoIHNldHRpbmdzIGluIHRoZSBMaXN0aW5nKi9cbiAgICAgIHNlYXJjaF9zZXR0aW5nczoge1xuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggYnkgdGl0bGVcIiwgZmllbGQ6ICdzZXJ2aWNlX3RpdGxlJyB9XSxcbiAgICAgICAgc2VsZWN0c2VhcmNoOiBbeyBsYWJlbDogJ1NlYXJjaCBCeSBTdGF0dXMnLCBmaWVsZDogJ3N0YXR1cycsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dIH1dLCAvLyB0aGlzIGlzIHVzZSBmb3IgIHNlbGVjdCBzZWFyY2hcbiAgICAgIH0sXG5cbiAgICAgIC8qU2hvd2luZyBJbWFnZSBpbiB0aGUgTW9kYWwqL1xuICAgICAgLy8gcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6W3tcbiAgICAgIC8vICAga2V5OiBcImltYWdlc1wiLFxuICAgICAgLy8gICB2YWx1ZTogJ2ltYWdlJyxcbiAgICAgIC8vICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci9zZXJ2aWNlcy8nICAgIFxuICAgICAgLy8gfV0sXG4gICAgICBkZXRhaWxfaGVhZGVyOlsnX2lkJ11cblxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG5cbiJdfQ==