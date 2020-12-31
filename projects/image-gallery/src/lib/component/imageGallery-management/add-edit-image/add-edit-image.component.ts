import { Component, OnInit,Input, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../Service/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'lib-add-edit-image',
  templateUrl: './add-edit-image.component.html',
  styleUrls: ['./add-edit-image.component.css']
})
export class AddEditImageComponent implements OnInit {
  public headerText: any = "Add Image";
  public buttonText: any = "Submit";
  public flag: boolean;
  public images_array_edit: any = [];
  img_var: any;
  image_name: any;
  image_type: any;
  imageGalleryManagementForm: FormGroup;
  public serverUrlData: any = '';
  public getDataEndpointData: any = '';
  public addEndpointData: any = '';
  public DataList: any = [];
  public images_array: any = [];
  public imageConfigData: any = '';
  public imageListUrl: any = '';
  public dataForEdit: any = [];
  public ErrCode: boolean;
  public spinnerLoader: boolean;
  public parameter_id: any = '';
  public sourceName:any='';
  public categorySourceName:any='';
  public fullImagePath:any;
  public imageName:any;
  public imageType:any;
  public img_flag:any=false;
  public message:any='Submitted Successfully';
  public paramsuserid: any='';
  public parentuserid: any='';
  public addcheckfield: any='';
  public community_expo:boolean= false;

  @ViewChild(FormGroupDirective, { static: false }) formDirective: FormGroupDirective;

  @Input()
  set imageUpload(getConfig: any) {
    this.imageConfigData = getConfig;
    console.log( '>>>>>>>>>>>',this.imageConfigData)
  }

  @Input()
  set SourceName(val : any){
    this.sourceName = (val) || '<no name set>';
    this.sourceName = val;
  }
  @Input()
  set ImageCategorySourceName(val : any){
    this.categorySourceName = (val) || '<no name set>';
    this.categorySourceName = val;
  }

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
  @Input()          //getting the listing page url from application
  set imageListingUrl(val: any) {
    this.imageListUrl = (val) || '<no name set>';
    this.imageListUrl = val;

  }

  // UserId
  @Input()          
  set UserId(val: any) {
    this.paramsuserid = (val) || '<no name set>';
    this.paramsuserid = val;
    console.log(this.paramsuserid,'idddd')
  }

    // Cookie UserId
    @Input()          
    set ParentId(val: any) {
      this.parentuserid = (val) || '<no name set>';
      this.parentuserid = val;
      console.log(this.parentuserid,'cookie idddd')
    }

    // Cookie UserId
    @Input()          
    set addCommunityCheckField(val: any) {
      this.addcheckfield = (val) || '<no name set>';
      this.addcheckfield = val;
      console.log(this.addcheckfield,'field Condition')
    }


