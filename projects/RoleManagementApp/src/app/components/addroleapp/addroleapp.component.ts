import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-addroleapp',
  templateUrl: './addroleapp.component.html',
  styleUrls: ['./addroleapp.component.css']
})
export class AddroleappComponent implements OnInit {


   /* Config for add and edit start */
   public configAddEdit: any = {
    action: "add",
    endpoint: "http://166.62.39.137:5009/addorupdatedata",
    source: "rolemanagement",
    condition: {},
    defaultData: null,
    jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjcwNTQzNDYsImlhdCI6MTU2Njk2Nzk0Nn0.qZMR2qvzA30k6cIfiFBLc9oBT1kQcfgkuX1lBzZZmDA',
    callBack: "role-management",
    userData: { id: "18801017007", name: "Admin" },
  }


  constructor(private router: Router, private activateRoute: ActivatedRoute, ) {
  }

  ngOnInit() {

    // condition for edit option 
    this.activateRoute.params.subscribe(params => {
      if(params._id) {
        this.activateRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.editData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
         
        });
      }
    });
  }

}

 


  

  