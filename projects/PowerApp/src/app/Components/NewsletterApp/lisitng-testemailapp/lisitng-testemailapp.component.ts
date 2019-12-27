import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-lisitng-testemailapp',
  templateUrl: './lisitng-testemailapp.component.html',
  styleUrls: ['./lisitng-testemailapp.component.css']
})
export class LisitngTestemailappComponent implements OnInit {

  public senderConfigForm: any = {
    apiBaseUrl: environment.apiBaseUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "testemail",
    updateurl: "addorupdatedata",
    editUrl: "test/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/test/add",
    view: "testemail_view"

  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {

    this.activatedRoute.data.subscribe(resolveData => {
      this.senderConfigForm.datasource = resolveData.testData.res;
      this.senderConfigForm.jwtToken = this.cookieService.get('jwtToken');

    });
  }

  ngOnInit() {
  }

}