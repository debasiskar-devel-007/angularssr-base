import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private cookieService: CookieService
    ) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let url: string = state.url;
        this.cookieService.set('redirectUrl', url);
        if (this.cookieService.get('jwtToken') == null || this.cookieService.get('jwtToken').length < 10) {
            this.router.navigate(['/']);
        } else return true;
        return false;
    }
}
