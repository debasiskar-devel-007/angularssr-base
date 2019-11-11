/**
 * @fileoverview added by tsickle
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
            listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image"],
            listArray_modify_header: { "name": "Customer/User Name", "email": "Customer/User Email", "description": "Testimonial", "priority": "Priority", "status": "Status" },
            admintablenameTableName: "admin",
            statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
            updateurl: receivedData.updateEndpoint,
            editUrl: receivedData.editUrl,
            jwtToken: receivedData.jwtToken,
            deleteEndPoint: receivedData.deleteEndPoint,
            view: receivedData.view,
            search_settings: {
                textsearch: [{ label: "customer name...", field: 'name' }, { label: "customer email...", field: 'email' }],
                selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
            },
            /*Showing Image in the Modal*/
            pendingmodelapplicationarray_detail_datatype: [{
                    key: "image",
                    value: 'image',
                    fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/testimonial/' // Image path 
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
TestimonialComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-testimonial',
                template: "<mat-card *ngIf=\"loader==true\">\r\n        <mat-spinner class=\"spinner\"></mat-spinner>\r\n    </mat-card>\r\n    \r\n    \r\n    \r\n    <!-- ------------------------lib listing being called------------------------ -->\r\n    <mat-card *ngIf=\"loader==false\">\r\n        <lib-listing class=\"formfilterdiv\"\r\n            *ngIf=\"testimonialListConfig.datasource !=null && testimonialListConfig.datasource.length > 0\"\r\n            [datasource]=\"testimonialListConfig.datasource\" [skip]=\"testimonialListConfig.listArray_skip\"\r\n            [modify_header_array]=\"testimonialListConfig.listArray_modify_header\" [sourcedata]=\"testimonialListConfig.tableName\"\r\n            [statusarr]=\"testimonialListConfig.statusarr\" [jwttoken]=\"testimonialListConfig.jwtToken\"\r\n            [apiurl]=\"testimonialListConfig.apiUrl\" [editroute]=\"testimonialListConfig.editUrl\"\r\n            [deleteendpoint]=\"testimonialListConfig.deleteEndPoint\"\r\n            [date_search_source]=\"testimonialListConfig.view\"\r\n           [date_search_endpoint]=\"testimonialListConfig.listEndPoint\"\r\n           [search_settings]=\"testimonialListConfig.search_settings\"\r\n           [detail_datatype]=\"testimonialListConfig.pendingmodelapplicationarray_detail_datatype\">\r\n        </lib-listing>\r\n    <!-- ----------------------------------------------------------------------------->\r\n    \r\n        <h2 *ngIf=\"testimonialListConfig.datasource.length == 0\">No record found.</h2>\r\n    </mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGltb25pYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVzdGltb25pYWwvIiwic291cmNlcyI6WyJsaWIvdGVzdGltb25pYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVFqRSxNQUFNLE9BQU8sb0JBQW9COztJQTJDL0I7UUF2Q08sV0FBTSxHQUFZLElBQUksQ0FBQztJQXVDZCxDQUFDOzs7Ozs7O0lBaENqQixJQUNJLE1BQU0sQ0FBQyxZQUFpQjtRQUUxQixJQUFJLENBQUMscUJBQXFCLEdBQUc7WUFDM0IsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVO1lBQy9CLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtZQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDbkMsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO1lBQ2pDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUMsT0FBTyxDQUFDO1lBQzNFLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtZQUNuSyx1QkFBdUIsRUFBRSxPQUFPO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztZQUNyRSxTQUFTLEVBQUUsWUFBWSxDQUFDLGNBQWM7WUFDdEMsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPO1lBQzdCLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtZQUMvQixjQUFjLEVBQUUsWUFBWSxDQUFDLGNBQWM7WUFDM0MsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJO1lBQ3ZCLGVBQWUsRUFBQztnQkFDZCxVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUN6RyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDbkk7O1lBRUEsNENBQTRDLEVBQUUsQ0FBQztvQkFDOUMsR0FBRyxFQUFFLE9BQU87b0JBQ1osS0FBSyxFQUFFLE9BQU87b0JBQ2QsT0FBTyxFQUFFLDJFQUEyRSxDQUFhLGNBQWM7aUJBQ2hILENBQUM7U0FDSCxDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUtELFFBQVE7SUFDUixDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHUvQ0FBeUM7O2FBRTFDOzs7OztxQkFZRSxLQUFLOzs7O0lBUk4scURBQWtDOztJQUNsQyxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXRlc3RpbW9uaWFsJyxcclxuICB0ZW1wbGF0ZVVybDogJ3Rlc3RpbW9uaWFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsndGVzdGltb25pYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXN0aW1vbmlhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgcHVibGljIHRlc3RpbW9uaWFsTGlzdENvbmZpZzogYW55O1xyXG4gIHB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgQElucHV0KClcclxuICBzZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7XHJcbiAgIFxyXG4gICAgdGhpcy50ZXN0aW1vbmlhbExpc3RDb25maWcgPSB7XHJcbiAgICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXHJcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcclxuICAgICAgZGF0YXNvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsXHJcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWREYXRhLnRhYmxlTmFtZSxcclxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJpZFwiLCBcInVwZGF0ZWRfYXRcIixcImltYWdlXCJdLFxyXG4gICAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjogeyBcIm5hbWVcIjogXCJDdXN0b21lci9Vc2VyIE5hbWVcIiwgXCJlbWFpbFwiOiBcIkN1c3RvbWVyL1VzZXIgRW1haWxcIiwgXCJkZXNjcmlwdGlvblwiOiBcIlRlc3RpbW9uaWFsXCIsIFwicHJpb3JpdHlcIjogXCJQcmlvcml0eVwiLCBcInN0YXR1c1wiOiBcIlN0YXR1c1wiIH0sXHJcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXHJcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxyXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcclxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXHJcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXHJcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXHJcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxyXG4gICAgICBzZWFyY2hfc2V0dGluZ3M6e1xyXG4gICAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcImN1c3RvbWVyIG5hbWUuLi5cIiwgZmllbGQ6ICduYW1lJyB9LHsgbGFiZWw6IFwiY3VzdG9tZXIgZW1haWwuLi5cIiwgZmllbGQ6ICdlbWFpbCcgfV0sXHJcbiAgICAgICAgc2VsZWN0c2VhcmNoOiBbeyBsYWJlbDogJ1NlYXJjaCBCeSBTdGF0dXMnLCBmaWVsZDogJ3N0YXR1cycsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dIH1dLFxyXG4gICAgICB9LFxyXG4gICAgICAgLypTaG93aW5nIEltYWdlIGluIHRoZSBNb2RhbCovXHJcbiAgICAgICBwZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5X2RldGFpbF9kYXRhdHlwZTogW3tcclxuICAgICAgICBrZXk6IFwiaW1hZ2VcIixcclxuICAgICAgICB2YWx1ZTogJ2ltYWdlJyxcclxuICAgICAgICBmaWxldXJsOiAnaHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9jcm1maWxlcy5pbmZsdXhob3N0c2VydmVyL3Rlc3RpbW9uaWFsLycgICAgICAgICAgICAgLy8gSW1hZ2UgcGF0aCBcclxuICAgICAgfV0sXHJcbiAgICB9XHJcbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xyXG4gIH1cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=