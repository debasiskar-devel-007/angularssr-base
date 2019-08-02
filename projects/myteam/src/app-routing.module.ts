import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import{AddteamformComponent} from './lib/addteamform/addteamform.component';
const appRoutes: Routes = [
  {path:'add-team',component:AddteamformComponent}
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
