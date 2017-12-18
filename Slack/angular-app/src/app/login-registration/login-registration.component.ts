import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {

  constructor(private _userservice: UserService, private _router: Router) { }

  newUser = {
    firstName: '',
    lastName: '',
    email: '',
    birthday: Date,
    password: '',
    confirmPassword: ''
  }

  loginUser = {
    emailForLogin: '',
    passwordForLogin: ''
  }

  currentUser = {}


  submitRegistration(){
    this._userservice.registerUser(this.newUser)
      .then(response => this.currentUser = response)
      .then(response => {
        if(response.backToLogin){
          return this._router.navigateByUrl('/')
        } else {
          return this._router.navigateByUrl('/conversations')
        }
      })
      .catch(err => console.log(err))
  }

  submitLogin(){
    this._userservice.loginUser(this.loginUser)
      .then(response => this.currentUser = response)
      .then(response => {
        if(response.backToLogin){
          return this._router.navigateByUrl('/')
        } else {
          return this._router.navigateByUrl('/conversations')
        }
      })
      .catch(err => err => console.log(err))
  }

  ngOnInit() {
    this.currentUser = this._userservice.retrieveUser()    
  }

}
