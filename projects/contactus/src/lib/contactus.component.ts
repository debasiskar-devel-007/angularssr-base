import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'lib-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})


export class ContactusComponent implements OnInit {





  public serverURL: any = '';      // url variable to fetch the add availability form page
  public addEndpointData: any = '';
  public routeingUrlValue: any = '';
  @Input()     // setting the server url from project

  set serverUrl(serverUrlval: any) {
    this.serverURL = (serverUrlval) || '<no name set>';
    this.serverURL = serverUrlval;
    console.log(this.serverURL);

  }


  @Input()          // setting the url addEndpoint from project
  set addEndpoint(endpointUrlval: any) {
    this.addEndpointData = (endpointUrlval) || '<no name set>';
    this.addEndpointData = endpointUrlval;
  }

  @Input()          // setting the navigate By Url from project
  set routeingUrl(routeingUrlval: any) {
    this.routeingUrlValue = (routeingUrlval) || '<no name set>';
    this.routeingUrlValue = routeingUrlval;
    console.log(this.routeingUrlValue);
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
      multipleemails: this.fb.array([this.fb.group({ emails: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] })]),
      phones: this.fb.array([this.fb.group({ phone: ['', Validators.required] })]),
      addresses: this.fb.array([this.fb.group({ address: ['', Validators.required] })])

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
  /* Multiple emails created start here*/
  get multipleemails() {
    return this.contactUsForm.get('multipleemails') as FormArray;
  }

  /* Add email field start here */
  addEmail() {
    console.log('okk');

    // tslint:disable-next-line:max-line-length
    this.multipleemails.push(this.fb.group({ emails: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])] }));
  }
  /* Add email field end here */

  /* Remove email field start here */
  removeEmail(index) {
    console.log(index);
    this.multipleemails.removeAt(index);
  }
  /* Remove email field end here */
  /* Multiple emails created end here*/


  /* Multiple addresses created start here*/

  get addresses() {
    return this.contactUsForm.get('addresses') as FormArray;
  }
  /* Add addresses field start here */
  addAddress() {
    console.log('okk');
    this.addresses.push(this.fb.group({ address: ['', Validators.required] }));
  }
  /* Add addresses field end here */

  /* Remove addresses field start here */
  removeAddress(index) {
    console.log(index);
    this.addresses.removeAt(index);
  }
  /* Remove addresses field end here */
  /* Multiple addresses created end here*/


  /* Multiple phones created start here*/
  get phones() {
    return this.contactUsForm.get('phones') as FormArray;
  }

  /* Add addresses field start here */

  addPhone() {
    console.log('okk');
    this.phones.push(this.fb.group({ phone: ['', Validators.required] }));
  }

  /* Add phones field end here */

  /* Remove phones field start here */
  removePhone(index) {
    console.log(index);
    this.phones.removeAt(index);
  }
  /* Remove phones field end here */
  /* Multiple phones created end here*/


  // contactUsForm submit function start here


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
      this.apiService.addData(data).subscribe(res => {
        let result: any;
        result = res;
        if (result.status === 'success') {
          console.log(result);
          this.contactUsForm.reset();
        }
      });

    }


    //     var res: any;
    // for (const x in this.contactUsForm.value.phones){
    //   this.contactUsForm.value.phones.hasOwnProperty(x) && res.push(this.contactUsForm.value.phones[x])
    // }
    // console.log('okkk'+res);

    // var result = new Array();
    // for (var item in this.contactUsForm.value.addresses) {
    //   if (this.contactUsForm.value.addresses.hasOwnProperty(item)) {
    //     var key: any = item.toString();
    //     result.push({key: this.contactUsForm.value.addresses[item]});
    //   }
    // }
    // console.log(result);


  }

  // contactUsForm submit function end here



  inputUntouched(val: any) {
    console.log('ok----');
    this.contactUsForm.controls[val].markAsUntouched();
  }



  goToListing() {
    this.router.navigateByUrl('/' + this.routeingUrlValue);
  }

}

