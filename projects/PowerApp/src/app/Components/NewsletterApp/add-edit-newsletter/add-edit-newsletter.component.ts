import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-newsletter',
  templateUrl: './add-edit-newsletter.component.html',
  styleUrls: ['./add-edit-newsletter.component.css']
})
export class AddEditNewsletterComponent implements OnInit {
  public configAddEdit: any = {
    action: "add",
    endpoint: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/addorupdatedata",
    endpoint2: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
    source: "newsletters",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "newsletter/list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null,
    group_table:'news_category',
    sender_table:'senders'
  }
  constructor(public cookieService: CookieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.newsData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}