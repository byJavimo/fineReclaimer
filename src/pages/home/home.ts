import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormListPage} from '../forms/formList';
import {SignUpFormPage} from '../forms/signUpForm/signUpForm';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  isUserLogged() {
    return true;
  }

  goToFormList() {
    this.navCtrl.push(FormListPage)
  }

}
