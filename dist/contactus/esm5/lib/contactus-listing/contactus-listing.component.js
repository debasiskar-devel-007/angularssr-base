/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { LoadingComponent } from '../loading/loading.component';
import { MatDialog } from '@angular/material';
var ContactusListingComponent = /** @class */ (function () {
    function ContactusListingComponent(apiService, http, loadingComponent, dialog) {
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
    Object.defineProperty(ContactusListingComponent.prototype, "formTitle", {
        set: /**
         * @param {?} formTitleVal
         * @return {?}
         */
        function (formTitleVal) {
            this.formTitleValue = formTitleVal;
            console.log(this.formTitleValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusListingComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlval
         * @return {?}
         */
        function (serverUrlval) {
            this.serverURL = (serverUrlval) || '<no name set>';
            this.serverURL = serverUrlval;
            console.log(this.serverURL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusListingComponent.prototype, "contactUsAllDataHeader_skip", {
        set: /**
         * @param {?} contactUsAllDataHeaderSkipval
         * @return {?}
         */
        function (contactUsAllDataHeaderSkipval) {
            this.contactUsAllDataHeaderSkipValue = (contactUsAllDataHeaderSkipval) || '<no name set>';
            this.contactUsAllDataHeaderSkipValue = contactUsAllDataHeaderSkipval;
            console.log(this.contactUsAllDataHeaderSkipValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusListingComponent.prototype, "contactUsAllDataModify_header", {
        set: /**
         * @param {?} contactUsAllDataModifyHeaderval
         * @return {?}
         */
        function (contactUsAllDataModifyHeaderval) {
            this.contactUsAllDataModifyHeaderValue = (contactUsAllDataModifyHeaderval) || '<no name set>';
            this.contactUsAllDataModifyHeaderValue = contactUsAllDataModifyHeaderval;
            console.log('this.contactUsAllDataModifyHeaderValue');
            console.log(this.contactUsAllDataModifyHeaderValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusListingComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.addEndpointData = (endpointUrlval) || '<no name set>';
            this.addEndpointData = endpointUrlval;
            // console.log('this.addEndpointData');
            // console.log(this.addEndpointData)
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusListingComponent.prototype, "getDataEndpoint", {
        set: /**
         * @param {?} endpointUrlval
         * @return {?}
         */
        function (endpointUrlval) {
            this.getDataEndpointData = (endpointUrlval) || '<no name set>';
            this.getDataEndpointData = endpointUrlval;
            console.log('this.getDataEndpointData');
            console.log(this.getDataEndpointData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusListingComponent.prototype, "updateendpoint", {
        set: /**
         * @param {?} updateendpointval
         * @return {?}
         */
        function (updateendpointval) {
            this.updateendpointData = (updateendpointval) || '<no name set>';
            this.updateendpointData = updateendpointval;
            console.log('this.updateendpointData');
            console.log(this.updateendpointData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactusListingComponent.prototype, "deleteendpoint", {
        set: /**
         * @param {?} deleteendpointval
         * @return {?}
         */
        function (deleteendpointval) {
            this.deleteendpointData = (deleteendpointval) || '<no name set>';
            this.deleteendpointData = deleteendpointval;
            console.log('this.deleteendpointData');
            console.log(this.deleteendpointData);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ContactusListingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverURL);
        }), 50);
        console.log(this.serverURL);
        this.apiService.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setgetdataEndpoint(_this.getDataEndpointData.endpoint);
        }), 50);
        this.apiService.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointData);
        }), 50);
        console.log(this.addEndpointData);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.getAllData();
        }), 100);
        // setInterval(()=> {
        //   this.openDialog(); },4000); 
        // setInterval(() => {this.openDialog(); },4000);
    };
    /**
     * @return {?}
     */
    ContactusListingComponent.prototype.getAllData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loadingComponent.loading = false;
        /** @type {?} */
        var data;
        data = {
            "source": this.getDataEndpointData.source
        };
        this.apiService.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.loadingComponent.loading = true;
            /** @type {?} */
            var result = [];
            result = response;
            if (result.resc != 0) {
                console.log('result');
                console.log(result);
                _this.contactUsAllData = result.res;
            }
            else
                console.log('oppes');
        }));
    };
    ContactusListingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-contactus-listing',
                    template: "\n\n        <h2 class=\"title\" *ngIf=\"formTitleValue != ''\" class=\"title\"> {{formTitleValue}}</h2>\n\n<lib-listing class=\"formfilterdiv formfilterdivnew\" *ngIf=\"contactUsAllData.length>0 && contactUsAllData != null\"\n             [datasource]=\"contactUsAllData\"\n             [skip]=\"contactUsAllDataHeaderSkipValue\"\n             [modify_header_array]=\"contactUsAllDataModifyHeaderValue\"\n             [sourcedata]=\"contactUsAllData_collection\"\n             [updateendpoint]=\"updateendpointData\"\n             [apiurl]=\"serverURL\"\n             [sourcedata]=\"deleteendpointData.source\"\n             [jwttoken]=\"apiService.accesstoken\"\n             [deleteendpoint]=\"deleteendpointData.endpoint\">\n</lib-listing>\n\n",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.fromClass{display:flex;flex-direction:column;width:100%}.example-radio-group{display:flex;flex-direction:column;margin:15px 0}.example-radio-button{margin:5px}.agm-map{height:300px}.form-mat-card{margin-bottom:0;padding:5px}.title{padding:10px;text-align:center;background-color:#00f;color:#f0f8ff}"]
                }] }
    ];
    /** @nocollapse */
    ContactusListingComponent.ctorParameters = function () { return [
        { type: ApiService },
        { type: HttpClient },
        { type: LoadingComponent },
        { type: MatDialog }
    ]; };
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
    return ContactusListingComponent;
}());
export { ContactusListingComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLWxpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29udGFjdHVzLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0dXMtbGlzdGluZy9jb250YWN0dXMtbGlzdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBaUMsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHN0U7SUEwRkUsbUNBQW1CLFVBQXNCLEVBQVMsSUFBZ0IsRUFDeEQsZ0JBQWtDLEVBQVMsTUFBaUI7UUFEbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVk7UUFDeEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFuRi9ELHFCQUFnQixHQUFRLEVBQUUsQ0FBQztRQUNsQyxvQ0FBK0IsR0FBUSxFQUFFLENBQUM7UUFDMUMsc0NBQWlDLEdBQVEsRUFBRSxDQUFDOztRQUc1QyxnQ0FBMkIsR0FBUSxRQUFRLENBQUM7UUFFckMsY0FBUyxHQUFRLEVBQUUsQ0FBQyxDQUFNLHVEQUF1RDs7UUFDakYsb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFDMUIsd0JBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQzlCLHVCQUFrQixHQUFRLEVBQUUsQ0FBQztRQUM3Qix1QkFBa0IsR0FBUSxFQUFFLENBQUM7SUF5RTdCLENBQUM7SUF0RVIsc0JBRVcsZ0RBQVM7Ozs7O1FBRnBCLFVBRXFCLFlBQXFCO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBRUksZ0RBQVM7Ozs7O1FBRmIsVUFFYyxZQUFpQjtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksZUFBZSxDQUFDO1lBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTlCLENBQUM7OztPQUFBO0lBQ0Qsc0JBRUksa0VBQTJCOzs7OztRQUYvQixVQUVnQyw2QkFBa0M7WUFDaEUsSUFBSSxDQUFDLCtCQUErQixHQUFHLENBQUMsNkJBQTZCLENBQUMsSUFBSSxlQUFlLENBQUM7WUFDMUYsSUFBSSxDQUFDLCtCQUErQixHQUFHLDZCQUE2QixDQUFDO1lBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFFcEQsQ0FBQzs7O09BQUE7SUFDRCxzQkFFSSxvRUFBNkI7Ozs7O1FBRmpDLFVBRWtDLCtCQUFvQztZQUNwRSxJQUFJLENBQUMsaUNBQWlDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLGVBQWUsQ0FBQztZQUM5RixJQUFJLENBQUMsaUNBQWlDLEdBQUcsK0JBQStCLENBQUM7WUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFFdEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxrREFBVzs7Ozs7UUFEZixVQUNnQixjQUFtQjtZQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksZUFBZSxDQUFDO1lBQzNELElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1lBQ3RDLHVDQUF1QztZQUN2QyxvQ0FBb0M7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxzREFBZTs7Ozs7UUFEbkIsVUFDb0IsY0FBbUI7WUFDckMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksZUFBZSxDQUFDO1lBQy9ELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxjQUFjLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxxREFBYzs7Ozs7UUFEbEIsVUFDbUIsaUJBQXNCO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksZUFBZSxDQUFDO1lBQ2pFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHFEQUFjOzs7OztRQURsQixVQUNtQixpQkFBc0I7WUFDdkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsaUJBQWlCLENBQUMsSUFBSSxlQUFlLENBQUM7WUFDakUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBOzs7O0lBU0QsNENBQVE7OztJQUFSO1FBQUEsaUJBNEJDO1FBM0JDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakMsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3ZDLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBSVAsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ25DLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBR2xDLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUNSLHFCQUFxQjtRQUNyQixpQ0FBaUM7UUFDL0IsaURBQWlEO0lBRXJELENBQUM7Ozs7SUFDRCw4Q0FBVTs7O0lBQVY7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7O1lBQ2xDLElBQVM7UUFDYixJQUFJLEdBQUc7WUFDTCxRQUFRLEVBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU07U0FDM0MsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFFBQVE7WUFDOUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O2dCQUNqQyxNQUFNLEdBQVEsRUFBRTtZQUVwQixNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ2xCLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ2xDOztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBN0lGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxzdkJBQWlEOztpQkFFbEQ7Ozs7Z0JBVk8sVUFBVTtnQkFDVixVQUFVO2dCQUNULGdCQUFnQjtnQkFDZSxTQUFTOzs7NEJBeUI5QyxLQUFLOzRCQU9MLEtBQUs7OENBUUwsS0FBSztnREFRTCxLQUFLOzhCQVVMLEtBQUs7a0NBUUwsS0FBSztpQ0FRTCxLQUFLO2lDQVFMLEtBQUs7O0lBdUVSLGdDQUFDO0NBQUEsQUF0SkQsSUFzSkM7U0FqSlkseUJBQXlCOzs7SUFFcEMsbURBQTJCOztJQUMzQixxREFBa0M7O0lBQ2xDLG9FQUEwQzs7SUFDMUMsc0VBQTRDOztJQUc1QyxnRUFBNEM7O0lBRTVDLDhDQUEyQjs7SUFDM0Isb0RBQWlDOztJQUNqQyx3REFBcUM7O0lBQ3JDLHVEQUFvQzs7SUFDcEMsdURBQW9DOztJQXVFeEIsK0NBQTZCOztJQUFFLHlDQUF1Qjs7SUFDL0QscURBQXlDOztJQUFFLDJDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuLi9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29udGFjdHVzLWxpc3RpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdHVzLWxpc3RpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250YWN0dXMtbGlzdGluZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdHVzTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGZvcm1UaXRsZVZhbHVlOiBhbnk7XG4gIHB1YmxpYyBjb250YWN0VXNBbGxEYXRhOiBhbnkgPSBbXTtcbiAgY29udGFjdFVzQWxsRGF0YUhlYWRlclNraXBWYWx1ZTogYW55ID0gW107XG4gIGNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJWYWx1ZTogYW55ID0ge307XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgY29udGFjdFVzQWxsRGF0YV9jb2xsZWN0aW9uOiBhbnkgPSAnZXZlbnRzJztcblxuICBwdWJsaWMgc2VydmVyVVJMOiBhbnkgPSAnJzsgICAgICAvLyB1cmwgdmFyaWFibGUgdG8gZmV0Y2ggdGhlIGFkZCBhdmFpbGFiaWxpdHkgZm9ybSBwYWdlXG4gIHB1YmxpYyBhZGRFbmRwb2ludERhdGE6IGFueSA9ICcnO1xuICBwdWJsaWMgZ2V0RGF0YUVuZHBvaW50RGF0YTogYW55ID0gJyc7XG4gIHB1YmxpYyB1cGRhdGVlbmRwb2ludERhdGE6IGFueSA9ICcnO1xuICBwdWJsaWMgZGVsZXRlZW5kcG9pbnREYXRhOiBhbnkgPSAnJztcblxuXG4gIEBJbnB1dCgpXG4gIFxuICBwdWJsaWMgc2V0IGZvcm1UaXRsZShmb3JtVGl0bGVWYWwgOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gZm9ybVRpdGxlVmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybVRpdGxlVmFsdWUpXG4gIH1cblxuICBASW5wdXQoKSAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcblxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybHZhbDogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSAoc2VydmVyVXJsdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSBzZXJ2ZXJVcmx2YWw7XG4gICAgY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG4gIH1cbiAgQElucHV0KCkgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG5cbiAgc2V0IGNvbnRhY3RVc0FsbERhdGFIZWFkZXJfc2tpcChjb250YWN0VXNBbGxEYXRhSGVhZGVyU2tpcHZhbDogYW55KSB7XG4gICAgdGhpcy5jb250YWN0VXNBbGxEYXRhSGVhZGVyU2tpcFZhbHVlID0gKGNvbnRhY3RVc0FsbERhdGFIZWFkZXJTa2lwdmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5jb250YWN0VXNBbGxEYXRhSGVhZGVyU2tpcFZhbHVlID0gY29udGFjdFVzQWxsRGF0YUhlYWRlclNraXB2YWw7XG4gICAgY29uc29sZS5sb2codGhpcy5jb250YWN0VXNBbGxEYXRhSGVhZGVyU2tpcFZhbHVlKTtcblxuICB9XG4gIEBJbnB1dCgpICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuXG4gIHNldCBjb250YWN0VXNBbGxEYXRhTW9kaWZ5X2hlYWRlcihjb250YWN0VXNBbGxEYXRhTW9kaWZ5SGVhZGVydmFsOiBhbnkpIHtcbiAgICB0aGlzLmNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJWYWx1ZSA9IChjb250YWN0VXNBbGxEYXRhTW9kaWZ5SGVhZGVydmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5jb250YWN0VXNBbGxEYXRhTW9kaWZ5SGVhZGVyVmFsdWUgPSBjb250YWN0VXNBbGxEYXRhTW9kaWZ5SGVhZGVydmFsO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmNvbnRhY3RVc0FsbERhdGFNb2RpZnlIZWFkZXJWYWx1ZScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGFjdFVzQWxsRGF0YU1vZGlmeUhlYWRlclZhbHVlKTtcblxuICB9XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IGFkZEVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuYWRkRW5kcG9pbnREYXRhID0gZW5kcG9pbnRVcmx2YWw7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuYWRkRW5kcG9pbnREYXRhJyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRFbmRwb2ludERhdGEpXG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxuICBzZXQgZ2V0RGF0YUVuZHBvaW50KGVuZHBvaW50VXJsdmFsOiBhbnkpIHtcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmdldERhdGFFbmRwb2ludERhdGEgPSBlbmRwb2ludFVybHZhbDtcbiAgICBjb25zb2xlLmxvZygndGhpcy5nZXREYXRhRW5kcG9pbnREYXRhJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5nZXREYXRhRW5kcG9pbnREYXRhKTtcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIFRoaXMgaXMgYSBVcGRhdGUgVXJsXG4gIHNldCB1cGRhdGVlbmRwb2ludCh1cGRhdGVlbmRwb2ludHZhbDogYW55KSB7XG4gICAgdGhpcy51cGRhdGVlbmRwb2ludERhdGEgPSAodXBkYXRlZW5kcG9pbnR2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnVwZGF0ZWVuZHBvaW50RGF0YSA9IHVwZGF0ZWVuZHBvaW50dmFsO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnVwZGF0ZWVuZHBvaW50RGF0YScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudXBkYXRlZW5kcG9pbnREYXRhKTtcbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHRoaXMgaXMgYSBEZWxldGUgVXJsXG4gIHNldCBkZWxldGVlbmRwb2ludChkZWxldGVlbmRwb2ludHZhbDogYW55KSB7XG4gICAgdGhpcy5kZWxldGVlbmRwb2ludERhdGEgPSAoZGVsZXRlZW5kcG9pbnR2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmRlbGV0ZWVuZHBvaW50RGF0YSA9IGRlbGV0ZWVuZHBvaW50dmFsO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmRlbGV0ZWVuZHBvaW50RGF0YScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGVsZXRlZW5kcG9pbnREYXRhKTtcbiAgfVxuXG4gIFxuXG5cbiAgY29uc3RydWN0b3IocHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxuICAgICBwdWJsaWMgbG9hZGluZ0NvbXBvbmVudDogTG9hZGluZ0NvbXBvbmVudCwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nXG4gICAgICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVVJMKTtcbiAgICB9LCA1MCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyZ2V0ZGF0YUVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0Z2V0ZGF0YUVuZHBvaW50KHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YS5lbmRwb2ludCk7XG4gICAgfSwgNTApO1xuXG5cblxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YSk7XG5cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRBbGxEYXRhKCk7XG4gICAgfSwgMTAwKTtcbiAgICAvLyBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAvLyAgIHRoaXMub3BlbkRpYWxvZygpOyB9LDQwMDApOyBcbiAgICAgIC8vIHNldEludGVydmFsKCgpID0+IHt0aGlzLm9wZW5EaWFsb2coKTsgfSw0MDAwKTtcblxuICB9XG4gIGdldEFsbERhdGEoKSB7XG4gICAgdGhpcy5sb2FkaW5nQ29tcG9uZW50LmxvYWRpbmcgPSBmYWxzZTtcbiAgICBsZXQgZGF0YTogYW55O1xuICAgIGRhdGEgPSB7XG4gICAgICBcInNvdXJjZVwiIDogdGhpcy5nZXREYXRhRW5kcG9pbnREYXRhLnNvdXJjZVxuICAgIH07XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMubG9hZGluZ0NvbXBvbmVudC5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IFtdO1xuXG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIGlmIChyZXN1bHQucmVzYyAhPSAwKSB7XG4gICAgICBjb25zb2xlLmxvZygncmVzdWx0Jyk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgdGhpcy5jb250YWN0VXNBbGxEYXRhID0gcmVzdWx0LnJlcztcbiAgICAgIH0gZWxzZSBcbiAgICAgIGNvbnNvbGUubG9nKCdvcHBlcycpO1xuICAgIH0pO1xuICB9XG5cblxuICAvLyBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAvLyAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4obmV3c1RpdGxlRGlhbG9nLCB7XG4gIC8vICAgICB3aWR0aDogJzI1MHB4JyxcbiAgLy8gICAgIC8vIGRhdGE6IHtuYW1lOiB0aGlzLm5hbWUsIGFuaW1hbDogdGhpcy5hbmltYWx9XG4gIC8vICAgfSk7XG4gIC8vIH1cbn1cblxuXG5cblxuLy8gZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbi8vICAgZW1haWw6IHN0cmluZztcbi8vICAgbmFtZTogc3RyaW5nO1xuLy8gICBjb21wYW55OiBzdHJpbmc7XG4vLyAgIHBob25lOiBudW1iZXI7XG4vLyB9XG5cblxuXG4vLyBAQ29tcG9uZW50KHtcbi8vICAgc2VsZWN0b3I6ICduZXdzVGl0bGUnLFxuLy8gICB0ZW1wbGF0ZVVybDogJ25ld3NUaXRsZS5odG1sJyxcbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgbmV3c1RpdGxlRGlhbG9nIHtcbi8vICAgcHVibGljIG5ld3NUaXRsZUZvcm06IEZvcm1Hcm91cDtcbi8vICAgY29uc3RydWN0b3IoXG4vLyAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPG5ld3NUaXRsZURpYWxvZz4sXG4vLyAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIFxuLy8gICAgIC8vIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhLFxuLy8gICAgIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIpIHtcbi8vICAgICAgIHRoaXMubmV3c1RpdGxlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuLy8gICAgICAgICBmdWxsbmFtZTpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4vLyAgICAgICAgIHBob25lOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbi8vICAgICAgICAgY29tcGFueTpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4vLyAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKC9eXFxzKltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxAW1xcd1xcLVxcK19dK1xcLltcXHdcXC1cXCtfXSsoXFwuW1xcd1xcLVxcK19dKykqXFxzKiQvKV0pXVxuLy8gICAgICAgfSlcbi8vICAgICB9XG5cbi8vICAgLy8gb25Ob0NsaWNrKCk6IHZvaWQge1xuLy8gICAvLyAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4vLyAgIC8vIH1cblxuXG4vLyAgIG5ld3NUaXRsZUZvcm1TdWJtaXQoKSB7XG4vLyAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5uZXdzVGl0bGVGb3JtLmNvbnRyb2xzKSB7XG4vLyAgICAgICB0aGlzLm5ld3NUaXRsZUZvcm0uY29udHJvbHNba2V5XS5tYXJrQXNUb3VjaGVkKCk7XG4vLyAgICAgfVxuLy8gICAgIGlmICh0aGlzLm5ld3NUaXRsZUZvcm0udmFsaWQpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmV3c1RpdGxlRm9ybS52YWx1ZSk7XG4vLyAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuLy8gICAgIH1cbiAgIFxuLy8gICB9XG5cbi8vICAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcbi8vICAgICBjb25zb2xlLmxvZygnb2stLS0tJyk7XG4vLyAgICAgdGhpcy5uZXdzVGl0bGVGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4vLyAgIH1cblxuXG5cblxuLy8gfSJdfQ==