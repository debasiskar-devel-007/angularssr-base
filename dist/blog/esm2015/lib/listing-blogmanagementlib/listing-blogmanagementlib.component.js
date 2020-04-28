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
    // ================================================Input For Lib Listing================================
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
        for (let i in receivedData.datasource) {
            this.value.push({ 'name': receivedData.datasource[i].blogcategory, val: receivedData.datasource[i].blogcategory });
        }
        for (let i in receivedData.datasource) {
            for (let val in receivedData.datasource[i].tags) {
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
                template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n      [datasource]=\"blogListConfig.datasource\" [skip]=\"blogListConfig.listArray_skip\"\n      [modify_header_array]=\"blogListConfig.listArray_modify_header\" [sourcedata]=\"blogListConfig.tableName\"\n      [statusarr]=\"blogListConfig.statusarr\" [jwttoken]=\"blogListConfig.jwtToken\"\n      [apiurl]=\"blogListConfig.apiUrl\" [editroute]=\"blogListConfig.editUrl\"\n      [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n      [date_search_source]=\"blogListConfig.view\"\n     [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n     [search_settings]=\"blogListConfig.search_settings\"\n     [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n     [sortdata]=\"sortdata\"\n     [datacollection]=\"datacollection\"\n     [date_search_source_count]=\"date_search_source_count\"\n     [limitcond]=\"limitcond\"\n     [detail_skip_array]=\"blogListConfig.adminDataList_detail_skip\"\n     >\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBUzVDLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7SUFrSTVDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFoSXJDLFVBQUssR0FBSyxFQUFFLENBQUM7UUFJbEIsV0FBTSxHQUFZLEtBQUssQ0FBQzs7O1FBR3pCLGFBQVEsR0FBSztZQUNaLE1BQU0sRUFBQyxNQUFNO1lBQ2IsT0FBTyxFQUFDLFVBQVU7WUFDbEIsU0FBUyxFQUFDLENBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsVUFBVSxDQUFDO1NBQzNELENBQUM7O1FBRUYsbUJBQWMsR0FBTSwyQkFBMkIsQ0FBQztRQUNoRCw2QkFBd0IsR0FBTSxDQUFDLENBQUM7O1FBRWhDLGNBQVMsR0FBSztZQUNaLE9BQU8sRUFBQyxFQUFFO1lBQ1YsTUFBTSxFQUFDLENBQUM7WUFDUixXQUFXLEVBQUMsQ0FBQztTQUNkLENBQUM7UUFDSyxhQUFRLEdBQUssRUFBRSxDQUFDO1FBQ2hCLFlBQU8sR0FBSyxFQUFFLENBQUM7O1FBb0VwQixZQUFPLEdBQUs7WUFDVixhQUFhLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDOztZQUV4QixjQUFjLEVBQUMsSUFBSTs7O1lBR25CLGFBQWEsRUFBQztnQkFDVjtvQkFDSSxLQUFLLEVBQUMsZ0JBQWdCO29CQUN0QixJQUFJLEVBQUMs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QUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQztRQUVuQyxDQUFDOzs7O1FBQUUsS0FBSyxDQUFDLEVBQUU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsR0FBTyxFQUFFLEVBQUU7WUFDckUsaUNBQWlDO1lBQ2pDLHVCQUF1QjtZQUN2QixzREFBc0Q7WUFDdEQsK0JBQStCO1FBRW5DLENBQUM7Ozs7UUFBRSxLQUFLLENBQUMsRUFBRTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7WUE3S0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLHE5Q0FBeUQ7O2FBRTFEOzs7O1lBUlEsVUFBVTs7O3FCQW9DaEIsS0FBSzs7OztJQXpCUixrREFBb0I7O0lBR2xCLDJEQUFvQjs7SUFDcEIsbURBQXdCOztJQUd6QixxREFJQzs7SUFFRiwyREFBZ0Q7O0lBQ2hELHFFQUFnQzs7SUFFaEMsc0RBSUU7O0lBQ0YscURBQXVCOztJQUN2QixvREFBc0I7O0lBQ3RCLHVEQUFzQjs7SUFtRXBCLG9EQW1DRDs7Ozs7SUFHYSx1REFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5cbi8qKiBUaGlzIGlzIHRoZSBhY3R1YWxpIG1haW4gYmxvZyBwYWdlICoqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxucHVibGljIHZhbHVlOmFueT1bXTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBibG9nTGlzdENvbmZpZzogYW55O1xuICBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAvLyBzZW5kIGJhc2ljIHNvcnQgZGF0YVxuIHNvcnRkYXRhOmFueT17XG4gIFwidHlwZVwiOidkZXNjJyxcbiAgXCJmaWVsZFwiOidwcmlvcml0eScsXG4gIFwib3B0aW9uc1wiOlsnYXV0aG9yJywnYmxvZ2NhdGVnb3J5JywnYmxvZ3RpdGxlJywncHJpb3JpdHknXVxufTtcbi8vIGRhdGFjb2xsZWN0aW9uXG5kYXRhY29sbGVjdGlvbjogYW55PSdnZXRibG9nbWFuYWdlbWVudGxpc3RkYXRhJztcbmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudDogYW55PTA7XG4vLyBzZW5kIGJhc2ljIGxpbWl0IGRhdGFcbmxpbWl0Y29uZDphbnk9e1xuICBcImxpbWl0XCI6MTAsXG4gIFwic2tpcFwiOjAsXG4gIFwicGFnZWNvdW50XCI6MVxufTsgXG5wdWJsaWMgdGFnX2RhdGE6YW55PVtdO1xucHVibGljIGF1dGh2YWw6YW55PVtdO1xucHVibGljIHdlc2l0ZXNWYWw6YW55O1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7XG5mb3IgKGxldCBpIGluIHJlY2VpdmVkRGF0YS5kYXRhc291cmNlKSB7XG4gIHRoaXMudmFsdWUucHVzaChcbiAgICB7ICduYW1lJzogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0uYmxvZ2NhdGVnb3J5LCB2YWw6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLmJsb2djYXRlZ29yeSB9XG4gICAgKTtcbn1cbmZvciAobGV0IGkgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UpIHtcbiAgZm9yIChsZXQgdmFsIGluIHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLnRhZ3MpIHtcbiAgICB0aGlzLmF1dGh2YWwucHVzaChcbiAgICAgIHsgJ25hbWUnOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS50YWdzW3ZhbF0sIHZhbDogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0udGFnc1t2YWxdIH1cbiAgICApO1xuICB9XG4gIFxuXG59XG4gICB0aGlzLndlc2l0ZXNWYWwgPSByZWNlaXZlZERhdGEuZGF0YXNvdXJjZS53ZWJzaXRlO1xuICAvLyAgY29uc29sZS5sb2coXCIrKysrKysrKysrKysrKysrK1wiLHRoaXMud2VzaXRlc1ZhbCk7XG4gICAgdGhpcy5ibG9nTGlzdENvbmZpZyA9IHtcbiAgICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXG4gICAgICBlbmRwb2ludCA6cmVjZWl2ZWREYXRhLmVuZHBvaW50LFxuICAgICAgZW5kcG9pbnRjOnJlY2VpdmVkRGF0YS5lbmRwb2ludGMsXG4gICAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXG4gICAgICBkYXRhc291cmNlOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSxcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWREYXRhLnRhYmxlTmFtZSxcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwidXBkYXRlZF9hdFwiLCBcImltYWdlXCIsIFwibWV0YXRpdGxlXCIsIFwibWV0YWRlc2NcIiwgXCJkZXNjcmlwdGlvblwiLCBcImNyZWRlbnRpYWxzXCIsIFwiYmxvZ3NfZmlsZVwiLCBcImJsb2dzX2ltYWdlXCIsXCJibG9ndGl0bGVfc2VhcmNoXCIsXCJhdXRob3Jfc2VhcmNoXCIsXCJ2aWRlb1wiLFwiYmxvZ2NhdFwiLFwicHJvZmlsZV9waWN0dXJlXCIsXCJ0YWdzZWFyY2hcIixcImZlYXR1cmVkXCIsXCJtYXNrYmxvZzFcIixcIm1hc2tibG9nMlwiLFwibWFza2Jsb2czXCIsXCJ0YWdzX3NlYXJjaFwiLFwid2Vic2l0ZVwiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7XG4gICAgICAgIFwiYmxvZ3RpdGxlXCI6IFwiQmxvZyBUaXRsZVwiLCBcImRlc2NyaXB0aW9uIGh0bWxcIjogXCJEZXNjcmlwdGlvblwiLFwiZGF0ZSBhZGRlZFwiOlwiRGF0ZVwiLFwicHJvZmlsZSBwaWN0dXJlXCI6XCJQcm9maWxlIFBpY3R1cmVcIixcInRhZ3NcIjpcIlRhZ3NcIixcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIsIFwicGFyZW50Y2F0ZWdvcnluYW1lXCI6IFwiUGFyZW50IENhdGVnb3J5IE5hbWVcIixcbiAgICAgICAgXCJhdXRob3JcIjogXCJBdXRob3JcIixcImJsb2djYXRcIjpcIkJsb2cgQ2F0ZWdvcnlcIixcImRhdGVcIjpcIkRhdGVcIixcImJsb2djYXRlZ29yeVwiOlwiQmxvZyBDYXRlZ29yeVwiLFxuICAgICAgICBcImZlYXR1cmVkIHNlYXJjaFwiOlwiRmVhdHVyZWRcIlxuICAgICAgfSxcbiAgICAgIGFkbWluRGF0YUxpc3RfZGV0YWlsX3NraXA6WydfaWQnLCdwYXNzd29yZCcsJ3VwZGF0ZWRfYXQnLCdpZCcsXCJkZXNjcmlwdGlvbl9odG1sXCIsXCJibG9nY2F0XCIsXCJjcmVhdGVkX2F0XCIsXCJwcm9maWxlX3BpY3R1cmVcIixcInRhZ3NlYXJjaFwiLFwibWFza2Jsb2cxXCIsXCJtYXNrYmxvZzJcIixcIm1hc2tibG9nM1wiLFwidGFnc19zZWFyY2hcIl0sXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxuICAgICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcbiAgICAgIHNlYXJjaF9zZXR0aW5nczoge1xuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggQnkgQmxvZyBUaXRsZVwiLCBmaWVsZDogJ2Jsb2d0aXRsZV9zZWFyY2gnIH0seyBsYWJlbDogXCJTZWFyY2ggQnkgQXV0aG9yXCIsIGZpZWxkOiAnYXV0aG9yX3NlYXJjaCcgfV0sXG5cbiAgICAgICAgc2VsZWN0c2VhcmNoOiBbXG4gICAgICAgICAgeyBsYWJlbDogJ1N0YXR1cycsIGZpZWxkOiAnc3RhdHVzJywgdmFsdWVzOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV19LHtsYWJlbDpcIlNlYXJjaCBCeSBCbG9nIENhdGVnb3J5XCIsZmllbGQ6J2Jsb2djYXRlZ29yeScsdmFsdWVzOnRoaXMudmFsdWV9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2VhcmNoIEJ5IEJsb2cgRmVhdHVyZWQnLCBmaWVsZDogJ2ZlYXR1cmVkJywgdmFsdWVzOiBbeyB2YWw6IDEsIG5hbWU6IFwiWWVzXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdObycgfV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIGxhYmVsOiAnU2VhcmNoIEJ5IEJsb2cgV2Vic2l0ZScsIGZpZWxkOiAnd2Vic2l0ZScsIHZhbHVlczogW3sgdmFsOiBcIk1hc2sgQmxvZyAxXCIsIG5hbWU6IFwiTWFzayBCbG9nIDFcIiB9LCB7IHZhbDogXCJNYXNrIEJsb2cgMlwiLCBuYW1lOiAnTWFzayBCbG9nIDInIH0se3ZhbDpcIk1hc2sgQmxvZyAzXCIsbmFtZTpcIk1hc2sgQmxvZyAzXCJ9XVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgXSxcbiAgICAgICAgc2VhcmNoOlt7bGFiZWw6XCJTZWFyY2ggQnkgVGFnc1wiLGZpZWxkOid0YWdzX3NlYXJjaCcsdmFsdWVzOnRoaXMuYXV0aHZhbH1dXG5cbiAgICAgIH0sXG4gICAgICAvLyAgLypTaG93aW5nIEltYWdlIGluIHRoZSBNb2RhbCovXG4gICAgICAvLyAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFt7XG4gICAgICAvLyAgIGtleTogXCJpbWFnZVwiLFxuICAgICAgLy8gICB2YWx1ZTogJ2ltYWdlJyxcbiAgICAgIC8vICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZXN0aW1vbmlhbC8nICAgICAgICAgICAgIC8vIEltYWdlIHBhdGggXG4gICAgICAvLyB9XSxcbiAgICB9XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGxpYmRhdGE6YW55PXtcbiAgICBiYXNlY29uZGl0aW9uOntzdGF0dXM6MX0sXG4gICAgLy8gdXBkYXRlZW5kcG9pbnQ6J3N0YXR1c3VwZGF0ZTEnLFxuICAgIGhpZGVlZGl0YnV0dG9uOnRydWUsLy8gYWxsIHRoZXNlIGJ1dHRvbiBvcHRpb25zIGFyZSBvcHRpb25hbCBub3QgbWFuZGF0b3J5XG4gICAgXG4gICAgLy8gdGFibGVoZWFkZXJzOlsnYXV0aG9yJywncHJpb3JpdHknLCdibG9ndGl0bGUnLCdzdGF0dXMnLCd3cm9uZ29uZSddLCAvL25vdCByZXF1aXJlZFxuICAgIGN1c3RvbWJ1dHRvbnM6W1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDpcIlByZXZpZXcgQmxvZyAxXCIsXG4gICAgICAgICAgICBsaW5rOlwiaHR0cHM6Ly9tYXNrLWJsb2cxLmluZmx1eGlxLmNvbS9ibG9nLWRldGFpbHNcIixcbiAgICAgICAgICAgIHR5cGU6J2V4dGVybmFsbGluaycsXG4gICAgICAgICAgICBwYXJhbXR5cGU6J2FuZ3VsYXInLFxuICAgICAgICAgICAgcGFyYW06WydibG9ndGl0bGUnLCdfaWQnXSxcbiAgICAgICAgICAgIGNvbmQ6J21hc2tibG9nMScsXG4gICAgICAgICAgICBjb25kdmFsOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDpcIlByZXZpZXcgQmxvZyAyXCIsXG4gICAgICAgICAgbGluazpcImh0dHBzOi8vbWFzay1ibG9nMi5pbmZsdXhpcS5jb20vYmxvZy1kZXRhaWxzXCIsXG4gICAgICAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJyxcbiAgICAgICAgICBwYXJhbXR5cGU6J2FuZ3VsYXInLFxuICAgICAgICAgIHBhcmFtOlsnYmxvZ3RpdGxlJywnX2lkJ10sXG4gICAgICAgICAgY29uZDonbWFza2Jsb2cyJyxcbiAgICAgICAgICBjb25kdmFsOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDpcIlByZXZpZXcgQmxvZyAzXCIsXG4gICAgICAgIGxpbms6XCJodHRwczovL21hc2stYmxvZzMuaW5mbHV4aXEuY29tL2Jsb2ctZGV0YWlsc1wiLFxuICAgICAgICB0eXBlOidleHRlcm5hbGxpbmsnLFxuICAgICAgICBwYXJhbXR5cGU6J2FuZ3VsYXInLFxuICAgICAgICBwYXJhbTpbJ2Jsb2d0aXRsZScsJ19pZCddLFxuICAgICAgICBjb25kOidtYXNrYmxvZzMnLFxuICAgICAgICBjb25kdmFsOiAxXG4gICAgfVxuICAgIF1cbn1cbiAgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7XG4gICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBlbmRwb2ludD10aGlzLmJsb2dMaXN0Q29uZmlnLmVuZHBvaW50O1xuICAgIGxldCBlbmRwb2ludGM9dGhpcy5ibG9nTGlzdENvbmZpZy5lbmRwb2ludGM7XG4gICAgbGV0IGRhdGE6YW55PXtcbiAgICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgICAgICBcImxpbWl0XCI6MTAsXG4gICAgICAgICAgICBcInNraXBcIjowXG4gICAgICAgIH0sXG4gICAgc29ydDp7XG4gICAgICAgIFwidHlwZVwiOidkZXNjJyxcbiAgICAgICAgXCJmaWVsZFwiOidwcmlvcml0eSdcbiAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnRjLCBkYXRhKS5zdWJzY3JpYmUoKHJlczphbnkpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luIGNvbnN0cnVjdG9yJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50ID1yZXMuY291bnQ7XG4gICAgICAgIGNvbnNvbGUud2FybignYmxvZ0RhdGEgYycscmVzKTtcblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhV2l0aG91dFRva2VuKGVuZHBvaW50LGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gY29uc3RydWN0b3InKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgLy8gdGhpcy5wZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5ID1yZXMucmVzdWx0cy5yZXM7XG4gICAgICAgIC8vY29uc29sZS53YXJuKCdibG9nRGF0YScscmVzKTtcblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICB9KTtcblxuICB9XG59Il19