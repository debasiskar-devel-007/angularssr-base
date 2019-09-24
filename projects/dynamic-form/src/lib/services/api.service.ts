import { ElementRef, EventEmitter, Injectable, Input, ViewChild } from '@angular/core';
import { switchMap, map, takeWhile } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// for setting observables to get serverurl and endpointurl from app
import { Observable, Subject, Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({   
  providedIn: 'root'
})
export class ApiService {
  public jwtToken:string=''; //jwtToken variable declaration
  public lengthis;
  public percentageis;
  public inprogress;
  public progress: any = [];
  public uploadtype;
  public uploaderror: any = '';
  public accesstoken:any="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1Njk0MTAwMTMsImlhdCI6MTU2OTMyMzYxM30.fAJb5rpCKHF0mwiJmZkhLFQQAKfgumi5b26F3EspB5g";
  fileservername: any = [];
  serverUrl: any;
  addendpointUrl: any;
  uploadEndpointUrl:any; //souresh
  updateendpointUrl: any;
  deletesingle_endpointUrl: any;
  updatestatus_single_endpointUrl: any;
  deletemultiple_endpointUrl: any;
  updatestatus_multiple_endpointUrl: any;
  getdata_endpointUrl: any;
  private subjectForServerUrl = new Subject<any>();
  private subjectForaddEndpointUrl = new Subject<any>();
  private subjectForuploadEndpointUrl = new Subject<any>();  //added by souresh
  private subjectForupdateEndpointUrl = new Subject<any>();
  private subjectFordeletesingleEndpointUrl = new Subject<any>();
  private subjectForupdatestatusSingleEndpointUrl = new Subject<any>();
  private subjectForGetdataEndpointUrl = new Subject<any>();
  public subscriptionServer: Subscription;
  public subscriptionaddEndpoint: Subscription;
  public subscriptionuploadEndpoint: Subscription;   //added by souresh
  public subscriptionupdateEndpoint: Subscription;
  public subscriptiondeletesingleEndpoint: Subscription;
  public subscriptionupdatestatusSingleEndpoint: Subscription;
  public subscriptionGetdataEndpoint: Subscription;

  constructor(private _http: HttpClient,
    private _authHttp: HttpClient,private cookieService:CookieService) {
        
    this.subscriptionServer = this.getServerUrl().subscribe(message => {
     let result: any;
      result = message;
      if (result != null) {
        this.serverUrl = result;
        this.cookieService.set('serverUrl',result);
      } else {
        this.serverUrl = null;
      }
     
    });
    // this.generateToken(); 
    this.cookieService.set('jwtToken',this.accesstoken); //set the cookie service by souresh
    this.subscriptionaddEndpoint = this.getaddEndpoint().subscribe(message => {
      let result: any;
      result = message;
      if (result != null) {
        this.addendpointUrl = result;
        this.cookieService.set('addendpointUrl',this.addendpointUrl); //Souresh
      } else {
        this.addendpointUrl = null;
      }
    });
    /*********added by souresh***********/
    this.subscriptionuploadEndpoint=this.getuploadEndpoint().subscribe(message=>{
      let result:any;
      result=message;
        if(result!=null){
          this.uploadEndpointUrl = result;
          this.cookieService.set('uploadEndpointUrl',this.uploadEndpointUrl); //Souresh
        } else{
          this.uploadEndpointUrl = null;
        }
    })
    /************souresh end here**************/
    this.subscriptionupdateEndpoint = this.getupdateEndpoint().subscribe(message => {
      let result: any;
      result = message;
      if (result != null) {
        this.updateendpointUrl = result;
        this.cookieService.set('updateendpointUrl', this.updateendpointUrl); //Souresh
      } else {
        this.updateendpointUrl = null;
      }
    });
    this.subscriptiondeletesingleEndpoint = this.getdeletesingleEndpoint().subscribe(message => {
      let result: any;
      result = message;
      if (result != null) {
        this.deletesingle_endpointUrl = result;
        this.cookieService.set('deletesingle_endpointUrl',this.deletesingle_endpointUrl); //Souresh
      } else {
        this.deletesingle_endpointUrl = null;
      }
    });
    this.subscriptionupdatestatusSingleEndpoint = this.getupdatestatus_singleEndpoint().subscribe(message => {
      let result: any;
      result = message;
      if (result != null) {
        this.updatestatus_single_endpointUrl = result;
        this.cookieService.set('updatestatus_single_endpointUrl',this.updatestatus_single_endpointUrl); //Souresh
      } else {
        this.updatestatus_single_endpointUrl = null;
      }
    });
    this.subscriptionGetdataEndpoint = this.getdataEndpoint().subscribe(message => {
      let result: any;
      result = message;
      if (result != null) {
        this.getdata_endpointUrl = result;
        this.cookieService.set('getdata_endpointUrl',this.getdata_endpointUrl); //Souresh
      } else {
        this.getdata_endpointUrl = null;
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

  setaddEndpoint(value: any) {
    this.subjectForaddEndpointUrl.next(value);
  }
  public clearaddEndpoint() {
    this.subjectForaddEndpointUrl.next(null);
  }
  public getaddEndpoint(): Observable<any> {
    return this.subjectForaddEndpointUrl.asObservable();
  }
/*****added by souresh******/
  setuploadEndpont(value:any){
    this.subjectForuploadEndpointUrl.next(value);
  }
  public clearuploadEndpoint(){
    this.subjectForuploadEndpointUrl.next(null);
  }
  public getuploadEndpoint(): Observable <any> {
    return this.subjectForuploadEndpointUrl.asObservable();
  }
   /********souresh end here********/


  setupdateEndpoint(value: any) {
    this.subjectForupdateEndpointUrl.next(value);
  }
  public clearupdateEndpoint() {
    this.subjectForupdateEndpointUrl.next(null);
  }
  public getupdateEndpoint(): Observable<any> {
    return this.subjectForupdateEndpointUrl.asObservable();
  }

  setdeletesingleEndpoint(value: any) {
    this.subjectFordeletesingleEndpointUrl.next(value);
  }
  public cleardeletesingleEndpoint() {
    this.subjectFordeletesingleEndpointUrl.next(null);
  }
  public getdeletesingleEndpoint(): Observable<any> {
    return this.subjectFordeletesingleEndpointUrl.asObservable();
  }

  setupdatestatus_singleEndpoint(value: any) {
    this.subjectForupdatestatusSingleEndpointUrl.next(value);
  }
  public clearupdatestatus_singleEndpoint() {
    this.subjectForupdatestatusSingleEndpointUrl.next(null);
  }
  public getupdatestatus_singleEndpoint(): Observable<any> {
    return this.subjectForupdatestatusSingleEndpointUrl.asObservable();
  }

  setgetdataEndpoint(value: any) {
    this.subjectForGetdataEndpointUrl.next(value);
  }
  public cleargetdataEndpoint() {
    this.subjectForGetdataEndpointUrl.next(null);
  }
  public getdataEndpoint(): Observable<any> {
    return this.subjectForGetdataEndpointUrl.asObservable();
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

  addData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken          //hard code written Authorization(temp)
      })
    };
    console.log(this.serverUrl);
    console.log(this.addendpointUrl);
    var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    console.log(result);
    return result;
  }
  /*******added by souresh************/
  uploadFile(requestdata:any){
    const httpOptions={
        headers: new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization':this.accesstoken          //hard code written Authorization(temp)
        })
    };
    var result=this._http.post(this.serverUrl + this.uploadEndpointUrl,JSON.stringify(requestdata),httpOptions).pipe(map(res=>res));
    return result;
  }
  /*******souresh end here********/
  UpdateData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken          //hard code written Authorization(temp)
      })
    };
    var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  getData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken
      })
    };
    console.log('cookie get data='+this.cookieService.get('getdata_endpointUrl'));
    console.log('this.getdata_endpointUrl-'+this.getdata_endpointUrl);
    if(this.getdata_endpointUrl!=null){
      var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
      return result;
    }else{
      var result = this._http.post(this.cookieService.get('serverUrl') + this.cookieService.get('getdata_endpointUrl'), JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
      return result;
    }
    
  }

  deleteSingleData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  deleteMultipleData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl+'many', JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  UpdateStatusForSingleData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  UpdateStatusForMultipleData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl+'many', JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }
  CustomRequest(requestdata: any, endpoint:any ) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl +endpoint, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  generateToken(){
      var result = this._http.post(this.serverUrl +'temptoken', '').pipe(map(res => res));
      console.log(result);
      return result;
  }




}