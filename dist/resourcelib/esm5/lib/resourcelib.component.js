/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ResourcelibComponent = /** @class */ (function () {
    // ====================================================================================================
    function ResourcelibComponent() {
        this.loader = false;
    }
    Object.defineProperty(ResourcelibComponent.prototype, "config", {
        // ======================================================================================
        // ================================================Input For Lib Listing================================
        set: 
        // ======================================================================================
        // ================================================Input For Lib Listing================================
        /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            this.resourceListConfig = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image"],
                listArray_modify_header: { "category name": "Category Name", "parent category": "Parent Category", "description": "Description", "priority": "Priority", "status": "Status" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                search_settings: {
                    textsearch: [{ label: "Search by Category name...", field: 'category_name' }, { label: "Search by parent category...", field: 'parent_category' }],
                    selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
                },
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ResourcelibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ResourcelibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-resourcelib',
                    template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"resourceListConfig.datasource !=null && resourceListConfig.datasource.length > 0\"\n        [datasource]=\"resourceListConfig.datasource\" [skip]=\"resourceListConfig.listArray_skip\"\n        [modify_header_array]=\"resourceListConfig.listArray_modify_header\" [sourcedata]=\"resourceListConfig.tableName\"\n        [statusarr]=\"resourceListConfig.statusarr\" [jwttoken]=\"resourceListConfig.jwtToken\"\n        [apiurl]=\"resourceListConfig.apiUrl\" [editroute]=\"resourceListConfig.editUrl\"\n        [deleteendpoint]=\"resourceListConfig.deleteEndPoint\"\n        [date_search_source]=\"resourceListConfig.view\"\n       [date_search_endpoint]=\"resourceListConfig.listEndPoint\"\n       [search_settings]=\"resourceListConfig.search_settings\"\n       [detail_datatype]=\"resourceListConfig.pendingmodelapplicationarray_detail_datatype\">\n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"resourceListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ResourcelibComponent.ctorParameters = function () { return []; };
    ResourcelibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ResourcelibComponent;
}());
export { ResourcelibComponent };
if (false) {
    /** @type {?} */
    ResourcelibComponent.prototype.resourceListConfig;
    /** @type {?} */
    ResourcelibComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VsaWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVzb3VyY2VsaWIvIiwic291cmNlcyI6WyJsaWIvcmVzb3VyY2VsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RDtJQTJDRSx1R0FBdUc7SUFFdkc7UUFwQ0EsV0FBTSxHQUFTLEtBQUssQ0FBQztJQW9DTCxDQUFDO0lBaENqQixzQkFDSSx3Q0FBTTtRQUpWLHlGQUF5RjtRQUV6Rix3R0FBd0c7Ozs7Ozs7O1FBQ3hHLFVBQ1csWUFBaUI7WUFFMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHO2dCQUN4QixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQy9CLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtnQkFDdkMsVUFBVSxFQUFFLFlBQVksQ0FBQyxVQUFVO2dCQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7Z0JBQ2pDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUMsT0FBTyxDQUFDO2dCQUMzRSx1QkFBdUIsRUFBRSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7Z0JBQzdLLHVCQUF1QixFQUFFLE9BQU87Z0JBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDckUsU0FBUyxFQUFFLFlBQVksQ0FBQyxjQUFjO2dCQUN0QyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87Z0JBQzdCLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtnQkFDL0IsY0FBYyxFQUFFLFlBQVksQ0FBQyxjQUFjO2dCQUMzQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7Z0JBQ3ZCLGVBQWUsRUFBQztvQkFDZCxVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSw0QkFBNEIsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEVBQUMsRUFBRSxLQUFLLEVBQUUsOEJBQThCLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLENBQUM7b0JBQ2pKLFlBQVksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDbkk7YUFPRixDQUFBO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7Ozs7SUFLRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDZ6Q0FBeUM7O2lCQUUxQzs7Ozs7eUJBU0UsS0FBSzs7SUFxQ1IsMkJBQUM7Q0FBQSxBQWxERCxJQWtEQztTQTdDWSxvQkFBb0I7OztJQUcvQixrREFBdUI7O0lBQ3ZCLHNDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1yZXNvdXJjZWxpYicsICBcbiAgdGVtcGxhdGVVcmw6ICdyZXNvdXJjZWxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyZXNvdXJjZWxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHJlc291cmNlTGlzdENvbmZpZzphbnk7XG4gIGxvYWRlcjpib29sZWFuPWZhbHNlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbiAgIFxuICAgIHRoaXMucmVzb3VyY2VMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJpZFwiLCBcInVwZGF0ZWRfYXRcIixcImltYWdlXCJdLFxuICAgICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHsgXCJjYXRlZ29yeSBuYW1lXCI6IFwiQ2F0ZWdvcnkgTmFtZVwiLCBcInBhcmVudCBjYXRlZ29yeVwiOiBcIlBhcmVudCBDYXRlZ29yeVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb25cIiwgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIgfSxcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxuICAgICAgc2VhcmNoX3NldHRpbmdzOntcbiAgICAgICAgdGV4dHNlYXJjaDogW3sgbGFiZWw6IFwiU2VhcmNoIGJ5IENhdGVnb3J5IG5hbWUuLi5cIiwgZmllbGQ6ICdjYXRlZ29yeV9uYW1lJyB9LHsgbGFiZWw6IFwiU2VhcmNoIGJ5IHBhcmVudCBjYXRlZ29yeS4uLlwiLCBmaWVsZDogJ3BhcmVudF9jYXRlZ29yeScgfV0sXG4gICAgICAgIHNlbGVjdHNlYXJjaDogW3sgbGFiZWw6ICdTZWFyY2ggQnkgU3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSB9XSxcbiAgICAgIH0sXG4gICAgICAvLyAgLypTaG93aW5nIEltYWdlIGluIHRoZSBNb2RhbCovXG4gICAgICAvLyAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFt7XG4gICAgICAvLyAgIGtleTogXCJpbWFnZVwiLFxuICAgICAgLy8gICB2YWx1ZTogJ2ltYWdlJyxcbiAgICAgIC8vICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZXN0aW1vbmlhbC8nICAgICAgICAgICAgIC8vIEltYWdlIHBhdGggXG4gICAgICAvLyB9XSxcbiAgICB9XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=