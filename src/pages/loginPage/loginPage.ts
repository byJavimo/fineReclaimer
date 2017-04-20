import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {HomePage} from '../home/home';
import {SignUpFormPage} from '../forms/signUpForm/signUpForm';
import  {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'loginPage.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController
  ) {}


  loginData = {
    email:'',
    password:''
  }

  logIntoApp() {
    this.navCtrl.push(HomePage);
    this.navCtrl.setRoot(TabsPage);
  }

  goToSignUpForm() {
    this.navCtrl.push(SignUpFormPage);
  }

}
