import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { ApiService } from '../../../Service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface DialogData {
  message: string;
  type: string;
}
@Component({
  selector: 'lib-add-edit-video-management',
  templateUrl: './add-edit-video-management.component.html',
  styleUrls: ['./add-edit-video-management.component.css']
})

export class AddEditVideoManagementComponent implements OnInit {
  public type: string;
  public dialogRef: any;
  public videoManagementForm: any = FormGroup;
  public serverUrlData: any = '';
  public addEndpointData: any = '';
  public ListingRoute: any = '';
  public VideoDataArray: any = [];
  public params_id: any = '';
  public buttonText: any = "Submit";
  public headerText: any = "Add Video";
  public spinnerloader: boolean; // for spinner loader
  public editorconfig: any = {};
  public getSourceName: any;
  public allCategoryName: any = [];
  public getDataEndpointData: any;
  public categorySourceName: any;
  public videoValue: any;
  public alert:any;
  public paramsuserid: any='';
  public model = {
    editorData: ''
  };
  public video_prefix: any = "https://www.youtube.com/watch?v=";
  public vimeoPrefix: any = "https://vimeo.com/";
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
  @Input()          //setting the addendpoint from application
  set listPageUrl(val: any) {
    this.ListingRoute = (val) || '<no name set>';
    this.ListingRoute = val;
  }
  @Input()
  set SourceName(val: any) {
    this.getSourceName = (val) || '<no name set>';
    this.getSourceName = val;
  }
  @Input()
  set CategorySourceName(val: any) {
    this.categorySourceName = (val) || 'no name set';
    this.categorySourceName = val;
  }

  @Input()
  set UserId(val: any) {
    this.paramsuserid = (val) || 'no name set';
    this.paramsuserid = val;
  }

  @Input()          //getting single video data from application
  set EditVideoData(Videodata: any) {
    this.VideoDataArray = Videodata;
    if (this.activeRoute.snapshot.params._id) {
      this.buttonText = "Update";
      this.headerText = "Edit Video";
      this.message='Updated Successfully';

      this.params_id = this.activeRoute.snapshot.params._id;
      this.videoManagementForm.controls['title'].patchValue(Videodata.title);
      this.videoManagementForm.controls['description'].patchValue(Videodata.description);
      this.videoManagementForm.controls['youtube_Url'].patchValue(Videodata.youtube_Url);
      this.videoManagementForm.controls['vimeo_url'].patchValue(Videodata.vimeo_url);
      this.videoManagementForm.controls['parent_category'].patchValue(Videodata.parent_category);
      this.videoManagementForm.controls['priority'].patchValue(Videodata.priority);
      this.videoManagementForm.controls['status'].patchValue(Videodata.status);
      // this.videoManagementForm.controls['status'].patchValue(Videodata[0].status);
      // this.videoManagementForm.controls['type'].patchValue(Videodata[0].type);
      this.videoValue = Videodata.type;
     
    }
  }
  constructor(public dialog: MatDialog, public fb: FormBuilder, public apiService: ApiService,
    public activeRoute: ActivatedRoute, public router: Router,public _snackBar:MatSnackBar) {
    this.videoManagementForm = this.fb.group({

      title: ['', Validators.required],
      description: ['', Validators.required],
      youtube_Url: [''],
      vimeo_url: [''],
      priority: ['', Validators.required],
      parent_category: [''],
      status: [true,]

    })
    this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
  }

  ngOnInit() {
    /**Observable start here**/
    this.apiService.clearServerUrl();
    setTimeout(() => {
      this.apiService.setServerUrl(this.serverUrlData);
    }, 50);
    this.apiService.clearaddEndpoint();
    setTimeout(() => {
      this.apiService.setaddEndpoint(this.addEndpointData);
    }, 50);
    setTimeout(() => {
      this.apiService.setgetdataEndpoint(this.getDataEndpointData);
    }, 50);
    /**Observable end here**/
    setTimeout(() => {
      this.getCategoryName();
    }, 50);

    if(this.params_id != null){
      setTimeout(() => {
        this.getVideoValue(this.VideoDataArray.type);
        }, 500);
    }
  
  }
  /**for validation purpose**/
  inputUntouch(form: any, val: any) {

    form.controls[val].markAsUntouched();
  }
  /**for validation purpose**/
  getVideoValue(val: string) {
    console.log(val)
    this.videoValue = val;
  }

