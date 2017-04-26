import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../../providers/auth-service';
import {HomePage} from '../../home/home';

@Component({
  selector: 'page-signUp',
  templateUrl: 'signUpForm.html'
})
export class SignUpFormPage {

  createSuccess = false;
  registerCredentials = {name: '', lastName1: '', lastName2: '', email: '', password: '', idCard: ''};

  constructor(private navCtrl: NavController, private auth: AuthService, private alertCtrl: AlertController) {

  }

  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
          if (success) {
            this.createSuccess = true;
            this.showPopup("Success", "Bienvenido. Te has registrado correctamente");
            this.goToHome()
          } else {
            this.showPopup("Error", "Algo ha ido mal creando la cuenta. Por favor, vuelve a intentarlo más tarde");
          }
        },
        error => {
          this.showPopup("Error", error);
        });
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

  goToHome() {
    this.navCtrl.push(HomePage);
  }
}
