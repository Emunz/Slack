import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (private _userservice: UserService, private _dataservice: DataService, private _router: Router){

  }
}
