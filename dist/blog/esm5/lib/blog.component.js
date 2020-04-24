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
                listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "description", "parentcategoryname_search", "blogtitle_search", "blogtitlesearch"],
                listArray_modify_header: { "blogtitle": "Category Name", "description html": "Description", "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name", "blogcat": "Blog Category", "date": "Date" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                search_settings: {
                    textsearch: [{ label: "Search by Blog Category Name", field: 'blogtitlesearch' }],
                    selectsearch: [
                        { label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }]
                        },
                        { label: "Search By Parent Category Name", field: 'parentcategoryname', values: this.value }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9ibG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBMkVFLHVHQUF1RztJQUV2Ryx1QkFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQXZFakMsWUFBTyxHQUFLLEVBQUUsQ0FBQzs7UUFFdkIsYUFBUSxHQUFLO1lBQ1osTUFBTSxFQUFDLE1BQU07WUFDYixPQUFPLEVBQUMsVUFBVTtZQUNsQixTQUFTLEVBQUMsQ0FBQyxVQUFVLEVBQUMsb0JBQW9CLEVBQUMsV0FBVyxDQUFDO1NBQ3hELENBQUM7O1FBRUYsbUJBQWMsR0FBTSxpQkFBaUIsQ0FBQztRQUN0Qyw2QkFBd0IsR0FBTSxDQUFDLENBQUM7O1FBRWhDLGNBQVMsR0FBSztZQUNaLE9BQU8sRUFBQyxFQUFFO1lBQ1YsTUFBTSxFQUFDLENBQUM7WUFDUixXQUFXLEVBQUMsQ0FBQztTQUNkLENBQUM7UUFHQSxXQUFNLEdBQVMsS0FBSyxDQUFDOzs7O1FBS2QsVUFBSyxHQUFLLEVBQUUsQ0FBQztJQWdEd0IsQ0FBQztJQS9DN0Msc0JBQ0ksaUNBQU07Ozs7O1FBRFYsVUFDVyxZQUFpQjtZQUN6QixLQUFLLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FD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Q0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxHQUFPO1FBRXJFLENBQUM7Ozs7UUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQzs7Z0JBM0dGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsKy9DQUFrQzs7aUJBRW5DOzs7O2dCQU5RLFVBQVU7Ozt5QkFnQ2hCLEtBQUs7O0lBZ0ZSLG9CQUFDO0NBQUEsQUE5R0QsSUE4R0M7U0F6R1ksYUFBYTs7O0lBQ3hCLGdDQUFzQjs7SUFFdkIsaUNBSUM7O0lBRUYsdUNBQXNDOztJQUN0QyxpREFBZ0M7O0lBRWhDLGtDQUlFOztJQUVBLHVDQUFtQjs7SUFDbkIsK0JBQXFCOztJQUtyQiw4QkFBb0I7O0lBZ0RSLG1DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqIFRoaXMgaXMgdGhlIGNhdGVnb3J5IGxpc3RpbmcgKiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMsIFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItQmxvZycsXG4gIHRlbXBsYXRlVXJsOiAnYmxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdHlsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGJsb2RhdGE6YW55PVtdO1xuIC8vIHNlbmQgYmFzaWMgc29ydCBkYXRhXG4gc29ydGRhdGE6YW55PXtcbiAgXCJ0eXBlXCI6J2Rlc2MnLFxuICBcImZpZWxkXCI6J3ByaW9yaXR5JyxcbiAgXCJvcHRpb25zXCI6Wydwcmlvcml0eScsJ3BhcmVudGNhdGVnb3J5bmFtZScsJ2Jsb2d0aXRsZSddXG59O1xuLy8gZGF0YWNvbGxlY3Rpb25cbmRhdGFjb2xsZWN0aW9uOiBhbnk9J2dldGJsb2dsaXN0ZGF0YSc7XG5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnQ6IGFueT0wO1xuLy8gc2VuZCBiYXNpYyBsaW1pdCBkYXRhXG5saW1pdGNvbmQ6YW55PXtcbiAgXCJsaW1pdFwiOjEwLFxuICBcInNraXBcIjowLFxuICBcInBhZ2Vjb3VudFwiOjFcbn07IFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBibG9nTGlzdENvbmZpZzphbnk7XG4gIGxvYWRlcjpib29sZWFuPWZhbHNlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIHB1YmxpYyB2YWx1ZTphbnk9W3t2YWw6JycsJ25hbWUnOicnfV07XG4gIHB1YmxpYyB2YWx1ZTphbnk9W107XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbiAgICAgZm9yIChsZXQgaSBpbiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSkge1xuICAgICAgIHRoaXMudmFsdWUucHVzaChcbiAgICAgICAgIHsgJ25hbWUnOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS5wYXJlbnRjYXRlZ29yeW5hbWUsIHZhbDogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0ucGFyZW50Y2F0ZWdvcnluYW1lIH1cbiAgICAgICAgICk7XG4gIFxuICAgfVxuXG4gICAgdGhpcy5ibG9nTGlzdENvbmZpZyA9IHtcbiAgICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXG4gICAgICBlbmRwb2ludCA6cmVjZWl2ZWREYXRhLmVuZHBvaW50LFxuICAgICAgZW5kcG9pbnRjOnJlY2VpdmVkRGF0YS5lbmRwb2ludGMsXG4gICAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXG4gICAgICBkYXRhc291cmNlOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSxcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWREYXRhLnRhYmxlTmFtZSxcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwidXBkYXRlZF9hdFwiLFwiaW1hZ2VcIixcImRlc2NyaXB0aW9uXCIsXCJwYXJlbnRjYXRlZ29yeW5hbWVfc2VhcmNoXCIsXCJibG9ndGl0bGVfc2VhcmNoXCIsXCJibG9ndGl0bGVzZWFyY2hcIl0sXG4gICAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjogeyBcImJsb2d0aXRsZVwiOlwiQ2F0ZWdvcnkgTmFtZVwiLCBcImRlc2NyaXB0aW9uIGh0bWxcIjogXCJEZXNjcmlwdGlvblwiLCBcInByaW9yaXR5XCI6IFwiUHJpb3JpdHlcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiAsXCJwYXJlbnRjYXRlZ29yeW5hbWVcIjpcIlBhcmVudCBDYXRlZ29yeSBOYW1lXCIsXCJibG9nY2F0XCI6XCJCbG9nIENhdGVnb3J5XCIsXCJkYXRlXCI6XCJEYXRlXCJ9LFxuICAgICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxuICAgICAgdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXG4gICAgICBlZGl0VXJsOiByZWNlaXZlZERhdGEuZWRpdFVybCxcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxuICAgICAgdmlldzogcmVjZWl2ZWREYXRhLnZpZXcsXG5cbiAgICAgIHNlYXJjaF9zZXR0aW5nczp7XG4gICAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBieSBCbG9nIENhdGVnb3J5IE5hbWVcIiwgZmllbGQ6ICdibG9ndGl0bGVzZWFyY2gnIH1dLFxuICAgICAgICBzZWxlY3RzZWFyY2g6IFtcbiAgICAgICAgICB7IGxhYmVsOiAnU2VhcmNoIEJ5IFN0YXR1cycsIGZpZWxkOiAnc3RhdHVzJyx2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XVxuICAgICAgICB9LFxuICAgICAgICAgIHtsYWJlbDpcIlNlYXJjaCBCeSBQYXJlbnQgQ2F0ZWdvcnkgTmFtZVwiLGZpZWxkOidwYXJlbnRjYXRlZ29yeW5hbWUnLHZhbHVlczp0aGlzLnZhbHVlfVxuICAgICAgICBdXG5cbiAgICAgICAgLy8gc2VhcmNoOlt7bGFiZWw6XCJTZWFyY2ggQnkgUGFyZW50IENhdGVnb3J5XCIsZmllbGQ6J3BhcmVudGNhdGVnb3J5bmFtZScsdmFsdWVzOnRoaXMudmFsdWV9XVxuICAgICAgfVxuICAgICAgLy8gIC8qU2hvd2luZyBJbWFnZSBpbiB0aGUgTW9kYWwqL1xuICAgICAgLy8gIHBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXlfZGV0YWlsX2RhdGF0eXBlOiBbe1xuICAgICAgLy8gICBrZXk6IFwiaW1hZ2VcIixcbiAgICAgIC8vICAgdmFsdWU6ICdpbWFnZScsXG4gICAgICAvLyAgIGZpbGV1cmw6ICdodHRwczovL3MzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2NybWZpbGVzLmluZmx1eGhvc3RzZXJ2ZXIvdGVzdGltb25pYWwvJyAgICAgICAgICAgICAvLyBJbWFnZSBwYXRoIFxuICAgICAgLy8gfV0sXG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGlTZXJ2aWNlOkFwaVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBlbmRwb2ludD10aGlzLmJsb2dMaXN0Q29uZmlnLmVuZHBvaW50O1xuICAgIGxldCBlbmRwb2ludGM9dGhpcy5ibG9nTGlzdENvbmZpZy5lbmRwb2ludGM7XG5cbiAgICBsZXQgZGF0YTphbnk9e1xuICAgICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgICAgIFwibGltaXRcIjoxMCxcbiAgICAgICAgICAgIFwic2tpcFwiOjBcbiAgICAgICAgfSxcbiAgICBzb3J0OntcbiAgICAgICAgXCJ0eXBlXCI6J2Rlc2MnLFxuICAgICAgICBcImZpZWxkXCI6J3ByaW9yaXR5J1xuICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YVdpdGhvdXRUb2tlbihlbmRwb2ludGMsIGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudCA9cmVzLmNvdW50O1xuICAgICAgXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnQsZGF0YSkuc3Vic2NyaWJlKChyZXM6YW55KSA9PiB7XG4gICAgXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgIH0pO1xuXG4gIH1cbiAgXG5cbn1cblxuIl19