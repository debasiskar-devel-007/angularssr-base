import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 
  


  public configAddEdit: any = {
    action: "add",
    endpoint: "https://hntm6xe6of.execute-api.us-east-1.amazonaws.com/dev/api1/addorupdatedata",
    endpoint2:"https://hntm6xe6of.execute-api.us-east-1.amazonaws.com/dev/api1/",

    source: "blog_category",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "blog-category/list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null
  }
  constructor(public activatedRoute: ActivatedRoute , private cookieService : CookieService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {         
          this.configAddEdit.defaultData = resolveData.blogCatList.res[0];          
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
   
  }



  }
