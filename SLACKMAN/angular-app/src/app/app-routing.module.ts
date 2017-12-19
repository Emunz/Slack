import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
// import { DashbaordComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component'

import { StartproductgameComponent } from './startproductgame/startproductgame.component';


const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full' },
  {path: 'home', component: HomepageComponent, pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent },
  


  


  //NEW STUFF
  { path: 'login', component: HomepageComponent},
  { path: 'register', component: HomepageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

