/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
export class ListingBlogmanagementlibComponent {
    // ====================================================================================================
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
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
            listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "metatitle", "metadesc", "description_html", "credentials", "blogs_file", "blogs_image"],
            listArray_modify_header: {
                "blogtitle": "Blog Title", "description": "Description",
                "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name",
                "author": "Author"
            },
            admintablenameTableName: "admin",
            statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
            updateurl: receivedData.updateEndpoint,
            editUrl: receivedData.editUrl,
            jwtToken: receivedData.jwtToken,
            deleteEndPoint: receivedData.deleteEndPoint,
            view: receivedData.view,
            search_settings: {
                textsearch: [{ label: "blog title...", field: 'blogtitle' }, { label: "author...", field: 'author' }],
                selectsearch: [{ label: 'status...', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
            },
        };
        this.loader = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ListingBlogmanagementlibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-listing-blogmanagementlib',
                template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n      [datasource]=\"blogListConfig.datasource\" [skip]=\"blogListConfig.listArray_skip\"\n      [modify_header_array]=\"blogListConfig.listArray_modify_header\" [sourcedata]=\"blogListConfig.tableName\"\n      [statusarr]=\"blogListConfig.statusarr\" [jwttoken]=\"blogListConfig.jwtToken\"\n      [apiurl]=\"blogListConfig.apiUrl\" [editroute]=\"blogListConfig.editUrl\"\n      [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n      [date_search_source]=\"blogListConfig.view\"\n     [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n     [search_settings]=\"blogListConfig.search_settings\"\n     [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                styles: ["body{display:none!important}"]
            }] }
];
/** @nocollapse */
ListingBlogmanagementlibComponent.ctorParameters = () => [
    { type: ApiService }
];
ListingBlogmanagementlibComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.blogListConfig;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    ListingBlogmanagementlibComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTNUMsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7SUFnRDVDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUExQzFDLFdBQU0sR0FBWSxLQUFLLENBQUM7SUE0Q3hCLENBQUM7Ozs7Ozs7SUF4Q0QsSUFDSSxNQUFNLENBQUMsWUFBaUI7UUFFMUIsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNwQixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO1lBQ3ZDLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtZQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7WUFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO1lBQy9KLHVCQUF1QixFQUFFO2dCQUN2QixXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhO2dCQUN2RCxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCO2dCQUN4RixRQUFRLEVBQUUsUUFBUTthQUNuQjtZQUNELHVCQUF1QixFQUFFLE9BQU87WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO1lBQ3JFLFNBQVMsRUFBRSxZQUFZLENBQUMsY0FBYztZQUN0QyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87WUFDN0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQy9CLGNBQWMsRUFBRSxZQUFZLENBQUMsY0FBYztZQUMzQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7WUFDdkIsZUFBZSxFQUFFO2dCQUNmLFVBQVUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFDcEcsWUFBWSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUM1SDtTQU9GLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBU0QsUUFBUTtJQUVSLENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsaXVDQUF5RDs7YUFFMUQ7Ozs7WUFSUSxVQUFVOzs7cUJBbUJoQixLQUFLOzs7O0lBTE4sMkRBQW9COztJQUNwQixtREFBd0I7Ozs7O0lBMENaLHVEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBibG9nTGlzdENvbmZpZzogYW55O1xuICBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7XG5cbiAgICB0aGlzLmJsb2dMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJ1cGRhdGVkX2F0XCIsIFwiaW1hZ2VcIiwgXCJtZXRhdGl0bGVcIiwgXCJtZXRhZGVzY1wiLCBcImRlc2NyaXB0aW9uX2h0bWxcIiwgXCJjcmVkZW50aWFsc1wiLCBcImJsb2dzX2ZpbGVcIiwgXCJibG9nc19pbWFnZVwiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7XG4gICAgICAgIFwiYmxvZ3RpdGxlXCI6IFwiQmxvZyBUaXRsZVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIsIFwicGFyZW50Y2F0ZWdvcnluYW1lXCI6IFwiUGFyZW50IENhdGVnb3J5IE5hbWVcIixcbiAgICAgICAgXCJhdXRob3JcIjogXCJBdXRob3JcIlxuICAgICAgfSxcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxuICAgICAgc2VhcmNoX3NldHRpbmdzOiB7XG4gICAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcImJsb2cgdGl0bGUuLi5cIiwgZmllbGQ6ICdibG9ndGl0bGUnIH0seyBsYWJlbDogXCJhdXRob3IuLi5cIiwgZmllbGQ6ICdhdXRob3InIH1dLFxuICAgICAgICBzZWxlY3RzZWFyY2g6IFt7IGxhYmVsOiAnc3RhdHVzLi4uJywgZmllbGQ6ICdzdGF0dXMnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSB9XSxcbiAgICAgIH0sXG4gICAgICAvLyAgLypTaG93aW5nIEltYWdlIGluIHRoZSBNb2RhbCovXG4gICAgICAvLyAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFt7XG4gICAgICAvLyAgIGtleTogXCJpbWFnZVwiLFxuICAgICAgLy8gICB2YWx1ZTogJ2ltYWdlJyxcbiAgICAgIC8vICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZXN0aW1vbmlhbC8nICAgICAgICAgICAgIC8vIEltYWdlIHBhdGggXG4gICAgICAvLyB9XSxcbiAgICB9XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG59Il19