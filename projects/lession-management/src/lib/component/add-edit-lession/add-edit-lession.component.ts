import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LessionManagementService } from '../../lession-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-add-edit-lession',
  templateUrl: './add-edit-lession.component.html',
  styleUrls: ['./add-edit-lession.component.css']
})

export class AddEditLessionComponent implements OnInit {

  public lessionForm: FormGroup;
  public usersData: any = null;
  public buttonText: any = null;
  public configData: any;
  public loader: boolean = false;
  
  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }

  constructor(private formBuilder: FormBuilder, private httpRequest: LessionManagementService,
    private ActivatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loader = false;
    
    /* Generate form */
    this.generateForm();

    /* Checking */
    switch(this.configData.action) {
      case 'add':
        this.buttonText = "Create"; /* Button text */
        break;
      case 'edit':
        this.buttonText = "Update"; /* Button text */
        this.setDefaultValue(this.configData.defaultData);
        break;
    }
  }

  /* Create form controll */
  generateForm() {
    /* Category create form validation */
    this.lessionForm = this.formBuilder.group({
      title:        [ null, [ Validators.required, Validators.maxLength(150) ] ],
      description:  [ null, [ Validators.required, Validators.maxLength(5000) ] ],
      type:         [ null, [ Validators.required, Validators.maxLength(1000) ] ],
      quiz:         [ null, [ Validators.required ] ],
      status:       [ false, null ],
      userId:       [ this.configData.userData.id, null ]
    });
  }

  /* Category form submit */
  lessionFormSubmit() {
    this.loader = true;

    /* stop here if form is invalid */
    if (this.lessionForm.invalid) {
      return;
    } else {
      /* start process to submited data */
      let newData: any = Object.assign(this.lessionForm.value);
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

