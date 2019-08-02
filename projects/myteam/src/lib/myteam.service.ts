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

export class MyteamService {

  private siteSettingData: any;

  constructor(private http: HttpClient) {
  }

  /* call api via post or get method */
  submitRequest(url, jsonData, method): Observable<any> {
    switch(method) {
      case 'post':
        return this.http.post(url, jsonData);
        break;
      case 'get':
        return this.http.get(url, jsonData);
        break;
      default:
        console.log('Invalid method.');
    }
  }

}