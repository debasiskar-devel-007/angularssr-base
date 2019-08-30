import { ElementRef, EventEmitter, Injectable, Input, ViewChild } from '@angular/core';
import { switchMap, map, takeWhile } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// for setting observables to get serverurl and endpointurl from app
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public lengthis;
  public percentageis;
  public inprogress;
  public progress: any = [];
  public uploadtype;
  public uploaderror: any = '';
  public accesstoken: any = '';
  public fileservername: any = [];
  public serverUrl: any = '';
  public addendpointUrl: any;
  public updateendpointUrl: any;
  public deletesingle_endpointUrl: any;
  public updatestatus_single_endpointUrl: any;
  public deletemultiple_endpointUrl: any;
  public updatestatus_multiple_endpointUrl: any;
  public getdata_endpointUrl: any = 'datalist';

  constructor(private _http: HttpClient, private authHttp: HttpClient) { }

  isTokenExpired() {
    // const helper = new JwtHelperService();
    // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
    // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
    // console.log('refresh_token',localStorage.getItem('refresh_token'))
    // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
    // console.log('id_token isExpired:',isIdTokenExpired)
    // console.log('refresh_token isExpired:',isRefreshTokenExpired)
  }

  addData(endpoint: any, requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  UpdateData(endpoint: any, requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  getData(endpoint: any, requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  deleteSingleData(endpoint: any, requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  deleteMultipleData(endpoint: any, requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  UpdateStatusForSingleData(endpoint: any, requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  UpdateStatusForMultipleData(endpoint: any, requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + endpoint + 'many', JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  CustomRequest(endpoint: any, requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

}