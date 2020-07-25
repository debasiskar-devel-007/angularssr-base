/**
 * @fileoverview added by tsickle
 * Generated from: lib/servicelib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ServicelibComponent = /** @class */ (function () {
    // ====================================================================================================
    function ServicelibComponent() {
        this.loader = true;
    }
    Object.defineProperty(ServicelibComponent.prototype, "config", {
        // =====================================================================================================
        // =============================================Input For Lib Listing================================
        set: 
        // =====================================================================================================
        // =============================================Input For Lib Listing================================
        /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            this.serviceListConfig = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "id", "updated_at", "service_desc", "additional_img", "description", 'service_title_search', 'additional_description', 'image', 'service_img', 'additional_details'],
                listArray_modify_header: { "service title": "Service title", "priority": "Priority",
                    "status": "Status", "bulletarr": "Number of Bullets", "date added": "Date", "image": "Image", "description_html": "Description", "description html": "Description" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                /*Search settings in the Listing*/
                search_settings: {
                    textsearch: [{ label: "Search by title", field: 'service_title_search' }],
                    selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
                },
                /*Showing Image in the Modal*/
                // pendingmodelapplicationarray_detail_datatype:[{
                //   key: "images",
                //   value: 'image',
                //   fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/services/'    
                // }],
                detail_header: ['_id', 'additional_details']
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ServicelibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ServicelibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-servicelib',
                    template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"serviceListConfig.datasource !=null && serviceListConfig.datasource.length > 0\"\n        [datasource]=\"serviceListConfig.datasource\" [skip]=\"serviceListConfig.listArray_skip\"\n        [modify_header_array]=\"serviceListConfig.listArray_modify_header\" [sourcedata]=\"serviceListConfig.tableName\"\n        [statusarr]=\"serviceListConfig.statusarr\" [jwttoken]=\"serviceListConfig.jwtToken\"\n        [apiurl]=\"serviceListConfig.apiUrl\" [editroute]=\"serviceListConfig.editUrl\"\n        [deleteendpoint]=\"serviceListConfig.deleteEndPoint\" [date_search_source]=\"serviceListConfig.view\"\n        [detail_datatype]=\"serviceListConfig.pendingmodelapplicationarray_detail_datatype\"\n        [date_search_endpoint]=\"serviceListConfig.listEndPoint\" [search_settings]=\"serviceListConfig.search_settings\"\n        [detail_skip_array]=\"serviceListConfig.detail_header\">\n    </lib-listing>\n    <!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"serviceListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ServicelibComponent.ctorParameters = function () { return []; };
    ServicelibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ServicelibComponent;
}());
export { ServicelibComponent };
if (false) {
    /** @type {?} */
    ServicelibComponent.prototype.serviceListConfig;
    /** @type {?} */
    ServicelibComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXJ2aWNlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlbGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBa0RFLHVHQUF1RztJQUV2RztRQTNDTyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBNEM5QixDQUFDO0lBdkNELHNCQUNJLHVDQUFNO1FBTFYsd0dBQXdHO1FBR3hHLHFHQUFxRzs7Ozs7Ozs7UUFDckcsVUFDVyxZQUFpQjtZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUc7Z0JBQ3ZCLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO2dCQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQ25DLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FBUztnQkFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLEVBQUMsc0JBQXNCLEVBQUMsd0JBQXdCLEVBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxvQkFBb0IsQ0FBQztnQkFDL0wsdUJBQXVCLEVBQUUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxVQUFVO29CQUNuRixRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxZQUFZLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsYUFBYSxFQUFDLGtCQUFrQixFQUFDLGFBQWEsRUFBRTtnQkFDNUosdUJBQXVCLEVBQUUsT0FBTztnQkFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUNyRSxTQUFTLEVBQUUsWUFBWSxDQUFDLGNBQWM7Z0JBQ3RDLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTztnQkFDN0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO2dCQUMvQixjQUFjLEVBQUUsWUFBWSxDQUFDLGNBQWM7Z0JBQzNDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTs7Z0JBR3ZCLGVBQWUsRUFBRTtvQkFDZixVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQztvQkFDekUsWUFBWSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNuSTs7Ozs7OztnQkFRRCxhQUFhLEVBQUMsQ0FBQyxLQUFLLEVBQUMsb0JBQW9CLENBQUM7YUFFM0MsQ0FBQTtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7O0lBT0Qsc0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixpMkNBQTBDOztpQkFFM0M7Ozs7O3lCQVVFLEtBQUs7O0lBNENSLDBCQUFDO0NBQUEsQUExREQsSUEwREM7U0FyRFksbUJBQW1COzs7SUFHOUIsZ0RBQThCOztJQUM5QixxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNlcnZpY2VsaWInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VydmljZWxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlcnZpY2VsaWIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzZXJ2aWNlTGlzdENvbmZpZzogYW55O1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZpY2VMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImlkXCIsIFwidXBkYXRlZF9hdFwiLCBcInNlcnZpY2VfZGVzY1wiLFwiYWRkaXRpb25hbF9pbWdcIixcImRlc2NyaXB0aW9uXCIsJ3NlcnZpY2VfdGl0bGVfc2VhcmNoJywnYWRkaXRpb25hbF9kZXNjcmlwdGlvbicsJ2ltYWdlJywnc2VydmljZV9pbWcnLCdhZGRpdGlvbmFsX2RldGFpbHMnXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwic2VydmljZSB0aXRsZVwiOiBcIlNlcnZpY2UgdGl0bGVcIiwgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFxuICAgICAgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiwgXCJidWxsZXRhcnJcIjogXCJOdW1iZXIgb2YgQnVsbGV0c1wiLFwiZGF0ZSBhZGRlZFwiOlwiRGF0ZVwiLFwiaW1hZ2VcIjpcIkltYWdlXCIsXCJkZXNjcmlwdGlvbl9odG1sXCI6XCJEZXNjcmlwdGlvblwiLFwiZGVzY3JpcHRpb24gaHRtbFwiOlwiRGVzY3JpcHRpb25cIiB9LFxuICAgICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxuICAgICAgdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXG4gICAgICBlZGl0VXJsOiByZWNlaXZlZERhdGEuZWRpdFVybCxcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxuICAgICAgdmlldzogcmVjZWl2ZWREYXRhLnZpZXcsXG5cbiAgICAgIC8qU2VhcmNoIHNldHRpbmdzIGluIHRoZSBMaXN0aW5nKi9cbiAgICAgIHNlYXJjaF9zZXR0aW5nczoge1xuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggYnkgdGl0bGVcIiwgZmllbGQ6ICdzZXJ2aWNlX3RpdGxlX3NlYXJjaCcgfV0sXG4gICAgICAgIHNlbGVjdHNlYXJjaDogW3sgbGFiZWw6ICdTZWFyY2ggQnkgU3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSB9XSwgLy8gdGhpcyBpcyB1c2UgZm9yICBzZWxlY3Qgc2VhcmNoXG4gICAgICB9LFxuXG4gICAgICAvKlNob3dpbmcgSW1hZ2UgaW4gdGhlIE1vZGFsKi9cbiAgICAgIC8vIHBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXlfZGV0YWlsX2RhdGF0eXBlOlt7XG4gICAgICAvLyAgIGtleTogXCJpbWFnZXNcIixcbiAgICAgIC8vICAgdmFsdWU6ICdpbWFnZScsXG4gICAgICAvLyAgIGZpbGV1cmw6ICdodHRwczovL3MzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2NybWZpbGVzLmluZmx1eGhvc3RzZXJ2ZXIvc2VydmljZXMvJyAgICBcbiAgICAgIC8vIH1dLFxuICAgICAgZGV0YWlsX2hlYWRlcjpbJ19pZCcsJ2FkZGl0aW9uYWxfZGV0YWlscyddXG5cbiAgICB9XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cblxuXG4iXX0=