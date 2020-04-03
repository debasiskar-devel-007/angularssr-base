import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.css']
})
export class AddEditGroupComponent implements OnInit {
  public configAddEdit: any = {
    action: "add",
    endpoint: environment.apiBaseUrl+ "/addorupdatedata",
    endpoint2: environment.apiBaseUrl,
    source: "subscriptions",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "newsletter/list-subscription",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null,
    groupData:'news_category'
  }
  constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.groupData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}