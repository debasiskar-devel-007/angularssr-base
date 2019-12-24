/**
 * @fileoverview added by tsickle
 * Generated from: lib/servicelib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ServicelibComponent {
    // ====================================================================================================
    constructor() {
        this.loader = true;
    }
    // =====================================================================================================
    // =============================================Input For Lib Listing================================
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
        this.serviceListConfig = {
            apiUrl: receivedData.apiBaseUrl,
            listEndPoint: receivedData.listEndPoint,
            datasource: receivedData.datasource,
            tableName: receivedData.tableName,
            listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "service_desc", "images"],
            listArray_modify_header: { "service title": "Service title", "priority": "Priority", "status": "Status", "bulletarr": "Number of bullets" },
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
            pendingmodelapplicationarray_detail_datatype: [{
                    key: "images",
                    value: 'image',
                    fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/services/' // Image path 
                }],
        };
        this.loader = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ServicelibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-servicelib',
                template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"serviceListConfig.datasource !=null && serviceListConfig.datasource.length > 0\"\n        [datasource]=\"serviceListConfig.datasource\" [skip]=\"serviceListConfig.listArray_skip\"\n        [modify_header_array]=\"serviceListConfig.listArray_modify_header\" [sourcedata]=\"serviceListConfig.tableName\"\n        [statusarr]=\"serviceListConfig.statusarr\" [jwttoken]=\"serviceListConfig.jwtToken\"\n        [apiurl]=\"serviceListConfig.apiUrl\" [editroute]=\"serviceListConfig.editUrl\"\n        [deleteendpoint]=\"serviceListConfig.deleteEndPoint\" [date_search_source]=\"serviceListConfig.view\"\n        [detail_datatype]=\"serviceListConfig.pendingmodelapplicationarray_detail_datatype\"\n        [date_search_endpoint]=\"serviceListConfig.listEndPoint\" [search_settings]=\"serviceListConfig.search_settings\">\n    </lib-listing>\n    <!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"serviceListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                styles: [""]
            }] }
];
/** @nocollapse */
ServicelibComponent.ctorParameters = () => [];
ServicelibComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ServicelibComponent.prototype.serviceListConfig;
    /** @type {?} */
    ServicelibComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXJ2aWNlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlbGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxtQkFBbUI7O0lBNkM5QjtRQXpDTyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBMEM5QixDQUFDOzs7Ozs7O0lBckNELElBQ0ksTUFBTSxDQUFDLFlBQWlCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUN2QixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO1lBQ3ZDLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtZQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7WUFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDO1lBQzdGLHVCQUF1QixFQUFFLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFO1lBQzNJLHVCQUF1QixFQUFFLE9BQU87WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO1lBQ3JFLFNBQVMsRUFBRSxZQUFZLENBQUMsY0FBYztZQUN0QyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87WUFDN0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQy9CLGNBQWMsRUFBRSxZQUFZLENBQUMsY0FBYztZQUMzQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7O1lBR3ZCLGVBQWUsRUFBRTtnQkFDZixVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUM7Z0JBQ2xFLFlBQVksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNuSTs7WUFHRCw0Q0FBNEMsRUFBRSxDQUFDO29CQUM3QyxHQUFHLEVBQUUsUUFBUTtvQkFDYixLQUFLLEVBQUUsT0FBTztvQkFDZCxPQUFPLEVBQUUsd0VBQXdFLENBQUksY0FBYztpQkFDcEcsQ0FBQztTQUVILENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBT0QsUUFBUTtJQUNSLENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZ3lDQUEwQzs7YUFFM0M7Ozs7O3FCQVVFLEtBQUs7Ozs7SUFOTixnREFBOEI7O0lBQzlCLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VydmljZWxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXJ2aWNlbGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VydmljZWxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VydmljZWxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHNlcnZpY2VMaXN0Q29uZmlnOiBhbnk7XG4gIHB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09SW5wdXQgRm9yIExpYiBMaXN0aW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhyZWNlaXZlZERhdGE6IGFueSkge1xuICAgIHRoaXMuc2VydmljZUxpc3RDb25maWcgPSB7XG4gICAgICBhcGlVcmw6IHJlY2VpdmVkRGF0YS5hcGlCYXNlVXJsLFxuICAgICAgbGlzdEVuZFBvaW50OiByZWNlaXZlZERhdGEubGlzdEVuZFBvaW50LFxuICAgICAgZGF0YXNvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsXG4gICAgICB0YWJsZU5hbWU6IHJlY2VpdmVkRGF0YS50YWJsZU5hbWUsXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcImlkXCIsIFwidXBkYXRlZF9hdFwiLCBcInNlcnZpY2VfZGVzY1wiLCBcImltYWdlc1wiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwic2VydmljZSB0aXRsZVwiOiBcIlNlcnZpY2UgdGl0bGVcIiwgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIsIFwiYnVsbGV0YXJyXCI6IFwiTnVtYmVyIG9mIGJ1bGxldHNcIiB9LFxuICAgICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxuICAgICAgdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXG4gICAgICBlZGl0VXJsOiByZWNlaXZlZERhdGEuZWRpdFVybCxcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxuICAgICAgdmlldzogcmVjZWl2ZWREYXRhLnZpZXcsXG5cbiAgICAgIC8qU2VhcmNoIHNldHRpbmdzIGluIHRoZSBMaXN0aW5nKi9cbiAgICAgIHNlYXJjaF9zZXR0aW5nczoge1xuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggYnkgdGl0bGVcIiwgZmllbGQ6ICdzZXJ2aWNlX3RpdGxlJyB9XSxcbiAgICAgICAgc2VsZWN0c2VhcmNoOiBbeyBsYWJlbDogJ1NlYXJjaCBCeSBTdGF0dXMnLCBmaWVsZDogJ3N0YXR1cycsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dIH1dLCAvLyB0aGlzIGlzIHVzZSBmb3IgIHNlbGVjdCBzZWFyY2hcbiAgICAgIH0sXG5cbiAgICAgIC8qU2hvd2luZyBJbWFnZSBpbiB0aGUgTW9kYWwqL1xuICAgICAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFt7XG4gICAgICAgIGtleTogXCJpbWFnZXNcIixcbiAgICAgICAgdmFsdWU6ICdpbWFnZScsXG4gICAgICAgIGZpbGV1cmw6ICdodHRwczovL3MzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2NybWZpbGVzLmluZmx1eGhvc3RzZXJ2ZXIvc2VydmljZXMvJyAgICAvLyBJbWFnZSBwYXRoIFxuICAgICAgfV0sXG5cbiAgICB9XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cblxuXG4iXX0=