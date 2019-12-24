/**
 * @fileoverview added by tsickle
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
            listArray_modify_header: { 'title': 'Title', 'subject': 'Subject', 'userGroup': 'User Group', 'time': 'Publish Time',
                'publishdate': 'Publish Date', 'status': 'Status' },
            admintablenameTableName: "admin",
            statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
            updateurl: receivedData.updateEndpoint,
            editUrl: receivedData.editUrl,
            jwtToken: receivedData.jwtToken,
            deleteEndPoint: receivedData.deleteEndPoint,
            view: receivedData.view,
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
                template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"newsConfigForm.datasource !=null && newsConfigForm.datasource.length > 0\"\n      [datasource]=\"newsConfigForm.datasource\" [skip]=\"newsConfigForm.listArray_skip\"\n      [modify_header_array]=\"newsConfigForm.listArray_modify_header\" [sourcedata]=\"newsConfigForm.tableName\"\n      [statusarr]=\"newsConfigForm.statusarr\" [jwttoken]=\"newsConfigForm.jwtToken\"\n      [apiurl]=\"newsConfigForm.apiUrl\" [editroute]=\"newsConfigForm.editUrl\"\n      [deleteendpoint]=\"newsConfigForm.deleteEndPoint\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n\n  <h2 *ngIf=\"newsConfigForm.datasource.length == 0\">No record found.</h2>\n</mat-card>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ld3MtdGl0bGUtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvbmV3c2xldHRlci9saXN0aW5nLW5ld3NsZXR0ZXJsaWIvbGlzdGluZy1uZXdzbGV0dGVybGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPeEQsTUFBTSxPQUFPLDZCQUE2Qjs7SUFvQ3hDO1FBaENPLFdBQU0sR0FBWSxJQUFJLENBQUM7SUFrQzlCLENBQUM7Ozs7Ozs7SUExQkQsSUFDSSxNQUFNLENBQUMsWUFBaUI7UUFFMUIsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNwQixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO1lBQ3ZDLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtZQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7WUFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQztZQUNuRSx1QkFBdUIsRUFBRSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBQyxjQUFjO2dCQUM5RyxhQUFhLEVBQUMsY0FBYyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUM7WUFDN0MsdUJBQXVCLEVBQUUsT0FBTztZQUNoQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7WUFDckUsU0FBUyxFQUFFLFlBQVksQ0FBQyxjQUFjO1lBQ3RDLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTztZQUM3QixRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7WUFDL0IsY0FBYyxFQUFFLFlBQVksQ0FBQyxjQUFjO1lBQzNDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTtTQUV4QixDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQU9ELFFBQVE7SUFDUixDQUFDOzs7WUE5Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLCs5QkFBcUQ7O2FBRXREOzs7OztxQkFhRSxLQUFLOzs7O0lBVE4sdURBQTJCOztJQUMzQiwrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZy1uZXdzbGV0dGVybGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmctbmV3c2xldHRlcmxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3RpbmctbmV3c2xldHRlcmxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ05ld3NsZXR0ZXJsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBuZXdzQ29uZmlnRm9ybTogYW55O1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUlucHV0IEZvciBMaWIgTGlzdGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcblxuICAgIHRoaXMubmV3c0NvbmZpZ0Zvcm0gPSB7XG4gICAgICBhcGlVcmw6IHJlY2VpdmVkRGF0YS5hcGlCYXNlVXJsLFxuICAgICAgbGlzdEVuZFBvaW50OiByZWNlaXZlZERhdGEubGlzdEVuZFBvaW50LFxuICAgICAgZGF0YXNvdXJjZTogcmVjZWl2ZWREYXRhLmRhdGFzb3VyY2UsXG4gICAgICB0YWJsZU5hbWU6IHJlY2VpdmVkRGF0YS50YWJsZU5hbWUsXG4gICAgICBsaXN0QXJyYXlfc2tpcDogW1wiX2lkXCIsIFwidXNlcklkXCIsIFwiY3JlYXRlZF9hdFwiLCBcImlkXCIsIFwidXBkYXRlZF9hdFwiXSxcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7J3RpdGxlJzonVGl0bGUnLCdzdWJqZWN0JzonU3ViamVjdCcsJ3VzZXJHcm91cCc6J1VzZXIgR3JvdXAnLCd0aW1lJzonUHVibGlzaCBUaW1lJyxcbiAgICAncHVibGlzaGRhdGUnOidQdWJsaXNoIERhdGUnLCdzdGF0dXMnOidTdGF0dXMnfSxcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxuXG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG5cbiJdfQ==