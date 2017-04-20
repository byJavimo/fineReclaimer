import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-signUp',
  templateUrl: 'signUpForm.html'
})
export class SignUpFormPage {

  constructor(public navCtrl: NavController) {

  }

  signUpData = {
    name:'',
    lastName1:'',
    lastName2:'',
    email:'',
    password:'',
    city:'',
    postalCode:'',
    adress:'',
    birthDate:'',
    idCard:''
  }
}
