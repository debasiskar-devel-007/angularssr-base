import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-listing-subcategory',
  templateUrl: './listing-subcategory.component.html',
  styleUrls: ['./listing-subcategory.component.css']
})
export class ListingSubcategoryComponent implements OnInit {
  /************** lib list setup start here *************/
  public subscriptionCatForm: any = {
    apiBaseUrl: environment.apiBaseUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "news_category",
    updateurl: "addorupdatedata",
    editUrl: "newsletter/list-category/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/newsletter/list-category/add",
    view: "news_category_view"

  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {

    this.activatedRoute.data.subscribe(resolveData => {
      this.subscriptionCatForm.datasource = resolveData.subscriptionCatData.res;
      this.subscriptionCatForm.jwtToken = this.cookieService.get('jwtToken');

    });
  }

  ngOnInit() {
  }

}
