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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXJ2aWNlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlbGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxtQkFBbUI7O0lBK0M5QjtRQTNDTyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBNEM5QixDQUFDOzs7Ozs7O0lBdkNELElBQ0ksTUFBTSxDQUFDLFlBQWlCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUN2QixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO1lBQ3ZDLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtZQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7WUFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLENBQUM7WUFDbEgsdUJBQXVCLEVBQUUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxVQUFVO2dCQUNuRixRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFFO1lBQ2hGLHVCQUF1QixFQUFFLE9BQU87WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO1lBQ3JFLFNBQVMsRUFBRSxZQUFZLENBQUMsY0FBYztZQUN0QyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87WUFDN0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQy9CLGNBQWMsRUFBRSxZQUFZLENBQUMsY0FBYztZQUMzQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7O1lBR3ZCLGVBQWUsRUFBRTtnQkFDZixVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUM7Z0JBQ2xFLFlBQVksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNuSTs7Ozs7OztZQVFELGFBQWEsRUFBQyxDQUFDLEtBQUssQ0FBQztTQUV0QixDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQU9ELFFBQVE7SUFDUixDQUFDOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGkyQ0FBMEM7O2FBRTNDOzs7OztxQkFVRSxLQUFLOzs7O0lBTk4sZ0RBQThCOztJQUM5QixxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNlcnZpY2VsaWInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VydmljZWxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlcnZpY2VsaWIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzZXJ2aWNlTGlzdENvbmZpZzogYW55O1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZpY2VMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImlkXCIsIFwidXBkYXRlZF9hdFwiLCBcInNlcnZpY2VfZGVzY1wiLCBcImltYWdlXCIsXCJhZGRpdGlvbmFsX2ltZ1wiLFwiZGVzY3JpcHRpb25faHRtbFwiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwic2VydmljZSB0aXRsZVwiOiBcIlNlcnZpY2UgdGl0bGVcIiwgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFxuICAgICAgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiwgXCJidWxsZXRhcnJcIjogXCJOdW1iZXIgb2YgQnVsbGV0c1wiLFwiZGF0ZSBhZGRlZFwiOlwiRGF0ZSBBZGRlZFwiIH0sXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxuICAgICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcblxuICAgICAgLypTZWFyY2ggc2V0dGluZ3MgaW4gdGhlIExpc3RpbmcqL1xuICAgICAgc2VhcmNoX3NldHRpbmdzOiB7XG4gICAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBieSB0aXRsZVwiLCBmaWVsZDogJ3NlcnZpY2VfdGl0bGUnIH1dLFxuICAgICAgICBzZWxlY3RzZWFyY2g6IFt7IGxhYmVsOiAnU2VhcmNoIEJ5IFN0YXR1cycsIGZpZWxkOiAnc3RhdHVzJywgdmFsdWVzOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0gfV0sIC8vIHRoaXMgaXMgdXNlIGZvciAgc2VsZWN0IHNlYXJjaFxuICAgICAgfSxcblxuICAgICAgLypTaG93aW5nIEltYWdlIGluIHRoZSBNb2RhbCovXG4gICAgICAvLyBwZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5X2RldGFpbF9kYXRhdHlwZTpbe1xuICAgICAgLy8gICBrZXk6IFwiaW1hZ2VzXCIsXG4gICAgICAvLyAgIHZhbHVlOiAnaW1hZ2UnLFxuICAgICAgLy8gICBmaWxldXJsOiAnaHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9jcm1maWxlcy5pbmZsdXhob3N0c2VydmVyL3NlcnZpY2VzLycgICAgXG4gICAgICAvLyB9XSxcbiAgICAgIGRldGFpbF9oZWFkZXI6WydfaWQnXVxuXG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG5cblxuIl19