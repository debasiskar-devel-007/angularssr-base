import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import{AddteamformComponent} from './lib/addteamform/addteamform.component';
import{ EditComponent } from './lib/edit/edit.component';
import { from } from 'rxjs';
const appRoutes: Routes = [
  {path:'add-team',component:AddteamformComponent},
  {path:'edit',component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
