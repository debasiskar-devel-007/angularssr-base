import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {

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
    dataListConfig: {
      endpoint: "datalist",
      methord: "post",
      data: { 
        source: "category",
        condition: {},
        extraField: {}
      }
    },
    authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjY0Nzg5MzcsImlhdCI6MTU2NjM5MjUzN30.PpPJaIm_fK_HFB3y2A3zba-51k-JrNVgJpspp-k4Q2E",
    callBack: "category-management",
    buttonText: "Create"
  }
  /* Config for add and edit end */

  constructor(private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      if(params._id) {
        this.editConfig(params._id);
      }
    });
  }

  editConfig(objectId) {
    /* start process to submited data */
    this.configAddEdit.action = "edit";
    this.configAddEdit.formConfig.data.extraField = { "id": objectId };
    this.configAddEdit.dataListConfig.condition = { "_id": objectId };
    this.configAddEdit.buttonText = "Update";
  }

}
