
import { Component, OnInit,Input, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../Service/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'lib-add-edit-caegory',
  templateUrl: './add-edit-caegory.component.html',
  styleUrls: ['./add-edit-caegory.component.css']
})
export class AddEditCaegoryComponent implements OnInit {
  public headerText: any = "Add Category";
  public buttonText: any = "Submit";
  imageGalleryAddEditForm: FormGroup;
  public serverUrlData: any;
  public getDataEndpointData: any;
  public addEndpointData: any;
  public videoStatusArr: any = [];
  public listUrl: any;
  public listrouteData: any = '';
  public parameter_id: any;
  public VideolistingArray: any = [];
  public editedListData: any = [];
  public spinnerloader: boolean;
  public allCategoryData: any = [];
  public singleDatalist: any = [];
  public editorconfig:any={};
  public sourceName:any='';
  public message:any='Submitted Successfully';
  @ViewChild(FormGroupDirective, { static: false }) formDirective: FormGroupDirective;

  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;
  }

  @Input()
  set singleData(val: any) {
    this.singleDatalist = (val) || '<no name set>';
    this.singleDatalist = val;
    console.log("all edited data",this.singleDatalist);
    if (this.activeroute.snapshot.params._id) {
      this.headerText = "Edit Category";
      this.buttonText = "Update";
      this.message='Updated Successfully'
      this.parameter_id = this.activeroute.snapshot.params._id;
      this.imageGalleryAddEditForm.controls['title'].patchValue(val[0].title);
      this.imageGalleryAddEditForm.controls['priority'].patchValue(val[0].priority);
      this.imageGalleryAddEditForm.controls['status'].patchValue(val[0].status);
      this.imageGalleryAddEditForm.controls['description'].patchValue(val[0].description);
      this.model.editorData = val[0].description;
      this.imageGalleryAddEditForm.controls['parent_category'].patchValue(val[0].parent_category);

    }
  }
  @Input()
  set SourceName(val:any){
    this.sourceName = (val) || '<no name set>' ; 
    this.sourceName = val;
  }

  @Input()          //setting the getdata endpoint from project
  set getDataEndpoint(endpointUrlval: any) {
    this.getDataEndpointData = (endpointUrlval) || '<no name set>';
    this.getDataEndpointData = endpointUrlval;

  }
  @Input()          //setting the addendpoint from application
  set addEndpoint(endpointUrlval: any) {
    this.addEndpointData = (endpointUrlval) || '<no name set>';
    this.addEndpointData = endpointUrlval;
  }
  @Input()          //getting the listing url
  set listingUrl(Urlval: any) {
    this.listUrl = (Urlval) || '<no name set>';
    this.listUrl = Urlval;

  }
  @Input()          //getting the listing url
  set dataListViaResolve(val: any) {
    this.VideolistingArray = (val) || '<no name set>';
    this.VideolistingArray = val;
  }

  public model = {
    editorData: ''
  };
  /**ckeditor end here*/
  constructor(public apiService: ApiService, public fb: FormBuilder, public activeroute: ActivatedRoute,
    public _http: HttpClient, public router: Router,public _snackBar:MatSnackBar) {

    /**formgroup start here**/
    this.imageGalleryAddEditForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      status: [true,],
      parent_category: ['']
    })
    /**formgroup end here**/

    this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
  }

  ngOnInit() {
    /**Observable start here**/
    this.apiService.clearServerUrl();
    setTimeout(() => {
      this.apiService.setServerUrl(this.serverUrlData);
    }, 50);
    this.apiService.cleargetdataEndpoint();
    setTimeout(() => {
      this.apiService.setgetdataEndpoint(this.getDataEndpointData);
    }, 50);
    this.apiService.clearaddEndpoint();
    setTimeout(() => {
      this.apiService.setaddEndpoint(this.addEndpointData);
    }, 50);
    setTimeout(() => {
      this.getCategoryData();
    }, 50);
    /**Observable end here**/
  }
  inputUntouch(form: any, val: any) {

    form.controls[val].markAsUntouched();
  }
  
  getCategoryData() {
    let data: any = {
      "source":  this.sourceName,
      "condition": {
        "status": 1
      },
    }
    this.apiService.getData(data).subscribe(response => {
      let result: any = response;
      this.allCategoryData = result.res;
      
    })
  }
  ImageAddEditFormSubmit() {
    let x: any;
    for (x in this.imageGalleryAddEditForm.controls) {
      this.imageGalleryAddEditForm.controls[x].markAsTouched();
    }
    if (this.imageGalleryAddEditForm.valid) {
      if (this.imageGalleryAddEditForm.value.status)
        this.imageGalleryAddEditForm.value.status = parseInt("1");
      else
        this.imageGalleryAddEditForm.value.status = parseInt("0");

      if (this.activeroute.snapshot.params._id) {
        data = {
          "source": this.sourceName,
          'data': {
            "id": this.parameter_id,
            "title": this.imageGalleryAddEditForm.value.title,
            "description": this.imageGalleryAddEditForm.value.description,
            "priority": this.imageGalleryAddEditForm.value.priority,
            "status": this.imageGalleryAddEditForm.value.status,
            "parent_category": this.imageGalleryAddEditForm.value.parent_category
          },
          "sourceobj": ["parent_category"]
        }
      } else {
        var data: any;
        data = {                                         //add part
          "source": this.sourceName,
          "data": this.imageGalleryAddEditForm.value,
          "sourceobj": ["parent_category"]
        }
      }
    }
    this.spinnerloader = true;
    this.apiService.addData(data).subscribe(response => {
      this.spinnerloader = false;
      this.formDirective.resetForm();

     
        this._snackBar.open(this.message, 'OK', {
          duration: 3000,
        } )
         
      setTimeout(() => {
        this.router.navigateByUrl('/' + this.listUrl);
      }, 100);
    })

  }

}
