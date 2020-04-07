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
    // ====================================================================================================
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
    }
    // ================================================Input For Lib Listing================================
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
        console.log("hgshj", receivedData);
        for (let i in receivedData.datasource) {
            this.value.push({ 'name': receivedData.datasource[i].blogcategory, val: receivedData.datasource[i].blogcategory });
            console.log("free", this.value);
        }
        //  this.value = receivedData;
        this.blogListConfig = {
            apiUrl: receivedData.apiBaseUrl,
            endpoint: receivedData.endpoint,
            endpointc: receivedData.endpointc,
            listEndPoint: receivedData.listEndPoint,
            datasource: receivedData.datasource,
            tableName: receivedData.tableName,
            listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "metatitle", "metadesc", "description_html", "credentials", "blogs_file", "blogs_image", "blogtitle_search", "author_search", "video", "blogcat", "profile_picture", "tagsearch"],
            listArray_modify_header: {
                "blogtitle": "Blog Title", "description": "Description", "date added": "Date", "profile picture": "Profile Picture", "tags": "Tags",
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
                template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n      [datasource]=\"blogListConfig.datasource\" [skip]=\"blogListConfig.listArray_skip\"\n      [modify_header_array]=\"blogListConfig.listArray_modify_header\" [sourcedata]=\"blogListConfig.tableName\"\n      [statusarr]=\"blogListConfig.statusarr\" [jwttoken]=\"blogListConfig.jwtToken\"\n      [apiurl]=\"blogListConfig.apiUrl\" [editroute]=\"blogListConfig.editUrl\"\n      [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n      [date_search_source]=\"blogListConfig.view\"\n     [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n     [search_settings]=\"blogListConfig.search_settings\"\n     [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n     [sortdata]=\"sortdata\"\n     [datacollection]=\"datacollection\"\n     [date_search_source_count]=\"date_search_source_count\"\n     [limitcond]=\"limitcond\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n  <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
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
    /**
     * @type {?}
     * @private
     */
    ListingBlogmanagementlibComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBUzVDLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7O0lBbUY1QyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBakZyQyxVQUFLLEdBQUssRUFBRSxDQUFDO1FBSWxCLFdBQU0sR0FBWSxLQUFLLENBQUM7OztRQUd6QixhQUFRLEdBQUs7WUFDWixNQUFNLEVBQUMsTUFBTTtZQUNiLE9BQU8sRUFBQyxVQUFVO1lBQ2xCLFNBQVMsRUFBQyxDQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFVBQVUsQ0FBQztTQUMzRCxDQUFDOztRQUVGLG1CQUFjLEdBQU0sMkJBQTJCLENBQUM7UUFDaEQsNkJBQXdCLEdBQU0sQ0FBQyxDQUFDOztRQUVoQyxjQUFTLEdBQUs7WUFDWixPQUFPLEVBQUMsRUFBRTtZQUNWLE1BQU0sRUFBQyxDQUFDO1lBQ1IsV0FBVyxFQUFDLENBQUM7U0FDZCxDQUFDO0lBK0RBLENBQUM7Ozs7OztJQTdERCxJQUNJLE1BQU0sQ0FBQyxZQUFpQjtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxZQUFZLENBQUMsQ0FBQztRQUNsQyxLQUFLLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxVQUFVLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsRUFBRSxNQUFNLEVBQUUsWUFB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QkFBbUIsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsR0FBTyxFQUFFLEVBQUU7WUFDckUsaUNBQWlDO1lBQ2pDLHVCQUF1QjtZQUN2QixzREFBc0Q7WUFDdEQsK0JBQStCO1FBRW5DLENBQUM7Ozs7UUFBRSxLQUFLLENBQUMsRUFBRTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7WUE5SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLHU0Q0FBeUQ7O2FBRTFEOzs7O1lBUlEsVUFBVTs7O3FCQWlDaEIsS0FBSzs7OztJQXRCUixrREFBb0I7O0lBR2xCLDJEQUFvQjs7SUFDcEIsbURBQXdCOztJQUd6QixxREFJQzs7SUFFRiwyREFBZ0Q7O0lBQ2hELHFFQUFnQzs7SUFFaEMsc0RBSUU7Ozs7O0lBNkRZLHVEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcblxuLyoqIFRoaXMgaXMgdGhlIGFjdHVhbGkgbWFpbiBibG9nIHBhZ2UgKiovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5wdWJsaWMgdmFsdWU6YW55PVtdO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGJsb2dMaXN0Q29uZmlnOiBhbnk7XG4gIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIC8vIHNlbmQgYmFzaWMgc29ydCBkYXRhXG4gc29ydGRhdGE6YW55PXtcbiAgXCJ0eXBlXCI6J2Rlc2MnLFxuICBcImZpZWxkXCI6J3ByaW9yaXR5JyxcbiAgXCJvcHRpb25zXCI6WydhdXRob3InLCdibG9nY2F0ZWdvcnknLCdibG9ndGl0bGUnLCdwcmlvcml0eSddXG59O1xuLy8gZGF0YWNvbGxlY3Rpb25cbmRhdGFjb2xsZWN0aW9uOiBhbnk9J2dldGJsb2dtYW5hZ2VtZW50bGlzdGRhdGEnO1xuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50OiBhbnk9MDtcbi8vIHNlbmQgYmFzaWMgbGltaXQgZGF0YVxubGltaXRjb25kOmFueT17XG4gIFwibGltaXRcIjoxMCxcbiAgXCJza2lwXCI6MCxcbiAgXCJwYWdlY291bnRcIjoxXG59OyBcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09SW5wdXQgRm9yIExpYiBMaXN0aW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhyZWNlaXZlZERhdGE6IGFueSkge1xuY29uc29sZS5sb2coXCJoZ3NoalwiLHJlY2VpdmVkRGF0YSk7XG5mb3IgKGxldCBpIGluIHJlY2VpdmVkRGF0YS5kYXRhc291cmNlKSB7XG4gIHRoaXMudmFsdWUucHVzaChcbiAgICB7ICduYW1lJzogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0uYmxvZ2NhdGVnb3J5LCB2YWw6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLmJsb2djYXRlZ29yeSB9XG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcImZyZWVcIix0aGlzLnZhbHVlKTtcblxufVxuICAvLyAgdGhpcy52YWx1ZSA9IHJlY2VpdmVkRGF0YTtcbiAgICB0aGlzLmJsb2dMaXN0Q29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGVuZHBvaW50IDpyZWNlaXZlZERhdGEuZW5kcG9pbnQsXG4gICAgICBlbmRwb2ludGM6cmVjZWl2ZWREYXRhLmVuZHBvaW50YyxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJ1cGRhdGVkX2F0XCIsIFwiaW1hZ2VcIiwgXCJtZXRhdGl0bGVcIiwgXCJtZXRhZGVzY1wiLCBcImRlc2NyaXB0aW9uX2h0bWxcIiwgXCJjcmVkZW50aWFsc1wiLCBcImJsb2dzX2ZpbGVcIiwgXCJibG9nc19pbWFnZVwiLFwiYmxvZ3RpdGxlX3NlYXJjaFwiLFwiYXV0aG9yX3NlYXJjaFwiLFwidmlkZW9cIixcImJsb2djYXRcIixcInByb2ZpbGVfcGljdHVyZVwiLFwidGFnc2VhcmNoXCJdLFxuICAgICAgbGlzdEFycmF5X21vZGlmeV9oZWFkZXI6IHtcbiAgICAgICAgXCJibG9ndGl0bGVcIjogXCJCbG9nIFRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLFwiZGF0ZSBhZGRlZFwiOlwiRGF0ZVwiLFwicHJvZmlsZSBwaWN0dXJlXCI6XCJQcm9maWxlIFBpY3R1cmVcIixcInRhZ3NcIjpcIlRhZ3NcIixcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIsIFwicGFyZW50Y2F0ZWdvcnluYW1lXCI6IFwiUGFyZW50IENhdGVnb3J5IE5hbWVcIixcbiAgICAgICAgXCJhdXRob3JcIjogXCJBdXRob3JcIixcImJsb2djYXRcIjpcIkJsb2cgQ2F0ZWdvcnlcIixcImRhdGVcIjpcIkRhdGVcIixcImJsb2djYXRlZ29yeVwiOlwiQmxvZyBDYXRlZ29yeVwiXG4gICAgICB9LFxuICAgICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxuICAgICAgdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXG4gICAgICBlZGl0VXJsOiByZWNlaXZlZERhdGEuZWRpdFVybCxcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxuICAgICAgdmlldzogcmVjZWl2ZWREYXRhLnZpZXcsXG4gICAgICBzZWFyY2hfc2V0dGluZ3M6IHtcbiAgICAgICAgdGV4dHNlYXJjaDogW3sgbGFiZWw6IFwiQmxvZyBUaXRsZVwiLCBmaWVsZDogJ2Jsb2d0aXRsZScgfSx7IGxhYmVsOiBcIlNlYXJjaCBCeSBBdXRob3JcIiwgZmllbGQ6ICdhdXRob3InIH0seyBsYWJlbDogXCJTZWFyY2ggQnkgVGFnc1wiLCBmaWVsZDogJ3RhZ3NlYXJjaCcgfV0sXG5cbiAgICAgICAgc2VsZWN0c2VhcmNoOiBbXG4gICAgICAgICAgeyBsYWJlbDogJ1N0YXR1cycsIGZpZWxkOiAnc3RhdHVzJywgdmFsdWVzOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV19LHtsYWJlbDpcIlNlYXJjaCBCeSBCbG9nIENhdGVnb3J5XCIsZmllbGQ6J2Jsb2djYXRlZ29yeScsdmFsdWVzOnRoaXMudmFsdWV9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2VhcmNoIEJ5IEJsb2cgRmVhdHVyZWQnLCBmaWVsZDogJ2ZlYXR1cmVkJywgdmFsdWVzOiBbeyB2YWw6IDEsIG5hbWU6IFwiWWVzXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdObycgfV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2VhcmNoIEJ5IEJsb2cgV2Vic2l0ZScsIGZpZWxkOiAnd2Vic2l0ZScsIHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIk1hc2sgQmxvZyAxXCIgfSwgeyB2YWw6IDIsIG5hbWU6ICdNYXNrIEJsb2cgMicgfSx7dmFsOjMsbmFtZTpcIk1hc2sgQmxvZyAzXCJ9XVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuXG4gICAgICAgIC8vIGRhdGVzZWFyY2g6W3tzdGFydGRhdGVsYWJlbDpcIlN0YXJ0IERhdGVcIixlbmRkYXRlbGFiZWw6XCJFbmQgRGF0ZVwiLHN1Ym1pdDpcIlNlYXJjaCBCeSBEYXRlXCIsICBmaWVsZDpcImNyZWF0ZWRfYXRcIn1dLFxuICAgICAgfSxcbiAgICAgIC8vICAvKlNob3dpbmcgSW1hZ2UgaW4gdGhlIE1vZGFsKi9cbiAgICAgIC8vICBwZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5X2RldGFpbF9kYXRhdHlwZTogW3tcbiAgICAgIC8vICAga2V5OiBcImltYWdlXCIsXG4gICAgICAvLyAgIHZhbHVlOiAnaW1hZ2UnLFxuICAgICAgLy8gICBmaWxldXJsOiAnaHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9jcm1maWxlcy5pbmZsdXhob3N0c2VydmVyL3Rlc3RpbW9uaWFsLycgICAgICAgICAgICAgLy8gSW1hZ2UgcGF0aCBcbiAgICAgIC8vIH1dLFxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7XG4gICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBlbmRwb2ludD10aGlzLmJsb2dMaXN0Q29uZmlnLmVuZHBvaW50O1xuICAgIGxldCBlbmRwb2ludGM9dGhpcy5ibG9nTGlzdENvbmZpZy5lbmRwb2ludGM7XG4gICAgbGV0IGRhdGE6YW55PXtcbiAgICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgICAgICBcImxpbWl0XCI6MTAsXG4gICAgICAgICAgICBcInNraXBcIjowXG4gICAgICAgIH0sXG4gICAgc29ydDp7XG4gICAgICAgIFwidHlwZVwiOidkZXNjJyxcbiAgICAgICAgXCJmaWVsZFwiOidwcmlvcml0eSdcbiAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnRjLCBkYXRhKS5zdWJzY3JpYmUoKHJlczphbnkpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luIGNvbnN0cnVjdG9yJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50ID1yZXMuY291bnQ7XG4gICAgICAgIGNvbnNvbGUud2FybignYmxvZ0RhdGEgYycscmVzKTtcblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhV2l0aG91dFRva2VuKGVuZHBvaW50LGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gY29uc3RydWN0b3InKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgLy8gdGhpcy5wZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5ID1yZXMucmVzdWx0cy5yZXM7XG4gICAgICAgIC8vY29uc29sZS53YXJuKCdibG9nRGF0YScscmVzKTtcblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICB9KTtcblxuICB9XG59Il19