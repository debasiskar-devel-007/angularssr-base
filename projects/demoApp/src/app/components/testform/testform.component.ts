import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {
  public server:any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';
  public addUrl:any = 'addorupdatedata';
  public updateUrl:any = 'addorupdatedata';
  public deleteUrl:any = 'deletesingledata';
  public statusUpdateUrl:any = 'statusupdate';
  public getDataUrl:any = 'datalist';
  public getDataEndpointData:any = 'datalist';
  public eventList:any = [];
  public formdata = [
    { inputtype: 'text', name: 'firstname', label: 'First Name', placeholder: 'Enter First Name', validationrule: { required: true }, validationerrormsg: 'is required' },
    { inputtype: 'text', name: 'lastname', label: 'Last Name', placeholder: 'Enter Last Name', validationrule: { required: true }, validationerrormsg: 'is required' },
    { inputtype: 'text', name: 'company', label: 'Company ', placeholder: 'Enter Company Name', validationrule: { required: true }, validationerrormsg: 'is required' },
    { inputtype: 'email', name: 'email', label: 'Email Id(s)', placeholder: 'Enter Your Email (Put multiple values in , separated)', validationrule: { required: true, email: true }, validationerrormsg: 'is required and should be valid' },
    { inputtype: 'textarea', name: 'address', label: 'Address', placeholder: 'Enter Address' },
    { inputtype: 'number', name: 'phoneno', label: 'Phone No.', placeholder: 'Enter Mobile Number' },
    { inputtype: 'text', name: 'website', label: 'Website Url.', placeholder: 'Enter Website Url ' },
    { inputtype: 'number', name: 'mobile', label: 'Mobile No.', placeholder: 'Enter Mobile No ' },
    {inputtype:'select',name:'videocategory',label:'Video Category',defaultchoice:'Select a Category',sourceview:'video_category',multiple:true,selectvalue:'title',selectid:'_id',validationrule:{required:true},validationerrormsg:'is required'},
    {inputtype:'checkbox',name:'status',label:'Status',value:false},
    {inputtype:'dateis',name:'start_date',label:"Start Date",placeholder:"Enter Start Date",validationrule:{required:true},validationerrormsg:'is required',pickerid:"picker_startdate"},
    {inputtype:'file',name:'profile_pic',label:"Profile Picture",filedata:{
      baseUrl: "http://3.15.236.141:5005/",
      endpoint: "uploads",
      size: "51200", // kb
      format: ["jpg", "jpeg", "png", "bmp", "zip", 'html'], // use all small font
      type: "profile-picture",
      path: "files",
      prefix: "profile_picture_"
    }},
    // { inputtype: 'hidden', name: 'created_by', label: "created_by", placeholder: "Created By", value: this.cookieservice.get('userid') }
  ];
  public datasource = { table: 'formuser', objarr: [] };
  constructor() { }

  ngOnInit() {
  }

}
