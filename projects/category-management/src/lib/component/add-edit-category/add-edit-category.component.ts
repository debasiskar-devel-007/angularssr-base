import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CategoryManagementService } from '../../category-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})

export class AddEditCategoryComponent implements OnInit {

  public categoryForm: FormGroup;
  public usersData: any = null;
  public formHeaderText: string = "Create New Category";
  public buttonText: any = null;
  public configData: any;
  public loader: boolean = false;
  
  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }

  constructor(private formBuilder: FormBuilder, private httpRequest: CategoryManagementService,
    private ActivatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loader = false;
    
    /* Generate form */
    this.generateForm();

    /* Button text */
    this.buttonText = this.configData.buttonText;

    /* Checking */
    switch(this.configData.action) {
      case 'add':
        break;
      case 'edit':
        this.setDefaultValue(this.configData);
        break;
    }
  }

  /* Create form controll */
  generateForm() {
    /* Category create form validation */
    this.categoryForm = this.formBuilder.group({
      title:        [ null, [ Validators.required, Validators.maxLength(150) ] ],
      description:  [ null, [ Validators.required, Validators.maxLength(1000) ] ],
      priority:     [ 1, [ Validators.required, Validators.max(100) ] ],
      role:         [ 'public', null ],
      status:       [ null, null ],
      userId:       [ this.configData.userData.id, null ]
    });
  }

  /* Category form submit */
  categoryFormSubmit() {
    this.loader = true;

    /* stop here if form is invalid */
    if (this.categoryForm.invalid) {
      return;
    } else {
      /* start process to submited data */
      let newData: any = Object.assign(this.categoryForm.value, this.configData.formConfig.data.extraField);
      let postData: any = { 
                            source: this.configData.formConfig.data.source,
                            condition: this.configData.formConfig.condition,
                            data: newData
                          };
      let endPoint: any = this.configData.apiUrl + this.configData.formConfig.endpoint;
      this.httpRequest.submitRequest(endPoint, postData, this.configData.formConfig.methord).subscribe((response) => {
        if(response.status == "success") {
          this.usersData = response.data; 
          this.resetCategoryForm();

          this.router.navigate([this.configData.callBack]);
        } else {
          alert("Some error occord. Please try angain.");
        }
      }, (error) => {
        alert("Some error occord. Please try angain.");
      });
    }
  }

  /* reset Category form */
  resetCategoryForm() {
    this.categoryForm.reset();
  }

  /* Set default category form value */
  setDefaultValue(configData) {
    this.formHeaderText = "Update Category";
    let postData: any = { 
                          source: configData.dataListConfig.data.source,
                          condition: configData.dataListConfig.condition,
                          token: configData.authToken 
                        };
    let endPoint: any = configData.apiUrl + configData.dataListConfig.endpoint;
    this.httpRequest.submitRequest(endPoint, postData, 'post').subscribe((response) => {
      let defaultValue: any = response.res[0];
      this.categoryForm.setValue({  
        title:        defaultValue.title,
        description:  defaultValue.description,
        priority:     defaultValue.priority,
        role:         defaultValue.role,
        status:       defaultValue.status,
        userId:       null
      });
    }, (error) => {
      console.log("Some error occord. Please try angain.");
    });
  }

}
