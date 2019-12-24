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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1zdWJjYXRlZ29yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL3N1YnNjcmlwdGlvbmNhdGVnb3J5L2xpc3Rpbmctc3ViY2F0ZWdvcnkvbGlzdGluZy1zdWJjYXRlZ29yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhEO0lBNkNBLHVHQUF1RztJQUV2RztRQXZDTyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBdUNkLENBQUM7SUFoQ2pCLHNCQUNJLCtDQUFNO1FBUFYsd0dBQXdHO1FBS3hHLHdHQUF3Rzs7Ozs7Ozs7UUFDeEcsVUFDVyxZQUFpQjtZQUUxQixJQUFJLENBQUMsaUJBQWlCLEdBQUc7Z0JBQ3ZCLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO2dCQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQ25DLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FBUztnQkFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQyxPQUFPLENBQUM7Z0JBQzNFLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLE1BQU0sRUFBQztnQkFDM0csdUJBQXVCLEVBQUUsT0FBTztnQkFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUNyRSxTQUFTLEVBQUUsWUFBWSxDQUFDLGNBQWM7Z0JBQ3RDLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTztnQkFDN0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO2dCQUMvQixjQUFjLEVBQUUsWUFBWSxDQUFDLGNBQWM7Z0JBQzNDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTtnQkFDdkIsZUFBZSxFQUFDO29CQUNkLFVBQVUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQ2pELFlBQVksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDbkk7O2dCQUVBLDRDQUE0QyxFQUFFLENBQUM7d0JBQzlDLEdBQUcsRUFBRSxPQUFPO3dCQUNaLEtBQUssRUFBRSxPQUFPO3dCQUNkLE9BQU8sRUFBRSwyRUFBMkUsQ0FBYSxjQUFjO3FCQUNoSCxDQUFDO2FBQ0gsQ0FBQTtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7O0lBS0QsOENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBbERBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyw2eUNBQW1EOztpQkFFcEQ7Ozs7O3lCQVdBLEtBQUs7O0lBcUNOLGtDQUFDO0NBQUEsQUFwREQsSUFvREM7U0EvQ1ksMkJBQTJCOzs7SUFFeEMsd0RBQThCOztJQUM5Qiw2Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZy1zdWJjYXRlZ29yeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLXN1YmNhdGVnb3J5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy1zdWJjYXRlZ29yeS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5wdWJsaWMgU3Vic0NhdExpc3RDb25maWc6IGFueTtcbnB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09SW5wdXQgRm9yIExpYiBMaXN0aW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBJbnB1dCgpXG5zZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7XG4gXG4gIHRoaXMuU3Vic0NhdExpc3RDb25maWcgPSB7XG4gICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXG4gICAgZGF0YXNvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsXG4gICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwiaWRcIiwgXCJ1cGRhdGVkX2F0XCIsXCJpbWFnZVwiXSxcbiAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjogeyBcIm5hbWVcIjogXCJOYW1lXCIsIFwicHJpb3JpdHlcIjogXCJQcmlvcml0eVwiLCBcInN0YXR1c1wiOiBcIlN0YXR1c1wiICxcImRhdGVfYWRkZWRcIjpcIkRhdGVcIn0sXG4gICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcbiAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICBlZGl0VXJsOiByZWNlaXZlZERhdGEuZWRpdFVybCxcbiAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgdmlldzogcmVjZWl2ZWREYXRhLnZpZXcsXG4gICAgc2VhcmNoX3NldHRpbmdzOntcbiAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIm5hbWUuLi5cIiwgZmllbGQ6ICduYW1lJyB9XSxcbiAgICAgIHNlbGVjdHNlYXJjaDogW3sgbGFiZWw6ICdTZWFyY2ggQnkgU3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSB9XSxcbiAgICB9LFxuICAgICAvKlNob3dpbmcgSW1hZ2UgaW4gdGhlIE1vZGFsKi9cbiAgICAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFt7XG4gICAgICBrZXk6IFwiaW1hZ2VcIixcbiAgICAgIHZhbHVlOiAnaW1hZ2UnLFxuICAgICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZXN0aW1vbmlhbC8nICAgICAgICAgICAgIC8vIEltYWdlIHBhdGggXG4gICAgfV0sXG4gIH1cbiAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3RydWN0b3IoKSB7IH1cblxubmdPbkluaXQoKSB7XG59XG5cbn1cblxuXG4iXX0=