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
        this.tag_data = [];
        this.authval = [];
        // ====================================================================================================
        this.libdata = {
            basecondition: { status: 1 },
            // updateendpoint:'statusupdate1',
            hideeditbutton: true,
            // all these button options are optional not mandatory
            // tableheaders:['author','priority','blogtitle','status','wrongone'], //not required
            custombuttons: [
                {
                    label: "Preview Blog 1",
                    link: "https://mask-blog1.influxiq.com/blog-details",
                    type: 'externallink',
                    paramtype: 'angular',
                    param: ['blogtitle', '_id'],
                    cond: 'maskblog1',
                    condval: 1
                },
                {
                    label: "Preview Blog 2",
                    link: "https://mask-blog2.influxiq.com/blog-details",
                    type: 'externallink',
                    paramtype: 'angular',
                    param: ['blogtitle', '_id'],
                    cond: 'maskblog2',
                    condval: 1
                },
                {
                    label: "Preview Blog 3",
                    link: "https://mask-blog3.influxiq.com/blog-details",
                    type: 'externallink',
                    paramtype: 'angular',
                    param: ['blogtitle', '_id'],
                    cond: 'maskblog3',
                    condval: 1
                }
            ]
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
            for (var i in receivedData.datasource) {
                for (var val in receivedData.datasource[i].tags) {
                    this.authval.push({ 'name': receivedData.datasource[i].tags[val], val: receivedData.datasource[i].tags[val] });
                }
            }
            this.wesitesVal = receivedData.datasource.website;
            //  console.log("+++++++++++++++++",this.wesitesVal);
            this.blogListConfig = {
                apiUrl: receivedData.apiBaseUrl,
                endpoint: receivedData.endpoint,
                endpointc: receivedData.endpointc,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "metatitle", "metadesc", "description", "credentials", "blogs_file", "blogs_image", "blogtitle_search", "author_search", "video", "blogcat", "profile_picture", "tagsearch", "featured", "maskblog1", "maskblog2", "maskblog3", "tags_search", "website"],
                listArray_modify_header: {
                    "blogtitle": "Blog Title", "description html": "Description", "date added": "Date", "profile picture": "Profile Picture", "tags": "Tags",
                    "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name",
                    "author": "Author", "blogcat": "Blog Category", "date": "Date", "blogcategory": "Blog Category",
                    "featured search": "Featured"
                },
                adminDataList_detail_skip: ['_id', 'password', 'updated_at', 'id', "description_html", "blogcat", "created_at", "profile_picture", "tagsearch", "maskblog1", "maskblog2", "maskblog3", "tags_search"],
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
                search_settings: {
                    textsearch: [{ label: "Search By Blog Title", field: 'blogtitle_search' }, { label: "Search By Author", field: 'author_search' }],
                    selectsearch: [
                        { label: 'Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }, { label: "Search By Blog Category", field: 'blogcategory', values: this.value },
                        {
                            label: 'Search By Blog Featured', field: 'featured', values: [{ val: 1, name: "Yes" }, { val: 0, name: 'No' }]
                        },
                    ],
                    search: [{ label: "Search By Tags", field: 'tags_search', values: this.authval }]
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
                    template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n      [datasource]=\"blogListConfig.datasource\" [skip]=\"blogListConfig.listArray_skip\"\n      [modify_header_array]=\"blogListConfig.listArray_modify_header\" [sourcedata]=\"blogListConfig.tableName\"\n      [statusarr]=\"blogListConfig.statusarr\" [jwttoken]=\"blogListConfig.jwtToken\"\n      [apiurl]=\"blogListConfig.apiUrl\" [editroute]=\"blogListConfig.editUrl\"\n      [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n      [date_search_source]=\"blogListConfig.view\"\n     [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n     [search_settings]=\"blogListConfig.search_settings\"\n     [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n     [sortdata]=\"sortdata\"\n     [datacollection]=\"datacollection\"\n     [date_search_source_count]=\"date_search_source_count\"\n     [limitcond]=\"limitcond\"\n     [detail_skip_array]=\"blogListConfig.adminDataList_detail_skip\"\n     >\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
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
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.tag_data;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.authval;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.wesitesVal;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.libdata;
    /**
     * @type {?}
     * @private
     */
    ListingBlogmanagementlibComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSTVDO0lBdUlFLDJDQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBaElyQyxVQUFLLEdBQUssRUFBRSxDQUFDO1FBSWxCLFdBQU0sR0FBWSxLQUFLLENBQUM7OztRQUd6QixhQUFRLEdBQUs7WUFDWixNQUFNLEVBQUMsTUFBTTtZQUNiLE9BQU8sRUFBQyxVQUFVO1lBQ2xCLFNBQVMsRUFBQyxDQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFVBQVUsQ0FBQztTQUMzRCxDQUFDOztRQUVGLG1CQUFjLEdBQU0sMkJBQTJCLENBQUM7UUFDaEQsNkJBQXdCLEdBQU0sQ0FBQyxDQUFDOztRQUVoQyxjQUFTLEdBQUs7WUFDWixPQUFPLEVBQUMsRUFBRTtZQUNWLE1BQU0sRUFBQyxDQUFDO1lBQ1IsV0FBVyxFQUFDLENBQUM7U0FDZCxDQUFDO1FBQ0ssYUFBUSxHQUFLLEVBQUUsQ0FBQztRQUNoQixZQUFPLEdBQUssRUFBRSxDQUFDOztRQW9FcEIsWUFBTyxHQUFLO1lBQ1YsYUFBYSxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQzs7WUFFeEIsY0FBYyxFQUFDLElBQUk7OztZQUduQixhQUFhLEVBQUM7Z0JBQ1Y7b0JBQ0ksS0FBSyxFQUFDLGdCQUFnQjtvQkFDdEIsSUFBSSxFQUFDLDhDQUE4QztvQkFDbkQsSUFBSSxF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QUFHLENBQUMsS0FBSyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRW5DLENBQUM7Ozs7UUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsR0FBTztZQUNqRSxpQ0FBaUM7WUFDakMsdUJBQXVCO1lBQ3ZCLHNEQUFzRDtZQUN0RCwrQkFBK0I7UUFFbkMsQ0FBQzs7OztRQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOztnQkE3S0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLHE5Q0FBeUQ7O2lCQUUxRDs7OztnQkFSUSxVQUFVOzs7eUJBb0NoQixLQUFLOztJQThJUix3Q0FBQztDQUFBLEFBOUtELElBOEtDO1NBektZLGlDQUFpQzs7O0lBRTlDLGtEQUFvQjs7SUFHbEIsMkRBQW9COztJQUNwQixtREFBd0I7O0lBR3pCLHFEQUlDOztJQUVGLDJEQUFnRDs7SUFDaEQscUVBQWdDOztJQUVoQyxzREFJRTs7SUFDRixxREFBdUI7O0lBQ3ZCLG9EQUFzQjs7SUFDdEIsdURBQXNCOztJQW1FcEIsb0RBbUNEOzs7OztJQUdhLHVEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcblxuLyoqIFRoaXMgaXMgdGhlIGFjdHVhbGkgbWFpbiBibG9nIHBhZ2UgKiovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5wdWJsaWMgdmFsdWU6YW55PVtdO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGJsb2dMaXN0Q29uZmlnOiBhbnk7XG4gIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIC8vIHNlbmQgYmFzaWMgc29ydCBkYXRhXG4gc29ydGRhdGE6YW55PXtcbiAgXCJ0eXBlXCI6J2Rlc2MnLFxuICBcImZpZWxkXCI6J3ByaW9yaXR5JyxcbiAgXCJvcHRpb25zXCI6WydhdXRob3InLCdibG9nY2F0ZWdvcnknLCdibG9ndGl0bGUnLCdwcmlvcml0eSddXG59O1xuLy8gZGF0YWNvbGxlY3Rpb25cbmRhdGFjb2xsZWN0aW9uOiBhbnk9J2dldGJsb2dtYW5hZ2VtZW50bGlzdGRhdGEnO1xuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50OiBhbnk9MDtcbi8vIHNlbmQgYmFzaWMgbGltaXQgZGF0YVxubGltaXRjb25kOmFueT17XG4gIFwibGltaXRcIjoxMCxcbiAgXCJza2lwXCI6MCxcbiAgXCJwYWdlY291bnRcIjoxXG59OyBcbnB1YmxpYyB0YWdfZGF0YTphbnk9W107XG5wdWJsaWMgYXV0aHZhbDphbnk9W107XG5wdWJsaWMgd2VzaXRlc1ZhbDphbnk7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbmZvciAobGV0IGkgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UpIHtcbiAgdGhpcy52YWx1ZS5wdXNoKFxuICAgIHsgJ25hbWUnOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS5ibG9nY2F0ZWdvcnksIHZhbDogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0uYmxvZ2NhdGVnb3J5IH1cbiAgICApO1xufVxuZm9yIChsZXQgaSBpbiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSkge1xuICBmb3IgKGxldCB2YWwgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0udGFncykge1xuICAgIHRoaXMuYXV0aHZhbC5wdXNoKFxuICAgICAgeyAnbmFtZSc6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLnRhZ3NbdmFsXSwgdmFsOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS50YWdzW3ZhbF0gfVxuICAgICk7XG4gIH1cbiAgXG5cbn1cbiAgIHRoaXMud2VzaXRlc1ZhbCA9IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLndlYnNpdGU7XG4gIC8vICBjb25zb2xlLmxvZyhcIisrKysrKysrKysrKysrKysrXCIsdGhpcy53ZXNpdGVzVmFsKTtcbiAgICB0aGlzLmJsb2dMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGVuZHBvaW50IDpyZWNlaXZlZERhdGEuZW5kcG9pbnQsXG4gICAgICBlbmRwb2ludGM6cmVjZWl2ZWREYXRhLmVuZHBvaW50YyxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJ1cGRhdGVkX2F0XCIsIFwiaW1hZ2VcIiwgXCJtZXRhdGl0bGVcIiwgXCJtZXRhZGVzY1wiLCBcImRlc2NyaXB0aW9uXCIsIFwiY3JlZGVudGlhbHNcIiwgXCJibG9nc19maWxlXCIsIFwiYmxvZ3NfaW1hZ2VcIixcImJsb2d0aXRsZV9zZWFyY2hcIixcImF1dGhvcl9zZWFyY2hcIixcInZpZGVvXCIsXCJibG9nY2F0XCIsXCJwcm9maWxlX3BpY3R1cmVcIixcInRhZ3NlYXJjaFwiLFwiZmVhdHVyZWRcIixcIm1hc2tibG9nMVwiLFwibWFza2Jsb2cyXCIsXCJtYXNrYmxvZzNcIixcInRhZ3Nfc2VhcmNoXCIsXCJ3ZWJzaXRlXCJdLFxuICAgICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHtcbiAgICAgICAgXCJibG9ndGl0bGVcIjogXCJCbG9nIFRpdGxlXCIsIFwiZGVzY3JpcHRpb24gaHRtbFwiOiBcIkRlc2NyaXB0aW9uXCIsXCJkYXRlIGFkZGVkXCI6XCJEYXRlXCIsXCJwcm9maWxlIHBpY3R1cmVcIjpcIlByb2ZpbGUgUGljdHVyZVwiLFwidGFnc1wiOlwiVGFnc1wiLFxuICAgICAgICBcInByaW9yaXR5XCI6IFwiUHJpb3JpdHlcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiwgXCJwYXJlbnRjYXRlZ29yeW5hbWVcIjogXCJQYXJlbnQgQ2F0ZWdvcnkgTmFtZVwiLFxuICAgICAgICBcImF1dGhvclwiOiBcIkF1dGhvclwiLFwiYmxvZ2NhdFwiOlwiQmxvZyBDYXRlZ29yeVwiLFwiZGF0ZVwiOlwiRGF0ZVwiLFwiYmxvZ2NhdGVnb3J5XCI6XCJCbG9nIENhdGVnb3J5XCIsXG4gICAgICAgIFwiZmVhdHVyZWQgc2VhcmNoXCI6XCJGZWF0dXJlZFwiXG4gICAgICB9LFxuICAgICAgYWRtaW5EYXRhTGlzdF9kZXRhaWxfc2tpcDpbJ19pZCcsJ3Bhc3N3b3JkJywndXBkYXRlZF9hdCcsJ2lkJyxcImRlc2NyaXB0aW9uX2h0bWxcIixcImJsb2djYXRcIixcImNyZWF0ZWRfYXRcIixcInByb2ZpbGVfcGljdHVyZVwiLFwidGFnc2VhcmNoXCIsXCJtYXNrYmxvZzFcIixcIm1hc2tibG9nMlwiLFwibWFza2Jsb2czXCIsXCJ0YWdzX3NlYXJjaFwiXSxcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxuICAgICAgc2VhcmNoX3NldHRpbmdzOiB7XG4gICAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBCeSBCbG9nIFRpdGxlXCIsIGZpZWxkOiAnYmxvZ3RpdGxlX3NlYXJjaCcgfSx7IGxhYmVsOiBcIlNlYXJjaCBCeSBBdXRob3JcIiwgZmllbGQ6ICdhdXRob3Jfc2VhcmNoJyB9XSxcblxuICAgICAgICBzZWxlY3RzZWFyY2g6IFtcbiAgICAgICAgICB7IGxhYmVsOiAnU3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XX0se2xhYmVsOlwiU2VhcmNoIEJ5IEJsb2cgQ2F0ZWdvcnlcIixmaWVsZDonYmxvZ2NhdGVnb3J5Jyx2YWx1ZXM6dGhpcy52YWx1ZX0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdTZWFyY2ggQnkgQmxvZyBGZWF0dXJlZCcsIGZpZWxkOiAnZmVhdHVyZWQnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJZZXNcIiB9LCB7IHZhbDogMCwgbmFtZTogJ05vJyB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgbGFiZWw6ICdTZWFyY2ggQnkgQmxvZyBXZWJzaXRlJywgZmllbGQ6ICd3ZWJzaXRlJywgdmFsdWVzOiBbeyB2YWw6IFwiTWFzayBCbG9nIDFcIiwgbmFtZTogXCJNYXNrIEJsb2cgMVwiIH0sIHsgdmFsOiBcIk1hc2sgQmxvZyAyXCIsIG5hbWU6ICdNYXNrIEJsb2cgMicgfSx7dmFsOlwiTWFzayBCbG9nIDNcIixuYW1lOlwiTWFzayBCbG9nIDNcIn1dXG4gICAgICAgICAgLy8gfVxuICAgICAgICBdLFxuICAgICAgICBzZWFyY2g6W3tsYWJlbDpcIlNlYXJjaCBCeSBUYWdzXCIsZmllbGQ6J3RhZ3Nfc2VhcmNoJyx2YWx1ZXM6dGhpcy5hdXRodmFsfV1cblxuICAgICAgfSxcbiAgICAgIC8vICAvKlNob3dpbmcgSW1hZ2UgaW4gdGhlIE1vZGFsKi9cbiAgICAgIC8vICBwZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5X2RldGFpbF9kYXRhdHlwZTogW3tcbiAgICAgIC8vICAga2V5OiBcImltYWdlXCIsXG4gICAgICAvLyAgIHZhbHVlOiAnaW1hZ2UnLFxuICAgICAgLy8gICBmaWxldXJsOiAnaHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9jcm1maWxlcy5pbmZsdXhob3N0c2VydmVyL3Rlc3RpbW9uaWFsLycgICAgICAgICAgICAgLy8gSW1hZ2UgcGF0aCBcbiAgICAgIC8vIH1dLFxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgbGliZGF0YTphbnk9e1xuICAgIGJhc2Vjb25kaXRpb246e3N0YXR1czoxfSxcbiAgICAvLyB1cGRhdGVlbmRwb2ludDonc3RhdHVzdXBkYXRlMScsXG4gICAgaGlkZWVkaXRidXR0b246dHJ1ZSwvLyBhbGwgdGhlc2UgYnV0dG9uIG9wdGlvbnMgYXJlIG9wdGlvbmFsIG5vdCBtYW5kYXRvcnlcbiAgICBcbiAgICAvLyB0YWJsZWhlYWRlcnM6WydhdXRob3InLCdwcmlvcml0eScsJ2Jsb2d0aXRsZScsJ3N0YXR1cycsJ3dyb25nb25lJ10sIC8vbm90IHJlcXVpcmVkXG4gICAgY3VzdG9tYnV0dG9uczpbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOlwiUHJldmlldyBCbG9nIDFcIixcbiAgICAgICAgICAgIGxpbms6XCJodHRwczovL21hc2stYmxvZzEuaW5mbHV4aXEuY29tL2Jsb2ctZGV0YWlsc1wiLFxuICAgICAgICAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJyxcbiAgICAgICAgICAgIHBhcmFtdHlwZTonYW5ndWxhcicsXG4gICAgICAgICAgICBwYXJhbTpbJ2Jsb2d0aXRsZScsJ19pZCddLFxuICAgICAgICAgICAgY29uZDonbWFza2Jsb2cxJyxcbiAgICAgICAgICAgIGNvbmR2YWw6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOlwiUHJldmlldyBCbG9nIDJcIixcbiAgICAgICAgICBsaW5rOlwiaHR0cHM6Ly9tYXNrLWJsb2cyLmluZmx1eGlxLmNvbS9ibG9nLWRldGFpbHNcIixcbiAgICAgICAgICB0eXBlOidleHRlcm5hbGxpbmsnLFxuICAgICAgICAgIHBhcmFtdHlwZTonYW5ndWxhcicsXG4gICAgICAgICAgcGFyYW06WydibG9ndGl0bGUnLCdfaWQnXSxcbiAgICAgICAgICBjb25kOidtYXNrYmxvZzInLFxuICAgICAgICAgIGNvbmR2YWw6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOlwiUHJldmlldyBCbG9nIDNcIixcbiAgICAgICAgbGluazpcImh0dHBzOi8vbWFzay1ibG9nMy5pbmZsdXhpcS5jb20vYmxvZy1kZXRhaWxzXCIsXG4gICAgICAgIHR5cGU6J2V4dGVybmFsbGluaycsXG4gICAgICAgIHBhcmFtdHlwZTonYW5ndWxhcicsXG4gICAgICAgIHBhcmFtOlsnYmxvZ3RpdGxlJywnX2lkJ10sXG4gICAgICAgIGNvbmQ6J21hc2tibG9nMycsXG4gICAgICAgIGNvbmR2YWw6IDFcbiAgICB9XG4gICAgXVxufVxuICBcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcbiAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGVuZHBvaW50PXRoaXMuYmxvZ0xpc3RDb25maWcuZW5kcG9pbnQ7XG4gICAgbGV0IGVuZHBvaW50Yz10aGlzLmJsb2dMaXN0Q29uZmlnLmVuZHBvaW50YztcbiAgICBsZXQgZGF0YTphbnk9e1xuICAgICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgICAgIFwibGltaXRcIjoxMCxcbiAgICAgICAgICAgIFwic2tpcFwiOjBcbiAgICAgICAgfSxcbiAgICBzb3J0OntcbiAgICAgICAgXCJ0eXBlXCI6J2Rlc2MnLFxuICAgICAgICBcImZpZWxkXCI6J3ByaW9yaXR5J1xuICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YVdpdGhvdXRUb2tlbihlbmRwb2ludGMsIGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gY29uc3RydWN0b3InKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnQgPXJlcy5jb3VudDtcbiAgICAgICAgY29uc29sZS53YXJuKCdibG9nRGF0YSBjJyxyZXMpO1xuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnQsZGF0YSkuc3Vic2NyaWJlKChyZXM6YW55KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBjb25zdHJ1Y3RvcicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAvLyB0aGlzLnBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXkgPXJlcy5yZXN1bHRzLnJlcztcbiAgICAgICAgLy9jb25zb2xlLndhcm4oJ2Jsb2dEYXRhJyxyZXMpO1xuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgIH0pO1xuXG4gIH1cbn0iXX0=