import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-listing-senderapp',
  templateUrl: './listing-senderapp.component.html',
  styleUrls: ['./listing-senderapp.component.css']
})
export class ListingSenderappComponent implements OnInit {

  public senderConfigForm: any = {
    apiUrl: environment.apiBaseUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "senders",
    updateurl: "addorupdatedata",
    editUrl: "sender/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/sender/add",
    view: "senders_view"

  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public cookieService: CookieService) {

    this.activatedRoute.data.subscribe(resolveData => {
      this.senderConfigForm.datasource = resolveData.senderData.res;
      this.senderConfigForm.jwtToken = this.cookieService.get('jwtToken');

    });
  }

  ngOnInit() {
  }

}