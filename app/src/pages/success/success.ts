import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-success',
  templateUrl: 'success.html'
})
export class SuccessPage {
  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  order(){
      this.navCtrl.setRoot(WelcomePage, {
        filter: {}
      });
  }

}
