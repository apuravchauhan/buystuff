import { Component } from '@angular/core';
import { ModalController,LoadingController,AlertController } from 'ionic-angular';
import { CountryPage } from '../country/country';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {
from;to;country;signin;user
  constructor(public alertCtrl: AlertController,public loader: LoadingController,public http: Http,public modalCtrl: ModalController) {
  this.modalCtrl = modalCtrl;
  this.alertCtrl = alertCtrl;
  this.signin=true;
  this.from=this.to=this.country={};
  this.loader = loader;
  this.http = http;
  this.user={cntry:{}};
  }
  showfilter() {

    let filterModal = this.modalCtrl.create(CountryPage, { });
    filterModal.onDidDismiss(data => {
      this.user.cntry = data?data:{};
      console.log(data);
    });
    filterModal.present();
  }
  sign(){
    let alert = this.alertCtrl.create({
      title: this.signin?'Signin':'Signup',
      subTitle: (this.signin?'Signin':'Signup') +' successful. (Test Only)',
      buttons: ['Done']
    });
    alert.present();
  }
  sign2(){
  let loading = this.loader.create({
    spinner: 'dots',
    content: 'Processing ...',
    duration: 60000
  });
  let context = this.signin?'signin':'';
  loading.present().then(() => {
  this.http.post(`http://localhost:8080/api/user/${context}`,this.user,{ withCredentials: true })
    .toPromise()
    .then(response => {
      console.log(response.json());

      loading.dismiss();
    })
    .catch(error => {
      loading.dismiss();
      console.log(error.json())
      let eloading = this.loader.create({
        content: 'Connectivity Issue!',
        duration: 5000
      });
      eloading.present();
    });
    });

  }

}
