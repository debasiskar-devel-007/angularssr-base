/**
 * @fileoverview added by tsickle
 * Generated from: lib/blog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** This is the category listing **/
import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';
var BlogComponent = /** @class */ (function () {
    // ====================================================================================================
    function BlogComponent(apiService) {
        this.apiService = apiService;
        this.blodata = [];
        // send basic sort data
        this.sortdata = {
            "type": 'desc',
            "field": 'priority',
            "options": ['priority', 'parentcategoryname', 'blogtitle']
        };
        // datacollection
        this.datacollection = 'getbloglistdata';
        this.date_search_source_count = 0;
        // send basic limit data
        this.limitcond = {
            "limit": 10,
            "skip": 0,
            "pagecount": 1
        };
        this.loader = false;
        // ======================================================================================
        // ================================================Input For Lib Listing================================
        // public value:any=[{val:'','name':''}];
        this.value = [];
    }
    Object.defineProperty(BlogComponent.prototype, "config", {
        set: /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            for (var i in receivedData.datasource) {
                this.value.push({ 'name': receivedData.datasource[i].parentcategoryname, val: receivedData.datasource[i].parentcategoryname });
            }
            this.blogListConfig = {
                apiUrl: receivedData.apiBaseUrl,
                endpoint: receivedData.endpoint,
                endpointc: receivedData.endpointc,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "description", "parentcategoryname_search", "blogtitle_search"],
                listArray_modify_header: { "blogtitle": "Blog Title", "description html": "Description", "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name", "blogcat": "Blog Category", "date": "Date" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                search_settings: {
                    textsearch: [{ label: "Search by Blog Category Name", field: 'blogtitle' }],
                    selectsearch: [
                        { label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }]
                        },
                        { label: "Search By Parent Category", field: 'parentcategoryname', values: this.value }
                    ]
                    // search:[{label:"Search By Parent Category",field:'parentcategoryname',values:this.value}]
                }
                //  /*Showing Image in the Modal*/
                //  pendingmodelapplicationarray_detail_datatype: [{
                //   key: "image",
                //   value: 'image',
                //   fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/testimonial/'             // Image path 
                // }],
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BlogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var endpoint = this.blogListConfig.endpoint;
        /** @type {?} */
        var endpointc = this.blogListConfig.endpointc;
        /** @type {?} */
        var data = {
            "condition": {
                "limit": 10,
                "skip": 0
            },
            sort: {
                "type": 'desc',
                "field": 'priority'
            }
        };
        this.apiService.getDataWithoutToken(endpointc, data).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.date_search_source_count = res.count;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log('Oooops!');
        }));
        this.apiService.getDataWithoutToken(endpoint, data).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log('Oooops!');
        }));
    };
    BlogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-Blog',
                    template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n\n        [datasource]=\"blogListConfig.datasource\" \n\n        [skip]=\"blogListConfig.listArray_skip\"\n\n        [modify_header_array]=\"blogListConfig.listArray_modify_header\" \n\n        [sourcedata]=\"blogListConfig.tableName\"\n\n        [statusarr]=\"blogListConfig.statusarr\" \n\n        [jwttoken]=\"blogListConfig.jwtToken\"\n\n        [apiurl]=\"blogListConfig.apiUrl\" \n\n        [editroute]=\"blogListConfig.editUrl\"\n\n        [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n\n        [date_search_source]=\"blogListConfig.view\"\n\n       [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n\n       [search_settings]=\"blogListConfig.search_settings\"\n\n       [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n\n       [sortdata]=\"sortdata\"\n\n       [datacollection]=\"datacollection\"\n\n        [date_search_source_count]=\"date_search_source_count\"\n\n       [limitcond]=\"limitcond\">\n       \n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    BlogComponent.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    BlogComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return BlogComponent;
}());
export { BlogComponent };
if (false) {
    /** @type {?} */
    BlogComponent.prototype.blodata;
    /** @type {?} */
    BlogComponent.prototype.sortdata;
    /** @type {?} */
    BlogComponent.prototype.datacollection;
    /** @type {?} */
    BlogComponent.prototype.date_search_source_count;
    /** @type {?} */
    BlogComponent.prototype.limitcond;
    /** @type {?} */
    BlogComponent.prototype.blogListConfig;
    /** @type {?} */
    BlogComponent.prototype.loader;
    /** @type {?} */
    BlogComponent.prototype.value;
    /** @type {?} */
    BlogComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9ibG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBMkVFLHVHQUF1RztJQUV2Ryx1QkFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQXZFakMsWUFBTyxHQUFLLEVBQUUsQ0FBQzs7UUFFdkIsYUFBUSxHQUFLO1lBQ1osTUFBTSxFQUFDLE1BQU07WUFDYixPQUFPLEVBQUMsVUFBVTtZQUNsQixTQUFTLEVBQUMsQ0FBQyxVQUFVLEVBQUMsb0JBQW9CLEVBQUMsV0FBVyxDQUFDO1NBQ3hELENBQUM7O1FBRUYsbUJBQWMsR0FBTSxpQkFBaUIsQ0FBQztRQUN0Qyw2QkFBd0IsR0FBTSxDQUFDLENBQUM7O1FBRWhDLGNBQVMsR0FBSztZQUNaLE9BQU8sRUFBQyxFQUFFO1lBQ1YsTUFBTSxFQUFDLENBQUM7WUFDUixXQUFXLEVBQUMsQ0FBQztTQUNkLENBQUM7UUFHQSxXQUFNLEdBQVMsS0FBSyxDQUFDOzs7O1FBS2QsVUFBSyxHQUFLLEVBQUUsQ0FBQztJQWdEd0IsQ0FBQztJQS9DN0Msc0JBQ0ksaUNBQU07Ozs7O1FBRFYsVUFDVyxZQUFpQjtZQUN6QixLQUFLLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FD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LFNBQVMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsR0FBTztRQUVyRSxDQUFDOzs7O1FBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztJQUVMLENBQUM7O2dCQTNHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLCsvQ0FBa0M7O2lCQUVuQzs7OztnQkFOUSxVQUFVOzs7eUJBZ0NoQixLQUFLOztJQWdGUixvQkFBQztDQUFBLEFBOUdELElBOEdDO1NBekdZLGFBQWE7OztJQUN4QixnQ0FBc0I7O0lBRXZCLGlDQUlDOztJQUVGLHVDQUFzQzs7SUFDdEMsaURBQWdDOztJQUVoQyxrQ0FJRTs7SUFFQSx1Q0FBbUI7O0lBQ25CLCtCQUFxQjs7SUFLckIsOEJBQW9COztJQWdEUixtQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKiBUaGlzIGlzIHRoZSBjYXRlZ29yeSBsaXN0aW5nICoqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLUJsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2Jsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3R5bGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBibG9kYXRhOmFueT1bXTtcbiAvLyBzZW5kIGJhc2ljIHNvcnQgZGF0YVxuIHNvcnRkYXRhOmFueT17XG4gIFwidHlwZVwiOidkZXNjJyxcbiAgXCJmaWVsZFwiOidwcmlvcml0eScsXG4gIFwib3B0aW9uc1wiOlsncHJpb3JpdHknLCdwYXJlbnRjYXRlZ29yeW5hbWUnLCdibG9ndGl0bGUnXVxufTtcbi8vIGRhdGFjb2xsZWN0aW9uXG5kYXRhY29sbGVjdGlvbjogYW55PSdnZXRibG9nbGlzdGRhdGEnO1xuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50OiBhbnk9MDtcbi8vIHNlbmQgYmFzaWMgbGltaXQgZGF0YVxubGltaXRjb25kOmFueT17XG4gIFwibGltaXRcIjoxMCxcbiAgXCJza2lwXCI6MCxcbiAgXCJwYWdlY291bnRcIjoxXG59OyBcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgYmxvZ0xpc3RDb25maWc6YW55O1xuICBsb2FkZXI6Ym9vbGVhbj1mYWxzZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBwdWJsaWMgdmFsdWU6YW55PVt7dmFsOicnLCduYW1lJzonJ31dO1xuICBwdWJsaWMgdmFsdWU6YW55PVtdO1xuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7XG4gICAgIGZvciAobGV0IGkgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UpIHtcbiAgICAgICB0aGlzLnZhbHVlLnB1c2goXG4gICAgICAgICB7ICduYW1lJzogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0ucGFyZW50Y2F0ZWdvcnluYW1lLCB2YWw6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLnBhcmVudGNhdGVnb3J5bmFtZSB9XG4gICAgICAgICApO1xuICBcbiAgIH1cblxuICAgIHRoaXMuYmxvZ0xpc3RDb25maWcgPSB7XG4gICAgICBhcGlVcmw6IHJlY2VpdmVkRGF0YS5hcGlCYXNlVXJsLFxuICAgICAgZW5kcG9pbnQgOnJlY2VpdmVkRGF0YS5lbmRwb2ludCxcbiAgICAgIGVuZHBvaW50YzpyZWNlaXZlZERhdGEuZW5kcG9pbnRjLFxuICAgICAgbGlzdEVuZFBvaW50OiByZWNlaXZlZERhdGEubGlzdEVuZFBvaW50LFxuICAgICAgZGF0YXNvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsXG4gICAgICB0YWJsZU5hbWU6IHJlY2VpdmVkRGF0YS50YWJsZU5hbWUsXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcInVwZGF0ZWRfYXRcIixcImltYWdlXCIsXCJkZXNjcmlwdGlvblwiLFwicGFyZW50Y2F0ZWdvcnluYW1lX3NlYXJjaFwiLFwiYmxvZ3RpdGxlX3NlYXJjaFwiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwiYmxvZ3RpdGxlXCI6XCJCbG9nIFRpdGxlXCIsIFwiZGVzY3JpcHRpb24gaHRtbFwiOiBcIkRlc2NyaXB0aW9uXCIsIFwicHJpb3JpdHlcIjogXCJQcmlvcml0eVwiLCBcInN0YXR1c1wiOiBcIlN0YXR1c1wiICxcInBhcmVudGNhdGVnb3J5bmFtZVwiOlwiUGFyZW50IENhdGVnb3J5IE5hbWVcIixcImJsb2djYXRcIjpcIkJsb2cgQ2F0ZWdvcnlcIixcImRhdGVcIjpcIkRhdGVcIn0sXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxuICAgICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcblxuICAgICAgc2VhcmNoX3NldHRpbmdzOntcbiAgICAgICAgdGV4dHNlYXJjaDogW3sgbGFiZWw6IFwiU2VhcmNoIGJ5IEJsb2cgQ2F0ZWdvcnkgTmFtZVwiLCBmaWVsZDogJ2Jsb2d0aXRsZScgfV0sXG4gICAgICAgIHNlbGVjdHNlYXJjaDogW1xuICAgICAgICAgIHsgbGFiZWw6ICdTZWFyY2ggQnkgU3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dXG4gICAgICAgIH0sXG4gICAgICAgICAge2xhYmVsOlwiU2VhcmNoIEJ5IFBhcmVudCBDYXRlZ29yeVwiLGZpZWxkOidwYXJlbnRjYXRlZ29yeW5hbWUnLHZhbHVlczp0aGlzLnZhbHVlfVxuICAgICAgICBdXG5cbiAgICAgICAgLy8gc2VhcmNoOlt7bGFiZWw6XCJTZWFyY2ggQnkgUGFyZW50IENhdGVnb3J5XCIsZmllbGQ6J3BhcmVudGNhdGVnb3J5bmFtZScsdmFsdWVzOnRoaXMudmFsdWV9XVxuICAgICAgfVxuICAgICAgLy8gIC8qU2hvd2luZyBJbWFnZSBpbiB0aGUgTW9kYWwqL1xuICAgICAgLy8gIHBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXlfZGV0YWlsX2RhdGF0eXBlOiBbe1xuICAgICAgLy8gICBrZXk6IFwiaW1hZ2VcIixcbiAgICAgIC8vICAgdmFsdWU6ICdpbWFnZScsXG4gICAgICAvLyAgIGZpbGV1cmw6ICdodHRwczovL3MzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2NybWZpbGVzLmluZmx1eGhvc3RzZXJ2ZXIvdGVzdGltb25pYWwvJyAgICAgICAgICAgICAvLyBJbWFnZSBwYXRoIFxuICAgICAgLy8gfV0sXG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGlTZXJ2aWNlOkFwaVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBlbmRwb2ludD10aGlzLmJsb2dMaXN0Q29uZmlnLmVuZHBvaW50O1xuICAgIGxldCBlbmRwb2ludGM9dGhpcy5ibG9nTGlzdENvbmZpZy5lbmRwb2ludGM7XG5cbiAgICBsZXQgZGF0YTphbnk9e1xuICAgICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgICAgIFwibGltaXRcIjoxMCxcbiAgICAgICAgICAgIFwic2tpcFwiOjBcbiAgICAgICAgfSxcbiAgICBzb3J0OntcbiAgICAgICAgXCJ0eXBlXCI6J2Rlc2MnLFxuICAgICAgICBcImZpZWxkXCI6J3ByaW9yaXR5J1xuICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YVdpdGhvdXRUb2tlbihlbmRwb2ludGMsIGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudCA9cmVzLmNvdW50O1xuICAgICAgXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnQsZGF0YSkuc3Vic2NyaWJlKChyZXM6YW55KSA9PiB7XG4gICAgXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgIH0pO1xuXG4gIH1cbiAgXG5cbn1cblxuIl19