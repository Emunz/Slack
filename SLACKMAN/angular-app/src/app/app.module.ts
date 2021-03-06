import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; 
 import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomepageComponent } from './homepage/homepage.component';

import { StartproductgameComponent } from './startproductgame/startproductgame.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomepageComponent,
    StartproductgameComponent,
    ChatComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
