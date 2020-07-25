/**
 * @fileoverview added by tsickle
 * Generated from: lib/blog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** This is the category listing **/
import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';
var BlogComponent = /** @class */ (function () {
    // ====================================================================================================
    function BlogComponent(apiService) {
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
    Object.defineProperty(BlogComponent.prototype, "config", {
        set: /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            console.log(receivedData.datasource, '===+++++===');
            for (var i in receivedData.datasource) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BlogComponent.prototype.ngOnInit = /**
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
            _this.date_search_source_count = res.count;
            console.log(_this.date_search_source_count, '++++++++++');
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log('Oooops!');
        }));
        // this.apiService.getDataWithoutToken(endpoint,data).subscribe((res:any) => {
        //   this.datasource=res.results.res;
        //   // console.log(res,'+++')
        // }, error => {
        //     console.log('Oooops!');
        // });
    };
    BlogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-Blog',
                    template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\n\n        [datasource]=\"blogListConfig.datasource\" \n\n        [skip]=\"blogListConfig.listArray_skip\"\n\n        [modify_header_array]=\"blogListConfig.listArray_modify_header\" \n\n        [sourcedata]=\"blogListConfig.tableName\"\n\n        [statusarr]=\"blogListConfig.statusarr\" \n\n        [jwttoken]=\"blogListConfig.jwtToken\"\n\n        [apiurl]=\"blogListConfig.apiUrl\" \n\n        [editroute]=\"blogListConfig.editUrl\"\n\n        [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\n\n        [date_search_source]=\"blogListConfig.date_search_source\"\n\n       [date_search_endpoint]=\"blogListConfig.listEndPoint\"\n\n       [search_settings]=\"blogListConfig.search_settings\"\n\n       [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\"\n\n       [sortdata]=\"sortdata\"\n\n       [detail_skip_array]=\"blogListConfig.blogcategory_detail_skip\"\n\n       [datacollection]=\"blogListConfig.datacollection\"\n\n        [date_search_source_count]=\"date_search_source_count\"\n        \n        [libdata]=\"libdata\"\n        \n       [limitcond]=\"limitcond\">\n       \n    </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                    styles: [".formfilterdiv .mat-dialog-content .mat-card{flex-wrap:wrap}.formfilterdiv .mat-card-header{flex:1 1 100%}.formfilterdiv #dialogdatavd_array p{position:relative;padding-bottom:56.25%;height:0;overflow-y:scroll}.formfilterdiv #dialogdatavd_array p iframe{position:absolute;top:0;left:0;width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    BlogComponent.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    BlogComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return BlogComponent;
}());
export { BlogComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9ibG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBa0tFLHVHQUF1RztJQUV2Ryx1QkFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQTlKakMsWUFBTyxHQUFLLEVBQUUsQ0FBQzs7UUFFdkIsYUFBUSxHQUFLO1lBQ1osTUFBTSxFQUFDLE1BQU07WUFDYixPQUFPLEVBQUMsVUFBVTtZQUNsQixTQUFTLEVBQUMsQ0FBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLGVBQWUsRUFBQyxvQkFBb0IsQ0FBQztTQUN4RSxDQUFDOzs7UUFHRiw2QkFBd0IsR0FBTSxDQUFDLENBQUM7O1FBRWhDLGNBQVMsR0FBSztZQUNaLE9BQU8sRUFBQyxFQUFFO1lBQ1YsTUFBTSxFQUFDLENBQUM7WUFDUixXQUFXLEVBQUMsQ0FBQztTQUNkLENBQUM7UUFJRixZQUFPLEdBQUs7WUFDVixhQUFhLEVBQUMsRUFBRTtZQUNoQixjQUFjLEVBQUMsNkJBQTZCOztZQUM1QyxjQUFjLEVBQUMsS0FBSzs7WUFFcEIsa0JBQWtCLEVBQUUsZUFBZTtZQUNuQyxrQkFBa0IsRUFBRSxlQUFlO1lBRW5DLFlBQVksRUFBQyxDQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxvQkFBb0IsRUFBQyxlQUFlLENBQUM7O1lBQ2pHLG1CQUFtQixFQUFDO2dCQUNsQixFQUFDLEdBQUcsRUFBQyxXQUFXLEVBQUMsR0FBRyxFQUFDLGVBQWUsRUFBQztnQkFDckMsRUFBQyxHQUFHLEVBQUMsYUFBYSxFQUFDLEdBQUcsRUFBQyxhQUFh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U0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsdXBEQUFrQzs7aUJBRW5DOzs7O2dCQU5RLFVBQVU7Ozt5QkFtSGhCLEtBQUs7O0lBd0ZSLG9CQUFDO0NBQUEsQUF6TUQsSUF5TUM7U0FwTVksYUFBYTs7O0lBQ3hCLGdDQUFzQjs7SUFFdkIsaUNBSUM7O0lBR0YsaURBQWdDOztJQUVoQyxrQ0FJRTs7SUFFRixtQ0FBZTs7SUFFZixnQ0E4RUM7O0lBR0MsdUNBQW1COztJQUNuQiwrQkFBcUI7O0lBS3JCLDhCQUFvQjs7SUFvRFIsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiogVGhpcyBpcyB0aGUgY2F0ZWdvcnkgbGlzdGluZyAqKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcywgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1CbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdibG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0eWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgYmxvZGF0YTphbnk9W107XG4gLy8gc2VuZCBiYXNpYyBzb3J0IGRhdGFcbiBzb3J0ZGF0YTphbnk9e1xuICBcInR5cGVcIjonZGVzYycsXG4gIFwiZmllbGRcIjoncHJpb3JpdHknLFxuICBcIm9wdGlvbnNcIjpbJ3ByaW9yaXR5JywnYmxvZ3RpdGxlJywnYmxvZ2NhdF9jb3VudCcsJ3BhcmVudGNhdGVnb3J5bmFtZSddXG59O1xuLy8gZGF0YWNvbGxlY3Rpb25cbi8vIGRhdGFjb2xsZWN0aW9uOiBhbnk9J2dldGJsb2dsaXN0ZGF0YSc7XG5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnQ6IGFueT0wO1xuLy8gc2VuZCBiYXNpYyBsaW1pdCBkYXRhXG5saW1pdGNvbmQ6YW55PXtcbiAgXCJsaW1pdFwiOjEwLFxuICBcInNraXBcIjowLFxuICBcInBhZ2Vjb3VudFwiOjFcbn07IFxuXG5kYXRhc291cmNlOmFueTtcblxubGliZGF0YTphbnk9e1xuICBiYXNlY29uZGl0aW9uOicnLFxuICB1cGRhdGVlbmRwb2ludDonc3RhdHVzdXBkYXRlZm9yYmxvZ2NhdGVnb3J5JywgICAgICAgIC8vIHVwZGF0ZSBlbmRwb2ludCBzZXRcbiAgaGlkZWVkaXRidXR0b246ZmFsc2UsIC8vIChoaWRlIGVkaXQgYnV0dG9uICkgYWxsIHRoZXNlIGJ1dHRvbiBvcHRpb25zIGFyZSBvcHRpb25hbCBub3QgbWFuZGF0b3J5XG5cbiAgdXBkYXRlZW5kcG9pbnRtYW55OiAnYmxvZ2NhdHVwZGF0ZScsXG4gIGRlbGV0ZWVuZHBvaW50bWFueTogJ2Jsb2djYXRkZWxldGUnLFxuXG4gIHRhYmxlaGVhZGVyczpbJ2Jsb2d0aXRsZScsJ2Rlc2NyaXB0aW9uJywncHJpb3JpdHknLCdzdGF0dXMnLCdwYXJlbnRjYXRlZ29yeW5hbWUnLCdibG9nY2F0X2NvdW50J10sIC8vbm90IHJlcXVpcmVkICh0YWJsZSBoZWFkZXIgbmFtZSlcbiAgZGV0YWlsdmlld19vdmVycmlkZTpbXG4gICAge2tleTpcImJsb2d0aXRsZVwiLHZhbDpcIkNhdGVnb3J5IE5hbWVcIn0sXG4gICAge2tleTpcImRlc2NyaXB0aW9uXCIsdmFsOlwiRGVzY3JpcHRpb25cIn0sXG4gICAge2tleTpcInByaW9yaXR5XCIsdmFsOlwiUHJpb3JpdHlcIn0sXG4gICAge2tleTpcInN0YXR1c1wiLHZhbDpcIlN0YXR1c1wifSxcbiAgICB7a2V5OlwiYmxvZ2NhdF9jb3VudFwiLHZhbDpcIkNhdGVnb3J5IENvdW50XCJ9LFxuICAgIHtrZXk6XCJwYXJlbnRjYXRlZ29yeW5hbWVcIix2YWw6XCJQYXJlbnQgQ2F0ZWdvcnkgTmFtZVwifSxcbiAgICB7a2V5OlwiYmxvZ2NhdF9jb3VudFwiLHZhbDpcIkNhdGVnb3J5IENvdW50XCJ9XG5dLCAvLyBvcHRpb25hbFxuXG5cbi8vICAgY3VzdG9tYnV0dG9uczpbXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgbGFiZWw6XCJmYiBzZWFyY2ggd2l0aCBibG9nIHRpdGxlXCIsICAgICAgICAvLyBmYiBzZWFyY2ggYnV0dG9uIG5hbWVcbi8vICAgICAgICAgICBsaW5rOlwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NlYXJjaC90b3AvXCIsICAvLyBmYiBzZWFyY2ggbGlua1xuLy8gICAgICAgICAgIHR5cGU6J2V4dGVybmFsbGluaycsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBleHRlcm5hbCBsaW5rXG4vLyAgICAgICAgICAgcGFyYW06W3trZXk6J2Jsb2d0aXRsZScscToncSd9XSwgICAgICAgICAgICAgIC8vIHBhc3NlZCBwYXJhbWV0ZXIgbGlrZSBodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2VhcmNoL3RvcC8/cT1WUE9UaXBzJTIwWW91JTIwU2hvdWxkJTIwS25vdyUyMEZvciUyMEJ1eWluZyUyMFVzZWQlMjBDYXJzV0pZXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICAgIGxhYmVsOlwiRyBzZWFyY2ggd2l0aCBibG9nIHRpdGxlIEFDdGl2ZVwiLCAgICAgIC8vIGdvb2dsZSBzZWFyY2ggYnV0dG9uIG5hbWUgXG4vLyAgICAgICAgICAgbGluazpcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoXCIsICAgICAgICAgLy8gZ29vZ2xlIHNlYXJjaCBsaW5rXG4vLyAgICAgICAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJywgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4dGVybmFsIGxpbmtcbi8vICAgICAgICAgICBwYXJhbTpbe2tleTonYmxvZ3RpdGxlJyxxOidxJ30se2tleTonYXV0aG9yJyxxOidvcSd9XSwgLy9wYXNzZWQgcGFyYW1ldGVyIGxpa2UgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1WUE9UaXBzJTIwWW91JTIwU2hvdWxkJTIwS25vdyUyMEZvciUyMEJ1eWluZyUyMFVzZWQlMjBDYXJzV0pZJm9xPVltYXR0WlxuLy8gICAgICAgICAgIGNvbmQ6J3N0YXR1cycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25kaXRpb24gZm9yIHN0YXR1c1xuLy8gICAgICAgICAgIGNvbmR2YWw6IDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbmRpdGlvbiB2YWx1ZSBzdGF0dXM9MCAsIGlmIHZhbHVlPTEgYW5kIHN0YXR1cyA9MCB0aGVuIHRoZSBidXR0b24gd2lsbCBkaXNzYXBwZWFyXG4vLyAgICAgICB9LHtcbi8vICAgICAgICAgICBsYWJlbDpcIm1hc2sgYmxvZ1wiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFzayBibG9nIHNlYXJjaCBidXR0b24gbmFtZVxuLy8gICAgICAgICAgIGxpbms6XCJodHRwczovL21hc2stYmxvZzEuaW5mbHV4aXEuY29tL2Jsb2ctZGV0YWlsc1wiLCAgLy8gbWFzayBzZWFyY2ggbGlua1xuLy8gICAgICAgICAgIHR5cGU6J2V4dGVybmFsbGluaycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBleHRlcm5hbCBsaW5rXG4vLyAgICAgICAgICAgcGFyYW10eXBlOidhbmd1bGFyJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvd2luZyBmcm9udCBlbmQgXG4vLyAgICAgICAgICAgcGFyYW06WydibG9ndGl0bGUnLCdfaWQnXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFzc2VkIHRvIHBhcmFtZXRlciB3aXRoIGJsb2cgdGl0bGUgYW5kIGlkXG4vLyAgICAgICAgICAgY29uZDonc3RhdHVzJywgLy8gY29uZGl0aW9uIGZvciBzdGF0dXNcbi8vICAgICAgICAgICBjb25kdmFsOiAwICAgICAgLy8gY29uZGl0aW9uIHZhbHVlIHN0YXR1cz0wICwgaWYgdmFsdWU9MSBhbmQgc3RhdHVzID0wIHRoZW4gdGhlIGJ1dHRvbiB3aWxsIGRpc3NhcHBlYXJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgbGFiZWw6XCIgZmIgcHJvZmlsZSBcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZiIHByb2ZpbGUgYnV0dG9uIFxuLy8gICAgICAgICAgIGxpbms6XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGViYXNpc2thcjAwN1wiLCAgICAgLy8gcHJvZmlsZSBsaW5rXG4vLyAgICAgICAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJ1xuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgICBsYWJlbDpcIiBmYiBwcm9maWxlIGZvciBpbmFjdGl2ZVwiLCAgICAgICAgICAgICAgICAgIC8vIGZiIHByb2ZpbGUgZm9yIGluYWN0aXZlIHN0YXR1c1xuLy8gICAgICAgICAgIGxpbms6XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGViYXNpc2thcjAwN1wiLCAgICAgLy8gcHJvZmlsZSBsaW5rXG4vLyAgICAgICAgICAgdHlwZTonZXh0ZXJuYWxsaW5rJyxcbi8vICAgICAgICAgICBjb25kOidzdGF0dXMnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbmRpdGlvbiBmb3Igc3RhdHVzXG4vLyAgICAgICAgICAgY29uZHZhbDowICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25kaXRpb24gdmFsdWUgc3RhdHVzPTAgLCBpZiB2YWx1ZT0xIGFuZCBzdGF0dXMgPTAgdGhlbiB0aGUgYnV0dG9uIHdpbGwgZGlzc2FwcGVhclxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgICBsYWJlbDpcIiBmYiBwcm9maWxlIGZvciBhY3RpdmVcIiwgICAgICAgICAgICAgICAgICAgICAgIC8vIGZiIHByb2ZpbGUgZm9yIGFjdGl2ZSBzdGF0dXNcbi8vICAgICAgICAgICBsaW5rOlwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RlYmFzaXNrYXIwMDdcIiwgICAgICAgIC8vIHByb2ZpbGUgbGlua1xuLy8gICAgICAgICAgIHR5cGU6J2V4dGVybmFsbGluaycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBleHRlcm5hbCBsaW5rXG4vLyAgICAgICAgICAgY29uZDonc3RhdHVzJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uZGl0aW9uIGZvciBzdGF0dXNcbi8vICAgICAgICAgICBjb25kdmFsOjEgLy9jb25kaXRpb24gdmFsdWUgc3RhdHVzPTEgaWYgdmFsdWU9MCBhbmQgc3RhdHVzID0xIHRoZW4gdGhlIGJ1dHRvbiB3aWxsIGRpc3NhcHBlYXJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgbGFiZWw6XCJzZWUgYnJhbmRcIiwgICAgICAgICAgICAvLyBzZWUgYnJhbmQgYnV0dG9uXG4vLyAgICAgICAgICAgcm91dGU6XCJicmFuZFwiLCAgICAgICAgICAgICAgIC8vIGdvIHRvIGJyYW5kIHJvdXRlXG4vLyAgICAgICAgICAgdHlwZTonaW50ZXJuYWxsaW5rJywgICAgICAgICAgLy8gc2FtZSBhcHBsaWNhdGlvbiBidXQgZGlmZmVyZW50IHBhZ2UgLlxuLy8gICAgICAgICAgIGNvbmQ6J3N0YXR1cycsICAgICAgICAgICAgICAgICAvLyBjb25kaXRpb24gZm9yIHN0YXR1c1xuLy8gICAgICAgICAgIGNvbmR2YWw6MCAgICAgICAgICAgICAgICAgICAgIC8vIGNvbmRpdGlvbiB2YWx1ZSBzdGF0dXM9MCAsIGlmIHZhbHVlPTEgYW5kIHN0YXR1cyA9MCB0aGVuIHRoZSBidXR0b24gd2lsbCBkaXNzYXBwZWFyXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICAgIGxhYmVsOlwic2VlIGJyYW5kIHdpdGggcGFyYW1cIiwgICAgIC8vIHNlZSBicmFuZCBidXR0b24gd2l0aCBwYXJhbVxuLy8gICAgICAgICAgIHJvdXRlOlwiYnJhbmRcIiwgICAgICAgICAgICAgICAgICAgIC8vIGdvIHRvIGJyYW5kIHJvdXRlXG4vLyAgICAgICAgICAgdHlwZTonaW50ZXJuYWxsaW5rJywgICAgICAgICAgICAgLy8gc2FtZSBhcHBsaWNhdGlvbiBidXQgZGlmZmVyZW50IHBhZ2Ugd2l0aCBwYXJhbXMgLlxuLy8gICAgICAgICAgIGNvbmQ6J3N0YXR1cycsICAgICAgICAgICAgICAgICAgICAvLyBjb25kaXRpb24gZm9yIHN0YXR1c1xuLy8gICAgICAgICAgIGNvbmR2YWw6MCwgICAgICAgICAgICAgICAgICAgICAgIC8vY29uZGl0aW9uIHZhbHVlIHN0YXR1cz0wICwgaWYgdmFsdWU9MSBhbmQgc3RhdHVzID0wIHRoZW4gdGhlIGJ1dHRvbiB3aWxsIGRpc3NhcHBlYXJcbi8vICAgICAgICAgICBwYXJhbTpbJ19pZCcsJ2Jsb2d0aXRsZSddLCAgICAvLyBwYXNzZWQgd2l0aCBwYXJhbXNcbi8vICAgICAgIH1cbi8vICAgXVxufVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZGVjbGFyYXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBcbiAgYmxvZ0xpc3RDb25maWc6YW55O1xuICBsb2FkZXI6Ym9vbGVhbj1mYWxzZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBwdWJsaWMgdmFsdWU6YW55PVt7dmFsOicnLCduYW1lJzonJ31dO1xuICBwdWJsaWMgdmFsdWU6YW55PVtdO1xuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7IFxuICAgIGNvbnNvbGUubG9nKHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLCc9PT0rKysrKz09PScpXG4gICAgIGZvciAobGV0IGkgaW4gcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UpIHtcbiAgICAgICB0aGlzLnZhbHVlLnB1c2goXG4gICAgICAgICB7ICduYW1lJzogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2VbaV0ucGFyZW50Y2F0ZWdvcnluYW1lLCB2YWw6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlW2ldLnBhcmVudGNhdGVnb3J5bmFtZSB9XG4gICAgICAgICApO1xuICAgfVxuXG4gICAgdGhpcy5ibG9nTGlzdENvbmZpZyA9IHtcbiAgICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXG4gICAgICBlbmRwb2ludCA6cmVjZWl2ZWREYXRhLmVuZHBvaW50LFxuICAgICAgZW5kcG9pbnRjOnJlY2VpdmVkRGF0YS5lbmRwb2ludGMsXG4gICAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXG4gICAgICBkYXRhY29sbGVjdGlvbjpyZWNlaXZlZERhdGEuZGF0YWNvbGxlY3Rpb24sXG4gICAgICBkYXRhc291cmNlOnJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgLy8gdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgYmxvZ2NhdGVnb3J5X2RldGFpbF9za2lwOltcIl9pZFwiLFwiY3JlYXRlZG9uX2RhdGV0aW1lXCIsXCJwYXJlbnRfaWRcIiwnaWQnXSxcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwidXBkYXRlZF9hdFwiLFwiaW1hZ2VcIixcImRlc2NyaXB0aW9uXCIsXCJwYXJlbnRjYXRlZ29yeW5hbWVfc2VhcmNoXCIsXCJibG9ndGl0bGVfc2VhcmNoXCIsXCJibG9ndGl0bGVzZWFyY2hcIixcImNyZWF0ZWRvbl9kYXRldGltZVwiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwiYmxvZ3RpdGxlXCI6XCJDYXRlZ29yeSBOYW1lXCIsIFwicHJpb3JpdHlcIjogXCJQcmlvcml0eVwiLCBcInN0YXR1c1wiOiBcIlN0YXR1c1wiICxcInBhcmVudGNhdGVnb3J5bmFtZVwiOlwiUGFyZW50IENhdGVnb3J5IE5hbWVcIixcImJsb2djYXRfY291bnRcIjpcIkNhdGVnb3J5IENvdW50XCIsXCJkYXRlXCI6XCJEYXRlXCIsJ2Rlc2NyaXB0aW9uJzonRGVzY3JpcHRpb24nfSxcbiAgICAgIC8vIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgIGRhdGVfc2VhcmNoX3NvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGVfc2VhcmNoX3NvdXJjZSxcblxuICAgICAgc2VhcmNoX3NldHRpbmdzOntcbiAgICAgICAgLy8gZGF0ZXNlYXJjaDpbe3N0YXJ0ZGF0ZWxhYmVsOlwiU3RhcnQgRGF0ZVwiLGVuZGRhdGVsYWJlbDpcIkVuZCBEYXRlXCIsc3VibWl0OlwiU2VhcmNoXCIsICBmaWVsZDpcImNyZWF0ZWRvbl9kYXRldGltZVwifV0sXG4gICAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBieSBDYXRlZ29yeSBOYW1lXCIsIGZpZWxkOiAnYmxvZ3RpdGxlJyB9LHsgbGFiZWw6IFwiU2VhcmNoIGJ5IFBhcmVudCBDYXRlZ29yeSBOYW1lXCIsIGZpZWxkOiAncGFyZW50Y2F0ZWdvcnluYW1lJyB9XSxcbiAgICAgICAgc2VsZWN0c2VhcmNoOiBbXG4gICAgICAgICAgeyBsYWJlbDogJ1NlYXJjaCBCeSBTdGF0dXMnLCBmaWVsZDogJ3N0YXR1cycsdmFsdWVzOiBbeyB2YWw6IDEsIG5hbWU6IFwiQWN0aXZlXCIgfSwgeyB2YWw6IDAsIG5hbWU6ICdJbmFjdGl2ZScgfV1cbiAgICAgICAgfSxcbiAgICAgICAgICAvLyB7bGFiZWw6XCJTZWFyY2ggQnkgUGFyZW50IENhdGVnb3J5IE5hbWVcIixmaWVsZDoncGFyZW50Y2F0ZWdvcnluYW1lJyx2YWx1ZXM6dGhpcy52YWx1ZX1cbiAgICAgICAgXVxuXG4gICAgICAgIC8vIHNlYXJjaDpbe2xhYmVsOlwiU2VhcmNoIEJ5IFBhcmVudCBDYXRlZ29yeVwiLGZpZWxkOidwYXJlbnRjYXRlZ29yeW5hbWUnLHZhbHVlczp0aGlzLnZhbHVlfV1cbiAgICAgIH1cbiAgICAgIC8vICAvKlNob3dpbmcgSW1hZ2UgaW4gdGhlIE1vZGFsKi9cbiAgICAgIC8vICBwZW5kaW5nbW9kZWxhcHBsaWNhdGlvbmFycmF5X2RldGFpbF9kYXRhdHlwZTogW3tcbiAgICAgIC8vICAga2V5OiBcImltYWdlXCIsXG4gICAgICAvLyAgIHZhbHVlOiAnaW1hZ2UnLFxuICAgICAgLy8gICBmaWxldXJsOiAnaHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9jcm1maWxlcy5pbmZsdXhob3N0c2VydmVyL3Rlc3RpbW9uaWFsLycgICAgICAgICAgICAgLy8gSW1hZ2UgcGF0aCBcbiAgICAgIC8vIH1dLFxuICAgICAgXG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGlTZXJ2aWNlOkFwaVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBlbmRwb2ludD10aGlzLmJsb2dMaXN0Q29uZmlnLmVuZHBvaW50O1xuICAgIGxldCBlbmRwb2ludGM9dGhpcy5ibG9nTGlzdENvbmZpZy5lbmRwb2ludGM7XG5cbiAgICBsZXQgZGF0YTphbnk9e1xuICAgICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgICAgIFwibGltaXRcIjoxMCxcbiAgICAgICAgICAgIFwic2tpcFwiOjBcbiAgICAgICAgfSxcbiAgICBzb3J0OntcbiAgICAgICAgXCJ0eXBlXCI6J2Rlc2MnLFxuICAgICAgICBcImZpZWxkXCI6J3ByaW9yaXR5J1xuICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YVdpdGhvdXRUb2tlbihlbmRwb2ludGMsIGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudCA9cmVzLmNvdW50O1xuICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnQgLCcrKysrKysrKysrJylcbiAgICAgIFxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICB9KTtcblxuICAgIC8vIHRoaXMuYXBpU2VydmljZS5nZXREYXRhV2l0aG91dFRva2VuKGVuZHBvaW50LGRhdGEpLnN1YnNjcmliZSgocmVzOmFueSkgPT4ge1xuICAgIC8vICAgdGhpcy5kYXRhc291cmNlPXJlcy5yZXN1bHRzLnJlcztcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHJlcywnKysrJylcbiAgICAgIFxuICAgIFxuICAgIC8vIH0sIGVycm9yID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAvLyB9KTtcblxuICB9XG4gIFxuXG59XG5cbiJdfQ==