import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  public BASE_URL: string = "http://3.15.236.141:5005/uploads";

  constructor(private httpClient: HttpClient) { }

  /* Upload Function */
  public upload(uploadURL, data) {
    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('type', data.type);
    formData.append('path', data.path);
    formData.append('prefix', data.prefix);
    formData.append('conversion_needed', data.conversion_needed);
    formData.append('bucketname', data.bucketname);
    
    return this.httpClient.post<any>(uploadURL, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            const percentage = Math.round(100 * event.loaded / event.total);
            if(percentage >= 0 && percentage <= 100) {
              return { status: 'progress', data: { totalData: event.total, loadedData: event.loaded, percentage: percentage } };
            } else {
              return { status: 'complete', data: null };
            }
          case HttpEventType.Response:
            if(event.body.status == 'success') {
              return { status: 'complete', data: event.body };
            } else {
              return { status: 'error', data: 'An error occord.' };
            }
          default:
            return { status: 'waiting', data: '' };
            return `Unhandled event: ${event.type}`;
        }
      })
    );
  }

  public uploadBase64(uploadURL, data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post(uploadURL, data, httpOptions);
  }

}
