/**
 * @fileoverview added by tsickle
 * Generated from: lib/blog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** This is the category listing **/
import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';
export class BlogComponent {
    // ====================================================================================================
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
        this.blodata = [];
        // send basic sort data
        this.sortdata = {
            "type": 'desc',
            "field": 'priority',
            "options": ['priority', 'blogtitle', 'blogcat_count', 'parentcategoryname']
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
            updateendpointmany: 'blogcatupdate',
            deleteendpointmany: 'blogcatdelete',
            tableheaders: ['blogtitle', 'description', 'priority', 'status', 'parentcategoryname', 'blogcat_count'],
            //not required (table header name)
            detailview_override: [
                { key: "blogtitle", val: "Category Name" },
                { key: "description", val: "Description" },
                { key: "priority", val: "Priority" },
                { key: "status", val: "Status" },
                { key: "blogcat_count", val: "Category Count" },
                { key: "parentcategoryname", val: "Parent Category Name" },
                { key: "blogcat_count", val: "Category Count" }
            ],
        };
        this.loader = false;
        // ======================================================================================
        // ================================================Input For Lib Listing================================
        // public value:any=[{val:'','name':''}];
        this.value = [];
    }
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
        console.log(receivedData.datasource, '===+++++===');
        for (let i in receivedData.datasource) {
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
            blogcategory_detail_skip: ["_id", "createdon_datetime", "parent_id", 'id'],
            listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "description", "parentcategoryname_search", "blogtitle_search", "blogtitlesearch", "createdon_datetime"],
            listArray_modify_header: { "blogtitle": "Category Name", "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name", "blogcat_count": "Category Count", "date": "Date", 'description': 'Description' },
            // admintablenameTableName: "admin",
            statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
            updateurl: receivedData.updateEndpoint,
            editUrl: receivedData.editUrl,
            jwtToken: receivedData.jwtToken,
            deleteEndPoint: receivedData.deleteEndPoint,
            date_search_source: receivedData.date_search_source,
            search_settings: {
                // datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search",  field:"createdon_datetime"}],
                textsearch: [{ label: "Search by Category Name", field: 'blogtitle' }, { label: "Search by Parent Category Name", field: 'parentcategoryname' }],
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
            this.date_search_source_count = res.count;
            console.log(this.date_search_source_count, '++++++++++');
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log('Oooops!');
        }));
        // this.apiService.getDataWithoutToken(endpoint,data).subscribe((res:any) => {
        //   this.datasource=res.results.res;
        //   // console.log(res,'+++')
        // }, error => {
        //     console.log('Oooops!');
        // });
    }
}
BlogComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-Blog',
                template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n\n        [datasource]=\"blogListConfig.datasource\" \n\n        [skip]=\"blogListConfig.listArray_skip\"\n\n        [modify_header_array]=\"blogListConfig.listArray_modify_header\" \n\n        [sourcedata]=\"blogListConfig.tableName\"\n\n        [statusarr]=\"blogListConfig.statusarr\" \n\n        [jwttoken]=\"blogListConfig.jwtToken\"\n\n        [apiurl]=\"blogListConfig.apiUrl\" \n\n        [editroute]=\"blogListConfig.editUrl\"\n\n        [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n\n        [date_search_source]=\"blogListConfig.date_search_source\"\n\n       [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n\n       [search_settings]=\"blogListConfig.search_settings\"\n\n       [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n\n       [sortdata]=\"sortdata\"\n\n       [detail_skip_array]=\"blogListConfig.blogcategory_detail_skip\"\n\n       [datacollection]=\"blogListConfig.datacollection\"\n\n        [date_search_source_count]=\"date_search_source_count\"\n        \n        [libdata]=\"libdata\"\n        \n       [limitcond]=\"limitcond\">\n       \n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                styles: [".formfilterdiv .mat-dialog-content .mat-card{flex-wrap:wrap}.formfilterdiv .mat-card-header{flex:1 1 100%}.formfilterdiv #dialogdatavd_array p{position:relative;padding-bottom:56.25%;height:0;overflow-y:scroll}.formfilterdiv #dialogdatavd_array p iframe{position:absolute;top:0;left:0;width:100%;height:100%}"]
            }] }
];
/** @nocollapse */
BlogComponent.ctorParameters = () => [
    { type: ApiService }
];
BlogComponent.propDecorators = {
    config: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9ibG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzNDLE1BQU0sT0FBTyxhQUFhOzs7OztJQStKeEIsWUFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQTlKakMsWUFBTyxHQUFLLEVBQUUsQ0FBQzs7UUFFdkIsYUFBUSxHQUFLO1lBQ1osTUFBTSxFQUFDLE1BQU07WUFDYixPQUFPLEVBQUMsVUFBVTtZQUNsQixTQUFTLEVBQUMsQ0FBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLGVBQWUsRUFBQyxvQkFBb0IsQ0FBQztTQUN4RSxDQUFDOzs7UUFHRiw2QkFBd0IsR0FBTSxDQUFDLENBQUM7O1FBRWhDLGNBQVMsR0FBSztZQUNaLE9BQU8sRUFBQyxFQUFFO1lBQ1YsTUFBTSxFQUFDLENBQUM7WUFDUixXQUFXLEVBQUMsQ0FBQztTQUNkLENBQUM7UUFJRixZQUFPLEdBQUs7WUFDVixhQUFhLEVBQUMsRUFBRTtZQUNoQixjQUFjLEVBQUMsNkJBQTZCOztZQUM1QyxjQUFjLEVBQUMsS0FBSzs7WUFFcEIsa0JBQWtCLEVBQUUsZUFBZTtZQUNuQyxrQkFBa0IsRUFBRSxlQUFlO1lBRW5DLFlBQVksRUFBQyxDQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxvQkFBb0IsRUFBQyxlQUFlLENBQUM7O1lBQ2pHLG1CQUFtQixFQUFDO2dCQUNsQixFQUFDLEdBQUcsRUFBQyxXQUFXLEVBQUMsR0FBRyxFQUFDLGVBQWUsRUFBQztnQkFDckMsRUFBQyxHQUFHLEVBQUMsYUFBYSxFQUFDLEdBQUcsRUFB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a0M7O2FBRW5DOzs7O1lBTlEsVUFBVTs7O3FCQW1IaEIsS0FBSzs7OztJQTNHTixnQ0FBc0I7O0lBRXZCLGlDQUlDOztJQUdGLGlEQUFnQzs7SUFFaEMsa0NBSUU7O0lBRUYsbUNBQWU7O0lBRWYsZ0NBOEVDOztJQUdDLHVDQUFtQjs7SUFDbkIsK0JBQXFCOztJQUtyQiw4QkFBb0I7O0lBb0RSLG1DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqIFRoaXMgaXMgdGhlIGNhdGVnb3J5IGxpc3RpbmcgKiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMsIFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItQmxvZycsXG4gIHRlbXBsYXRlVXJsOiAnYmxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdHlsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGJsb2RhdGE6YW55PVtdO1xuIC8vIHNlbmQgYmFzaWMgc29ydCBkYXRhXG4gc29ydGRhdGE6YW55PXtcbiAgXCJ0eXBlXCI6J2Rlc2MnLFxuICBcImZpZWxkXCI6J3ByaW9yaXR5JyxcbiAgXCJvcHRpb25zXCI6Wydwcmlvcml0eScsJ2Jsb2d0aXRsZScsJ2Jsb2djYXRfY291bnQnLCdwYXJlbnRjYXRlZ29yeW5hbWUnXVxufTtcbi8vIGRhdGFjb2xsZWN0aW9uXG4vLyBkYXRhY29sbGVjdGlvbjogYW55PSdnZXRibG9nbGlzdGRhdGEnO1xuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50OiBhbnk9MDtcbi8vIHNlbmQgYmFzaWMgbGltaXQgZGF0YVxubGltaXRjb25kOmFueT17XG4gIFwibGltaXRcIjoxMCxcbiAgXCJza2lwXCI6MCxcbiAgXCJwYWdlY291bnRcIjoxXG59OyBcblxuZGF0YXNvdXJjZTphbnk7XG5cbmxpYmRhdGE6YW55PXtcbiAgYmFzZWNvbmRpdGlvbjonJyxcbiAgdXBkYXRlZW5kcG9pbnQ6J3N0YXR1c3VwZGF0ZWZvcmJsb2djYXRlZ29yeScsICAgICAgICAvLyB1cGRhdGUgZW5kcG9pbnQgc2V0XG4gIGhpZGVlZGl0YnV0dG9uOmZhbHNlLCAvLyAoaGlkZSBlZGl0IGJ1dHRvbiApIGFsbCB0aGVzZSBidXR0b24gb3B0aW9ucyBhcmUgb3B0aW9uYWwgbm90IG1hbmRhdG9yeVxuXG4gIHVwZGF0ZWVuZHBvaW50bWFueTogJ2Jsb2djYXR1cGRhdGUnLFxuICBkZWxldGVlbmRwb2ludG1hbnk6ICdibG9nY2F0ZGVsZXRlJyxcblxuICB0YWJsZWhlYWRlcnM6WydibG9ndGl0bGUnLCdkZXNjcmlwdGlvbicsJ3ByaW9yaXR5Jywnc3RhdHVzJywncGFyZW50Y2F0ZWdvcnluYW1lJywnYmxvZ2NhdF9jb3VudCddLCAvL25vdCByZXF1aXJlZCAodGFibGUgaGVhZGVyIG5hbWUpXG4gIGRldGFpbHZpZXdfb3ZlcnJpZGU6W1xuICAgIHtrZXk6XCJibG9ndGl0bGVcIix2YWw6XCJDYXRlZ29yeSBOYW1lXCJ9LFxuICAgIHtrZXk6XCJkZXNjcmlwdGlvblwiLHZhbDpcIkRlc2NyaXB0aW9uXCJ9LFxuICAgIHtrZXk6XCJwcmlvcml0eVwiLHZhbDpcIlByaW9yaXR5XCJ9LFxuICAgIHtrZXk6XCJzdGF0dXNcIix2YWw6XCJTdGF0dXNcIn0sXG4gICAge2tleTpcImJsb2djYXRfY291bnRcIix2YWw6XCJDYXRlZ29yeSBDb3VudFwifSxcbiAgICB7a2V5OlwicGFyZW50Y2F0ZWdvcnluYW1lXCIsdmFsOlwiUGFyZW50IENhdGVnb3J5IE5hbWVcIn0sXG4gICAge2tleTpcImJsb2djYXRfY291bnRcIix2YWw6XCJDYXRlZ29yeSBDb3VudFwifVxuXSwgLy8gb3B0aW9uYWxcblxuXG4vLyAgIGN1c3RvbWJ1dHRvbnM6W1xuLy8gICAgICAge1xuLy8gICAgICAgICAgIGxhYmVsOlwiZmIgc2VhcmNoIHdpdGggYmxvZyB0aXRsZVwiLCAgICAgICAgLy8gZmIgc2VhcmNoIGJ1dHRvbiBuYW1lXG4vLyAgICAgICAgICAgbGluazpcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zZWFyY2gvdG9wL1wiLCAgLy8gZmIgc2VhcmNoIGxpbmtcbi8vICAgICAgICAgICB0eXBlOidleHRlcm5hbGxpbmsnLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXh0ZXJuYWwgbGlua1xuLy8gICAgICAgICAgIHBhcmFtOlt7a2V5OidibG9ndGl0bGUnLHE6J3EnfV0sICAgICAgICAgICAgICAvLyBwYXNzZWQgcGFyYW1ldGVyIGxpa2UgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NlYXJjaC90b3AvP3E9VlBPVGlwcyUyMFlvdSUyMFNob3VsZCUyMEtub3clMjBGb3IlMjBCdXlpbmclMjBVc2VkJTIwQ2Fyc1dKWVxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgICBsYWJlbDpcIkcgc2VhcmNoIHdpdGggYmxvZyB0aXRsZSBBQ3RpdmVcIiwgICAgICAvLyBnb29nbGUgc2VhcmNoIGJ1dHRvbiBuYW1lIFxuLy8gICAgICAgICAgIGxpbms6XCJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaFwiLCAgICAgICAgIC8vIGdvb2dsZSBzZWFyY2ggbGlua1xuLy8gICAgICAgICAgIHR5cGU6J2V4dGVybmFsbGluaycsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBleHRlcm5hbCBsaW5rXG4vLyAgICAgICAgICAgcGFyYW06W3trZXk6J2Jsb2d0aXRsZScscToncSd9LHtrZXk6J2F1dGhvcicscTonb3EnfV0sIC8vcGFzc2VkIHBhcmFtZXRlciBsaWtlIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9VlBPVGlwcyUyMFlvdSUyMFNob3VsZCUyMEtub3clMjBGb3IlMjBCdXlpbmclMjBVc2VkJTIwQ2Fyc1dKWSZvcT1ZbWF0dFpcbi8vICAgICAgICAgICBjb25kOidzdGF0dXMnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uZGl0aW9uIGZvciBzdGF0dXNcbi8vICAgICAgICAgICBjb25kdmFsOiAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25kaXRpb24gdmFsdWUgc3RhdHVzPTAgLCBpZiB2YWx1ZT0xIGFuZCBzdGF0dXMgPTAgdGhlbiB0aGUgYnV0dG9uIHdpbGwgZGlzc2FwcGVhclxuLy8gICAgICAgfSx7XG4vLyAgICAgICAgICAgbGFiZWw6XCJtYXNrIGJsb2dcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21hc2sgYmxvZyBzZWFyY2ggYnV0dG9uIG5hbWVcbi8vICAgICAgICAgICBsaW5rOlwiaHR0cHM6Ly9tYXNrLWJsb2cxLmluZmx1eGlxLmNvbS9ibG9nLWRldGFpbHNcIiwgIC8vIG1hc2sgc2VhcmNoIGxpbmtcbi8vICAgICAgICAgICB0eXBlOidleHRlcm5hbGxpbmsnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXh0ZXJuYWwgbGlua1xuLy8gICAgICAgICAgIHBhcmFtdHlwZTonYW5ndWxhcicsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3dpbmcgZnJvbnQgZW5kIFxuLy8gICAgICAgICAgIHBhcmFtOlsnYmxvZ3RpdGxlJywnX2lkJ10sICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhc3NlZCB0byBwYXJhbWV0ZXIgd2l0aCBibG9nIHRpdGxlIGFuZCBpZFxuLy8gICAgICAgICAgIGNvbmQ6J3N0YXR1cycsIC8vIGNvbmRpdGlvbiBmb3Igc3RhdHVzXG4vLyAgICAgICAgICAgY29uZHZhbDogMCAgICAgIC8vIGNvbmRpdGlvbiB2YWx1ZSBzdGF0dXM9MCAsIGlmIHZhbHVlPTEgYW5kIHN0YXR1cyA9MCB0aGVuIHRoZSBidXR0b24gd2lsbCBkaXNzYXBwZWFyXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICAgIGxhYmVsOlwiIGZiIHByb2ZpbGUgXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmYiBwcm9maWxlIGJ1dHRvbiBcbi8vICAgICAgICAgICBsaW5rOlwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RlYmFzaXNrYXIwMDdcIiwgICAgIC8vIHByb2ZpbGUgbGlua1xuLy8gICAgICAgICAgIHR5cGU6J2V4dGVybmFsbGluaydcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgbGFiZWw6XCIgZmIgcHJvZmlsZSBmb3IgaW5hY3RpdmVcIiwgICAgICAgICAgICAgICAgICAvLyBmYiBwcm9maWxlIGZvciBpbmFjdGl2ZSBzdGF0dXNcbi8vICAgICAgICAgICBsaW5rOlwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RlYmFzaXNrYXIwMDdcIiwgICAgIC8vIHByb2ZpbGUgbGlua1xuLy8gICAgICAgICAgIHR5cGU6J2V4dGVybmFsbGluaycsXG4vLyAgICAgICAgICAgY29uZDonc3RhdHVzJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25kaXRpb24gZm9yIHN0YXR1c1xuLy8gICAgICAgICAgIGNvbmR2YWw6MCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uZGl0aW9uIHZhbHVlIHN0YXR1cz0wICwgaWYgdmFsdWU9MSBhbmQgc3RhdHVzID0wIHRoZW4gdGhlIGJ1dHRvbiB3aWxsIGRpc3NhcHBlYXJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgbGFiZWw6XCIgZmIgcHJvZmlsZSBmb3IgYWN0aXZlXCIsICAgICAgICAgICAgICAgICAgICAgICAvLyBmYiBwcm9maWxlIGZvciBhY3RpdmUgc3RhdHVzXG4vLyAgICAgICAgICAgbGluazpcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kZWJhc2lza2FyMDA3XCIsICAgICAgICAvLyBwcm9maWxlIGxpbmtcbi8vICAgICAgICAgICB0eXBlOidleHRlcm5hbGxpbmsnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXh0ZXJuYWwgbGlua1xuLy8gICAgICAgICAgIGNvbmQ6J3N0YXR1cycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbmRpdGlvbiBmb3Igc3RhdHVzXG4vLyAgICAgICAgICAgY29uZHZhbDoxIC8vY29uZGl0aW9uIHZhbHVlIHN0YXR1cz0xIGlmIHZhbHVlPTAgYW5kIHN0YXR1cyA9MSB0aGVuIHRoZSBidXR0b24gd2lsbCBkaXNzYXBwZWFyXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICAgIGxhYmVsOlwic2VlIGJyYW5kXCIsICAgICAgICAgICAgLy8gc2VlIGJyYW5kIGJ1dHRvblxuLy8gICAgICAgICAgIHJvdXRlOlwiYnJhbmRcIiwgICAgICAgICAgICAgICAvLyBnbyB0byBicmFuZCByb3V0ZVxuLy8gICAgICAgICAgIHR5cGU6J2ludGVybmFsbGluaycsICAgICAgICAgIC8vIHNhbWUgYXBwbGljYXRpb24gYnV0IGRpZmZlcmVudCBwYWdlIC5cbi8vICAgICAgICAgICBjb25kOidzdGF0dXMnLCAgICAgICAgICAgICAgICAgLy8gY29uZGl0aW9uIGZvciBzdGF0dXNcbi8vICAgICAgICAgICBjb25kdmFsOjAgICAgICAgICAgICAgICAgICAgICAvLyBjb25kaXRpb24gdmFsdWUgc3RhdHVzPTAgLCBpZiB2YWx1ZT0xIGFuZCBzdGF0dXMgPTAgdGhlbiB0aGUgYnV0dG9uIHdpbGwgZGlzc2FwcGVhclxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgICBsYWJlbDpcInNlZSBicmFuZCB3aXRoIHBhcmFtXCIsICAgICAvLyBzZWUgYnJhbmQgYnV0dG9uIHdpdGggcGFyYW1cbi8vICAgICAgICAgICByb3V0ZTpcImJyYW5kXCIsICAgICAgICAgICAgICAgICAgICAvLyBnbyB0byBicmFuZCByb3V0ZVxuLy8gICAgICAgICAgIHR5cGU6J2ludGVybmFsbGluaycsICAgICAgICAgICAgIC8vIHNhbWUgYXBwbGljYXRpb24gYnV0IGRpZmZlcmVudCBwYWdlIHdpdGggcGFyYW1zIC5cbi8vICAgICAgICAgICBjb25kOidzdGF0dXMnLCAgICAgICAgICAgICAgICAgICAgLy8gY29uZGl0aW9uIGZvciBzdGF0dXNcbi8vICAgICAgICAgICBjb25kdmFsOjAsICAgICAgICAgICAgICAgICAgICAgICAvL2NvbmRpdGlvbiB2YWx1ZSBzdGF0dXM9MCAsIGlmIHZhbHVlPTEgYW5kIHN0YXR1cyA9MCB0aGVuIHRoZSBidXR0b24gd2lsbCBkaXNzYXBwZWFyXG4vLyAgICAgICAgICAgcGFyYW06WydfaWQnLCdibG9ndGl0bGUnXSwgICAgLy8gcGFzc2VkIHdpdGggcGFyYW1zXG4vLyAgICAgICB9XG4vLyAgIF1cbn1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgXG4gIGJsb2dMaXN0Q29uZmlnOmFueTtcbiAgbG9hZGVyOmJvb2xlYW49ZmFsc2U7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09SW5wdXQgRm9yIExpYiBMaXN0aW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gcHVibGljIHZhbHVlOmFueT1be3ZhbDonJywnbmFtZSc6Jyd9XTtcbiAgcHVibGljIHZhbHVlOmFueT1bXTtcbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhyZWNlaXZlZERhdGE6IGFueSkgeyBcbiAgICBjb25zb2xlLmxvZyhyZWNlaXZlZERhdGEuZGF0YXNvdXJjZSwnPT09KysrKys9PT0nKVxuICAgICBmb3IgKGxldCBpIGluIHJlY2VpdmVkRGF0YS5kYXRhc291cmNlKSB7XG4gICAgICAgdGhpcy52YWx1ZS5wdXNoKFxuICAgICAgICAgeyAnbmFtZSc6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLnBhcmVudGNhdGVnb3J5bmFtZSwgdmFsOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZVtpXS5wYXJlbnRjYXRlZ29yeW5hbWUgfVxuICAgICAgICAgKTtcbiAgIH1cblxuICAgIHRoaXMuYmxvZ0xpc3RDb25maWcgPSB7XG4gICAgICBhcGlVcmw6IHJlY2VpdmVkRGF0YS5hcGlCYXNlVXJsLFxuICAgICAgZW5kcG9pbnQgOnJlY2VpdmVkRGF0YS5lbmRwb2ludCxcbiAgICAgIGVuZHBvaW50YzpyZWNlaXZlZERhdGEuZW5kcG9pbnRjLFxuICAgICAgbGlzdEVuZFBvaW50OiByZWNlaXZlZERhdGEubGlzdEVuZFBvaW50LFxuICAgICAgZGF0YWNvbGxlY3Rpb246cmVjZWl2ZWREYXRhLmRhdGFjb2xsZWN0aW9uLFxuICAgICAgZGF0YXNvdXJjZTpyZWNlaXZlZERhdGEuZGF0YXNvdXJjZSxcbiAgICAgIC8vIHRhYmxlTmFtZTogcmVjZWl2ZWREYXRhLnRhYmxlTmFtZSxcbiAgICAgIGJsb2djYXRlZ29yeV9kZXRhaWxfc2tpcDpbXCJfaWRcIixcImNyZWF0ZWRvbl9kYXRldGltZVwiLFwicGFyZW50X2lkXCIsJ2lkJ10sXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcInVwZGF0ZWRfYXRcIixcImltYWdlXCIsXCJkZXNjcmlwdGlvblwiLFwicGFyZW50Y2F0ZWdvcnluYW1lX3NlYXJjaFwiLFwiYmxvZ3RpdGxlX3NlYXJjaFwiLFwiYmxvZ3RpdGxlc2VhcmNoXCIsXCJjcmVhdGVkb25fZGF0ZXRpbWVcIl0sXG4gICAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjogeyBcImJsb2d0aXRsZVwiOlwiQ2F0ZWdvcnkgTmFtZVwiLCBcInByaW9yaXR5XCI6IFwiUHJpb3JpdHlcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiAsXCJwYXJlbnRjYXRlZ29yeW5hbWVcIjpcIlBhcmVudCBDYXRlZ29yeSBOYW1lXCIsXCJibG9nY2F0X2NvdW50XCI6XCJDYXRlZ29yeSBDb3VudFwiLFwiZGF0ZVwiOlwiRGF0ZVwiLCdkZXNjcmlwdGlvbic6J0Rlc2NyaXB0aW9uJ30sXG4gICAgICAvLyBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxuICAgICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgICBkYXRlX3NlYXJjaF9zb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRlX3NlYXJjaF9zb3VyY2UsXG5cbiAgICAgIHNlYXJjaF9zZXR0aW5nczp7XG4gICAgICAgIC8vIGRhdGVzZWFyY2g6W3tzdGFydGRhdGVsYWJlbDpcIlN0YXJ0IERhdGVcIixlbmRkYXRlbGFiZWw6XCJFbmQgRGF0ZVwiLHN1Ym1pdDpcIlNlYXJjaFwiLCAgZmllbGQ6XCJjcmVhdGVkb25fZGF0ZXRpbWVcIn1dLFxuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggYnkgQ2F0ZWdvcnkgTmFtZVwiLCBmaWVsZDogJ2Jsb2d0aXRsZScgfSx7IGxhYmVsOiBcIlNlYXJjaCBieSBQYXJlbnQgQ2F0ZWdvcnkgTmFtZVwiLCBmaWVsZDogJ3BhcmVudGNhdGVnb3J5bmFtZScgfV0sXG4gICAgICAgIHNlbGVjdHNlYXJjaDogW1xuICAgICAgICAgIHsgbGFiZWw6ICdTZWFyY2ggQnkgU3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dXG4gICAgICAgIH0sXG4gICAgICAgICAgLy8ge2xhYmVsOlwiU2VhcmNoIEJ5IFBhcmVudCBDYXRlZ29yeSBOYW1lXCIsZmllbGQ6J3BhcmVudGNhdGVnb3J5bmFtZScsdmFsdWVzOnRoaXMudmFsdWV9XG4gICAgICAgIF1cblxuICAgICAgICAvLyBzZWFyY2g6W3tsYWJlbDpcIlNlYXJjaCBCeSBQYXJlbnQgQ2F0ZWdvcnlcIixmaWVsZDoncGFyZW50Y2F0ZWdvcnluYW1lJyx2YWx1ZXM6dGhpcy52YWx1ZX1dXG4gICAgICB9XG4gICAgICAvLyAgLypTaG93aW5nIEltYWdlIGluIHRoZSBNb2RhbCovXG4gICAgICAvLyAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFt7XG4gICAgICAvLyAgIGtleTogXCJpbWFnZVwiLFxuICAgICAgLy8gICB2YWx1ZTogJ2ltYWdlJyxcbiAgICAgIC8vICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZXN0aW1vbmlhbC8nICAgICAgICAgICAgIC8vIEltYWdlIHBhdGggXG4gICAgICAvLyB9XSxcbiAgICAgIFxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpU2VydmljZTpBcGlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgZW5kcG9pbnQ9dGhpcy5ibG9nTGlzdENvbmZpZy5lbmRwb2ludDtcbiAgICBsZXQgZW5kcG9pbnRjPXRoaXMuYmxvZ0xpc3RDb25maWcuZW5kcG9pbnRjO1xuXG4gICAgbGV0IGRhdGE6YW55PXtcbiAgICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgICAgICBcImxpbWl0XCI6MTAsXG4gICAgICAgICAgICBcInNraXBcIjowXG4gICAgICAgIH0sXG4gICAgc29ydDp7XG4gICAgICAgIFwidHlwZVwiOidkZXNjJyxcbiAgICAgICAgXCJmaWVsZFwiOidwcmlvcml0eSdcbiAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnRjLCBkYXRhKS5zdWJzY3JpYmUoKHJlczphbnkpID0+IHtcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnQgPXJlcy5jb3VudDtcbiAgICAgICAgY29uc29sZS5sb2coIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50ICwnKysrKysrKysrKycpXG4gICAgICBcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgfSk7XG5cbiAgICAvLyB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YVdpdGhvdXRUb2tlbihlbmRwb2ludCxkYXRhKS5zdWJzY3JpYmUoKHJlczphbnkpID0+IHtcbiAgICAvLyAgIHRoaXMuZGF0YXNvdXJjZT1yZXMucmVzdWx0cy5yZXM7XG4gICAgLy8gICAvLyBjb25zb2xlLmxvZyhyZXMsJysrKycpXG4gICAgICBcbiAgICBcbiAgICAvLyB9LCBlcnJvciA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgLy8gfSk7XG5cbiAgfVxuICBcblxufVxuXG4iXX0=