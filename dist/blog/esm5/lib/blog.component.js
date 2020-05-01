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
            "options": ['priority', 'blogtitle']
        };
        // datacollection
        // datacollection: any='getbloglistdata';
        this.date_search_source_count = 0;
        // send basic limit data
        this.limitcond = {
            "limit": 10,
            "skip": 0,
            "pagecount": 1
        };
        this.libdata = {
            basecondition: '',
            updateendpoint: 'statusupdateforblogcategory',
            // update endpoint set
            hideeditbutton: false,
            // (hide edit button ) all these button options are optional not mandatory
            tableheaders: ['blogtitle', 'description', 'priority', 'status', 'createdon_datetime'],
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
            console.log(receivedData.datasource, '===+++++===');
            for (var i in receivedData.datasource) {
                this.value.push({ 'name': receivedData.datasource[i].parentcategoryname, val: receivedData.datasource[i].parentcategoryname });
            }
            this.blogListConfig = {
                apiUrl: receivedData.apiBaseUrl,
                endpoint: receivedData.endpoint,
                endpointc: receivedData.endpointc,
                listEndPoint: receivedData.listEndPoint,
                datacollection: receivedData.datacollection,
                datasource: receivedData.datasource,
                // tableName: receivedData.tableName,
                blogcategory_detail_skip: ["_id", "createdon_datetime", "parent_id"],
                listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "description", "parentcategoryname_search", "blogtitle_search", "blogtitlesearch", "createdon_datetime"],
                listArray_modify_header: { "blogtitle": "Category Name", "description": "Description", "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name", "blogcat": "Blog Category", "date": "Date", "createdon_datetime": "Date", "createdon datetime": "Date" },
                // admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                date_search_source: receivedData.date_search_source,
                search_settings: {
                    datesearch: [{ startdatelabel: "Start Date", enddatelabel: "End Date", submit: "Search", field: "createdon_datetime" }],
                    textsearch: [{ label: "Search by Category Name", field: 'blogtitle' }],
                    selectsearch: [
                        { label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }]
                        },
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
            console.log(_this.date_search_source_count, '++++++++++');
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
            _this.datasource = res.results.res;
            // console.log(res,'+++')
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
                    template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n\n        [datasource]=\"blogListConfig.datasource\" \n\n        [skip]=\"blogListConfig.listArray_skip\"\n\n        [modify_header_array]=\"blogListConfig.listArray_modify_header\" \n\n        [sourcedata]=\"blogListConfig.tableName\"\n\n        [statusarr]=\"blogListConfig.statusarr\" \n\n        [jwttoken]=\"blogListConfig.jwtToken\"\n\n        [apiurl]=\"blogListConfig.apiUrl\" \n\n        [editroute]=\"blogListConfig.editUrl\"\n\n        [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n\n        [date_search_source]=\"blogListConfig.date_search_source\"\n\n       [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n\n       [search_settings]=\"blogListConfig.search_settings\"\n\n       [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n\n       [sortdata]=\"sortdata\"\n\n       [detail_skip_array]=\"blogListConfig.blogcategory_detail_skip\"\n\n       [datacollection]=\"blogListConfig.datacollection\"\n\n        [date_search_source_count]=\"date_search_source_count\"\n        \n        [libdata]=\"libdata\"\n        \n       [limitcond]=\"limitcond\">\n       \n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
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
    BlogComponent.prototype.date_search_source_count;
    /** @type {?} */
    BlogComponent.prototype.limitcond;
    /** @type {?} */
    BlogComponent.prototype.datasource;
    /** @type {?} */
    BlogComponent.prototype.libdata;
    /** @type {?} */
    BlogComponent.prototype.blogListConfig;
    /** @type {?} */
    BlogComponent.prototype.loader;
    /** @type {?} */
    BlogComponent.prototype.value;
    /** @type {?} */
    BlogComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9ibG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBb0pFLHVHQUF1RztJQUV2Ryx1QkFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQWhKakMsWUFBTyxHQUFLLEVBQUUsQ0FBQzs7UUFFdkIsYUFBUSxHQUFLO1lBQ1osTUFBTSxFQUFDLE1BQU07WUFDYixPQUFPLEVBQUMsVUFBVTtZQUNsQixTQUFTLEVBQUMsQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDO1NBQ25DLENBQUM7OztRQUdGLDZCQUF3QixHQUFNLENBQUMsQ0FBQzs7UUFFaEMsY0FBUyxHQUFLO1lBQ1osT0FBTyxFQUFDLEVBQUU7WUFDVixNQUFNLEVBQUMsQ0FBQztZQUNSLFdBQVcsRUFBQyxDQUFDO1NBQ2QsQ0FBQztRQUlGLFlBQU8sR0FBSztZQUNWLGFBQWEsRUFBQyxFQUFFO1lBQ2hCLGNBQWMsRUFBQyw2QkFBNkI7O1lBQzVDLGNBQWMsRUFBQyxLQUFLOztZQUVwQixZQUFZLEVBQUMsQ0FBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsb0JBQW9CLENBQUM7U0EyRGxGLENBQUE7UUFJQyxXQUFNLEdBQVMsS0FBSyxDQUFDOzs7O1FBS2QsVUFBSyxHQUFLLEVBQUUsQ0FBQztJQW9Ed0IsQ0FBQztJQW5EN0Msc0JBQ0ksaUNBQU07Ozs7O1FBRFYsVUFDVyxZQUFpQjtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUMsYUFBYSxDQUFDLENBQUE7WUFDakQsS0FBSyxJQUFJLENB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Q25CLCtCQUFxQjs7SUFLckIsOEJBQW9COztJQW9EUixtQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKiBUaGlzIGlzIHRoZSBjYXRlZ29yeSBsaXN0aW5nICoqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLUJsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2Jsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3R5bGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBibG9kYXRhOmFueT1bXTtcbiAvLyBzZW5kIGJhc2ljIHNvcnQgZGF0YVxuIHNvcnRkYXRhOmFueT17XG4gIFwidHlwZVwiOidkZXNjJyxcbiAgXCJmaWVsZFwiOidwcmlvcml0eScsXG4gIFwib3B0aW9uc1wiOlsncHJpb3JpdHknLCdibG9ndGl0bGUnXVxufTtcbi8vIGRhdGFjb2xsZWN0aW9uXG4vLyBkYXRhY29sbGVjdGlvbjogYW55PSdnZXRibG9nbGlzdGRhdGEnO1xuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50OiBhbnk9MDtcbi8vIHNlbmQgYmFzaWMgbGltaXQgZGF0YVxubGltaXRjb25kOmFueT17XG4gIFwibGltaXRcIjoxMCxcbiAgXCJza2lwXCI6MCxcbiAgXCJwYWdlY291bnRcIjoxXG59OyBcblxuZGF0YXNvdXJjZTphbnk7XG5cbmxpYmRhdGE6YW55PXtcbiAgYmFzZWNvbmRpdGlvbjonJyxcbiAgdXBkYXRlZW5kcG9pbnQ6J3N0YXR1c3VwZGF0ZWZvcmJsb2djYXRlZ29yeScsICAgICAgICAvLyB1cGRhdGUgZW5kcG9pbnQgc2V0XG4gIGhpZGVlZGl0YnV0dG9uOmZhbHNlLCAvLyAoaGlkZSBlZGl0IGJ1dHRvbiApIGFsbCB0aGVzZSBidXR0b24gb3B0aW9ucyBhcmUgb3B0aW9uYWwgbm90IG1hbmRhdG9yeVxuXG4gIHRhYmxlaGVhZGVyczpbJ2Jsb2d0aXRsZScsJ2Rlc2NyaXB0aW9uJywncHJpb3JpdHknLCdzdGF0dXMnLCdjcmVhdGVkb25fZGF0ZXRpbWUnXSwgLy9ub3QgcmVxdWlyZWQgKHRhYmxlIGhlYWRlciBuYW1lKVxuLy8gICBjdXN0b21idXR0b25zOltcbi8vICAgICAgIHtcbi8vICAgICAgICAgICBsYWJlbDpcImZiIHNlYXJjaCB3aXRoIGJsb2cgdGl0bGVcIiwgICAgICAgIC8vIGZiIHNlYXJjaCBidXR0b24gbmFtZVxuLy8gICAgICAgICAgIGxpbms6XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2VhcmNoL3RvcC9cIiwgIC8vIGZiIHNlYXJjaCBsaW5rXG4vLyAgICAgICAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJywgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4dGVybmFsIGxpbmtcbi8vICAgICAgICAgICBwYXJhbTpbe2tleTonYmxvZ3RpdGxlJyxxOidxJ31dLCAgICAgICAgICAgICAgLy8gcGFzc2VkIHBhcmFtZXRlciBsaWtlIGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zZWFyY2gvdG9wLz9xPVZQT1RpcHMlMjBZb3UlMjBTaG91bGQlMjBLbm93JTIwRm9yJTIwQnV5aW5nJTIwVXNlZCUyMENhcnNXSllcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgbGFiZWw6XCJHIHNlYXJjaCB3aXRoIGJsb2cgdGl0bGUgQUN0aXZlXCIsICAgICAgLy8gZ29vZ2xlIHNlYXJjaCBidXR0b24gbmFtZSBcbi8vICAgICAgICAgICBsaW5rOlwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2hcIiwgICAgICAgICAvLyBnb29nbGUgc2VhcmNoIGxpbmtcbi8vICAgICAgICAgICB0eXBlOidleHRlcm5hbGxpbmsnLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXh0ZXJuYWwgbGlua1xuLy8gICAgICAgICAgIHBhcmFtOlt7a2V5OidibG9ndGl0bGUnLHE6J3EnfSx7a2V5OidhdXRob3InLHE6J29xJ31dLCAvL3Bhc3NlZCBwYXJhbWV0ZXIgbGlrZSBodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPVZQT1RpcHMlMjBZb3UlMjBTaG91bGQlMjBLbm93JTIwRm9yJTIwQnV5aW5nJTIwVXNlZCUyMENhcnNXSlkmb3E9WW1hdHRaXG4vLyAgICAgICAgICAgY29uZDonc3RhdHVzJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbmRpdGlvbiBmb3Igc3RhdHVzXG4vLyAgICAgICAgICAgY29uZHZhbDogMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uZGl0aW9uIHZhbHVlIHN0YXR1cz0wICwgaWYgdmFsdWU9MSBhbmQgc3RhdHVzID0wIHRoZW4gdGhlIGJ1dHRvbiB3aWxsIGRpc3NhcHBlYXJcbi8vICAgICAgIH0se1xuLy8gICAgICAgICAgIGxhYmVsOlwibWFzayBibG9nXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXNrIGJsb2cgc2VhcmNoIGJ1dHRvbiBuYW1lXG4vLyAgICAgICAgICAgbGluazpcImh0dHBzOi8vbWFzay1ibG9nMS5pbmZsdXhpcS5jb20vYmxvZy1kZXRhaWxzXCIsICAvLyBtYXNrIHNlYXJjaCBsaW5rXG4vLyAgICAgICAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4dGVybmFsIGxpbmtcbi8vICAgICAgICAgICBwYXJhbXR5cGU6J2FuZ3VsYXInLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93aW5nIGZyb250IGVuZCBcbi8vICAgICAgICAgICBwYXJhbTpbJ2Jsb2d0aXRsZScsJ19pZCddLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXNzZWQgdG8gcGFyYW1ldGVyIHdpdGggYmxvZyB0aXRsZSBhbmQgaWRcbi8vICAgICAgICAgICBjb25kOidzdGF0dXMnLCAvLyBjb25kaXRpb24gZm9yIHN0YXR1c1xuLy8gICAgICAgICAgIGNvbmR2YWw6IDAgICAgICAvLyBjb25kaXRpb24gdmFsdWUgc3RhdHVzPTAgLCBpZiB2YWx1ZT0xIGFuZCBzdGF0dXMgPTAgdGhlbiB0aGUgYnV0dG9uIHdpbGwgZGlzc2FwcGVhclxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgICBsYWJlbDpcIiBmYiBwcm9maWxlIFwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmIgcHJvZmlsZSBidXR0b24gXG4vLyAgICAgICAgICAgbGluazpcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kZWJhc2lza2FyMDA3XCIsICAgICAvLyBwcm9maWxlIGxpbmtcbi8vICAgICAgICAgICB0eXBlOidleHRlcm5hbGxpbmsnXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICAgIGxhYmVsOlwiIGZiIHByb2ZpbGUgZm9yIGluYWN0aXZlXCIsICAgICAgICAgICAgICAgICAgLy8gZmIgcHJvZmlsZSBmb3IgaW5hY3RpdmUgc3RhdHVzXG4vLyAgICAgICAgICAgbGluazpcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kZWJhc2lza2FyMDA3XCIsICAgICAvLyBwcm9maWxlIGxpbmtcbi8vICAgICAgICAgICB0eXBlOidleHRlcm5hbGxpbmsnLFxuLy8gICAgICAgICAgIGNvbmQ6J3N0YXR1cycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uZGl0aW9uIGZvciBzdGF0dXNcbi8vICAgICAgICAgICBjb25kdmFsOjAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbmRpdGlvbiB2YWx1ZSBzdGF0dXM9MCAsIGlmIHZhbHVlPTEgYW5kIHN0YXR1cyA9MCB0aGVuIHRoZSBidXR0b24gd2lsbCBkaXNzYXBwZWFyXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICAgIGxhYmVsOlwiIGZiIHByb2ZpbGUgZm9yIGFjdGl2ZVwiLCAgICAgICAgICAgICAgICAgICAgICAgLy8gZmIgcHJvZmlsZSBmb3IgYWN0aXZlIHN0YXR1c1xuLy8gICAgICAgICAgIGxpbms6XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGViYXNpc2thcjAwN1wiLCAgICAgICAgLy8gcHJvZmlsZSBsaW5rXG4vLyAgICAgICAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4dGVybmFsIGxpbmtcbi8vICAgICAgICAgICBjb25kOidzdGF0dXMnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25kaXRpb24gZm9yIHN0YXR1c1xuLy8gICAgICAgICAgIGNvbmR2YWw6MSAvL2NvbmRpdGlvbiB2YWx1ZSBzdGF0dXM9MSBpZiB2YWx1ZT0wIGFuZCBzdGF0dXMgPTEgdGhlbiB0aGUgYnV0dG9uIHdpbGwgZGlzc2FwcGVhclxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgICBsYWJlbDpcInNlZSBicmFuZFwiLCAgICAgICAgICAgIC8vIHNlZSBicmFuZCBidXR0b25cbi8vICAgICAgICAgICByb3V0ZTpcImJyYW5kXCIsICAgICAgICAgICAgICAgLy8gZ28gdG8gYnJhbmQgcm91dGVcbi8vICAgICAgICAgICB0eXBlOidpbnRlcm5hbGxpbmsnLCAgICAgICAgICAvLyBzYW1lIGFwcGxpY2F0aW9uIGJ1dCBkaWZmZXJlbnQgcGFnZSAuXG4vLyAgICAgICAgICAgY29uZDonc3RhdHVzJywgICAgICAgICAgICAgICAgIC8vIGNvbmRpdGlvbiBmb3Igc3RhdHVzXG4vLyAgICAgICAgICAgY29uZHZhbDowICAgICAgICAgICAgICAgICAgICAgLy8gY29uZGl0aW9uIHZhbHVlIHN0YXR1cz0wICwgaWYgdmFsdWU9MSBhbmQgc3RhdHVzID0wIHRoZW4gdGhlIGJ1dHRvbiB3aWxsIGRpc3NhcHBlYXJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgbGFiZWw6XCJzZWUgYnJhbmQgd2l0aCBwYXJhbVwiLCAgICAgLy8gc2VlIGJyYW5kIGJ1dHRvbiB3aXRoIHBhcmFtXG4vLyAgICAgICAgICAgcm91dGU6XCJicmFuZFwiLCAgICAgICAgICAgICAgICAgICAgLy8gZ28gdG8gYnJhbmQgcm91dGVcbi8vICAgICAgICAgICB0eXBlOidpbnRlcm5hbGxpbmsnLCAgICAgICAgICAgICAvLyBzYW1lIGFwcGxpY2F0aW9uIGJ1dCBkaWZmZXJlbnQgcGFnZSB3aXRoIHBhcmFtcyAuXG4vLyAgICAgICAgICAgY29uZDonc3RhdHVzJywgICAgICAgICAgICAgICAgICAgIC8vIGNvbmRpdGlvbiBmb3Igc3RhdHVzXG4vLyAgICAgICAgICAgY29uZHZhbDowLCAgICAgICAgICAgICAgICAgICAgICAgLy9jb25kaXRpb24gdmFsdWUgc3RhdHVzPTAgLCBpZiB2YWx1ZT0xIGFuZCBzdGF0dXMgPTAgdGhlbiB0aGUgYnV0dG9uIHdpbGwgZGlzc2FwcGVhclxuLy8gICAgICAgICAgIHBhcmFtOlsnX2lkJywnYmxvZ3RpdGxlJ10sICAgIC8vIHBhc3NlZCB3aXRoIHBhcmFtc1xuLy8gICAgICAgfVxuLy8gICBdXG59XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIFxuICBibG9nTGlzdENvbmZpZzphbnk7XG4gIGxvYWRlcjpib29sZWFuPWZhbHNlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIHB1YmxpYyB2YWx1ZTphbnk9W3t2YWw6JycsJ25hbWUnOicnfV07XG4gIHB1YmxpYyB2YWx1ZTphbnk9W107XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHsgXG4gICAgY29uc29sZS5sb2cocmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsJz09PSsrKysrPT09JylcbiAgICAgZm9yIChsZXQgaSBpbiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSkge1xuICAgICAgIHRoaXMudmFsdWUucHVzaChcbiAgICAgICAgIHsgJ25hbWUnOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS5wYXJlbnRjYXRlZ29yeW5hbWUsIHZhbDogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0ucGFyZW50Y2F0ZWdvcnluYW1lIH1cbiAgICAgICAgICk7XG4gICB9XG5cbiAgICB0aGlzLmJsb2dMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGVuZHBvaW50IDpyZWNlaXZlZERhdGEuZW5kcG9pbnQsXG4gICAgICBlbmRwb2ludGM6cmVjZWl2ZWREYXRhLmVuZHBvaW50YyxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFjb2xsZWN0aW9uOnJlY2VpdmVkRGF0YS5kYXRhY29sbGVjdGlvbixcbiAgICAgIGRhdGFzb3VyY2U6cmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsXG4gICAgICAvLyB0YWJsZU5hbWU6IHJlY2VpdmVkRGF0YS50YWJsZU5hbWUsXG4gICAgICBibG9nY2F0ZWdvcnlfZGV0YWlsX3NraXA6W1wiX2lkXCIsXCJjcmVhdGVkb25fZGF0ZXRpbWVcIixcInBhcmVudF9pZFwiXSxcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwidXBkYXRlZF9hdFwiLFwiaW1hZ2VcIixcImRlc2NyaXB0aW9uXCIsXCJwYXJlbnRjYXRlZ29yeW5hbWVfc2VhcmNoXCIsXCJibG9ndGl0bGVfc2VhcmNoXCIsXCJibG9ndGl0bGVzZWFyY2hcIixcImNyZWF0ZWRvbl9kYXRldGltZVwiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwiYmxvZ3RpdGxlXCI6XCJDYXRlZ29yeSBOYW1lXCIsIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLCBcInByaW9yaXR5XCI6IFwiUHJpb3JpdHlcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiAsXCJwYXJlbnRjYXRlZ29yeW5hbWVcIjpcIlBhcmVudCBDYXRlZ29yeSBOYW1lXCIsXCJibG9nY2F0XCI6XCJCbG9nIENhdGVnb3J5XCIsXCJkYXRlXCI6XCJEYXRlXCIsXCJjcmVhdGVkb25fZGF0ZXRpbWVcIjpcIkRhdGVcIixcImNyZWF0ZWRvbiBkYXRldGltZVwiOlwiRGF0ZVwifSxcbiAgICAgIC8vIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgIGRhdGVfc2VhcmNoX3NvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGVfc2VhcmNoX3NvdXJjZSxcblxuICAgICAgc2VhcmNoX3NldHRpbmdzOntcbiAgICAgICAgZGF0ZXNlYXJjaDpbe3N0YXJ0ZGF0ZWxhYmVsOlwiU3RhcnQgRGF0ZVwiLGVuZGRhdGVsYWJlbDpcIkVuZCBEYXRlXCIsc3VibWl0OlwiU2VhcmNoXCIsICBmaWVsZDpcImNyZWF0ZWRvbl9kYXRldGltZVwifV0sXG4gICAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBieSBDYXRlZ29yeSBOYW1lXCIsIGZpZWxkOiAnYmxvZ3RpdGxlJyB9XSxcbiAgICAgICAgc2VsZWN0c2VhcmNoOiBbXG4gICAgICAgICAgeyBsYWJlbDogJ1NlYXJjaCBCeSBTdGF0dXMnLCBmaWVsZDogJ3N0YXR1cycsdmFsdWVzOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV1cbiAgICAgICAgfSxcbiAgICAgICAgICAvLyB7bGFiZWw6XCJTZWFyY2ggQnkgUGFyZW50IENhdGVnb3J5IE5hbWVcIixmaWVsZDoncGFyZW50Y2F0ZWdvcnluYW1lJyx2YWx1ZXM6dGhpcy52YWx1ZX1cbiAgICAgICAgXVxuXG4gICAgICAgIC8vIHNlYXJjaDpbe2xhYmVsOlwiU2VhcmNoIEJ5IFBhcmVudCBDYXRlZ29yeVwiLGZpZWxkOidwYXJlbnRjYXRlZ29yeW5hbWUnLHZhbHVlczp0aGlzLnZhbHVlfV1cbiAgICAgIH1cbiAgICAgIC8vICAvKlNob3dpbmcgSW1hZ2UgaW4gdGhlIE1vZGFsKi9cbiAgICAgIC8vICBwZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5X2RldGFpbF9kYXRhdHlwZTogW3tcbiAgICAgIC8vICAga2V5OiBcImltYWdlXCIsXG4gICAgICAvLyAgIHZhbHVlOiAnaW1hZ2UnLFxuICAgICAgLy8gICBmaWxldXJsOiAnaHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9jcm1maWxlcy5pbmZsdXhob3N0c2VydmVyL3Rlc3RpbW9uaWFsLycgICAgICAgICAgICAgLy8gSW1hZ2UgcGF0aCBcbiAgICAgIC8vIH1dLFxuICAgICAgXG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGlTZXJ2aWNlOkFwaVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBlbmRwb2ludD10aGlzLmJsb2dMaXN0Q29uZmlnLmVuZHBvaW50O1xuICAgIGxldCBlbmRwb2ludGM9dGhpcy5ibG9nTGlzdENvbmZpZy5lbmRwb2ludGM7XG5cbiAgICBsZXQgZGF0YTphbnk9e1xuICAgICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgICAgIFwibGltaXRcIjoxMCxcbiAgICAgICAgICAgIFwic2tpcFwiOjBcbiAgICAgICAgfSxcbiAgICBzb3J0OntcbiAgICAgICAgXCJ0eXBlXCI6J2Rlc2MnLFxuICAgICAgICBcImZpZWxkXCI6J3ByaW9yaXR5J1xuICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YVdpdGhvdXRUb2tlbihlbmRwb2ludGMsIGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudCA9cmVzLmNvdW50O1xuICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnQgLCcrKysrKysrKysrJylcbiAgICAgIFxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhV2l0aG91dFRva2VuKGVuZHBvaW50LGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgdGhpcy5kYXRhc291cmNlPXJlcy5yZXN1bHRzLnJlcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcywnKysrJylcbiAgICAgIFxuICAgIFxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICB9KTtcblxuICB9XG4gIFxuXG59XG5cbiJdfQ==