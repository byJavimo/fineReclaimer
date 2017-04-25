import { Component } from '@angular/core';
import { App,  NavController } from 'ionic-angular';
import {FormListPage} from '../forms/formList';
import { AuthService } from '../../providers/auth-service';
import {LoginPage} from '../loginPage/loginPage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';
  constructor(private navCtrl: NavController, private auth: AuthService, private app: App) {
    let info = this.auth.getUserInfo();
    this.username = info.name;
    this.email = info.email;
  }

  logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }

  goToFormList() {
    this.navCtrl.push(FormListPage)
  }
}
