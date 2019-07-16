import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MetaService } from '@ngx-meta/core';
declare var $: any;
var arr:any;

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public myform : FormGroup;
  public data: any;
  public stateslist: any;

  constructor(public formbuilder: FormBuilder, public http: HttpClient, public readonly metaService:MetaService) {
    
    this.metaService.setTitle("Universal Tech Associates: Contact Us");
    this.metaService.setTag('description',"Contact Us: Universal Tech Associates is a consortium of high-power global partnerships working with emerging technologies in the current global marketplace.");
    this.metaService.setTag('og:description',"Universal Tech Associates is a consortium of high-power global partnerships working with emerging technologies in the current global marketplace.");
    this.metaService.setTag('og:title',"Universal Tech Associates");
    this.metaService.setTag('og:image',"http://www.universaltechassociates.com/assets/images/logo.png");
    this.metaService.setTag('og:type',"website"); 

    this.getState();

    this.myform = this.formbuilder.group({

      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required],
      telephone: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9\+\-\ ]/)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      message: ['', Validators.required],
    })
  }

  ngOnInit() {
  }
  getState() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    var result = this.http.get('assets/data/state.json').subscribe(res =>{
      this.stateslist = res;
      console.log('stateslist');
      console.log(this.stateslist);

    });
    return result;
  }

  doSubmit(){
    console.log('ok');
    this.data = this.myform.value;
    for (let i in this.myform.controls) {
      this.myform.controls[i].markAsTouched();
    }
    if(this.myform.valid) {
      let link: any;
      link = 'http://192.169.196.208:7061/utacontactmail';
      let data: any = this.myform.value;
      this.http.post(link, data).subscribe(response =>{
        let result: any;
        result = response;
        if(result.status == 'success'){
          console.log(result);
          this.myform.reset();
          //   this.dialog.open(successmodal, {
          // data: {
          //   data: 'Successfully submitted'
          //       }
          //     });
        }
      })
    }

  }

  inputUntouch(form: any, val: any) {
    console.log('on blur .....');
    form.controls[val].markAsUntouched();
  }

}
