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
        // datacollection: any='getblogmanagementlistdata';
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
            basecondition: '',
            updateendpoint: 'statusupdateforblog',
            hideeditbutton: false,
            // all these button options are optional not mandatory
            tableheaders: ['blogtitle', 'description', 'author', 'priority', 'status', 'featured', 'createdon_datetime'],
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
            datacollection: receivedData.datacollection,
            listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "metatitle", "metadesc", "description", "credentials", "blogs_file", "blogs_image", "blogtitle_search", "author_search", "video", "blogcat", "profile_picture", "tagsearch", "featured", "maskblog1", "maskblog2", "maskblog3", "tags_search", "website"],
            listArray_modify_header: {
                "blogtitle": "Blog Title", "description": "Description", "date added": "Date", "profile picture": "Profile Picture", "tags": "Tags",
                "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name",
                "author": "Author", "blogcat": "Blog Category", "date": "Date", "blogcategory": "Blog Category",
                "featured search": "Featured", "createdon datetime": "Date", "createdon_datetime": "Date", "featured": "Featured"
            },
            blog_detail_skip: ['_id', 'password', 'updated_at', 'id', "description_html", "blogcat", "created_at", "profile_picture", "tagsearch", "maskblog1", "maskblog2", "maskblog3", "tags_search"],
            admintablenameTableName: "admin",
            statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
            // updateurl: receivedData.updateEndpoint,
            editUrl: receivedData.editUrl,
            jwtToken: receivedData.jwtToken,
            deleteEndPoint: receivedData.deleteEndPoint,
            view: receivedData.view,
            search_settings: {
                datesearch: [{ startdatelabel: "Start Date", enddatelabel: "End Date", submit: "Search", field: "createdon_datetime" }],
                // this is use for  date search //created at = field in res which gives date in unix format that changes to ist using moment.js
                textsearch: [{ label: "Search By Blog Title", field: 'blogtitle' }, { label: "Search By Author", field: 'author' }],
                selectsearch: [
                    { label: 'Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }]
                    },
                    // ,{label:"Search By Blog Category",field:'blogcategory',values:this.value},
                    {
                        label: 'Search By Blog Featured', field: 'featured', values: [{ val: 1, name: "Yes" }, { val: 0, name: 'No' }]
                    },
                ],
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
            this.datasource = res.results.res; // console.log('in constructor');
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
                template: "<!-- <mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card> -->\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListConfig.datasource !=null\"\n\n      [datasource]=\"blogListConfig.datasource\" \n\n      [skip]=\"blogListConfig.listArray_skip\"\n\n      [modify_header_array]=\"blogListConfig.listArray_modify_header\" \n\n      [sourcedata]=\"blogListConfig.tableName\"\n\n      [statusarr]=\"blogListConfig.statusarr\" \n\n      [jwttoken]=\"blogListConfig.jwtToken\"\n\n      [apiurl]=\"blogListConfig.apiUrl\" \n\n      [editroute]=\"blogListConfig.editUrl\"\n\n      [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n\n      [date_search_source]=\"blogListConfig.view\"\n\n     [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n\n     [search_settings]=\"blogListConfig.search_settings\"\n\n     [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n\n     [sortdata]=\"sortdata\"\n\n     [datacollection]=\"blogListConfig.datacollection\"\n\n     [date_search_source_count]=\"date_search_source_count\"\n\n     [limitcond]=\"limitcond\"\n\n     [libdata]=\"libdata\"\n     \n     [detail_skip_array]=\"blogListConfig.blog_detail_skip\"\n     >\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <!-- <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2> -->\n</mat-card>",
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
    ListingBlogmanagementlibComponent.prototype.date_search_source_count;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.limitcond;
    /** @type {?} */
    ListingBlogmanagementlibComponent.prototype.datasource;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBUzVDLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7SUErSTVDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUE3SXJDLFVBQUssR0FBSyxFQUFFLENBQUM7UUFJbEIsV0FBTSxHQUFZLEtBQUssQ0FBQzs7O1FBR3pCLGFBQVEsR0FBSztZQUNaLE1BQU0sRUFBQyxNQUFNO1lBQ2IsT0FBTyxFQUFDLFVBQVU7WUFDbEIsU0FBUyxFQUFDLENBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsVUFBVSxDQUFDO1NBQzNELENBQUM7OztRQUdGLDZCQUF3QixHQUFNLENBQUMsQ0FBQzs7UUFFaEMsY0FBUyxHQUFLO1lBQ1osT0FBTyxFQUFDLEVBQUU7WUFDVixNQUFNLEVBQUMsQ0FBQztZQUNSLFdBQVcsRUFBQyxDQUFDO1NBQ2QsQ0FBQztRQU9LLGFBQVEsR0FBSyxFQUFFLENBQUM7UUFDaEIsWUFBTyxHQUFLLEVBQUUsQ0FBQzs7UUEyRXBCLFlBQU8sR0FBSztZQUNWLGFBQWEsRUFBQyxFQUFFO1lBQ2hCLGNBQWMsRUFBQyxxQkFBcUI7WUFDcEMsY0FBYyxFQUFDLEtBQUs7O1lBRXBCLFlBQVksRUFBQyxDQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLG9CQUFvQixD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QixLQUFLOzs7O0lBL0JSLGtEQUFvQjs7SUFHbEIsMkRBQW9COztJQUNwQixtREFBd0I7O0lBR3pCLHFEQUlDOztJQUdGLHFFQUFnQzs7SUFFaEMsc0RBSUU7O0lBS0YsdURBQWU7O0lBRWYscURBQXVCOztJQUN2QixvREFBc0I7O0lBQ3RCLHVEQUFzQjs7SUEwRXBCLG9EQW1DRDs7Ozs7SUFHYSx1REFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5cbi8qKiBUaGlzIGlzIHRoZSBhY3R1YWxpIG1haW4gYmxvZyBwYWdlICoqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxucHVibGljIHZhbHVlOmFueT1bXTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBibG9nTGlzdENvbmZpZzogYW55O1xuICBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAvLyBzZW5kIGJhc2ljIHNvcnQgZGF0YVxuIHNvcnRkYXRhOmFueT17XG4gIFwidHlwZVwiOidkZXNjJyxcbiAgXCJmaWVsZFwiOidwcmlvcml0eScsXG4gIFwib3B0aW9uc1wiOlsnYXV0aG9yJywnYmxvZ2NhdGVnb3J5JywnYmxvZ3RpdGxlJywncHJpb3JpdHknXVxufTtcbi8vIGRhdGFjb2xsZWN0aW9uXG4vLyBkYXRhY29sbGVjdGlvbjogYW55PSdnZXRibG9nbWFuYWdlbWVudGxpc3RkYXRhJztcbmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudDogYW55PTA7XG4vLyBzZW5kIGJhc2ljIGxpbWl0IGRhdGFcbmxpbWl0Y29uZDphbnk9e1xuICBcImxpbWl0XCI6MTAsXG4gIFwic2tpcFwiOjAsXG4gIFwicGFnZWNvdW50XCI6MVxufTsgXG5cblxuXG5cbmRhdGFzb3VyY2U6YW55O1xuXG5wdWJsaWMgdGFnX2RhdGE6YW55PVtdO1xucHVibGljIGF1dGh2YWw6YW55PVtdO1xucHVibGljIHdlc2l0ZXNWYWw6YW55O1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7XG5mb3IgKGxldCBpIGluIHJlY2VpdmVkRGF0YS5kYXRhc291cmNlKSB7XG4gIHRoaXMudmFsdWUucHVzaChcbiAgICB7ICduYW1lJzogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0uYmxvZ2NhdGVnb3J5LCB2YWw6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLmJsb2djYXRlZ29yeSB9XG4gICAgKTtcbn1cbmZvciAobGV0IGkgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UpIHtcbiAgZm9yIChsZXQgdmFsIGluIHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLnRhZ3MpIHtcbiAgICB0aGlzLmF1dGh2YWwucHVzaChcbiAgICAgIHsgJ25hbWUnOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS50YWdzW3ZhbF0sIHZhbDogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0udGFnc1t2YWxdIH1cbiAgICApO1xuICB9XG4gIFxuXG59XG4gICB0aGlzLndlc2l0ZXNWYWwgPSByZWNlaXZlZERhdGEuZGF0YXNvdXJjZS53ZWJzaXRlO1xuICAvLyAgY29uc29sZS5sb2coXCIrKysrKysrKysrKysrKysrK1wiLHRoaXMud2VzaXRlc1ZhbCk7XG4gICAgdGhpcy5ibG9nTGlzdENvbmZpZyA9IHtcbiAgICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXG4gICAgICBlbmRwb2ludCA6cmVjZWl2ZWREYXRhLmVuZHBvaW50LFxuICAgICAgZW5kcG9pbnRjOnJlY2VpdmVkRGF0YS5lbmRwb2ludGMsXG4gICAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXG4gICAgICBkYXRhc291cmNlOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSxcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWREYXRhLnRhYmxlTmFtZSxcbiAgICAgIGRhdGFjb2xsZWN0aW9uOnJlY2VpdmVkRGF0YS5kYXRhY29sbGVjdGlvbixcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwidXBkYXRlZF9hdFwiLCBcImltYWdlXCIsIFwibWV0YXRpdGxlXCIsIFwibWV0YWRlc2NcIiwgXCJkZXNjcmlwdGlvblwiLCBcImNyZWRlbnRpYWxzXCIsIFwiYmxvZ3NfZmlsZVwiLCBcImJsb2dzX2ltYWdlXCIsXCJibG9ndGl0bGVfc2VhcmNoXCIsXCJhdXRob3Jfc2VhcmNoXCIsXCJ2aWRlb1wiLFwiYmxvZ2NhdFwiLFwicHJvZmlsZV9waWN0dXJlXCIsXCJ0YWdzZWFyY2hcIixcImZlYXR1cmVkXCIsXCJtYXNrYmxvZzFcIixcIm1hc2tibG9nMlwiLFwibWFza2Jsb2czXCIsXCJ0YWdzX3NlYXJjaFwiLFwid2Vic2l0ZVwiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7XG4gICAgICAgIFwiYmxvZ3RpdGxlXCI6IFwiQmxvZyBUaXRsZVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb25cIixcImRhdGUgYWRkZWRcIjpcIkRhdGVcIixcInByb2ZpbGUgcGljdHVyZVwiOlwiUHJvZmlsZSBQaWN0dXJlXCIsXCJ0YWdzXCI6XCJUYWdzXCIsXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJQcmlvcml0eVwiLCBcInN0YXR1c1wiOiBcIlN0YXR1c1wiLCBcInBhcmVudGNhdGVnb3J5bmFtZVwiOiBcIlBhcmVudCBDYXRlZ29yeSBOYW1lXCIsXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiQXV0aG9yXCIsXCJibG9nY2F0XCI6XCJCbG9nIENhdGVnb3J5XCIsXCJkYXRlXCI6XCJEYXRlXCIsXCJibG9nY2F0ZWdvcnlcIjpcIkJsb2cgQ2F0ZWdvcnlcIixcbiAgICAgICAgXCJmZWF0dXJlZCBzZWFyY2hcIjpcIkZlYXR1cmVkXCIsXCJjcmVhdGVkb24gZGF0ZXRpbWVcIjpcIkRhdGVcIixcImNyZWF0ZWRvbl9kYXRldGltZVwiOlwiRGF0ZVwiLFwiZmVhdHVyZWRcIjpcIkZlYXR1cmVkXCJcbiAgICAgIH0sXG4gICAgICBibG9nX2RldGFpbF9za2lwOlsnX2lkJywncGFzc3dvcmQnLCd1cGRhdGVkX2F0JywnaWQnLFwiZGVzY3JpcHRpb25faHRtbFwiLFwiYmxvZ2NhdFwiLFwiY3JlYXRlZF9hdFwiLFwicHJvZmlsZV9waWN0dXJlXCIsXCJ0YWdzZWFyY2hcIixcIm1hc2tibG9nMVwiLFwibWFza2Jsb2cyXCIsXCJtYXNrYmxvZzNcIixcInRhZ3Nfc2VhcmNoXCJdLFxuICAgICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxuICAgICAgLy8gdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXG4gICAgICBlZGl0VXJsOiByZWNlaXZlZERhdGEuZWRpdFVybCxcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxuICAgICAgdmlldzogcmVjZWl2ZWREYXRhLnZpZXcsXG4gICAgICBzZWFyY2hfc2V0dGluZ3M6IHtcblxuICAgICAgICBkYXRlc2VhcmNoOlt7c3RhcnRkYXRlbGFiZWw6XCJTdGFydCBEYXRlXCIsZW5kZGF0ZWxhYmVsOlwiRW5kIERhdGVcIixzdWJtaXQ6XCJTZWFyY2hcIiwgIGZpZWxkOlwiY3JlYXRlZG9uX2RhdGV0aW1lXCJ9XSwgICAvLyB0aGlzIGlzIHVzZSBmb3IgIGRhdGUgc2VhcmNoIC8vY3JlYXRlZCBhdCA9IGZpZWxkIGluIHJlcyB3aGljaCBnaXZlcyBkYXRlIGluIHVuaXggZm9ybWF0IHRoYXQgY2hhbmdlcyB0byBpc3QgdXNpbmcgbW9tZW50LmpzXG5cbiAgICAgICAgdGV4dHNlYXJjaDogW3sgbGFiZWw6IFwiU2VhcmNoIEJ5IEJsb2cgVGl0bGVcIiwgZmllbGQ6ICdibG9ndGl0bGUnIH0seyBsYWJlbDogXCJTZWFyY2ggQnkgQXV0aG9yXCIsIGZpZWxkOiAnYXV0aG9yJyB9XSxcblxuICAgICAgICBzZWxlY3RzZWFyY2g6IFtcbiAgICAgICAgICBcbiAgICAgICAgICB7IGxhYmVsOiAnU3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XVxuICAgICAgICB9LFxuICAgICAgICAgIC8vICx7bGFiZWw6XCJTZWFyY2ggQnkgQmxvZyBDYXRlZ29yeVwiLGZpZWxkOidibG9nY2F0ZWdvcnknLHZhbHVlczp0aGlzLnZhbHVlfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1NlYXJjaCBCeSBCbG9nIEZlYXR1cmVkJywgZmllbGQ6ICdmZWF0dXJlZCcsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIlllc1wiIH0sIHsgdmFsOiAwLCBuYW1lOiAnTm8nIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBsYWJlbDogJ1NlYXJjaCBCeSBCbG9nIFdlYnNpdGUnLCBmaWVsZDogJ3dlYnNpdGUnLCB2YWx1ZXM6IFt7IHZhbDogXCJNYXNrIEJsb2cgMVwiLCBuYW1lOiBcIk1hc2sgQmxvZyAxXCIgfSwgeyB2YWw6IFwiTWFzayBCbG9nIDJcIiwgbmFtZTogJ01hc2sgQmxvZyAyJyB9LHt2YWw6XCJNYXNrIEJsb2cgM1wiLG5hbWU6XCJNYXNrIEJsb2cgM1wifV1cbiAgICAgICAgICAvLyB9XG4gICAgICAgIF0sXG4gICAgICAgIC8vIHNlYXJjaDpbe2xhYmVsOlwiU2VhcmNoIEJ5IFRhZ3NcIixmaWVsZDondGFnc19zZWFyY2gnLHZhbHVlczp0aGlzLmF1dGh2YWx9XVxuXG4gICAgICB9LFxuICAgICAgLy8gIC8qU2hvd2luZyBJbWFnZSBpbiB0aGUgTW9kYWwqL1xuICAgICAgLy8gIHBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXlfZGV0YWlsX2RhdGF0eXBlOiBbe1xuICAgICAgLy8gICBrZXk6IFwiaW1hZ2VcIixcbiAgICAgIC8vICAgdmFsdWU6ICdpbWFnZScsXG4gICAgICAvLyAgIGZpbGV1cmw6ICdodHRwczovL3MzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2NybWZpbGVzLmluZmx1eGhvc3RzZXJ2ZXIvdGVzdGltb25pYWwvJyAgICAgICAgICAgICAvLyBJbWFnZSBwYXRoIFxuICAgICAgLy8gfV0sXG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBsaWJkYXRhOmFueT17XG4gICAgYmFzZWNvbmRpdGlvbjonJyxcbiAgICB1cGRhdGVlbmRwb2ludDonc3RhdHVzdXBkYXRlZm9yYmxvZycsXG4gICAgaGlkZWVkaXRidXR0b246ZmFsc2UsLy8gYWxsIHRoZXNlIGJ1dHRvbiBvcHRpb25zIGFyZSBvcHRpb25hbCBub3QgbWFuZGF0b3J5XG4gICAgXG4gICAgdGFibGVoZWFkZXJzOlsnYmxvZ3RpdGxlJywnZGVzY3JpcHRpb24nLCdhdXRob3InLCdwcmlvcml0eScsJ3N0YXR1cycsJ2ZlYXR1cmVkJywnY3JlYXRlZG9uX2RhdGV0aW1lJ10sIC8vbm90IHJlcXVpcmVkXG4gICAgLy8gY3VzdG9tYnV0dG9uczpbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIGxhYmVsOlwiUHJldmlldyBCbG9nIDFcIixcbiAgICAvLyAgICAgICAgIGxpbms6XCJodHRwczovL21hc2stYmxvZzEuaW5mbHV4aXEuY29tL2Jsb2ctZGV0YWlsc1wiLFxuICAgIC8vICAgICAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJyxcbiAgICAvLyAgICAgICAgIHBhcmFtdHlwZTonYW5ndWxhcicsXG4gICAgLy8gICAgICAgICBwYXJhbTpbJ2Jsb2d0aXRsZScsJ19pZCddLFxuICAgIC8vICAgICAgICAgY29uZDonbWFza2Jsb2cxJyxcbiAgICAvLyAgICAgICAgIGNvbmR2YWw6IDFcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIGxhYmVsOlwiUHJldmlldyBCbG9nIDJcIixcbiAgICAvLyAgICAgICBsaW5rOlwiaHR0cHM6Ly9tYXNrLWJsb2cyLmluZmx1eGlxLmNvbS9ibG9nLWRldGFpbHNcIixcbiAgICAvLyAgICAgICB0eXBlOidleHRlcm5hbGxpbmsnLFxuICAgIC8vICAgICAgIHBhcmFtdHlwZTonYW5ndWxhcicsXG4gICAgLy8gICAgICAgcGFyYW06WydibG9ndGl0bGUnLCdfaWQnXSxcbiAgICAvLyAgICAgICBjb25kOidtYXNrYmxvZzInLFxuICAgIC8vICAgICAgIGNvbmR2YWw6IDFcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGxhYmVsOlwiUHJldmlldyBCbG9nIDNcIixcbiAgICAvLyAgICAgbGluazpcImh0dHBzOi8vbWFzay1ibG9nMy5pbmZsdXhpcS5jb20vYmxvZy1kZXRhaWxzXCIsXG4gICAgLy8gICAgIHR5cGU6J2V4dGVybmFsbGluaycsXG4gICAgLy8gICAgIHBhcmFtdHlwZTonYW5ndWxhcicsXG4gICAgLy8gICAgIHBhcmFtOlsnYmxvZ3RpdGxlJywnX2lkJ10sXG4gICAgLy8gICAgIGNvbmQ6J21hc2tibG9nMycsXG4gICAgLy8gICAgIGNvbmR2YWw6IDFcbiAgICAvLyB9XG4gICAgLy8gXVxufVxuICBcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcbiAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGVuZHBvaW50PXRoaXMuYmxvZ0xpc3RDb25maWcuZW5kcG9pbnQ7XG4gICAgbGV0IGVuZHBvaW50Yz10aGlzLmJsb2dMaXN0Q29uZmlnLmVuZHBvaW50YztcbiAgICBsZXQgZGF0YTphbnk9e1xuICAgICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgICAgIFwibGltaXRcIjoxMCxcbiAgICAgICAgICAgIFwic2tpcFwiOjBcbiAgICAgICAgfSxcbiAgICBzb3J0OntcbiAgICAgICAgXCJ0eXBlXCI6J2Rlc2MnLFxuICAgICAgICBcImZpZWxkXCI6J3ByaW9yaXR5J1xuICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YVdpdGhvdXRUb2tlbihlbmRwb2ludGMsIGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gY29uc3RydWN0b3InKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnQgPXJlcy5jb3VudDtcbiAgICAgICAgY29uc29sZS53YXJuKCdibG9nRGF0YSBjJyxyZXMpO1xuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnQsZGF0YSkuc3Vic2NyaWJlKChyZXM6YW55KSA9PiB7XG4gICAgICB0aGlzLmRhdGFzb3VyY2U9cmVzLnJlc3VsdHMucmVzOyAgICAgICAgLy8gY29uc29sZS5sb2coJ2luIGNvbnN0cnVjdG9yJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIC8vIHRoaXMucGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheSA9cmVzLnJlc3VsdHMucmVzO1xuICAgICAgICAvL2NvbnNvbGUud2FybignYmxvZ0RhdGEnLHJlcyk7XG5cbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgfSk7XG5cbiAgfVxufSJdfQ==