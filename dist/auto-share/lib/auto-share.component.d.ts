import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class AutoShareComponent implements OnInit {
    router: Router;
    routeingUrlValue: any;
    routeingUrl: any;
    constructor(router: Router);
    ngOnInit(): void;
    goToMediaManagement(): void;
}
