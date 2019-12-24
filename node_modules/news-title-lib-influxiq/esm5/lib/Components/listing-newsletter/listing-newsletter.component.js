/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ListingNewsletterComponent = /** @class */ (function () {
    // =========================================================================================
    function ListingNewsletterComponent() {
        this.loader = true;
    }
    /**
     * @return {?}
     */
    ListingNewsletterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(ListingNewsletterComponent.prototype, "config", {
        // ================================================Input For Lib Listing================================
        set: 
        // ================================================Input For Lib Listing================================
        /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            this.newsLetterListConfig = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image"],
                listArray_modify_header: { "fullname": "Full Name", "phone": "Phone", "company": "Company", "email": "Email", "group": "Group" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                search_settings: {
                    textsearch: [{ label: "Search by customer name...", field: 'fullname' }, { label: "Search by email...", field: 'email' }],
                }
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    ListingNewsletterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-newsletter',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"newsLetterListConfig.datasource !=null && newsLetterListConfig.datasource.length > 0\"\n      [datasource]=\"newsLetterListConfig.datasource\" [skip]=\"newsLetterListConfig.listArray_skip\"\n      [modify_header_array]=\"newsLetterListConfig.listArray_modify_header\" [sourcedata]=\"newsLetterListConfig.tableName\"\n      [statusarr]=\"newsLetterListConfig.statusarr\" [jwttoken]=\"newsLetterListConfig.jwtToken\"\n      [apiurl]=\"newsLetterListConfig.apiUrl\" [editroute]=\"newsLetterListConfig.editUrl\"\n      [deleteendpoint]=\"newsLetterListConfig.deleteEndPoint\"\n      [date_search_source]=\"newsLetterListConfig.view\"\n     [date_search_endpoint]=\"newsLetterListConfig.listEndPoint\"\n     [search_settings]=\"newsLetterListConfig.search_settings\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"newsLetterListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListingNewsletterComponent.ctorParameters = function () { return []; };
    ListingNewsletterComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingNewsletterComponent;
}());
export { ListingNewsletterComponent };
if (false) {
    /** @type {?} */
    ListingNewsletterComponent.prototype.newsLetterListConfig;
    /** @type {?} */
    ListingNewsletterComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1uZXdzbGV0dGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ld3MtdGl0bGUtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvbGlzdGluZy1uZXdzbGV0dGVyL2xpc3RpbmctbmV3c2xldHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pEO0lBVUUsNEZBQTRGO0lBRzVGO1FBSk8sV0FBTSxHQUFZLElBQUksQ0FBQztJQUlkLENBQUM7Ozs7SUFFakIsNkNBQVE7OztJQUFSO0lBRUEsQ0FBQztJQU1ELHNCQUNJLDhDQUFNO1FBRlYsd0dBQXdHOzs7Ozs7O1FBQ3hHLFVBQ1csWUFBaUI7WUFDMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHO2dCQUMxQixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQy9CLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtnQkFDdkMsVUFBVSxFQUFFLFlBQVksQ0FBQyxVQUFVO2dCQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7Z0JBQ2pDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDO2dCQUM1RSx1QkFBdUIsRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRTtnQkFDOUgsdUJBQXVCLEVBQUUsT0FBTztnQkFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUNyRSxTQUFTLEVBQUUsWUFBWSxDQUFDLGNBQWM7Z0JBQ3RDLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTztnQkFDN0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO2dCQUMvQixjQUFjLEVBQUUsWUFBWSxDQUFDLGNBQWM7Z0JBQzNDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTtnQkFDdkIsZUFBZSxFQUFFO29CQUNmLFVBQVUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBQyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7aUJBRXpIO2FBRUYsQ0FBQTtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLHF1Q0FBa0Q7O2lCQUVuRDs7Ozs7eUJBbUJFLEtBQUs7O0lBMEJSLGlDQUFDO0NBQUEsQUFqREQsSUFpREM7U0E1Q1ksMEJBQTBCOzs7SUFHckMsMERBQWlDOztJQUNqQyw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZy1uZXdzbGV0dGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmctbmV3c2xldHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3RpbmctbmV3c2xldHRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ05ld3NsZXR0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbnM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBuZXdzTGV0dGVyTGlzdENvbmZpZzogYW55O1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbiAgICB0aGlzLm5ld3NMZXR0ZXJMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJpZFwiLCBcInVwZGF0ZWRfYXRcIiwgXCJpbWFnZVwiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwiZnVsbG5hbWVcIjogXCJGdWxsIE5hbWVcIiwgXCJwaG9uZVwiOiBcIlBob25lXCIsIFwiY29tcGFueVwiOiBcIkNvbXBhbnlcIiwgXCJlbWFpbFwiOiBcIkVtYWlsXCIsXCJncm91cFwiOlwiR3JvdXBcIiB9LFxuICAgICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxuICAgICAgdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXG4gICAgICBlZGl0VXJsOiByZWNlaXZlZERhdGEuZWRpdFVybCxcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxuICAgICAgdmlldzogcmVjZWl2ZWREYXRhLnZpZXcsXG4gICAgICBzZWFyY2hfc2V0dGluZ3M6IHtcbiAgICAgICAgdGV4dHNlYXJjaDogW3sgbGFiZWw6IFwiU2VhcmNoIGJ5IGN1c3RvbWVyIG5hbWUuLi5cIiwgZmllbGQ6ICdmdWxsbmFtZScgfSx7IGxhYmVsOiBcIlNlYXJjaCBieSBlbWFpbC4uLlwiLCBmaWVsZDogJ2VtYWlsJyB9XSxcbiAgICAgICBcbiAgICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxufVxuIl19