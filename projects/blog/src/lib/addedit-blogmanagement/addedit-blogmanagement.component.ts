import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import {map, startWith} from 'rxjs/operators';
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
  video_prefix:any = 'https://www.youtube.com/watch?v=';
  options: string[] = ['One', 'Two', 'Three','Four','Five','Six'];
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  tags_array : any = [];
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
    this.addCreds();
    setTimeout(()=>{
      this.getBlogCategory();
    },50)



    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

 
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
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
      credentials: this.formBuilder.array([]),
      tags:['',]
     
    });
  }
  // ---------------------------------------------------------------------------

  // ----------------------------Ediatble material Form Array-------------------
  trackByFn(index) {
    return index;
  }
// -----------------------------------------------------------------------------
  

  // ----------------------------------Add Credential Fucntions-----------------
  addCreds() {
    const creds = this.blogManagementForm.controls.credentials as FormArray;
    creds.push(this.formBuilder.group({
      video_url:[]       
    }));    
  }
  // ---------------------------------------------------------------------------


  // ---------------------------------Delete Credetial Fucntions----------------
  deleteCreds()
  {
    const creds = this.blogManagementForm.controls.credentials as FormArray;
    creds.removeAt(1); 
  }
  // ----------------------------------------------------------------------------






// ----------------------------------Get Blog Category Function-------------------

getBlogCategory()
{ 
  var data:any;   
  data={ 
      'source':'blog_category'
  };
  this.apiservice.getData(data).subscribe(response => {
    let result: any;
    result = response;
    this.blogCategoryArray = result.res;
  });
}
// ----------------------------------------------------------------------------------







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






  // -------------------------------Select Tags AutoComplete Field-----------------------
  showval(event : any ){
    if(event.keyCode==13)
    {
     this.tags_array.push(event.target.value);      
     this.blogManagementForm.controls['tags'].patchValue("");
    }
    this.blogManagementForm.value.tags = this.tags_array;
  }

    
  
}
