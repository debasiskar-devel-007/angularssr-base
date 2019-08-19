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

  categoryForm: FormGroup;
  categoryFormSubmited: boolean = false;
  usersData: any = null;
  public buttonText: any = null;

  public configData: any;
  
  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
    console.log(this.configData);
  }

  constructor(private formBuilder: FormBuilder, private httpRequest: CategoryManagementService,
    private ActivatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /* Generate form */
    this.generateForm();

    /* Button text */
    this.buttonText = this.configData.buttonText;

    /*  */
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
      roll:         [ 'public', null ],
      status:       [ null, null ],
      userId:       [ this.configData.userData.id, null ]
    });
  }

  /* Chacking validate in angular */
  get categoryFormValidate() { return this.categoryForm.controls; }

  /* Category form submit */
  categoryFormSubmit() {
    this.categoryFormSubmited = true;
    this.markFormGroupTouched(this.categoryForm);

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

  /* Category form make field touch */
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  /* reset Category form */
  resetCategoryForm() {
    this.categoryFormSubmited = false;
    this.categoryForm.reset();
  }

  /* Category form submit */
  setDefaultValue(configData) {
    /* start process to submited data */
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
        roll:         defaultValue.roll,
        status:       defaultValue.status,
        userId:       null
      });
    }, (error) => {
      console.log("Some error occord. Please try angain.");
    });
  }

  resetForm() {
    alert('okk');
  }

}
