import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public formTitle: any = "Contact Us Listing Page";
  public serverUrl: any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';
  public getDataUrl: any = {
    endpoint: 'datalist',
    source: 'contactusForm'
  };
  public updateurl: any = "addorupdatedata";
  public deleteurl: any = {
    endpoint: "deletesingledata",
    source: "contactusForm"
  };
  public addEndpoint: any = 'demoappemailsend';
  // public getDataUrl: any = 'datalist';
  public contactUsAllDataHeaderSkip: any = ['_id'];
  public contactUsAllDataModifyHeader: any = { addresses: 'Addresses', emails: 'Emails', locationname: 'Location Name', phones: 'Phones' };
  constructor(public route: ActivatedRoute, public router: Router) {
    this.route.params.subscribe(params=>{
      console.log('++++++',params['id']);
    });
    console.log('--------------',this.router.url)
   }

  ngOnInit() {
  }
  gotologin(){
    this.router.navigateByUrl('/login'+this.router.url)
    console.log('/login'+this.router.url)
  }

}
