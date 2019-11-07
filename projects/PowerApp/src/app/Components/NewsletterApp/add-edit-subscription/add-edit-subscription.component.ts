import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-subscription',
  templateUrl: './add-edit-subscription.component.html',
  styleUrls: ['./add-edit-subscription.component.css']
})
export class AddEditSubscriptionComponent implements OnInit {


  ///inputs for subscription
  serverURL: any = "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";
  endpoint: any = {'source':'subscriptions','endpoint':'addorupdatedata'};
  title:any="villain"

  constructor() { }

  ngOnInit() {
  }

}
