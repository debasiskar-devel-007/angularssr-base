import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
export declare class ResourcelibService {
    private _http;
    private _authHttp;
    private cookieService;
    lengthis: any;
    percentageis: any;
    inprogress: any;
    progress: any;
    uploadtype: any;
    uploaderror: any;
    accesstoken: any;
    fileservername: any;
    serverUrl: any;
    addendpointUrl: any;
    updateendpointUrl: any;
    deletesingle_endpointUrl: any;
    updatestatus_single_endpointUrl: any;
    deletemultiple_endpointUrl: any;
    updatestatus_multiple_endpointUrl: any;
    getdata_endpointUrl: any;
    constructor(_http: HttpClient, _authHttp: HttpClient, cookieService: CookieService);
    isTokenExpired(): void;
    addData(endpoint: any, requestdata: any): Observable<Object>;
    UpdateData(endpoint: any, requestdata: any): Observable<Object>;
    getData(endpoint: any, requestdata: any): Observable<Object>;
    deleteSingleData(endpoint: any, requestdata: any): Observable<Object>;
    deleteMultipleData(endpoint: any, requestdata: any): Observable<Object>;
    UpdateStatusForSingleData(endpoint: any, requestdata: any): Observable<Object>;
    UpdateStatusForMultipleData(endpoint: any, requestdata: any): Observable<Object>;
    CustomRequest(endpoint: any, requestdata: any): Observable<Object>;
}
