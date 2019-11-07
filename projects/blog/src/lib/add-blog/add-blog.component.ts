import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  msg: string;
}

@Component({
  selector: 'lib-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  /**ckeditor start here*/
  public Editor = ClassicEditor;  //for ckeditor
  editorConfig = {
    placeholder: 'Type the content here!',
  };
  public model = {
    editorData: ''
  };
  /**ckeditor end here*/

<<<<<<< HEAD
  /**blog varibles declaration start here**/
  public dialogRef: any;
  public getDataEndpointData: any;
  public addEndpointData: any;
  public serverUrlData: any;
  public listUrl: any;
  public blogarray: any = [];
  public blogDataarray: any = [];
  isSubmitted = false;
  blogAddEditForm: FormGroup;
  public params_id: any;
  public editarray: any = [];
  public statusarray: any = [];
  public allData: any = [];
  /**blog varibles declaration end here**/
  public headerText: any = 'Add Blogs';
  public buttonText: any = 'Submit';
  public messageText: any = 'Successfully Submitted';

  @Input()         //setting the listing url form the application
  set listRoute(listval: any) {
    this.listUrl = (listval) || '<no name set>';
    this.listUrl = listval;
  }
  @Input()          //resolve list
  set listResolve(listresolveUrlval: any) {
    this.blogDataarray = (listresolveUrlval) || '<no name set>';
    this.blogDataarray = listresolveUrlval;
  }
=======
>>>>>>> f5c94d362a5902414edc831d0f2ede0f73ae81c4

  // ====================declarations==================
  blogCatForm: FormGroup;
  header_txt: any = "Add Blog Category";
  buttonText: any = "SUBMIT";
  configData: any;
  loader: boolean = false;
  successMessage: any = "Submitted Successfully!!!"
  getParentCatArr: any = [];
  dialogRef:any;
  // ==================================================



  constructor(private formBuilder: FormBuilder, private blogService: BlogService, private router: Router,
    private cookieService: CookieService,public dialog: MatDialog) { }

<<<<<<< HEAD
  }
  @Input()          //single data from resolve call  & set the value for edit
  set singleData(allData: any) {
    this.allData = allData;
    if (this.activeroute.snapshot.params.id) {
      this.params_id = this.activeroute.snapshot.params.id;
      this.headerText = "Edit Blogs";
      this.buttonText = "Update";
      this.blogAddEditForm.controls['title'].patchValue(allData[0].title);
      this.blogAddEditForm.controls['priority'].patchValue(allData[0].priority);
      this.blogAddEditForm.controls['status'].patchValue(allData[0].status);
      this.blogAddEditForm.controls['description'].patchValue(allData[0].description);
      this.model.editorData = allData[0].description;
      this.blogAddEditForm.controls['parent_id'].patchValue(allData[0].parent_id);
=======
  ngOnInit() {
    //generating the form
    this.generateForm();
    //getting the parent category
    this.getParentData();
    // --------------------------------checking the cases------------------------ 
    switch (this.configData.action) {
      case 'add':
        /* Button text */
        this.buttonText = "SUBMIT";
        break;
      case 'edit':
        /* Button text */
        this.buttonText = "UPDATE";
        this.successMessage = "One row updated";
        this.setDefaultValue(this.configData.defaultData);
        this.header_txt = "EDIT";
        break;
>>>>>>> f5c94d362a5902414edc831d0f2ede0f73ae81c4
    }
    // --------------------------------------------------------------------------

  }

<<<<<<< HEAD
  constructor(public fb: FormBuilder, public activeroute: ActivatedRoute,
    public apiservice: ApiService, public _http: HttpClient, public router: Router
    , public dialog: MatDialog) {

    /**Formgroup create start here**/
    this.blogAddEditForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      status: [true,],
      parent_id: []
    })
    /**Formgroup create end here**/
=======

  // ================================================Default value======================================
  setDefaultValue(defaultValue) {
    this.blogCatForm.patchValue({
      blogtitle: defaultValue.blogtitle,
      priority: defaultValue.priority,
      status: defaultValue.status,
      description: defaultValue.description,
      parent_id: defaultValue.parent_id
    });

>>>>>>> f5c94d362a5902414edc831d0f2ede0f73ae81c4
  }
  // ==================================================================================================


<<<<<<< HEAD
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

=======
  //  ============================GENERATING THE FORM=======================
  generateForm() {
    this.blogCatForm = this.formBuilder.group({
      blogtitle: ['',[Validators.required,Validators.maxLength(50)]],
      priority: ['',[Validators.required,Validators.maxLength(2)]],
      status: [true,],
      description: ['',[Validators.required,Validators.maxLength(100)]],
      parent_id: [0,]
    });
  }
  // ========================================================================
>>>>>>> f5c94d362a5902414edc831d0f2ede0f73ae81c4


  //  Getting the input Configuration 
  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
   
  }

  // =========================================MODAL functions==========================================
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(Modal2, {
      width: '250px',
      data: { msg: x }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  // ===================================================================================================

<<<<<<< HEAD
  /**validation for untouch purpose start here **/
  inputUntouch(form: any, val: any) {

    form.controls[val].markAsUntouched();
  }
  /*validation untouch purpose end here*/

  /**add & update* blogs submitting form start here**/
  blogAddEditFormSubmit() {
    this.blogAddEditForm.patchValue({
      description: this.model.editorData
    });
    this.isSubmitted = true;
    let x: any;
    for (x in this.blogAddEditForm.controls) {
      this.blogAddEditForm.controls[x].markAsTouched();
    }
    if (this.blogAddEditForm.valid) {
      if (this.blogAddEditForm.value.status)
        this.blogAddEditForm.value.status = parseInt("1");
      else
        this.blogAddEditForm.value.status = parseInt("0");
      var data: any;
      if (this.activeroute.snapshot.params.id != null) {    //update part
        this.messageText = "One row updated!!!";
        data = {
          "source": "blog_category",
          "data": {
            "id": this.params_id,
            "parent_id": this.blogAddEditForm.value.parent_id,
            'title': this.blogAddEditForm.value.title,
            'priority': this.blogAddEditForm.value.priority,
            'status': this.blogAddEditForm.value.status,
            'description': this.blogAddEditForm.value.description
          },
          "sourceobj": ["parent_id"]
        };
      } else {
        data = {                                         //add part
          "source": "blog_category",
          "data": {
            "parent_id": this.blogAddEditForm.value.parent_id,
            'title': this.blogAddEditForm.value.title,
            'priority': this.blogAddEditForm.value.priority,
            'status': this.blogAddEditForm.value.status,
            'description': this.blogAddEditForm.value.description

          },
          "sourceobj": ["parent_id"]
        };
      }
      this.apiservice.addData(data).subscribe(response => {
        let result: any;
        result = response;
        this.statusarray = result.status;
        if (result.status == "success")
          this.openDialog(this.messageText);
        setTimeout(() => {
          this.dialogRef.close();
        }, 1000);

        setTimeout(() => {
          this.router.navigateByUrl('/' + this.listUrl);
        }, 2000);
      });

=======



//Getting the parent category
  getParentData() {
    let postData: any = {
      source: this.configData.source,
      token: this.cookieService.get('jwtToken')

    };
    this.blogService.getData(this.configData.endpoint2 + 'datalist', postData).subscribe((response: any) => {
      this.getParentCatArr = response.res;
    })
  }





  // =========================SUBMIT function==================
  onSubmit() {
    this.blogCatForm.controls['description'].markAsTouched();
   
    this.loader = true;
    /* stop here if form is invalid */
    if (this.blogCatForm.invalid) {
      return;
    } else {
      if (this.blogCatForm.value.status) {
        this.blogCatForm.value.status = parseInt("1");
      } else {
        this.blogCatForm.value.status = parseInt("0");;
      }

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.blogCatForm.value, this.configData.condition),
        "sourceobj": ["parent_id"]
      };
      
      this.blogService.addData(this.configData.endpoint, postData).subscribe((response: any) => {
        if (response.status == "success") {
         
          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 2000);

          this.router.navigate([this.configData.callBack]);
        } else {
          alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        alert("Some error occurred. Please try again.");
      });
>>>>>>> f5c94d362a5902414edc831d0f2ede0f73ae81c4
    }
  }
  // ==========================================================


  //Blur function
  inputBlur(val: any) {
    this.blogCatForm.controls[val].markAsUntouched();
  }
}

// ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
})
export class Modal2 {

  constructor(
    public dialogRef: MatDialogRef<Modal2>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
// ======================================================================================================


