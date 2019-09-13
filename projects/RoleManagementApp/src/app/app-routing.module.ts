import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './components/listing/listing.component';
import { AddroleappComponent } from './components/addroleapp/addroleapp.component';
import { ResolveService } from './service/resolve-service.service';

/* Component */
const routes: Routes = [
  {
    path: 'role-management',
    component: ListingComponent,
    resolve: { roleListData: ResolveService },
    data: { requestcondition: { source: 'rolemanagement', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'role-management/list',
    component: ListingComponent,
    resolve: { roleListData: ResolveService },
    data: { requestcondition: { source: 'rolemanagement', condition: {} }, endpoint: 'datalist' }
  },
  { path: 'role-management/create-new', component: AddroleappComponent },
  {
    path: 'role-management/edit/:_id',
    component: AddroleappComponent,
    resolve: { editData: ResolveService },
    data: { requestcondition: { source: 'rolemanagement', condition: {} }, endpoint: 'datalist' }
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
