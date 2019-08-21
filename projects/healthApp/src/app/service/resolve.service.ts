import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute, Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class ResolveService implements Resolve<any> {

  private apiBaseUrl: string = 'http://166.62.39.137:5009/';

  constructor(private http: HttpClient, private router: Router, public userdata: CookieService) {
  }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): Observable<any> {

    switch(activatedRouteSnapshot.url[0].path) {
      case 'category-management':
        return this.getCategoryData();
        break;
    }

  }

  /* Get Category Data */
  getCategoryData() {
    let requestConfig: any = { 
      url : this.apiBaseUrl + 'datalist',
      data: { "source": "category", "condition": {}, "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjY0Nzg3NDksImlhdCI6MTU2NjM5MjM0OX0.fVMMdjq0EJRW8k-lcwCqo5dG4UhXsys56a24Leu94eU" },
      method : "post"
    }

    return this.http.post(requestConfig.url, requestConfig.data).pipe(
      map( (dataFromApi) => {
        let result: any = dataFromApi;
        return result.res;
      }),
      catchError( (err) =>
        Observable.throw(err.json().error) 
      )
    )
  }

}
