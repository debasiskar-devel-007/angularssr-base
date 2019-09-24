import { Injectable } from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './app-api.service';

export interface EndpointComponent {
    endpoint: string;
}

@Injectable()
export class Resolveservice implements Resolve<EndpointComponent> {

    constructor(private _apiService: ApiService, private router: Router) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        // let id = route.params['id'];
        console.log('resolve route data');
        console.log(route.data.requestcondition);
        console.log(route.data.endpoint );
        console.log(state);
        // let endpoint = route.data.object;
        console.log('endpoint!!!!!');
        // console.log(endpoint);
        return new Promise((resolve) => {
            this._apiService.CustomRequest(route.data.requestcondition,route.data.endpoint).subscribe(api_object => {
               console.log('api_object  !!!!');
                console.log(api_object);
                if (api_object) {
                    return resolve(api_object);
                } else { // id not found
                    // this.router.navigateByUrl('login');
                    return true;
                }
            });

        });
    }
}
