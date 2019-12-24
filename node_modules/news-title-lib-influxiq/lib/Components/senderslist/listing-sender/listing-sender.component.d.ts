import { OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
export declare class ListingSenderComponent implements OnInit {
    private cookieService;
    senderConfigForm2: any;
    loader: boolean;
    config: any;
    constructor(cookieService: CookieService);
    ngOnInit(): void;
}
