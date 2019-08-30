import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './app-api.service'

@Injectable({
  providedIn: 'root'
})
export class ResolveService {

  constructor(private apiService: ApiService, private router: Router) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
   
    console.log('resolve route data');
    console.log(route.data.requestcondition);
    console.log(route.data.endpoint);
    console.log(state);
   
    console.log('endpoint!!!!!');
   
    return new Promise((resolve) => {
      this.apiService.CustomRequest(route.data.requestcondition, route.data.endpoint).subscribe(api_object => {
        console.log('api_object  !!!!');
        console.log(api_object);
        if (api_object) {
          return resolve(api_object);
        } else { 
          
          return true;
        }
      });

    });
  }

}





