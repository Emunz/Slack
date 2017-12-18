import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  allUsers: BehaviorSubject<any[]> = new BehaviorSubject([])

  loggedUser = {}

  constructor(private _http: Http) { }

  registerUser(user){
    return this._http.post(`/api/register/`, user)
    .map(response => this.loggedUser = response.json())
    .toPromise()
  }

  loginUser(user){
    return this._http.post(`/api/login/`, user)
    .map(response => this.loggedUser = response.json())
    .toPromise()
  }

  logoutUser(){
    this.loggedUser = {}
    return this._http.get('/api/logout')
      .map(response => response.json)
      .toPromise()
  }

  setLoggedUser(user){
    this.loggedUser = user
    console.log(this.loggedUser)
  }

  retrieveUser(){
    return this.loggedUser
  }

}
