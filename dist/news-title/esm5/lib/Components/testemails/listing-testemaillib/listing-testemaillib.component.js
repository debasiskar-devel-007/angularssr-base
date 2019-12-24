/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/testemails/listing-testemaillib/listing-testemaillib.component.ts
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
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"senderConfigForm.datasource !=null && senderConfigForm.datasource.length > 0\"\n      [datasource]=\"senderConfigForm.datasource\" [skip]=\"senderConfigForm.listArray_skip\"\n      [modify_header_array]=\"senderConfigForm.listArray_modify_header\" [sourcedata]=\"senderConfigForm.tableName\"\n      [statusarr]=\"senderConfigForm.statusarr\" [jwttoken]=\"senderConfigForm.jwtToken\"\n      [apiurl]=\"senderConfigForm.apiUrl\" [editroute]=\"senderConfigForm.editUrl\"\n      [deleteendpoint]=\"senderConfigForm.deleteEndPoint\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"senderConfigForm.datasource.length == 0\">No record found.</h2>\n</mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy10ZXN0ZW1haWxsaWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV3cy10aXRsZS1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvQ29tcG9uZW50cy90ZXN0ZW1haWxzL2xpc3RpbmctdGVzdGVtYWlsbGliL2xpc3RpbmctdGVzdGVtYWlsbGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhEO0lBcUNFLHVHQUF1RztJQUV2RztRQTlCTyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBOEJkLENBQUM7SUF2QmpCLHNCQUNJLGdEQUFNO1FBUFYsd0dBQXdHO1FBS3hHLHdHQUF3Rzs7Ozs7Ozs7UUFDeEcsVUFDVyxZQUFpQjtZQUUxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUc7Z0JBQ3RCLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO2dCQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQ25DLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FBUztnQkFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQztnQkFDbkUsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQztnQkFDN0UsdUJBQXVCLEVBQUUsT0FBTztnQkFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUNyRSxTQUFTLEVBQUUsWUFBWSxDQUFDLGNBQWM7Z0JBQ3RDLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTztnQkFDN0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO2dCQUMvQixjQUFjLEVBQUUsWUFBWSxDQUFDLGNBQWM7Z0JBQzNDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTthQUV4QixDQUFBO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7Ozs7SUFLRCwrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLHEvQkFBb0Q7O2lCQUVyRDs7Ozs7eUJBWUUsS0FBSzs7SUE0Qk4sbUNBQUM7Q0FBQSxBQTVDSCxJQTRDRztTQXZDVSw0QkFBNEI7OztJQUd2Qyx3REFBNkI7O0lBQzdCLDhDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICxJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nLXRlc3RlbWFpbGxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLXRlc3RlbWFpbGxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3RpbmctdGVzdGVtYWlsbGliLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nVGVzdGVtYWlsbGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc2VuZGVyQ29uZmlnRm9ybTogYW55O1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgXG4gIFxuICBcbiAgXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbiAgIFxuICAgIHRoaXMuc2VuZGVyQ29uZmlnRm9ybSA9IHtcbiAgICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXG4gICAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXG4gICAgICBkYXRhc291cmNlOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSxcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWREYXRhLnRhYmxlTmFtZSxcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwiaWRcIiwgXCJ1cGRhdGVkX2F0XCJdLFxuICAgICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHsgXCJuYW1lXCI6IFwiU2VuZGVyJ3MgTmFtZVwiLCBcImVtYWlsXCI6XCJTZW5kZXIncyBFbWFpbFwifSxcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxuICAgIFxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBcbiAgfVxuICBcbiAgXG4gICJdfQ==