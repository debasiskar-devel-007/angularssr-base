import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {InvestorsComponent} from "./investors/investors.component";
import {ContactusComponent} from "./contactus/contactus.component";
import {AboutComponent} from "./about/about.component";
import {RepresentationComponent} from "./representation/representation.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'footer', component: FooterComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'investors', component: InvestorsComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'aboutus', component: AboutComponent},
  {path:'representation', component: RepresentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
