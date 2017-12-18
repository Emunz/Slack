import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../user.service'
import { DataService } from '../data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  currentUser = {}

  scoreList = []

  message = {}

  constructor(private _userservice: UserService, private _dataservice: DataService, private _router: Router) { 
    
  }

  logout(){
    this._userservice.logoutUser()
      .then(params => {
        this._router.navigateByUrl('/')
      })
  }

  ngOnInit() {
    this.currentUser = this._userservice.retrieveUser()

  }
}