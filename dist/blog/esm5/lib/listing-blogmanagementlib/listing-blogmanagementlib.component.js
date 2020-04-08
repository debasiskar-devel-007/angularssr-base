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
                listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "metatitle", "metadesc", "description", "credentials", "blogs_file", "blogs_image", "blogtitle_search", "author_search", "video", "blogcat", "profile_picture", "tagsearch"],
                listArray_modify_header: {
                    "blogtitle": "Blog Title", "description html": "Description", "date added": "Date", "profile picture": "Profile Picture", "tags": "Tags",
                    "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name",
                    "author": "Author", "blogcat": "Blog Category", "date": "Date", "blogcategory": "Blog Category"
                },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                search_settings: {
                    textsearch: [{ label: "Blog Title", field: 'blogtitle' }, { label: "Search By Author", field: 'author' }, { label: "Search By Tags", field: 'tagsearch' }],
                    selectsearch: [
                        { label: 'Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }, { label: "Search By Blog Category", field: 'blogcategory', values: this.value },
                        {
                            label: 'Search By Blog Featured', field: 'featured', values: [{ val: 1, name: "Yes" }, { val: 0, name: 'No' }]
                        },
                        {
                            label: 'Search By Blog Website', field: 'website', values: [{ val: 1, name: "Mask Blog 1" }, { val: 2, name: 'Mask Blog 2' }, { val: 3, name: "Mask Blog 3" }]
                        }
                    ]
                    // datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],
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
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n      [datasource]=\"blogListConfig.datasource\" [skip]=\"blogListConfig.listArray_skip\"\n      [modify_header_array]=\"blogListConfig.listArray_modify_header\" [sourcedata]=\"blogListConfig.tableName\"\n      [statusarr]=\"blogListConfig.statusarr\" [jwttoken]=\"blogListConfig.jwtToken\"\n      [apiurl]=\"blogListConfig.apiUrl\" [editroute]=\"blogListConfig.editUrl\"\n      [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n      [date_search_source]=\"blogListConfig.view\"\n     [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n     [search_settings]=\"blogListConfig.search_settings\"\n     [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n     [sortdata]=\"sortdata\"\n     [datacollection]=\"datacollection\"\n     [date_search_source_count]=\"date_search_source_count\"\n     [limitcond]=\"limitcond\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSTVDO0lBa0ZFLHVHQUF1RztJQUl2RywyQ0FBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQS9FckMsVUFBSyxHQUFLLEVBQUUsQ0FBQztRQUlsQixXQUFNLEdBQVksS0FBSyxDQUFDOzs7UUFHekIsYUFBUSxHQUFLO1lBQ1osTUFBTSxFQUFDLE1BQU07WUFDYixPQUFPLEVBQUMsVUFBVTtZQUNsQixTQUFTLEVBQUMsQ0FBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxVQUFVLENBQUM7U0FDM0QsQ0FBQzs7UUFFRixtQkFBYyxHQUFNLDJCQUEyQixDQUFDO1FBQ2hELDZCQUF3QixHQUFNLENBQUMsQ0FBQzs7UUFFaEMsY0FBUyxHQUFLO1lBQ1osT0FBTyxFQUFDLEVBQUU7WUFDVixNQUFNLEVBQUMsQ0FBQztZQUNSLFdBQVcsRUFBQyxDQUFDO1NBQ2QsQ0FBQztJQTZEQSxDQUFDO0lBM0RELHNCQUNJLHFEQUFNO1FBRlYsd0dBQXdHOzs7Ozs7O1FBQ3hHLFVBQ1csWUFBaUI7WUFDOUIsS0FBSyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsVUFBVSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVks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QUFpQztZQUNqQyx1QkFBdUI7WUFDdkIsc0RBQXNEO1lBQ3RELCtCQUErQjtRQUVuQyxDQUFDOzs7O1FBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztJQUVMLENBQUM7O2dCQTVIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsdTRDQUF5RDs7aUJBRTFEOzs7O2dCQVJRLFVBQVU7Ozt5QkFpQ2hCLEtBQUs7O0lBZ0dSLHdDQUFDO0NBQUEsQUE3SEQsSUE2SEM7U0F4SFksaUNBQWlDOzs7SUFFOUMsa0RBQW9COztJQUdsQiwyREFBb0I7O0lBQ3BCLG1EQUF3Qjs7SUFHekIscURBSUM7O0lBRUYsMkRBQWdEOztJQUNoRCxxRUFBZ0M7O0lBRWhDLHNEQUlFOzs7OztJQTJEWSx1REFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5cbi8qKiBUaGlzIGlzIHRoZSBhY3R1YWxpIG1haW4gYmxvZyBwYWdlICoqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxucHVibGljIHZhbHVlOmFueT1bXTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBibG9nTGlzdENvbmZpZzogYW55O1xuICBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAvLyBzZW5kIGJhc2ljIHNvcnQgZGF0YVxuIHNvcnRkYXRhOmFueT17XG4gIFwidHlwZVwiOidkZXNjJyxcbiAgXCJmaWVsZFwiOidwcmlvcml0eScsXG4gIFwib3B0aW9uc1wiOlsnYXV0aG9yJywnYmxvZ2NhdGVnb3J5JywnYmxvZ3RpdGxlJywncHJpb3JpdHknXVxufTtcbi8vIGRhdGFjb2xsZWN0aW9uXG5kYXRhY29sbGVjdGlvbjogYW55PSdnZXRibG9nbWFuYWdlbWVudGxpc3RkYXRhJztcbmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudDogYW55PTA7XG4vLyBzZW5kIGJhc2ljIGxpbWl0IGRhdGFcbmxpbWl0Y29uZDphbnk9e1xuICBcImxpbWl0XCI6MTAsXG4gIFwic2tpcFwiOjAsXG4gIFwicGFnZWNvdW50XCI6MVxufTsgXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbmZvciAobGV0IGkgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UpIHtcbiAgdGhpcy52YWx1ZS5wdXNoKFxuICAgIHsgJ25hbWUnOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS5ibG9nY2F0ZWdvcnksIHZhbDogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0uYmxvZ2NhdGVnb3J5IH1cbiAgICApO1xuXG59XG4gIC8vICB0aGlzLnZhbHVlID0gcmVjZWl2ZWREYXRhO1xuICAgIHRoaXMuYmxvZ0xpc3RDb25maWcgPSB7XG4gICAgICBhcGlVcmw6IHJlY2VpdmVkRGF0YS5hcGlCYXNlVXJsLFxuICAgICAgZW5kcG9pbnQgOnJlY2VpdmVkRGF0YS5lbmRwb2ludCxcbiAgICAgIGVuZHBvaW50YzpyZWNlaXZlZERhdGEuZW5kcG9pbnRjLFxuICAgICAgbGlzdEVuZFBvaW50OiByZWNlaXZlZERhdGEubGlzdEVuZFBvaW50LFxuICAgICAgZGF0YXNvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsXG4gICAgICB0YWJsZU5hbWU6IHJlY2VpdmVkRGF0YS50YWJsZU5hbWUsXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcInVwZGF0ZWRfYXRcIiwgXCJpbWFnZVwiLCBcIm1ldGF0aXRsZVwiLCBcIm1ldGFkZXNjXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJjcmVkZW50aWFsc1wiLCBcImJsb2dzX2ZpbGVcIiwgXCJibG9nc19pbWFnZVwiLFwiYmxvZ3RpdGxlX3NlYXJjaFwiLFwiYXV0aG9yX3NlYXJjaFwiLFwidmlkZW9cIixcImJsb2djYXRcIixcInByb2ZpbGVfcGljdHVyZVwiLFwidGFnc2VhcmNoXCJdLFxuICAgICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHtcbiAgICAgICAgXCJibG9ndGl0bGVcIjogXCJCbG9nIFRpdGxlXCIsIFwiZGVzY3JpcHRpb24gaHRtbFwiOiBcIkRlc2NyaXB0aW9uXCIsXCJkYXRlIGFkZGVkXCI6XCJEYXRlXCIsXCJwcm9maWxlIHBpY3R1cmVcIjpcIlByb2ZpbGUgUGljdHVyZVwiLFwidGFnc1wiOlwiVGFnc1wiLFxuICAgICAgICBcInByaW9yaXR5XCI6IFwiUHJpb3JpdHlcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiwgXCJwYXJlbnRjYXRlZ29yeW5hbWVcIjogXCJQYXJlbnQgQ2F0ZWdvcnkgTmFtZVwiLFxuICAgICAgICBcImF1dGhvclwiOiBcIkF1dGhvclwiLFwiYmxvZ2NhdFwiOlwiQmxvZyBDYXRlZ29yeVwiLFwiZGF0ZVwiOlwiRGF0ZVwiLFwiYmxvZ2NhdGVnb3J5XCI6XCJCbG9nIENhdGVnb3J5XCJcbiAgICAgIH0sXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxuICAgICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcbiAgICAgIHNlYXJjaF9zZXR0aW5nczoge1xuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJCbG9nIFRpdGxlXCIsIGZpZWxkOiAnYmxvZ3RpdGxlJyB9LHsgbGFiZWw6IFwiU2VhcmNoIEJ5IEF1dGhvclwiLCBmaWVsZDogJ2F1dGhvcicgfSx7IGxhYmVsOiBcIlNlYXJjaCBCeSBUYWdzXCIsIGZpZWxkOiAndGFnc2VhcmNoJyB9XSxcblxuICAgICAgICBzZWxlY3RzZWFyY2g6IFtcbiAgICAgICAgICB7IGxhYmVsOiAnU3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XX0se2xhYmVsOlwiU2VhcmNoIEJ5IEJsb2cgQ2F0ZWdvcnlcIixmaWVsZDonYmxvZ2NhdGVnb3J5Jyx2YWx1ZXM6dGhpcy52YWx1ZX0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdTZWFyY2ggQnkgQmxvZyBGZWF0dXJlZCcsIGZpZWxkOiAnZmVhdHVyZWQnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJZZXNcIiB9LCB7IHZhbDogMCwgbmFtZTogJ05vJyB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdTZWFyY2ggQnkgQmxvZyBXZWJzaXRlJywgZmllbGQ6ICd3ZWJzaXRlJywgdmFsdWVzOiBbeyB2YWw6IDEsIG5hbWU6IFwiTWFzayBCbG9nIDFcIiB9LCB7IHZhbDogMiwgbmFtZTogJ01hc2sgQmxvZyAyJyB9LHt2YWw6MyxuYW1lOlwiTWFzayBCbG9nIDNcIn1dXG4gICAgICAgICAgfVxuICAgICAgICBdXG5cbiAgICAgICAgLy8gZGF0ZXNlYXJjaDpbe3N0YXJ0ZGF0ZWxhYmVsOlwiU3RhcnQgRGF0ZVwiLGVuZGRhdGVsYWJlbDpcIkVuZCBEYXRlXCIsc3VibWl0OlwiU2VhcmNoIEJ5IERhdGVcIiwgIGZpZWxkOlwiY3JlYXRlZF9hdFwifV0sXG4gICAgICB9LFxuICAgICAgLy8gIC8qU2hvd2luZyBJbWFnZSBpbiB0aGUgTW9kYWwqL1xuICAgICAgLy8gIHBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXlfZGV0YWlsX2RhdGF0eXBlOiBbe1xuICAgICAgLy8gICBrZXk6IFwiaW1hZ2VcIixcbiAgICAgIC8vICAgdmFsdWU6ICdpbWFnZScsXG4gICAgICAvLyAgIGZpbGV1cmw6ICdodHRwczovL3MzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2NybWZpbGVzLmluZmx1eGhvc3RzZXJ2ZXIvdGVzdGltb25pYWwvJyAgICAgICAgICAgICAvLyBJbWFnZSBwYXRoIFxuICAgICAgLy8gfV0sXG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcbiAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGVuZHBvaW50PXRoaXMuYmxvZ0xpc3RDb25maWcuZW5kcG9pbnQ7XG4gICAgbGV0IGVuZHBvaW50Yz10aGlzLmJsb2dMaXN0Q29uZmlnLmVuZHBvaW50YztcbiAgICBsZXQgZGF0YTphbnk9e1xuICAgICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgICAgIFwibGltaXRcIjoxMCxcbiAgICAgICAgICAgIFwic2tpcFwiOjBcbiAgICAgICAgfSxcbiAgICBzb3J0OntcbiAgICAgICAgXCJ0eXBlXCI6J2Rlc2MnLFxuICAgICAgICBcImZpZWxkXCI6J3ByaW9yaXR5J1xuICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YVdpdGhvdXRUb2tlbihlbmRwb2ludGMsIGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gY29uc3RydWN0b3InKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnQgPXJlcy5jb3VudDtcbiAgICAgICAgY29uc29sZS53YXJuKCdibG9nRGF0YSBjJyxyZXMpO1xuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnQsZGF0YSkuc3Vic2NyaWJlKChyZXM6YW55KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBjb25zdHJ1Y3RvcicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAvLyB0aGlzLnBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXkgPXJlcy5yZXN1bHRzLnJlcztcbiAgICAgICAgLy9jb25zb2xlLndhcm4oJ2Jsb2dEYXRhJyxyZXMpO1xuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgIH0pO1xuXG4gIH1cbn0iXX0=