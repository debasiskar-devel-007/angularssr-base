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
    var data: any = { source: route.data.requestcondition.source };

    if (route.data.requestcondition.condition.key_id != null && route.data.requestcondition.condition.key_id == '') {
      data.condition = { _id: route.params.id };
    }
    /* will come into play while editing otherwise no effect */



    return new Promise((resolve) => {
      this.apiService.CustomRequest(data, route.data.endpoint).subscribe(api_object => {
        if (api_object) {
          return resolve(api_object);
        } else {
          return true;
        }
      });
    });
  }

}





