import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResolveService {

  constructor(private http: HttpClient) {

   }
   resolve(): Observable<any> {
    let apiUrl = "http://166.62.39.137:5009/datalist";
    let postData: any = {
      source: "blog_category_view",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjY2MjMxNjYsImlhdCI6MTU2NjUzNjc2Nn0._YxNic0jq-AecruYFJ7jMKGxSLVMEZDKrfGpEsf6GZ0"
    };

    return this.http.post(apiUrl, postData).pipe(
      map( (response) => {
        let result: any = response;
        console.log("response");
        console.log(response);
        return result.res;
       
      }),
      catchError( (err) => Observable.throw(err.json().error) )
    )
  }
}