  @Input()
  set singleData(val: any) {
    this.dataForEdit = (val) || '<no name set>';
    this.dataForEdit = val;
    if (this.activeroute.snapshot.params._id) {
      this.img_flag = true;

      this.headerText = "Edit Image";
      this.buttonText = "Update";
      this.message='Updated Successfully'

      this.parameter_id = this.activeroute.snapshot.params._id;
      this.imageGalleryManagementForm.controls['category_name'].patchValue(val[0].category_name);
      this.imageGalleryManagementForm.controls['img_gallery'].patchValue(val[0].img_gallery);
      this.imageGalleryManagementForm.controls['title'].patchValue(val[0].title);
      this.imageGalleryManagementForm.controls['decription'].patchValue(val[0].decription);
      this.imageGalleryManagementForm.controls['status'].patchValue(val[0].status);
      
       
      // for (let i = 0; i < val[0].img_gallery.length; i++) {
      //   this.img_var = val[0].img_gallery[i].basepath + val[0].img_gallery[i].fileservername;
      //   this.image_name = val[0].img_gallery[i].name;
      //   this.image_type = val[0].img_gallery[i].type;
      //   this.images_array_edit.push({
      //     'img_var': this.img_var,
      //     'image_name': this.image_name,
      //     'image_type': this.image_type
      //   });
      //   this.images_array.push({
      //     "basepath": val[0].img_gallery[i].basepath,
      //     "image": val[0].img_gallery[i].image,
      //     "name": val[0].img_gallery[i].name,
      //     "type": val[0].img_gallery[i].type
      //   });
      // }
      this.fullImagePath=val[0].img_gallery.basepath + val[0].img_gallery.image;
      this.imageName=val[0].img_gallery.name;
      this.imageType=val[0].img_gallery.type;

      if(this.addcheckfield != null && this.addcheckfield == 'true'){
      this.community_expo = val[0].community_expo;
        
      }

    }

  }
  constructor(public apiService: ApiService, public fb: FormBuilder, public activeroute: ActivatedRoute,
    public _http: HttpClient, public router: Router,public _snackBar:MatSnackBar) {
    this.imageGalleryManagementForm = this.fb.group({
      category_name: ['',Validators.required],
      img_gallery: [''],
      title:['',Validators.required],
      decription:['',Validators.required],
      status:[true]
    })
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
      this.getDropdownData();
    }, 50);
  }
  getDropdownData() {
    let data: any = {
      "source": this.categorySourceName,
      "condition": {
        "status": 1
      },
    }
    if(this.paramsuserid != null && this.paramsuserid != ''){
      data.condition.userid = this.paramsuserid;
      }
    this.apiService.getData(data).subscribe(response => {
      let result: any = response;
      this.DataList = result.res;
    })
  }
  
  // clear_image(index: any) {
  //   this.images_array_edit.splice(index, 1);

  // }
  clear_image(){
    this.img_flag=false;

  }



  ImageAddEditFormSubmit() {

    // console.log(this.imageGalleryManagementForm.value.title)

    // if (typeof(this.imageConfigData.files) != 'undefined' && this.imageConfigData.files.length >= 1) {
    //   for (let loop = 0; loop < this.imageConfigData.files.length; loop++) {
    //     this.images_array =
    //       this.images_array.concat({
    //         "upload_server_id": this.imageConfigData.files[loop].upload.data._id,
    //         "basepath": this.imageConfigData.files[loop].upload.data.basepath + '/' + this.imageConfigData.path + '/',
    //         "fileservername": this.imageConfigData.files[loop].upload.data.data.fileservername,
    //         "name": this.imageConfigData.files[loop].name,
    //         "type": this.imageConfigData.files[loop].type,
    //         "bucketname": this.imageConfigData.bucketName
    //       });
    //   }

    //   this.imageGalleryManagementForm.controls['img_gallery'].patchValue(this.images_array);
    // } else {
    //   // this.imageGalleryManagementForm.value.img_gallery = false;
    // }

    // for single image 

    if (this.imageConfigData.files) {

      if (this.imageConfigData.files.length > 1 ) { this.ErrCode = true; return; }
      this.imageGalleryManagementForm.value.img_gallery =
        {
          "basepath": this.imageConfigData.files[0].upload.data.basepath + '/' + this.imageConfigData.path + '/',
          "image": this.imageConfigData.files[0].upload.data.data.fileservername,
          "name": this.imageConfigData.files[0].name,
          "type": this.imageConfigData.files[0].type,
          "aspectratio":this.imageConfigData.aspectratio,
          "croppedfiles":this.imageConfigData.croppedfiles
        };
    } else {

    }



    for (let x in this.imageGalleryManagementForm.controls) {
      this.imageGalleryManagementForm.controls[x].markAsTouched();
    }
    if (this.imageGalleryManagementForm.valid) {

      if(this.imageGalleryManagementForm.value.status){
        this.imageGalleryManagementForm.value.status = parseInt("1")
      } else {
        this.imageGalleryManagementForm.value.status = parseInt("0")

      }
      var data: any;
      if (this.activeroute.snapshot.params._id) {   

       

        // var imageData : any=[]=this.dataForEdit[0].img_gallery;
        // imageData = imageData.concat(this.images_array_edit);
        // console.log("image data for update",imageData);

        data = {                                        //update part
          "source": this.sourceName,
          'data': {
            "id": this.parameter_id,
            "category_name": this.imageGalleryManagementForm.value.category_name,
            "img_gallery": this.imageGalleryManagementForm.value.img_gallery,
            "title": this.imageGalleryManagementForm.value.title,
            "decription":this.imageGalleryManagementForm.value.decription,
            "status":this.imageGalleryManagementForm.value.status,

          },
          "sourceobj": ["category_name"]
        }
        if(this.addcheckfield != null && this.addcheckfield == 'true'){
          // if(this.community_expo){
          //   this.community_expo = parseInt("1")
          // }
        console.log('community_expo_test ----->>>' , this.community_expo)
          data.data.community_expo = this.community_expo
          //console.log('cm>>>',this.imageGalleryManagementForm)
        }
      } else {
        data = {                                         //add part
          "source": this.sourceName,
          "data":{
            "category_name": this.imageGalleryManagementForm.value.category_name,
            "img_gallery": this.imageGalleryManagementForm.value.img_gallery,
            "title": this.imageGalleryManagementForm.value.title,
            "decription":this.imageGalleryManagementForm.value.decription,
            "status":this.imageGalleryManagementForm.value.status,
           
          },
          "sourceobj": ["category_name"]
        }
        if(this.paramsuserid != null && this.paramsuserid != ''){
        data.data.userid = this.paramsuserid;
        }
        if(this.parentuserid != null && this.parentuserid != ''){
          data.data.image_add_by = this.parentuserid;
          }
        if(this.addcheckfield != null && this.addcheckfield == 'true'){
          // if(this.community_expo){
          //   this.community_expo = parseInt("1")
          // }
        console.log('community_expo_test ----->>>' , this.community_expo)
          data.data.community_expo = this.community_expo
          //console.log('cm>>>',this.imageGalleryManagementForm)
        }

      
      }
    }
    
    this.spinnerLoader = true;
    this.apiService.addData(data).subscribe(response => {
      this.spinnerLoader = false;
      this.formDirective.resetForm();

      this._snackBar.open(this.message, 'OK', {
        duration: 3000,
      } )
       
      setTimeout(() => {
        this.router.navigateByUrl('/' + this.imageListUrl);
      }, 500);
    })

  }
  inputUntouch(form: any, val: any) {

    form.controls[val].markAsUntouched();
  }




  // uploadImage(){
  //   console.log(this.imageConfigData)
  // }
  
}
