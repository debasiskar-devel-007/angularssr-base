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
  imageGalleryManagementForm: FormGroup;
  public serverUrlData: any = '';
  public getDataEndpointData: any = '';
  public addEndpointData: any = '';
  public DataList: any = [];
  public imageConfigData: any = '';
  public ErrCode: boolean;
  public spinnerLoader : boolean;
  @Input()
  set imageUpload(getConfig: any) {
    this.imageConfigData = getConfig;
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
    console.log("adding endpoint", this.getDataEndpointData);
  }

  constructor(public apiService: ApiService, public fb: FormBuilder, public activeroute: ActivatedRoute,
    public _http: HttpClient, public router: Router) {
    this.imageGalleryManagementForm = this.fb.group({
      parent_category: [''],
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
      this.getDataDropdown();
    }, 50);
  }
  getDataDropdown() {
    let data: any = {
      "source": "imageGallery_category"
    }
    this.apiService.getData(data).subscribe(response => {
      let result: any = response;
      this.DataList = result.res;
    })
  }
  resetImageForm() {
    this.imageGalleryManagementForm.reset();
  }
  ImageAddEditFormSubmit() {
    console.log(this.imageGalleryManagementForm.value);
    if (this.imageConfigData.files) {
      if (this.imageConfigData.files.length > 1) {
        this.ErrCode = true;
        return;
      }
      this.imageGalleryManagementForm.value.img_gallery =
        {
          "basepath": this.imageConfigData.files[0].upload.data.basepath + '/'
            + this.imageConfigData.path + '/',
          "image": this.imageConfigData.files[0].upload.data.data.fileservername,
          "name": this.imageConfigData.files[0].name,
          "type": this.imageConfigData.files[0].type
        };
    } else {
      this.imageGalleryManagementForm.value.img_gallery = false;
    }
    let x: any;
    for (x in this.imageGalleryManagementForm.controls) {
      this.imageGalleryManagementForm.controls[x].markAsTouched();
    }
    if (this.imageGalleryManagementForm.valid) {
      var data: any;
      data = {                                         //add part
        "source": "imageGallery_management",
        "data": this.imageGalleryManagementForm.value,
        "sourceobj": ["parent_category"]
      }
      this.spinnerLoader=true;
      this.apiService.addData(data).subscribe(response => {
        console.log(response);
        this.spinnerLoader=false;
      })
    } else {
      alert("error occured");
    }
  }
}
