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
    private ActivatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

   
    this.loader = false;

    /* Generate form */
    this.generateForm();

    /* Checking */
    switch (this.configData.action) {
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
      title: ['', [Validators.required, Validators.maxLength(150)]],
      description: ['', [Validators.required, Validators.maxLength(5000)]],
      userId: ['',]
    });
  }

  /* Category form submit */
  lessionFormSubmit() {
    this.loader = true;

    /* stop here if form is invalid */
    if (this.lessionForm.invalid) {
      return;
    } 

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.lessionForm.value, this.configData.condition)
      };
      this.httpRequest.addData(this.configData.endpoint, postData).subscribe((response: any) => {
        if (response.status == "success") {
          this.resetlessionForm();

          this.router.navigate([this.configData.callBack]);
        } else {
          alert("Some error occurred. Please try angain.");
        }
      }, (error) => {
        alert("Some error occurred. Please try angain.");
      });
    } // console.log("Ekhane asche");
  

  /* reset Category form */
  resetlessionForm() {
    this.lessionForm.reset();
  }

  /* Set default category form value */
  setDefaultValue(defaultValue) {
    this.lessionForm.setValue({
      title: defaultValue.title,
      description: defaultValue.description,
      userId: null
    });
  }

}

