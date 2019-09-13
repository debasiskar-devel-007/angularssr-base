import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { map, startWith } from 'rxjs/operators';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



export interface DialogData {
  msg: any;
  videourl: any;
}



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
  video_prefix: any = 'https://www.youtube.com/watch?v=';
  options: any = [];
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  tags_array: any = [];
  dialogRef: any;
  public params_id: any;
  setData: any;
  messageText: any;
  listUrl: any;
  testTag : any = [];
  
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


  @Input()         //setting the listing url form the application
  set listRoute(listval: any) {
    this.listUrl = (listval) || '<no name set>';
    this.listUrl = listval;

  }
  // -----------------------------------------------------------------------------------------

  constructor(private http: HttpClient, private apiservice: ApiService,
    private activatedRoute: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.blogManagementForm = this.formBuilder.group({
      blogtitle: ['', Validators.required],
      blogcat: ['', Validators.required],
      blogcontent: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['true', Validators.required],
      metatitle: ['', Validators.required],
      metadesc: ['', Validators.required],
      credentials: this.formBuilder.array([]),
      tags: ['',],
    });
  }


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

    if (!this.activatedRoute.snapshot.params.id)
      setTimeout(() => {
        this.addYoutubeVideo('');
      }, 500)

    setTimeout(() => {
      this.getBlogCategory();
    }, 50)


    setTimeout(() => {
      this.getTagsCount();
    }, 50)


    if (this.activatedRoute.snapshot.params.id) {
      this.params_id = this.activatedRoute.snapshot.params.id;
      this.buttonText = "Update";
      this.blogManagementForm.controls['blogtitle'].patchValue(this.setData.blogtitle);
      this.blogManagementForm.controls['blogcat'].patchValue(this.setData.blogcat);
      this.blogManagementForm.controls['blogcontent'].patchValue(this.setData.blogcontent);
      this.blogManagementForm.controls['priority'].patchValue(this.setData.priority);
      this.blogManagementForm.controls['status'].patchValue(this.setData.status);
      this.blogManagementForm.controls['metatitle'].patchValue(this.setData.metatitle);
      this.blogManagementForm.controls['metadesc'].patchValue(this.setData.metadesc);


      for (const vid in this.setData.credentials) {
        this.addYoutubeVideo(this.setData.credentials[vid].video_url);
      }

      if (this.setData.tags != "")
        this.setData.tags.forEach(element => {
          this.tags_array.push(element);
        });


    }





    // ------------------------------Auticomplete Functions----------------------------------

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
// ------------------------------------------------------------------------------------------
    }
  

    // ------------------------------------_Filter FUnction----------------------------------
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  // --------------------------------------------------------------------------------------------


  





  // ------------------------------------MODAL Function--------------------------------------------
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(Modal, {
      width: '45%',
      height: '500px',
      data: { msg: x }

    });

    // this.sanitizer.bypassSecurityTrustResourceUrl
    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  // ----------------------------------------------------------------------------------------------











  // ----------------------------Ediatble material Form Array-------------------
  trackByFn(index) {
    return index;
  }
  // -----------------------------------------------------------------------------







  // ----------------------------------Add Credential Fucntions-----------------
  addYoutubeVideo(val: any) {
    const creds = this.blogManagementForm.controls.credentials as FormArray;
    creds.push(this.formBuilder.group({
      video_url: [val]
    }));
  }
  // ---------------------------------------------------------------------------







  // ---------------------------------Delete Credetial Fucntions----------------
  deleteCreds() {
    const creds = this.blogManagementForm.controls.credentials as FormArray;
    creds.removeAt(1);
  }
  // ----------------------------------------------------------------------------






  // ----------------------------------Get Blog Category Function-------------------

  getBlogCategory() {
    var data: any;
    data = {
      'source': 'blog_category'
    };
    this.apiservice.getData(data).subscribe(response => {
      let result: any;
      result = response;
      result = response;
      this.blogCategoryArray = result.res;
    });
  }
  // ----------------------------------------------------------------------------------





  // ----------------------------------TAGS view Function-------------------

  getTagsCount() {
    var data: any;
    data = {
      'source': 'tags_view'
    };
    this.apiservice.getData(data).subscribe(response => {
      let result: any;
      result = response;
      if(result!=null && result.res!=null && result.res[0] !=null )
      this.options = result.res[0].tags;


    });
  }
  // ----------------------------------------------------------------------------------





  //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
  @Input()          //single data from resolve call  & set the value for edit
  set singleData(editDatavals: any) {
    this.setData = editDatavals;
    console.log("Library te", this.setData);


  }
  // -----------------------------------------------------------------------------------


  // ---------------------------------SUBMIT----------------------------------------
  onSubmit() {
    this.blogManagementForm.value.tags = this.tags_array;
    console.log("test",this.blogManagementForm.value.tags);
    this.blogManagementForm.controls['blogcontent'].markAsTouched();

    if (this.blogManagementForm.valid) {
      if (this.blogManagementForm.value.status)
        this.blogManagementForm.value.status = parseInt("1");
      else
        this.blogManagementForm.value.status = parseInt("0");
      if (this.activatedRoute.snapshot.params.id != null) {    //update part
        this.messageText = "One row updated!!!";
        this.blogManagementForm.value.tags = this.tags_array;
        data = {
          "source": "blogs",
          "data": {
            "id": this.params_id,
            "blogtitle": this.blogManagementForm.value.blogtitle,
            "blogcat": this.blogManagementForm.value.blogcat,
            "blogcontent": this.blogManagementForm.value.blogcontent,
            "priority": this.blogManagementForm.value.priority,
            "status": this.blogManagementForm.value.status,
            "metatitle": this.blogManagementForm.value.metatitle,
            "metadesc": this.blogManagementForm.value.metadesc,
            "tags": this.blogManagementForm.value.tags,
            "credentials": this.blogManagementForm.value.credentials

          },
          "sourceobj": ["blogcat"]
        };
      } else {
        this.isSubmitted = true;
        var data: any;
        data = {                                         //add part
          "source": "blogs",
          "data": this.blogManagementForm.value,
          "sourceobj": ["blogcat"]
        };
      }

      this.apiservice.addData(data).subscribe(response => {
        let result: any;
        result = response;



        setTimeout(() => {
          this.router.navigateByUrl('/' + this.listUrl);
        }, 3000);

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
  showval(event: any) {
    if (event.keyCode == 13) {
      this.tags_array.push(event.target.value);
      this.blogManagementForm.controls['tags'].patchValue("");
      return;
    }
    
  }
  // ------------------------------------------------------------------------------------




  // ---------------------------------------VIDEO URL PREVIEW-----------------------------
  preview_video(video_index) {
    this.openDialog(this.blogManagementForm.value.credentials[video_index].video_url);
  }
  // -------------------------------------------------------------------------------------





  // --------------------------------------------CLEAR TAGS---------------------------------
  clearTags(index) {
    this.tags_array.splice(index, 1);
  }
  // -------------------------------------------------------------------------------------



}








// ------------------------------------Modal Component Works------------------------------
@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
})
export class Modal {
  videoid: any = '';

  constructor(
    public dialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {


  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
// ---------------------------------------------------------------------------------------