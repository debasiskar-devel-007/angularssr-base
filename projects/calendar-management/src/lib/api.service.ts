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
  public accesstoken:any='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjQ3MzQxNTUsImlhdCI6MTU2NDY0Nzc1NX0.qBggf5Kwjl19GgA93Ijk36Lh81h78WXC8Hph4Kee-sw';
  fileservername: any = [];
  serverUrl: any;
  endpointUrl: any;
  private subjectForServerUrl = new Subject<any>();
  private subjectForEndpointUrl = new Subject<any>();
  public subscriptionServer: Subscription;
  public subscriptionEndpoint: Subscription;

  constructor(private _http: HttpClient,
    private _authHttp: HttpClient) {
    this.subscriptionServer = this.getServerUrl().subscribe(message => {
     let result: any;
      result = message;
      if (result != null) {
        this.serverUrl = result;
        console.log('this.serverUrl ----- ' + this.serverUrl);
      } else {
        this.serverUrl = null;
      }
    });
    this.subscriptionEndpoint = this.getEndpoint().subscribe(message => {
      let result: any;
      result = message;
      if (result != null) {
        this.endpointUrl = result;
        console.log('this.getEndpoint ----- ' + this.endpointUrl);
      } else {
        this.endpointUrl = null;
      }
    });
  }

  setServerUrl(value: any) {
    this.subjectForServerUrl.next(value);
  }
  public clearServerUrl() {
    this.subjectForServerUrl.next(null);
  }
  public getServerUrl(): Observable<any> {
    return this.subjectForServerUrl.asObservable();
  }

  setEndpoint(value: any) {
    this.subjectForEndpointUrl.next(value);
  }
  public clearEndpoint() {
    this.subjectForEndpointUrl.next(null);
  }
  public getEndpoint(): Observable<any> {
    return this.subjectForEndpointUrl.asObservable();
  }


  isTokenExpired() {

    // const helper = new JwtHelperService();
    // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
    // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
    // console.log('refresh_token',localStorage.getItem('refresh_token'))
    // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
    // console.log('id_token isExpired:',isIdTokenExpired)
    // console.log('refresh_token isExpired:',isRefreshTokenExpired)



  }

  addOrEditData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken          //hard code written access-token(temp)
      })
    };
    var result = this._http.post(this.serverUrl + 'addorupdatedata', JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  getData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + 'datalist', JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  deleteSingleData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + 'deletesingledata', JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  deleteMultipleData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + 'deletemultipledata', JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  UpdateStatusForSingleData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + this.endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  UpdateStatusForMultipleData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + this.endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

// ---------------------------------------------------------------------------------------------




}