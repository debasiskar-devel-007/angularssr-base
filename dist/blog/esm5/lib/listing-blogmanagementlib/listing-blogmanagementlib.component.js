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
            _this.datasource = res.results.res; // console.log('in constructor');
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
                    template: "<!-- <mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card> -->\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListConfig.datasource !=null\"\n\n      [datasource]=\"blogListConfig.datasource\" \n\n      [skip]=\"blogListConfig.listArray_skip\"\n\n      [modify_header_array]=\"blogListConfig.listArray_modify_header\" \n\n      [sourcedata]=\"blogListConfig.tableName\"\n\n      [statusarr]=\"blogListConfig.statusarr\" \n\n      [jwttoken]=\"blogListConfig.jwtToken\"\n\n      [apiurl]=\"blogListConfig.apiUrl\" \n\n      [editroute]=\"blogListConfig.editUrl\"\n\n      [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n\n      [date_search_source]=\"blogListConfig.view\"\n\n     [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n\n     [search_settings]=\"blogListConfig.search_settings\"\n\n     [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n\n     [sortdata]=\"sortdata\"\n\n     [datacollection]=\"blogListConfig.datacollection\"\n\n     [date_search_source_count]=\"date_search_source_count\"\n\n     [limitcond]=\"limitcond\"\n\n     [libdata]=\"libdata\"\n     \n     [detail_skip_array]=\"blogListConfig.blog_detail_skip\"\n     >\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <!-- <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2> -->\n</mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSTVDO0lBb0pFLDJDQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBN0lyQyxVQUFLLEdBQUssRUFBRSxDQUFDO1FBSWxCLFdBQU0sR0FBWSxLQUFLLENBQUM7OztRQUd6QixhQUFRLEdBQUs7WUFDWixNQUFNLEVBQUMsTUFBTTtZQUNiLE9BQU8sRUFBQyxVQUFVO1lBQ2xCLFNBQVMsRUFBQyxDQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFVBQVUsQ0FBQztTQUMzRCxDQUFDOzs7UUFHRiw2QkFBd0IsR0FBTSxDQUFDLENBQUM7O1FBRWhDLGNBQVMsR0FBSztZQUNaLE9BQU8sRUFBQyxFQUFFO1lBQ1YsTUFBTSxFQUFDLENBQUM7WUFDUixXQUFXLEVBQUMsQ0FBQztTQUNkLENBQUM7UUFPSyxhQUFRLEdBQUssRUFBRSxDQUFDO1FBQ2hCLFlBQU8sR0FBSyxFQUFFLENBQUM7O1FBMkVwQixZQUFPLEdBQUs7WUFDVixhQUFhLEVBQUMsRUFBRTtZQUNoQixjQUFjLEVBQUMscUJBQXFCO1lBQ3BDLGNBQWMsRUFBQyxLQUFLOztZQUVwQixZQUFZLEVBQUMsQ0FBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxvQkFBb0IsQ0FBQztTQThCeEcsQ0FBQTtJQUtD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Ozs7O2dCQVJRLFVBQVU7Ozt5QkEwQ2hCLEtBQUs7O0lBcUpSLHdDQUFDO0NBQUEsQUEzTEQsSUEyTEM7U0F0TFksaUNBQWlDOzs7SUFFOUMsa0RBQW9COztJQUdsQiwyREFBb0I7O0lBQ3BCLG1EQUF3Qjs7SUFHekIscURBSUM7O0lBR0YscUVBQWdDOztJQUVoQyxzREFJRTs7SUFLRix1REFBZTs7SUFFZixxREFBdUI7O0lBQ3ZCLG9EQUFzQjs7SUFDdEIsdURBQXNCOztJQTBFcEIsb0RBbUNEOzs7OztJQUdhLHVEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcblxuLyoqIFRoaXMgaXMgdGhlIGFjdHVhbGkgbWFpbiBibG9nIHBhZ2UgKiovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5wdWJsaWMgdmFsdWU6YW55PVtdO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGJsb2dMaXN0Q29uZmlnOiBhbnk7XG4gIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIC8vIHNlbmQgYmFzaWMgc29ydCBkYXRhXG4gc29ydGRhdGE6YW55PXtcbiAgXCJ0eXBlXCI6J2Rlc2MnLFxuICBcImZpZWxkXCI6J3ByaW9yaXR5JyxcbiAgXCJvcHRpb25zXCI6WydhdXRob3InLCdibG9nY2F0ZWdvcnknLCdibG9ndGl0bGUnLCdwcmlvcml0eSddXG59O1xuLy8gZGF0YWNvbGxlY3Rpb25cbi8vIGRhdGFjb2xsZWN0aW9uOiBhbnk9J2dldGJsb2dtYW5hZ2VtZW50bGlzdGRhdGEnO1xuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50OiBhbnk9MDtcbi8vIHNlbmQgYmFzaWMgbGltaXQgZGF0YVxubGltaXRjb25kOmFueT17XG4gIFwibGltaXRcIjoxMCxcbiAgXCJza2lwXCI6MCxcbiAgXCJwYWdlY291bnRcIjoxXG59OyBcblxuXG5cblxuZGF0YXNvdXJjZTphbnk7XG5cbnB1YmxpYyB0YWdfZGF0YTphbnk9W107XG5wdWJsaWMgYXV0aHZhbDphbnk9W107XG5wdWJsaWMgd2VzaXRlc1ZhbDphbnk7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbmZvciAobGV0IGkgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UpIHtcbiAgdGhpcy52YWx1ZS5wdXNoKFxuICAgIHsgJ25hbWUnOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS5ibG9nY2F0ZWdvcnksIHZhbDogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0uYmxvZ2NhdGVnb3J5IH1cbiAgICApO1xufVxuZm9yIChsZXQgaSBpbiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSkge1xuICBmb3IgKGxldCB2YWwgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0udGFncykge1xuICAgIHRoaXMuYXV0aHZhbC5wdXNoKFxuICAgICAgeyAnbmFtZSc6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLnRhZ3NbdmFsXSwgdmFsOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS50YWdzW3ZhbF0gfVxuICAgICk7XG4gIH1cbiAgXG5cbn1cbiAgIHRoaXMud2VzaXRlc1ZhbCA9IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLndlYnNpdGU7XG4gIC8vICBjb25zb2xlLmxvZyhcIisrKysrKysrKysrKysrKysrXCIsdGhpcy53ZXNpdGVzVmFsKTtcbiAgICB0aGlzLmJsb2dMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGVuZHBvaW50IDpyZWNlaXZlZERhdGEuZW5kcG9pbnQsXG4gICAgICBlbmRwb2ludGM6cmVjZWl2ZWREYXRhLmVuZHBvaW50YyxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgZGF0YWNvbGxlY3Rpb246cmVjZWl2ZWREYXRhLmRhdGFjb2xsZWN0aW9uLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJ1cGRhdGVkX2F0XCIsIFwiaW1hZ2VcIiwgXCJtZXRhdGl0bGVcIiwgXCJtZXRhZGVzY1wiLCBcImRlc2NyaXB0aW9uXCIsIFwiY3JlZGVudGlhbHNcIiwgXCJibG9nc19maWxlXCIsIFwiYmxvZ3NfaW1hZ2VcIixcImJsb2d0aXRsZV9zZWFyY2hcIixcImF1dGhvcl9zZWFyY2hcIixcInZpZGVvXCIsXCJibG9nY2F0XCIsXCJwcm9maWxlX3BpY3R1cmVcIixcInRhZ3NlYXJjaFwiLFwiZmVhdHVyZWRcIixcIm1hc2tibG9nMVwiLFwibWFza2Jsb2cyXCIsXCJtYXNrYmxvZzNcIixcInRhZ3Nfc2VhcmNoXCIsXCJ3ZWJzaXRlXCJdLFxuICAgICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHtcbiAgICAgICAgXCJibG9ndGl0bGVcIjogXCJCbG9nIFRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLFwiZGF0ZSBhZGRlZFwiOlwiRGF0ZVwiLFwicHJvZmlsZSBwaWN0dXJlXCI6XCJQcm9maWxlIFBpY3R1cmVcIixcInRhZ3NcIjpcIlRhZ3NcIixcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIsIFwicGFyZW50Y2F0ZWdvcnluYW1lXCI6IFwiUGFyZW50IENhdGVnb3J5IE5hbWVcIixcbiAgICAgICAgXCJhdXRob3JcIjogXCJBdXRob3JcIixcImJsb2djYXRcIjpcIkJsb2cgQ2F0ZWdvcnlcIixcImRhdGVcIjpcIkRhdGVcIixcImJsb2djYXRlZ29yeVwiOlwiQmxvZyBDYXRlZ29yeVwiLFxuICAgICAgICBcImZlYXR1cmVkIHNlYXJjaFwiOlwiRmVhdHVyZWRcIixcImNyZWF0ZWRvbiBkYXRldGltZVwiOlwiRGF0ZVwiLFwiY3JlYXRlZG9uX2RhdGV0aW1lXCI6XCJEYXRlXCIsXCJmZWF0dXJlZFwiOlwiRmVhdHVyZWRcIlxuICAgICAgfSxcbiAgICAgIGJsb2dfZGV0YWlsX3NraXA6WydfaWQnLCdwYXNzd29yZCcsJ3VwZGF0ZWRfYXQnLCdpZCcsXCJkZXNjcmlwdGlvbl9odG1sXCIsXCJibG9nY2F0XCIsXCJjcmVhdGVkX2F0XCIsXCJwcm9maWxlX3BpY3R1cmVcIixcInRhZ3NlYXJjaFwiLFwibWFza2Jsb2cxXCIsXCJtYXNrYmxvZzJcIixcIm1hc2tibG9nM1wiLFwidGFnc19zZWFyY2hcIl0sXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgICAvLyB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxuICAgICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcbiAgICAgIHNlYXJjaF9zZXR0aW5nczoge1xuXG4gICAgICAgIGRhdGVzZWFyY2g6W3tzdGFydGRhdGVsYWJlbDpcIlN0YXJ0IERhdGVcIixlbmRkYXRlbGFiZWw6XCJFbmQgRGF0ZVwiLHN1Ym1pdDpcIlNlYXJjaFwiLCAgZmllbGQ6XCJjcmVhdGVkb25fZGF0ZXRpbWVcIn1dLCAgIC8vIHRoaXMgaXMgdXNlIGZvciAgZGF0ZSBzZWFyY2ggLy9jcmVhdGVkIGF0ID0gZmllbGQgaW4gcmVzIHdoaWNoIGdpdmVzIGRhdGUgaW4gdW5peCBmb3JtYXQgdGhhdCBjaGFuZ2VzIHRvIGlzdCB1c2luZyBtb21lbnQuanNcblxuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggQnkgQmxvZyBUaXRsZVwiLCBmaWVsZDogJ2Jsb2d0aXRsZScgfSx7IGxhYmVsOiBcIlNlYXJjaCBCeSBBdXRob3JcIiwgZmllbGQ6ICdhdXRob3InIH1dLFxuXG4gICAgICAgIHNlbGVjdHNlYXJjaDogW1xuICAgICAgICAgIFxuICAgICAgICAgIHsgbGFiZWw6ICdTdGF0dXMnLCBmaWVsZDogJ3N0YXR1cycsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dXG4gICAgICAgIH0sXG4gICAgICAgICAgLy8gLHtsYWJlbDpcIlNlYXJjaCBCeSBCbG9nIENhdGVnb3J5XCIsZmllbGQ6J2Jsb2djYXRlZ29yeScsdmFsdWVzOnRoaXMudmFsdWV9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2VhcmNoIEJ5IEJsb2cgRmVhdHVyZWQnLCBmaWVsZDogJ2ZlYXR1cmVkJywgdmFsdWVzOiBbeyB2YWw6IDEsIG5hbWU6IFwiWWVzXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdObycgfV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIGxhYmVsOiAnU2VhcmNoIEJ5IEJsb2cgV2Vic2l0ZScsIGZpZWxkOiAnd2Vic2l0ZScsIHZhbHVlczogW3sgdmFsOiBcIk1hc2sgQmxvZyAxXCIsIG5hbWU6IFwiTWFzayBCbG9nIDFcIiB9LCB7IHZhbDogXCJNYXNrIEJsb2cgMlwiLCBuYW1lOiAnTWFzayBCbG9nIDInIH0se3ZhbDpcIk1hc2sgQmxvZyAzXCIsbmFtZTpcIk1hc2sgQmxvZyAzXCJ9XVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gc2VhcmNoOlt7bGFiZWw6XCJTZWFyY2ggQnkgVGFnc1wiLGZpZWxkOid0YWdzX3NlYXJjaCcsdmFsdWVzOnRoaXMuYXV0aHZhbH1dXG5cbiAgICAgIH0sXG4gICAgICAvLyAgLypTaG93aW5nIEltYWdlIGluIHRoZSBNb2RhbCovXG4gICAgICAvLyAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFt7XG4gICAgICAvLyAgIGtleTogXCJpbWFnZVwiLFxuICAgICAgLy8gICB2YWx1ZTogJ2ltYWdlJyxcbiAgICAgIC8vICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZXN0aW1vbmlhbC8nICAgICAgICAgICAgIC8vIEltYWdlIHBhdGggXG4gICAgICAvLyB9XSxcbiAgICB9XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGxpYmRhdGE6YW55PXtcbiAgICBiYXNlY29uZGl0aW9uOicnLFxuICAgIHVwZGF0ZWVuZHBvaW50OidzdGF0dXN1cGRhdGVmb3JibG9nJyxcbiAgICBoaWRlZWRpdGJ1dHRvbjpmYWxzZSwvLyBhbGwgdGhlc2UgYnV0dG9uIG9wdGlvbnMgYXJlIG9wdGlvbmFsIG5vdCBtYW5kYXRvcnlcbiAgICBcbiAgICB0YWJsZWhlYWRlcnM6WydibG9ndGl0bGUnLCdkZXNjcmlwdGlvbicsJ2F1dGhvcicsJ3ByaW9yaXR5Jywnc3RhdHVzJywnZmVhdHVyZWQnLCdjcmVhdGVkb25fZGF0ZXRpbWUnXSwgLy9ub3QgcmVxdWlyZWRcbiAgICAvLyBjdXN0b21idXR0b25zOltcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgbGFiZWw6XCJQcmV2aWV3IEJsb2cgMVwiLFxuICAgIC8vICAgICAgICAgbGluazpcImh0dHBzOi8vbWFzay1ibG9nMS5pbmZsdXhpcS5jb20vYmxvZy1kZXRhaWxzXCIsXG4gICAgLy8gICAgICAgICB0eXBlOidleHRlcm5hbGxpbmsnLFxuICAgIC8vICAgICAgICAgcGFyYW10eXBlOidhbmd1bGFyJyxcbiAgICAvLyAgICAgICAgIHBhcmFtOlsnYmxvZ3RpdGxlJywnX2lkJ10sXG4gICAgLy8gICAgICAgICBjb25kOidtYXNrYmxvZzEnLFxuICAgIC8vICAgICAgICAgY29uZHZhbDogMVxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgbGFiZWw6XCJQcmV2aWV3IEJsb2cgMlwiLFxuICAgIC8vICAgICAgIGxpbms6XCJodHRwczovL21hc2stYmxvZzIuaW5mbHV4aXEuY29tL2Jsb2ctZGV0YWlsc1wiLFxuICAgIC8vICAgICAgIHR5cGU6J2V4dGVybmFsbGluaycsXG4gICAgLy8gICAgICAgcGFyYW10eXBlOidhbmd1bGFyJyxcbiAgICAvLyAgICAgICBwYXJhbTpbJ2Jsb2d0aXRsZScsJ19pZCddLFxuICAgIC8vICAgICAgIGNvbmQ6J21hc2tibG9nMicsXG4gICAgLy8gICAgICAgY29uZHZhbDogMVxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgbGFiZWw6XCJQcmV2aWV3IEJsb2cgM1wiLFxuICAgIC8vICAgICBsaW5rOlwiaHR0cHM6Ly9tYXNrLWJsb2czLmluZmx1eGlxLmNvbS9ibG9nLWRldGFpbHNcIixcbiAgICAvLyAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJyxcbiAgICAvLyAgICAgcGFyYW10eXBlOidhbmd1bGFyJyxcbiAgICAvLyAgICAgcGFyYW06WydibG9ndGl0bGUnLCdfaWQnXSxcbiAgICAvLyAgICAgY29uZDonbWFza2Jsb2czJyxcbiAgICAvLyAgICAgY29uZHZhbDogMVxuICAgIC8vIH1cbiAgICAvLyBdXG59XG4gIFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSkge1xuICAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgZW5kcG9pbnQ9dGhpcy5ibG9nTGlzdENvbmZpZy5lbmRwb2ludDtcbiAgICBsZXQgZW5kcG9pbnRjPXRoaXMuYmxvZ0xpc3RDb25maWcuZW5kcG9pbnRjO1xuICAgIGxldCBkYXRhOmFueT17XG4gICAgICAgIFwiY29uZGl0aW9uXCI6e1xuICAgICAgICAgICAgXCJsaW1pdFwiOjEwLFxuICAgICAgICAgICAgXCJza2lwXCI6MFxuICAgICAgICB9LFxuICAgIHNvcnQ6e1xuICAgICAgICBcInR5cGVcIjonZGVzYycsXG4gICAgICAgIFwiZmllbGRcIjoncHJpb3JpdHknXG4gICAgfVxuXG4gICAgfVxuICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhV2l0aG91dFRva2VuKGVuZHBvaW50YywgZGF0YSkuc3Vic2NyaWJlKChyZXM6YW55KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBjb25zdHJ1Y3RvcicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudCA9cmVzLmNvdW50O1xuICAgICAgICBjb25zb2xlLndhcm4oJ2Jsb2dEYXRhIGMnLHJlcyk7XG5cbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YVdpdGhvdXRUb2tlbihlbmRwb2ludCxkYXRhKS5zdWJzY3JpYmUoKHJlczphbnkpID0+IHtcbiAgICAgIHRoaXMuZGF0YXNvdXJjZT1yZXMucmVzdWx0cy5yZXM7ICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gY29uc3RydWN0b3InKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgLy8gdGhpcy5wZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5ID1yZXMucmVzdWx0cy5yZXM7XG4gICAgICAgIC8vY29uc29sZS53YXJuKCdibG9nRGF0YScscmVzKTtcblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICB9KTtcblxuICB9XG59Il19