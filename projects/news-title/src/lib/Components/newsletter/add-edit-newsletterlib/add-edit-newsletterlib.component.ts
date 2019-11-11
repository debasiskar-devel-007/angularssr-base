import { Component, OnInit,Input,Inject } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NewsTitleService } from '../../../news-title.service';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: 'lib-add-edit-newsletterlib',
  templateUrl: './add-edit-newsletterlib.component.html',
  styleUrls: ['./add-edit-newsletterlib.component.css'],
})
export class AddEditNewsletterlibComponent implements OnInit {


  // =================declaration==================
  header_name:any="Newsletter"
  buttonText:any="SAVE";
  group_name_array:any = [];
  sender_name_array:any = [];
  configData:any;
  time:any ;
  cookieValue:any;
  newsForm : FormGroup;
  // ==============================================

    /**ckeditor start here*/
    public Editor = ClassicEditor;  //for ckeditor
    editorConfig = {
      placeholder: 'Content:',
    };
    public model = {
      editorData: ''
    };
    /**ckeditor end here*/


    @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }

  constructor( private atp : AmazingTimePickerService, private newsService : NewsTitleService,
    private datepipe: DatePipe , public cookieService : CookieService , private formBuilder : FormBuilder) { 
      this.time = datepipe.transform(new Date(),'h:mm a');
      console.log('Time',this.time);
  }


  ngOnInit() {

       //Calling the group name
       this.getGroupName();

       //Get sender's getGroupName
       this.getSenderAddress();
      
       //Getting the cookie value
       this.cookieValue = this.cookieService.getAll();

       
  }

  open()
  {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time=>{
      console.log(time);
    });
  }


  /*getting the group name*/
  getGroupName()
  {
    var data:any = { 'source':this.configData.group_table };
    this.newsService.getData(this.configData.endpoint2+'datalist',data).subscribe(response=>{
       let result:any;
       result = response;
       this.group_name_array = result.res;
    });
  }

  /*getting the sender's email*/
  getSenderAddress()
  {
    var data:any={ 'source':this.configData.sender_table};
    this.newsService.getData(this.configData.endpoint2+'datalist',data).subscribe(response=>{
      let result:any;
      result = response;
      this.sender_name_array = result.res;
   });
  }
}
