import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators ,FormGroupDirective} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../Service/api.service';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../../Service/upload.service';
import { NgStyle } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'lib-add-edit-team',
  templateUrl: './add-edit-team.component.html',
  styleUrls: ['./add-edit-team.component.css']
})
export class AddEditTeamComponent implements OnInit {
  public teamData: any = [];
  public allData: any = [];
  public teamForm: FormGroup;
  public params_id: any;
  public getDataEndpointData: any;
  public addEndpointData: any;
  public serverUrlData: any;
  public listrouteData = "";
  public editarray: any = [];
  public spinnerLoader: boolean;
  public imageConfigData: any = '';
  public SingleDataList: any = [];
  public ButtonText: any = "Submit";
  public HeaderText: any = "Add Team Member";
  public ErrCode: boolean;
  public flag: boolean = false;
  public img_var: any = [];
  public image_name: any;
  public image_type: any;
  public sourceName: any;
  public categorySourceName: any;
  public images_array: any = [];
  public images_array_edit:any=[];
  public editorconfig : any = {};
  public fullImagePath:any;
  public imageName:any;
  public imageType:any;
  public img_flag:any=false;

  @ViewChild(FormGroupDirective, { static: false }) formDirective: FormGroupDirective;
  
  /* Config Upload file lib */
  @Input()
  set imageUpload(getConfig: any) {
    this.imageConfigData = getConfig;
  }
  @Input()
  set singleData(val: any) {

    this.SingleDataList = (val) || '<no name set>';
    this.SingleDataList = val;
    console.log("single dataaaaa", this.SingleDataList);
    if (this.activeroute.snapshot.params._id) {
      this.img_flag=true;

      this.ButtonText = "Update";
      this.HeaderText = "Edit Team Member"
      this.flag = true;
      this.params_id = this.activeroute.snapshot.params._id;
      this.teamForm.controls['categoryname'].patchValue(val[0].categoryname);
      this.teamForm.controls['description'].patchValue(val[0].description);
      this.teamForm.controls['membername'].patchValue(val[0].membername);

      this.teamForm.controls['team_img'].patchValue(val[0].team_img);
      this.teamForm.controls['status'].patchValue(val[0].status);

      this.fullImagePath=val[0].team_img.basepath + val[0].team_img.image;
      this.imageName=val[0].team_img.name;
      this.imageType=val[0].team_img.type;
      // for (const i in this.SingleDataList[0].team_img) {

      //   this.img_var.push(this.SingleDataList[0].team_img[i].basepath + this.SingleDataList[0].team_img[i].fileservername);
      //   this.image_name = this.SingleDataList[0].team_img[i].name;
    
       
      // }
      for (const i in this.SingleDataList[0].bulletarray) {
        this.addBulletListData(this.SingleDataList[0].bulletarray[i].bullet_name,
          this.SingleDataList[0].bulletarray[i].bullet_desc);
      }
      for (const i in this.SingleDataList[0].multiplephone) {
        this.addphone(this.SingleDataList[0].multiplephone[i].contactphone);
      }
      for (const i in this.SingleDataList[0].multipleemail) {
        this.addemail(this.SingleDataList[0].multipleemail[i].contactemail);
      }
    }
  }

  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;

  }

  @Input()          //setting the server url from project
  set SourceName(val: any) {
    this.sourceName = (val) || '<no name set>';
    this.sourceName = val;
  }

  @Input()
  set CategorySourceName(val: any) {
    this.categorySourceName = (val) || '<no name set>';
    this.categorySourceName = val;

  }

  @Input()   //getting the listing route
  set ListRoute(val: any) {
    this.listrouteData = (val) || '<no name set>';
    this.listrouteData = val;

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
    public _http: HttpClient, private uploadService: UploadService,
    public apiservice: ApiService, public router: Router) {

    this.teamForm = this.fb.group({
      categoryname: [""],
      membername: ["", Validators.required],
      description: ["", Validators.required],
      multiplephone: this.fb.array([]),
      multipleemail: this.fb.array([]),
      bulletarray: this.fb.array([]),
      team_img: [''],
      status:[true]
    })
    this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';

  }

  ngOnInit() {
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
    setTimeout(() => {
      this.getData();
    }, 50);

    if (this.activeroute.snapshot.params._id == null) {
      this.addBulletListData('', '');
      this.addphone('');
      this.addemail('');
    }

  }
  inputUntouch(form: any, val: any) {
    form.controls[val].markAsUntouched();
  }
  /**for multiple phone function start here**/

  addphone(a: any) {
    const mphone = this.teamForm.controls.multiplephone as FormArray;
    mphone.push(this.fb.group({
      contactphone: [a]
    }));
  }
  removephone(index: any) {
    const mphone = this.teamForm.controls.multiplephone as FormArray;
    mphone.removeAt(index);

  }
  /**multiple phone end here**/

  /**for multiple emails functions start here**/
  addemail(a: any) {
    const memail = this.teamForm.controls.multipleemail as FormArray;
    memail.push(this.fb.group({
      contactemail: [a]
    }))
  }
  removeemail(index: any) {
    const mphone = this.teamForm.controls.multipleemail as FormArray;
    mphone.removeAt(index);
  }
  /**multiple email functions end here**/

  /*getting all category name function start here*/
  getData() {
    let data: any = {
      "source": this.categorySourceName,
      "condition": {
        "status": 1
      },
    }
    this.apiservice.getData(data).subscribe(response => {
      let result: any = response;
      this.allData = result.res;

    })
  }
  /*getting all category name function end here*/


  /**bullet list function start here**/
  addBulletListData(a: any, b: any) {
    const bulletlist = this.teamForm.controls.bulletarray as FormArray;
    bulletlist.push(this.fb.group({
      bullet_name: [a],
      bullet_desc: [b],
    }));
  }

  deleteBulletListData() {
    const bulletlist = this.teamForm.controls.bulletarray as FormArray;
    bulletlist.removeAt(1);
  }
  trackByFn(index) {
    return index;
  }
  /**bullet list function end here**/
  clear_image() {
    // this.img_var.splice(index, 1);
    // this.flag = false;
    // var imageData:any = [] = this.SingleDataList[0].team_img;
    //  imageData.splice(index,1);
    this.img_flag=false;
  }


  TeamFormSubmit() {

    if(this.imageConfigData.files){
      if (this.imageConfigData.files.length > 1 )  { this.ErrCode = true; return; }
      
      this.teamForm.value.team_img=
        {
          "basepath": this.imageConfigData.files[0].upload.data.basepath + '/' + this.imageConfigData.path + '/',
          "image": this.imageConfigData.files[0].upload.data.data.fileservername,
          "name": this.imageConfigData.files[0].name,
          "type": this.imageConfigData.files[0].type,
          "aspectratio":this.imageConfigData.aspectratio,
          "croppedfiles":this.imageConfigData.croppedfiles
        };


        // for (let loop = 0; loop < this.imageConfigData.files.length; loop++) {
        //   this.images_array =
        //     this.images_array.concat({
        //       "upload_server_id": this.imageConfigData.files[loop].upload.data._id,
        //       "basepath": this.imageConfigData.files[loop].upload.data.basepath + '/' + this.imageConfigData.path + '/',
        //       "fileservername": this.imageConfigData.files[loop].upload.data.data.fileservername,
        //       "name": this.imageConfigData.files[loop].name,
        //       "type": this.imageConfigData.files[loop].type,
        //       "bucketname": this.imageConfigData.bucketName
        //     });
        // }
  
        // this.teamForm.controls['team_img'].patchValue(this.images_array);
      } else {
    }

    let x: any;
    for (x in this.teamForm.controls) {
      this.teamForm.controls[x].markAsTouched();
    }

    if (this.teamForm.valid) {
      if (this.teamForm.value.status)
        this.teamForm.value.status = parseInt("1");
      else
        this.teamForm.value.status = parseInt("0");
    }


    if (this.teamForm.valid) {
      var data: any;
      if (this.activeroute.snapshot.params._id) {     //update part
        // var imageData:any = [] = this.SingleDataList[0].team_img;
        // imageData = imageData.concat(this.images_array);
        
        data = {
          "source": this.sourceName,
          "data": {
            "id": this.params_id,
            "categoryname": this.teamForm.value.categoryname,
            "membername": this.teamForm.value.membername,
            "description": this.teamForm.value.description,
            "multiplephone": this.teamForm.value.multiplephone,
            "multipleemail": this.teamForm.value.multipleemail,
            "bulletarray": this.teamForm.value.bulletarray,
            'team_img': this.teamForm.value.team_img,
            'status':this.teamForm.value.status
          },
          "sourceobj": ["categoryname"]
        };
      } else {
        data = {                                         //add part
          "source": this.sourceName,
          "data": this.teamForm.value,
          "sourceobj": ["categoryname"]
        }
      };




      this.spinnerLoader = true;
      this.apiservice.addData(data).subscribe(response => {
        this.spinnerLoader = false;
        this.formDirective.resetForm();
        setTimeout(() => {
          this.router.navigateByUrl('/' + this.listrouteData);
        }, 100);
      })
    } else {
      alert("error occured");
    }
  }
}
