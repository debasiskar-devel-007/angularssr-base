import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import{AddmyteamComponent} from './addmyteam/addmyteam.component';
import{TeamlistComponent} from './teamlist/teamlist.component'
  //import { from } from 'rxjs';
//import { from } from 'rxjs';




const appRoutes: Routes = [
  {path:'addteam',component:AddmyteamComponent},
  {path:'team-list',component:TeamlistComponent}
//   { path: 'about', component: AboutusComponent,data: {
//       meta: {
//           title: 'About US',
//           description: 'Have you seen my rubber duckie?'
//       }
//   } },
//   { path: 'contact',      component: ContactusComponent,
//       data: {
//           meta: {
//               title: 'Contact Us',
//               description: 'Have you seen my rubber duckie?'
//           }
//       }}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
