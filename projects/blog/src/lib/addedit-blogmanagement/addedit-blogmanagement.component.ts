import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'lib-addedit-blogmanagement',
  templateUrl: './addedit-blogmanagement.component.html',
  styleUrls: ['./addedit-blogmanagement.component.css']
})

export class AddeditBlogmanagementComponent implements OnInit {




  /**ckeditor start here*/
  public Editor = ClassicEditor;  //for ckeditor
  editorConfig = {
    placeholder: 'Description...',
  };
  public model = {
    editorData: ''
  };
  /**ckeditor end here*/





  // ---------------------declarations-------------------------------------
  public headerText: any = 'Add Blog Management Data';
  public buttonText: any = 'SUBMIT';
  public blogCategoryArray: any = [];
  public configData: any;
  blogManagementForm: FormGroup;
  public serverUrlData: any;
  public getDataEndpointData: any;
  public addEndpointData: any;
  isSubmitted = false;
  // -----------------------------------------------------------------------






  // ----------------------------------------------Input Section-----------------------

  // Input receiving from add/edit app 
  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }

  @Input()          //setting the server url from project
  set serverUrl(serverUrl: any) {
    this.serverUrlData = (serverUrl) || '<no name set>';
    this.serverUrlData = serverUrl;
    
  }

  @Input()          //setting the server url from project
  set getDataEndpoint(endpointUrlval: any) {
    this.getDataEndpointData = (endpointUrlval) || '<no name set>';
    this.getDataEndpointData = endpointUrlval;

  }
  @Input()          //setting the server url from project
  set addEndpoint(endpointUrlval: any) {
    this.addEndpointData = (endpointUrlval) || '<no name set>';
    this.addEndpointData = endpointUrlval;

  }
  // -----------------------------------------------------------------------------------------

  constructor(private http: HttpClient, private apiservice: ApiService,
    private activatedRoute: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    /**Observable start here**/
    this.apiservice.clearServerUrl();
    setTimeout(() => {
      this.apiservice.setServerUrl(this.serverUrlData);
    }, 50);
    this.apiservice.cleargetdataEndpoint();
    setTimeout(() => {
      this.apiservice.setgetdataEndpoint(this.getDataEndpointData);
    }, 50);
    this.apiservice.clearaddEndpoint();
    setTimeout(() => {
      this.apiservice.setaddEndpoint(this.addEndpointData);
    }, 50);
    /**Observable end here**/

    this.generateForm();
  }


  // -----------------------------Form Controls---------------------------------
  generateForm() {
    this.blogManagementForm = this.formBuilder.group({
      blogtitle: ['', Validators.required],
      blogcat: ['', Validators.required],
      blogcontent: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['true', Validators.required],
      metatitle: ['', Validators.required],
      metadesc: ['', Validators.required],
      test:['', [ Validators.required ] ]

    });
  }
  // ---------------------------------------------------------------------------















  // ---------------------------------SUBMIT----------------------------------------
  onSubmit() {
    console.log(this.blogManagementForm.value);
    this.blogManagementForm.controls['blogcontent'].markAsTouched();
    if (this.blogManagementForm.valid) {
      this.isSubmitted = true;
      var data: any;
      data = {                                         //add part
        "source": "blogs",
        "data": this.blogManagementForm.value,
      };
      this.apiservice.addData(data).subscribe(response => {
        let result: any;
        result = response;
      });
    }
  }
  // -----------------------------------------------------------------------------------




  get onSignUpValidate() {
    return this.blogManagementForm.controls;
  }


  inputBlur(val: any) {
    
    this.blogManagementForm.controls[val].markAsUntouched();
    
  }
}
