import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
@Component({
  selector: 'lib-add-availability-form',
  templateUrl: './add-availability-form.component.html',
  styleUrls: ['./add-availability-form.component.css']
  // styleUrls: ['style.css']
})
export class AddAvailabilityFormComponent implements OnInit {
  // @ViewChild('form', { static: false }) form: { resetForm: () => void; };
  public addAvailiabiltyForm: FormGroup;
  timezone_arr: any = [];
  public exportTime1: any = { hour: 12, minute: 0, meriden: 'AM', format: 12 };
  public exportTime2: any = { hour: 12, minute: 0, meriden: 'AM', format: 12 };
  public eventHour1: any;
  public eventHour2: any;
  public serverUrlData: any;
  public endpointUrlData: any;
  public weekdaysErrorText: boolean = false;
  // set input of server url and endpoint url
  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;

  }
  constructor(public fb: FormBuilder, public _http: HttpClient, public apiservice: ApiService) {
    // time zone lists
    this.timezone_arr = [
      { name: 'Alaska Standard Time', value: '-08:00|America/Anchorage' },
      { name: 'Pacific Standard Time', value: '-07:00|America/Los_Angeles' },
      { name: 'Mountain Standard Time(GMT-06:00)', value: '-06:00|America/Denver' },
      { name: 'Mountain Standard Time(GMT-07:00) (no DST)', value: '-07:00|America/Phoenix' },
      { name: 'Central Standard Time', value: '-05:00|America/Chicago' },
      { name: 'Eastern Standard Time', value: '-04:00|America/New_York' },
      { name: 'Hawaii Standard Time', value: '-10:00|Pacific/Honolulu' },
    ];
    //declaring the server urls in api.service


  }

  ngOnInit() {
    // this.addAvailiabiltyForm = new FormGroup({
    //   event_title: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    //   // dateOfBirth: new FormControl(new Date()),
    //   // address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    // });
    this.addAvailiabiltyForm = this.fb.group({
      event_title: ["", Validators.required],
      start_date: [new Date()],
      end_date: [new Date()],
      Fri: [false],
      Mon: [false],
      Sat: [false],
      Sun: [false],
      Tues: [false],
      Thurs: [false],
      Wed: [false],
      timespan: ["", Validators.required],
      timezone: ["", Validators.required],
      event_details: ["", Validators.required],
      start_time: [null],
      end_time: [null],
      status: [1],

    });
    console.log(this.serverUrlData);
    this.apiservice.clearServerUrl();
    setTimeout(() => {
      this.apiservice.setServerUrl(this.serverUrlData);
    }, 50);
    // this.apiservice.serverUrl = this.serverUrlData;
    // this.apiservice.endpointUrl = this.endpointUrlData;
  }
  inputUntouch(form: any, val: any) {
    console.log('hit');
    form.controls[val].markAsUntouched();
  }
  checkboxErrorChange(day: any) {
    if (this.addAvailiabiltyForm.controls[day].value == true) {
      this.weekdaysErrorText = false;
    }
  }
  onChangeHour1(event) {
    // console.log('event', event);
    // console.log(this.exportTime1);
    if (typeof (event.hour) == 'undefined') {
      this.eventHour1 = false;
    } else {
      this.exportTime1 = {};
      this.eventHour1 = true;
      this.exportTime1 = event;
    }


    console.log(this.eventHour1);
  }
  onChangeHour2(event) {

    // console.log('event', event);
    console.log(this.exportTime2);
    if (typeof (event.hour) == 'undefined') {
      this.eventHour2 = false;
    } else {
      this.exportTime2 = {};
      this.exportTime2 = event;
      this.eventHour2 = true;
    }

    console.log(this.eventHour2);
    console.log(this.exportTime2);
  }
  createEvent(value: any) {
    this.weekdaysErrorText = false;
    // this.addAvailiabiltyForm.markAllAsTouched;
    let x: any;
    for (x in this.addAvailiabiltyForm.controls) {
      this.addAvailiabiltyForm.controls[x].markAsTouched();
    }
    // console.log(this.addAvailiabiltyForm.controls['timespan'].touched );
    // console.log(this.addAvailiabiltyForm.controls['timespan'].errors);
    // console.log(this.addAvailiabiltyForm.controls['timespan'].errors.required);
    if (this.eventHour1 == false) {
      this.addAvailiabiltyForm.controls['start_time'].setValue(false);
    } else {
      this.addAvailiabiltyForm.controls['start_time'].setValue(this.exportTime1.hour + ':' + this.exportTime1.minute);
    }
    if (this.eventHour2 == false) {
      this.addAvailiabiltyForm.controls['end_time'].setValue(false);
    } else {
      this.addAvailiabiltyForm.controls['end_time'].setValue(this.exportTime2.hour + ':' + this.exportTime2.minute);
    }
    if (!this.addAvailiabiltyForm.controls['Sun'].value && !this.addAvailiabiltyForm.controls['Mon'].value && !this.addAvailiabiltyForm.controls['Tues'].value && !this.addAvailiabiltyForm.controls['Wed'].value && !this.addAvailiabiltyForm.controls['Thurs'].value && !this.addAvailiabiltyForm.controls['Fri'].value && !this.addAvailiabiltyForm.controls['Sat'].value) {
      this.weekdaysErrorText = true;
    } else {
      this.weekdaysErrorText = false;
    }

    // console.log(this.addAvailiabiltyForm.controls['start_date'].value);
    console.log(this.addAvailiabiltyForm.valid);
    if (this.addAvailiabiltyForm.valid) {
      let data: any = {};
      data = { "source": "events", "data": this.addAvailiabiltyForm.value };
      this.apiservice.addData(data).subscribe(res => {
        let resp: any;
        resp = res;
        console.log('result in democall');
        console.log(resp);
        if (resp.status == 'success') {
          this.resetForm();
          alert('Success!');
        }
      });



      // console.log(value);
      // let link = "http://166.62.39.137:5009/addorupdatedata";

      // this._http.post(link, data)
      //   .subscribe(res => {
      //     let result: any;
      //     result = res;
      //     console.log("result of create event");
      //     console.log(result);
      //   });
    }

  }
  resetForm() {

    // for (let x in this.addAvailiabiltyForm.controls) {
    //   // this.addAvailiabiltyForm.controls[x].markAsUntouched;
    //   this.inputUntouch(this.addAvailiabiltyForm, x);
    // }
    this.weekdaysErrorText = false;
    this.addAvailiabiltyForm.reset();
    // this.form.resetForm();
    this.addAvailiabiltyForm.markAsPristine();
    this.addAvailiabiltyForm.markAsUntouched();

  }
  demoApiserviceCall() {
    let data: any = {};
    let data2: any = {};
    let data3: any = {};
    let data4: any = {};
    let data5: any = {};
    let data6: any = {};
    data = {
      "source": "events",
      "data": {
        "id": "5d4292f3f2b9d895194cb496",        //for edit data endpoint call
        "Sun": false,
        "Mon": true,
        "Tues": true,
        "Wed": false,
        "Thurs": false,
        "Fri": true,
        "Sat": false,
        "end_date": "Wed Jul 31 2019 13:25:58 GMT+0530 (India Standard Time)",
        "end_time": "2:45",
        "event_details": "Event details 2",
        "event_title": "Event 2",
        "start_date": "Wed Jul 31 2019 13:25:58 GMT+0530 (India Standard Time)",
        "start_time": "8:10",
        "timespan": "30",
        "timezone": "-08:00|America/Anchorage"
      }
    };
    data2 = {
      "source": "events"
    };

    data3 = {
      "source": "events",
      "id":"5d4292f3f2b9d895194cb496"
    };
    data4 = {
      "source":"events",
      "ids":["5d4164aaf2b9d895194cb492",
      "5d416ab9f2b9d895194cb495"]
    };
    data5 = {
      "source": "events",
      "data": {
          "id": "5d42b2a4d6e714834032bdbe",
          "status": 0
      }
  };
data6 ={
  "source": "events",
  "data": {
      "ids": [
          "5d43d1ef130477c404332914",
          "5d43ce38130477c404332913"
      ],
      "val":0
  }
};
    // this.apiservice.addData(data).subscribe(res => {
    //   console.log(res);
    //   let resp :any;
    //   resp = res;
    //   console.log('result in addOrEditData');
    //   console.log(resp);
    // });
    // this.apiservice.getData(data2).subscribe(res => {
    //   console.log(res);
    //   let resp: any;
    //   resp = res;
    //   console.log('result in getDataFunction');
    //   console.log(resp);
    // });
    // this.apiservice.deleteSingleData(data3).subscribe(res => {
    //   console.log(res);
    //   let resp: any;
    //   resp = res;
    //   console.log('result in deleteSingleData');
    //   console.log(resp);
    // });
  //   this.apiservice.deleteMultipleData(data4).subscribe(res => {
  //     console.log(res);
  //     let resp: any;
  //     resp = res;
  //     console.log('result in deleteSingleData');
  //     console.log(resp);
  //   });
  // }
  this.apiservice.UpdateStatusForMultipleData(data5).subscribe(res => {
    console.log(res);
    let resp: any;
    resp = res;
    console.log('result in deleteSingleData');
    console.log(resp);
  });
}
  
  



}
