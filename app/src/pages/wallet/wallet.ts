import { Component } from '@angular/core';
import { NavParams,App,LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuccessPage } from '../success/success';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})
export class WalletPage {
  walletAction: any;
  submitted:boolean;
  ccForm: FormGroup;
  banks;selectedPackage;
  constructor(public app: App,public params: NavParams,public formBuilder: FormBuilder,public loader: LoadingController, public http: Http) {
    this.walletAction = 'txns';
    this.app = app;
    this.selectedPackage = params.data.selectedPackage;
    this.banks = [
    ]
    this.ccForm = formBuilder.group({
      name: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      num: ['',Validators.compose([Validators.minLength(14),Validators.maxLength(19), Validators.required])],
      cvv: ['',Validators.compose([Validators.maxLength(4), Validators.required])]
  });
  this.sync();
  }
 
  packagePrice(){
    if(this.selectedPackage.pack=='custom'){
      return parseFloat(this.selectedPackage.customPrice).toFixed(2);
    }else{
      return parseFloat(this.selectedPackage.pack.price).toFixed(2);
    }
  }
  sync() {
    let loading = this.loader.create({
      spinner: 'dots',
      content: 'Loading',
      duration: 5000
    });
    loading.present();

    let url = "https://vp8ekea396.execute-api.us-east-1.amazonaws.com/prod/pricing?type=bank";
    this.http.get(url)
      .toPromise()
      .then(response => {
        this.banks= response.json();
        loading.dismiss();
      })
      .catch(error => {
        console.log(error.json())
        loading.dismiss();
      });
  }
  pay(){
    this.submitted=true;
    if(this.ccForm.valid){   
        this.success();
    }
  }
  success(){
    this.app.getRootNav().setRoot(SuccessPage, {
      filter: {}
    });
  }

}
