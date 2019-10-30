/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { LessionManagementService } from '../../lession-management.service';
import { Router } from '@angular/router';
export class ListLessionComponent {
    /**
     * @param {?} httpRequest
     * @param {?} router
     */
    constructor(httpRequest, router) {
        this.httpRequest = httpRequest;
        this.router = router;
        this.loader = true;
    }
    /**
     * @param {?} receivedLessionData
     * @return {?}
     */
    set config(receivedLessionData) {
        this.lessionListingConfig = {
            apiUrl: receivedLessionData.apiBaseUrl,
            listEndPoint: "datalist",
            datasource: receivedLessionData.datasource,
            tableName: receivedLessionData.tableName,
            listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
            admintablenameTableName: "admin",
            statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
            updateurl: receivedLessionData.updateEndpoint,
            editUrl: receivedLessionData.editUrl,
            jwtToken: receivedLessionData.jwtToken,
            deleteEndPoint: receivedLessionData.deleteEndPoint
        };
        this.loader = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ListLessionComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-list-lession',
                template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n<!-- <mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\" *ngIf=\"lessionListingConfig.datasource !=null && lessionListingConfig.datasource.length > 0\"\n    [datasource]=\"lessionListingConfig.datasource\"\n    [skip]=\"lessionListingConfig.listArray_skip\"\n    [modify_header_array]=\"lessionListingConfig.listArray_modify_header\"\n    [sourcedata]=\"lessionListingConfig.tableName\"\n    [statusarr]=\"lessionListingConfig.statusArray\"\n    [jwttoken]=\"lessionListingConfig.jwtToken\" \n    [apiurl]=\"lessionListingConfig.apiUrl\"\n    [editroute]=\"lessionListingConfig.editUrl\"\n    [deleteendpoint]=\"lessionListingConfig.deleteEndPoint\">\n  </lib-listing> -->\n\n\n\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"lessionListingConfig.datasource != null && lessionListingConfig.datasource.length > 0\"\n      [datasource]=\"lessionListingConfig.datasource\" [skip]=\"lessionListingConfig.listArray_skip\"\n      [modify_header_array]=\"lessionListingConfig.listArray_modify_header\" [sourcedata]=\"lessionListingConfig.tableName\"\n      [statusarr]=\"lessionListingConfig.statusarr\" [jwttoken]=\"lessionListingConfig.jwtToken\"\n      [apiurl]=\"lessionListingConfig.apiUrl\" [editroute]=\"lessionListingConfig.editUrl\"\n      [deleteendpoint]=\"lessionListingConfig.deleteEndPoint\">\n  </lib-listing>\n\n  <h2 *ngIf=\"lessionListingConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                styles: ["h2{margin:auto}mat-card{background-color:#e3e2e1}.example-card{max-width:400px}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover;border:2px solid #e0dada}.add-new-button{float:right}.spinner{text-align:center;margin:auto;height:100px}mat-toolbar{width:100%}"]
            }] }
];
/** @nocollapse */
ListLessionComponent.ctorParameters = () => [
    { type: LessionManagementService },
    { type: Router }
];
ListLessionComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListLessionComponent.prototype.lessionListingConfig;
    /** @type {?} */
    ListLessionComponent.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    ListLessionComponent.prototype.httpRequest;
    /**
     * @type {?}
     * @private
     */
    ListLessionComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1sZXNzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlc3Npb24tbWFuYWdlbWVudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbGlzdC1sZXNzaW9uL2xpc3QtbGVzc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RSxPQUFPLEVBQWtCLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpELE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBNkIvQixZQUFvQixXQUFxQyxFQUFVLE1BQWM7UUFBN0QsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTFCMUUsV0FBTSxHQUFZLElBQUksQ0FBQztJQTBCdUQsQ0FBQzs7Ozs7SUF4QnRGLElBQ0ksTUFBTSxDQUFDLG1CQUF3QjtRQUVqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUc7WUFDMUIsTUFBTSxFQUFFLG1CQUFtQixDQUFDLFVBQVU7WUFDdEMsWUFBWSxFQUFFLFVBQVU7WUFDeEIsVUFBVSxFQUFFLG1CQUFtQixDQUFDLFVBQVU7WUFDMUMsU0FBUyxFQUFFLG1CQUFtQixDQUFDLFNBQVM7WUFDeEMsY0FBYyxFQUFFLENBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBRTtZQUNyRSx1QkFBdUIsRUFBRSxPQUFPO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyxVQUFVLEVBQUUsQ0FBQztZQUNuRSxTQUFTLEVBQUUsbUJBQW1CLENBQUMsY0FBYztZQUM3QyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsT0FBTztZQUNwQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsUUFBUTtZQUN0QyxjQUFjLEVBQUUsbUJBQW1CLENBQUMsY0FBYztTQUVuRCxDQUFBO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQU9ELFFBQVE7SUFDUixDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHlqREFBNEM7O2FBRTdDOzs7O1lBUFEsd0JBQXdCO1lBQ1IsTUFBTTs7O3FCQWE1QixLQUFLOzs7O0lBSE4sb0RBQWlDOztJQUNqQyxzQ0FBOEI7Ozs7O0lBMEJsQiwyQ0FBNkM7Ozs7O0lBQUUsc0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IExlc3Npb25NYW5hZ2VtZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2xlc3Npb24tbWFuYWdlbWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdC1sZXNzaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtbGVzc2lvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QtbGVzc2lvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0TGVzc2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGxlc3Npb25MaXN0aW5nQ29uZmlnOiBhbnk7XG4gIHB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcocmVjZWl2ZWRMZXNzaW9uRGF0YTogYW55KSB7XG5cbiAgICB0aGlzLmxlc3Npb25MaXN0aW5nQ29uZmlnID0ge1xuICAgICAgYXBpVXJsOiByZWNlaXZlZExlc3Npb25EYXRhLmFwaUJhc2VVcmwsXG4gICAgICBsaXN0RW5kUG9pbnQ6IFwiZGF0YWxpc3RcIixcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkTGVzc2lvbkRhdGEuZGF0YXNvdXJjZSxcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWRMZXNzaW9uRGF0YS50YWJsZU5hbWUsXG4gICAgICBsaXN0QXJyYXlfc2tpcDogWyBcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJpZFwiLCBcInVwZGF0ZWRfYXRcIiBdLFxuICAgICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcbiAgICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwifSwgeyB2YWw6IDAsIG5hbWU6J0luYWN0aXZlJyB9XSxcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWRMZXNzaW9uRGF0YS51cGRhdGVFbmRwb2ludCxcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkTGVzc2lvbkRhdGEuZWRpdFVybCxcbiAgICAgIGp3dFRva2VuOiByZWNlaXZlZExlc3Npb25EYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkTGVzc2lvbkRhdGEuZGVsZXRlRW5kUG9pbnRcbiAgICAgIFxuICAgIH1cbiAgIFxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cblxuIFxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwUmVxdWVzdDogTGVzc2lvbk1hbmFnZW1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4gIl19