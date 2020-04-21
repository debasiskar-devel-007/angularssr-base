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
export class ListingBlogmanagementlibComponent {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
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
                    cond: 'masblog1',
                    condval: 1
                },
                {
                    label: "Preview Blog 2",
                    link: "https://mask-blog2.influxiq.com/blog-details",
                    type: 'externallink',
                    paramtype: 'angular',
                    param: ['blogtitle', '_id'],
                    cond: 'masblog2',
                    condval: 1
                },
                {
                    label: "Preview Blog 3",
                    link: "https://mask-blog3.influxiq.com/blog-details",
                    type: 'externallink',
                    paramtype: 'angular',
                    param: ['blogtitle', '_id'],
                    cond: 'masblog3',
                    condval: 1
                }
            ]
        };
    }
    // ================================================Input For Lib Listing================================
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
        for (let i in receivedData.datasource) {
            this.value.push({ 'name': receivedData.datasource[i].blogcategory, val: receivedData.datasource[i].blogcategory });
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
            listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "metatitle", "metadesc", "description", "credentials", "blogs_file", "blogs_image", "blogtitle_search", "author_search", "video", "blogcat", "profile_picture", "tagsearch", "featured", "masblog1", "masblog2", "masblog3"],
            listArray_modify_header: {
                "blogtitle": "Blog Title", "description html": "Description", "date added": "Date", "profile picture": "Profile Picture", "tags": "Tags",
                "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name",
                "author": "Author", "blogcat": "Blog Category", "date": "Date", "blogcategory": "Blog Category",
                "featured search": "Featured", "website": "Website"
            },
            adminDataList_detail_skip: ['_id', 'password', 'updated_at', 'id', "description_html", "blogcat", "created_at", "profile_picture", "tagsearch", "masblog1", "masblog2", "masblog3"],
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
            // console.log('in constructor');
            // console.log(result);
            this.date_search_source_count = res.count;
            console.warn('blogData c', res);
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
            // console.log('in constructor');
            // console.log(result);
            // this.pendingmodelapplicationarray =res.results.res;
            //console.warn('blogData',res);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log('Oooops!');
        }));
    }
}
ListingBlogmanagementlibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-listing-blogmanagementlib',
                template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n      [datasource]=\"blogListConfig.datasource\" [skip]=\"blogListConfig.listArray_skip\"\n      [modify_header_array]=\"blogListConfig.listArray_modify_header\" [sourcedata]=\"blogListConfig.tableName\"\n      [statusarr]=\"blogListConfig.statusarr\" [jwttoken]=\"blogListConfig.jwtToken\"\n      [apiurl]=\"blogListConfig.apiUrl\" [editroute]=\"blogListConfig.editUrl\"\n      [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n      [date_search_source]=\"blogListConfig.view\"\n     [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n     [search_settings]=\"blogListConfig.search_settings\"\n     [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n     [sortdata]=\"sortdata\"\n     [datacollection]=\"datacollection\"\n     [date_search_source_count]=\"date_search_source_count\"\n     [limitcond]=\"limitcond\"\n     [detail_skip_array]=\"blogListConfig.adminDataList_detail_skip\"\n     [libdata]=\"libdata\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
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
    ListingBlogmanagementlibComponent.prototype.wesitesVal;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.libdata;
    /**
     * @type {?}
     * @private
     */
    ListingBlogmanagementlibComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBUzVDLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7SUF1SDVDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFySHJDLFVBQUssR0FBSyxFQUFFLENBQUM7UUFJbEIsV0FBTSxHQUFZLEtBQUssQ0FBQzs7O1FBR3pCLGFBQVEsR0FBSztZQUNaLE1BQU0sRUFBQyxNQUFNO1lBQ2IsT0FBTyxFQUFDLFVBQVU7WUFDbEIsU0FBUyxFQUFDLENBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsVUFBVSxDQUFDO1NBQzNELENBQUM7O1FBRUYsbUJBQWMsR0FBTSwyQkFBMkIsQ0FBQztRQUNoRCw2QkFBd0IsR0FBTSxDQUFDLENBQUM7O1FBRWhDLGNBQVMsR0FBSztZQUNaLE9BQU8sRUFBQyxFQUFFO1lBQ1YsTUFBTSxFQUFDLENBQUM7WUFDUixXQUFXLEVBQUMsQ0FBQztTQUNkLENBQUM7O1FBMkRBLFlBQU8sR0FBSztZQUNWLGFBQWEsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUM7O1lBRXhCLGNBQWMsRUFBQyxJQUFJOzs7WUFHbkIsYUFBYSxFQUFDO2dCQUNWO29CQUNJLEtBQUssRUFBQyxnQkFBZ0I7b0JBQ3RCLElBQUksRUFBQyw4Q0FBOEM7b0JBQ25ELElBQUksRUFBQyxjQUFjO29CQUNuQixTQUFTLEVBQUMsU0FBUztv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QUFFLEVBQUU7WUFDckUsaUNBQWlDO1lBQ2pDLHVCQUF1QjtZQUN2QixzREFBc0Q7WUFDdEQsK0JBQStCO1FBRW5DLENBQUM7Ozs7UUFBRSxLQUFLLENBQUMsRUFBRTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7WUFsS0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLDArQ0FBeUQ7O2FBRTFEOzs7O1lBUlEsVUFBVTs7O3FCQWtDaEIsS0FBSzs7OztJQXZCUixrREFBb0I7O0lBR2xCLDJEQUFvQjs7SUFDcEIsbURBQXdCOztJQUd6QixxREFJQzs7SUFFRiwyREFBZ0Q7O0lBQ2hELHFFQUFnQzs7SUFFaEMsc0RBSUU7O0lBQ0YsdURBQXNCOztJQTBEcEIsb0RBbUNEOzs7OztJQUdhLHVEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcblxuLyoqIFRoaXMgaXMgdGhlIGFjdHVhbGkgbWFpbiBibG9nIHBhZ2UgKiovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5wdWJsaWMgdmFsdWU6YW55PVtdO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGJsb2dMaXN0Q29uZmlnOiBhbnk7XG4gIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIC8vIHNlbmQgYmFzaWMgc29ydCBkYXRhXG4gc29ydGRhdGE6YW55PXtcbiAgXCJ0eXBlXCI6J2Rlc2MnLFxuICBcImZpZWxkXCI6J3ByaW9yaXR5JyxcbiAgXCJvcHRpb25zXCI6WydhdXRob3InLCdibG9nY2F0ZWdvcnknLCdibG9ndGl0bGUnLCdwcmlvcml0eSddXG59O1xuLy8gZGF0YWNvbGxlY3Rpb25cbmRhdGFjb2xsZWN0aW9uOiBhbnk9J2dldGJsb2dtYW5hZ2VtZW50bGlzdGRhdGEnO1xuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50OiBhbnk9MDtcbi8vIHNlbmQgYmFzaWMgbGltaXQgZGF0YVxubGltaXRjb25kOmFueT17XG4gIFwibGltaXRcIjoxMCxcbiAgXCJza2lwXCI6MCxcbiAgXCJwYWdlY291bnRcIjoxXG59OyBcbnB1YmxpYyB3ZXNpdGVzVmFsOmFueTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09SW5wdXQgRm9yIExpYiBMaXN0aW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhyZWNlaXZlZERhdGE6IGFueSkge1xuZm9yIChsZXQgaSBpbiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSkge1xuICB0aGlzLnZhbHVlLnB1c2goXG4gICAgeyAnbmFtZSc6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLmJsb2djYXRlZ29yeSwgdmFsOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS5ibG9nY2F0ZWdvcnkgfVxuICAgICk7XG5cbn1cbiAgIHRoaXMud2VzaXRlc1ZhbCA9IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLndlYnNpdGU7XG4gIC8vICBjb25zb2xlLmxvZyhcIisrKysrKysrKysrKysrKysrXCIsdGhpcy53ZXNpdGVzVmFsKTtcbiAgICB0aGlzLmJsb2dMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGVuZHBvaW50IDpyZWNlaXZlZERhdGEuZW5kcG9pbnQsXG4gICAgICBlbmRwb2ludGM6cmVjZWl2ZWREYXRhLmVuZHBvaW50YyxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJ1cGRhdGVkX2F0XCIsIFwiaW1hZ2VcIiwgXCJtZXRhdGl0bGVcIiwgXCJtZXRhZGVzY1wiLCBcImRlc2NyaXB0aW9uXCIsIFwiY3JlZGVudGlhbHNcIiwgXCJibG9nc19maWxlXCIsIFwiYmxvZ3NfaW1hZ2VcIixcImJsb2d0aXRsZV9zZWFyY2hcIixcImF1dGhvcl9zZWFyY2hcIixcInZpZGVvXCIsXCJibG9nY2F0XCIsXCJwcm9maWxlX3BpY3R1cmVcIixcInRhZ3NlYXJjaFwiLFwiZmVhdHVyZWRcIixcIm1hc2Jsb2cxXCIsXCJtYXNibG9nMlwiLFwibWFzYmxvZzNcIl0sXG4gICAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjoge1xuICAgICAgICBcImJsb2d0aXRsZVwiOiBcIkJsb2cgVGl0bGVcIiwgXCJkZXNjcmlwdGlvbiBodG1sXCI6IFwiRGVzY3JpcHRpb25cIixcImRhdGUgYWRkZWRcIjpcIkRhdGVcIixcInByb2ZpbGUgcGljdHVyZVwiOlwiUHJvZmlsZSBQaWN0dXJlXCIsXCJ0YWdzXCI6XCJUYWdzXCIsXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJQcmlvcml0eVwiLCBcInN0YXR1c1wiOiBcIlN0YXR1c1wiLCBcInBhcmVudGNhdGVnb3J5bmFtZVwiOiBcIlBhcmVudCBDYXRlZ29yeSBOYW1lXCIsXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiQXV0aG9yXCIsXCJibG9nY2F0XCI6XCJCbG9nIENhdGVnb3J5XCIsXCJkYXRlXCI6XCJEYXRlXCIsXCJibG9nY2F0ZWdvcnlcIjpcIkJsb2cgQ2F0ZWdvcnlcIixcbiAgICAgICAgXCJmZWF0dXJlZCBzZWFyY2hcIjpcIkZlYXR1cmVkXCIsXCJ3ZWJzaXRlXCI6XCJXZWJzaXRlXCJcbiAgICAgIH0sXG4gICAgICBhZG1pbkRhdGFMaXN0X2RldGFpbF9za2lwOlsnX2lkJywncGFzc3dvcmQnLCd1cGRhdGVkX2F0JywnaWQnLFwiZGVzY3JpcHRpb25faHRtbFwiLFwiYmxvZ2NhdFwiLFwiY3JlYXRlZF9hdFwiLFwicHJvZmlsZV9waWN0dXJlXCIsXCJ0YWdzZWFyY2hcIixcIm1hc2Jsb2cxXCIsXCJtYXNibG9nMlwiLFwibWFzYmxvZzNcIl0sXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxuICAgICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcbiAgICAgIHNlYXJjaF9zZXR0aW5nczoge1xuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggQnkgQmxvZyBUaXRsZVwiLCBmaWVsZDogJ2Jsb2d0aXRsZV9zZWFyY2gnIH0seyBsYWJlbDogXCJTZWFyY2ggQnkgQXV0aG9yXCIsIGZpZWxkOiAnYXV0aG9yX3NlYXJjaCcgfSx7IGxhYmVsOiBcIlNlYXJjaCBCeSBUYWdzXCIsIGZpZWxkOiAndGFnc2VhcmNoJyB9XSxcblxuICAgICAgICBzZWxlY3RzZWFyY2g6IFtcbiAgICAgICAgICB7IGxhYmVsOiAnU3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XX0se2xhYmVsOlwiU2VhcmNoIEJ5IEJsb2cgQ2F0ZWdvcnlcIixmaWVsZDonYmxvZ2NhdGVnb3J5Jyx2YWx1ZXM6dGhpcy52YWx1ZX0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdTZWFyY2ggQnkgQmxvZyBGZWF0dXJlZCcsIGZpZWxkOiAnZmVhdHVyZWQnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJZZXNcIiB9LCB7IHZhbDogMCwgbmFtZTogJ05vJyB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdTZWFyY2ggQnkgQmxvZyBXZWJzaXRlJywgZmllbGQ6ICd3ZWJzaXRlJywgdmFsdWVzOiBbeyB2YWw6IFwiTWFzayBCbG9nIDFcIiwgbmFtZTogXCJNYXNrIEJsb2cgMVwiIH0sIHsgdmFsOiBcIk1hc2sgQmxvZyAyXCIsIG5hbWU6ICdNYXNrIEJsb2cgMicgfSx7dmFsOlwiTWFzayBCbG9nIDNcIixuYW1lOlwiTWFzayBCbG9nIDNcIn1dXG4gICAgICAgICAgfVxuICAgICAgICBdXG5cbiAgICAgIH0sXG4gICAgICAvLyAgLypTaG93aW5nIEltYWdlIGluIHRoZSBNb2RhbCovXG4gICAgICAvLyAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFt7XG4gICAgICAvLyAgIGtleTogXCJpbWFnZVwiLFxuICAgICAgLy8gICB2YWx1ZTogJ2ltYWdlJyxcbiAgICAgIC8vICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZXN0aW1vbmlhbC8nICAgICAgICAgICAgIC8vIEltYWdlIHBhdGggXG4gICAgICAvLyB9XSxcbiAgICB9XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGxpYmRhdGE6YW55PXtcbiAgICBiYXNlY29uZGl0aW9uOntzdGF0dXM6MX0sXG4gICAgLy8gdXBkYXRlZW5kcG9pbnQ6J3N0YXR1c3VwZGF0ZTEnLFxuICAgIGhpZGVlZGl0YnV0dG9uOnRydWUsLy8gYWxsIHRoZXNlIGJ1dHRvbiBvcHRpb25zIGFyZSBvcHRpb25hbCBub3QgbWFuZGF0b3J5XG4gICAgXG4gICAgLy8gdGFibGVoZWFkZXJzOlsnYXV0aG9yJywncHJpb3JpdHknLCdibG9ndGl0bGUnLCdzdGF0dXMnLCd3cm9uZ29uZSddLCAvL25vdCByZXF1aXJlZFxuICAgIGN1c3RvbWJ1dHRvbnM6W1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDpcIlByZXZpZXcgQmxvZyAxXCIsXG4gICAgICAgICAgICBsaW5rOlwiaHR0cHM6Ly9tYXNrLWJsb2cxLmluZmx1eGlxLmNvbS9ibG9nLWRldGFpbHNcIixcbiAgICAgICAgICAgIHR5cGU6J2V4dGVybmFsbGluaycsXG4gICAgICAgICAgICBwYXJhbXR5cGU6J2FuZ3VsYXInLFxuICAgICAgICAgICAgcGFyYW06WydibG9ndGl0bGUnLCdfaWQnXSxcbiAgICAgICAgICAgIGNvbmQ6J21hc2Jsb2cxJyxcbiAgICAgICAgICAgIGNvbmR2YWw6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOlwiUHJldmlldyBCbG9nIDJcIixcbiAgICAgICAgICBsaW5rOlwiaHR0cHM6Ly9tYXNrLWJsb2cyLmluZmx1eGlxLmNvbS9ibG9nLWRldGFpbHNcIixcbiAgICAgICAgICB0eXBlOidleHRlcm5hbGxpbmsnLFxuICAgICAgICAgIHBhcmFtdHlwZTonYW5ndWxhcicsXG4gICAgICAgICAgcGFyYW06WydibG9ndGl0bGUnLCdfaWQnXSxcbiAgICAgICAgICBjb25kOidtYXNibG9nMicsXG4gICAgICAgICAgY29uZHZhbDogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6XCJQcmV2aWV3IEJsb2cgM1wiLFxuICAgICAgICBsaW5rOlwiaHR0cHM6Ly9tYXNrLWJsb2czLmluZmx1eGlxLmNvbS9ibG9nLWRldGFpbHNcIixcbiAgICAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJyxcbiAgICAgICAgcGFyYW10eXBlOidhbmd1bGFyJyxcbiAgICAgICAgcGFyYW06WydibG9ndGl0bGUnLCdfaWQnXSxcbiAgICAgICAgY29uZDonbWFzYmxvZzMnLFxuICAgICAgICBjb25kdmFsOiAxXG4gICAgfVxuICAgIF1cbn1cbiAgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7XG4gICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBlbmRwb2ludD10aGlzLmJsb2dMaXN0Q29uZmlnLmVuZHBvaW50O1xuICAgIGxldCBlbmRwb2ludGM9dGhpcy5ibG9nTGlzdENvbmZpZy5lbmRwb2ludGM7XG4gICAgbGV0IGRhdGE6YW55PXtcbiAgICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgICAgICBcImxpbWl0XCI6MTAsXG4gICAgICAgICAgICBcInNraXBcIjowXG4gICAgICAgIH0sXG4gICAgc29ydDp7XG4gICAgICAgIFwidHlwZVwiOidkZXNjJyxcbiAgICAgICAgXCJmaWVsZFwiOidwcmlvcml0eSdcbiAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnRjLCBkYXRhKS5zdWJzY3JpYmUoKHJlczphbnkpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luIGNvbnN0cnVjdG9yJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50ID1yZXMuY291bnQ7XG4gICAgICAgIGNvbnNvbGUud2FybignYmxvZ0RhdGEgYycscmVzKTtcblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhV2l0aG91dFRva2VuKGVuZHBvaW50LGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gY29uc3RydWN0b3InKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgLy8gdGhpcy5wZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5ID1yZXMucmVzdWx0cy5yZXM7XG4gICAgICAgIC8vY29uc29sZS53YXJuKCdibG9nRGF0YScscmVzKTtcblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICB9KTtcblxuICB9XG59Il19