  /*modal start here*/
  openDialog(x: any, y: any): void {
    this.dialogRef = this.dialog.open(Dialogtest, {
      width: '45%',
      height: '500px',
      data: { message: x, type: y }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  /**preview url start here **/

  /**getting all category list**/
  getCategoryName() {
    var endpoint:any= this.serverUrlData+this.getDataEndpointData;
    let data: any = {
      "source": this.categorySourceName,
      "condition": {
        "status": 1
      },
    }
    this.apiService.CustomRequestPost(data,endpoint).subscribe(response => {
      let result: any = response;
      this.allCategoryName = result.res;

    })
  }

  previewUrl(value: any) {

    // if (this.videoManagementForm.value.videoUrl != 'undefined' || 
    // this.videoManagementForm.value.vimeo_url != 'undefined'){
      switch (value) {
        case "youtube":
          this.openDialog(this.videoManagementForm.value.youtube_Url, value);
          break
        case "vimeo":
          this.openDialog(this.videoManagementForm.value.vimeo_url, value);
          break;
        default:
          break;
      }
    // } else {

    //   this.alert='please add link';

    // }

  }

  /**preview url end here **/
  /**modal end here */
  VideoManagementFormSubmit() {
    let x: any;
    for (x in this.videoManagementForm.controls) {
      this.videoManagementForm.controls[x].markAsTouched();
    }
    if (this.videoManagementForm.value.vimeo_url == "") {
      delete this.videoManagementForm.value.vimeo_url;
    }
    if (this.videoManagementForm.value.youtube_Url == "") {
      delete this.videoManagementForm.value.youtube_Url;
    }
    if (this.videoManagementForm.valid) {
      if (this.videoManagementForm.value.status)
        this.videoManagementForm.value.status = parseInt('1');
      else
        this.videoManagementForm.value.status = parseInt('0');

      var data: any;
      if (this.activeRoute.snapshot.params._id) {
        data = {
          "source": this.getSourceName,
          "data": {
            "id": this.params_id,
            'title': this.videoManagementForm.value.title,
            'priority': this.videoManagementForm.value.priority,
            'youtube_Url': this.videoManagementForm.value.youtube_Url,
            'vimeo_url': this.videoManagementForm.value.vimeo_url,
            'status': this.videoManagementForm.value.status,
            'description': this.videoManagementForm.value.description,
            'type': this.videoValue,
            'parent_category':this.videoManagementForm.value.parent_category
          },
          "sourceobj": ["parent_category"]
        }
      } else {
        data = {                                         //add part
          "source": this.getSourceName,
          "data": {
            'title': this.videoManagementForm.value.title,
            'priority': this.videoManagementForm.value.priority,
            'youtube_Url': this.videoManagementForm.value.youtube_Url,
            'vimeo_url': this.videoManagementForm.value.vimeo_url,
            'status': this.videoManagementForm.value.status,
            'description': this.videoManagementForm.value.description,
            'type': this.videoValue,
            'parent_category':this.videoManagementForm.value.parent_category
            
          },
          "sourceobj": ["parent_category"]
        };
        if(this.paramsuserid != null && this.paramsuserid != ''){
          data.data.userid = this.paramsuserid;
        }
      }
      this.spinnerloader = true;
      var endpoint:any=this.serverUrlData+this.addEndpointData;
      this.apiService.CustomRequestPost(data,endpoint).subscribe((resp) => {
        this.spinnerloader = false;
        let result: any = resp;
        this.formDirective.resetForm();
        this._snackBar.open(this.message, 'OK', {
          duration: 3000,
        } )
        setTimeout(() => {
          this.router.navigateByUrl('/' + this.ListingRoute)
        }, 100);

      })
    }
  }

}
@Component({
  selector: 'dialogtest',
  templateUrl: 'modal.html',
})
export class Dialogtest {
  public is_error: any;
  public is_error1: any;


  constructor(public dialogRef: MatDialogRef<Dialogtest>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.is_error = data.message;
    this.is_error1 = data.type;
  }
}
