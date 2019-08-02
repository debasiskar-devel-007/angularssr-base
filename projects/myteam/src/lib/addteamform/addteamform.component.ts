import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormArray, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'lib-addteamform',
  templateUrl: './addteamform.component.html',
  styleUrls: ['./addteamform.component.css']
})
export class AddteamformComponent implements OnInit {
  public teamForm: FormGroup;
  // public mutiplephone:any=[];
  // public multipleemail:any=[];
  constructor(public fb: FormBuilder,) { 

  }
  
  ngOnInit() {
    this.teamForm=this.fb.group({
      category:      ["", Validators.required],
      description:   ["", [Validators.required, Validators.minLength(1)]],
      phone:         ["", Validators.required],
      mutiplephone:  this.fb.array([this.fb.group({phone:["",Validators.required]})]),
      multipleemail: this.fb.array([this.fb.group({email:["",Validators.required]})]),
      email:         ["", [Validators.email,Validators.maxLength(50)]]
    })

    
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
  this.mutiplephone.push(this.fb.group({phone: ['', Validators.required]}))
 }

 removephone(index:any){
   this.mutiplephone.removeAt(index);

 }
 get multipleemail(){
   return this.teamForm.get('multipleemail') as FormArray;
 }

 addemail(){
   this.multipleemail.push(this.fb.group({email:["",Validators.required]}))

 }

 removeemail(index:any){
  this.multipleemail.removeAt(index);
 }

}
