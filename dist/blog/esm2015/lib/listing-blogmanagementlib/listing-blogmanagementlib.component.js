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
    // ================================================Input For Lib Listing================================
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
        for (let i in receivedData.datasource) {
            this.value.push(receivedData.datasource[i].blogcategory);
        }
        for (let i in receivedData.datasource) {
            for (let val in receivedData.datasource[i].tags) {
                this.authval.push({ 'name': receivedData.datasource[i].tags[val], val: receivedData.datasource[i].tags[val] });
            }
        }
        // console.log(this.value,'>>>')
        /** @type {?} */
        const arr = this.value;
        // console.log(arr)
        /** @type {?} */
        const filteredArray = arr.filter((/**
         * @param {?} item
         * @param {?} pos
         * @return {?}
         */
        function (item, pos) {
            return arr.indexOf(item) == pos;
        }));
        // this.category_name = [];
        for (const key in filteredArray) {
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
            // console.warn('blogData c',res);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
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
    }
}
ListingBlogmanagementlibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-listing-blogmanagementlib',
                template: "<!-- <mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card> -->\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListConfig.datasource !=null\"\n\n      [datasource]=\"blogListConfig.datasource\" \n\n      [skip]=\"blogListConfig.listArray_skip\"\n\n      [modify_header_array]=\"blogListConfig.listArray_modify_header\" \n\n      [sourcedata]=\"blogListConfig.tableName\"\n\n      [statusarr]=\"blogListConfig.statusarr\" \n\n      [jwttoken]=\"blogListConfig.jwtToken\"\n\n      [apiurl]=\"blogListConfig.apiUrl\" \n\n      [editroute]=\"blogListConfig.editUrl\"\n\n      [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n\n      [date_search_source]=\"blogListConfig.view\"\n\n     [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n\n     [search_settings]=\"blogListConfig.search_settings\"\n\n     [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n\n     [sortdata]=\"sortdata\"\n\n     [datacollection]=\"blogListConfig.datacollection\"\n\n     [date_search_source_count]=\"date_search_source_count\"\n\n     [limitcond]=\"limitcond\"\n\n     [libdata]=\"libdata\"\n     \n     [detail_skip_array]=\"blogListConfig.blog_detail_skip\"\n     >\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <!-- <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2> -->\n</mat-card>",
                styles: ["body{display:none!important}.formfilterdiv .mat-dialog-content .mat-card{flex-wrap:wrap}.formfilterdiv .mat-card-header{flex:1 1 100%}.formfilterdiv #dialogdatavd_array p{position:relative;padding-bottom:56.25%;height:0;overflow-y:scroll}.formfilterdiv #dialogdatavd_array p iframe{position:absolute;top:0;left:0;width:100%;height:100%}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBUzVDLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7SUFrTTVDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFoTXJDLFVBQUssR0FBSyxFQUFFLENBQUM7UUFDYixtQkFBYyxHQUFLLEVBQUUsQ0FBQztRQUkzQixXQUFNLEdBQVksS0FBSyxDQUFDOzs7UUFHekIsYUFBUSxHQUFLO1lBQ1osTUFBTSxFQUFDLE1BQU07WUFDYixPQUFPLEVBQUMsVUFBVTtZQUNsQixTQUFTLEVBQUMsQ0FBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsb0JBQW9CLENBQUM7U0FDaEYsQ0FBQzs7O1FBR0YsNkJBQXdCLEdBQU0sQ0FBQyxDQUFDOztRQUVoQyxjQUFTLEdBQUs7WUFDWixPQUFPLEVBQUMsRUFBRTtZQUNWLE1BQU0sRUFBQyxDQUFDO1lBQ1IsV0FBVyxFQUFDLENBQUM7U0FDZCxDQUFDO1FBT0ssYUFBUSxHQUFLLEVBQUUsQ0FBQztRQUNoQixZQUFPLEdBQUssRUFBRSxDQUFDOztRQTRGcEIsWUFBTyxHQUFLO1lBQ1YsYUFBYSxFQUFDLEVBQUU7WUFDaEIsY0FBYyxFQUFDLHFCQUFxQjtZQUNwQyxjQUFjLEVBQUMsS0FBSzs7WUFDcEIsY0FBYyxFQUFDLElBQUk7WUFDbkIsa0JBQWtCLEVBQUUsWUFBWTtZQUNoQyxr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Qjs7SUFHekIscURBSUM7O0lBR0YscUVBQWdDOztJQUVoQyxzREFJRTs7SUFLRix1REFBZTs7SUFFZixxREFBdUI7O0lBQ3ZCLG9EQUFzQjs7SUFDdEIsdURBQXNCOztJQTJGcEIsb0RBb0VEOzs7OztJQUdhLHVEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcblxuLyoqIFRoaXMgaXMgdGhlIGFjdHVhbGkgbWFpbiBibG9nIHBhZ2UgKiovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5wdWJsaWMgdmFsdWU6YW55PVtdO1xucHVibGljIGNhdGVnb3J5X25hbWVzOmFueT1bXTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBibG9nTGlzdENvbmZpZzogYW55O1xuICBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAvLyBzZW5kIGJhc2ljIHNvcnQgZGF0YVxuIHNvcnRkYXRhOmFueT17XG4gIFwidHlwZVwiOidkZXNjJyxcbiAgXCJmaWVsZFwiOidwcmlvcml0eScsXG4gIFwib3B0aW9uc1wiOlsnYXV0aG9yJywnYmxvZ2NhdGVnb3J5JywnYmxvZ3RpdGxlJywncHJpb3JpdHknLCdjcmVhdGVkb25fZGF0ZXRpbWUnXVxufTtcbi8vIGRhdGFjb2xsZWN0aW9uXG4vLyBkYXRhY29sbGVjdGlvbjogYW55PSdnZXRibG9nbWFuYWdlbWVudGxpc3RkYXRhJztcbmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudDogYW55PTA7XG4vLyBzZW5kIGJhc2ljIGxpbWl0IGRhdGFcbmxpbWl0Y29uZDphbnk9e1xuICBcImxpbWl0XCI6MTAsXG4gIFwic2tpcFwiOjAsXG4gIFwicGFnZWNvdW50XCI6MVxufTsgXG5cblxuXG5cbmRhdGFzb3VyY2U6YW55O1xuXG5wdWJsaWMgdGFnX2RhdGE6YW55PVtdO1xucHVibGljIGF1dGh2YWw6YW55PVtdO1xucHVibGljIHdlc2l0ZXNWYWw6YW55O1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7XG5mb3IgKGxldCBpIGluIHJlY2VpdmVkRGF0YS5kYXRhc291cmNlKSB7XG4gIHRoaXMudmFsdWUucHVzaChyZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS5ibG9nY2F0ZWdvcnkpO1xufVxuZm9yIChsZXQgaSBpbiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSkge1xuICBmb3IgKGxldCB2YWwgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0udGFncykge1xuICAgIHRoaXMuYXV0aHZhbC5wdXNoKFxuICAgICAgeyAnbmFtZSc6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLnRhZ3NbdmFsXSwgdmFsOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS50YWdzW3ZhbF0gfVxuICAgICk7XG4gIH1cbiAgXG5cbn1cblxuLy8gY29uc29sZS5sb2codGhpcy52YWx1ZSwnPj4+JylcblxuICBjb25zdCBhcnIgPSB0aGlzLnZhbHVlO1xuICAvLyBjb25zb2xlLmxvZyhhcnIpXG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBhcnIuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIHBvcykge1xuICAgIHJldHVybiBhcnIuaW5kZXhPZihpdGVtKSA9PSBwb3M7XG4gIH0pO1xuICAvLyB0aGlzLmNhdGVnb3J5X25hbWUgPSBbXTtcbiAgZm9yIChjb25zdCBrZXkgaW4gZmlsdGVyZWRBcnJheSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcmVkQXJyYXlba2V5XSlcbiAgICB0aGlzLmNhdGVnb3J5X25hbWVzLnB1c2goeyBuYW1lOiBmaWx0ZXJlZEFycmF5W2tleV0sIHZhbDogZmlsdGVyZWRBcnJheVtrZXldIH0pO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKHRoaXMuY2F0ZWdvcnlfbmFtZXMsJysrPj4+JylcblxuXG4gICB0aGlzLndlc2l0ZXNWYWwgPSByZWNlaXZlZERhdGEuZGF0YXNvdXJjZS53ZWJzaXRlO1xuICAvLyAgY29uc29sZS5sb2coXCIrKysrKysrKysrKysrKysrK1wiLHRoaXMud2VzaXRlc1ZhbCk7XG4gICAgdGhpcy5ibG9nTGlzdENvbmZpZyA9IHtcbiAgICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXG4gICAgICBlbmRwb2ludCA6cmVjZWl2ZWREYXRhLmVuZHBvaW50LFxuICAgICAgZW5kcG9pbnRjOnJlY2VpdmVkRGF0YS5lbmRwb2ludGMsXG4gICAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXG4gICAgICBkYXRhc291cmNlOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSxcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWREYXRhLnRhYmxlTmFtZSxcbiAgICAgIGRhdGFjb2xsZWN0aW9uOnJlY2VpdmVkRGF0YS5kYXRhY29sbGVjdGlvbixcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwidXBkYXRlZF9hdFwiLCBcIm1ldGF0aXRsZVwiLCBcIm1ldGFkZXNjXCIsIFwiY3JlZGVudGlhbHNcIiwgXCJibG9nc19maWxlXCIsXCJibG9ndGl0bGVfc2VhcmNoXCIsXCJhdXRob3Jfc2VhcmNoXCIsXCJ2aWRlb1wiLFwiYmxvZ2NhdFwiLFwicHJvZmlsZV9waWN0dXJlXCIsXCJ0YWdzZWFyY2hcIixcImZlYXR1cmVkXCIsXCJtYXNrYmxvZzFcIixcIm1hc2tibG9nMlwiLFwibWFza2Jsb2czXCIsXCJ0YWdzX3NlYXJjaFwiLFwid2Vic2l0ZVwiLCdkZXNjcmlwdGlvbiddLFxuICAgICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHtcbiAgICAgICAgXCJibG9ndGl0bGVcIjogXCJCbG9nIFRpdGxlXCIsXCJkYXRlIGFkZGVkXCI6XCJEYXRlXCIsXCJwcm9maWxlIHBpY3R1cmVcIjpcIlByb2ZpbGUgUGljdHVyZVwiLFwidGFnc1wiOlwiVGFnc1wiLFxuICAgICAgICBcInByaW9yaXR5XCI6IFwiUHJpb3JpdHlcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiwgXCJwYXJlbnRjYXRlZ29yeW5hbWVcIjogXCJQYXJlbnQgQ2F0ZWdvcnkgTmFtZVwiLFxuICAgICAgICBcImF1dGhvclwiOiBcIkF1dGhvclwiLFwiYmxvZ2NhdFwiOlwiQmxvZyBDYXRlZ29yeVwiLFwiZGF0ZVwiOlwiRGF0ZVwiLFwiYmxvZ2NhdGVnb3J5XCI6XCJCbG9nIENhdGVnb3J5XCIsXG4gICAgICAgIFwiZmVhdHVyZWQgc2VhcmNoXCI6XCJGZWF0dXJlZFwiLFwiY3JlYXRlZG9uX2RhdGV0aW1lXCI6XCJBZGRlZCBPblwiLFwiZmVhdHVyZWRcIjpcIkZlYXR1cmVkXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCbG9nIERlc2NyaXB0aW9uXCIsJ3ZpZGVvJzonVmlkZW8nLCdpbWFnZSc6J0ltYWdlJywnZGVzY3JpcHRpb25faHRtbCc6J0Jsb2cgRGVzY3JpcHRpb24nXG4gICAgICB9LFxuICAgICAgYmxvZ19kZXRhaWxfc2tpcDpbJ19pZCcsJ3Bhc3N3b3JkJywndXBkYXRlZF9hdCcsJ2lkJyxcImJsb2djYXRcIixcImNyZWF0ZWRfYXRcIixcInByb2ZpbGVfcGljdHVyZVwiLFwidGFnc1wiLCd2ZF9hcnJheScsJ2ltZ19hcnJheScsJ2ltYWdlJywndmlkZW8nLCdpbWFnZV9hcnJheV9maWVsZCcsJ3ZpZGVvX2FycmF5X2ZpZWxkJywnYmxvZ192aWRlb3MnLCdzdGF0dXMnLCdmZWF0dXJlZCcsJ1ZkX2FycmF5JywndmQgYXJyYXknLCd2ZF9hcnJheScsJ0ZlYXR1cmVkJ10sXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgICAvLyB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxuICAgICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcbiAgICAgIHNlYXJjaF9zZXR0aW5nczoge1xuXG4gICAgICAgIGRhdGVzZWFyY2g6W3tzdGFydGRhdGVsYWJlbDpcIlN0YXJ0IERhdGVcIixlbmRkYXRlbGFiZWw6XCJFbmQgRGF0ZVwiLHN1Ym1pdDpcIlNlYXJjaFwiLCAgZmllbGQ6XCJjcmVhdGVkb25fZGF0ZXRpbWVcIn1dLCAgIC8vIHRoaXMgaXMgdXNlIGZvciAgZGF0ZSBzZWFyY2ggLy9jcmVhdGVkIGF0ID0gZmllbGQgaW4gcmVzIHdoaWNoIGdpdmVzIGRhdGUgaW4gdW5peCBmb3JtYXQgdGhhdCBjaGFuZ2VzIHRvIGlzdCB1c2luZyBtb21lbnQuanNcblxuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggQnkgQmxvZyBUaXRsZVwiLCBmaWVsZDogJ2Jsb2d0aXRsZScgfSx7IGxhYmVsOiBcIlNlYXJjaCBCeSBBdXRob3JcIiwgZmllbGQ6ICdhdXRob3InIH1dLFxuXG4gICAgICAgIHNlbGVjdHNlYXJjaDogW1xuICAgICAgICAgIFxuICAgICAgICAgIHsgbGFiZWw6ICdTdGF0dXMnLCBmaWVsZDogJ3N0YXR1cycsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dXG4gICAgICAgIH0sXG4gICAgICAgICAge2xhYmVsOlwiU2VhcmNoIEJ5IENhdGVnb3J5IE5hbWVcIixmaWVsZDonYmxvZ2NhdGVnb3J5Jyx2YWx1ZXM6dGhpcy5jYXRlZ29yeV9uYW1lc30sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgbGFiZWw6ICdTZWFyY2ggQnkgQmxvZyBGZWF0dXJlZCcsIGZpZWxkOiAnZmVhdHVyZWQnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJZZXNcIiB9LCB7IHZhbDogMCwgbmFtZTogJ05vJyB9XVxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgbGFiZWw6ICdTZWFyY2ggQnkgQmxvZyBXZWJzaXRlJywgZmllbGQ6ICd3ZWJzaXRlJywgdmFsdWVzOiBbeyB2YWw6IFwiTWFzayBCbG9nIDFcIiwgbmFtZTogXCJNYXNrIEJsb2cgMVwiIH0sIHsgdmFsOiBcIk1hc2sgQmxvZyAyXCIsIG5hbWU6ICdNYXNrIEJsb2cgMicgfSx7dmFsOlwiTWFzayBCbG9nIDNcIixuYW1lOlwiTWFzayBCbG9nIDNcIn1dXG4gICAgICAgICAgLy8gfVxuICAgICAgICBdLFxuICAgICAgICBzZWFyY2g6W3tsYWJlbDpcIlNlYXJjaCBCeSBUYWdzXCIsZmllbGQ6J3RhZ3MnLHZhbHVlczp0aGlzLmF1dGh2YWx9XVxuXG4gICAgICB9LFxuICAgICAgLy8gIC8qU2hvd2luZyBJbWFnZSBpbiB0aGUgTW9kYWwqL1xuICAgICAgIHBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXlfZGV0YWlsX2RhdGF0eXBlOiBbXG4gICAgICAvLyAgICB7XG4gICAgICAvLyAgIGtleTogXCJpbWFnZVwiLFxuICAgICAgLy8gICB2YWx1ZTogJ2ltYWdlJyxcbiAgICAgIC8vICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci9ibG9ncy8nICAgICAgICAgICAgIC8vIEltYWdlIHBhdGggXG4gICAgICAvLyB9XG4gICAgXSxcbiAgICB9XG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGxpYmRhdGE6YW55PXtcbiAgICBiYXNlY29uZGl0aW9uOicnLFxuICAgIHVwZGF0ZWVuZHBvaW50OidzdGF0dXN1cGRhdGVmb3JibG9nJyxcbiAgICBoaWRlZWRpdGJ1dHRvbjpmYWxzZSwvLyBhbGwgdGhlc2UgYnV0dG9uIG9wdGlvbnMgYXJlIG9wdGlvbmFsIG5vdCBtYW5kYXRvcnlcbiAgICBoaWRldmlld2J1dHRvbjp0cnVlLFxuICAgIHVwZGF0ZWVuZHBvaW50bWFueTogJ2Jsb2d1cGRhdGUnLFxuICAgIGRlbGV0ZWVuZHBvaW50bWFueTogJ2Jsb2dkZWxldGUnLFxuXG4gICAgZGV0YWlsdmlld19vdmVycmlkZTpbXG4gICAgICB7a2V5OlwiYmxvZ3RpdGxlXCIsdmFsOlwiQmxvZyBUaXRsZSA6XCJ9LFxuICAgICAge2tleTpcImRlc2NyaXB0aW9uXCIsdmFsOlwiRGVzY3JpcHRpb24gOlwifSxcbiAgICAgIHtrZXk6XCJwcmlvcml0eVwiLHZhbDpcIlByaW9yaXR5IDpcIn0sXG4gICAgICB7a2V5Olwic3RhdHVzXCIsdmFsOlwiU3RhdHVzIDpcIn0sXG4gICAgICB7a2V5OlwidGFnc2VhcmNoXCIsdmFsOlwiVGFncyA6XCJ9LFxuICAgICAge2tleTpcImNyZWF0ZWRvbl9kYXRldGltZVwiLHZhbDpcIkFkZGVkIG9uIDpcIn0sXG4gICAgICB7a2V5OlwiYmxvZ2NhdGVnb3J5XCIsdmFsOlwiQ2F0ZWdvcnkgTmFtZSA6XCJ9LFxuICAgICAge2tleTonYXV0aG9yJyx2YWw6J0F1dGhvciA6J30sXG4gICAgICAvLyB7a2V5OidpbWFnZScsdmFsOidJbWFnZSd9LFxuICAgICAgLy8ge2tleTondmlkZW8nLHZhbDonVmlkZW8nfSxcbiAgICAgIHtrZXk6J3ZpZGVvX3RpdGxlJyx2YWw6J1ZpZGVvIFRpdGxlIDonfSxcbiAgICAgIHtrZXk6J2ZlYXR1cmVkX3NlYXJjaCcsdmFsOidGZWF0dXJlZCA6J30sXG4gICAgICB7a2V5Oid2aWRlb19kZXNjcmlwdGlvbicsdmFsOidWaWRlbyBEZXNjcmlwdGlvbiA6J30sXG4gICAgICB7a2V5OidpbWFnZV9hcnJheScsdmFsOidJbWFnZXMgOid9LFxuICAgICAge2tleTondmlkZW9fYXJyYXknLHZhbDonVmlkZW9zIDonfSxcbiAgICAgIHtrZXk6J2ltZ19hcnJheScsdmFsOidJbWFnZXMgOid9LFxuICAgICAge2tleTondmRfYXJyYXknLHZhbDonVmlkZW9zJ31cblxuICBdLCAvLyBvcHRpb25hbFxuICBcbiAgICBcbiAgICB0YWJsZWhlYWRlcnM6WydibG9ndGl0bGUnLCdkZXNjcmlwdGlvbl9odG1sJywnYXV0aG9yJywnYmxvZ2NhdGVnb3J5JywndGFncycsJ3ByaW9yaXR5Jywnc3RhdHVzJywnY3JlYXRlZG9uX2RhdGV0aW1lJywgJ3ZpZGVvJywnaW1hZ2UnXSwgLy9ub3QgcmVxdWlyZWRcbiAgICBjdXN0b21idXR0b25zOltcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgbGFiZWw6XCJWaWRlb3NcIixcbiAgLy8gICAgICAgdHlwZTonYWN0aW9uJyxcbiAgLy8gICAgICAgZGF0YXR5cGU6J2xvY2FsJyxcbiAgLy8gICAgICAgZGF0YWZpZWxkczpbJ3ZkX2FycmF5J10sXG4gIC8vICAgICAgIC8vIGNvbmQ6J3ZpZGVvJyxcbiAgLy8gICAgICAgLy8gY29uZHZhbDonJ1xuXG4gIC8vICAgfSxcbiAgLy8gICB7XG4gIC8vICAgICBsYWJlbDpcIkltYWdlc1wiLFxuICAvLyAgICAgdHlwZTonYWN0aW9uJyxcbiAgLy8gICAgIGRhdGF0eXBlOidsb2NhbCcsXG4gIC8vICAgICBkYXRhZmllbGRzOlsnaW1nX2FycmF5J10sXG4gIC8vICAgICAvLyBjb25kOidpbWFnZScsXG4gIC8vICAgICAvLyBjb25kdmFsOicnXG4gIC8vIH0gLFxuICB7XG4gICAgbGFiZWw6XCJWaWRlb3NcIixcbiAgICB0eXBlOidhY3Rpb24nLFxuICAgIGRhdGF0eXBlOidsb2NhbCcsXG4gICAgZGF0YWZpZWxkczpbJ3ZkX2FycmF5J10sXG4gICAgY29uZDondmlkZW9fYXJyYXlfZmllbGQnLFxuICAgIGNvbmR2YWw6MVxuXG59LFxue1xuICBsYWJlbDpcIkltYWdlc1wiLFxuICB0eXBlOidhY3Rpb24nLFxuICBkYXRhdHlwZTonbG9jYWwnLFxuICBkYXRhZmllbGRzOlsnaW1nX2FycmF5J10sXG4gIGNvbmQ6J2ltYWdlX2FycmF5X2ZpZWxkJyxcbiAgY29uZHZhbDoxXG59IFxuXG4gICAgXVxufSBcbiAgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7XG4gICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBlbmRwb2ludD10aGlzLmJsb2dMaXN0Q29uZmlnLmVuZHBvaW50O1xuICAgIGxldCBlbmRwb2ludGM9dGhpcy5ibG9nTGlzdENvbmZpZy5lbmRwb2ludGM7XG4gICAgbGV0IGRhdGE6YW55PXtcbiAgICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgICAgICBcImxpbWl0XCI6MTAsXG4gICAgICAgICAgICBcInNraXBcIjowXG4gICAgICAgIH0sXG4gICAgc29ydDp7XG4gICAgICAgIFwidHlwZVwiOidkZXNjJyxcbiAgICAgICAgXCJmaWVsZFwiOidwcmlvcml0eSdcbiAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnRjLCBkYXRhKS5zdWJzY3JpYmUoKHJlczphbnkpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luIGNvbnN0cnVjdG9yJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50ID1yZXMuY291bnQ7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybignYmxvZ0RhdGEgYycscmVzKTtcblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICB9KTtcblxuICAgIC8vIHRoaXMuYXBpU2VydmljZS5nZXREYXRhV2l0aG91dFRva2VuKGVuZHBvaW50LGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgIC8vICAgdGhpcy5kYXRhc291cmNlPXJlcy5yZXN1bHRzLnJlczsgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBjb25zdHJ1Y3RvcicpO1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIC8vICAgICAvLyB0aGlzLnBlbmRpbmdtb2RlbGFwcGxpY2F0aW9uYXJyYXkgPXJlcy5yZXN1bHRzLnJlcztcbiAgICAvLyAgICAgLy9jb25zb2xlLndhcm4oJ2Jsb2dEYXRhJyxyZXMpO1xuXG4gICAgLy8gfSwgZXJyb3IgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgIC8vIH0pO1xuXG4gIH1cbn1cblxuIl19