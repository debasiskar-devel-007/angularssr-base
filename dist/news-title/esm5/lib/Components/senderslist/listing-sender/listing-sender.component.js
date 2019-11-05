/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ListingSenderComponent = /** @class */ (function () {
    // ====================================================================================================
    function ListingSenderComponent() {
        this.loader = true;
    }
    Object.defineProperty(ListingSenderComponent.prototype, "config", {
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        set: 
        // =====================================================================================================
        // ================================================Input For Lib Listing================================
        /**
         * @param {?} receivedData
         * @return {?}
         */
        function (receivedData) {
            this.senderConfigForm = {
                apiUrl: receivedData.apiBaseUrl,
                listEndPoint: receivedData.listEndPoint,
                datasource: receivedData.datasource,
                tableName: receivedData.tableName,
                listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
                listArray_modify_header: { "name": "Sender's Name", "email": "Sender's Email" },
                admintablenameTableName: "admin",
                statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                updateurl: receivedData.updateEndpoint,
                editUrl: receivedData.editUrl,
                jwtToken: receivedData.jwtToken,
                deleteEndPoint: receivedData.deleteEndPoint,
                view: receivedData.view,
            };
            this.loader = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListingSenderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListingSenderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing-sender',
                    template: "<mat-card *ngIf=\"loader==true\">\r\n  <mat-spinner class=\"spinner\"></mat-spinner>\r\n</mat-card>\r\n\r\n\r\n\r\n<!-- ------------------------lib listing being called------------------------ -->\r\n<mat-card *ngIf=\"loader==false\">\r\n  <lib-listing class=\"formfilterdiv\"\r\n      *ngIf=\"senderConfigForm.datasource !=null && senderConfigForm.datasource.length > 0\"\r\n      [datasource]=\"senderConfigForm.datasource\" [skip]=\"senderConfigForm.listArray_skip\"\r\n      [modify_header_array]=\"senderConfigForm.listArray_modify_header\" [sourcedata]=\"senderConfigForm.tableName\"\r\n      [statusarr]=\"senderConfigForm.statusarr\" [jwttoken]=\"senderConfigForm.jwtToken\"\r\n      [apiurl]=\"senderConfigForm.apiUrl\" [editroute]=\"senderConfigForm.editUrl\"\r\n      [deleteendpoint]=\"senderConfigForm.deleteEndPoint\">\r\n  </lib-listing>\r\n<!-- ----------------------------------------------------------------------------->\r\n\r\n  <h2 *ngIf=\"senderConfigForm.datasource.length == 0\">No record found.</h2>\r\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListingSenderComponent.ctorParameters = function () { return []; };
    ListingSenderComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return ListingSenderComponent;
}());
export { ListingSenderComponent };
if (false) {
    /** @type {?} */
    ListingSenderComponent.prototype.senderConfigForm;
    /** @type {?} */
    ListingSenderComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1zZW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV3cy10aXRsZS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL3NlbmRlcnNsaXN0L2xpc3Rpbmctc2VuZGVyL2xpc3Rpbmctc2VuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEQ7SUFxQ0EsdUdBQXVHO0lBRXZHO1FBOUJPLFdBQU0sR0FBWSxJQUFJLENBQUM7SUE4QmQsQ0FBQztJQXZCakIsc0JBQ0ksMENBQU07UUFQVix3R0FBd0c7UUFLeEcsd0dBQXdHOzs7Ozs7OztRQUN4RyxVQUNXLFlBQWlCO1lBRTFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztnQkFDdEIsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVO2dCQUMvQixZQUFZLEVBQUUsWUFBWSxDQUFDLFlBQVk7Z0JBQ3ZDLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDbkMsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO2dCQUNqQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDO2dCQUNuRSx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFDLGdCQUFnQixFQUFDO2dCQUM3RSx1QkFBdUIsRUFBRSxPQUFPO2dCQUNoQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0JBQ3JFLFNBQVMsRUFBRSxZQUFZLENBQUMsY0FBYztnQkFDdEMsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPO2dCQUM3QixRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7Z0JBQy9CLGNBQWMsRUFBRSxZQUFZLENBQUMsY0FBYztnQkFDM0MsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJO2FBRXhCLENBQUE7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTs7OztJQUtELHlDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQTFDQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsMmhDQUE4Qzs7aUJBRS9DOzs7Ozt5QkFZQSxLQUFLOztJQTRCTiw2QkFBQztDQUFBLEFBNUNELElBNENDO1NBdkNZLHNCQUFzQjs7O0lBR25DLGtEQUE2Qjs7SUFDN0Isd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWxpc3Rpbmctc2VuZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdGluZy1zZW5kZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xpc3Rpbmctc2VuZGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdGluZ1NlbmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbnB1YmxpYyBzZW5kZXJDb25maWdGb3JtOiBhbnk7XHJcbnB1YmxpYyBsb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09SW5wdXQgRm9yIExpYiBMaXN0aW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQElucHV0KClcclxuc2V0IGNvbmZpZyhyZWNlaXZlZERhdGE6IGFueSkge1xyXG4gXHJcbiAgdGhpcy5zZW5kZXJDb25maWdGb3JtID0ge1xyXG4gICAgYXBpVXJsOiByZWNlaXZlZERhdGEuYXBpQmFzZVVybCxcclxuICAgIGxpc3RFbmRQb2ludDogcmVjZWl2ZWREYXRhLmxpc3RFbmRQb2ludCxcclxuICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxyXG4gICAgdGFibGVOYW1lOiByZWNlaXZlZERhdGEudGFibGVOYW1lLFxyXG4gICAgbGlzdEFycmF5X3NraXA6IFtcIl9pZFwiLCBcInVzZXJJZFwiLCBcImNyZWF0ZWRfYXRcIiwgXCJpZFwiLCBcInVwZGF0ZWRfYXRcIl0sXHJcbiAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjogeyBcIm5hbWVcIjogXCJTZW5kZXIncyBOYW1lXCIsIFwiZW1haWxcIjpcIlNlbmRlcidzIEVtYWlsXCJ9LFxyXG4gICAgYWRtaW50YWJsZW5hbWVUYWJsZU5hbWU6IFwiYWRtaW5cIixcclxuICAgIHN0YXR1c2FycjogW3sgdmFsOiAxLCBuYW1lOiBcIkFjdGl2ZVwiIH0sIHsgdmFsOiAwLCBuYW1lOiAnSW5hY3RpdmUnIH1dLFxyXG4gICAgdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXHJcbiAgICBlZGl0VXJsOiByZWNlaXZlZERhdGEuZWRpdFVybCxcclxuICAgIGp3dFRva2VuOiByZWNlaXZlZERhdGEuand0VG9rZW4sXHJcbiAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxyXG4gICAgdmlldzogcmVjZWl2ZWREYXRhLnZpZXcsXHJcbiAgXHJcbiAgfVxyXG4gIHRoaXMubG9hZGVyID0gZmFsc2U7XHJcbn1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbm5nT25Jbml0KCkge1xyXG59XHJcblxyXG59XHJcblxyXG5cclxuIl19