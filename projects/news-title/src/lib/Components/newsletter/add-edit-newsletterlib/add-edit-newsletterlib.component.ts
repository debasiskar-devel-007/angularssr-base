import { Component, OnInit, Input, Inject } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { NewsTitleService } from '../../../news-title.service';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  msg: string;
  share_group: string;
  automatic_newsletter: string;
  reply_address: string;
  senders_address: string;
}

import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'lib-add-edit-newsletterlib',
  templateUrl: './add-edit-newsletterlib.component.html',
  styleUrls: ['./add-edit-newsletterlib.component.css'],
})
export class AddEditNewsletterlibComponent implements OnInit {


  // =================declaration==================
  public header_name: any = "Newsletter"
  public buttonText: any = "SAVE";
  public group_name_array: any = [];
  public sender_name_array: any = [];
  public configData: any;
  public time: any;
  public cookieValue: any;
  public newsForm: FormGroup;
  public frequency_flag: boolean = false;
  public days_array: any = [];
  // public editorconfig: any = {};
  days_json: any;
  public message: string;
  public tmp_date: any;
  public false_count: number;
  public dialogRef: any;
  public share_with_group: any;
  public automatic_newsletter_to: any;
  public reply_address_to: any
  public senders_address_to: any;


  // ==============================================

