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
        this.category_names = [];
        this.loader = false;
        // ======================================================================================
        // send basic sort data
        this.sortdata = {
            "type": 'desc',
            "field": 'priority',
            "options": ['author', 'blogcategory', 'blogtitle', 'priority', 'createdon_datetime']
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
            hideviewbutton: true,
            updateendpointmany: 'blogupdate',
            deleteendpointmany: 'blogdelete',
            detailview_override: [
                { key: "blogtitle", val: "Blog Title :" },
                { key: "description", val: "Description :" },
                { key: "priority", val: "Priority :" },
                { key: "status", val: "Status :" },
                { key: "tagsearch", val: "Tags :" },
                { key: "createdon_datetime", val: "Added on :" },
                { key: "blogcategory", val: "Category Name :" },
                { key: 'author', val: 'Author :' },
                // {key:'image',val:'Image'},
                // {key:'video',val:'Video'},
                { key: 'video_title', val: 'Video Title :' },
                { key: 'featured_search', val: 'Featured :' },
                { key: 'video_description', val: 'Video Description :' },
                { key: 'image_array', val: 'Images :' },
                { key: 'video_array', val: 'Videos :' },
                { key: 'img_array', val: 'Images :' },
                { key: 'vd_array', val: 'Videos' }
            ],
            // optional
            tableheaders: ['blogtitle', 'description_html', 'author', 'blogcategory', 'tags', 'priority', 'status', 'createdon_datetime', 'video', 'image'],
            //not required
            custombuttons: [
                //     {
                //       label:"Videos",
                //       type:'action',
                //       datatype:'local',
                //       datafields:['vd_array'],
                //       // cond:'video',
                //       // condval:''
                //   },
                //   {
                //     label:"Images",
                //     type:'action',
                //     datatype:'local',
                //     datafields:['img_array'],
                //     // cond:'image',
                //     // condval:''
                // } ,
                {
                    label: "Videos",
                    type: 'action',
                    datatype: 'local',
                    datafields: ['vd_array'],
                    cond: 'video_array_field',
                    condval: 1
                },
                {
                    label: "Images",
                    type: 'action',
                    datatype: 'local',
                    datafields: ['img_array'],
                    cond: 'image_array_field',
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
                this.value.push(receivedData.datasource[i].blogcategory);
            }
            for (var i in receivedData.datasource) {
                for (var val in receivedData.datasource[i].tags) {
                    this.authval.push({ 'name': receivedData.datasource[i].tags[val], val: receivedData.datasource[i].tags[val] });
                }
            }
            // console.log(this.value,'>>>')
            /** @type {?} */
            var arr = this.value;
            // console.log(arr)
            /** @type {?} */
            var filteredArray = arr.filter((/**
             * @param {?} item
             * @param {?} pos
             * @return {?}
             */
            function (item, pos) {
                return arr.indexOf(item) == pos;
            }));
            // this.category_name = [];
            for (var key in filteredArray) {
                // console.log(filteredArray[key])
                this.category_names.push({ name: filteredArray[key], val: filteredArray[key] });
            }
            // console.log(this.category_names,'++>>>')
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
                listArray_skip: ["_id", "userId", "created_at", "updated_at", "metatitle", "metadesc", "credentials", "blogs_file", "blogtitle_search", "author_search", "video", "blogcat", "profile_picture", "tagsearch", "featured", "maskblog1", "maskblog2", "maskblog3", "tags_search", "website", 'description'],
                listArray_modify_header: {
                    "blogtitle": "Blog Title", "date added": "Date", "profile picture": "Profile Picture", "tags": "Tags",
                    "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name",
                    "author": "Author", "blogcat": "Blog Category", "date": "Date", "blogcategory": "Blog Category",
                    "featured search": "Featured", "createdon_datetime": "Added On", "featured": "Featured",
                    "description": "Blog Description", 'video': 'Video', 'image': 'Image', 'description_html': 'Blog Description'
                },
                blog_detail_skip: ['_id', 'password', 'updated_at', 'id', "blogcat", "created_at", "profile_picture", "tags", 'vd_array', 'img_array', 'image', 'video', 'image_array_field', 'video_array_field', 'blog_videos', 'status', 'featured', 'Vd_array', 'vd array', 'vd_array', 'Featured'],
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
                        { label: "Search By Category Name", field: 'blogcategory', values: this.category_names },
                    ],
                    search: [{ label: "Search By Tags", field: 'tags', values: this.authval }]
                },
                //  /*Showing Image in the Modal*/
                pendingmodelapplicationarray_detail_datatype: [
                //    {
                //   key: "image",
                //   value: 'image',
                //   fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/blogs/'             // Image path 
                // }
                ],
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
            // console.warn('blogData c',res);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            // console.log('Oooops!');
        }));
        // this.apiService.getDataWithoutToken(endpoint,data).subscribe((res:any) => {
        //   this.datasource=res.results.res;        // console.log('in constructor');
        //     // console.log(result);
        //     // this.pendingmodelapplicationarray =res.results.res;
        //     //console.warn('blogData',res);
        // }, error => {
        //     console.log('Oooops!');
        // });
    };
    ListingBlogmanagementlibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-blogmanagementlib',
                    template: "<!-- <mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card> -->\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListConfig.datasource !=null\"\n\n      [datasource]=\"blogListConfig.datasource\" \n\n      [skip]=\"blogListConfig.listArray_skip\"\n\n      [modify_header_array]=\"blogListConfig.listArray_modify_header\" \n\n      [sourcedata]=\"blogListConfig.tableName\"\n\n      [statusarr]=\"blogListConfig.statusarr\" \n\n      [jwttoken]=\"blogListConfig.jwtToken\"\n\n      [apiurl]=\"blogListConfig.apiUrl\" \n\n      [editroute]=\"blogListConfig.editUrl\"\n\n      [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n\n      [date_search_source]=\"blogListConfig.view\"\n\n     [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n\n     [search_settings]=\"blogListConfig.search_settings\"\n\n     [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n\n     [sortdata]=\"sortdata\"\n\n     [datacollection]=\"blogListConfig.datacollection\"\n\n     [date_search_source_count]=\"date_search_source_count\"\n\n     [limitcond]=\"limitcond\"\n\n     [libdata]=\"libdata\"\n     \n     [detail_skip_array]=\"blogListConfig.blog_detail_skip\"\n     >\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <!-- <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2> -->\n</mat-card>",
                    styles: ["body{display:none!important}.formfilterdiv .mat-dialog-content .mat-card{flex-wrap:wrap}.formfilterdiv .mat-card-header{flex:1 1 100%}.formfilterdiv #dialogdatavd_array p{position:relative;padding-bottom:56.25%;height:0;overflow-y:scroll}.formfilterdiv #dialogdatavd_array p iframe{position:absolute;top:0;left:0;width:100%;height:100%}"]
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
    ListingBlogmanagementlibComponent.prototype.category_names;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSTVDO0lBdU1FLDJDQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBaE1yQyxVQUFLLEdBQUssRUFBRSxDQUFDO1FBQ2IsbUJBQWMsR0FBSyxFQUFFLENBQUM7UUFJM0IsV0FBTSxHQUFZLEtBQUssQ0FBQzs7O1FBR3pCLGFBQVEsR0FBSztZQUNaLE1BQU0sRUFBQyxNQUFNO1lBQ2IsT0FBTyxFQUFDLFVBQVU7WUFDbEIsU0FBUyxFQUFDLENBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLG9CQUFvQixDQUFDO1NBQ2hGLENBQUM7OztRQUdGLDZCQUF3QixHQUFNLENBQUMsQ0FBQzs7UUFFaEMsY0FBUyxHQUFLO1lBQ1osT0FBTyxFQUFDLEVBQUU7WUFDVixNQUFNLEVBQUMsQ0FBQztZQUNSLFdBQVcsRUFBQyxDQUFDO1NBQ2QsQ0FBQztRQU9LLGFBQVEsR0FBSyxFQUFFLENBQUM7UUFDaEIsWUFBTyxHQUFLLEVBQUUsQ0FBQzs7UUE0RnBCLFlBQU8sR0FBSztZQUNWLGFBQWEsRUFBQyxFQUFFO1lBQ2hCLGNBQWMsRUFBQyxxQkFBcUI7WUFDcEMsY0FBYyxFQUFDLEtBQUs7O1lBQ3BCLGNBQWMsRUFBQyxJQUFJO1lBQ25CLGtCQUFrQixFQUFFLFlBQVk7WUFDaEMsa0JBQWtCLEVBQUUsWUFBWTtZQUVo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LHdDQUFDO0NBQUEsQUE5T0QsSUE4T0M7U0F6T1ksaUNBQWlDOzs7SUFFOUMsa0RBQW9COztJQUNwQiwyREFBNkI7O0lBRzNCLDJEQUFvQjs7SUFDcEIsbURBQXdCOztJQUd6QixxREFJQzs7SUFHRixxRUFBZ0M7O0lBRWhDLHNEQUlFOztJQUtGLHVEQUFlOztJQUVmLHFEQUF1Qjs7SUFDdkIsb0RBQXNCOztJQUN0Qix1REFBc0I7O0lBMkZwQixvREFvRUQ7Ozs7O0lBR2EsdURBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuXG4vKiogVGhpcyBpcyB0aGUgYWN0dWFsaSBtYWluIGJsb2cgcGFnZSAqKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWInLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RpbmdCbG9nbWFuYWdlbWVudGxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbnB1YmxpYyB2YWx1ZTphbnk9W107XG5wdWJsaWMgY2F0ZWdvcnlfbmFtZXM6YW55PVtdO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGJsb2dMaXN0Q29uZmlnOiBhbnk7XG4gIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIC8vIHNlbmQgYmFzaWMgc29ydCBkYXRhXG4gc29ydGRhdGE6YW55PXtcbiAgXCJ0eXBlXCI6J2Rlc2MnLFxuICBcImZpZWxkXCI6J3ByaW9yaXR5JyxcbiAgXCJvcHRpb25zXCI6WydhdXRob3InLCdibG9nY2F0ZWdvcnknLCdibG9ndGl0bGUnLCdwcmlvcml0eScsJ2NyZWF0ZWRvbl9kYXRldGltZSddXG59O1xuLy8gZGF0YWNvbGxlY3Rpb25cbi8vIGRhdGFjb2xsZWN0aW9uOiBhbnk9J2dldGJsb2dtYW5hZ2VtZW50bGlzdGRhdGEnO1xuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50OiBhbnk9MDtcbi8vIHNlbmQgYmFzaWMgbGltaXQgZGF0YVxubGltaXRjb25kOmFueT17XG4gIFwibGltaXRcIjoxMCxcbiAgXCJza2lwXCI6MCxcbiAgXCJwYWdlY291bnRcIjoxXG59OyBcblxuXG5cblxuZGF0YXNvdXJjZTphbnk7XG5cbnB1YmxpYyB0YWdfZGF0YTphbnk9W107XG5wdWJsaWMgYXV0aHZhbDphbnk9W107XG5wdWJsaWMgd2VzaXRlc1ZhbDphbnk7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbmZvciAobGV0IGkgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UpIHtcbiAgdGhpcy52YWx1ZS5wdXNoKHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLmJsb2djYXRlZ29yeSk7XG59XG5mb3IgKGxldCBpIGluIHJlY2VpdmVkRGF0YS5kYXRhc291cmNlKSB7XG4gIGZvciAobGV0IHZhbCBpbiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS50YWdzKSB7XG4gICAgdGhpcy5hdXRodmFsLnB1c2goXG4gICAgICB7ICduYW1lJzogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0udGFnc1t2YWxdLCB2YWw6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLnRhZ3NbdmFsXSB9XG4gICAgKTtcbiAgfVxuICBcblxufVxuXG4vLyBjb25zb2xlLmxvZyh0aGlzLnZhbHVlLCc+Pj4nKVxuXG4gIGNvbnN0IGFyciA9IHRoaXMudmFsdWU7XG4gIC8vIGNvbnNvbGUubG9nKGFycilcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IGFyci5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgcG9zKSB7XG4gICAgcmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pID09IHBvcztcbiAgfSk7XG4gIC8vIHRoaXMuY2F0ZWdvcnlfbmFtZSA9IFtdO1xuICBmb3IgKGNvbnN0IGtleSBpbiBmaWx0ZXJlZEFycmF5KSB7XG4gICAgLy8gY29uc29sZS5sb2coZmlsdGVyZWRBcnJheVtrZXldKVxuICAgIHRoaXMuY2F0ZWdvcnlfbmFtZXMucHVzaCh7IG5hbWU6IGZpbHRlcmVkQXJyYXlba2V5XSwgdmFsOiBmaWx0ZXJlZEFycmF5W2tleV0gfSk7XG4gIH1cbiAgLy8gY29uc29sZS5sb2codGhpcy5jYXRlZ29yeV9uYW1lcywnKys+Pj4nKVxuXG5cbiAgIHRoaXMud2VzaXRlc1ZhbCA9IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLndlYnNpdGU7XG4gIC8vICBjb25zb2xlLmxvZyhcIisrKysrKysrKysrKysrKysrXCIsdGhpcy53ZXNpdGVzVmFsKTtcbiAgICB0aGlzLmJsb2dMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGVuZHBvaW50IDpyZWNlaXZlZERhdGEuZW5kcG9pbnQsXG4gICAgICBlbmRwb2ludGM6cmVjZWl2ZWREYXRhLmVuZHBvaW50YyxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgZGF0YWNvbGxlY3Rpb246cmVjZWl2ZWREYXRhLmRhdGFjb2xsZWN0aW9uLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJ1cGRhdGVkX2F0XCIsIFwibWV0YXRpdGxlXCIsIFwibWV0YWRlc2NcIiwgXCJjcmVkZW50aWFsc1wiLCBcImJsb2dzX2ZpbGVcIixcImJsb2d0aXRsZV9zZWFyY2hcIixcImF1dGhvcl9zZWFyY2hcIixcInZpZGVvXCIsXCJibG9nY2F0XCIsXCJwcm9maWxlX3BpY3R1cmVcIixcInRhZ3NlYXJjaFwiLFwiZmVhdHVyZWRcIixcIm1hc2tibG9nMVwiLFwibWFza2Jsb2cyXCIsXCJtYXNrYmxvZzNcIixcInRhZ3Nfc2VhcmNoXCIsXCJ3ZWJzaXRlXCIsJ2Rlc2NyaXB0aW9uJ10sXG4gICAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjoge1xuICAgICAgICBcImJsb2d0aXRsZVwiOiBcIkJsb2cgVGl0bGVcIixcImRhdGUgYWRkZWRcIjpcIkRhdGVcIixcInByb2ZpbGUgcGljdHVyZVwiOlwiUHJvZmlsZSBQaWN0dXJlXCIsXCJ0YWdzXCI6XCJUYWdzXCIsXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJQcmlvcml0eVwiLCBcInN0YXR1c1wiOiBcIlN0YXR1c1wiLCBcInBhcmVudGNhdGVnb3J5bmFtZVwiOiBcIlBhcmVudCBDYXRlZ29yeSBOYW1lXCIsXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiQXV0aG9yXCIsXCJibG9nY2F0XCI6XCJCbG9nIENhdGVnb3J5XCIsXCJkYXRlXCI6XCJEYXRlXCIsXCJibG9nY2F0ZWdvcnlcIjpcIkJsb2cgQ2F0ZWdvcnlcIixcbiAgICAgICAgXCJmZWF0dXJlZCBzZWFyY2hcIjpcIkZlYXR1cmVkXCIsXCJjcmVhdGVkb25fZGF0ZXRpbWVcIjpcIkFkZGVkIE9uXCIsXCJmZWF0dXJlZFwiOlwiRmVhdHVyZWRcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJsb2cgRGVzY3JpcHRpb25cIiwndmlkZW8nOidWaWRlbycsJ2ltYWdlJzonSW1hZ2UnLCdkZXNjcmlwdGlvbl9odG1sJzonQmxvZyBEZXNjcmlwdGlvbidcbiAgICAgIH0sXG4gICAgICBibG9nX2RldGFpbF9za2lwOlsnX2lkJywncGFzc3dvcmQnLCd1cGRhdGVkX2F0JywnaWQnLFwiYmxvZ2NhdFwiLFwiY3JlYXRlZF9hdFwiLFwicHJvZmlsZV9waWN0dXJlXCIsXCJ0YWdzXCIsJ3ZkX2FycmF5JywnaW1nX2FycmF5JywnaW1hZ2UnLCd2aWRlbycsJ2ltYWdlX2FycmF5X2ZpZWxkJywndmlkZW9fYXJyYXlfZmllbGQnLCdibG9nX3ZpZGVvcycsJ3N0YXR1cycsJ2ZlYXR1cmVkJywnVmRfYXJyYXknLCd2ZCBhcnJheScsJ3ZkX2FycmF5JywnRmVhdHVyZWQnXSxcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICAgIC8vIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxuICAgICAgc2VhcmNoX3NldHRpbmdzOiB7XG5cbiAgICAgICAgZGF0ZXNlYXJjaDpbe3N0YXJ0ZGF0ZWxhYmVsOlwiU3RhcnQgRGF0ZVwiLGVuZGRhdGVsYWJlbDpcIkVuZCBEYXRlXCIsc3VibWl0OlwiU2VhcmNoXCIsICBmaWVsZDpcImNyZWF0ZWRvbl9kYXRldGltZVwifV0sICAgLy8gdGhpcyBpcyB1c2UgZm9yICBkYXRlIHNlYXJjaCAvL2NyZWF0ZWQgYXQgPSBmaWVsZCBpbiByZXMgd2hpY2ggZ2l2ZXMgZGF0ZSBpbiB1bml4IGZvcm1hdCB0aGF0IGNoYW5nZXMgdG8gaXN0IHVzaW5nIG1vbWVudC5qc1xuXG4gICAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBCeSBCbG9nIFRpdGxlXCIsIGZpZWxkOiAnYmxvZ3RpdGxlJyB9LHsgbGFiZWw6IFwiU2VhcmNoIEJ5IEF1dGhvclwiLCBmaWVsZDogJ2F1dGhvcicgfV0sXG5cbiAgICAgICAgc2VsZWN0c2VhcmNoOiBbXG4gICAgICAgICAgXG4gICAgICAgICAgeyBsYWJlbDogJ1N0YXR1cycsIGZpZWxkOiAnc3RhdHVzJywgdmFsdWVzOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV1cbiAgICAgICAgfSxcbiAgICAgICAgICB7bGFiZWw6XCJTZWFyY2ggQnkgQ2F0ZWdvcnkgTmFtZVwiLGZpZWxkOidibG9nY2F0ZWdvcnknLHZhbHVlczp0aGlzLmNhdGVnb3J5X25hbWVzfSxcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBsYWJlbDogJ1NlYXJjaCBCeSBCbG9nIEZlYXR1cmVkJywgZmllbGQ6ICdmZWF0dXJlZCcsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIlllc1wiIH0sIHsgdmFsOiAwLCBuYW1lOiAnTm8nIH1dXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBsYWJlbDogJ1NlYXJjaCBCeSBCbG9nIFdlYnNpdGUnLCBmaWVsZDogJ3dlYnNpdGUnLCB2YWx1ZXM6IFt7IHZhbDogXCJNYXNrIEJsb2cgMVwiLCBuYW1lOiBcIk1hc2sgQmxvZyAxXCIgfSwgeyB2YWw6IFwiTWFzayBCbG9nIDJcIiwgbmFtZTogJ01hc2sgQmxvZyAyJyB9LHt2YWw6XCJNYXNrIEJsb2cgM1wiLG5hbWU6XCJNYXNrIEJsb2cgM1wifV1cbiAgICAgICAgICAvLyB9XG4gICAgICAgIF0sXG4gICAgICAgIHNlYXJjaDpbe2xhYmVsOlwiU2VhcmNoIEJ5IFRhZ3NcIixmaWVsZDondGFncycsdmFsdWVzOnRoaXMuYXV0aHZhbH1dXG5cbiAgICAgIH0sXG4gICAgICAvLyAgLypTaG93aW5nIEltYWdlIGluIHRoZSBNb2RhbCovXG4gICAgICAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFtcbiAgICAgIC8vICAgIHtcbiAgICAgIC8vICAga2V5OiBcImltYWdlXCIsXG4gICAgICAvLyAgIHZhbHVlOiAnaW1hZ2UnLFxuICAgICAgLy8gICBmaWxldXJsOiAnaHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9jcm1maWxlcy5pbmZsdXhob3N0c2VydmVyL2Jsb2dzLycgICAgICAgICAgICAgLy8gSW1hZ2UgcGF0aCBcbiAgICAgIC8vIH1cbiAgICBdLFxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgbGliZGF0YTphbnk9e1xuICAgIGJhc2Vjb25kaXRpb246JycsXG4gICAgdXBkYXRlZW5kcG9pbnQ6J3N0YXR1c3VwZGF0ZWZvcmJsb2cnLFxuICAgIGhpZGVlZGl0YnV0dG9uOmZhbHNlLC8vIGFsbCB0aGVzZSBidXR0b24gb3B0aW9ucyBhcmUgb3B0aW9uYWwgbm90IG1hbmRhdG9yeVxuICAgIGhpZGV2aWV3YnV0dG9uOnRydWUsXG4gICAgdXBkYXRlZW5kcG9pbnRtYW55OiAnYmxvZ3VwZGF0ZScsXG4gICAgZGVsZXRlZW5kcG9pbnRtYW55OiAnYmxvZ2RlbGV0ZScsXG5cbiAgICBkZXRhaWx2aWV3X292ZXJyaWRlOltcbiAgICAgIHtrZXk6XCJibG9ndGl0bGVcIix2YWw6XCJCbG9nIFRpdGxlIDpcIn0sXG4gICAgICB7a2V5OlwiZGVzY3JpcHRpb25cIix2YWw6XCJEZXNjcmlwdGlvbiA6XCJ9LFxuICAgICAge2tleTpcInByaW9yaXR5XCIsdmFsOlwiUHJpb3JpdHkgOlwifSxcbiAgICAgIHtrZXk6XCJzdGF0dXNcIix2YWw6XCJTdGF0dXMgOlwifSxcbiAgICAgIHtrZXk6XCJ0YWdzZWFyY2hcIix2YWw6XCJUYWdzIDpcIn0sXG4gICAgICB7a2V5OlwiY3JlYXRlZG9uX2RhdGV0aW1lXCIsdmFsOlwiQWRkZWQgb24gOlwifSxcbiAgICAgIHtrZXk6XCJibG9nY2F0ZWdvcnlcIix2YWw6XCJDYXRlZ29yeSBOYW1lIDpcIn0sXG4gICAgICB7a2V5OidhdXRob3InLHZhbDonQXV0aG9yIDonfSxcbiAgICAgIC8vIHtrZXk6J2ltYWdlJyx2YWw6J0ltYWdlJ30sXG4gICAgICAvLyB7a2V5Oid2aWRlbycsdmFsOidWaWRlbyd9LFxuICAgICAge2tleTondmlkZW9fdGl0bGUnLHZhbDonVmlkZW8gVGl0bGUgOid9LFxuICAgICAge2tleTonZmVhdHVyZWRfc2VhcmNoJyx2YWw6J0ZlYXR1cmVkIDonfSxcbiAgICAgIHtrZXk6J3ZpZGVvX2Rlc2NyaXB0aW9uJyx2YWw6J1ZpZGVvIERlc2NyaXB0aW9uIDonfSxcbiAgICAgIHtrZXk6J2ltYWdlX2FycmF5Jyx2YWw6J0ltYWdlcyA6J30sXG4gICAgICB7a2V5Oid2aWRlb19hcnJheScsdmFsOidWaWRlb3MgOid9LFxuICAgICAge2tleTonaW1nX2FycmF5Jyx2YWw6J0ltYWdlcyA6J30sXG4gICAgICB7a2V5Oid2ZF9hcnJheScsdmFsOidWaWRlb3MnfVxuXG4gIF0sIC8vIG9wdGlvbmFsXG4gIFxuICAgIFxuICAgIHRhYmxlaGVhZGVyczpbJ2Jsb2d0aXRsZScsJ2Rlc2NyaXB0aW9uX2h0bWwnLCdhdXRob3InLCdibG9nY2F0ZWdvcnknLCd0YWdzJywncHJpb3JpdHknLCdzdGF0dXMnLCdjcmVhdGVkb25fZGF0ZXRpbWUnLCAndmlkZW8nLCdpbWFnZSddLCAvL25vdCByZXF1aXJlZFxuICAgIGN1c3RvbWJ1dHRvbnM6W1xuICAvLyAgICAge1xuICAvLyAgICAgICBsYWJlbDpcIlZpZGVvc1wiLFxuICAvLyAgICAgICB0eXBlOidhY3Rpb24nLFxuICAvLyAgICAgICBkYXRhdHlwZTonbG9jYWwnLFxuICAvLyAgICAgICBkYXRhZmllbGRzOlsndmRfYXJyYXknXSxcbiAgLy8gICAgICAgLy8gY29uZDondmlkZW8nLFxuICAvLyAgICAgICAvLyBjb25kdmFsOicnXG5cbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIGxhYmVsOlwiSW1hZ2VzXCIsXG4gIC8vICAgICB0eXBlOidhY3Rpb24nLFxuICAvLyAgICAgZGF0YXR5cGU6J2xvY2FsJyxcbiAgLy8gICAgIGRhdGFmaWVsZHM6WydpbWdfYXJyYXknXSxcbiAgLy8gICAgIC8vIGNvbmQ6J2ltYWdlJyxcbiAgLy8gICAgIC8vIGNvbmR2YWw6JydcbiAgLy8gfSAsXG4gIHtcbiAgICBsYWJlbDpcIlZpZGVvc1wiLFxuICAgIHR5cGU6J2FjdGlvbicsXG4gICAgZGF0YXR5cGU6J2xvY2FsJyxcbiAgICBkYXRhZmllbGRzOlsndmRfYXJyYXknXSxcbiAgICBjb25kOid2aWRlb19hcnJheV9maWVsZCcsXG4gICAgY29uZHZhbDoxXG5cbn0sXG57XG4gIGxhYmVsOlwiSW1hZ2VzXCIsXG4gIHR5cGU6J2FjdGlvbicsXG4gIGRhdGF0eXBlOidsb2NhbCcsXG4gIGRhdGFmaWVsZHM6WydpbWdfYXJyYXknXSxcbiAgY29uZDonaW1hZ2VfYXJyYXlfZmllbGQnLFxuICBjb25kdmFsOjFcbn0gXG5cbiAgICBdXG59IFxuICBcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcbiAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGVuZHBvaW50PXRoaXMuYmxvZ0xpc3RDb25maWcuZW5kcG9pbnQ7XG4gICAgbGV0IGVuZHBvaW50Yz10aGlzLmJsb2dMaXN0Q29uZmlnLmVuZHBvaW50YztcbiAgICBsZXQgZGF0YTphbnk9e1xuICAgICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgICAgIFwibGltaXRcIjoxMCxcbiAgICAgICAgICAgIFwic2tpcFwiOjBcbiAgICAgICAgfSxcbiAgICBzb3J0OntcbiAgICAgICAgXCJ0eXBlXCI6J2Rlc2MnLFxuICAgICAgICBcImZpZWxkXCI6J3ByaW9yaXR5J1xuICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YVdpdGhvdXRUb2tlbihlbmRwb2ludGMsIGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gY29uc3RydWN0b3InKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnQgPXJlcy5jb3VudDtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdibG9nRGF0YSBjJyxyZXMpO1xuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgIH0pO1xuXG4gICAgLy8gdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnQsZGF0YSkuc3Vic2NyaWJlKChyZXM6YW55KSA9PiB7XG4gICAgLy8gICB0aGlzLmRhdGFzb3VyY2U9cmVzLnJlc3VsdHMucmVzOyAgICAgICAgLy8gY29uc29sZS5sb2coJ2luIGNvbnN0cnVjdG9yJyk7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgLy8gICAgIC8vIHRoaXMucGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheSA9cmVzLnJlc3VsdHMucmVzO1xuICAgIC8vICAgICAvL2NvbnNvbGUud2FybignYmxvZ0RhdGEnLHJlcyk7XG5cbiAgICAvLyB9LCBlcnJvciA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgLy8gfSk7XG5cbiAgfVxufVxuXG4iXX0=