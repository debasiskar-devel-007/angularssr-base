import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  /************** lib list setup start here *************/
  public categoryListingConfig:any = {
    apiBaseUrl: "http://18.191.148.255:5009/",
    listEndPoint: "datalist",
    datasource: "",
    tableName: "category",
    updateurl: "addorupdatedata",
    editUrl: "category-management/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/category-management/create-new"
  }
  /************** lib list setup end here *************/

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {
  
    this.activatedRoute.data.subscribe(resolveData => {
      this.categoryListingConfig.datasource = resolveData.categoryListData.res;
      this.categoryListingConfig.jwtToken = this.cookieService.get('jwtToken');
    });
  }

  ngOnInit() {
  }

}
