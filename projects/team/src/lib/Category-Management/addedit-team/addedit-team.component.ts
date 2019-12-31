import { Component, OnInit,Input, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../Service/api.service';
@Component({
  selector: 'lib-addedit-team',
  templateUrl: './addedit-team.component.html',
  styleUrls: ['./addedit-team.component.css']
})
export class AddeditTeamComponent implements OnInit {
  public CategoryManagementTeamForm: FormGroup;
  public DataListViaResolve: any = [];
  public allData: any = [];
  public SingledataEdit: any = [];
  public getDataEndpointData: any;
  public addEndpointData: any;
  public getSourceName: any;
  public getCategorySourceName : any;
  public roleSourceName : any;
  public serverUrlData: any;
  public spinnerLoader: boolean;
  public listingPageUrl: any = '';
  public params_id: any;
  public ButtonText: any = "Submit";
  public allCategoryName : any=[];
  public editorconfig:any={};
  @ViewChild(FormGroupDirective, { static: false }) formDirective: FormGroupDirective;

  @Input()          //getting all data list via resolve call from app
  set TeamData(val: any) {
    this.DataListViaResolve = (val) || '<no name set>';
    this.DataListViaResolve = val;
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
  @Input()
  set SourceName(sourceName: any) {
    this.getSourceName = (sourceName) || '<no name set>';
    this.getSourceName = sourceName;
  }
  @Input()
  set RoleSourceName (roleSourceName : any) {
     this.roleSourceName = (roleSourceName) || '<no name set>' ; 
     this.roleSourceName = roleSourceName ; 
     console.log("role ", this.roleSourceName);
  }

  @Input()
  set singleEditData(val: any) {
    this.SingledataEdit = (val) || '<no name set>';
    this.SingledataEdit = val;
    if (this.activeroute.snapshot.params._id) {
      this.ButtonText = "Update";
      this.params_id = this.activeroute.snapshot.params._id;
      this.CategoryManagementTeamForm.controls['categoryName'].patchValue(val[0].categoryName);
      this.CategoryManagementTeamForm.controls['description'].patchValue(val[0].description);
      this.CategoryManagementTeamForm.controls['status'].patchValue(val[0].status);

      //this.CategoryManagementTeamForm.controls['role'].patchValue(val[0].role);
      // for (const i in this.SingledataEdit[0].role) {

      //     this.CategoryManagementTeamForm.controls['role'].patchValue(this.SingledataEdit[i].role)
      // }
    }
  }
  @Input()          //setting the server url from project
  set addEndpoint(endpointUrlval: any) {
    this.addEndpointData = (endpointUrlval) || '<no name set>';
    this.addEndpointData = endpointUrlval;
  }
  @Input()          //setting the url of listing page from app
  set ListPageRoute(Url: any) {
    this.listingPageUrl = (Url) || '<no name set>';
    this.listingPageUrl = Url;

  }

  constructor(public fb: FormBuilder, public activeroute: ActivatedRoute,
    public _http: HttpClient, public router: Router, public apiService: ApiService) {

    this.CategoryManagementTeamForm = this.fb.group({
      categoryName: ['', Validators.required],
      description: ['', Validators.required],
      status: [true,],
      parent_category : [''],
      role: ['']
    })
    this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
  }


  ngOnInit() {
    this.apiService.clearServerUrl();
    setTimeout(() => {
      this.apiService.setServerUrl(this.serverUrlData);
    }, 50);
    this.apiService.clearaddEndpoint();
    setTimeout(() => {
      this.apiService.setaddEndpoint(this.addEndpointData);
    }, 50);
    this.apiService.cleargetdataEndpoint();
    setTimeout(() => {
      this.apiService.setgetdataEndpoint(this.getDataEndpointData);
    }, 50);
    setTimeout(() => {
      this.getAllCategoryName();
    }, 50);
    setTimeout(() => {
      this.getAllRoleSlugData();
    }, 50);
  }
  inputUntouch(form: any, val: any) {
    form.controls[val].markAsUntouched();
  }
  CategoryManagementTeamFormSubmit() {
    if (this.CategoryManagementTeamForm.valid) {
      let x: any;
      for (x in this.CategoryManagementTeamForm.controls) {
        this.CategoryManagementTeamForm.controls[x].markAsTouched();
      }
      if (this.CategoryManagementTeamForm.valid) {
        if (this.CategoryManagementTeamForm.value.status)
          this.CategoryManagementTeamForm.value.status = parseInt("1");
        else
          this.CategoryManagementTeamForm.value.status = parseInt("0");
      }
      var data: any;
      if (this.activeroute.snapshot.params._id) {

        data = {
          "source": this.getSourceName,
          "data": {
            "id": this.params_id,
            'categoryName': this.CategoryManagementTeamForm.value.categoryName,
            'description': this.CategoryManagementTeamForm.value.description,
            'status': this.CategoryManagementTeamForm.value.status,
            'role': this.CategoryManagementTeamForm.value.role
          },
          "sourceobj": ["parent_category"]
        }

      } else {
        data = {
          "source":this.getSourceName,
          "data": this.CategoryManagementTeamForm.value,
          "sourceobj": ["parent_category"]
        }
      }

      this.spinnerLoader = true;
      this.apiService.addData(data).subscribe(response => {
        this.spinnerLoader = false;
        this.formDirective.resetForm();
        setTimeout(() => {
          this.router.navigateByUrl('/' + this.listingPageUrl);
        }, 100);
      })
    }
  }
  getAllRoleSlugData() {
    let data: any = {
      "source": this.roleSourceName
    }
    this.apiService.getData(data).subscribe(response => {
      let result: any = response;
      this.allData = result.res;
    })
  }

  getAllCategoryName(){
    let data : any = {
      "source" : this.getSourceName,
      "condition": {
        "status": 1
      },
    }
    this.apiService.getData(data).subscribe(response => {
      let result :any=response;
      this.allCategoryName = result.res;
    })
  }

 
}