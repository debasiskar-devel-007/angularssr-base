import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from './api.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'lib-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})


export class ContactusComponent implements OnInit {



  public serverURL: any = '';      // url variable to fetch the add availability form page
  public addEndpointData: any = '';
  public addAvailURL: any = '';
  @Input()     // setting the server url from project

  set serverUrl(serverUrlval: any) {
    this.serverURL = (serverUrlval) || '<no name set>';
    this.serverURL = serverUrlval;
    console.log(this.serverURL);

  }


  @Input()          // setting the server url from project
  set addEndpoint(endpointUrlval: any) {
    this.addEndpointData = (endpointUrlval) || '<no name set>';
    this.addEndpointData = endpointUrlval;
  }

  @Input()          // setting the add form url from project
  set addAvailData(addAvailurlval: any) {
    this.addAvailURL = (addAvailurlval) || '<no name set>';
    this.addAvailURL = addAvailurlval;
    console.log(this.addAvailURL);
  }

  /*Using for google map start ----*/
  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'satellite';
  /*Using for google map end ----*/


  public contactUsForm: FormGroup;
  constructor(public fb: FormBuilder, public apiService: ApiService, public http: HttpClient, public router: Router) {
    this.contactUsForm = this.fb.group({
      locationname: ['', Validators.required],
      message: ['', Validators.required],
      // tslint:disable-next-line:max-line-length
      multipleemails: this.fb.array([this.fb.group({emails: ['', Validators.compose([ Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]})]),
      phones: this.fb.array([this.fb.group({phone1: ['', Validators.required]})]),
      addresses: this.fb.array([this.fb.group({addresses1: ['', Validators.required]})])

    });
   }


  ngOnInit() {
    this.apiService.clearServerUrl();
    setTimeout(() => {
this.apiService.setServerUrl(this.serverURL);
    }, 50);
    console.log(this.serverURL);


    this.apiService.clearaddEndpoint();
    setTimeout(() => {
      this.apiService.setaddEndpoint(this.addEndpointData);
    }, 50);
    console.log(this.addEndpointData);

  }
/* Multiple emails created start hear*/
  get multipleemails() {
    return this.contactUsForm.get('multipleemails') as FormArray;
  }

  /* Add email field start hear */
  addEmail() {
    console.log('okk');

    // tslint:disable-next-line:max-line-length
    this.multipleemails.push(this.fb.group({emails: ['', Validators.compose([ Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]}));
  }
  /* Add email field end hear */

  /* Remove email field start hear */
  removeEmail(index) {
    console.log(index);
    this.multipleemails.removeAt(index);
  }
  /* Remove email field end hear */
  /* Multiple emails created end hear*/


  /* Multiple addresses created start hear*/

  get addresses() {
    return this.contactUsForm.get('addresses') as FormArray;
  }
  /* Add addresses field start hear */
  addAddress() {
    console.log('okk');
    this.addresses.push(this.fb.group({addresses1: ['', Validators.required]}));
  }
  /* Add addresses field end hear */

  /* Remove addresses field start hear */
  removeAddress(index) {
    console.log(index);
    this.addresses.removeAt(index);
  }
  /* Remove addresses field end hear */
  /* Multiple addresses created end hear*/


  /* Multiple phones created start hear*/
 get phones() {
    return this.contactUsForm.get('phones') as FormArray;
  }

  /* Add addresses field start hear */

  addPhone() {
    console.log('okk');
    this.phones.push(this.fb.group({phone1: ['', Validators.required]}));
  }

  /* Add phones field end hear */

  /* Remove phones field start hear */
  removePhone(index) {
    console.log(index);
    this.phones.removeAt(index);
  }
  /* Remove phones field end hear */
  /* Multiple phones created end hear*/



  // createEmail(defaultVal): FormGroup {
  //
  //
  //     return this.fb.group({name: [defaultVal]});
  //     // return this.fb.group({name: [defaultVal, Validators.required]});
  // }


  // mapEnableChecking() {
  //   console.log(this.mapEnable);
  // }
  // addressT(val: any) {
  //   console.log(val);
  //   if (val === 'multiple') {
  //     this.multiple = true;
  //     this.single = false;
  //   } else {
  //     this.single = true;
  //     this.multiple = false;
  //
  //   }
  // }
  contactUsFormSubmit() {
    let x: any;
    for (x in this.contactUsForm.controls) {
      this.contactUsForm.controls[x].markAsTouched();

    }
    console.log(this.contactUsForm.value);

    if (this.contactUsForm.valid) {
      console.log('ok');

      console.log(this.contactUsForm.value);
      let data: any = this.contactUsForm.value;
      this.apiService.addData(data).subscribe( res => {
        let result: any;
        result = res;
        if (result.status === 'success') {
          console.log(result);
          // this.contactUsForm.reset();
          setTimeout(() => {
            for (x in this.contactUsForm.controls) {
              console.log('ok' + x);
              this.contactUsForm.reset();
              this.contactUsForm.controls[x].markAsUntouched();
            }
          }, 1000);
        }
      });

    }

  }


  inputblur(val: any) {
    console.log('ok----');
    this.contactUsForm.controls[val].markAsUntouched();
  }



  goToListing() {
    // console.log('______');

    this.router.navigateByUrl('/' + this.addAvailURL);
  }

}