  /**ckeditor start here*/
  // public Editor = ClassicEditor;  //for ckeditor
  // editorConfig = {
  //   placeholder: 'Content:',
  // };
  // public model = {
  //   editorData: ''
  // };
  /**ckeditor end here*/


  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }



  constructor(private atp: AmazingTimePickerService, private newsService: NewsTitleService,
    public datepipe: DatePipe, public cookieService: CookieService, private formBuilder: FormBuilder,
    public router: Router, private snackBar: MatSnackBar, public dialog: MatDialog) {




    // this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';

  }

  // unix_timestamp(t) {
  //   var d = new Date(t * 1000),	// Convert the passed timestamp to milliseconds
  //     yyyy = d.getFullYear(),
  //     mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
  //     dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.	
  //     time;

  //   // ie: 2013-02-18, 8:35 AM	
  //   time = mm + "/" + dd + "/" + yyyy;

  //   return time;
  // }

  ngOnInit() {

    this.weekdays();

    if (this.configData.action == 'add')
      this.time = this.datepipe.transform(new Date(), 'H:mm');



    //Calling the group name
    this.getGroupName();

    //Get sender's getGroupName
    this.getSenderAddress();

    //Getting the cookie value
    this.cookieValue = this.cookieService.getAll();

    //  calling the form generation 
    this.generateForm();

    this.newsForm.value.cookiemail = this.cookieService.get('get_email');

    /*Switch case*/
    switch (this.configData.action) {
      case 'add':
        /* Button text */
        this.buttonText = "SUBMIT";
        this.header_name = "Add a Newsletter";
        this.message = "Newsletter Added Successfully!!!";

        break;
      case 'edit':
        this.days_json = null;
        /* Button text */
        this.buttonText = "UPDATE";
        this.time = "";
        this.message = "Newsletter Information Updated!!!";
        if (this.configData.defaultData.newsfrequency == "daily")
          this.frequency_flag = false;
        else
          this.frequency_flag = true;


        setTimeout(() => {

          this.setDefaultValue(this.configData.defaultData);
        }, 1000);

        if (this.configData.defaultData.days_of_weeks != null)
          this.frequency_flag = true;


        setTimeout(() => {
          this.days_json = this.configData.defaultData.days_of_weeks;
        }, 1000);

        break;
    }



  }



  weekdays() {

    this.days_json = [
      {
        "day": "Sunday",
        "value": 1,
        isSelected: false
      },
      {
        "day": "Monday",
        "value": 2,
        isSelected: false
      },
      {
        "day": "Tuesday",
        "value": 3,
        isSelected: false
      },
      {
        "day": "Wednesday",
        "value": 4,
        isSelected: false
      },
      {
        "day": "Thursday",
        "value": 5,
        isSelected: true
      },
      {
        "day": "Friday",
        "value": 6,
        isSelected: false
      },
      {
        "day": "Saturday",
        "value": 7,
        isSelected: false
      }
    ];
  }




  /** mat snackbar **/
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  /** opening up the time picker **/
  open() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
    });
  }


  /** open Modal **/
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(PREVIEW, {
      width: '1000px',
      data: {
        msg: x,
        share_group: this.share_with_group,
        automatic_newsletter: this.automatic_newsletter_to,
        senders_address: this.senders_address_to,
        reply_address: this.reply_address_to
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
    });
  }


  /** preview all **/
  preview_all() {
    this.openDialog(Object.values(this.newsForm.value));
  }


  /*getting the group name*/
  getGroupName() {
    var data: any = { 'source': this.configData.group_table };
    this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe(response => {
      let result: any;
      result = response;
      this.group_name_array = result.res;
    });
  }

  /*getting the sender's email*/
  getSenderAddress() {
    var data: any = { 'source': this.configData.sender_table };
    this.newsService.getData(this.configData.endpoint2 + 'datalist', data).subscribe(response => {
      let result: any;
      result = response;
      this.sender_name_array = result.res;
    });
  }


  //generate form
  generateForm() {
    this.newsForm = this.formBuilder.group({
      newstitle: ['', [Validators.required]],
      newssubject: ['', [Validators.required]],
      share_news: [],
      publishdate_normal_format: [],
      senderaddress: [],
      publishdate: ['', [Validators.required]],
      settime: [this.time],
      content: ['', [Validators.required]],
      sendnews: [],
      newsfrequency: [],
      days_of_weeks: [],
      timeofday: [this.time],
      timezone: [],
      startdate: ['', [Validators.required]],
      enddate: ['', [Validators.required]],
      reply: [],
      status: [1]
    });

  }



  //setting the default value
  setDefaultValue(defaultValue) {
    this.tmp_date = defaultValue.publishdate;
    let date = new Date(this.tmp_date);
    defaultValue.publishdate = date,

      this.tmp_date = defaultValue.startdate;
    date = new Date(this.tmp_date);
    defaultValue.startdate = date,

      this.tmp_date = defaultValue.enddate;
    date = new Date(this.tmp_date);
    defaultValue.enddate = date,

    this.newsForm.patchValue({
      newstitle: defaultValue.newstitle,
      newssubject: defaultValue.newssubject,
      share_news: defaultValue.share_news,
      senderaddress: defaultValue.senderaddress,
      publishdate: defaultValue.publishdate,
      settime: defaultValue.settime,
      content: defaultValue.content,
      days_of_weeks: defaultValue.days_of_weeks,
      sendnews: defaultValue.sendnews,
      newsfrequency: defaultValue.newsfrequency,
      timeofday: defaultValue.timeofday,
      timezone: defaultValue.timezone,
      startdate: defaultValue.startdate,
      enddate: defaultValue.enddate,
      reply: defaultValue.reply
    });
    // this.share_with_group = defaultValue.share_news;   

  }


  /** blur function **/
  inputBlur(val: any) {
    this.newsForm.controls[val].markAsUntouched();
  }


  /** marking the checkbox as true **/
  getDays(day_var: any) {
    if (day_var.isSelected === true)
      day_var.isSelected = false;
    else
      day_var.isSelected = true;
  }

  //submit function
  onSubmit() {

    this.days_array = [];
    this.false_count = 0;
    if (this.frequency_flag != false)
      for (var i = 0; i < this.days_json.length; i++) {
        if (this.days_json[i].isSelected) {
          this.days_array.push(this.days_json[i]);
          this.false_count--;
        }
        else
          this.days_array.push(this.days_json[i]);
        this.false_count++;
      }

    if (this.false_count == 7)
      return;

  
    if (this.frequency_flag == true)
      this.newsForm.value.days_of_weeks = this.days_array;
    else
      this.newsForm.value.days_of_weeks = null;




    this.newsForm.value.publishdate = moment(this.newsForm.value.publishdate).format('MM/DD/YYYY');
    this.newsForm.value.startdate = moment(this.newsForm.value.startdate).format('MM/DD/YYYY');
    this.newsForm.value.enddate = moment(this.newsForm.value.enddate).format('MM/DD/YYYY');

    let x: any = moment(this.newsForm.value.publishdate).unix();
    this.newsForm.value.publishdate_normal_format = parseInt(x)*1000;



    /** marking as untouched **/
    for (let x in this.newsForm.controls) {
      this.newsForm.controls[x].markAsTouched();
    }



    /* stop here if form is invalid */
    if (this.newsForm.invalid) {
      return;
    } else {

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.newsForm.value, this.configData.condition),
        "sourceobj": ["share_news", "senderaddress"]
      };
      this.newsService.addData(this.configData.endpoint, postData).subscribe((response: any) => {
        if (response.status == "success") {

          this.openSnackBar(this.message, "OK");
          this.router.navigate([this.configData.callBack]);
        } else {
          alert("Some error occurred. Please try angain.");
        }
      }, (error) => {
        alert("Some error occurred. Please try angain.");
      });
    }
  }


}


// ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-preview',
  templateUrl: 'preview_all_data.html',
  styleUrls: ['./add-edit-newsletterlib.component.css'],
})
export class PREVIEW {


  constructor(
    public dialogRef: MatDialogRef<PREVIEW>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
// ======================================================================================================
