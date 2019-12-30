import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'projects/image-gallery/src/lib/Service/api.service';
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
  public listUrl: any = '';
  public dataForEdit: any = [];
  public ErrCode: boolean;
  public spinnerLoader: boolean;
  public parameter_id: any = '';
  public sourceName:any='';
  public categorySourceName:any='';

  @Input()
  set imageUpload(getConfig: any) {
    this.imageConfigData = getConfig;
    console.log("image data",this.imageConfigData);
  }

  @Input()
  set SourceName(val : any){
    this.sourceName = (val) || '<no name set>';
    this.sourceName = val;
    console.log("Source nameeeee",this.sourceName);
  }
  @Input()
  set ImageCategorySourceName(val : any){
    this.categorySourceName = (val) || '<no name set>';
    this.categorySourceName = val;
    console.log("Source nameeeee",this.sourceName);
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
  set listRouteUrl(val: any) {
    this.listUrl = (val) || '<no name set>';
    this.listUrl = val;

  }
  @Input()
  set singleData(val: any) {
    this.dataForEdit = (val) || '<no name set>';
    this.dataForEdit = val;
    if (this.activeroute.snapshot.params._id) {
      this.headerText = "Edit Image";
      this.buttonText = "Update";
      this.parameter_id = this.activeroute.snapshot.params._id;
      this.imageGalleryManagementForm.controls['category_name'].patchValue(val[0].category_name);
      this.imageGalleryManagementForm.controls['img_gallery'].patchValue(val[0].img_gallery);
       
      for (let i = 0; i < val[0].img_gallery.length; i++) {
        this.img_var = val[0].img_gallery[i].basepath + val[0].img_gallery[i].fileservername;
        this.image_name = val[0].img_gallery[i].name;
        this.image_type = val[0].img_gallery[i].type;
        this.images_array_edit.push({
          'img_var': this.img_var,
          'image_name': this.image_name,
          'image_type': this.image_type
        });
        this.images_array.push({
          "basepath": val[0].img_gallery[i].basepath,
          "image": val[0].img_gallery[i].image,
          "name": val[0].img_gallery[i].name,
          "type": val[0].img_gallery[i].type
        });
      }

    }

  }
  constructor(public apiService: ApiService, public fb: FormBuilder, public activeroute: ActivatedRoute,
    public _http: HttpClient, public router: Router) {
    this.imageGalleryManagementForm = this.fb.group({
      category_name: [''],
      img_gallery: ['']
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
    this.apiService.getData(data).subscribe(response => {
      let result: any = response;
      this.DataList = result.res;
    })
  }
  
  clear_image(index: any) {
    this.images_array_edit.splice(index, 1);
  }


  ImageAddEditFormSubmit() {

    if (this.imageConfigData.files.length > 0 || this.img_var.length > 0) {
      for (let loop = 0; loop < this.imageConfigData.files.length; loop++) {
        this.images_array =
          this.images_array.concat({
            "upload_server_id": this.imageConfigData.files[loop].upload.data._id,
            "basepath": this.imageConfigData.files[loop].upload.data.basepath + '/' + this.imageConfigData.path + '/',
            "fileservername": this.imageConfigData.files[loop].upload.data.data.fileservername,
            "name": this.imageConfigData.files[loop].name,
            "type": this.imageConfigData.files[loop].type,
            "bucketname": this.imageConfigData.bucketName
          });
      }

      this.imageGalleryManagementForm.controls['img_gallery'].patchValue(this.images_array);
    } else {
      this.imageGalleryManagementForm.value.img_gallery = false;
    }

    let x: any;
    for (x in this.imageGalleryManagementForm.controls) {
      this.imageGalleryManagementForm.controls[x].markAsTouched();
    }
    if (this.imageGalleryManagementForm.valid) {
      var data: any;
      if (this.activeroute.snapshot.params._id) { 
        data = {                                        //update part
          "source": this.sourceName,
          'data': {
            "id": this.parameter_id,
            "category_name": this.imageGalleryManagementForm.value.category_name,
            "img_gallery": this.imageGalleryManagementForm.value.img_gallery,
          },
          "sourceobj": ["category_name"]
        }
      } else {

        data = {                                         //add part
          "source": this.sourceName,
          "data": this.imageGalleryManagementForm.value,
          "sourceobj": ["category_name"]
        }
      }
    }
    this.spinnerLoader = true;
    this.apiService.addData(data).subscribe(response => {
      console.log(response);
      this.spinnerLoader = false;
      setTimeout(() => {
        this.router.navigateByUrl('/' + this.listUrl);
      }, 100);
    })

  }
}
