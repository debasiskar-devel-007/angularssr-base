import { Component, OnInit, Input } from '@angular/core';
import { MyteamService } from './myteam.service';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'lib-myteam',
  // templateUrl: './myteam.component.html',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.css']
})

export class MyteamComponent implements OnInit {
  public addMemberviaUrl:any;
  public teamarray: any = [];
  public teamtablename: any = 'demoteam';
  public teamlist_skip:any=["_id","created_at","multiple_speciality"];
  public teamlist_modify_header:any={'images':"Image","role":"Role","contactemail":"Contact Mail",
  "contactphone":"Phone Number","status":"Status",
  "description":"Description"};
  public teamstatus:any=[{val:1,'name':'Active'},{val:0,'name':'Inactive'}];
  public editteam:any='';


  @Input() 
   set addTeammember(addvalue:any){
     this.addMemberviaUrl=(addvalue) || '<no name set>';
     this.addMemberviaUrl=addvalue;
     
   }
  constructor(public httpRequest: MyteamService,public router:Router) {


  }

  ngOnInit() {
    this.getTeamdata();
  }
  getTeamdata() {
    let link = "http://166.62.39.137:5009/datalist";
    let data = { "source": "demoteam" };
    this.httpRequest.submitRequest(link, data, 'post')
      .subscribe(response => {
        let result:any;
        result = response;
        this.teamarray = result.res;
        console.log(this.teamarray);
      }
      );    
  }
  addButton(){
    this.router.navigateByUrl('/'+this.addMemberviaUrl);
  }
}
