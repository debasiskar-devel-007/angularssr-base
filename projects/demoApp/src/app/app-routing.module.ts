import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageAvailabiltyComponent} from './manage-availabilty/manage-availabilty.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  { path: "", component: HomepageComponent},
  { path: "manage-availability", component: ManageAvailabiltyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
