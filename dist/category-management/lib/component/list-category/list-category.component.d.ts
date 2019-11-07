import { OnInit } from '@angular/core';
import { CategoryManagementService } from '../../category-management.service';
import { Router } from '@angular/router';
export declare class ListCategoryComponent implements OnInit {
    private httpRequest;
    private router;
    categoryData: any;
    categoryListingConfig: any;
    loader: boolean;
    config: any;
    constructor(httpRequest: CategoryManagementService, router: Router);
    ngOnInit(): void;
    gotoUrl(url: any): void;
}
