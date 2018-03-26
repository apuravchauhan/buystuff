import { Component } from '@angular/core';

import { PackagePage } from '../package/package';
import { WalletPage } from '../wallet/wallet';


@Component({
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  params;
  tab1Root = PackagePage;
  tab3Root = WalletPage;

  constructor() {
    this.params = {selectedPackage:{}};
  }
  checkEnabled(){
    let enabled = false;
    let cpackage = this.params.selectedPackage;
    if(cpackage.pack){
      if(cpackage.pack=='custom'){
        enabled = cpackage.customPrice!='' && (parseFloat(cpackage.customPrice||0)>0);
      }else{
        enabled = true;
      }
    }
    return enabled;
  }

}
