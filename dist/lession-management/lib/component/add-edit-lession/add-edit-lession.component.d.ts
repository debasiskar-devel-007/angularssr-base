import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LessionManagementService } from '../../lession-management.service';
import { ActivatedRoute, Router } from '@angular/router';
export declare class AddEditLessionComponent implements OnInit {
    private formBuilder;
    private httpRequest;
    private ActivatedRoute;
    private router;
    lessionForm: FormGroup;
    usersData: any;
    buttonText: any;
    configData: any;
    loader: boolean;
    config: any;
    constructor(formBuilder: FormBuilder, httpRequest: LessionManagementService, ActivatedRoute: ActivatedRoute, router: Router);
    ngOnInit(): void;
    generateForm(): void;
    lessionFormSubmit(): void;
    resetlessionForm(): void;
    setDefaultValue(defaultValue: any): void;
}
