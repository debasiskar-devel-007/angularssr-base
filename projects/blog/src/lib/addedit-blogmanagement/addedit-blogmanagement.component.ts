import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { map, startWith } from 'rxjs/operators';


// interface  Websites {
//   value: number;
//   viewValue: string;
// }

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
  // websites: Websites[] = [
  //   {value: 1, viewValue: 'Mask Blog 1'},
  //   {value: 2, viewValue: 'Mask Blog 2'},
  //   {value: 3, viewValue: 'Mask Blog 3'}
  // ];
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
  options: any = [''];
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  tags_array: any = [];
  dialogRef: any;
  public params_id: any;
  setData: any;
  messageText: any='Blog Added Successfully.';
  listUrl: any;
  testTag: any = [];
  imageConfigData: any;
  ErrCode: any;
  img_var: any;
  image_name: any;
  image_type: any;
  flag: boolean = false;
  images_array: any = [];
  images_array_edit: any = [];
  fileConfigData: any;
  file_array: any = [];
  file_array_edit: any = [];
  action2:any;
  editorconfig:any={};
  public statuschecked:boolean = true;
  public categoryUrlData:any;
  public tagsEndpointData:any;
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

  @Input()          //setting the server url for category from project
  set categoryUrl(blogCat: any) {
    this.categoryUrlData = (blogCat) || '<no name set>';
    this.categoryUrlData = blogCat;
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

  @Input()          //setting the server url from project
  set tagsViewEndpoint(endpointUrlval: any) {
    this.tagsEndpointData = (endpointUrlval) || '<no name set>';
    this.tagsEndpointData = endpointUrlval;

  }


  @Input()         //setting the listing url form the application
  set listRoute(listval: any) {
    this.listUrl = (listval) || '<no name set>';
    this.listUrl = listval;
    console.log(this.listUrl);
  }
  // -----------------------------------------------------------------------------------------

  constructor(private http: HttpClient, private apiservice: ApiService,
    private activatedRoute: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder, public dialog: MatDialog,
    public snackBar: MatSnackBar) {
    this.blogManagementForm = this.formBuilder.group({
      blogtitle: ['', [Validators.required]],
      blogcat: ['', ],
      description: ['', [Validators.required]],
      // website:[],
      featured:[''],
      priority: ['', [Validators.required]],
      status: [''],
      // metatitle: ['', [Validators.required]],
      // metadesc: ['', [Validators.required]],
      author:['',[Validators.required]],
      video: this.formBuilder.array([]),
      tags: [''],
      blogs_image: [''],
      blogs_file: ['']
    });
    this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
    
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

    if (this.action2!='edit')
      setTimeout(() => {
        // this.addYoutubeVideo(null, null,null);
      }, 500)

    setTimeout(() => {
      this.getBlogCategory();
    }, 50)


    setTimeout(() => {
      this.getTagsCount();
    }, 50)


    if (this.action2=='edit') {
      this.headerText="Edit Blog Management Data";
      this.flag = true;
      this.params_id = this.setData._id;
      this.buttonText = "Update";
      this.blogManagementForm.controls['blogtitle'].patchValue(this.setData.blogtitle);
      this.blogManagementForm.controls['blogcat'].patchValue(this.setData.blogcat);
      this.blogManagementForm.controls['description'].patchValue(this.setData.description);

      // this.blogManagementForm.controls['website'].patchValue(this.setData.website);
      this.blogManagementForm.controls['featured'].patchValue(this.setData.featured);

      this.blogManagementForm.controls['priority'].patchValue(this.setData.priority);
      this.blogManagementForm.controls['status'].patchValue(this.setData.status);  
      this.blogManagementForm.controls['blogs_image'].patchValue(this.setData.blogs_image);
      this.blogManagementForm.controls['blogs_file'].patchValue(this.setData.blogs_file);
      this.blogManagementForm.controls['author'].patchValue(this.setData.author);


      /*Image works*/
      for (let i = 0; i < this.setData.blogs_image.length; i++) {
        this.img_var = this.setData.blogs_image[i].basepath + this.setData.blogs_image[i].image;
        this.image_name = this.setData.blogs_image[i].name;
        this.image_type = this.setData.blogs_image[i].type;
        this.images_array_edit.push({ 'img_var': this.img_var, 'image_name': this.image_name, 'image_type': this.image_type });
        this.images_array.push({
          "basepath": this.setData.blogs_image[i].basepath,
          "image": this.setData.blogs_image[i].image,
          "name": this.setData.blogs_image[i].name,
          "type": this.setData.blogs_image[i].type
        });
      }

      /*File works*/
      for (let i2 = 0; i2 < this.setData.blogs_file.length; i2++) {
        this.file_array_edit.push(this.setData.blogs_file[i2].name);
        this.file_array.push({
          "basepath": this.setData.blogs_file[i2].basepath,
          "file": this.setData.blogs_file[i2].file,
          "name": this.setData.blogs_file[i2].name,
          "type": this.setData.blogs_file[i2].type
        });
      }


      for (const vid in this.setData.video) {
        
        this.addYoutubeVideo(this.setData.video[vid].video_url,
          this.setData.video[vid].video_title,
          this.setData.video[vid].video_description);
      }

      if (this.setData.tags != "")
        this.setData.tags.forEach(element => {
          this.tags_array.push(element);
        });


    }





    // ------------------------------Autocomplete Functions----------------------------------

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    // ------------------------------------------------------------------------------------------
  }
  redirectToListingPage(){
      this.router.navigateByUrl('/' + this.listUrl);
  }

  // ------------------------------------_Filter FUnction----------------------------------
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  // --------------------------------------------------------------------------------------------


  @Input()
  set action(action: any) {
    this.action2 = action;
  }


  @Input()
  set imageUpload(getConfig: any) {
    this.imageConfigData = getConfig;
    // console.log("image config",this.imageConfigData);
  }

  @Input()
  set fileUpload(getConfig: any) {
    this.fileConfigData = getConfig;
  }




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
  addYoutubeVideo(vid_url: any, vid_tit: any, vid_desc: any) {
    const creds = this.blogManagementForm.controls.video as FormArray;
    creds.push(this.formBuilder.group({
      video_url: [vid_url],
      video_title: [vid_tit],
      video_description: [vid_desc]
    }));
  }
  // ---------------------------------------------------------------------------







  // ---------------------------------Delete Credetial Fucntions----------------
  deleteCreds() {
    const creds = this.blogManagementForm.controls.video as FormArray;
    creds.removeAt(1);
  }
  // ----------------------------------------------------------------------------




  // ----------------------------------Get Blog Category Function-------------------

  getBlogCategory() {
    // var data: any;
    // data = {
    //   'source': 'blog_category'
    // };
    this.apiservice.getDataByEndpoint(this.serverUrlData + this.categoryUrlData).subscribe(response => {
      let data: any;
      data = response;
      this.blogCategoryArray = data.result;
    });
  }
  // ----------------------------------------------------------------------------------





  // ----------------------------------TAGS view Function-------------------

  getTagsCount() {
    // var data: any;
    // data = {
    //   'source': 'tags_view'
    // };
    this.apiservice.getDataByEndpoint( this.serverUrlData +  this.tagsEndpointData).subscribe(response => {
      let result: any;
      result = response;
      if (result != null && result.res != null && result.res[0] != null)      
        this.options=result.res[0].tags;
      
    });
  }
  // ----------------------------------------------------------------------------------

  // getDataByEndpoint



  //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
  @Input()          //single data from resolve call  & set the value for edit
  set singleData(editDatavals: any) {
    this.setData = editDatavals;
  }
  // -----------------------------------------------------------------------------------


  // ---------------------------------SUBMIT----------------------------------------
  onSubmit() {
     
    /*__________________________IMAGE UPLOADER________________________________________*/
    if (this.imageConfigData) {
      // console.log("image path",this.imageConfigData);
      for (const loop in this.imageConfigData.files) {
        this.images_array =
          this.images_array.concat({
            "basepath": this.imageConfigData.files[loop].upload.data.basepath + '/' + this.imageConfigData.path + '/',
            "image": this.imageConfigData.files[loop].upload.data.data.fileservername,
            "name": this.imageConfigData.files[loop].name,
            "type": this.imageConfigData.files[loop].type
          });
      }
      this.blogManagementForm.value.blogs_image = this.images_array;
    } else {
      this.blogManagementForm.value.blogs_image = false;
    }
    /*_____________________________________________________________________________________*/


    /*_________________________________________FILE UPLOADER_______________________________*/

    if (this.fileConfigData) {
      for (const loop in this.fileConfigData.files) {
        this.file_array =
          this.file_array.concat({
            "basepath": this.fileConfigData.files[loop].upload.data.basepath + '/' + this.fileConfigData.path + '/',
            "file": this.fileConfigData.files[loop].upload.data.data.fileservername,
            "name": this.fileConfigData.files[loop].name,
            "type": this.fileConfigData.files[loop].type
          });
      }
      this.blogManagementForm.value.blogs_file = this.file_array;
    } else {
      this.blogManagementForm.value.blogs_file = false;
    }
    // ___________________________________________________________________________________

    this.blogManagementForm.value.tags = this.tags_array;

    this.blogManagementForm.controls['description'].markAsTouched();
    this.blogManagementForm.controls['blogtitle'].markAsTouched();

    if (this.blogManagementForm.valid) {
      console.log("values",this.blogManagementForm.value);

      //status
      if (this.blogManagementForm.value.status)
        this.blogManagementForm.value.status =1;
      else
        this.blogManagementForm.value.status =0;
// featured
      if (this.blogManagementForm.value.featured)
        this.blogManagementForm.value.featured = parseInt("1");
      else
        this.blogManagementForm.value.featured = parseInt("0");




      if (this.params_id!= null) {    //update part
        this.messageText = "One row updated!!!";
        this.blogManagementForm.value.tags = this.tags_array;
        data = {
          // "source": "blogs",
          "data": {
            "id": this.params_id,
            "blogtitle": this.blogManagementForm.value.blogtitle,
            "blogcat": this.blogManagementForm.value.blogcat,
            "description": this.blogManagementForm.value.description,
            // "website": this.blogManagementForm.value.website,
            "featured": this.blogManagementForm.value.featured,
            "priority": this.blogManagementForm.value.priority,
            "status": this.blogManagementForm.value.status, 
            "tags": this.blogManagementForm.value.tags,
            "video": this.blogManagementForm.value.video,
            "blogs_image": this.blogManagementForm.value.blogs_image,
            "blogs_file": this.blogManagementForm.value.blogs_file,
            "author":this.blogManagementForm.value.author

          },
          "sourceobj": ["blogcat"]
        };
      } else {
        this.isSubmitted = true;
        var data: any;
        data = {          
          // "source":"blogs"                               //add part
          "data": this.blogManagementForm.value,
          "sourceobj": ["blogcat"]
        };
      }

      this.apiservice.addData(data).subscribe(response => {
        let result: any;
        result = response;
        if(result.status == 'success'){
          this.snackBar.open(this.messageText,'OK',{duration:3000});
        }

        setTimeout(() => {
          this.router.navigateByUrl('/' + this.listUrl);
        }, 3000);

      });


    }
    else
    console.log("Form is invalid");
    
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
    
    if (event.keyCode == 13 || event.keyCode == 32) {
      this.tags_array.push(event.target.value);
      this.blogManagementForm.controls['tags'].patchValue("");
      return;
    }

  }
  // ------------------------------------------------------------------------------------




  // ---------------------------------------VIDEO URL PREVIEW-----------------------------
  preview_video(video_index) {
    this.openDialog(this.blogManagementForm.value.video[video_index].video_url);
  }
  // -------------------------------------------------------------------------------------


  // --------------------------------------------CLEAR TAGS---------------------------------
  clearTags(index) {
    this.tags_array.splice(index, 1);
  }
  // -------------------------------------------------------------------------------------

  openSnackBar() {
    this.snackBar.openFromComponent(YoutubeComponent, {
      // duration: 1500,
      panelClass: ['snackbar-color']
    });
  }
  // --------------------------------------Blogs Image clear-------------------------------
  clear_image(index) {
    this.images_array.pop(this.setData.blogs_image[index]);
    this.images_array_edit.splice(index, 1);
  }
  // ------------------------------------------------------------------------------------

  // --------------------------------------Blogs File clear-------------------------------
  clearFileTags(index) {
    this.file_array.pop(this.setData.blogs_file[index]);
    this.file_array_edit.splice(index, 1);
  }
  // ------------------------------------------------------------------------------------
  
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
      console.warn('video modal',data)

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
// ---------------------------------------------------------------------------------------
@Component({
  templateUrl: 'youtubetip.html',
  styleUrls: ['./addedit-blogmanagement.component.css']
})
export class YoutubeComponent {

}

