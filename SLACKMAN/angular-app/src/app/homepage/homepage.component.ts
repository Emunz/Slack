import { Component, OnInit } from '@angular/core';
//DATA && SERVICES

import { DataService } from '../data.service';
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
//MODEL IMPORTS
import { Product } from '../product'; 
import { User } from '../user';  

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

valid = false;
currentUser = new User;
user = new User();
loggingUser = {
  emailForLogin: '',
  passwordForLogin: ''
}
ProductList = [];
userList =[];
ErrorMessage = {
  message: '',
  backToLogin: false
}
loggedList=[]
RandomProduct: Product;
catchErrors = {};

  constructor
  ( private _dataService: DataService,
    private _router: Router,
    private _route: ActivatedRoute)

{
    // _dataService.findRandomProduct()                       ///generate random question
    // .then((product) => { this.RandomProduct = product; })
    // .catch((err) => { console.log(err); });

    this._dataService.retrieveUsers()
    .then(data => this.userList = data.userResults)
    console.log(this._dataService.retrieveUsers());  

    this._dataService.retrieveProducts()               
    .then(data => this.ProductList = data.results)              //if retrieving does not because of 'PROMISE' ex I have an 'any'
 }
  ngOnInit() {
    this.loggedList = this._dataService.retrieveLogged()
  }

register(){
  this._dataService.createUser(this.user)
    .then(data => {   
        this.valid = true;
        console.log("made it to register")
        this.user = new User();
        this.user.id = data.LoggedUserId
        this.user.email = data.LoggedUserEmail
        this.user.firstName= data.LoggedUserName
        this.ErrorMessage = data
        console.log("ERROR MESSAGE:", this.ErrorMessage)
        console.log(this.user)
      })
    .then(data => {
      if(this.ErrorMessage.backToLogin){
        return this._router.navigateByUrl("/")
      } else {
        this._dataService.SessEm(this.user)
        return this._router.navigateByUrl("/dashboard")
      }
    })
}


login() {

  this._dataService.loginUser(this.loggingUser)
    .then(data => {
        console.log("made it to LOGIN")
        this.user = new User();
        this.user.id= data.LoggedUserId
        this.user.email = data.LoggedUserEmail
        this.user.firstName= data.LoggedUserName
        this.ErrorMessage = data
    })
    .then(data => {
      if(this.ErrorMessage.backToLogin){
        this._router.navigateByUrl("/")
      } else {
        this._dataService.SessEm(this.user)
        this._router.navigateByUrl("/dashboard")
      }
    })
  
}



}
