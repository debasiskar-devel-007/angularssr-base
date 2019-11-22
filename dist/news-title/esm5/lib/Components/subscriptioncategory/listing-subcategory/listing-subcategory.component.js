/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ListingSubcategoryComponent = /** @class */ (function () {
    // ====================================================================================================
    function ListingSubcategoryComponent() {
        this.loader = true;
    }
    Object.defineProperty(ListingSubcategoryComponent.prototype, "config", {
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
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListingSubcategoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListingSubcategoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-subcategory',
                    template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"SubsCatListConfig.datasource !=null && SubsCatListConfig.datasource.length > 0\"\n        [datasource]=\"SubsCatListConfig.datasource\" [skip]=\"SubsCatListConfig.listArray_skip\"\n        [modify_header_array]=\"SubsCatListConfig.listArray_modify_header\" [sourcedata]=\"SubsCatListConfig.tableName\"\n        [statusarr]=\"SubsCatListConfig.statusarr\" [jwttoken]=\"SubsCatListConfig.jwtToken\"\n        [apiurl]=\"SubsCatListConfig.apiUrl\" [editroute]=\"SubsCatListConfig.editUrl\"\n        [deleteendpoint]=\"SubsCatListConfig.deleteEndPoint\"\n        [date_search_source]=\"SubsCatListConfig.view\"\n       [date_search_endpoint]=\"SubsCatListConfig.listEndPoint\"\n       [search_settings]=\"SubsCatListConfig.search_settings\"\n       [detail_datatype]=\"SubsCatListConfig.pendingmodelapplicationarray_detail_datatype\">\n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"SubsCatListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListingSubcategoryComponent.ctorParameters = function () { return []; };
    ListingSubcategoryComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingSubcategoryComponent;
}());
export { ListingSubcategoryComponent };
if (false) {
    /** @type {?} */
    ListingSubcategoryComponent.prototype.SubsCatListConfig;
    /** @type {?} */
    ListingSubcategoryComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1zdWJjYXRlZ29yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvc3Vic2NyaXB0aW9uY2F0ZWdvcnkvbGlzdGluZy1zdWJjYXRlZ29yeS9saXN0aW5nLXN1YmNhdGVnb3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEQ7SUE2Q0EsdUdBQXVHO0lBRXZHO1FBdkNPLFdBQU0sR0FBWSxJQUFJLENBQUM7SUF1Q2QsQ0FBQztJQWhDakIsc0JBQ0ksK0NBQU07UUFQVix3R0FBd0c7UUFLeEcsd0dBQXdHOzs7Ozs7OztRQUN4RyxVQUNXLFlBQWlCO1lBRTFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRztnQkFDdkIsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVO2dCQUMvQixZQUFZLEVBQUUsWUFBWSxDQUFDLFlBQVk7Z0JBQ3ZDLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDbkMsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO2dCQUNqQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDLE9BQU8sQ0FBQztnQkFDM0UsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsTUFBTSxFQUFDO2dCQUMzRyx1QkFBdUIsRUFBRSxPQUFPO2dCQUNoQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0JBQ3JFLFNBQVMsRUFBRSxZQUFZLENBQUMsY0FBYztnQkFDdEMsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPO2dCQUM3QixRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7Z0JBQy9CLGNBQWMsRUFBRSxZQUFZLENBQUMsY0FBYztnQkFDM0MsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJO2dCQUN2QixlQUFlLEVBQUM7b0JBQ2QsVUFBVSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztvQkFDakQsWUFBWSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNuSTs7Z0JBRUEsNENBQTRDLEVBQUUsQ0FBQzt3QkFDOUMsR0FBRyxFQUFFLE9BQU87d0JBQ1osS0FBSyxFQUFFLE9BQU87d0JBQ2QsT0FBTyxFQUFFLDJFQUEyRSxDQUFhLGNBQWM7cUJBQ2hILENBQUM7YUFDSCxDQUFBO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7Ozs7SUFLRCw4Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFsREEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLDZ5Q0FBbUQ7O2lCQUVwRDs7Ozs7eUJBV0EsS0FBSzs7SUFxQ04sa0NBQUM7Q0FBQSxBQXBERCxJQW9EQztTQS9DWSwyQkFBMkI7OztJQUV4Qyx3REFBOEI7O0lBQzlCLDZDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICxJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nLXN1YmNhdGVnb3J5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3Rpbmctc3ViY2F0ZWdvcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0aW5nLXN1YmNhdGVnb3J5LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nU3ViY2F0ZWdvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnB1YmxpYyBTdWJzQ2F0TGlzdENvbmZpZzogYW55O1xucHVibGljIGxvYWRlcjogYm9vbGVhbiA9IHRydWU7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQElucHV0KClcbnNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbiBcbiAgdGhpcy5TdWJzQ2F0TGlzdENvbmZpZyA9IHtcbiAgICBhcGlVcmw6IHJlY2VpdmVkRGF0YS5hcGlCYXNlVXJsLFxuICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICBkYXRhc291cmNlOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSxcbiAgICB0YWJsZU5hbWU6IHJlY2VpdmVkRGF0YS50YWJsZU5hbWUsXG4gICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJpZFwiLCBcInVwZGF0ZWRfYXRcIixcImltYWdlXCJdLFxuICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwibmFtZVwiOiBcIk5hbWVcIiwgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIgLFwiZGF0ZV9hZGRlZFwiOlwiRGF0ZVwifSxcbiAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxuICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxuICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXG4gICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcbiAgICBzZWFyY2hfc2V0dGluZ3M6e1xuICAgICAgdGV4dHNlYXJjaDogW3sgbGFiZWw6IFwibmFtZS4uLlwiLCBmaWVsZDogJ25hbWUnIH1dLFxuICAgICAgc2VsZWN0c2VhcmNoOiBbeyBsYWJlbDogJ1NlYXJjaCBCeSBTdGF0dXMnLCBmaWVsZDogJ3N0YXR1cycsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dIH1dLFxuICAgIH0sXG4gICAgIC8qU2hvd2luZyBJbWFnZSBpbiB0aGUgTW9kYWwqL1xuICAgICBwZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5X2RldGFpbF9kYXRhdHlwZTogW3tcbiAgICAgIGtleTogXCJpbWFnZVwiLFxuICAgICAgdmFsdWU6ICdpbWFnZScsXG4gICAgICBmaWxldXJsOiAnaHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9jcm1maWxlcy5pbmZsdXhob3N0c2VydmVyL3Rlc3RpbW9uaWFsLycgICAgICAgICAgICAgLy8gSW1hZ2UgcGF0aCBcbiAgICB9XSxcbiAgfVxuICB0aGlzLmxvYWRlciA9IGZhbHNlO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdHJ1Y3RvcigpIHsgfVxuXG5uZ09uSW5pdCgpIHtcbn1cblxufVxuXG5cbiJdfQ==