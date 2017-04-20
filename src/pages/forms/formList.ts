import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TrafficFormPage} from '../forms/trafficForm/trafficForm'

@Component({
  selector: 'page-form-list',
  templateUrl: 'formList.html'
})
export class FormListPage {

  trafficFormPage = TrafficFormPage;

  constructor(public navCtrl: NavController) {

  }

}
