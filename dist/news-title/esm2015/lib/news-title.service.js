/**
 * @fileoverview added by tsickle
 * Generated from: lib/news-title.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "ngx-cookie-service";
export class NewsTitleService {
    /**
     * @param {?} _http
     * @param {?} _authHttp
     * @param {?} cookieService
     */
    constructor(_http, _authHttp, cookieService) {
        this._http = _http;
        this._authHttp = _authHttp;
        this.cookieService = cookieService;
        this.progress = [];
        this.uploaderror = '';
        this.accesstoken = this.cookieService.get('jwtToken');
        this.fileservername = [];
        this.serverUrl = '';
        this.getdata_endpointUrl = 'datalist';
    }
    ;
    /**
     * @return {?}
     */
    isTokenExpired() {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    addData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    UpdateData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    getData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    deleteSingleData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    deleteMultipleData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    UpdateStatusForSingleData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    UpdateStatusForMultipleData(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint + 'many', JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} requestdata
     * @return {?}
     */
    CustomRequest(endpoint, requestdata) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.accesstoken
            })
        };
        /** @type {?} */
        var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
}
NewsTitleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NewsTitleService.ctorParameters = () => [
    { type: HttpClient },
    { type: HttpClient },
    { type: CookieService }
];
/** @nocollapse */ NewsTitleService.ngInjectableDef = i0.defineInjectable({ factory: function NewsTitleService_Factory() { return new NewsTitleService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: NewsTitleService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NewsTitleService.prototype.lengthis;
    /** @type {?} */
    NewsTitleService.prototype.percentageis;
    /** @type {?} */
    NewsTitleService.prototype.inprogress;
    /** @type {?} */
    NewsTitleService.prototype.progress;
    /** @type {?} */
    NewsTitleService.prototype.uploadtype;
    /** @type {?} */
    NewsTitleService.prototype.uploaderror;
    /** @type {?} */
    NewsTitleService.prototype.accesstoken;
    /** @type {?} */
    NewsTitleService.prototype.fileservername;
    /** @type {?} */
    NewsTitleService.prototype.serverUrl;
    /** @type {?} */
    NewsTitleService.prototype.addendpointUrl;
    /** @type {?} */
    NewsTitleService.prototype.updateendpointUrl;
    /** @type {?} */
    NewsTitleService.prototype.deletesingle_endpointUrl;
    /** @type {?} */
    NewsTitleService.prototype.updatestatus_single_endpointUrl;
    /** @type {?} */
    NewsTitleService.prototype.deletemultiple_endpointUrl;
    /** @type {?} */
    NewsTitleService.prototype.updatestatus_multiple_endpointUrl;
    /** @type {?} */
    NewsTitleService.prototype.getdata_endpointUrl;
    /**
     * @type {?}
     * @private
     */
    NewsTitleService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    NewsTitleService.prototype._authHttp;
    /**
     * @type {?}
     * @private
     */
    NewsTitleService.prototype.cookieService;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV3cy10aXRsZS1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvbmV3cy10aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBdUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRyxPQUFPLEVBQUUsR0FBRyxFQUFtQixNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQU1uRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFrQjNCLFlBQW9CLEtBQWlCLEVBQVUsU0FBcUIsRUFBUyxhQUE2QjtRQUF0RixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQWRuRyxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBRW5CLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGdCQUFXLEdBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEQsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQU9wQix3QkFBbUIsR0FBUSxVQUFVLENBQUM7SUFFaUUsQ0FBQztJQVhsRCxDQUFDOzs7O0lBYTlELGNBQWM7UUFDWix5Q0FBeUM7UUFDekMsNkVBQTZFO1FBQzdFLGtGQUFrRjtRQUNsRixxRUFBcUU7UUFDckUsOEZBQThGO1FBQzlGLHNEQUFzRDtRQUN0RCxnRUFBZ0U7SUFDbEUsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLFFBQWEsRUFBRSxXQUFnQjs7Y0FDL0IsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcs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WUFDRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLENBQUM7UUFDdkgsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7O1lBdkhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLFVBQVU7WUFBVixVQUFVO1lBR1YsYUFBYTs7Ozs7SUFPcEIsb0NBQWdCOztJQUNoQix3Q0FBb0I7O0lBQ3BCLHNDQUFrQjs7SUFDbEIsb0NBQTBCOztJQUMxQixzQ0FBa0I7O0lBQ2xCLHVDQUE2Qjs7SUFDN0IsdUNBQTZEOztJQUM3RCwwQ0FBZ0M7O0lBQ2hDLHFDQUEyQjs7SUFDM0IsMENBQTJCOztJQUMzQiw2Q0FBOEI7O0lBQzlCLG9EQUFxQzs7SUFDckMsMkRBQTRDOztJQUM1QyxzREFBdUM7O0lBQ3ZDLDZEQUE4Qzs7SUFDOUMsK0NBQTZDOzs7OztJQUVqQyxpQ0FBeUI7Ozs7O0lBQUUscUNBQTZCOzs7OztJQUFDLHlDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZXdzVGl0bGVTZXJ2aWNlIHtcbiAgcHVibGljIGxlbmd0aGlzO1xuICBwdWJsaWMgcGVyY2VudGFnZWlzO1xuICBwdWJsaWMgaW5wcm9ncmVzcztcbiAgcHVibGljIHByb2dyZXNzOiBhbnkgPSBbXTtcbiAgcHVibGljIHVwbG9hZHR5cGU7XG4gIHB1YmxpYyB1cGxvYWRlcnJvcjogYW55ID0gJyc7XG4gIHB1YmxpYyBhY2Nlc3N0b2tlbjogYW55ID0gdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnand0VG9rZW4nKTs7XG4gIHB1YmxpYyBmaWxlc2VydmVybmFtZTogYW55ID0gW107XG4gIHB1YmxpYyBzZXJ2ZXJVcmw6IGFueSA9ICcnO1xuICBwdWJsaWMgYWRkZW5kcG9pbnRVcmw6IGFueTtcbiAgcHVibGljIHVwZGF0ZWVuZHBvaW50VXJsOiBhbnk7XG4gIHB1YmxpYyBkZWxldGVzaW5nbGVfZW5kcG9pbnRVcmw6IGFueTtcbiAgcHVibGljIHVwZGF0ZXN0YXR1c19zaW5nbGVfZW5kcG9pbnRVcmw6IGFueTtcbiAgcHVibGljIGRlbGV0ZW11bHRpcGxlX2VuZHBvaW50VXJsOiBhbnk7XG4gIHB1YmxpYyB1cGRhdGVzdGF0dXNfbXVsdGlwbGVfZW5kcG9pbnRVcmw6IGFueTtcbiAgcHVibGljIGdldGRhdGFfZW5kcG9pbnRVcmw6IGFueSA9ICdkYXRhbGlzdCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfYXV0aEh0dHA6IEh0dHBDbGllbnQscHJpdmF0ZSBjb29raWVTZXJ2aWNlIDogQ29va2llU2VydmljZSkgeyB9XG5cbiAgaXNUb2tlbkV4cGlyZWQoKSB7XG4gICAgLy8gY29uc3QgaGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcbiAgICAvLyBjb25zdCBkZWNvZGVkVG9rZW4gPSBoZWxwZXIuZGVjb2RlVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuICAgIC8vIHZhciBpc0lkVG9rZW5FeHBpcmVkID0gaGVscGVyLmlzVG9rZW5FeHBpcmVkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKTtcbiAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbicsbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSlcbiAgICAvLyBjb25zdCBpc1JlZnJlc2hUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2lkX3Rva2VuIGlzRXhwaXJlZDonLGlzSWRUb2tlbkV4cGlyZWQpXG4gICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4gaXNFeHBpcmVkOicsaXNSZWZyZXNoVG9rZW5FeHBpcmVkKVxuICB9XG5cbiAgYWRkRGF0YShlbmRwb2ludDogYW55LCByZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgZW5kcG9pbnQsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgVXBkYXRlRGF0YShlbmRwb2ludDogYW55LCByZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgZW5kcG9pbnQsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0RGF0YShlbmRwb2ludDogYW55LCByZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgZW5kcG9pbnQsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZGVsZXRlU2luZ2xlRGF0YShlbmRwb2ludDogYW55LCByZXF1ZXN0ZGF0YTogYW55KSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRoaXMuYWNjZXNzdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsICsgZW5kcG9pbnQsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZGVsZXRlTXVsdGlwbGVEYXRhKGVuZHBvaW50OiBhbnksIHJlcXVlc3RkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyBlbmRwb2ludCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBVcGRhdGVTdGF0dXNGb3JTaW5nbGVEYXRhKGVuZHBvaW50OiBhbnksIHJlcXVlc3RkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdGhpcy5hY2Nlc3N0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyBlbmRwb2ludCwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBVcGRhdGVTdGF0dXNGb3JNdWx0aXBsZURhdGEoZW5kcG9pbnQ6IGFueSwgcmVxdWVzdGRhdGE6IGFueSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIGVuZHBvaW50ICsgJ21hbnknLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIEN1c3RvbVJlcXVlc3QoZW5kcG9pbnQ6IGFueSwgcmVxdWVzdGRhdGE6IGFueSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0aGlzLmFjY2Vzc3Rva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIGVuZHBvaW50LCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG59XG4iXX0=