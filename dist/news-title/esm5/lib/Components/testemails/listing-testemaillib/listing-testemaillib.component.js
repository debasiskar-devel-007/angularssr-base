/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ListingTestemaillibComponent = /** @class */ (function () {
    // ====================================================================================================
    function ListingTestemaillibComponent() {
        this.loader = true;
    }
    Object.defineProperty(ListingTestemaillibComponent.prototype, "config", {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListingTestemaillibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListingTestemaillibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-testemaillib',
                    template: "<mat-card *ngIf=\"loader==true\">\r\n  <mat-spinner class=\"spinner\"></mat-spinner>\r\n</mat-card>\r\n\r\n\r\n\r\n<!-- ------------------------lib listing being called------------------------ -->\r\n<mat-card *ngIf=\"loader==false\">\r\n  <lib-listing class=\"formfilterdiv\"\r\n      *ngIf=\"senderConfigForm.datasource !=null && senderConfigForm.datasource.length > 0\"\r\n      [datasource]=\"senderConfigForm.datasource\" [skip]=\"senderConfigForm.listArray_skip\"\r\n      [modify_header_array]=\"senderConfigForm.listArray_modify_header\" [sourcedata]=\"senderConfigForm.tableName\"\r\n      [statusarr]=\"senderConfigForm.statusarr\" [jwttoken]=\"senderConfigForm.jwtToken\"\r\n      [apiurl]=\"senderConfigForm.apiUrl\" [editroute]=\"senderConfigForm.editUrl\"\r\n      [deleteendpoint]=\"senderConfigForm.deleteEndPoint\">\r\n  </lib-listing>\r\n<!-- ----------------------------------------------------------------------------->\r\n\r\n  <h2 *ngIf=\"senderConfigForm.datasource.length == 0\">No record found.</h2>\r\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListingTestemaillibComponent.ctorParameters = function () { return []; };
    ListingTestemaillibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingTestemaillibComponent;
}());
export { ListingTestemaillibComponent };
if (false) {
    /** @type {?} */
    ListingTestemaillibComponent.prototype.senderConfigForm;
    /** @type {?} */
    ListingTestemaillibComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy10ZXN0ZW1haWxsaWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV3cy10aXRsZS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL3Rlc3RlbWFpbHMvbGlzdGluZy10ZXN0ZW1haWxsaWIvbGlzdGluZy10ZXN0ZW1haWxsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RDtJQXFDRSx1R0FBdUc7SUFFdkc7UUE5Qk8sV0FBTSxHQUFZLElBQUksQ0FBQztJQThCZCxDQUFDO0lBdkJqQixzQkFDSSxnREFBTTtRQVBWLHdHQUF3RztRQUt4Ryx3R0FBd0c7Ozs7Ozs7O1FBQ3hHLFVBQ1csWUFBaUI7WUFFMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHO2dCQUN0QixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQy9CLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtnQkFDdkMsVUFBVSxFQUFFLFlBQVksQ0FBQyxVQUFVO2dCQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7Z0JBQ2pDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUM7Z0JBQ25FLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUM7Z0JBQzdFLHVCQUF1QixFQUFFLE9BQU87Z0JBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDckUsU0FBUyxFQUFFLFlBQVksQ0FBQyxjQUFjO2dCQUN0QyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87Z0JBQzdCLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtnQkFDL0IsY0FBYyxFQUFFLFlBQVksQ0FBQyxjQUFjO2dCQUMzQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7YUFFeEIsQ0FBQTtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7O0lBS0QsK0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQywyaENBQW9EOztpQkFFckQ7Ozs7O3lCQVlFLEtBQUs7O0lBNEJOLG1DQUFDO0NBQUEsQUE1Q0gsSUE0Q0c7U0F2Q1UsNEJBQTRCOzs7SUFHdkMsd0RBQTZCOztJQUM3Qiw4Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZy10ZXN0ZW1haWxsaWInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLXRlc3RlbWFpbGxpYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy10ZXN0ZW1haWxsaWIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0aW5nVGVzdGVtYWlsbGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBwdWJsaWMgc2VuZGVyQ29uZmlnRm9ybTogYW55O1xyXG4gIHB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09SW5wdXQgRm9yIExpYiBMaXN0aW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBASW5wdXQoKVxyXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcclxuICAgXHJcbiAgICB0aGlzLnNlbmRlckNvbmZpZ0Zvcm0gPSB7XHJcbiAgICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXHJcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcclxuICAgICAgZGF0YXNvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsXHJcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWREYXRhLnRhYmxlTmFtZSxcclxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJpZFwiLCBcInVwZGF0ZWRfYXRcIl0sXHJcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwibmFtZVwiOiBcIlNlbmRlcidzIE5hbWVcIiwgXCJlbWFpbFwiOlwiU2VuZGVyJ3MgRW1haWxcIn0sXHJcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXHJcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxyXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcclxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXHJcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXHJcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXHJcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xyXG4gIH1cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBcclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICJdfQ==