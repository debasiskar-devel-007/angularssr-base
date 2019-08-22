import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageAvailabiltyComponent} from './components/manage-availabilty/manage-availabilty.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {SlotsComponent} from './components/slots/slots.component';
import {Resolveservice} from './services/route-resolve.service';
const routes: Routes = [
  // { path: "", component: HomepageComponent},
  { path: "manage-availability", component: ManageAvailabiltyComponent},
  { path: "edit-availability/:id", component: ManageAvailabiltyComponent},
  // { path: "slots", component: SlotsComponent},
  { path: "", component: HomepageComponent,resolve: {results: Resolveservice}, data: { source: 'events_view', condition: {} }},
  { path: "slots", component: SlotsComponent,resolve: {results: Resolveservice}, data: { source: 'eventdayarr_view', condition: {} }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
