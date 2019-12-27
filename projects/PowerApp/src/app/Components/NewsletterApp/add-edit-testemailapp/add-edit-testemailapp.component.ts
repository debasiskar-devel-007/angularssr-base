import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-add-edit-testemailapp',
  templateUrl: './add-edit-testemailapp.component.html',
  styleUrls: ['./add-edit-testemailapp.component.css']
})
export class AddEditTestemailappComponent implements OnInit {
  public configAddEdit: any = {
    action: "add",
    endpoint: environment.apiBaseUrl+"addorupdatedata",
    endpoint2: environment.apiBaseUrl,
    source: "testemail",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "test/list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null
  }
  constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.testData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}