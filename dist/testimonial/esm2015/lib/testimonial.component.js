/**
 * @fileoverview added by tsickle
 * Generated from: lib/testimonial.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class TestimonialComponent {
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
        this.testimonialListConfig = {
            apiUrl: receivedData.apiBaseUrl,
            listEndPoint: receivedData.listEndPoint,
            datasource: receivedData.datasource,
            tableName: receivedData.tableName,
            listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image", "description", "name"],
            listArray_modify_header: { "name copy": "Customer/User Name", "email": "Customer/User Email", "description html": "Testimonial", "priority": "Priority", "status": "Status" },
            admintablenameTableName: "admin",
            statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
            updateurl: receivedData.updateEndpoint,
            editUrl: receivedData.editUrl,
            jwtToken: receivedData.jwtToken,
            deleteEndPoint: receivedData.deleteEndPoint,
            view: receivedData.view,
            search_settings: {
                textsearch: [{ label: "Search By Customer Name", field: 'name' }, { label: "Search By Customer Email", field: 'email' }],
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
TestimonialComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-testimonial',
                template: "<mat-card *ngIf=\"loader==true\">\n        <mat-spinner class=\"spinner\"></mat-spinner>\n    </mat-card>\n    \n    \n    \n    <!-- ------------------------lib listing being called------------------------ -->\n    <mat-card *ngIf=\"loader==false\">\n        <lib-listing class=\"formfilterdiv\"\n            *ngIf=\"testimonialListConfig.datasource !=null && testimonialListConfig.datasource.length > 0\"\n            [datasource]=\"testimonialListConfig.datasource\" [skip]=\"testimonialListConfig.listArray_skip\"\n            [modify_header_array]=\"testimonialListConfig.listArray_modify_header\" [sourcedata]=\"testimonialListConfig.tableName\"\n            [statusarr]=\"testimonialListConfig.statusarr\" [jwttoken]=\"testimonialListConfig.jwtToken\"\n            [apiurl]=\"testimonialListConfig.apiUrl\" [editroute]=\"testimonialListConfig.editUrl\"\n            [deleteendpoint]=\"testimonialListConfig.deleteEndPoint\"\n            [date_search_source]=\"testimonialListConfig.view\"\n           [date_search_endpoint]=\"testimonialListConfig.listEndPoint\"\n           [search_settings]=\"testimonialListConfig.search_settings\"\n           [detail_datatype]=\"testimonialListConfig.pendingmodelapplicationarray_detail_datatype\"\n           [detail_skip_array]=\"testimonialListConfig.detail_header\">\n        </lib-listing>\n    <!-- ----------------------------------------------------------------------------->\n    \n        <h2 *ngIf=\"testimonialListConfig.datasource.length == 0\">No record found.</h2>\n    </mat-card>",
                styles: [".addbtn{display:block;width:170px;margin:10px;background:#3f50b5!important;color:#fff;float:right}.btnwrapper{display:flex;justify-content:flex-end}"]
            }] }
];
/** @nocollapse */
TestimonialComponent.ctorParameters = () => [];
TestimonialComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TestimonialComponent.prototype.testimonialListConfig;
    /** @type {?} */
    TestimonialComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGltb25pYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVzdGltb25pYWwtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL3Rlc3RpbW9uaWFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBUWpFLE1BQU0sT0FBTyxvQkFBb0I7O0lBNEMvQjtRQXhDTyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBd0NkLENBQUM7Ozs7Ozs7SUFqQ2pCLElBQ0ksTUFBTSxDQUFDLFlBQWlCO1FBRTFCLElBQUksQ0FBQyxxQkFBcUIsR0FBRztZQUMzQixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO1lBQ3ZDLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtZQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7WUFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sQ0FBQztZQUNoRyx1QkFBdUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtZQUM3Syx1QkFBdUIsRUFBRSxPQUFPO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztZQUNyRSxTQUFTLEVBQUUsWUFBWSxDQUFDLGNBQWM7WUFDdEMsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPO1lBQzdCLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtZQUMvQixjQUFjLEVBQUUsWUFBWSxDQUFDLGNBQWM7WUFDM0MsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJO1lBQ3ZCLGVBQWUsRUFBQztnQkFDZCxVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUMsRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUN2SCxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDbkk7O1lBRUEsNENBQTRDLEVBQUUsQ0FBQztvQkFDOUMsR0FBRyxFQUFFLE9BQU87b0JBQ1osS0FBSyxFQUFFLE9BQU87b0JBQ2QsT0FBTyxFQUFFLDJFQUEyRSxDQUFhLGNBQWM7aUJBQ2hILENBQUM7WUFDRixhQUFhLEVBQUMsQ0FBQyxLQUFLLENBQUM7U0FDdEIsQ0FBQTtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFLRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixpaERBQXlDOzthQUUxQzs7Ozs7cUJBWUUsS0FBSzs7OztJQVJOLHFEQUFrQzs7SUFDbEMsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdGVzdGltb25pYWwnLFxuICB0ZW1wbGF0ZVVybDogJ3Rlc3RpbW9uaWFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rlc3RpbW9uaWFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZXN0aW1vbmlhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHRlc3RpbW9uaWFsTGlzdENvbmZpZzogYW55O1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7XG4gICBcbiAgICB0aGlzLnRlc3RpbW9uaWFsTGlzdENvbmZpZyA9IHtcbiAgICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXG4gICAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXG4gICAgICBkYXRhc291cmNlOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSxcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWREYXRhLnRhYmxlTmFtZSxcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwiaWRcIiwgXCJ1cGRhdGVkX2F0XCIsXCJpbWFnZVwiLFwiZGVzY3JpcHRpb25cIixcIm5hbWVcIl0sXG4gICAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjogeyBcIm5hbWUgY29weVwiOiBcIkN1c3RvbWVyL1VzZXIgTmFtZVwiLCBcImVtYWlsXCI6IFwiQ3VzdG9tZXIvVXNlciBFbWFpbFwiLCBcImRlc2NyaXB0aW9uIGh0bWxcIjogXCJUZXN0aW1vbmlhbFwiLCBcInByaW9yaXR5XCI6IFwiUHJpb3JpdHlcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiB9LFxuICAgICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxuICAgICAgdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXG4gICAgICBlZGl0VXJsOiByZWNlaXZlZERhdGEuZWRpdFVybCxcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxuICAgICAgdmlldzogcmVjZWl2ZWREYXRhLnZpZXcsXG4gICAgICBzZWFyY2hfc2V0dGluZ3M6e1xuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggQnkgQ3VzdG9tZXIgTmFtZVwiLCBmaWVsZDogJ25hbWUnIH0seyBsYWJlbDogXCJTZWFyY2ggQnkgQ3VzdG9tZXIgRW1haWxcIiwgZmllbGQ6ICdlbWFpbCcgfV0sXG4gICAgICAgIHNlbGVjdHNlYXJjaDogW3sgbGFiZWw6ICdTZWFyY2ggQnkgU3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSB9XSxcbiAgICAgIH0sXG4gICAgICAgLypTaG93aW5nIEltYWdlIGluIHRoZSBNb2RhbCovXG4gICAgICAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFt7XG4gICAgICAgIGtleTogXCJpbWFnZVwiLFxuICAgICAgICB2YWx1ZTogJ2ltYWdlJyxcbiAgICAgICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZXN0aW1vbmlhbC8nICAgICAgICAgICAgIC8vIEltYWdlIHBhdGggXG4gICAgICB9XSxcbiAgICAgIGRldGFpbF9oZWFkZXI6WydfaWQnXVxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cblxuXG4iXX0=