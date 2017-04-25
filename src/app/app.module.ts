import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthService } from '../providers/auth-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TrafficFormPage } from '../pages/forms/trafficForm/trafficForm';
import {TabsPage} from '../pages/tabs/tabs';
import {FormListPage} from '../pages/forms/formList'
import {SignUpFormPage} from '../pages/forms/signUpForm/signUpForm'
import {HttpModule} from "@angular/http";
import {LoginPage} from "../pages/loginPage/loginPage";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrafficFormPage,
    TabsPage,
    FormListPage,
    SignUpFormPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrafficFormPage,
    TabsPage,
    FormListPage,
    SignUpFormPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
