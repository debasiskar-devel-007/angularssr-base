/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, EventEmitter, Injectable, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { humanizeBytes } from 'ngx-uploader';
export class ApiService {
    /*@Input()
      set uploadOutput(uploadOutput: any){
        this.uploadOutputval = uploadOutput;
        console.log('this.uploadOutput');
        console.log(this.uploadOutput);
      }*/
    /**
     * @param {?} _http
     * @param {?} _authHttp
     */
    constructor(_http, _authHttp) {
        this._http = _http;
        this._authHttp = _authHttp;
        this.domain_for_fileupload_val = 'http://developmentapi.audiodeadline.com:7031/uploads' + 'uploads';
        this.progress = [];
        this.uploaderror = '';
        // public uploadOutputval:any;
        this.fileservername = [];
        this.options = { concurrency: 10, maxUploads: 10 };
        this.files = []; // local uploading files array
        this.uploadInput = new EventEmitter(); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = humanizeBytes;
        //console.log('this.domain');
        //console.log(this.domain);
    }
    /**
     * @param {?} uploadOutput
     * @param {?} arrayvalue
     * @param {?} uploadtypec
     * @param {?} uploadpath
     * @return {?}
     */
    onUploadOutput(uploadOutput, arrayvalue, uploadtypec, uploadpath) {
        // this.uploaderInput.nativeElement.value = '';
        if (uploadOutput.type === 'allAddedToQueue') {
            /** @type {?} */
            const event = {
                type: 'uploadAll',
                url: 'http://developmentapi.audiodeadline.com:7031/uploads',
                method: 'POST',
                data: { path: uploadpath }
            };
            this.uploadInput.emit(event);
        }
        else if (uploadOutput.type === 'addedToQueue' && typeof uploadOutput.file !== 'undefined') {
            if (uploadOutput.file.response != '') {
                this.files = [];
                this.files.push(uploadOutput.file);
                console.log('this.files*********');
                console.log(this.files);
                this.lengthis = this.files.length;
                this.percentageis = this.files[0].progress.data.percentage;
            }
        }
        else if (uploadOutput.type === 'uploading' && typeof uploadOutput.file !== 'undefined') {
            /** @type {?} */
            const index = this.files.findIndex((/**
             * @param {?} file
             * @return {?}
             */
            file => typeof uploadOutput.file !== 'undefined' && file.id === uploadOutput.file.id));
            this.files[index] = uploadOutput.file;
            this.lengthis = this.files.length;
            if (this.files[0] != null && this.files[0].progress != null)
                this.percentageis = this.files[0].progress.data.percentage;
            console.log('this.files==================');
            console.log(this.files);
        }
        else if (uploadOutput.type === 'removed') {
            this.files = this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            (file) => file !== uploadOutput.file));
        }
        else if (uploadOutput.type === 'dragOver') {
            this.dragOver = true;
        }
        else if (uploadOutput.type === 'dragOut') {
            this.dragOver = false;
        }
        else if (uploadOutput.type === 'drop') {
            this.dragOver = false;
        }
        console.log('files');
        console.log(this.files);
        if (this.files[0] != null && this.files[0].progress != null) {
            if (this.progress[arrayvalue] == null)
                this.progress[arrayvalue] = 0;
            this.inprogress = true;
            console.log('file upload progressing');
            console.log(this.files[0].progress.data.percentage);
            this.progress[arrayvalue] = (this.files[0].progress.data.percentage);
            if (this.progress[arrayvalue] == 100) {
                this.progress[arrayvalue] = null;
                this.inprogress = null;
            }
            console.log('this.uploadtype in api service');
            console.log(uploadtypec);
        }
        if (uploadtypec == 'single') {
            // this.fileservername = [];
            if (this.fileservername[arrayvalue] == null)
                this.fileservername[arrayvalue] = [];
            this.fileservername[arrayvalue] = [];
            if (this.files[0].response != null)
                this.fileservername[arrayvalue].push(this.files[0].response);
        }
        if (uploadtypec == 'multiple') {
            console.log('this.files[0].response');
            // console.log(this.files[0].response);
            console.log(this.files.length);
            console.log(this.files);
            if (this.fileservername[arrayvalue] == null)
                this.fileservername[arrayvalue] = [];
            // if(this.files[0].response!=null){
            if (this.files.length == 1) {
                if (this.files[0] && this.files[0].response != null && this.files[0].response.error_code == null) {
                    this.fileservername[arrayvalue].push(this.files[0].response);
                    this.files = [];
                    this.uploaderror = '';
                }
                if (this.files[0] != null && this.files[0].response != null && this.files[0].response.error_code != null) {
                    this.uploaderror = 'error occured on uploading !!!';
                }
            }
            if (this.files.length > 1) {
                console.log('sdfdsf==== in multiple length ');
                for (let b in this.files) {
                    if (this.files[b].response != null && this.files[b].response.error_code == null) {
                        this.fileservername[arrayvalue].push(this.files[b].response);
                    }
                }
                this.files = [];
            }
            //}
        }
        console.log('this.fileservername');
        console.log(this.fileservername);
        console.log(this.uploaderror);
        //this.uploaderservice.filenamevalc1=this.fileservername;
        //UploaderComponent.filenamevalc1=87;
        //console.log(classval);
    }
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
     * @return {?}
     */
    getclientip() {
        console.log('endpoint');
        // this.isTokenExpired()
        /** @type {?} */
        var result = this._http.get("http://ipinfo.io/?format=json&token=9797c42b93078a").pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @return {?}
     */
    getEndpoint(endpoint) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': ''
            })
        };
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log('');
        // this.isTokenExpired()
        /** @type {?} */
        var result = this._http.post('' + endpoint.source, {}, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @return {?}
     */
    getData(endpoint) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': ''
            })
        };
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log('');
        // this.isTokenExpired()
        /** @type {?} */
        var result = this._http.post('' + 'datalist', endpoint, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    // getData end
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    postData(endpoint, data) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': data.token
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        /** @type {?} */
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    postDatawithoutToken(endpoint, data) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    postlogin(endpoint, data) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    } // postData end
    // postData end
    /**
     * @param {?} link
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    postSearch(link, token, source) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        console.log('------ ');
        console.log("link in postSearch");
        console.log(link);
        console.log(source);
        /** @type {?} */
        var result = this._http.post(link, source, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} link
     * @param {?} source
     * @return {?}
     */
    postSearch1(link, source) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': source.token
            })
        };
        console.log('------ ');
        console.log("link");
        console.log(link);
        /** @type {?} */
        var result = this._http.post(link, source).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} id
     * @return {?}
     */
    putData(endpoint, data, id) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': ''
            })
        };
        console.log('');
        console.log("endpoint");
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.put(this.getEndpointUrl(endpoint) + '/' + id, JSON.stringify(data), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    deteOneData(endpoint, data, token, source) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        console.log('------ ');
        console.log("endpoint");
        console.log(endpoint);
        console.log(data);
        /** @type {?} */
        let dataval;
        dataval = { source: source, id: data._id };
        /** @type {?} */
        var result = this._http.post(endpoint, dataval, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    togglestatus(endpoint, data, token, source) {
        console.log(endpoint);
        console.log(data);
        console.log(token);
        console.log(source);
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        console.log('------ ');
        console.log("endpoint");
        console.log(endpoint);
        console.log(data);
        /** @type {?} */
        let dataval;
        dataval = { source: source, data: data };
        /** @type {?} */
        var result = this._http.post(endpoint, dataval, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    deteManyData(endpoint, data, token, source) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        console.log('------ ');
        console.log("endpoint");
        console.log(endpoint);
        console.log(data);
        /** @type {?} */
        let dataval;
        dataval = { source: source, ids: data };
        /** @type {?} */
        var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} val
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    togglestatusmany(endpoint, data, val, token, source) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        console.log('------ ');
        console.log("endpoint");
        console.log(endpoint);
        console.log(data);
        /** @type {?} */
        let dataval;
        dataval = { source: source, data: { ids: data, val: val } };
        /** @type {?} */
        var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @private
     * @param {?} endpoint
     * @return {?}
     */
    getEndpointUrl(endpoint) {
        return '' + endpoint;
    }
}
ApiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: HttpClient }
];
ApiService.propDecorators = {
    uploaderInput: [{ type: ViewChild, args: ['fileInput1',] }]
};
if (false) {
    /** @type {?} */
    ApiService.prototype.domain_for_fileupload_val;
    /** @type {?} */
    ApiService.prototype.files;
    /** @type {?} */
    ApiService.prototype.uploadInput;
    /** @type {?} */
    ApiService.prototype.humanizeBytes;
    /** @type {?} */
    ApiService.prototype.dragOver;
    /** @type {?} */
    ApiService.prototype.options;
    /** @type {?} */
    ApiService.prototype.uploaderInput;
    /** @type {?} */
    ApiService.prototype.lengthis;
    /** @type {?} */
    ApiService.prototype.percentageis;
    /** @type {?} */
    ApiService.prototype.inprogress;
    /** @type {?} */
    ApiService.prototype.progress;
    /** @type {?} */
    ApiService.prototype.uploadtype;
    /** @type {?} */
    ApiService.prototype.uploaderror;
    /** @type {?} */
    ApiService.prototype.fileservername;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._authHttp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFTLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQWEsR0FBRyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQXlDLGFBQWEsRUFBaUMsTUFBTSxjQUFjLENBQUM7QUFJbkgsTUFBTSxPQUFPLFVBQVU7Ozs7Ozs7Ozs7O0lBNkJyQixZQUFvQixLQUFpQixFQUNqQixTQUFxQjtRQURyQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVk7UUE3QmxDLDhCQUF5QixHQUFRLHNEQUFzRCxHQUFHLFNBQVMsQ0FBRTtRQWdCckcsYUFBUSxHQUFLLEVBQUUsQ0FBQztRQUVoQixnQkFBVyxHQUFLLEVBQUUsQ0FBQzs7UUFFMUIsbUJBQWMsR0FBSyxFQUFFLENBQUM7UUFZcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsOEJBQThCO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQyxDQUFDLHlEQUF5RDtRQUM3RyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyw2QkFBNkI7UUFDN0IsMkJBQTJCO0lBQzdCLENBQUM7Ozs7Ozs7O0lBRUQsY0FBYyxDQUFDLFlBQTBCLEVBQUUsVUFBZSxFQUFFLFdBQWdCLEVBQUUsVUFBZTtRQUMz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T25ELDhCQUFnQjs7SUFDaEIsa0NBQW9COztJQUNwQixnQ0FBa0I7O0lBQ2xCLDhCQUF1Qjs7SUFDdkIsZ0NBQWtCOztJQUNsQixpQ0FBMEI7O0lBRTFCLG9DQUFzQjs7Ozs7SUFRViwyQkFBeUI7Ozs7O0lBQ3pCLCtCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbnB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVXBsb2FkT3V0cHV0LCBVcGxvYWRJbnB1dCwgVXBsb2FkRmlsZSwgaHVtYW5pemVCeXRlcywgVXBsb2FkZXJPcHRpb25zLCBVcGxvYWRTdGF0dXMgfSBmcm9tICduZ3gtdXBsb2FkZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcbiAgcHVibGljIGRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWw6IGFueSA9ICdodHRwOi8vZGV2ZWxvcG1lbnRhcGkuYXVkaW9kZWFkbGluZS5jb206NzAzMS91cGxvYWRzJyArICd1cGxvYWRzJyA7XG4gIGZpbGVzOiBVcGxvYWRGaWxlW107XG4gIHVwbG9hZElucHV0OiBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+O1xuICBodW1hbml6ZUJ5dGVzOiBGdW5jdGlvbjtcbiAgZHJhZ092ZXI6IGJvb2xlYW47XG4gIG9wdGlvbnM6IFVwbG9hZGVyT3B0aW9ucztcbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0MScpIHVwbG9hZGVySW5wdXQ6IEVsZW1lbnRSZWY7XG4gIC8qQElucHV0KClcbiAgc2V0IGRvbWFpbl9mb3JfZmlsZXVwbG9hZChkb21haW5fZm9yX2ZpbGV1cGxvYWQ6IGFueSkge1xuICAgIHRoaXMuZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbCA9IGRvbWFpbl9mb3JfZmlsZXVwbG9hZDtcbiAgICBjb25zb2xlLmxvZygndGhpcy5za2lwdmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5kb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsKTtcbiAgfSovXG4gIHB1YmxpYyBsZW5ndGhpcztcbiAgcHVibGljIHBlcmNlbnRhZ2VpcztcbiAgcHVibGljIGlucHJvZ3Jlc3M7XG4gIHB1YmxpYyBwcm9ncmVzczphbnk9W107XG4gIHB1YmxpYyB1cGxvYWR0eXBlO1xuICBwdWJsaWMgdXBsb2FkZXJyb3I6YW55PScnO1xuICAvLyBwdWJsaWMgdXBsb2FkT3V0cHV0dmFsOmFueTtcbiAgZmlsZXNlcnZlcm5hbWU6YW55PVtdO1xuXG4gIC8qQElucHV0KClcbiAgc2V0IHVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IGFueSl7XG4gICAgdGhpcy51cGxvYWRPdXRwdXR2YWwgPSB1cGxvYWRPdXRwdXQ7XG4gICAgY29uc29sZS5sb2coJ3RoaXMudXBsb2FkT3V0cHV0Jyk7XG4gICAgY29uc29sZS5sb2codGhpcy51cGxvYWRPdXRwdXQpO1xuICB9Ki9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0aEh0dHA6IEh0dHBDbGllbnQsXG5cbiAgICAgICAgICAgICAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0geyBjb25jdXJyZW5jeTogMTAsIG1heFVwbG9hZHM6IDEwIH07XG4gICAgdGhpcy5maWxlcyA9IFtdOyAvLyBsb2NhbCB1cGxvYWRpbmcgZmlsZXMgYXJyYXlcbiAgICB0aGlzLnVwbG9hZElucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRJbnB1dD4oKTsgLy8gaW5wdXQgZXZlbnRzLCB3ZSB1c2UgdGhpcyB0byBlbWl0IGRhdGEgdG8gbmd4LXVwbG9hZGVyXG4gICAgdGhpcy5odW1hbml6ZUJ5dGVzID0gaHVtYW5pemVCeXRlcztcbiAgICAvL2NvbnNvbGUubG9nKCd0aGlzLmRvbWFpbicpO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5kb21haW4pO1xuICB9XG5cbiAgb25VcGxvYWRPdXRwdXQodXBsb2FkT3V0cHV0OiBVcGxvYWRPdXRwdXQsIGFycmF5dmFsdWU6IGFueSwgdXBsb2FkdHlwZWM6IGFueSwgdXBsb2FkcGF0aDogYW55KTogdm9pZCB7XG4gICAgLy8gdGhpcy51cGxvYWRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdhbGxBZGRlZFRvUXVldWUnKSB7XG4gICAgICBjb25zdCBldmVudDogVXBsb2FkSW5wdXQgPSB7XG4gICAgICAgIHR5cGU6ICd1cGxvYWRBbGwnLFxuICAgICAgICB1cmw6ICdodHRwOi8vZGV2ZWxvcG1lbnRhcGkuYXVkaW9kZWFkbGluZS5jb206NzAzMS91cGxvYWRzJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHsgcGF0aDogdXBsb2FkcGF0aCB9XG4gICAgICB9O1xuICAgICAgdGhpcy51cGxvYWRJbnB1dC5lbWl0KGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnYWRkZWRUb1F1ZXVlJyAmJiB0eXBlb2YgdXBsb2FkT3V0cHV0LmZpbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodXBsb2FkT3V0cHV0LmZpbGUucmVzcG9uc2UgIT0gJycpIHtcbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB0aGlzLmZpbGVzLnB1c2godXBsb2FkT3V0cHV0LmZpbGUpO1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlcyoqKioqKioqKicpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbiAgICAgICAgdGhpcy5sZW5ndGhpcyA9IHRoaXMuZmlsZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLnBlcmNlbnRhZ2VpcyA9IHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICd1cGxvYWRpbmcnICYmIHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maWxlcy5maW5kSW5kZXgoZmlsZSA9PiB0eXBlb2YgdXBsb2FkT3V0cHV0LmZpbGUgIT09ICd1bmRlZmluZWQnICYmIGZpbGUuaWQgPT09IHVwbG9hZE91dHB1dC5maWxlLmlkKTtcbiAgICAgIHRoaXMuZmlsZXNbaW5kZXhdID0gdXBsb2FkT3V0cHV0LmZpbGU7XG4gICAgICB0aGlzLmxlbmd0aGlzID0gdGhpcy5maWxlcy5sZW5ndGg7XG4gICAgICBpZih0aGlzLmZpbGVzWzBdIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MhPW51bGwpXG4gICAgICAgIHRoaXMucGVyY2VudGFnZWlzID0gdGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2U7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlcz09PT09PT09PT09PT09PT09PScpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ3JlbW92ZWQnKSB7XG4gICAgICB0aGlzLmZpbGVzID0gdGhpcy5maWxlcy5maWx0ZXIoKGZpbGU6IFVwbG9hZEZpbGUpID0+IGZpbGUgIT09IHVwbG9hZE91dHB1dC5maWxlKTtcbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnZHJhZ092ZXInKSB7XG4gICAgICB0aGlzLmRyYWdPdmVyID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnZHJhZ091dCcpIHtcbiAgICAgIHRoaXMuZHJhZ092ZXIgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnZHJvcCcpIHtcbiAgICAgIHRoaXMuZHJhZ092ZXIgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2ZpbGVzJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4gICAgaWYodGhpcy5maWxlc1swXSE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnByb2dyZXNzIT1udWxsKSB7XG4gICAgICBpZih0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdPT1udWxsKXRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09MDtcbiAgICAgIHRoaXMuaW5wcm9ncmVzcz10cnVlO1xuICAgICAgY29uc29sZS5sb2coJ2ZpbGUgdXBsb2FkIHByb2dyZXNzaW5nJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZSk7XG4gICAgICB0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdID0gKHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlKTtcbiAgICAgIGlmKHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09PTEwMCkge1xuICAgICAgICB0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdPW51bGw7XG4gICAgICAgIHRoaXMuaW5wcm9ncmVzcz1udWxsO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3RoaXMudXBsb2FkdHlwZSBpbiBhcGkgc2VydmljZScpO1xuICAgICAgY29uc29sZS5sb2codXBsb2FkdHlwZWMpO1xuICAgIH1cbiAgICBpZiAodXBsb2FkdHlwZWM9PSdzaW5nbGUnKXtcbiAgICAgIC8vIHRoaXMuZmlsZXNlcnZlcm5hbWUgPSBbXTtcbiAgICAgIGlmKHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPT0gbnVsbCkgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXT1bXTtcbiAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV09W107XG4gICAgICBpZih0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsKSB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdLnB1c2godGhpcy5maWxlc1swXS5yZXNwb25zZSk7XG4gICAgfVxuICAgIGlmICh1cGxvYWR0eXBlYyA9PSAnbXVsdGlwbGUnKSB7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlc1swXS5yZXNwb25zZScpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlc1swXS5yZXNwb25zZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzLmxlbmd0aCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbiAgICAgIGlmICh0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID09IG51bGwpIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPSBbXTtcbiAgICAgIC8vIGlmKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwpe1xuICAgICAgaWYodGhpcy5maWxlcy5sZW5ndGg9PTEpIHtcbiAgICAgICAgaWYodGhpcy5maWxlc1swXSAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UuZXJyb3JfY29kZT09bnVsbCApIHtcbiAgICAgICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdLnB1c2godGhpcy5maWxlc1swXS5yZXNwb25zZSk7XG4gICAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICAgIHRoaXMudXBsb2FkZXJyb3I9Jyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5maWxlc1swXSAhPW51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlLmVycm9yX2NvZGUhPW51bGwpe1xuICAgICAgICAgIHRoaXMudXBsb2FkZXJyb3I9J2Vycm9yIG9jY3VyZWQgb24gdXBsb2FkaW5nICEhISc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuZmlsZXMubGVuZ3RoPjEpXG4gICAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZGZkc2Y9PT09IGluIG11bHRpcGxlIGxlbmd0aCAnKTtcbiAgICAgICAgZm9yKGxldCBiIGluIHRoaXMuZmlsZXMpe1xuICAgICAgICAgIGlmKHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UhPW51bGwgJiYgdGhpcy5maWxlc1tiXS5yZXNwb25zZS5lcnJvcl9jb2RlPT1udWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdLnB1c2godGhpcy5maWxlc1tiXS5yZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsZXM9W107XG4gICAgICB9XG4gICAgICAvL31cbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXNlcnZlcm5hbWUnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzZXJ2ZXJuYW1lKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVwbG9hZGVycm9yKTtcbiAgICAvL3RoaXMudXBsb2FkZXJzZXJ2aWNlLmZpbGVuYW1ldmFsYzE9dGhpcy5maWxlc2VydmVybmFtZTtcbiAgICAvL1VwbG9hZGVyQ29tcG9uZW50LmZpbGVuYW1ldmFsYzE9ODc7XG4gICAgLy9jb25zb2xlLmxvZyhjbGFzc3ZhbCk7XG5cbiAgfVxuICBpc1Rva2VuRXhwaXJlZCgpIHtcblxuICAgIC8vIGNvbnN0IGhlbHBlciA9IG5ldyBKd3RIZWxwZXJTZXJ2aWNlKCk7XG4gICAgLy8gY29uc3QgZGVjb2RlZFRva2VuID0gaGVscGVyLmRlY29kZVRva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKTtcbiAgICAvLyB2YXIgaXNJZFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4nLGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoX3Rva2VuJykpXG4gICAgLy8gY29uc3QgaXNSZWZyZXNoVG9rZW5FeHBpcmVkID0gaGVscGVyLmlzVG9rZW5FeHBpcmVkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoX3Rva2VuJykpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpZF90b2tlbiBpc0V4cGlyZWQ6Jyxpc0lkVG9rZW5FeHBpcmVkKVxuICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuIGlzRXhwaXJlZDonLGlzUmVmcmVzaFRva2VuRXhwaXJlZClcblxuXG5cbiAgfVxuXG4gIGdldGNsaWVudGlwKCkge1xuXG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG5cbiAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5nZXQoXCJodHRwOi8vaXBpbmZvLmlvLz9mb3JtYXQ9anNvbiZ0b2tlbj05Nzk3YzQyYjkzMDc4YVwiKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cblxuXG4gIGdldEVuZHBvaW50KGVuZHBvaW50OiBhbnkpIHtcblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJydcbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XG4gICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xuICAgIGNvbnNvbGUubG9nKCcnKTtcblxuICAgIC8vIHRoaXMuaXNUb2tlbkV4cGlyZWQoKVxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoJycgKyBlbmRwb2ludC5zb3VyY2UsIHt9LCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldERhdGEoZW5kcG9pbnQ6IGFueSkge1xuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnJ1xuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zb2xlLmxvZygnaHR0cE9wdGlvbnMnKTtcbiAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2coJycpO1xuXG4gICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCgnJyArICdkYXRhbGlzdCcsIGVuZHBvaW50LCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGdldERhdGEgZW5kXG5cbiAgcG9zdERhdGEoZW5kcG9pbnQ6YW55LCBkYXRhKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBkYXRhLnRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJycpO1xuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zb2xlLmxvZygnaHR0cE9wdGlvbnMnKTtcbiAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLmdldEVuZHBvaW50VXJsKGVuZHBvaW50KSwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBwb3N0RGF0YXdpdGhvdXRUb2tlbihlbmRwb2ludDphbnksIGRhdGEpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJycpO1xuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcG9zdGxvZ2luKGVuZHBvaW50OmFueSwgZGF0YSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gLy8gcG9zdERhdGEgZW5kXG5cblxuXG5cbiAgcG9zdFNlYXJjaCggbGluayx0b2tlbixzb3VyY2UpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuICAgIGNvbnNvbGUubG9nKFwibGluayBpbiBwb3N0U2VhcmNoXCIpO1xuICAgIGNvbnNvbGUubG9nKGxpbmspO1xuICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChsaW5rLCBzb3VyY2UsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxucG9zdFNlYXJjaDEoIGxpbmssc291cmNlKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHNvdXJjZS50b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJsaW5rXCIpO1xuICAgIGNvbnNvbGUubG9nKGxpbmspO1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QobGluaywgc291cmNlKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cblxuXG5cbiAgcHV0RGF0YShlbmRwb2ludDphbnksIGRhdGEsIGlkOmFueSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnJ1xuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wdXQodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCkrJy8nK2lkLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cblxuICBkZXRlT25lRGF0YShlbmRwb2ludDphbnksIGRhdGEsdG9rZW4sc291cmNlKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbiAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsZXQgZGF0YXZhbDphbnk7XG4gICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxpZDpkYXRhLl9pZH1cbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50LGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gICAgdG9nZ2xlc3RhdHVzKGVuZHBvaW50OmFueSwgZGF0YSx0b2tlbixzb3VyY2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgICAgY29uc29sZS5sb2coc291cmNlKTtcblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgbGV0IGRhdGF2YWw6YW55O1xuICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsZGF0YTpkYXRhfVxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZGV0ZU1hbnlEYXRhKGVuZHBvaW50OmFueSwgZGF0YSx0b2tlbixzb3VyY2UpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGxldCBkYXRhdmFsOmFueTtcbiAgICBkYXRhdmFsPXtzb3VyY2U6c291cmNlLGlkczpkYXRhfVxuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQrJ21hbnknLGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gICAgdG9nZ2xlc3RhdHVzbWFueShlbmRwb2ludDphbnksIGRhdGEsdmFsLHRva2VuLHNvdXJjZSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgbGV0IGRhdGF2YWw6YW55O1xuICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsZGF0YTp7aWRzOmRhdGEsdmFsOnZhbH19O1xuICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQrJ21hbnknLGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cblxuICBwcml2YXRlIGdldEVuZHBvaW50VXJsKGVuZHBvaW50OiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiAnJyArIGVuZHBvaW50O1xuICB9XG5cbn1cbiJdfQ==