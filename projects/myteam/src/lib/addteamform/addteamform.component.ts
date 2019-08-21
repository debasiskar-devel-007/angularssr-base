import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder, FormControl,FormArray, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../upload.service';
@Component({
  selector: 'lib-addteamform',
  templateUrl: './addteamform.component.html',
  styleUrls: ['./addteamform.component.css']
})
export class AddteamformComponent implements OnInit {
  public teamForm: FormGroup;
  public params_id:any;
  public getDataEndpointData:any;
  public addEndpointData:any;
  public serverUrlData:any;
  public editarray:any=[];
/******Upload*********/
  error: string;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };
/******End*********/
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

  constructor(public fb: FormBuilder,public activeroute: ActivatedRoute,
    public apiservice:ApiService,public _http:HttpClient,private uploadService: UploadService) { 
    this.activeroute.params.subscribe(params=>{
      this.params_id=params['_id'];
      
    })
    this.setEditvalue();
    

    

  }
  
  ngOnInit() {
    this.teamForm=this.fb.group({
      upload:               [""],
      role:                 ["", Validators.required],
      description:          ["", [Validators.required, Validators.minLength(1)]],
      contactphone:         ["", Validators.required],
      mutiplephone:  this.fb.array([this.fb.group({phone:["",Validators.required]})]),
      multipleemail: this.fb.array([this.fb.group({email:["",Validators.required]})]),
      contactemail:         ["", [Validators.email,Validators.maxLength(50)]]
    })
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

    
  }
  inputUntouch(form:any,val:any){
     console.log('on blur .....');
     console.log(form.controls[val].value);
     form.controls[val].markAsUntouched();
 }
 get mutiplephone() {
  return this.teamForm.get('mutiplephone') as FormArray;
 }
 addphone(){
  this.mutiplephone.push(this.fb.group({contactphone: ['', Validators.required]}))
 }

 removephone(index:any){
   this.mutiplephone.removeAt(index);

 }
 get multipleemail(){
   return this.teamForm.get('multipleemail') as FormArray;
 }

 addemail(){
   this.multipleemail.push(this.fb.group({contactemail:["",Validators.required]}))

 }

 removeemail(index:any){
  this.multipleemail.removeAt(index);
 }

 setEditvalue(){
  let data:any;
  data={
    "source":"demoteam",
    "condition":{
      "_id":this.params_id
    }
  }
  this.apiservice.getData(data).subscribe(response=>{
    let result:any;
    result=response;
    let tempvar=result.res;
    this.editarray=result.res;

    this.teamForm.controls['role'].setValue(tempvar[0].role);
    this.teamForm.controls['description'].setValue(tempvar[0].description);
    this.teamForm.controls['contactphone'].setValue(tempvar[0].contactphone);
    this.teamForm.controls['contactemail'].setValue(tempvar[0].contactemail);
  },error=>{
    console.log("Ooops");
  })



}

/***********************file upload*************************/
onFileChange(event) {
  if (event.target.files.length > 0) {
    for(let val:any=0;val<=event.target.files.length;val++){

      const file = event.target.files[0];
      console.log(file);
      this.teamForm.get('upload').setValue(file);
      
    }
    
  }
}

onSubmit() {
  console.log('++++++++++++++++++++++++++++++++++++++++', this.teamForm.value);

  const formData = new FormData();
  formData.append('file', this.teamForm.get('upload').value);
  // formData.append('email', this.teamForm.get('contactemail').value);

  this.uploadService.upload(formData, this.userId).subscribe(
    (res) => this.uploadResponse = res,
    (err) => this.error = err
  );
}
/********************upload end here*****************************/
}
