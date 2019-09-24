import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageAvailabiltyComponent} from './components/manage-availabilty/manage-availabilty.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {SlotsComponent} from './components/slots/slots.component';
import {TestformComponent} from './components/testform/testform.component';
import {Resolveservice} from './services/route-resolve.service';
import { from } from 'rxjs';
const routes: Routes = [
  // { path: "", component: HomepageComponent},
  { path: "manage-availability", component: ManageAvailabiltyComponent},
  { path: "edit-availability/:id", component: ManageAvailabiltyComponent},
  // { path: "slots", component: SlotsComponent},
  { path: "", component: HomepageComponent,resolve: {results: Resolveservice},data: { requestcondition:{source: 'events_view', condition: {} },endpoint:'datalist'}},
  { path: "slots", component: SlotsComponent,resolve: {results: Resolveservice}, data: { requestcondition:{source: 'eventdayarr_view', condition: {} },endpoint:'datalist'}},
  { path: "slotstest", component: SlotsComponent,resolve: {results: Resolveservice}, data: { requestcondition:{source: 'eventdayarr_view', condition: {} },endpoint:'datalist'}},
  { path: "testform", component: TestformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
