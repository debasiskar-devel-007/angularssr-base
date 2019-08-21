import { Component, OnInit, Input,Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
export interface DialogData {
  msg: string;
}
@Component({
  selector: 'lib-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  /**blog varibles declaration start here**/
  public getDataEndpointData: any;
  public addEndpointData: any;
  public serverUrlData: any;
  public listUrl: any;
  public blogarray: any = [];
  isSubmitted = false;
  blogAddEditForm: FormGroup;
  public params_id: any;
  public editarray: any = [];
  public statusarray: any = [];
  /**blog varibles declaration end here**/

  @Input()         //setting the listing url form the application
  set listRoute(listval: any) {
    this.listUrl = (listval) || '<no name set>';
    this.listUrl = listval;

  }

  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;

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

  constructor(public fb: FormBuilder, public activeroute: ActivatedRoute,
    public apiservice: ApiService, public _http: HttpClient, public router: Router
    , public dialog: MatDialog) {

    /**catch the parameter id***/
    if (this.activeroute.snapshot.params.id != null) {
      this.params_id = this.activeroute.snapshot.params.id;
      this.editBlog();

    }
    /*catch parameter id end here**/

    /**Formgroup create start here**/
    this.blogAddEditForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      parent_id: []
    })
    /**Formgroup create end here**/
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

    //getBlogData call here
    setTimeout(() => {
      this.getBlogData();
    }, 100);


  }
  /**validation untouch purpose **/
  inputUntouch(form: any, val: any) {
    console.log('on blur .....');
    console.log(form.controls[val].value);
    form.controls[val].markAsUntouched();
  }
  /*validation untouch purpose*/

  /** getting all blogs data start here **/
  getBlogData() {

    let data: any = {
      "source": "blog_category_view"
    }

    this.apiservice.getData(data).subscribe(response => {

      let result: any = response;
      this.blogarray = result.res;
    })
  }
  /**getting all blogs data end here**/

  /**add & update* blogs submitting form start here**/
  blogAddEditFormSubmit() {
    this.isSubmitted = true;
    var data: any;

    if (this.activeroute.snapshot.params.id != null) {   //update part
      data = {
        "source": "blog_category",
        "data": {
          "id": this.params_id,
          "parent_id": this.blogAddEditForm.value.parent_id,
          'title': this.blogAddEditForm.value.title,
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
          'description': this.blogAddEditForm.value.description

        },
        "sourceobj": ["parent_id"]
      };
    }
    this.apiservice.addData(data).subscribe(response => {
      let result: any;
      result = response;
      this.statusarray = result.status;
      console.log("this.statusarray");
      console.log(this.statusarray);

      setTimeout(() => {
        this.router.navigateByUrl('/' + this.listUrl);
      }, 3000);



    });
  }
  /**add & update* blogs submitting form end here**/

  /***Edit Blog Start Here ***/
  editBlog() {
    let data: any = {
      "source": "blog_category",
      "condition": {
        "_id": this.params_id
      }
    }
    this.apiservice.getData(data).subscribe(response => {
      let result: any = response;
      let tempvar = result.res;
      console.log(tempvar);
      this.editarray = result.res;
      console.log("okkkkkkkkkkkk");
      console.log(this.editarray);

      this.blogAddEditForm.controls['title'].setValue(tempvar[0].title);
      this.blogAddEditForm.controls['description'].setValue(tempvar[0].description);
      this.blogAddEditForm.controls['parent_id'].setValue(tempvar[0].parent_id);
    }, error => {
      console.log("Ooops");
    })
  }
  /**Edit Blog End Here**/

}
// @Component({
//   selector: 'dialogtest',
//   templateUrl: 'modal.html',
// })
// export class Dialogtest {
//   public is_error: any;

//   constructor(public dialogRef: MatDialogRef<Dialogtest>,
//      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
//         this.is_error = data.msg;
//   }
// }
