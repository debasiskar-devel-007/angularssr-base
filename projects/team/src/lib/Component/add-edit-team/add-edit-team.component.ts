import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder, FormControl,FormArray, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
//import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../../Service/upload.service';
@Component({
  selector: 'lib-add-edit-team',
  templateUrl: './add-edit-team.component.html',
  styleUrls: ['./add-edit-team.component.css']
})
export class AddEditTeamComponent implements OnInit {
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
    public _http:HttpClient,private uploadService: UploadService) { 
      this.activeroute.params.subscribe(params=>{
        this.params_id=params['_id'];
        
      })
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
  }
  inputUntouch(form:any,val:any){
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

}
