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
                listArray_modify_header: { "fullname": "Full Name", "phone": "Phone", "company": "Company", "email": "Email" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                search_settings: {
                    textsearch: [{ label: "Search by customer name...", field: 'fullname' }],
                    search: [{ label: "email", field: 'email' }],
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
                    template: "<mat-card *ngIf=\"loader==true\">\r\n  <mat-spinner class=\"spinner\"></mat-spinner>\r\n</mat-card>\r\n\r\n\r\n\r\n\r\n<!-- ------------------------lib listing being called------------------------ -->\r\n<mat-card *ngIf=\"loader==false\">\r\n  <lib-listing class=\"formfilterdiv\"\r\n      *ngIf=\"newsLetterListConfig.datasource !=null && newsLetterListConfig.datasource.length > 0\"\r\n      [datasource]=\"newsLetterListConfig.datasource\" [skip]=\"newsLetterListConfig.listArray_skip\"\r\n      [modify_header_array]=\"newsLetterListConfig.listArray_modify_header\" [sourcedata]=\"newsLetterListConfig.tableName\"\r\n      [statusarr]=\"newsLetterListConfig.statusarr\" [jwttoken]=\"newsLetterListConfig.jwtToken\"\r\n      [apiurl]=\"newsLetterListConfig.apiUrl\" [editroute]=\"newsLetterListConfig.editUrl\"\r\n      [deleteendpoint]=\"newsLetterListConfig.deleteEndPoint\"\r\n      [date_search_source]=\"newsLetterListConfig.view\"\r\n     [date_search_endpoint]=\"newsLetterListConfig.listEndPoint\"\r\n     [search_settings]=\"newsLetterListConfig.search_settings\">\r\n  </lib-listing>\r\n<!-- ----------------------------------------------------------------------------->\r\n\r\n  <h2 *ngIf=\"newsLetterListConfig.datasource.length == 0\">No record found.</h2>\r\n</mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1uZXdzbGV0dGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ld3MtdGl0bGUvIiwic291cmNlcyI6WyJsaWIvQ29tcG9uZW50cy9saXN0aW5nLW5ld3NsZXR0ZXIvbGlzdGluZy1uZXdzbGV0dGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekQ7SUFVRSw0RkFBNEY7SUFHNUY7UUFKTyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBSWQsQ0FBQzs7OztJQUVqQiw2Q0FBUTs7O0lBQVI7SUFFQSxDQUFDO0lBTUQsc0JBQ0ksOENBQU07UUFGVix3R0FBd0c7Ozs7Ozs7UUFDeEcsVUFDVyxZQUFpQjtZQUMxQixJQUFJLENBQUMsb0JBQW9CLEdBQUc7Z0JBQzFCLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO2dCQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQ25DLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FBUztnQkFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUM7Z0JBQzVFLHVCQUF1QixFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtnQkFDOUcsdUJBQXVCLEVBQUUsT0FBTztnQkFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUNyRSxTQUFTLEVBQUUsWUFBWSxDQUFDLGNBQWM7Z0JBQ3RDLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTztnQkFDN0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO2dCQUMvQixjQUFjLEVBQUUsWUFBWSxDQUFDLGNBQWM7Z0JBQzNDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTtnQkFDdkIsZUFBZSxFQUFFO29CQUNmLFVBQVUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQztvQkFDeEUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztpQkFFN0M7YUFFRixDQUFBO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsbXhDQUFrRDs7aUJBRW5EOzs7Ozt5QkFtQkUsS0FBSzs7SUEyQlIsaUNBQUM7Q0FBQSxBQWxERCxJQWtEQztTQTdDWSwwQkFBMEI7OztJQUdyQywwREFBaUM7O0lBQ2pDLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWxpc3RpbmctbmV3c2xldHRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmctbmV3c2xldHRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy1uZXdzbGV0dGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdGluZ05ld3NsZXR0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb25zPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHB1YmxpYyBuZXdzTGV0dGVyTGlzdENvbmZpZzogYW55O1xyXG4gIHB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbmZpZyhyZWNlaXZlZERhdGE6IGFueSkge1xyXG4gICAgdGhpcy5uZXdzTGV0dGVyTGlzdENvbmZpZyA9IHtcclxuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcclxuICAgICAgbGlzdEVuZFBvaW50OiByZWNlaXZlZERhdGEubGlzdEVuZFBvaW50LFxyXG4gICAgICBkYXRhc291cmNlOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSxcclxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxyXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcImlkXCIsIFwidXBkYXRlZF9hdFwiLCBcImltYWdlXCJdLFxyXG4gICAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjogeyBcImZ1bGxuYW1lXCI6IFwiRnVsbCBOYW1lXCIsIFwicGhvbmVcIjogXCJQaG9uZVwiLCBcImNvbXBhbnlcIjogXCJDb21wYW55XCIsIFwiZW1haWxcIjogXCJFbWFpbFwiIH0sXHJcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXHJcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxyXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcclxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXHJcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXHJcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXHJcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxyXG4gICAgICBzZWFyY2hfc2V0dGluZ3M6IHtcclxuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggYnkgY3VzdG9tZXIgbmFtZS4uLlwiLCBmaWVsZDogJ2Z1bGxuYW1lJyB9XSxcclxuICAgICAgICBzZWFyY2g6IFt7IGxhYmVsOiBcImVtYWlsXCIsIGZpZWxkOiAnZW1haWwnIH1dLFxyXG4gICAgICAgIC8vICBzZWFyY2g6W3tsYWJlbDpcIlNlYXJjaCBCeSBhdXRvY29tcGxldGVcIixmaWVsZDonZnVsbG5hbWUnfV0gICAvL2F1dG9jb21wbGV0ZSBmaWVsZC8vXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xyXG4gIH1cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG59XHJcbiJdfQ==