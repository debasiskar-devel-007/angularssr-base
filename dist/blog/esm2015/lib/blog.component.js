/**
 * @fileoverview added by tsickle
 * Generated from: lib/blog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** This is the category listing **/
import { Component, Input } from '@angular/core';
export class BlogComponent {
    // ====================================================================================================
    constructor() {
        this.loader = false;
    }
    // ======================================================================================
    // ================================================Input For Lib Listing================================
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
        this.blogListConfig = {
            apiUrl: receivedData.apiBaseUrl,
            listEndPoint: receivedData.listEndPoint,
            datasource: receivedData.datasource,
            tableName: receivedData.tableName,
            listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "description_html", "parentcategoryname_search", "blogtitle_search"],
            listArray_modify_header: { "blogtitle": "Blog Title", "description": "Description", "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name", "blogcat": "Blog Category", "date": "Date" },
            admintablenameTableName: "admin",
            statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
            updateurl: receivedData.updateEndpoint,
            editUrl: receivedData.editUrl,
            jwtToken: receivedData.jwtToken,
            deleteEndPoint: receivedData.deleteEndPoint,
            view: receivedData.view,
            search_settings: {
                textsearch: [{ label: "Search by blog title...", field: 'blogtitle_search' }, { label: "Search by parent category...", field: 'parentcategoryname_search' }],
                selectsearch: [{ label: 'Search By status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }]
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
    }
}
BlogComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-Blog',
                template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n        [datasource]=\"blogListConfig.datasource\" [skip]=\"blogListConfig.listArray_skip\"\n        [modify_header_array]=\"blogListConfig.listArray_modify_header\" [sourcedata]=\"blogListConfig.tableName\"\n        [statusarr]=\"blogListConfig.statusarr\" [jwttoken]=\"blogListConfig.jwtToken\"\n        [apiurl]=\"blogListConfig.apiUrl\" [editroute]=\"blogListConfig.editUrl\"\n        [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n        [date_search_source]=\"blogListConfig.view\"\n       [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n       [search_settings]=\"blogListConfig.search_settings\"\n       [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\">\n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                styles: [""]
            }] }
];
/** @nocollapse */
BlogComponent.ctorParameters = () => [];
BlogComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BlogComponent.prototype.blogListConfig;
    /** @type {?} */
    BlogComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9ibG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN6RCxNQUFNLE9BQU8sYUFBYTs7SUF3Q3hCO1FBcENBLFdBQU0sR0FBUyxLQUFLLENBQUM7SUFvQ0wsQ0FBQzs7Ozs7OztJQWhDakIsSUFDSSxNQUFNLENBQUMsWUFBaUI7UUFFMUIsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNwQixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO1lBQ3ZDLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtZQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7WUFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQywyQkFBMkIsRUFBQyxrQkFBa0IsQ0FBQztZQUN2SSx1QkFBdUIsRUFBRSxFQUFFLFdBQVcsRUFBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUMsc0JBQXNCLEVBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDO1lBQ25OLHVCQUF1QixFQUFFLE9BQU87WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO1lBQ3JFLFNBQVMsRUFBRSxZQUFZLENBQUMsY0FBYztZQUN0QyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87WUFDN0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQy9CLGNBQWMsRUFBRSxZQUFZLENBQUMsY0FBYztZQUMzQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7WUFDdkIsZUFBZSxFQUFDO2dCQUNkLFVBQVUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxFQUFDLEVBQUUsS0FBSyxFQUFFLDhCQUE4QixFQUFFLEtBQUssRUFBRSwyQkFBMkIsRUFBRSxDQUFDO2dCQUMzSixZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDbkk7WUFDRCxrQ0FBa0M7WUFDbEMsb0RBQW9EO1lBQ3BELGtCQUFrQjtZQUNsQixvQkFBb0I7WUFDcEIsb0hBQW9IO1lBQ3BILE1BQU07U0FDUCxDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUtELFFBQVE7SUFDUixDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiw2dkNBQWtDOzthQUVuQzs7Ozs7cUJBU0UsS0FBSzs7OztJQUxOLHVDQUFtQjs7SUFDbkIsK0JBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiogVGhpcyBpcyB0aGUgY2F0ZWdvcnkgbGlzdGluZyAqKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcywgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1CbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdibG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuIFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBibG9nTGlzdENvbmZpZzphbnk7XG4gIGxvYWRlcjpib29sZWFuPWZhbHNlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbiAgIFxuICAgIHRoaXMuYmxvZ0xpc3RDb25maWcgPSB7XG4gICAgICBhcGlVcmw6IHJlY2VpdmVkRGF0YS5hcGlCYXNlVXJsLFxuICAgICAgbGlzdEVuZFBvaW50OiByZWNlaXZlZERhdGEubGlzdEVuZFBvaW50LFxuICAgICAgZGF0YXNvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsXG4gICAgICB0YWJsZU5hbWU6IHJlY2VpdmVkRGF0YS50YWJsZU5hbWUsXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcInVwZGF0ZWRfYXRcIixcImltYWdlXCIsXCJkZXNjcmlwdGlvbl9odG1sXCIsXCJwYXJlbnRjYXRlZ29yeW5hbWVfc2VhcmNoXCIsXCJibG9ndGl0bGVfc2VhcmNoXCJdLFxuICAgICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHsgXCJibG9ndGl0bGVcIjpcIkJsb2cgVGl0bGVcIiwgXCJkZXNjcmlwdGlvblwiOiBcIkRlc2NyaXB0aW9uXCIsIFwicHJpb3JpdHlcIjogXCJQcmlvcml0eVwiLCBcInN0YXR1c1wiOiBcIlN0YXR1c1wiICxcInBhcmVudGNhdGVnb3J5bmFtZVwiOlwiUGFyZW50IENhdGVnb3J5IE5hbWVcIixcImJsb2djYXRcIjpcIkJsb2cgQ2F0ZWdvcnlcIixcImRhdGVcIjpcIkRhdGVcIn0sXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxuICAgICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcbiAgICAgIHNlYXJjaF9zZXR0aW5nczp7XG4gICAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBieSBibG9nIHRpdGxlLi4uXCIsIGZpZWxkOiAnYmxvZ3RpdGxlX3NlYXJjaCcgfSx7IGxhYmVsOiBcIlNlYXJjaCBieSBwYXJlbnQgY2F0ZWdvcnkuLi5cIiwgZmllbGQ6ICdwYXJlbnRjYXRlZ29yeW5hbWVfc2VhcmNoJyB9XSxcbiAgICAgICAgc2VsZWN0c2VhcmNoOiBbeyBsYWJlbDogJ1NlYXJjaCBCeSBzdGF0dXMnLCBmaWVsZDogJ3N0YXR1cycsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dIH1dXG4gICAgICB9XG4gICAgICAvLyAgLypTaG93aW5nIEltYWdlIGluIHRoZSBNb2RhbCovXG4gICAgICAvLyAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFt7XG4gICAgICAvLyAgIGtleTogXCJpbWFnZVwiLFxuICAgICAgLy8gICB2YWx1ZTogJ2ltYWdlJyxcbiAgICAgIC8vICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZXN0aW1vbmlhbC8nICAgICAgICAgICAgIC8vIEltYWdlIHBhdGggXG4gICAgICAvLyB9XSxcbiAgICB9XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG5cbiJdfQ==