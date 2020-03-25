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
            listArray_skip: ["_id", "userId", "id", "updated_at", "service_desc", "additional_img", "description_html", 'service_title_search', 'additional_description'],
            listArray_modify_header: { "service title": "Service title", "priority": "Priority",
                "status": "Status", "bulletarr": "Number of Bullets", "date added": "Date Added", "image": "Image" },
            admintablenameTableName: "admin",
            statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
            updateurl: receivedData.updateEndpoint,
            editUrl: receivedData.editUrl,
            jwtToken: receivedData.jwtToken,
            deleteEndPoint: receivedData.deleteEndPoint,
            view: receivedData.view,
            /*Search settings in the Listing*/
            search_settings: {
                textsearch: [{ label: "Search by title", field: 'service_title_search' }],
                selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
            },
            /*Showing Image in the Modal*/
            // pendingmodelapplicationarray_detail_datatype:[{
            //   key: "images",
            //   value: 'image',
            //   fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/services/'    
            // }],
            detail_header: ['_id', 'additional_details']
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
                template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"serviceListConfig.datasource !=null && serviceListConfig.datasource.length > 0\"\n        [datasource]=\"serviceListConfig.datasource\" [skip]=\"serviceListConfig.listArray_skip\"\n        [modify_header_array]=\"serviceListConfig.listArray_modify_header\" [sourcedata]=\"serviceListConfig.tableName\"\n        [statusarr]=\"serviceListConfig.statusarr\" [jwttoken]=\"serviceListConfig.jwtToken\"\n        [apiurl]=\"serviceListConfig.apiUrl\" [editroute]=\"serviceListConfig.editUrl\"\n        [deleteendpoint]=\"serviceListConfig.deleteEndPoint\" [date_search_source]=\"serviceListConfig.view\"\n        [detail_datatype]=\"serviceListConfig.pendingmodelapplicationarray_detail_datatype\"\n        [date_search_endpoint]=\"serviceListConfig.listEndPoint\" [search_settings]=\"serviceListConfig.search_settings\"\n        [detail_skip_array]=\"serviceListConfig.detail_header\">\n    </lib-listing>\n    <!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"serviceListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXJ2aWNlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlbGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxtQkFBbUI7O0lBK0M5QjtRQTNDTyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBNEM5QixDQUFDOzs7Ozs7O0lBdkNELElBQ0ksTUFBTSxDQUFDLFlBQWlCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUN2QixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO1lBQ3ZDLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtZQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7WUFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBQyxnQkFBZ0IsRUFBQyxrQkFBa0IsRUFBQyxzQkFBc0IsRUFBQyx3QkFBd0IsQ0FBQztZQUN6Six1QkFBdUIsRUFBRSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFVBQVU7Z0JBQ25GLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRTtZQUNoRyx1QkFBdUIsRUFBRSxPQUFPO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztZQUNyRSxTQUFTLEVBQUUsWUFBWSxDQUFDLGNBQWM7WUFDdEMsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPO1lBQzdCLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtZQUMvQixjQUFjLEVBQUUsWUFBWSxDQUFDLGNBQWM7WUFDM0MsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJOztZQUd2QixlQUFlLEVBQUU7Z0JBQ2YsVUFBVSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLENBQUM7Z0JBQ3pFLFlBQVksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNuSTs7Ozs7OztZQVFELGFBQWEsRUFBQyxDQUFDLEtBQUssRUFBQyxvQkFBb0IsQ0FBQztTQUUzQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQU9ELFFBQVE7SUFDUixDQUFDOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGkyQ0FBMEM7O2FBRTNDOzs7OztxQkFVRSxLQUFLOzs7O0lBTk4sZ0RBQThCOztJQUM5QixxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNlcnZpY2VsaWInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VydmljZWxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlcnZpY2VsaWIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzZXJ2aWNlTGlzdENvbmZpZzogYW55O1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZpY2VMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImlkXCIsIFwidXBkYXRlZF9hdFwiLCBcInNlcnZpY2VfZGVzY1wiLFwiYWRkaXRpb25hbF9pbWdcIixcImRlc2NyaXB0aW9uX2h0bWxcIiwnc2VydmljZV90aXRsZV9zZWFyY2gnLCdhZGRpdGlvbmFsX2Rlc2NyaXB0aW9uJ10sXG4gICAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjogeyBcInNlcnZpY2UgdGl0bGVcIjogXCJTZXJ2aWNlIHRpdGxlXCIsIFwicHJpb3JpdHlcIjogXCJQcmlvcml0eVwiLCBcbiAgICAgIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIsIFwiYnVsbGV0YXJyXCI6IFwiTnVtYmVyIG9mIEJ1bGxldHNcIixcImRhdGUgYWRkZWRcIjpcIkRhdGUgQWRkZWRcIixcImltYWdlXCI6XCJJbWFnZVwiIH0sXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxuICAgICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcblxuICAgICAgLypTZWFyY2ggc2V0dGluZ3MgaW4gdGhlIExpc3RpbmcqL1xuICAgICAgc2VhcmNoX3NldHRpbmdzOiB7XG4gICAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBieSB0aXRsZVwiLCBmaWVsZDogJ3NlcnZpY2VfdGl0bGVfc2VhcmNoJyB9XSxcbiAgICAgICAgc2VsZWN0c2VhcmNoOiBbeyBsYWJlbDogJ1NlYXJjaCBCeSBTdGF0dXMnLCBmaWVsZDogJ3N0YXR1cycsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dIH1dLCAvLyB0aGlzIGlzIHVzZSBmb3IgIHNlbGVjdCBzZWFyY2hcbiAgICAgIH0sXG5cbiAgICAgIC8qU2hvd2luZyBJbWFnZSBpbiB0aGUgTW9kYWwqL1xuICAgICAgLy8gcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6W3tcbiAgICAgIC8vICAga2V5OiBcImltYWdlc1wiLFxuICAgICAgLy8gICB2YWx1ZTogJ2ltYWdlJyxcbiAgICAgIC8vICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci9zZXJ2aWNlcy8nICAgIFxuICAgICAgLy8gfV0sXG4gICAgICBkZXRhaWxfaGVhZGVyOlsnX2lkJywnYWRkaXRpb25hbF9kZXRhaWxzJ11cblxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG5cbiJdfQ==