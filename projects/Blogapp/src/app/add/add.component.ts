import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
<<<<<<< HEAD
  public server: any = 'http://18.191.148.255:5009/';
  public addUrl: any = 'addorupdatedata';
  public getDataUrl: any = 'datalist';
  public editdata: any = [];
  public BlogList: any = [];
=======
 
  
>>>>>>> f5c94d362a5902414edc831d0f2ede0f73ae81c4


  public configAddEdit: any = {
    action: "add",
    endpoint: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/addorupdatedata",
    endpoint2:"https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
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
<<<<<<< HEAD
    if (this.activatedRoute.snapshot.params.id) {
      this.activatedRoute.data.forEach(data => {
        let result: any;
        result = data.results.res;
        this.editdata = result;
      });
    }
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data.results.res;
      this.BlogList=result;
    });
=======
    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {         
          this.configAddEdit.defaultData = resolveData.blogCatList.res[0];          
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
   
>>>>>>> f5c94d362a5902414edc831d0f2ede0f73ae81c4
  }



  }
