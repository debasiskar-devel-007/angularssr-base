import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators ,FormGroupDirective} from '@angular/forms';
import { ApiService } from '../../../Service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'lib-add-edit-videos',
  templateUrl: './add-edit-videos.component.html',
  styleUrls: ['./add-edit-videos.component.css']
})
export class AddEditVideosComponent implements OnInit {
  public buttonText: any = "Submit";
  public headerText: any = "Add Category";

  public model = {
    editorData: ''
  };

  videolibAddEditForm: FormGroup;
  public serverUrlData: any;
  public getDataEndpointData: any;
  public addEndpointData: any;
  public videoStatusArr: any = [];
  public listUrl: any;
  public parameter_id: any;
  public VideolistingArray: any = [];
  public getSourceName: any;
  public editedListData: any = [];
  public allCategoryName: any = [];
  public spinnerloader: boolean; // for spinner loader
  public editorconfig: any = {};
  public message:any='Submitted Successfully';

  @ViewChild(FormGroupDirective, { static: false }) formDirective: FormGroupDirective;



  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;

  }

  @Input()          //setting the getdat endpoint from project
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
  @Input()
  set SourceName(val: any) {
    this.getSourceName = (val) || '<no name set>';
    this.getSourceName = val;
  }
  @Input()          //getting the listing url
  set EditList(val: any) {
    this.editedListData = (val) || '<no name set>';
    this.editedListData = val;

    console.log(this.editedListData,'editedListData')
    if (this.activeroute.snapshot.params._id) {
      this.headerText = "Edit Category";
      this.buttonText = "Update";
      this.message='Updated Successfully';

      this.parameter_id = this.activeroute.snapshot.params._id;
      this.videolibAddEditForm.controls['title'].patchValue(val.title);
      this.videolibAddEditForm.controls['priority'].patchValue(val.priority);
      this.videolibAddEditForm.controls['status'].patchValue(val.status);
      this.videolibAddEditForm.controls['description'].patchValue(val.description);
      this.videolibAddEditForm.controls['parent_id'].patchValue(val.parent_id);

    }
  }
  constructor(public fb: FormBuilder, public activeroute: ActivatedRoute,
    public _http: HttpClient, public router: Router, public apiService: ApiService,public _snackBar:MatSnackBar) {
    /**formgroup start here**/
    this.videolibAddEditForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      status: [true,],
      parent_id: ['']
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
      this.getAllCategoryName();
    }, 50);
    /**Observable end here**/
  }
  /**for validation purpose**/
  inputUntouch(form: any, val: any) {

    form.controls[val].markAsUntouched();
  }
  /**for validation purpose**/

  getAllCategoryName() {
    let data: any = {
      "source": this.getSourceName,
      "condition": {
        "status": 1
      },
    }
    this.apiService.getData(data).subscribe(response => {
      let result: any = response;
      this.allCategoryName = result.res;
    })
  }

  /**form submission start here**/
  videoAddEditFormSubmit() {
    let x: any;
    for (x in this.videolibAddEditForm.controls) {
      this.videolibAddEditForm.controls[x].markAsTouched();
    }
    if (this.videolibAddEditForm.valid) {
      if (this.videolibAddEditForm.value.status)
        this.videolibAddEditForm.value.status = parseInt("1");
      else
        this.videolibAddEditForm.value.status = parseInt("0");
      var data: any;
      if (this.activeroute.snapshot.params._id) {
        data = {
          "source": this.getSourceName,
          'data': {
            "id": this.parameter_id,
            "title": this.videolibAddEditForm.value.title,
            "description": this.videolibAddEditForm.value.description,
            "priority": this.videolibAddEditForm.value.priority,
            "status": this.videolibAddEditForm.value.status,
            "parent_id": this.videolibAddEditForm.value.parent_id
          },
          "sourceobj": ["parent_id"]
        }
      } else {
        data = {
          "source": this.getSourceName,
          'data': {
            "title": this.videolibAddEditForm.value.title,
            "description": this.videolibAddEditForm.value.description,
            "priority": this.videolibAddEditForm.value.priority,
            "status": this.videolibAddEditForm.value.status,
            "parent_id": this.videolibAddEditForm.value.parent_id
          },
          "sourceobj": ["parent_id"]
        }
      }
      this.spinnerloader = true;
      this.apiService.addData(data).subscribe(resp => {
        let result: any;
        result = resp;
        this.videoStatusArr = result.status;
        this.spinnerloader = false;
        this.formDirective.resetForm();

        this._snackBar.open(this.message, 'OK', {
          duration: 3000,
        } )

        setTimeout(() => {
          this.router.navigateByUrl('/' + this.listUrl);
        }, 100)

      })
    }



  }
  /**form submission end here**/
}
