/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { LoadingComponent } from '../loading/loading.component';
import { MatDialog } from '@angular/material';
export class ContactusListingComponent {
    /**
     * @param {?} apiService
     * @param {?} http
     * @param {?} loadingComponent
     * @param {?} dialog
     */
    constructor(apiService, http, loadingComponent, dialog) {
        this.apiService = apiService;
        this.http = http;
        this.loadingComponent = loadingComponent;
        this.dialog = dialog;
        this.contactUsAllData = [];
        this.contactUsAllDataHeaderSkipValue = [];
        this.contactUsAllDataModifyHeaderValue = {};
        // tslint:disable-next-line:variable-name
        this.contactUsAllData_collection = 'events';
        this.serverURL = ''; // url variable to fetch the add availability form page
        // url variable to fetch the add availability form page
        this.addEndpointData = '';
        this.getDataEndpointData = '';
        this.updateendpointData = '';
        this.deleteendpointData = '';
    }
    /**
     * @param {?} formTitleVal
     * @return {?}
     */
    set formTitle(formTitleVal) {
        this.formTitleValue = formTitleVal;
        console.log(this.formTitleValue);
    }
    /**
     * @param {?} serverUrlval
     * @return {?}
     */
    set serverUrl(serverUrlval) {
        this.serverURL = (serverUrlval) || '<no name set>';
        this.serverURL = serverUrlval;
        console.log(this.serverURL);
    }
    /**
     * @param {?} contactUsAllDataHeaderSkipval
     * @return {?}
     */
    set contactUsAllDataHeader_skip(contactUsAllDataHeaderSkipval) {
        this.contactUsAllDataHeaderSkipValue = (contactUsAllDataHeaderSkipval) || '<no name set>';
        this.contactUsAllDataHeaderSkipValue = contactUsAllDataHeaderSkipval;
        console.log(this.contactUsAllDataHeaderSkipValue);
    }
    /**
     * @param {?} contactUsAllDataModifyHeaderval
     * @return {?}
     */
    set contactUsAllDataModify_header(contactUsAllDataModifyHeaderval) {
        this.contactUsAllDataModifyHeaderValue = (contactUsAllDataModifyHeaderval) || '<no name set>';
        this.contactUsAllDataModifyHeaderValue = contactUsAllDataModifyHeaderval;
        console.log('this.contactUsAllDataModifyHeaderValue');
        console.log(this.contactUsAllDataModifyHeaderValue);
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set addEndpoint(endpointUrlval) {
        this.addEndpointData = (endpointUrlval) || '<no name set>';
        this.addEndpointData = endpointUrlval;
        // console.log('this.addEndpointData');
        // console.log(this.addEndpointData)
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set getDataEndpoint(endpointUrlval) {
        this.getDataEndpointData = (endpointUrlval) || '<no name set>';
        this.getDataEndpointData = endpointUrlval;
        console.log('this.getDataEndpointData');
        console.log(this.getDataEndpointData);
    }
    /**
     * @param {?} updateendpointval
     * @return {?}
     */
    set updateendpoint(updateendpointval) {
        this.updateendpointData = (updateendpointval) || '<no name set>';
        this.updateendpointData = updateendpointval;
        console.log('this.updateendpointData');
        console.log(this.updateendpointData);
    }
    /**
     * @param {?} deleteendpointval
     * @return {?}
     */
    set deleteendpoint(deleteendpointval) {
        this.deleteendpointData = (deleteendpointval) || '<no name set>';
        this.deleteendpointData = deleteendpointval;
        console.log('this.deleteendpointData');
        console.log(this.deleteendpointData);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apiService.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setServerUrl(this.serverURL);
        }), 50);
        console.log(this.serverURL);
        this.apiService.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setgetdataEndpoint(this.getDataEndpointData.endpoint);
        }), 50);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.addEndpointData);
        }), 50);
        console.log(this.addEndpointData);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getAllData();
        }), 100);
        // setInterval(()=> {
        //   this.openDialog(); },4000); 
        // setInterval(() => {this.openDialog(); },4000);
    }
    /**
     * @return {?}
     */
    getAllData() {
        this.loadingComponent.loading = false;
        /** @type {?} */
        let data;
        data = {
            "source": this.getDataEndpointData.source
        };
        this.apiService.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            this.loadingComponent.loading = true;
            /** @type {?} */
            let result = [];
            result = response;
            if (result.resc != 0) {
                console.log('result');
                console.log(result);
                this.contactUsAllData = result.res;
            }
            else
                console.log('oppes');
        }));
    }
}
ContactusListingComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-contactus-listing',
                template: "\n\n        <h2 class=\"title\" *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n<lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"contactUsAllData.length>0 && contactUsAllData != null\"\n             [datasource]=\"contactUsAllData\"\n             [skip]=\"contactUsAllDataHeaderSkipValue\"\n             [modify_header_array]=\"contactUsAllDataModifyHeaderValue\"\n             [sourcedata]=\"contactUsAllData_collection\"\n             [updateendpoint]=\"updateendpointData\"\n             [apiurl]=\"serverURL\"\n             [sourcedata]=\"deleteendpointData.source\"\n             [jwttoken]=\"apiService.accesstoken\"\n             [deleteendpoint]=\"deleteendpointData.endpoint\">\n</lib-listing>\n\n",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.fromClass{display:flex;flex-direction:column;width:100%}.example-radio-group{display:flex;flex-direction:column;margin:15px 0}.example-radio-button{margin:5px}.agm-map{height:300px}.form-mat-card{margin-bottom:0;padding:5px}.title{padding:10px;text-align:center;background-color:#00f;color:#f0f8ff}"]
            }] }
];
/** @nocollapse */
ContactusListingComponent.ctorParameters = () => [
    { type: ApiService },
    { type: HttpClient },
    { type: LoadingComponent },
    { type: MatDialog }
];
ContactusListingComponent.propDecorators = {
    formTitle: [{ type: Input }],
    serverUrl: [{ type: Input }],
    contactUsAllDataHeader_skip: [{ type: Input }],
    contactUsAllDataModify_header: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    getDataEndpoint: [{ type: Input }],
    updateendpoint: [{ type: Input }],
    deleteendpoint: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ContactusListingComponent.prototype.formTitleValue;
    /** @type {?} */
    ContactusListingComponent.prototype.contactUsAllData;
    /** @type {?} */
    ContactusListingComponent.prototype.contactUsAllDataHeaderSkipValue;
    /** @type {?} */
    ContactusListingComponent.prototype.contactUsAllDataModifyHeaderValue;
    /** @type {?} */
    ContactusListingComponent.prototype.contactUsAllData_collection;
    /** @type {?} */
    ContactusListingComponent.prototype.serverURL;
    /** @type {?} */
    ContactusListingComponent.prototype.addEndpointData;
    /** @type {?} */
    ContactusListingComponent.prototype.getDataEndpointData;
    /** @type {?} */
    ContactusListingComponent.prototype.updateendpointData;
    /** @type {?} */
    ContactusListingComponent.prototype.deleteendpointData;
    /** @type {?} */
    ContactusListingComponent.prototype.apiService;
    /** @type {?} */
    ContactusListingComponent.prototype.http;
    /** @type {?} */
    ContactusListingComponent.prototype.loadingComponent;
    /** @type {?} */
    ContactusListingComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29udGFjdHVzLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0dXMtbGlzdGluZy9jb250YWN0dXMtbGlzdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBaUMsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFRN0UsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7OztJQXFGcEMsWUFBbUIsVUFBc0IsRUFBUyxJQUFnQixFQUN4RCxnQkFBa0MsRUFBUyxNQUFpQjtRQURuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUN4RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQW5GL0QscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQ2xDLG9DQUErQixHQUFRLEVBQUUsQ0FBQztRQUMxQyxzQ0FBaUMsR0FBUSxFQUFFLENBQUM7O1FBRzVDLGdDQUEyQixHQUFRLFFBQVEsQ0FBQztRQUVyQyxjQUFTLEdBQVEsRUFBRSxDQUFDLENBQU0sdURBQXVEOztRQUNqRixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQUMxQix3QkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDOUIsdUJBQWtCLEdBQVEsRUFBRSxDQUFDO1FBQzdCLHVCQUFrQixHQUFRLEVBQUUsQ0FBQztJQXlFN0IsQ0FBQzs7Ozs7SUF0RVIsSUFFVyxT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RUFBRTtnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDbEM7O2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE3SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLHN2QkFBaUQ7O2FBRWxEOzs7O1lBVk8sVUFBVTtZQUNWLFVBQVU7WUFDVCxnQkFBZ0I7WUFDZSxTQUFTOzs7d0JBeUI5QyxLQUFLO3dCQU9MLEtBQUs7MENBUUwsS0FBSzs0Q0FRTCxLQUFLOzBCQVVMLEtBQUs7OEJBUUwsS0FBSzs2QkFRTCxLQUFLOzZCQVFMLEtBQUs7Ozs7SUF4RU4sbURBQTJCOztJQUMzQixxREFBa0M7O0lBQ2xDLG9FQUEwQzs7SUFDMUMsc0VBQTRDOztJQUc1QyxnRUFBNEM7O0lBRTVDLDhDQUEyQjs7SUFDM0Isb0RBQWlDOztJQUNqQyx3REFBcUM7O0lBQ3JDLHVEQUFvQzs7SUFDcEMsdURBQW9DOztJQXVFeEIsK0NBQTZCOztJQUFFLHlDQUF1Qjs7SUFDL0QscURBQXlDOztJQUFFLDJDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuLi9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29udGFjdHVzLWxpc3RpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdHVzLWxpc3RpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250YWN0dXMtbGlzdGluZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdHVzTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGZvcm1UaXRsZVZhbHVlOiBhbnk7XG4gIHB1YmxpYyBjb250YWN0VXNBbGxEYXRhOiBhbnkgPSBbXTtcbiAgY29udGFjdFVzQWxsRGF0YUhlYWRlclNraXBWYWx1ZTogYW55ID0gW107XG4gIGNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJWYWx1ZTogYW55ID0ge307XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgY29udGFjdFVzQWxsRGF0YV9jb2xsZWN0aW9uOiBhbnkgPSAnZXZlbnRzJztcblxuICBwdWJsaWMgc2VydmVyVVJMOiBhbnkgPSAnJzsgICAgICAvLyB1cmwgdmFyaWFibGUgdG8gZmV0Y2ggdGhlIGFkZCBhdmFpbGFiaWxpdHkgZm9ybSBwYWdlXG4gIHB1YmxpYyBhZGRFbmRwb2ludERhdGE6IGFueSA9ICcnO1xuICBwdWJsaWMgZ2V0RGF0YUVuZHBvaW50RGF0YTogYW55ID0gJyc7XG4gIHB1YmxpYyB1cGRhdGVlbmRwb2ludERhdGE6IGFueSA9ICcnO1xuICBwdWJsaWMgZGVsZXRlZW5kcG9pbnREYXRhOiBhbnkgPSAnJztcblxuXG4gIEBJbnB1dCgpXG4gIFxuICBwdWJsaWMgc2V0IGZvcm1UaXRsZShmb3JtVGl0bGVWYWwgOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gZm9ybVRpdGxlVmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybVRpdGxlVmFsdWUpXG4gIH1cblxuICBASW5wdXQoKSAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcblxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSAoc2VydmVyVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSBzZXJ2ZXJVcmx2YWw7XG4gICAgY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG4gIH1cbiAgQElucHV0KCkgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG5cbiAgc2V0IGNvbnRhY3RVc0FsbERhdGFIZWFkZXJfc2tpcChjb250YWN0VXNBbGxEYXRhSGVhZGVyU2tpcHZhbDogYW55KSB7XG4gICAgdGhpcy5jb250YWN0VXNBbGxEYXRhSGVhZGVyU2tpcFZhbHVlID0gKGNvbnRhY3RVc0FsbERhdGFIZWFkZXJTa2lwdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5jb250YWN0VXNBbGxEYXRhSGVhZGVyU2tpcFZhbHVlID0gY29udGFjdFVzQWxsRGF0YUhlYWRlclNraXB2YWw7XG4gICAgY29uc29sZS5sb2codGhpcy5jb250YWN0VXNBbGxEYXRhSGVhZGVyU2tpcFZhbHVlKTtcblxuICB9XG4gIEBJbnB1dCgpICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuXG4gIHNldCBjb250YWN0VXNBbGxEYXRhTW9kaWZ5X2hlYWRlcihjb250YWN0VXNBbGxEYXRhTW9kaWZ5SGVhZGVydmFsOiBhbnkpIHtcbiAgICB0aGlzLmNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJWYWx1ZSA9IChjb250YWN0VXNBbGxEYXRhTW9kaWZ5SGVhZGVydmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5jb250YWN0VXNBbGxEYXRhTW9kaWZ5SGVhZGVyVmFsdWUgPSBjb250YWN0VXNBbGxEYXRhTW9kaWZ5SGVhZGVydmFsO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJWYWx1ZScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGFjdFVzQWxsRGF0YU1vZGlmeUhlYWRlclZhbHVlKTtcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGFkZEVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuYWRkRW5kcG9pbnREYXRhJyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEpXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgZ2V0RGF0YUVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcbiAgICBjb25zb2xlLmxvZygndGhpcy5nZXREYXRhRW5kcG9pbnREYXRhJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5nZXREYXRhRW5kcG9pbnREYXRhKTtcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIFRoaXMgaXMgYSBVcGRhdGUgVXJsXG4gIHNldCB1cGRhdGVlbmRwb2ludCh1cGRhdGVlbmRwb2ludHZhbDogYW55KSB7XG4gICAgdGhpcy51cGRhdGVlbmRwb2ludERhdGEgPSAodXBkYXRlZW5kcG9pbnR2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnVwZGF0ZWVuZHBvaW50RGF0YSA9IHVwZGF0ZWVuZHBvaW50dmFsO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnVwZGF0ZWVuZHBvaW50RGF0YScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudXBkYXRlZW5kcG9pbnREYXRhKTtcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHRoaXMgaXMgYSBEZWxldGUgVXJsXG4gIHNldCBkZWxldGVlbmRwb2ludChkZWxldGVlbmRwb2ludHZhbDogYW55KSB7XG4gICAgdGhpcy5kZWxldGVlbmRwb2ludERhdGEgPSAoZGVsZXRlZW5kcG9pbnR2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmRlbGV0ZWVuZHBvaW50RGF0YSA9IGRlbGV0ZWVuZHBvaW50dmFsO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmRlbGV0ZWVuZHBvaW50RGF0YScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGVsZXRlZW5kcG9pbnREYXRhKTtcbiAgfVxuXG4gIFxuXG5cbiAgY29uc3RydWN0b3IocHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxuICAgICBwdWJsaWMgbG9hZGluZ0NvbXBvbmVudDogTG9hZGluZ0NvbXBvbmVudCwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nXG4gICAgICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVVJMKTtcbiAgICB9LCA1MCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyZ2V0ZGF0YUVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0Z2V0ZGF0YUVuZHBvaW50KHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YS5lbmRwb2ludCk7XG4gICAgfSwgNTApO1xuXG5cblxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YSk7XG5cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRBbGxEYXRhKCk7XG4gICAgfSwgMTAwKTtcbiAgICAvLyBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAvLyAgIHRoaXMub3BlbkRpYWxvZygpOyB9LDQwMDApOyBcbiAgICAgIC8vIHNldEludGVydmFsKCgpID0+IHt0aGlzLm9wZW5EaWFsb2coKTsgfSw0MDAwKTtcblxuICB9XG4gIGdldEFsbERhdGEoKSB7XG4gICAgdGhpcy5sb2FkaW5nQ29tcG9uZW50LmxvYWRpbmcgPSBmYWxzZTtcbiAgICBsZXQgZGF0YTogYW55O1xuICAgIGRhdGEgPSB7XG4gICAgICBcInNvdXJjZVwiIDogdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhLnNvdXJjZVxuICAgIH07XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMubG9hZGluZ0NvbXBvbmVudC5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IFtdO1xuXG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIGlmIChyZXN1bHQucmVzYyAhPSAwKSB7XG4gICAgICBjb25zb2xlLmxvZygncmVzdWx0Jyk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgdGhpcy5jb250YWN0VXNBbGxEYXRhID0gcmVzdWx0LnJlcztcbiAgICAgIH0gZWxzZSBcbiAgICAgIGNvbnNvbGUubG9nKCdvcHBlcycpO1xuICAgIH0pO1xuICB9XG5cblxuICAvLyBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAvLyAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4obmV3c1RpdGxlRGlhbG9nLCB7XG4gIC8vICAgICB3aWR0aDogJzI1MHB4JyxcbiAgLy8gICAgIC8vIGRhdGE6IHtuYW1lOiB0aGlzLm5hbWUsIGFuaW1hbDogdGhpcy5hbmltYWx9XG4gIC8vICAgfSk7XG4gIC8vIH1cbn1cblxuXG5cblxuLy8gZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbi8vICAgZW1haWw6IHN0cmluZztcbi8vICAgbmFtZTogc3RyaW5nO1xuLy8gICBjb21wYW55OiBzdHJpbmc7XG4vLyAgIHBob25lOiBudW1iZXI7XG4vLyB9XG5cblxuXG4vLyBAQ29tcG9uZW50KHtcbi8vICAgc2VsZWN0b3I6ICduZXdzVGl0bGUnLFxuLy8gICB0ZW1wbGF0ZVVybDogJ25ld3NUaXRsZS5odG1sJyxcbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgbmV3c1RpdGxlRGlhbG9nIHtcbi8vICAgcHVibGljIG5ld3NUaXRsZUZvcm06IEZvcm1Hcm91cDtcbi8vICAgY29uc3RydWN0b3IoXG4vLyAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPG5ld3NUaXRsZURpYWxvZz4sXG4vLyAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIFxuLy8gICAgIC8vIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhLFxuLy8gICAgIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIpIHtcbi8vICAgICAgIHRoaXMubmV3c1RpdGxlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuLy8gICAgICAgICBmdWxsbmFtZTpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4vLyAgICAgICAgIHBob25lOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbi8vICAgICAgICAgY29tcGFueTpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4vLyAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXVxuLy8gICAgICAgfSlcbi8vICAgICB9XG5cbi8vICAgLy8gb25Ob0NsaWNrKCk6IHZvaWQge1xuLy8gICAvLyAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4vLyAgIC8vIH1cblxuXG4vLyAgIG5ld3NUaXRsZUZvcm1TdWJtaXQoKSB7XG4vLyAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5uZXdzVGl0bGVGb3JtLmNvbnRyb2xzKSB7XG4vLyAgICAgICB0aGlzLm5ld3NUaXRsZUZvcm0uY29udHJvbHNba2V5XS5tYXJrQXNUb3VjaGVkKCk7XG4vLyAgICAgfVxuLy8gICAgIGlmICh0aGlzLm5ld3NUaXRsZUZvcm0udmFsaWQpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmV3c1RpdGxlRm9ybS52YWx1ZSk7XG4vLyAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuLy8gICAgIH1cbiAgIFxuLy8gICB9XG5cbi8vICAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcbi8vICAgICBjb25zb2xlLmxvZygnb2stLS0tJyk7XG4vLyAgICAgdGhpcy5uZXdzVGl0bGVGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4vLyAgIH1cblxuXG5cblxuLy8gfSJdfQ==