import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-edit-lession',
  templateUrl: './add-edit-lession.component.html',
  styleUrls: ['./add-edit-lession.component.css']
})
export class AddEditLessionComponent implements OnInit {

  /* Config for add and edit start */
  public configAddEdit: any = {
    action: "add",
    apiUrl: "http://166.62.39.137:5009/",
    userData: { id: "test-123", name: "Admin" },
    formConfig: { 
      endpoint: "addorupdatedata",
      methord: "post",
      data: { 
        source: "category",
        condition: {},
        extraField: {}
      }
    },
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "category-management",
    buttonText: "Create"
  }
  /* Config for add and edit end */

  constructor(private router: Router, private activateRoute: ActivatedRoute, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      if(params._id) {
        this.activateRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.categoryData[0];
        });
        this.editConfig(params._id);
      }
    });
  }

  editConfig(objectId) {
    /* start process to submited data */
    this.configAddEdit.action = "edit";
    this.configAddEdit.formConfig.data.extraField = { "id": objectId };
    this.configAddEdit.formConfig.data.condition = { "_id": objectId };
    this.configAddEdit.buttonText = "Update";
  }

}
