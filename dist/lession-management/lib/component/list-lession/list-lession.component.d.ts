import { OnInit } from '@angular/core';
import { LessionManagementService } from '../../lession-management.service';
import { Router } from '@angular/router';
export declare class ListLessionComponent implements OnInit {
    private httpRequest;
    private router;
    lessionListingConfig: any;
    loader: boolean;
    config: any;
    constructor(httpRequest: LessionManagementService, router: Router);
    ngOnInit(): void;
}
