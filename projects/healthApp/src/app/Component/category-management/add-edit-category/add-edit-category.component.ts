import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {

  /* Config for add and edit start */
  public configAddEdit: any = {
    action: "add",
    endpoint: "http://18.191.148.255:5009/addorupdatedata",
    source: "category",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "category-management",
    userData: { id: "test-123", name: "Admin" },
  }
  /* Config for add and edit end */

  constructor(private router: Router, private activateRoute: ActivatedRoute, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      if(params._id) {
        this.activateRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.categoryData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}
