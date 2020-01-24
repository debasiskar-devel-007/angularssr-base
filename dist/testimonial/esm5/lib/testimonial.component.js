/**
 * @fileoverview added by tsickle
 * Generated from: lib/testimonial.component.ts
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
                    template: "<mat-card *ngIf=\"loader==true\">\n        <mat-spinner class=\"spinner\"></mat-spinner>\n    </mat-card>\n    \n    \n    \n    <!-- ------------------------lib listing being called------------------------ -->\n    <mat-card *ngIf=\"loader==false\">\n        <lib-listing class=\"formfilterdiv\"\n            *ngIf=\"testimonialListConfig.datasource !=null && testimonialListConfig.datasource.length > 0\"\n            [datasource]=\"testimonialListConfig.datasource\" [skip]=\"testimonialListConfig.listArray_skip\"\n            [modify_header_array]=\"testimonialListConfig.listArray_modify_header\" [sourcedata]=\"testimonialListConfig.tableName\"\n            [statusarr]=\"testimonialListConfig.statusarr\" [jwttoken]=\"testimonialListConfig.jwtToken\"\n            [apiurl]=\"testimonialListConfig.apiUrl\" [editroute]=\"testimonialListConfig.editUrl\"\n            [deleteendpoint]=\"testimonialListConfig.deleteEndPoint\"\n            [date_search_source]=\"testimonialListConfig.view\"\n           [date_search_endpoint]=\"testimonialListConfig.listEndPoint\"\n           [search_settings]=\"testimonialListConfig.search_settings\"\n           [detail_datatype]=\"testimonialListConfig.pendingmodelapplicationarray_detail_datatype\"\n           [detail_skip_array]=\"testimonialListConfig.detail_header\">\n        </lib-listing>\n    <!-- ----------------------------------------------------------------------------->\n    \n        <h2 *ngIf=\"testimonialListConfig.datasource.length == 0\">No record found.</h2>\n    </mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGltb25pYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVzdGltb25pYWwtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL3Rlc3RpbW9uaWFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2pFO0lBK0NFLHVHQUF1RztJQUV2RztRQXhDTyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBd0NkLENBQUM7SUFqQ2pCLHNCQUNJLHdDQUFNO1FBUFYsd0dBQXdHO1FBS3hHLHdHQUF3Rzs7Ozs7Ozs7UUFDeEcsVUFDVyxZQUFpQjtZQUUxQixJQUFJLENBQUMscUJBQXFCLEdBQUc7Z0JBQzNCLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO2dCQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQ25DLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FBUztnQkFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sQ0FBQztnQkFDaEcsdUJBQXVCLEVBQUUsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7Z0JBQzdLLHVCQUF1QixFQUFFLE9BQU87Z0JBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDckUsU0FBUyxFQUFFLFlBQVksQ0FBQyxjQUFjO2dCQUN0QyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87Z0JBQzdCLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtnQkFDL0IsY0FBYyxFQUFFLFlBQVksQ0FBQyxjQUFjO2dCQUMzQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7Z0JBQ3ZCLGVBQWUsRUFBQztvQkFDZCxVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUMsRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO29CQUN2SCxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ25JOztnQkFFQSw0Q0FBNEMsRUFBRSxDQUFDO3dCQUM5QyxHQUFHLEVBQUUsT0FBTzt3QkFDWixLQUFLLEVBQUUsT0FBTzt3QkFDZCxPQUFPLEVBQUUsMkVBQTJFLENBQWEsY0FBYztxQkFDaEgsQ0FBQztnQkFDRixhQUFhLEVBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEIsQ0FBQTtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7O0lBS0QsdUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBcERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixpaERBQXlDOztpQkFFMUM7Ozs7O3lCQVlFLEtBQUs7O0lBc0NSLDJCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FqRFksb0JBQW9COzs7SUFHL0IscURBQWtDOztJQUNsQyxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10ZXN0aW1vbmlhbCcsXG4gIHRlbXBsYXRlVXJsOiAndGVzdGltb25pYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGVzdGltb25pYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RpbW9uaWFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgdGVzdGltb25pYWxMaXN0Q29uZmlnOiBhbnk7XG4gIHB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbiAgIFxuICAgIHRoaXMudGVzdGltb25pYWxMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJpZFwiLCBcInVwZGF0ZWRfYXRcIixcImltYWdlXCIsXCJkZXNjcmlwdGlvblwiLFwibmFtZVwiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwibmFtZSBjb3B5XCI6IFwiQ3VzdG9tZXIvVXNlciBOYW1lXCIsIFwiZW1haWxcIjogXCJDdXN0b21lci9Vc2VyIEVtYWlsXCIsIFwiZGVzY3JpcHRpb24gaHRtbFwiOiBcIlRlc3RpbW9uaWFsXCIsIFwicHJpb3JpdHlcIjogXCJQcmlvcml0eVwiLCBcInN0YXR1c1wiOiBcIlN0YXR1c1wiIH0sXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxuICAgICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcbiAgICAgIHNlYXJjaF9zZXR0aW5nczp7XG4gICAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBCeSBDdXN0b21lciBOYW1lXCIsIGZpZWxkOiAnbmFtZScgfSx7IGxhYmVsOiBcIlNlYXJjaCBCeSBDdXN0b21lciBFbWFpbFwiLCBmaWVsZDogJ2VtYWlsJyB9XSxcbiAgICAgICAgc2VsZWN0c2VhcmNoOiBbeyBsYWJlbDogJ1NlYXJjaCBCeSBTdGF0dXMnLCBmaWVsZDogJ3N0YXR1cycsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dIH1dLFxuICAgICAgfSxcbiAgICAgICAvKlNob3dpbmcgSW1hZ2UgaW4gdGhlIE1vZGFsKi9cbiAgICAgICBwZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5X2RldGFpbF9kYXRhdHlwZTogW3tcbiAgICAgICAga2V5OiBcImltYWdlXCIsXG4gICAgICAgIHZhbHVlOiAnaW1hZ2UnLFxuICAgICAgICBmaWxldXJsOiAnaHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9jcm1maWxlcy5pbmZsdXhob3N0c2VydmVyL3Rlc3RpbW9uaWFsLycgICAgICAgICAgICAgLy8gSW1hZ2UgcGF0aCBcbiAgICAgIH1dLFxuICAgICAgZGV0YWlsX2hlYWRlcjpbJ19pZCddXG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG5cbiJdfQ==