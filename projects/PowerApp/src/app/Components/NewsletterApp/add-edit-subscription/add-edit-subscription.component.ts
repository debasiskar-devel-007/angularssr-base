import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-add-edit-subscription',
  templateUrl: './add-edit-subscription.component.html',
  styleUrls: ['./add-edit-subscription.component.css']
})
export class AddEditSubscriptionComponent implements OnInit {


  ///inputs for subscription
  serverURL: any = environment.apiBaseUrl;
  endpoint: any = {'source':'subscriptions','endpoint':'addorupdatedata'};
  title:any="Subscribe to Newsletter"

  constructor() { }

  ngOnInit() {
  }

}
