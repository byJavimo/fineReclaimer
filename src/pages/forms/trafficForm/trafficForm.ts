import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/Rx';



@Component({
  selector: 'page-traffic-form',
  templateUrl: 'trafficForm.html'
})
export class TrafficFormPage {
  dataToSend = {
    expedientNumber:'',
    fineDate: '',
    place: '',
    city:'',
    vehiclePlate:'',
    amount:''
  };

  constructor(
    public navCtrl: NavController,
    private http: Http
  ) {}

  sendData(dataToSend){
    this.http.post('http://192.168.1.34:3000/api/post-form', dataToSend);
    alert('Formulario Enviado');
  }

}

