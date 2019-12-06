import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryManagementService } from '../../category-management.service';
import { ActivatedRoute, Router } from '@angular/router';
export declare class AddEditCategoryComponent implements OnInit {
    private formBuilder;
    private httpRequest;
    private ActivatedRoute;
    private router;
    categoryForm: FormGroup;
    usersData: any;
    buttonText: any;
    configData: any;
    loader: boolean;
    config: any;
    constructor(formBuilder: FormBuilder, httpRequest: CategoryManagementService, ActivatedRoute: ActivatedRoute, router: Router);
    ngOnInit(): void;
    generateForm(): void;
    categoryFormSubmit(): void;
    resetCategoryForm(): void;
    setDefaultValue(defaultValue: any): void;
}
