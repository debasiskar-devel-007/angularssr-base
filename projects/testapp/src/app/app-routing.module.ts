import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { MetaGuard } from '@ngx-meta/core';
import{AddmyteamComponent} from './addmyteam/addmyteam.component';
import{TeamlistComponent} from './teamlist/teamlist.component';
import{ EditappComponent } from './editapp/editapp.component';
  //import { from } from 'rxjs';
//import { from } from 'rxjs';




const appRoutes: Routes = [
  {path:'addteam',component:AddmyteamComponent},
  {path:'editteam/:_id',component:AddmyteamComponent},
  {path:'team-list',component:TeamlistComponent},
  {path:'edit-list',component:EditappComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
