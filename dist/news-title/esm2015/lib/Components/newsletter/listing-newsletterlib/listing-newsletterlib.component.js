/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/newsletter/listing-newsletterlib/listing-newsletterlib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ListingNewsletterlibComponent {
    // ====================================================================================================
    constructor() {
        this.loader = true;
    }
    // =====================================================================================================
    // ================================================Input For Lib Listing================================
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
        this.newsConfigForm = {
            apiUrl: receivedData.apiBaseUrl,
            listEndPoint: receivedData.listEndPoint,
            datasource: receivedData.datasource,
            tableName: receivedData.tableName,
            listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
            listArray_modify_header: {
                'title': 'Title', 'subject': 'Subject', 'userGroup': 'User Group', 'time': 'Publish Time',
                'publishdate': 'Publish Date', 'status': 'Status'
            },
            admintablenameTableName: "admin",
            statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
            updateurl: receivedData.updateEndpoint,
            editUrl: receivedData.editUrl,
            jwtToken: receivedData.jwtToken,
            deleteEndPoint: receivedData.deleteEndPoint,
            view: receivedData.view,
            detail_header: ['_id'],
            search_settings: {
                textsearch: [{ label: "Search by title...", field: 'title' },
                    { label: "Search by subject...", field: 'subject' }],
                search: [{ label: "Search By group", field: '' }]
            },
        };
        this.loader = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ListingNewsletterlibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-listing-newsletterlib',
                template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"newsConfigForm.datasource !=null && newsConfigForm.datasource.length > 0\"\n      [datasource]=\"newsConfigForm.datasource\" [skip]=\"newsConfigForm.listArray_skip\"\n      [modify_header_array]=\"newsConfigForm.listArray_modify_header\" [sourcedata]=\"newsConfigForm.tableName\"\n      [statusarr]=\"newsConfigForm.statusarr\" [jwttoken]=\"newsConfigForm.jwtToken\"\n      [apiurl]=\"newsConfigForm.apiUrl\" [editroute]=\"newsConfigForm.editUrl\"\n      [deleteendpoint]=\"newsConfigForm.deleteEndPoint\"\n      [date_search_source]=\"newsConfigForm.view\"\n      [date_search_endpoint]=\"newsConfigForm.listEndPoint\"\n      [search_settings]=\"newsConfigForm.search_settings\"\n      [detail_skip_array]=\"newsConfigForm.detail_header\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n\n  <h2 *ngIf=\"newsConfigForm.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                styles: [""]
            }] }
];
/** @nocollapse */
ListingNewsletterlibComponent.ctorParameters = () => [];
ListingNewsletterlibComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListingNewsletterlibComponent.prototype.newsConfigForm;
    /** @type {?} */
    ListingNewsletterlibComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ld3MtdGl0bGUtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvbmV3c2xldHRlci9saXN0aW5nLW5ld3NsZXR0ZXJsaWIvbGlzdGluZy1uZXdzbGV0dGVybGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyw2QkFBNkI7O0lBMkN4QztRQXZDTyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBeUM5QixDQUFDOzs7Ozs7O0lBbENELElBQ0ksTUFBTSxDQUFDLFlBQWlCO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDcEIsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVO1lBQy9CLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtZQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDbkMsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO1lBQ2pDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUM7WUFDbkUsdUJBQXVCLEVBQUU7Z0JBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxjQUFjO2dCQUN6RixhQUFhLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxRQUFRO2FBQ2xEO1lBQ0QsdUJBQXVCLEVBQUUsT0FBTztZQUNoQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7WUFDckUsU0FBUyxFQUFFLFlBQVksQ0FBQyxjQUFjO1lBQ3RDLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTztZQUM3QixRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7WUFDL0IsY0FBYyxFQUFFLFlBQVksQ0FBQyxjQUFjO1lBQzNDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTtZQUN2QixhQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsZUFBZSxFQUFFO2dCQUNmLFVBQVUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7b0JBQzVELEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFDcEQsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBRWxEO1NBRUYsQ0FBQTtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFPRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBckRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyx5c0NBQXFEOzthQUV0RDs7Ozs7cUJBWUUsS0FBSzs7OztJQVJOLHVEQUEyQjs7SUFDM0IsK0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nLW5ld3NsZXR0ZXJsaWInLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdGluZy1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nTmV3c2xldHRlcmxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgcHVibGljIG5ld3NDb25maWdGb3JtOiBhbnk7XG4gIHB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcbiAgICB0aGlzLm5ld3NDb25maWdGb3JtID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcbiAgICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxuICAgICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxuICAgICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJpZFwiLCBcInVwZGF0ZWRfYXRcIl0sXG4gICAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjoge1xuICAgICAgICAndGl0bGUnOiAnVGl0bGUnLCAnc3ViamVjdCc6ICdTdWJqZWN0JywgJ3VzZXJHcm91cCc6ICdVc2VyIEdyb3VwJywgJ3RpbWUnOiAnUHVibGlzaCBUaW1lJyxcbiAgICAgICAgJ3B1Ymxpc2hkYXRlJzogJ1B1Ymxpc2ggRGF0ZScsICdzdGF0dXMnOiAnU3RhdHVzJ1xuICAgICAgfSxcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxuICAgICAgZGV0YWlsX2hlYWRlcjogWydfaWQnXSxcbiAgICAgIHNlYXJjaF9zZXR0aW5nczoge1xuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggYnkgdGl0bGUuLi5cIiwgZmllbGQ6ICd0aXRsZScgfSxcbiAgICAgICAgeyBsYWJlbDogXCJTZWFyY2ggYnkgc3ViamVjdC4uLlwiLCBmaWVsZDogJ3N1YmplY3QnIH1dLFxuICAgICAgICBzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBCeSBncm91cFwiLCBmaWVsZDogJycgfV1cblxuICAgICAgfSxcblxuICAgIH1cbiAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG5cbiJdfQ==