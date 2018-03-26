import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PackagePage } from '../pages/package/package';
import { WalletPage } from '../pages/wallet/wallet';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignUpPage } from '../pages/signup/signup';
import { CountryPage } from '../pages/country/country';
import { SuccessPage } from '../pages/success/success';


@NgModule({
  declarations: [
    MyApp,
    PackagePage,
    WalletPage,
    WelcomePage,
    SignUpPage,
    CountryPage,
    SuccessPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      mode:'ios',
      backButtonText: '',
      backButtonIcon: 'ios-arrow-round-back'}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PackagePage,
    WalletPage,
    WelcomePage,
    SignUpPage,
    CountryPage,
    SuccessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
