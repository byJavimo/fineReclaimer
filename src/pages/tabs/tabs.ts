import { Component } from '@angular/core';
import  {HomePage} from '../home/home';
import {LoginPage} from '../loginPage/loginPage';
import { App } from 'ionic-angular';
import  {FormListPage} from '../forms/formList';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = FormListPage;

  constructor(private auth: AuthService, private app: App) {

  }

  logout() {
    console.log("Hello");
  }
}
