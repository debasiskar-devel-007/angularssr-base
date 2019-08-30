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
  public buttonText: any = 'Create';
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

    /* Checking */
    switch(this.configData.action) {
      case 'add':
        /* Button text */
        this.buttonText = "Create";
        break;
      case 'edit':
        /* Button text */
        this.buttonText = "Update";
        this.setDefaultValue(this.configData.defaultData);
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
      status:       [ false, null ],
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
      if(this.categoryForm.value.status) {
        this.categoryForm.value.status = parseInt("1");
      } else {
        this.categoryForm.value.status = parseInt("0");;
      }

      /* start process to submited data */
      let postData: any = { 
                            source: this.configData.source,
                            data: Object.assign(this.categoryForm.value, this.configData.condition)
                          };
      this.httpRequest.addData(this.configData.endpoint, postData).subscribe((response: any) => {
        if(response.status == "success") {
          this.resetCategoryForm();

          this.router.navigate([this.configData.callBack]);
        } else {
          alert("Some error occurred. Please try angain.");
        }
      }, (error) => {
        alert("Some error occurred. Please try angain.");
      });
    }
  }

  /* reset Category form */
  resetCategoryForm() {
    this.categoryForm.reset();
  }

  /* Set default category form value */
  setDefaultValue(defaultValue) {
    this.categoryForm.setValue({  
      title:        defaultValue.title,
      description:  defaultValue.description,
      priority:     defaultValue.priority,
      role:         defaultValue.role,
      status:       defaultValue.status,
      userId:       null
    });
  }

}
