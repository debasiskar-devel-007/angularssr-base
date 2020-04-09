/**
 * @fileoverview added by tsickle
 * Generated from: lib/listing-blogmanagementlib/listing-blogmanagementlib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
/**
 * This is the actuali main blog page *
 */
var ListingBlogmanagementlibComponent = /** @class */ (function () {
    // ====================================================================================================
    function ListingBlogmanagementlibComponent(apiService) {
        this.apiService = apiService;
        this.value = [];
        this.loader = false;
        // ======================================================================================
        // send basic sort data
        this.sortdata = {
            "type": 'desc',
            "field": 'priority',
            "options": ['author', 'blogcategory', 'blogtitle', 'priority']
        };
        // datacollection
        this.datacollection = 'getblogmanagementlistdata';
        this.date_search_source_count = 0;
        // send basic limit data
        this.limitcond = {
            "limit": 10,
            "skip": 0,
            "pagecount": 1
        };
    }
    Object.defineProperty(ListingBlogmanagementlibComponent.prototype, "config", {
        // ================================================Input For Lib Listing================================
        set: 
        // ================================================Input For Lib Listing================================
        /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            for (var i in receivedData.datasource) {
                this.value.push({ 'name': receivedData.datasource[i].blogcategory, val: receivedData.datasource[i].blogcategory });
            }
            //  this.value = receivedData;
            this.blogListConfig = {
                apiUrl: receivedData.apiBaseUrl,
                endpoint: receivedData.endpoint,
                endpointc: receivedData.endpointc,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "metatitle", "metadesc", "description", "credentials", "blogs_file", "blogs_image", "blogtitle_search", "author_search", "video", "blogcat", "profile_picture", "tagsearch", "featured"],
                listArray_modify_header: {
                    "blogtitle": "Blog Title", "description html": "Description", "date added": "Date", "profile picture": "Profile Picture", "tags": "Tags",
                    "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name",
                    "author": "Author", "blogcat": "Blog Category", "date": "Date", "blogcategory": "Blog Category",
                    "featured search": "Featured", "website": "Website"
                },
                adminDataList_detail_skip: ['_id', 'password', 'updated_at', 'id', "description_html", "blogcat", "created_at", "profile_picture", "tagsearch"],
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                search_settings: {
                    textsearch: [{ label: "Search By Blog Title", field: 'blogtitle_search' }, { label: "Search By Author", field: 'author_search' }, { label: "Search By Tags", field: 'tagsearch' }],
                    selectsearch: [
                        { label: 'Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }, { label: "Search By Blog Category", field: 'blogcategory', values: this.value },
                        {
                            label: 'Search By Blog Featured', field: 'featured', values: [{ val: 1, name: "Yes" }, { val: 0, name: 'No' }]
                        },
                        {
                            label: 'Search By Blog Website', field: 'website', values: [{ val: "Mask Blog 1", name: "Mask Blog 1" }, { val: "Mask Blog 2", name: 'Mask Blog 2' }, { val: "Mask Blog 3", name: "Mask Blog 3" }]
                        }
                    ]
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
    ListingBlogmanagementlibComponent.prototype.ngOnInit = /**
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
            // console.log('in constructor');
            // console.log(result);
            _this.date_search_source_count = res.count;
            console.warn('blogData c', res);
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
            // console.log('in constructor');
            // console.log(result);
            // this.pendingmodelapplicationarray =res.results.res;
            //console.warn('blogData',res);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log('Oooops!');
        }));
    };
    ListingBlogmanagementlibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-blogmanagementlib',
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n      [datasource]=\"blogListConfig.datasource\" [skip]=\"blogListConfig.listArray_skip\"\n      [modify_header_array]=\"blogListConfig.listArray_modify_header\" [sourcedata]=\"blogListConfig.tableName\"\n      [statusarr]=\"blogListConfig.statusarr\" [jwttoken]=\"blogListConfig.jwtToken\"\n      [apiurl]=\"blogListConfig.apiUrl\" [editroute]=\"blogListConfig.editUrl\"\n      [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n      [date_search_source]=\"blogListConfig.view\"\n     [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n     [search_settings]=\"blogListConfig.search_settings\"\n     [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n     [sortdata]=\"sortdata\"\n     [datacollection]=\"datacollection\"\n     [date_search_source_count]=\"date_search_source_count\"\n     [limitcond]=\"limitcond\"\n     [detail_skip_array]=\"blogListConfig.adminDataList_detail_skip\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: ["body{display:none!important}"]
                }] }
    ];
    /** @nocollapse */
    ListingBlogmanagementlibComponent.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    ListingBlogmanagementlibComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingBlogmanagementlibComponent;
}());
export { ListingBlogmanagementlibComponent };
if (false) {
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.value;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.blogListConfig;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.loader;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.sortdata;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.datacollection;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.date_search_source_count;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.limitcond;
    /**
     * @type {?}
     * @private
     */
    ListingBlogmanagementlibComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSTVDO0lBbUZFLHVHQUF1RztJQUl2RywyQ0FBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWhGckMsVUFBSyxHQUFLLEVBQUUsQ0FBQztRQUlsQixXQUFNLEdBQVksS0FBSyxDQUFDOzs7UUFHekIsYUFBUSxHQUFLO1lBQ1osTUFBTSxFQUFDLE1BQU07WUFDYixPQUFPLEVBQUMsVUFBVTtZQUNsQixTQUFTLEVBQUMsQ0FBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxVQUFVLENBQUM7U0FDM0QsQ0FBQzs7UUFFRixtQkFBYyxHQUFNLDJCQUEyQixDQUFDO1FBQ2hELDZCQUF3QixHQUFNLENBQUMsQ0FBQzs7UUFFaEMsY0FBUyxHQUFLO1lBQ1osT0FBTyxFQUFDLEVBQUU7WUFDVixNQUFNLEVBQUMsQ0FBQztZQUNSLFdBQVcsRUFBQyxDQUFDO1NBQ2QsQ0FBQztJQThEQSxDQUFDO0lBNURELHNCQUNJLHFEQUFNO1FBRlYsd0dBQXdHOzs7Ozs7O1FBQ3hHLFVBQ1csWUFBaUI7WUFDOUIsS0FBSyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsVUFBVSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FDaEcsQ0FBQzthQUVMO1lBQ0MsOEJBQThCO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUc7Z0JBQ3BCLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDL0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO2dCQUMvQixTQUFTLEVBQUMsWUFBWSxDQUFDLFNBQVM7Z0JBQ2hDLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtnQkFDdkMsVUFBVSxFQUFFLFlBQVksQ0FBQyxVQUFVO2dCQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7Z0JBQ2pDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUMsa0JBQWtCLEVBQUMsZUFBZSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLFVBQVUsQ0FBQztnQkFDeFAsdUJBQXVCLEVBQUU7b0JBQ3ZCLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxFQUFDLE1BQU07b0JBQ2xJLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0I7b0JBQ3hGLFFBQVEsRUFBRSxRQUFRLEVBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxlQUFlO29CQUN6RixpQkFBaUIsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFNBQVM7aUJBQ2pEO2dCQUNELHlCQUF5QixFQUFDLENBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxDQUFDO2dCQUN0SSx1QkFBdUIsRUFBRSxPQUFPO2dCQUNoQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0JBQ3JFLFNBQVMsRUFBRSxZQUFZLENBQUMsY0FBYztnQkFDdEMsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPO2dCQUM3QixRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7Z0JBQy9CLGNBQWMsRUFBRSxZQUFZLENBQUMsY0FBYztnQkFDM0MsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJO2dCQUN2QixlQUFlLEVBQUU7b0JBQ2YsVUFBVSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEVBQUMsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFDLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQztvQkFFaEwsWUFBWSxFQUFFO3dCQUNaLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMseUJBQXlCLEVBQUMsS0FBSyxFQUFDLGNBQWMsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQzt3QkFDaEw7NEJBQ0UsS0FBSyxFQUFFLHlCQUF5QixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO3lCQUMvRzt3QkFDRDs0QkFDRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUMsRUFBQyxHQUFHLEVBQUMsYUFBYSxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsQ0FBQzt5QkFDN0w7cUJBQ0Y7aUJBRUY7YUFPRixDQUFBO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7Ozs7SUFTRCxvREFBUTs7O0lBQVI7UUFBQSxpQkFrQ0M7O1lBakNLLFFBQVEsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVE7O1lBQ3JDLFNBQVMsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVM7O1lBQ3ZDLElBQUksR0FBSztZQUNULFdBQVcsRUFBQztnQkFDUixPQUFPLEVBQUMsRUFBRTtnQkFDVixNQUFNLEVBQUMsQ0FBQzthQUNYO1lBQ0wsSUFBSSxFQUFDO2dCQUNELE1BQU0sRUFBQyxNQUFNO2dCQUNiLE9BQU8sRUFBQyxVQUFVO2FBQ3JCO1NBRUE7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxHQUFPO1lBQ25FLGlDQUFpQztZQUNqQyx1QkFBdUI7WUFDdkIsS0FBSSxDQUFDLHdCQUF3QixHQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFFbkMsQ0FBQzs7OztRQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxHQUFPO1lBQ2pFLGlDQUFpQztZQUNqQyx1QkFBdUI7WUFDdkIsc0RBQXNEO1lBQ3RELCtCQUErQjtRQUVuQyxDQUFDOzs7O1FBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztJQUVMLENBQUM7O2dCQTdIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsODhDQUF5RDs7aUJBRTFEOzs7O2dCQVJRLFVBQVU7Ozt5QkFpQ2hCLEtBQUs7O0lBaUdSLHdDQUFDO0NBQUEsQUE5SEQsSUE4SEM7U0F6SFksaUNBQWlDOzs7SUFFOUMsa0RBQW9COztJQUdsQiwyREFBb0I7O0lBQ3BCLG1EQUF3Qjs7SUFHekIscURBSUM7O0lBRUYsMkRBQWdEOztJQUNoRCxxRUFBZ0M7O0lBRWhDLHNEQUlFOzs7OztJQTREWSx1REFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5cbi8qKiBUaGlzIGlzIHRoZSBhY3R1YWxpIG1haW4gYmxvZyBwYWdlICoqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxucHVibGljIHZhbHVlOmFueT1bXTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBibG9nTGlzdENvbmZpZzogYW55O1xuICBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAvLyBzZW5kIGJhc2ljIHNvcnQgZGF0YVxuIHNvcnRkYXRhOmFueT17XG4gIFwidHlwZVwiOidkZXNjJyxcbiAgXCJmaWVsZFwiOidwcmlvcml0eScsXG4gIFwib3B0aW9uc1wiOlsnYXV0aG9yJywnYmxvZ2NhdGVnb3J5JywnYmxvZ3RpdGxlJywncHJpb3JpdHknXVxufTtcbi8vIGRhdGFjb2xsZWN0aW9uXG5kYXRhY29sbGVjdGlvbjogYW55PSdnZXRibG9nbWFuYWdlbWVudGxpc3RkYXRhJztcbmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudDogYW55PTA7XG4vLyBzZW5kIGJhc2ljIGxpbWl0IGRhdGFcbmxpbWl0Y29uZDphbnk9e1xuICBcImxpbWl0XCI6MTAsXG4gIFwic2tpcFwiOjAsXG4gIFwicGFnZWNvdW50XCI6MVxufTsgXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbmZvciAobGV0IGkgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UpIHtcbiAgdGhpcy52YWx1ZS5wdXNoKFxuICAgIHsgJ25hbWUnOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS5ibG9nY2F0ZWdvcnksIHZhbDogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0uYmxvZ2NhdGVnb3J5IH1cbiAgICApO1xuXG59XG4gIC8vICB0aGlzLnZhbHVlID0gcmVjZWl2ZWREYXRhO1xuICAgIHRoaXMuYmxvZ0xpc3RDb25maWcgPSB7XG4gICAgICBhcGlVcmw6IHJlY2VpdmVkRGF0YS5hcGlCYXNlVXJsLFxuICAgICAgZW5kcG9pbnQgOnJlY2VpdmVkRGF0YS5lbmRwb2ludCxcbiAgICAgIGVuZHBvaW50YzpyZWNlaXZlZERhdGEuZW5kcG9pbnRjLFxuICAgICAgbGlzdEVuZFBvaW50OiByZWNlaXZlZERhdGEubGlzdEVuZFBvaW50LFxuICAgICAgZGF0YXNvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsXG4gICAgICB0YWJsZU5hbWU6IHJlY2VpdmVkRGF0YS50YWJsZU5hbWUsXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcInVwZGF0ZWRfYXRcIiwgXCJpbWFnZVwiLCBcIm1ldGF0aXRsZVwiLCBcIm1ldGFkZXNjXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJjcmVkZW50aWFsc1wiLCBcImJsb2dzX2ZpbGVcIiwgXCJibG9nc19pbWFnZVwiLFwiYmxvZ3RpdGxlX3NlYXJjaFwiLFwiYXV0aG9yX3NlYXJjaFwiLFwidmlkZW9cIixcImJsb2djYXRcIixcInByb2ZpbGVfcGljdHVyZVwiLFwidGFnc2VhcmNoXCIsXCJmZWF0dXJlZFwiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7XG4gICAgICAgIFwiYmxvZ3RpdGxlXCI6IFwiQmxvZyBUaXRsZVwiLCBcImRlc2NyaXB0aW9uIGh0bWxcIjogXCJEZXNjcmlwdGlvblwiLFwiZGF0ZSBhZGRlZFwiOlwiRGF0ZVwiLFwicHJvZmlsZSBwaWN0dXJlXCI6XCJQcm9maWxlIFBpY3R1cmVcIixcInRhZ3NcIjpcIlRhZ3NcIixcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIsIFwicGFyZW50Y2F0ZWdvcnluYW1lXCI6IFwiUGFyZW50IENhdGVnb3J5IE5hbWVcIixcbiAgICAgICAgXCJhdXRob3JcIjogXCJBdXRob3JcIixcImJsb2djYXRcIjpcIkJsb2cgQ2F0ZWdvcnlcIixcImRhdGVcIjpcIkRhdGVcIixcImJsb2djYXRlZ29yeVwiOlwiQmxvZyBDYXRlZ29yeVwiLFxuICAgICAgICBcImZlYXR1cmVkIHNlYXJjaFwiOlwiRmVhdHVyZWRcIixcIndlYnNpdGVcIjpcIldlYnNpdGVcIlxuICAgICAgfSxcbiAgICAgIGFkbWluRGF0YUxpc3RfZGV0YWlsX3NraXA6WydfaWQnLCdwYXNzd29yZCcsJ3VwZGF0ZWRfYXQnLCdpZCcsXCJkZXNjcmlwdGlvbl9odG1sXCIsXCJibG9nY2F0XCIsXCJjcmVhdGVkX2F0XCIsXCJwcm9maWxlX3BpY3R1cmVcIixcInRhZ3NlYXJjaFwiXSxcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxuICAgICAgc2VhcmNoX3NldHRpbmdzOiB7XG4gICAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBCeSBCbG9nIFRpdGxlXCIsIGZpZWxkOiAnYmxvZ3RpdGxlX3NlYXJjaCcgfSx7IGxhYmVsOiBcIlNlYXJjaCBCeSBBdXRob3JcIiwgZmllbGQ6ICdhdXRob3Jfc2VhcmNoJyB9LHsgbGFiZWw6IFwiU2VhcmNoIEJ5IFRhZ3NcIiwgZmllbGQ6ICd0YWdzZWFyY2gnIH1dLFxuXG4gICAgICAgIHNlbGVjdHNlYXJjaDogW1xuICAgICAgICAgIHsgbGFiZWw6ICdTdGF0dXMnLCBmaWVsZDogJ3N0YXR1cycsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dfSx7bGFiZWw6XCJTZWFyY2ggQnkgQmxvZyBDYXRlZ29yeVwiLGZpZWxkOidibG9nY2F0ZWdvcnknLHZhbHVlczp0aGlzLnZhbHVlfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1NlYXJjaCBCeSBCbG9nIEZlYXR1cmVkJywgZmllbGQ6ICdmZWF0dXJlZCcsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIlllc1wiIH0sIHsgdmFsOiAwLCBuYW1lOiAnTm8nIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1NlYXJjaCBCeSBCbG9nIFdlYnNpdGUnLCBmaWVsZDogJ3dlYnNpdGUnLCB2YWx1ZXM6IFt7IHZhbDogXCJNYXNrIEJsb2cgMVwiLCBuYW1lOiBcIk1hc2sgQmxvZyAxXCIgfSwgeyB2YWw6IFwiTWFzayBCbG9nIDJcIiwgbmFtZTogJ01hc2sgQmxvZyAyJyB9LHt2YWw6XCJNYXNrIEJsb2cgM1wiLG5hbWU6XCJNYXNrIEJsb2cgM1wifV1cbiAgICAgICAgICB9XG4gICAgICAgIF1cblxuICAgICAgfSxcbiAgICAgIC8vICAvKlNob3dpbmcgSW1hZ2UgaW4gdGhlIE1vZGFsKi9cbiAgICAgIC8vICBwZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5X2RldGFpbF9kYXRhdHlwZTogW3tcbiAgICAgIC8vICAga2V5OiBcImltYWdlXCIsXG4gICAgICAvLyAgIHZhbHVlOiAnaW1hZ2UnLFxuICAgICAgLy8gICBmaWxldXJsOiAnaHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9jcm1maWxlcy5pbmZsdXhob3N0c2VydmVyL3Rlc3RpbW9uaWFsLycgICAgICAgICAgICAgLy8gSW1hZ2UgcGF0aCBcbiAgICAgIC8vIH1dLFxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcbiAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGVuZHBvaW50PXRoaXMuYmxvZ0xpc3RDb25maWcuZW5kcG9pbnQ7XG4gICAgbGV0IGVuZHBvaW50Yz10aGlzLmJsb2dMaXN0Q29uZmlnLmVuZHBvaW50YztcbiAgICBsZXQgZGF0YTphbnk9e1xuICAgICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgICAgIFwibGltaXRcIjoxMCxcbiAgICAgICAgICAgIFwic2tpcFwiOjBcbiAgICAgICAgfSxcbiAgICBzb3J0OntcbiAgICAgICAgXCJ0eXBlXCI6J2Rlc2MnLFxuICAgICAgICBcImZpZWxkXCI6J3ByaW9yaXR5J1xuICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YVdpdGhvdXRUb2tlbihlbmRwb2ludGMsIGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gY29uc3RydWN0b3InKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnQgPXJlcy5jb3VudDtcbiAgICAgICAgY29uc29sZS53YXJuKCdibG9nRGF0YSBjJyxyZXMpO1xuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnQsZGF0YSkuc3Vic2NyaWJlKChyZXM6YW55KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBjb25zdHJ1Y3RvcicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAvLyB0aGlzLnBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXkgPXJlcy5yZXN1bHRzLnJlcztcbiAgICAgICAgLy9jb25zb2xlLndhcm4oJ2Jsb2dEYXRhJyxyZXMpO1xuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgIH0pO1xuXG4gIH1cbn0iXX0=