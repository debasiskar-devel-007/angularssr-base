/**
 * @fileoverview added by tsickle
 * Generated from: lib/blog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** This is the category listing **/
import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';
export class BlogComponent {
    // ====================================================================================================
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
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
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
        for (let i in receivedData.datasource) {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let endpoint = this.blogListConfig.endpoint;
        /** @type {?} */
        let endpointc = this.blogListConfig.endpointc;
        /** @type {?} */
        let data = {
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
        (res) => {
            this.date_search_source_count = res.count;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log('Oooops!');
        }));
        this.apiService.getDataWithoutToken(endpoint, data).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log('Oooops!');
        }));
    }
}
BlogComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-Blog',
                template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n\n        [datasource]=\"blogListConfig.datasource\" \n\n        [skip]=\"blogListConfig.listArray_skip\"\n\n        [modify_header_array]=\"blogListConfig.listArray_modify_header\" \n\n        [sourcedata]=\"blogListConfig.tableName\"\n\n        [statusarr]=\"blogListConfig.statusarr\" \n\n        [jwttoken]=\"blogListConfig.jwtToken\"\n\n        [apiurl]=\"blogListConfig.apiUrl\" \n\n        [editroute]=\"blogListConfig.editUrl\"\n\n        [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n\n        [date_search_source]=\"blogListConfig.view\"\n\n       [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n\n       [search_settings]=\"blogListConfig.search_settings\"\n\n       [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n\n       [sortdata]=\"sortdata\"\n\n       [datacollection]=\"datacollection\"\n\n        [date_search_source_count]=\"date_search_source_count\"\n\n       [limitcond]=\"limitcond\">\n       \n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                styles: [""]
            }] }
];
/** @nocollapse */
BlogComponent.ctorParameters = () => [
    { type: ApiService }
];
BlogComponent.propDecorators = {
    config: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9ibG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzNDLE1BQU0sT0FBTyxhQUFhOzs7OztJQXdFeEIsWUFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQXZFakMsWUFBTyxHQUFLLEVBQUUsQ0FBQzs7UUFFdkIsYUFBUSxHQUFLO1lBQ1osTUFBTSxFQUFDLE1BQU07WUFDYixPQUFPLEVBQUMsVUFBVTtZQUNsQixTQUFTLEVBQUMsQ0FBQyxVQUFVLEVBQUMsb0JBQW9CLEVBQUMsV0FBVyxDQUFDO1NBQ3hELENBQUM7O1FBRUYsbUJBQWMsR0FBTSxpQkFBaUIsQ0FBQztRQUN0Qyw2QkFBd0IsR0FBTSxDQUFDLENBQUM7O1FBRWhDLGNBQVMsR0FBSztZQUNaLE9BQU8sRUFBQyxFQUFFO1lBQ1YsTUFBTSxFQUFDLENBQUM7WUFDUixXQUFXLEVBQUMsQ0FBQztTQUNkLENBQUM7UUFHQSxXQUFNLEdBQVMsS0FBSyxDQUFDOzs7O1FBS2QsVUFBSyxHQUFLLEVBQUUsQ0FBQztJQWdEd0IsQ0FBQzs7Ozs7SUEvQzdDLElBQ0ksTUFBTSxDQUFDLFlBQWlCO1FBQ3pCLEtBQUssSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLFVBQVUsRUFBRTtZQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQzVH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QUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsR0FBTyxFQUFFLEVBQUU7UUFFekUsQ0FBQzs7OztRQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztJQUVMLENBQUM7OztZQTNHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLCsvQ0FBa0M7O2FBRW5DOzs7O1lBTlEsVUFBVTs7O3FCQWdDaEIsS0FBSzs7OztJQXhCTixnQ0FBc0I7O0lBRXZCLGlDQUlDOztJQUVGLHVDQUFzQzs7SUFDdEMsaURBQWdDOztJQUVoQyxrQ0FJRTs7SUFFQSx1Q0FBbUI7O0lBQ25CLCtCQUFxQjs7SUFLckIsOEJBQW9COztJQWdEUixtQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKiBUaGlzIGlzIHRoZSBjYXRlZ29yeSBsaXN0aW5nICoqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLUJsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2Jsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3R5bGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBibG9kYXRhOmFueT1bXTtcbiAvLyBzZW5kIGJhc2ljIHNvcnQgZGF0YVxuIHNvcnRkYXRhOmFueT17XG4gIFwidHlwZVwiOidkZXNjJyxcbiAgXCJmaWVsZFwiOidwcmlvcml0eScsXG4gIFwib3B0aW9uc1wiOlsncHJpb3JpdHknLCdwYXJlbnRjYXRlZ29yeW5hbWUnLCdibG9ndGl0bGUnXVxufTtcbi8vIGRhdGFjb2xsZWN0aW9uXG5kYXRhY29sbGVjdGlvbjogYW55PSdnZXRibG9nbGlzdGRhdGEnO1xuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50OiBhbnk9MDtcbi8vIHNlbmQgYmFzaWMgbGltaXQgZGF0YVxubGltaXRjb25kOmFueT17XG4gIFwibGltaXRcIjoxMCxcbiAgXCJza2lwXCI6MCxcbiAgXCJwYWdlY291bnRcIjoxXG59OyBcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgYmxvZ0xpc3RDb25maWc6YW55O1xuICBsb2FkZXI6Ym9vbGVhbj1mYWxzZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBwdWJsaWMgdmFsdWU6YW55PVt7dmFsOicnLCduYW1lJzonJ31dO1xuICBwdWJsaWMgdmFsdWU6YW55PVtdO1xuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7XG4gICAgIGZvciAobGV0IGkgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UpIHtcbiAgICAgICB0aGlzLnZhbHVlLnB1c2goXG4gICAgICAgICB7ICduYW1lJzogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0ucGFyZW50Y2F0ZWdvcnluYW1lLCB2YWw6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLnBhcmVudGNhdGVnb3J5bmFtZSB9XG4gICAgICAgICApO1xuICBcbiAgIH1cblxuICAgIHRoaXMuYmxvZ0xpc3RDb25maWcgPSB7XG4gICAgICBhcGlVcmw6IHJlY2VpdmVkRGF0YS5hcGlCYXNlVXJsLFxuICAgICAgZW5kcG9pbnQgOnJlY2VpdmVkRGF0YS5lbmRwb2ludCxcbiAgICAgIGVuZHBvaW50YzpyZWNlaXZlZERhdGEuZW5kcG9pbnRjLFxuICAgICAgbGlzdEVuZFBvaW50OiByZWNlaXZlZERhdGEubGlzdEVuZFBvaW50LFxuICAgICAgZGF0YXNvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsXG4gICAgICB0YWJsZU5hbWU6IHJlY2VpdmVkRGF0YS50YWJsZU5hbWUsXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcInVwZGF0ZWRfYXRcIixcImltYWdlXCIsXCJkZXNjcmlwdGlvblwiLFwicGFyZW50Y2F0ZWdvcnluYW1lX3NlYXJjaFwiLFwiYmxvZ3RpdGxlX3NlYXJjaFwiLFwiYmxvZ3RpdGxlc2VhcmNoXCJdLFxuICAgICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHsgXCJibG9ndGl0bGVcIjpcIkNhdGVnb3J5IE5hbWVcIiwgXCJkZXNjcmlwdGlvbiBodG1sXCI6IFwiRGVzY3JpcHRpb25cIiwgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIgLFwicGFyZW50Y2F0ZWdvcnluYW1lXCI6XCJQYXJlbnQgQ2F0ZWdvcnkgTmFtZVwiLFwiYmxvZ2NhdFwiOlwiQmxvZyBDYXRlZ29yeVwiLFwiZGF0ZVwiOlwiRGF0ZVwifSxcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxuXG4gICAgICBzZWFyY2hfc2V0dGluZ3M6e1xuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggYnkgQmxvZyBDYXRlZ29yeSBOYW1lXCIsIGZpZWxkOiAnYmxvZ3RpdGxlc2VhcmNoJyB9XSxcbiAgICAgICAgc2VsZWN0c2VhcmNoOiBbXG4gICAgICAgICAgeyBsYWJlbDogJ1NlYXJjaCBCeSBTdGF0dXMnLCBmaWVsZDogJ3N0YXR1cycsdmFsdWVzOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV1cbiAgICAgICAgfSxcbiAgICAgICAgICB7bGFiZWw6XCJTZWFyY2ggQnkgUGFyZW50IENhdGVnb3J5IE5hbWVcIixmaWVsZDoncGFyZW50Y2F0ZWdvcnluYW1lJyx2YWx1ZXM6dGhpcy52YWx1ZX1cbiAgICAgICAgXVxuXG4gICAgICAgIC8vIHNlYXJjaDpbe2xhYmVsOlwiU2VhcmNoIEJ5IFBhcmVudCBDYXRlZ29yeVwiLGZpZWxkOidwYXJlbnRjYXRlZ29yeW5hbWUnLHZhbHVlczp0aGlzLnZhbHVlfV1cbiAgICAgIH1cbiAgICAgIC8vICAvKlNob3dpbmcgSW1hZ2UgaW4gdGhlIE1vZGFsKi9cbiAgICAgIC8vICBwZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5X2RldGFpbF9kYXRhdHlwZTogW3tcbiAgICAgIC8vICAga2V5OiBcImltYWdlXCIsXG4gICAgICAvLyAgIHZhbHVlOiAnaW1hZ2UnLFxuICAgICAgLy8gICBmaWxldXJsOiAnaHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9jcm1maWxlcy5pbmZsdXhob3N0c2VydmVyL3Rlc3RpbW9uaWFsLycgICAgICAgICAgICAgLy8gSW1hZ2UgcGF0aCBcbiAgICAgIC8vIH1dLFxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpU2VydmljZTpBcGlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgZW5kcG9pbnQ9dGhpcy5ibG9nTGlzdENvbmZpZy5lbmRwb2ludDtcbiAgICBsZXQgZW5kcG9pbnRjPXRoaXMuYmxvZ0xpc3RDb25maWcuZW5kcG9pbnRjO1xuXG4gICAgbGV0IGRhdGE6YW55PXtcbiAgICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgICAgICBcImxpbWl0XCI6MTAsXG4gICAgICAgICAgICBcInNraXBcIjowXG4gICAgICAgIH0sXG4gICAgc29ydDp7XG4gICAgICAgIFwidHlwZVwiOidkZXNjJyxcbiAgICAgICAgXCJmaWVsZFwiOidwcmlvcml0eSdcbiAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnRjLCBkYXRhKS5zdWJzY3JpYmUoKHJlczphbnkpID0+IHtcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnQgPXJlcy5jb3VudDtcbiAgICAgIFxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhV2l0aG91dFRva2VuKGVuZHBvaW50LGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgIFxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICB9KTtcblxuICB9XG4gIFxuXG59XG5cbiJdfQ==