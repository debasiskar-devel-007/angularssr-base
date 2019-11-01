import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-subcategory',
  templateUrl: './add-edit-subcategory.component.html',
  styleUrls: ['./add-edit-subcategory.component.css']
})
export class AddEditSubcategoryComponent implements OnInit {


  public configAddEdit: any = {
    action: "add",
    endpoint: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/addorupdatedata",
    endpoint2:"https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
    source: "news_category",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "newsletter/list-category",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null
  }
  constructor( private cookieService : CookieService, private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.subscriptionCatData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}
