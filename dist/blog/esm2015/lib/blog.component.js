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
        this.apiService.getDataWithoutToken(endpoint, data).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.datasource = res.results.res;
            // console.log(res,'+++')
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log('Oooops!');
        }));
    }
}
BlogComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-Blog',
                template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n\n        [datasource]=\"blogListConfig.datasource\" \n\n        [skip]=\"blogListConfig.listArray_skip\"\n\n        [modify_header_array]=\"blogListConfig.listArray_modify_header\" \n\n        [sourcedata]=\"blogListConfig.tableName\"\n\n        [statusarr]=\"blogListConfig.statusarr\" \n\n        [jwttoken]=\"blogListConfig.jwtToken\"\n\n        [apiurl]=\"blogListConfig.apiUrl\" \n\n        [editroute]=\"blogListConfig.editUrl\"\n\n        [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n\n        [date_search_source]=\"blogListConfig.date_search_source\"\n\n       [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n\n       [search_settings]=\"blogListConfig.search_settings\"\n\n       [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n\n       [sortdata]=\"sortdata\"\n\n       [detail_skip_array]=\"blogListConfig.blogcategory_detail_skip\"\n\n       [datacollection]=\"blogListConfig.datacollection\"\n\n        [date_search_source_count]=\"date_search_source_count\"\n        \n        [libdata]=\"libdata\"\n        \n       [limitcond]=\"limitcond\">\n       \n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                styles: [""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9ibG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzNDLE1BQU0sT0FBTyxhQUFhOzs7OztJQWlKeEIsWUFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQWhKakMsWUFBTyxHQUFLLEVBQUUsQ0FBQzs7UUFFdkIsYUFBUSxHQUFLO1lBQ1osTUFBTSxFQUFDLE1BQU07WUFDYixPQUFPLEVBQUMsVUFBVTtZQUNsQixTQUFTLEVBQUMsQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDO1NBQ25DLENBQUM7OztRQUdGLDZCQUF3QixHQUFNLENBQUMsQ0FBQzs7UUFFaEMsY0FBUyxHQUFLO1lBQ1osT0FBTyxFQUFDLEVBQUU7WUFDVixNQUFNLEVBQUMsQ0FBQztZQUNSLFdBQVcsRUFBQyxDQUFDO1NBQ2QsQ0FBQztRQUlGLFlBQU8sR0FBSztZQUNWLGFBQWEsRUFBQyxFQUFFO1lBQ2hCLGNBQWMsRUFBQyw2QkFBNkI7O1lBQzVDLGNBQWMsRUFBQyxLQUFLOztZQUVwQixZQUFZLEVBQUMsQ0FBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsb0JBQW9CLENBQUM7U0EyRGxGLENBQUE7UUFJQyxXQUFNLEdBQVMsS0FBSyxDQUFDOzs7O1FBS2QsVUFBSyxHQUFLLEVBQUUsQ0FBQztJQW9Ed0IsQ0FBQzs7Ozs7SUFuRDdDLElBQ0ksTUFBTSxDQUFDLFlBQWlCO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBQyxhQUFhLENBQUMsQ0FBQTtRQUNqRCxLQUFLLElBQUksQ0FB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VGhpcyBpcyB0aGUgY2F0ZWdvcnkgbGlzdGluZyAqKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcywgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1CbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdibG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgYmxvZGF0YTphbnk9W107XG4gLy8gc2VuZCBiYXNpYyBzb3J0IGRhdGFcbiBzb3J0ZGF0YTphbnk9e1xuICBcInR5cGVcIjonZGVzYycsXG4gIFwiZmllbGRcIjoncHJpb3JpdHknLFxuICBcIm9wdGlvbnNcIjpbJ3ByaW9yaXR5JywnYmxvZ3RpdGxlJ11cbn07XG4vLyBkYXRhY29sbGVjdGlvblxuLy8gZGF0YWNvbGxlY3Rpb246IGFueT0nZ2V0YmxvZ2xpc3RkYXRhJztcbmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudDogYW55PTA7XG4vLyBzZW5kIGJhc2ljIGxpbWl0IGRhdGFcbmxpbWl0Y29uZDphbnk9e1xuICBcImxpbWl0XCI6MTAsXG4gIFwic2tpcFwiOjAsXG4gIFwicGFnZWNvdW50XCI6MVxufTsgXG5cbmRhdGFzb3VyY2U6YW55O1xuXG5saWJkYXRhOmFueT17XG4gIGJhc2Vjb25kaXRpb246JycsXG4gIHVwZGF0ZWVuZHBvaW50OidzdGF0dXN1cGRhdGVmb3JibG9nY2F0ZWdvcnknLCAgICAgICAgLy8gdXBkYXRlIGVuZHBvaW50IHNldFxuICBoaWRlZWRpdGJ1dHRvbjpmYWxzZSwgLy8gKGhpZGUgZWRpdCBidXR0b24gKSBhbGwgdGhlc2UgYnV0dG9uIG9wdGlvbnMgYXJlIG9wdGlvbmFsIG5vdCBtYW5kYXRvcnlcblxuICB0YWJsZWhlYWRlcnM6WydibG9ndGl0bGUnLCdkZXNjcmlwdGlvbicsJ3ByaW9yaXR5Jywnc3RhdHVzJywnY3JlYXRlZG9uX2RhdGV0aW1lJ10sIC8vbm90IHJlcXVpcmVkICh0YWJsZSBoZWFkZXIgbmFtZSlcbi8vICAgY3VzdG9tYnV0dG9uczpbXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgbGFiZWw6XCJmYiBzZWFyY2ggd2l0aCBibG9nIHRpdGxlXCIsICAgICAgICAvLyBmYiBzZWFyY2ggYnV0dG9uIG5hbWVcbi8vICAgICAgICAgICBsaW5rOlwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NlYXJjaC90b3AvXCIsICAvLyBmYiBzZWFyY2ggbGlua1xuLy8gICAgICAgICAgIHR5cGU6J2V4dGVybmFsbGluaycsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBleHRlcm5hbCBsaW5rXG4vLyAgICAgICAgICAgcGFyYW06W3trZXk6J2Jsb2d0aXRsZScscToncSd9XSwgICAgICAgICAgICAgIC8vIHBhc3NlZCBwYXJhbWV0ZXIgbGlrZSBodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2VhcmNoL3RvcC8/cT1WUE9UaXBzJTIwWW91JTIwU2hvdWxkJTIwS25vdyUyMEZvciUyMEJ1eWluZyUyMFVzZWQlMjBDYXJzV0pZXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICAgIGxhYmVsOlwiRyBzZWFyY2ggd2l0aCBibG9nIHRpdGxlIEFDdGl2ZVwiLCAgICAgIC8vIGdvb2dsZSBzZWFyY2ggYnV0dG9uIG5hbWUgXG4vLyAgICAgICAgICAgbGluazpcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoXCIsICAgICAgICAgLy8gZ29vZ2xlIHNlYXJjaCBsaW5rXG4vLyAgICAgICAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJywgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4dGVybmFsIGxpbmtcbi8vICAgICAgICAgICBwYXJhbTpbe2tleTonYmxvZ3RpdGxlJyxxOidxJ30se2tleTonYXV0aG9yJyxxOidvcSd9XSwgLy9wYXNzZWQgcGFyYW1ldGVyIGxpa2UgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1WUE9UaXBzJTIwWW91JTIwU2hvdWxkJTIwS25vdyUyMEZvciUyMEJ1eWluZyUyMFVzZWQlMjBDYXJzV0pZJm9xPVltYXR0WlxuLy8gICAgICAgICAgIGNvbmQ6J3N0YXR1cycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25kaXRpb24gZm9yIHN0YXR1c1xuLy8gICAgICAgICAgIGNvbmR2YWw6IDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbmRpdGlvbiB2YWx1ZSBzdGF0dXM9MCAsIGlmIHZhbHVlPTEgYW5kIHN0YXR1cyA9MCB0aGVuIHRoZSBidXR0b24gd2lsbCBkaXNzYXBwZWFyXG4vLyAgICAgICB9LHtcbi8vICAgICAgICAgICBsYWJlbDpcIm1hc2sgYmxvZ1wiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFzayBibG9nIHNlYXJjaCBidXR0b24gbmFtZVxuLy8gICAgICAgICAgIGxpbms6XCJodHRwczovL21hc2stYmxvZzEuaW5mbHV4aXEuY29tL2Jsb2ctZGV0YWlsc1wiLCAgLy8gbWFzayBzZWFyY2ggbGlua1xuLy8gICAgICAgICAgIHR5cGU6J2V4dGVybmFsbGluaycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBleHRlcm5hbCBsaW5rXG4vLyAgICAgICAgICAgcGFyYW10eXBlOidhbmd1bGFyJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvd2luZyBmcm9udCBlbmQgXG4vLyAgICAgICAgICAgcGFyYW06WydibG9ndGl0bGUnLCdfaWQnXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFzc2VkIHRvIHBhcmFtZXRlciB3aXRoIGJsb2cgdGl0bGUgYW5kIGlkXG4vLyAgICAgICAgICAgY29uZDonc3RhdHVzJywgLy8gY29uZGl0aW9uIGZvciBzdGF0dXNcbi8vICAgICAgICAgICBjb25kdmFsOiAwICAgICAgLy8gY29uZGl0aW9uIHZhbHVlIHN0YXR1cz0wICwgaWYgdmFsdWU9MSBhbmQgc3RhdHVzID0wIHRoZW4gdGhlIGJ1dHRvbiB3aWxsIGRpc3NhcHBlYXJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgbGFiZWw6XCIgZmIgcHJvZmlsZSBcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZiIHByb2ZpbGUgYnV0dG9uIFxuLy8gICAgICAgICAgIGxpbms6XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGViYXNpc2thcjAwN1wiLCAgICAgLy8gcHJvZmlsZSBsaW5rXG4vLyAgICAgICAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJ1xuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgICBsYWJlbDpcIiBmYiBwcm9maWxlIGZvciBpbmFjdGl2ZVwiLCAgICAgICAgICAgICAgICAgIC8vIGZiIHByb2ZpbGUgZm9yIGluYWN0aXZlIHN0YXR1c1xuLy8gICAgICAgICAgIGxpbms6XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGViYXNpc2thcjAwN1wiLCAgICAgLy8gcHJvZmlsZSBsaW5rXG4vLyAgICAgICAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJyxcbi8vICAgICAgICAgICBjb25kOidzdGF0dXMnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbmRpdGlvbiBmb3Igc3RhdHVzXG4vLyAgICAgICAgICAgY29uZHZhbDowICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25kaXRpb24gdmFsdWUgc3RhdHVzPTAgLCBpZiB2YWx1ZT0xIGFuZCBzdGF0dXMgPTAgdGhlbiB0aGUgYnV0dG9uIHdpbGwgZGlzc2FwcGVhclxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgICBsYWJlbDpcIiBmYiBwcm9maWxlIGZvciBhY3RpdmVcIiwgICAgICAgICAgICAgICAgICAgICAgIC8vIGZiIHByb2ZpbGUgZm9yIGFjdGl2ZSBzdGF0dXNcbi8vICAgICAgICAgICBsaW5rOlwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RlYmFzaXNrYXIwMDdcIiwgICAgICAgIC8vIHByb2ZpbGUgbGlua1xuLy8gICAgICAgICAgIHR5cGU6J2V4dGVybmFsbGluaycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBleHRlcm5hbCBsaW5rXG4vLyAgICAgICAgICAgY29uZDonc3RhdHVzJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uZGl0aW9uIGZvciBzdGF0dXNcbi8vICAgICAgICAgICBjb25kdmFsOjEgLy9jb25kaXRpb24gdmFsdWUgc3RhdHVzPTEgaWYgdmFsdWU9MCBhbmQgc3RhdHVzID0xIHRoZW4gdGhlIGJ1dHRvbiB3aWxsIGRpc3NhcHBlYXJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgbGFiZWw6XCJzZWUgYnJhbmRcIiwgICAgICAgICAgICAvLyBzZWUgYnJhbmQgYnV0dG9uXG4vLyAgICAgICAgICAgcm91dGU6XCJicmFuZFwiLCAgICAgICAgICAgICAgIC8vIGdvIHRvIGJyYW5kIHJvdXRlXG4vLyAgICAgICAgICAgdHlwZTonaW50ZXJuYWxsaW5rJywgICAgICAgICAgLy8gc2FtZSBhcHBsaWNhdGlvbiBidXQgZGlmZmVyZW50IHBhZ2UgLlxuLy8gICAgICAgICAgIGNvbmQ6J3N0YXR1cycsICAgICAgICAgICAgICAgICAvLyBjb25kaXRpb24gZm9yIHN0YXR1c1xuLy8gICAgICAgICAgIGNvbmR2YWw6MCAgICAgICAgICAgICAgICAgICAgIC8vIGNvbmRpdGlvbiB2YWx1ZSBzdGF0dXM9MCAsIGlmIHZhbHVlPTEgYW5kIHN0YXR1cyA9MCB0aGVuIHRoZSBidXR0b24gd2lsbCBkaXNzYXBwZWFyXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICAgIGxhYmVsOlwic2VlIGJyYW5kIHdpdGggcGFyYW1cIiwgICAgIC8vIHNlZSBicmFuZCBidXR0b24gd2l0aCBwYXJhbVxuLy8gICAgICAgICAgIHJvdXRlOlwiYnJhbmRcIiwgICAgICAgICAgICAgICAgICAgIC8vIGdvIHRvIGJyYW5kIHJvdXRlXG4vLyAgICAgICAgICAgdHlwZTonaW50ZXJuYWxsaW5rJywgICAgICAgICAgICAgLy8gc2FtZSBhcHBsaWNhdGlvbiBidXQgZGlmZmVyZW50IHBhZ2Ugd2l0aCBwYXJhbXMgLlxuLy8gICAgICAgICAgIGNvbmQ6J3N0YXR1cycsICAgICAgICAgICAgICAgICAgICAvLyBjb25kaXRpb24gZm9yIHN0YXR1c1xuLy8gICAgICAgICAgIGNvbmR2YWw6MCwgICAgICAgICAgICAgICAgICAgICAgIC8vY29uZGl0aW9uIHZhbHVlIHN0YXR1cz0wICwgaWYgdmFsdWU9MSBhbmQgc3RhdHVzID0wIHRoZW4gdGhlIGJ1dHRvbiB3aWxsIGRpc3NhcHBlYXJcbi8vICAgICAgICAgICBwYXJhbTpbJ19pZCcsJ2Jsb2d0aXRsZSddLCAgICAvLyBwYXNzZWQgd2l0aCBwYXJhbXNcbi8vICAgICAgIH1cbi8vICAgXVxufVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBcbiAgYmxvZ0xpc3RDb25maWc6YW55O1xuICBsb2FkZXI6Ym9vbGVhbj1mYWxzZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBwdWJsaWMgdmFsdWU6YW55PVt7dmFsOicnLCduYW1lJzonJ31dO1xuICBwdWJsaWMgdmFsdWU6YW55PVtdO1xuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7IFxuICAgIGNvbnNvbGUubG9nKHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLCc9PT0rKysrKz09PScpXG4gICAgIGZvciAobGV0IGkgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UpIHtcbiAgICAgICB0aGlzLnZhbHVlLnB1c2goXG4gICAgICAgICB7ICduYW1lJzogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0ucGFyZW50Y2F0ZWdvcnluYW1lLCB2YWw6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLnBhcmVudGNhdGVnb3J5bmFtZSB9XG4gICAgICAgICApO1xuICAgfVxuXG4gICAgdGhpcy5ibG9nTGlzdENvbmZpZyA9IHtcbiAgICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXG4gICAgICBlbmRwb2ludCA6cmVjZWl2ZWREYXRhLmVuZHBvaW50LFxuICAgICAgZW5kcG9pbnRjOnJlY2VpdmVkRGF0YS5lbmRwb2ludGMsXG4gICAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXG4gICAgICBkYXRhY29sbGVjdGlvbjpyZWNlaXZlZERhdGEuZGF0YWNvbGxlY3Rpb24sXG4gICAgICBkYXRhc291cmNlOnJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgLy8gdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgYmxvZ2NhdGVnb3J5X2RldGFpbF9za2lwOltcIl9pZFwiLFwiY3JlYXRlZG9uX2RhdGV0aW1lXCIsXCJwYXJlbnRfaWRcIl0sXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcInVwZGF0ZWRfYXRcIixcImltYWdlXCIsXCJkZXNjcmlwdGlvblwiLFwicGFyZW50Y2F0ZWdvcnluYW1lX3NlYXJjaFwiLFwiYmxvZ3RpdGxlX3NlYXJjaFwiLFwiYmxvZ3RpdGxlc2VhcmNoXCIsXCJjcmVhdGVkb25fZGF0ZXRpbWVcIl0sXG4gICAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjogeyBcImJsb2d0aXRsZVwiOlwiQ2F0ZWdvcnkgTmFtZVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb25cIiwgXCJwcmlvcml0eVwiOiBcIlByaW9yaXR5XCIsIFwic3RhdHVzXCI6IFwiU3RhdHVzXCIgLFwicGFyZW50Y2F0ZWdvcnluYW1lXCI6XCJQYXJlbnQgQ2F0ZWdvcnkgTmFtZVwiLFwiYmxvZ2NhdFwiOlwiQmxvZyBDYXRlZ29yeVwiLFwiZGF0ZVwiOlwiRGF0ZVwiLFwiY3JlYXRlZG9uX2RhdGV0aW1lXCI6XCJEYXRlXCIsXCJjcmVhdGVkb24gZGF0ZXRpbWVcIjpcIkRhdGVcIn0sXG4gICAgICAvLyBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxuICAgICAgc3RhdHVzYXJyOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV0sXG4gICAgICB1cGRhdGV1cmw6IHJlY2VpdmVkRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxuICAgICAgand0VG9rZW46IHJlY2VpdmVkRGF0YS5qd3RUb2tlbixcbiAgICAgIGRlbGV0ZUVuZFBvaW50OiByZWNlaXZlZERhdGEuZGVsZXRlRW5kUG9pbnQsXG4gICAgICBkYXRlX3NlYXJjaF9zb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRlX3NlYXJjaF9zb3VyY2UsXG5cbiAgICAgIHNlYXJjaF9zZXR0aW5nczp7XG4gICAgICAgIGRhdGVzZWFyY2g6W3tzdGFydGRhdGVsYWJlbDpcIlN0YXJ0IERhdGVcIixlbmRkYXRlbGFiZWw6XCJFbmQgRGF0ZVwiLHN1Ym1pdDpcIlNlYXJjaFwiLCAgZmllbGQ6XCJjcmVhdGVkb25fZGF0ZXRpbWVcIn1dLFxuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggYnkgQ2F0ZWdvcnkgTmFtZVwiLCBmaWVsZDogJ2Jsb2d0aXRsZScgfV0sXG4gICAgICAgIHNlbGVjdHNlYXJjaDogW1xuICAgICAgICAgIHsgbGFiZWw6ICdTZWFyY2ggQnkgU3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLHZhbHVlczogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dXG4gICAgICAgIH0sXG4gICAgICAgICAgLy8ge2xhYmVsOlwiU2VhcmNoIEJ5IFBhcmVudCBDYXRlZ29yeSBOYW1lXCIsZmllbGQ6J3BhcmVudGNhdGVnb3J5bmFtZScsdmFsdWVzOnRoaXMudmFsdWV9XG4gICAgICAgIF1cblxuICAgICAgICAvLyBzZWFyY2g6W3tsYWJlbDpcIlNlYXJjaCBCeSBQYXJlbnQgQ2F0ZWdvcnlcIixmaWVsZDoncGFyZW50Y2F0ZWdvcnluYW1lJyx2YWx1ZXM6dGhpcy52YWx1ZX1dXG4gICAgICB9XG4gICAgICAvLyAgLypTaG93aW5nIEltYWdlIGluIHRoZSBNb2RhbCovXG4gICAgICAvLyAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFt7XG4gICAgICAvLyAgIGtleTogXCJpbWFnZVwiLFxuICAgICAgLy8gICB2YWx1ZTogJ2ltYWdlJyxcbiAgICAgIC8vICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZXN0aW1vbmlhbC8nICAgICAgICAgICAgIC8vIEltYWdlIHBhdGggXG4gICAgICAvLyB9XSxcbiAgICAgIFxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpU2VydmljZTpBcGlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgZW5kcG9pbnQ9dGhpcy5ibG9nTGlzdENvbmZpZy5lbmRwb2ludDtcbiAgICBsZXQgZW5kcG9pbnRjPXRoaXMuYmxvZ0xpc3RDb25maWcuZW5kcG9pbnRjO1xuXG4gICAgbGV0IGRhdGE6YW55PXtcbiAgICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgICAgICBcImxpbWl0XCI6MTAsXG4gICAgICAgICAgICBcInNraXBcIjowXG4gICAgICAgIH0sXG4gICAgc29ydDp7XG4gICAgICAgIFwidHlwZVwiOidkZXNjJyxcbiAgICAgICAgXCJmaWVsZFwiOidwcmlvcml0eSdcbiAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGFXaXRob3V0VG9rZW4oZW5kcG9pbnRjLCBkYXRhKS5zdWJzY3JpYmUoKHJlczphbnkpID0+IHtcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnQgPXJlcy5jb3VudDtcbiAgICAgICAgY29uc29sZS5sb2coIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50ICwnKysrKysrKysrKycpXG4gICAgICBcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YVdpdGhvdXRUb2tlbihlbmRwb2ludCxkYXRhKS5zdWJzY3JpYmUoKHJlczphbnkpID0+IHtcbiAgICAgIHRoaXMuZGF0YXNvdXJjZT1yZXMucmVzdWx0cy5yZXM7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMsJysrKycpXG4gICAgICBcbiAgICBcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgfSk7XG5cbiAgfVxuICBcblxufVxuXG4iXX0=