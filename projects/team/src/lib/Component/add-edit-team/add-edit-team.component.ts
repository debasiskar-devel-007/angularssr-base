import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../Service/api.service';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../../Service/upload.service';
@Component({
  selector: 'lib-add-edit-team',
  templateUrl: './add-edit-team.component.html',
  styleUrls: ['./add-edit-team.component.css']
})
export class AddEditTeamComponent implements OnInit {
  public teamData: any = [];
  public teamForm: FormGroup;
  public params_id: any;
  public getDataEndpointData: any;
  public addEndpointData: any;
  public serverUrlData: any;
  public listrouteData = "";
  public editarray: any = [];
  public spinnerLoader: boolean;
  public imageConfigData: any = '';
  public SingleDataList:any=[];


  /* Config Upload file lib */
  @Input()
  set imageUpload(getConfig: any) {
    this.imageConfigData = getConfig;
    console.log(this.imageConfigData);
  }
  @Input()
  set singleData(val:any){
     this.SingleDataList= (val) || '<no name set>';
     this.SingleDataList = val;
     
     if(this.activeroute.snapshot.params._id){
       this.params_id=this.activeroute.snapshot.params._id;
      // this.teamForm.controls['categoryname'].patchValue(val[0].categoryname);
       //this.teamForm.controls['bulletarray'].setValue(val[0].bulletarray);
      // this.teamForm.controls['description'].patchValue(val[0].description);
      // this.teamForm.controls['membername'].patchValue(val[0].membername);
      // this.teamForm.controls['multipleemail'].patchValue(val[0].multipleemail);
      // this.teamForm.controls['multiplephone'].patchValue(val[0].multiplephone);
     }
  }

  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;
    
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
  @Input()
  set DataList(val: any) {
    this.teamData = (val) || '<no name set>'
    this.teamData = val;
  }

  constructor(public fb: FormBuilder, public activeroute: ActivatedRoute,
    public _http: HttpClient, private uploadService: UploadService,
    public apiservice: ApiService, public router: Router) {
    // this.activeroute.params.subscribe(params => {
    //   this.params_id = params['_id'];

    // })
    this.teamForm = this.fb.group({
      //upload: [""],
      categoryname: ["", Validators.required],
      membername: ["", Validators.required],
      description: ["", Validators.required],
      multiplephone: this.fb.array([this.fb.group({ contactphone: ["", Validators.required] })]),
      multipleemail: this.fb.array([this.fb.group({
        contactemail:
          ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
      })]),
      bulletarray: this.fb.array([]),

    })
  }

  ngOnInit() {
    // this.teamForm = this.fb.group({
    //   //upload: [""],
    //   categoryname: ["", Validators.required],
    //   membername: ["", Validators.required],
    //   description: ["", Validators.required],
    //   multiplephone: this.fb.array([this.fb.group({ contactphone: ["", Validators.required] })]),
    //   multipleemail: this.fb.array([this.fb.group({
    //     contactemail:
    //       ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
    //   })]),
    //   bulletarray: this.fb.array([]),

    // })
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
    this.addBulletListData();
  }
  inputUntouch(form: any, val: any) {
    form.controls[val].markAsUntouched();
  }
  /**for multiple phone function start here**/
  get multiplephone() {
    return this.teamForm.get('multiplephone') as FormArray;
  }
  addphone() {
    this.multiplephone.push(this.fb.group({ contactphone: ['', Validators.required] }))
  }

  removephone(index: any) {
    this.multiplephone.removeAt(index);

  }
  /**multiple phone end here**/

  /**for multiple emails functions start here**/
  get multipleemail() {
    return this.teamForm.get('multipleemail') as FormArray;
  }

  addemail() {
    this.multipleemail.push(this.fb.group({ contactemail: ["", Validators.required] }))

  }

  removeemail(index: any) {
    this.multipleemail.removeAt(index);
  }
  /**multiple email functions end here**/

  /**resetting the form**/
  ResetForm() {
    this.teamForm.reset();
  }

  /**bullet list function start here**/
  addBulletListData() {
    const bulletlist = this.teamForm.controls.bulletarray as FormArray;
    bulletlist.push(this.fb.group({
      bullet_name: ['',],
      bullet_desc: ['',],
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

  TeamFormSubmit() {

    let x: any;
    for (x in this.teamForm.controls) {
      this.teamForm.controls[x].markAsTouched();
    }
    if (this.teamForm.valid) {
      var data: any;
      data = {                                         //add part
        "source": "Team_management",
        "data": this.teamForm.value,
        "sourceobj": ["categoryname"]
      }
      this.spinnerLoader = true;
      this.apiservice.addData(data).subscribe(response => {
        this.spinnerLoader = false;
        this.ResetForm();
        setTimeout(() => {
          this.router.navigateByUrl('/' + this.listrouteData);
        }, 100);
      })
    }
  }
}
