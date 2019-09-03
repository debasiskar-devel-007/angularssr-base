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
  
    if (route.data.requestcondition.condition.key_id != null && route.data.requestcondition.condition.key_id == '') {
      delete route.data.requestcondition.condition.key_id;
      route.data.requestcondition.condition._id = route.params.id;
    }
   

    return new Promise((resolve) => {
      this.apiService.CustomRequest(route.data.requestcondition, route.data.endpoint).subscribe(api_object => {
        if (api_object) {
          return resolve(api_object);
        } else {
          return true;
        }
      });

    });
  }

}





