import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

/* set common header */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private siteSettingData: any;

  constructor(private http: HttpClient) {
  }

  /* call api via post or get methord */
  submitRequest(url, jsonData, methord): Observable<any> {
    switch(methord) {
      case 'post':
        return this.http.post(url, jsonData);
        break;
      case 'get':
        return this.http.get(url, jsonData);
        break;
      default:
        console.log('Invalid methord. @Service error.');
    }
  }

  submitRequestNew(requestConfig): Observable<any> {
    switch(requestConfig.method) {
      case 'post':
        return this.http.post(requestConfig.url, requestConfig.data);
        break;
      case 'get':
        return this.http.get(requestConfig.url, requestConfig.data);
        break;
      default:
        console.log('Invalid methord. @Service error.');
    }
  }

}
