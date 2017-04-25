import { Component } from '@angular/core';
import {NavController, AlertController, LoadingController, Loading} from 'ionic-angular';
import {AuthService} from '../../providers/auth-service'
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

  loading: Loading;
  registerCredentials = {email: '', password:''};

  constructor(
    public navCtrl: NavController,
    private auth: AuthService,
    private  alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  logIntoApp() {

    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
          if (allowed) {
            setTimeout(() => {
              this.loading.dismiss();
              this.navCtrl.push(HomePage);
              this.navCtrl.setRoot(TabsPage);
            });
          } else {
            this.showError("Acceso Denegado");
          }
        },
        error => {
          this.showError(error);
        });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  goToSignUpForm() {
    this.navCtrl.push(SignUpFormPage);
  }

}
