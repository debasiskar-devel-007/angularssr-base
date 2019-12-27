/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/subscriptioncategory/listing-subcategory/listing-subcategory.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ListingSubcategoryComponent {
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
        this.SubsCatListConfig = {
            apiUrl: receivedData.apiBaseUrl,
            listEndPoint: receivedData.listEndPoint,
            datasource: receivedData.datasource,
            tableName: receivedData.tableName,
            listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image"],
            listArray_modify_header: { "name": "Name", "priority": "Priority", "status": "Status", "date_added": "Date" },
            admintablenameTableName: "admin",
            statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
            updateurl: receivedData.updateEndpoint,
            editUrl: receivedData.editUrl,
            jwtToken: receivedData.jwtToken,
            deleteEndPoint: receivedData.deleteEndPoint,
            view: receivedData.view,
            search_settings: {
                textsearch: [{ label: "name...", field: 'name' }],
                selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
            },
            /*Showing Image in the Modal*/
            pendingmodelapplicationarray_detail_datatype: [{
                    key: "image",
                    value: 'image',
                    fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/testimonial/' // Image path 
                }],
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
ListingSubcategoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-listing-subcategory',
                template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"SubsCatListConfig.datasource !=null && SubsCatListConfig.datasource.length > 0\"\n        [datasource]=\"SubsCatListConfig.datasource\" [skip]=\"SubsCatListConfig.listArray_skip\"\n        [modify_header_array]=\"SubsCatListConfig.listArray_modify_header\" [sourcedata]=\"SubsCatListConfig.tableName\"\n        [statusarr]=\"SubsCatListConfig.statusarr\" [jwttoken]=\"SubsCatListConfig.jwtToken\"\n        [apiurl]=\"SubsCatListConfig.apiUrl\" [editroute]=\"SubsCatListConfig.editUrl\"\n        [deleteendpoint]=\"SubsCatListConfig.deleteEndPoint\"\n        [date_search_source]=\"SubsCatListConfig.view\"\n       [date_search_endpoint]=\"SubsCatListConfig.listEndPoint\"\n       [search_settings]=\"SubsCatListConfig.search_settings\"\n       [detail_datatype]=\"SubsCatListConfig.pendingmodelapplicationarray_detail_datatype\"\n       [detail_skip_array]=\"SubsCatListConfig.detail_header\">\n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"SubsCatListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                styles: [""]
            }] }
];
/** @nocollapse */
ListingSubcategoryComponent.ctorParameters = () => [];
ListingSubcategoryComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListingSubcategoryComponent.prototype.SubsCatListConfig;
    /** @type {?} */
    ListingSubcategoryComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1zdWJjYXRlZ29yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL3N1YnNjcmlwdGlvbmNhdGVnb3J5L2xpc3Rpbmctc3ViY2F0ZWdvcnkvbGlzdGluZy1zdWJjYXRlZ29yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU94RCxNQUFNLE9BQU8sMkJBQTJCOztJQTJDeEM7UUF4Q08sV0FBTSxHQUFZLElBQUksQ0FBQztJQXdDZCxDQUFDOzs7Ozs7O0lBakNqQixJQUNJLE1BQU0sQ0FBQyxZQUFpQjtRQUUxQixJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDdkIsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVO1lBQy9CLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtZQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDbkMsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO1lBQ2pDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUMsT0FBTyxDQUFDO1lBQzNFLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLE1BQU0sRUFBQztZQUMzRyx1QkFBdUIsRUFBRSxPQUFPO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztZQUNyRSxTQUFTLEVBQUUsWUFBWSxDQUFDLGNBQWM7WUFDdEMsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPO1lBQzdCLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtZQUMvQixjQUFjLEVBQUUsWUFBWSxDQUFDLGNBQWM7WUFDM0MsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJO1lBQ3ZCLGVBQWUsRUFBQztnQkFDZCxVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUNqRCxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDbkk7O1lBRUEsNENBQTRDLEVBQUUsQ0FBQztvQkFDOUMsR0FBRyxFQUFFLE9BQU87b0JBQ1osS0FBSyxFQUFFLE9BQU87b0JBQ2QsT0FBTyxFQUFFLDJFQUEyRSxDQUFhLGNBQWM7aUJBQ2hILENBQUM7WUFDRixhQUFhLEVBQUMsQ0FBQyxLQUFLLENBQUM7U0FDdEIsQ0FBQTtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFLRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBbkRBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyw2MkNBQW1EOzthQUVwRDs7Ozs7cUJBV0EsS0FBSzs7OztJQVJOLHdEQUE4Qjs7SUFDOUIsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxpc3Rpbmctc3ViY2F0ZWdvcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdGluZy1zdWJjYXRlZ29yeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3Rpbmctc3ViY2F0ZWdvcnkuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RpbmdTdWJjYXRlZ29yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxucHVibGljIFN1YnNDYXRMaXN0Q29uZmlnOiBhbnk7XG5wdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5ASW5wdXQoKVxuc2V0IGNvbmZpZyhyZWNlaXZlZERhdGE6IGFueSkge1xuIFxuICB0aGlzLlN1YnNDYXRMaXN0Q29uZmlnID0ge1xuICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXG4gICAgbGlzdEVuZFBvaW50OiByZWNlaXZlZERhdGEubGlzdEVuZFBvaW50LFxuICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgIHRhYmxlTmFtZTogcmVjZWl2ZWREYXRhLnRhYmxlTmFtZSxcbiAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcImlkXCIsIFwidXBkYXRlZF9hdFwiLFwiaW1hZ2VcIl0sXG4gICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHsgXCJuYW1lXCI6IFwiTmFtZVwiLCBcInByaW9yaXR5XCI6IFwiUHJpb3JpdHlcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiAsXCJkYXRlX2FkZGVkXCI6XCJEYXRlXCJ9LFxuICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXG4gICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcbiAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxuICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxuICAgIHNlYXJjaF9zZXR0aW5nczp7XG4gICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJuYW1lLi4uXCIsIGZpZWxkOiAnbmFtZScgfV0sXG4gICAgICBzZWxlY3RzZWFyY2g6IFt7IGxhYmVsOiAnU2VhcmNoIEJ5IFN0YXR1cycsIGZpZWxkOiAnc3RhdHVzJywgdmFsdWVzOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0gfV0sXG4gICAgfSxcbiAgICAgLypTaG93aW5nIEltYWdlIGluIHRoZSBNb2RhbCovXG4gICAgIHBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXlfZGV0YWlsX2RhdGF0eXBlOiBbe1xuICAgICAga2V5OiBcImltYWdlXCIsXG4gICAgICB2YWx1ZTogJ2ltYWdlJyxcbiAgICAgIGZpbGV1cmw6ICdodHRwczovL3MzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2NybWZpbGVzLmluZmx1eGhvc3RzZXJ2ZXIvdGVzdGltb25pYWwvJyAgICAgICAgICAgICAvLyBJbWFnZSBwYXRoIFxuICAgIH1dLFxuICAgIGRldGFpbF9oZWFkZXI6WydfaWQnXVxuICB9XG4gIHRoaXMubG9hZGVyID0gZmFsc2U7XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0cnVjdG9yKCkgeyB9XG5cbm5nT25Jbml0KCkge1xufVxuXG59XG5cblxuIl19