/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var TestimonialComponent = /** @class */ (function () {
    // ====================================================================================================
    function TestimonialComponent() {
        this.loader = true;
    }
    Object.defineProperty(TestimonialComponent.prototype, "config", {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TestimonialComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TestimonialComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-testimonial',
                    template: "<mat-card *ngIf=\"loader==true\">\r\n        <mat-spinner class=\"spinner\"></mat-spinner>\r\n    </mat-card>\r\n    \r\n    \r\n    \r\n    <!-- ------------------------lib listing being called------------------------ -->\r\n    <mat-card *ngIf=\"loader==false\">\r\n        <lib-listing class=\"formfilterdiv\"\r\n            *ngIf=\"testimonialListConfig.datasource !=null && testimonialListConfig.datasource.length > 0\"\r\n            [datasource]=\"testimonialListConfig.datasource\" [skip]=\"testimonialListConfig.listArray_skip\"\r\n            [modify_header_array]=\"testimonialListConfig.listArray_modify_header\" [sourcedata]=\"testimonialListConfig.tableName\"\r\n            [statusarr]=\"testimonialListConfig.statusarr\" [jwttoken]=\"testimonialListConfig.jwtToken\"\r\n            [apiurl]=\"testimonialListConfig.apiUrl\" [editroute]=\"testimonialListConfig.editUrl\"\r\n            [deleteendpoint]=\"testimonialListConfig.deleteEndPoint\"\r\n            [date_search_source]=\"testimonialListConfig.view\"\r\n           [date_search_endpoint]=\"testimonialListConfig.listEndPoint\"\r\n           [search_settings]=\"testimonialListConfig.search_settings\"\r\n           [detail_datatype]=\"testimonialListConfig.pendingmodelapplicationarray_detail_datatype\">\r\n        </lib-listing>\r\n    <!-- ----------------------------------------------------------------------------->\r\n    \r\n        <h2 *ngIf=\"testimonialListConfig.datasource.length == 0\">No record found.</h2>\r\n    </mat-card>",
                    styles: [".addbtn{display:block;width:170px;margin:10px;background:#3f50b5!important;color:#fff;float:right}.btnwrapper{display:flex;justify-content:flex-end}"]
                }] }
    ];
    /** @nocollapse */
    TestimonialComponent.ctorParameters = function () { return []; };
    TestimonialComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return TestimonialComponent;
}());
export { TestimonialComponent };
if (false) {
    /** @type {?} */
    TestimonialComponent.prototype.testimonialListConfig;
    /** @type {?} */
    TestimonialComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGltb25pYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVzdGltb25pYWwvIiwic291cmNlcyI6WyJsaWIvdGVzdGltb25pYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdqRTtJQThDRSx1R0FBdUc7SUFFdkc7UUF2Q08sV0FBTSxHQUFZLElBQUksQ0FBQztJQXVDZCxDQUFDO0lBaENqQixzQkFDSSx3Q0FBTTtRQVBWLHdHQUF3RztRQUt4Ryx3R0FBd0c7Ozs7Ozs7O1FBQ3hHLFVBQ1csWUFBaUI7WUFFMUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHO2dCQUMzQixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQy9CLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtnQkFDdkMsVUFBVSxFQUFFLFlBQVksQ0FBQyxVQUFVO2dCQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7Z0JBQ2pDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUMsT0FBTyxDQUFDO2dCQUMzRSx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7Z0JBQ25LLHVCQUF1QixFQUFFLE9BQU87Z0JBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDckUsU0FBUyxFQUFFLFlBQVksQ0FBQyxjQUFjO2dCQUN0QyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87Z0JBQzdCLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtnQkFDL0IsY0FBYyxFQUFFLFlBQVksQ0FBQyxjQUFjO2dCQUMzQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7Z0JBQ3ZCLGVBQWUsRUFBQztvQkFDZCxVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO29CQUN6RyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ25JOztnQkFFQSw0Q0FBNEMsRUFBRSxDQUFDO3dCQUM5QyxHQUFHLEVBQUUsT0FBTzt3QkFDWixLQUFLLEVBQUUsT0FBTzt3QkFDZCxPQUFPLEVBQUUsMkVBQTJFLENBQWEsY0FBYztxQkFDaEgsQ0FBQzthQUNILENBQUE7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTs7OztJQUtELHVDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQW5ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsdS9DQUF5Qzs7aUJBRTFDOzs7Ozt5QkFZRSxLQUFLOztJQXFDUiwyQkFBQztDQUFBLEFBckRELElBcURDO1NBaERZLG9CQUFvQjs7O0lBRy9CLHFEQUFrQzs7SUFDbEMsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi10ZXN0aW1vbmlhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICd0ZXN0aW1vbmlhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3Rlc3RpbW9uaWFsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdGltb25pYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHB1YmxpYyB0ZXN0aW1vbmlhbExpc3RDb25maWc6IGFueTtcclxuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbmZpZyhyZWNlaXZlZERhdGE6IGFueSkge1xyXG4gICBcclxuICAgIHRoaXMudGVzdGltb25pYWxMaXN0Q29uZmlnID0ge1xyXG4gICAgICBhcGlVcmw6IHJlY2VpdmVkRGF0YS5hcGlCYXNlVXJsLFxyXG4gICAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXHJcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxyXG4gICAgICB0YWJsZU5hbWU6IHJlY2VpdmVkRGF0YS50YWJsZU5hbWUsXHJcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwiaWRcIiwgXCJ1cGRhdGVkX2F0XCIsXCJpbWFnZVwiXSxcclxuICAgICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHsgXCJuYW1lXCI6IFwiQ3VzdG9tZXIvVXNlciBOYW1lXCIsIFwiZW1haWxcIjogXCJDdXN0b21lci9Vc2VyIEVtYWlsXCIsIFwiZGVzY3JpcHRpb25cIjogXCJUZXN0aW1vbmlhbFwiLCBcInByaW9yaXR5XCI6IFwiUHJpb3JpdHlcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiB9LFxyXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxyXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcclxuICAgICAgdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXHJcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxyXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxyXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxyXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcclxuICAgICAgc2VhcmNoX3NldHRpbmdzOntcclxuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJjdXN0b21lciBuYW1lLi4uXCIsIGZpZWxkOiAnbmFtZScgfSx7IGxhYmVsOiBcImN1c3RvbWVyIGVtYWlsLi4uXCIsIGZpZWxkOiAnZW1haWwnIH1dLFxyXG4gICAgICAgIHNlbGVjdHNlYXJjaDogW3sgbGFiZWw6ICdTZWFyY2ggQnkgU3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSB9XSxcclxuICAgICAgfSxcclxuICAgICAgIC8qU2hvd2luZyBJbWFnZSBpbiB0aGUgTW9kYWwqL1xyXG4gICAgICAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFt7XHJcbiAgICAgICAga2V5OiBcImltYWdlXCIsXHJcbiAgICAgICAgdmFsdWU6ICdpbWFnZScsXHJcbiAgICAgICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZXN0aW1vbmlhbC8nICAgICAgICAgICAgIC8vIEltYWdlIHBhdGggXHJcbiAgICAgIH1dLFxyXG4gICAgfVxyXG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcclxuICB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuIl19