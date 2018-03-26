webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__package_package__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_wallet__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomePage = (function () {
    function WelcomePage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__package_package__["a" /* PackagePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__wallet_wallet__["a" /* WalletPage */];
        this.params = { selectedPackage: {} };
    }
    WelcomePage.prototype.checkEnabled = function () {
        var enabled = false;
        var cpackage = this.params.selectedPackage;
        if (cpackage.pack) {
            if (cpackage.pack == 'custom') {
                enabled = cpackage.customPrice != '' && (parseFloat(cpackage.customPrice || 0) > 0);
            }
            else {
                enabled = true;
            }
        }
        return enabled;
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/pages/welcome/welcome.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" [rootParams]="params" tabTitle="Package" tabIcon="ios-cube"></ion-tab>\n  <ion-tab [root]="tab3Root" [rootParams]="params" tabTitle="Checkout" tabIcon="ios-card" [enabled]="checkEnabled()"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuccessPage = (function () {
    function SuccessPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.navCtrl = navCtrl;
    }
    SuccessPage.prototype.order = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* WelcomePage */], {
            filter: {}
        });
    };
    SuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-success',template:/*ion-inline-start:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/pages/success/success.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button menuToggle ion-button icon-only style="color:blue">\n      </button>\n    </ion-buttons>\n    <ion-title>Buy Stuff</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n\n    <div class="anim-move logo-place" text-center style="margin-top:100px">\n        <ion-icon name="ios-cube" color="primary" style="font-size:100px"></ion-icon>\n    </div>\n    <div text-center>\n        <h2>Order successful.</h2>\n    </div>\n<ion-footer>\n  <ion-item style="font-weight:600;font-size:1.2rem !important;letter-spacing:1px !important">\n      <ion-note item-end >\n        <a href="javascript:void(0)" (click)="order()" style="color:#FF3366;text-decoration:none">\n          BUY MORE\n        </a>\n      </ion-note>\n    </ion-item>\n\n</ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/pages/success/success.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], SuccessPage);
    return SuccessPage;
}());

//# sourceMappingURL=success.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PackagePage = (function () {
    function PackagePage(navCtrl, params, loader, http) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.loader = loader;
        this.http = http;
        this.selectedPackage = params.data.selectedPackage;
        this.packages = [];
        this.sync();
    }
    PackagePage.prototype.payment = function () {
        var t = this.navCtrl.parent;
        t.select(1);
    };
    PackagePage.prototype.sync = function () {
        var _this = this;
        var loading = this.loader.create({
            spinner: 'dots',
            content: 'Loading',
            duration: 5000
        });
        loading.present();
        var url = "https://vp8ekea396.execute-api.us-east-1.amazonaws.com/prod/pricing?type=package";
        this.http.get(url)
            .toPromise()
            .then(function (response) {
            _this.packages = response.json();
            loading.dismiss();
        })
            .catch(function (error) {
            console.log(error.json());
            loading.dismiss();
        });
    };
    PackagePage.prototype.checkEnabled = function () {
        var enabled = false;
        var cpackage = this.selectedPackage;
        if (cpackage.pack) {
            if (cpackage.pack == 'custom') {
                enabled = cpackage.customPrice != '' && (parseFloat(cpackage.customPrice || 0) > 0);
            }
            else {
                enabled = true;
            }
        }
        return enabled;
    };
    PackagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-package',template:/*ion-inline-start:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/pages/package/package.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button menuToggle ion-button icon-only style="color:#6b70ed">\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Buy Stuff</ion-title>\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="pollution-back">\n  <div text-center>\n    <img src="assets/imgs/cards.png" style="width:120px;margin-bottom:30px">\n  </div>\n  <ion-card class="round-shadow">\n    <ion-list no-lines radio-group [(ngModel)]="selectedPackage.pack">\n      <ion-item style="border-bottom:2px solid #F4F4F5" *ngFor="let pack of packages;let i = index">\n        <ion-avatar item-start class="numbered">\n          {{i+1}}\n        </ion-avatar>\n\n        <ion-label stacked style="color:#808080;font-size:1.4rem;letter-spacing:0.5px">\n          Price {{pack.price}}INR\n        </ion-label>\n        <ion-label style="min-height:20px">Bonus {{pack.bonus}}INR</ion-label>\n        <ion-radio [value]="pack"></ion-radio>\n      </ion-item>\n      <ion-item style="border-bottom:0px solid #F4F4F5">\n        <ion-avatar item-start class="numbered">\n          {{packages.length+1}}\n        </ion-avatar>\n        <ion-label style="color:#808080;font-size:1.4rem;letter-spacing:0.5px">\n          Customized Package\n        </ion-label>\n        <ion-radio value="custom" item-right></ion-radio>\n      </ion-item>\n      <ion-item *ngIf="selectedPackage.pack==\'custom\'" style="border-bottom:0px solid #F4F4F5">\n        <ion-avatar item-start>\n        </ion-avatar>\n\n        <ion-input placeholder="Enter amount" type="tel" maxlength="6" min="1" max="10000" [(ngModel)]="selectedPackage.customPrice"></ion-input>\n\n      </ion-item>\n    </ion-list>\n\n  </ion-card>\n  <ion-card class="round-shadow">\n    <ion-list no-lines>\n      <ion-item style="border-bottom:0px solid #F4F4F5">\n        <ion-icon name="ios-pricetag-outline" item-left color="primary"></ion-icon>\n\n        <ion-label stacked style="color:#808080;font-size:1.4rem;letter-spacing:0.5px">Promocode</ion-label>\n        <ion-input type="text" maxlength="8" [(ngModel)]="selectedPackage.promo"></ion-input>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n<ion-footer >\n  <div style="padding:12px" >\n    <button class="boldbutton" [disabled]="!checkEnabled()" ion-button block (click)="payment()" style="font-weight:700;letter-spacing:1px">Next</button>\n  </div>\n</ion-footer>'/*ion-inline-end:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/pages/package/package.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], PackagePage);
    return PackagePage;
}());

//# sourceMappingURL=package.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__success_success__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WalletPage = (function () {
    function WalletPage(app, params, formBuilder, loader, http) {
        this.app = app;
        this.params = params;
        this.formBuilder = formBuilder;
        this.loader = loader;
        this.http = http;
        this.walletAction = 'txns';
        this.app = app;
        this.selectedPackage = params.data.selectedPackage;
        this.banks = [];
        this.ccForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            num: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(14), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(19), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            cvv: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.sync();
    }
    WalletPage.prototype.packagePrice = function () {
        if (this.selectedPackage.pack == 'custom') {
            return parseFloat(this.selectedPackage.customPrice).toFixed(2);
        }
        else {
            return parseFloat(this.selectedPackage.pack.price).toFixed(2);
        }
    };
    WalletPage.prototype.sync = function () {
        var _this = this;
        var loading = this.loader.create({
            spinner: 'dots',
            content: 'Loading',
            duration: 5000
        });
        loading.present();
        var url = "https://vp8ekea396.execute-api.us-east-1.amazonaws.com/prod/pricing?type=bank";
        this.http.get(url)
            .toPromise()
            .then(function (response) {
            _this.banks = response.json();
            loading.dismiss();
        })
            .catch(function (error) {
            console.log(error.json());
            loading.dismiss();
        });
    };
    WalletPage.prototype.pay = function () {
        this.submitted = true;
        if (this.ccForm.valid) {
            this.success();
        }
    };
    WalletPage.prototype.success = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__success_success__["a" /* SuccessPage */], {
            filter: {}
        });
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/pages/wallet/wallet.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button menuToggle ion-button icon-only style="color:white">\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Buy Stuff</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <div class="wallet-back">\n    <div class="wallet-value">\n      <small>INR</small>\n      {{packagePrice()}}\n    </div>\n    \n    <div class="payment-options">\n      <ion-segment [(ngModel)]="walletAction">\n        <ion-segment-button value="txns">\n          Credit Card\n          <hr/>\n        </ion-segment-button>\n        <ion-segment-button value="transfer">\n          Debit Card\n          <hr/>\n        </ion-segment-button>\n        <ion-segment-button value="netbank">\n          Net Banking\n          <hr/>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n  </div>\n\n  <div class="payment-details">\n    <div [ngSwitch]="true">\n      <ion-card class="round-shadow" *ngSwitchCase="walletAction===\'netbank\'">\n        <ion-list no-lines radio-group [(ngModel)]="selectedBank">\n          <ion-item  *ngFor="let bank of banks">\n            <ion-avatar class="bank {{bank.code}}"  item-start>\n            </ion-avatar>\n            <ion-label stacked>\n              {{bank.name}}\n            </ion-label>\n            <ion-radio [value]="bank"></ion-radio>\n          </ion-item>\n        </ion-list>\n        <hr>\n          <div padding>\n              <button class="boldbutton" [disabled]="!selectedBank" ion-button block (click)="success()">Checkout</button>\n            </div>\n      </ion-card>\n      <ion-card class="round-shadow" *ngSwitchCase="walletAction===\'txns\'|| walletAction===\'transfer\'">\n        <form [formGroup]="ccForm">\n          <ion-list no-lines>\n            <ion-item [class.invalid]="!ccForm.controls.name.valid">\n              <ion-label>Name</ion-label>\n              <ion-input formControlName="name" type="text" text-right placeholder="Full name"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Card Number</ion-label>\n              <ion-input formControlName="num" type="number" text-right placeholder="4567XXXXXXXXXXXX"></ion-input>\n            </ion-item>\n            <ion-row>\n              <ion-col col-7>\n                <ion-item>\n                  <ion-label>Expiry</ion-label>\n                  <ion-datetime placeholder="MM/YY" displayFormat="MM/YY" pickerFormat="MM YYYY" min="2018-03" max="2028-12-31"></ion-datetime>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label>CVV</ion-label>\n                  <ion-input formControlName="cvv" type="number" text-right placeholder="XXXX"></ion-input>\n                </ion-item>\n              </ion-col>\n\n            </ion-row>\n          </ion-list>\n          <hr>\n          <p padding-right style="color: red" text-right *ngIf="!ccForm.valid && submitted">\n              *Check info\n          </p>\n          <div style="padding:12px">\n              <button class="boldbutton" ion-button block (click)="pay()">Checkout</button>\n            </div>\n        </form>\n        \n      </ion-card>\n    </div>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/pages/wallet/wallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__country_country__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignUpPage = (function () {
    function SignUpPage(alertCtrl, loader, http, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.signin = true;
        this.from = this.to = this.country = {};
        this.loader = loader;
        this.http = http;
        this.user = { cntry: {} };
    }
    SignUpPage.prototype.showfilter = function () {
        var _this = this;
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__country_country__["a" /* CountryPage */], {});
        filterModal.onDidDismiss(function (data) {
            _this.user.cntry = data ? data : {};
            console.log(data);
        });
        filterModal.present();
    };
    SignUpPage.prototype.sign = function () {
        var alert = this.alertCtrl.create({
            title: this.signin ? 'Signin' : 'Signup',
            subTitle: (this.signin ? 'Signin' : 'Signup') + ' successful. (Test Only)',
            buttons: ['Done']
        });
        alert.present();
    };
    SignUpPage.prototype.sign2 = function () {
        var _this = this;
        var loading = this.loader.create({
            spinner: 'dots',
            content: 'Processing ...',
            duration: 60000
        });
        var context = this.signin ? 'signin' : '';
        loading.present().then(function () {
            _this.http.post("http://localhost:8080/api/user/" + context, _this.user, { withCredentials: true })
                .toPromise()
                .then(function (response) {
                console.log(response.json());
                loading.dismiss();
            })
                .catch(function (error) {
                loading.dismiss();
                console.log(error.json());
                var eloading = _this.loader.create({
                    content: 'Connectivity Issue!',
                    duration: 5000
                });
                eloading.present();
            });
        });
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button menuToggle ion-button icon-only style="color:blue">\n      </button>\n    </ion-buttons>\n    <ion-title>BUY STUFF</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n\n    <div class="anim-move logo-place" text-center>\n        <img src="assets/imgs/cards.png" style="width:120px;margin-bottom:30px">\n\n    </div>\n\n\n\n<ion-footer>\n\n    <ion-card class="round-shadow">\n      <ion-list no-lines>\n\n\n        <ion-item style="border-bottom:2px solid #F4F4F5" *ngIf="!signin">\n          <ion-icon name="ios-contact-outline" color="primary" item-left ></ion-icon>\n          <ion-label style="color:#808080;font-size:1.4rem;letter-spacing:0.5px">Name</ion-label>\n          <ion-input type="text" text-right [(ngModel)]="user.name"></ion-input>\n        </ion-item>\n\n        <ion-item style="border-bottom:2px solid #F4F4F5">\n          <ion-icon name="ios-mail-outline" color="primary" item-left ></ion-icon>\n\n          <ion-label  style="color:#808080;font-size:1.4rem;letter-spacing:0.5px">Email</ion-label>\n          <ion-input type="text" text-right [(ngModel)]="user.mail"></ion-input>\n        </ion-item>\n\n\n        <ion-item style="border-bottom:2px solid #F4F4F5" (click)="showfilter()" *ngIf="!signin">\n          <ion-icon name="ios-globe-outline" item-left color="primary"></ion-icon>\n\n          <ion-label style="color:#808080;font-size:1.4rem;letter-spacing:0.5px">Country</ion-label>\n          <ion-label style="min-height:20px" text-right>{{user.cntry.name}}</ion-label>\n        </ion-item>\n\n        <!-- <ion-item style="border-bottom:2px solid #F4F4F5" *ngIf="!signin">\n          <ion-icon name="ios-call-outline" item-left color="primary"></ion-icon>\n\n          <ion-label style="color:#808080;font-size:1.4rem;letter-spacing:0.5px">Mobile</ion-label>\n          <ion-input type="text" text-right placeholder="10 digit mobile num" [(ngModel)]="user.mob"></ion-input>\n\n        </ion-item> -->\n\n        <ion-item style="border-bottom:0px solid #F4F4F5">\n          <ion-icon name="ios-lock-outline" item-left color="primary"></ion-icon>\n\n          <ion-label  style="color:#808080;font-size:1.4rem;letter-spacing:0.5px">Password</ion-label>\n          <ion-input type="password" text-right [(ngModel)]="user.pass"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card>\n  <div style="padding:12px">\n    <button class="round-shadow" ion-button block (click)="sign()" style="font-weight:700;letter-spacing:1px">{{signin?\'SIGN IN\':\'SIGN UP\'}}</button>\n  </div>\n\n    <ion-item style="font-weight:600;font-size:1.2rem !important;letter-spacing:1px !important">\n      <ion-label item-left style="color:#808080;flex:2">TERMS</ion-label>\n      <ion-note item-end ><a href="javascript:void(0)" (click)="signin = (!signin)" style="color:#FF3366;text-decoration:none">{{!signin?\'SIGN IN\':\'SIGN UP\'}}</a></ion-note>\n    </ion-item>\n\n</ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryPage = (function () {
    function CountryPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.initialize();
    }
    CountryPage.prototype.initialize = function () {
        this.countries = [
            { ccode: "US", value: "1", name: "USA", mcode: "+1" },
            { ccode: "GB", value: "44", name: "UK", mcode: "+44" },
            { ccode: "DZ", value: "213", name: "Algeria", mcode: "+213" },
            { ccode: "AD", value: "376", name: "Andorra", mcode: "+376" },
            { ccode: "AO", value: "244", name: "Angola", mcode: "+244" },
            { ccode: "AI", value: "1264", name: "Anguilla", mcode: "+1264" },
            { ccode: "AG", value: "1268", name: "Antigua & Barbuda", mcode: "+1268" },
            { ccode: "AR", value: "54", name: "Argentina", mcode: "+54" },
            { ccode: "AM", value: "374", name: "Armenia", mcode: "+374" },
            { ccode: "AW", value: "297", name: "Aruba", mcode: "+297" },
            { ccode: "AU", value: "61", name: "Australia", mcode: "+61" },
            { ccode: "AT", value: "43", name: "Austria", mcode: "+43" },
            { ccode: "AZ", value: "994", name: "Azerbaijan", mcode: "+994" },
            { ccode: "BS", value: "1242", name: "Bahamas", mcode: "+1242" },
            { ccode: "BH", value: "973", name: "Bahrain", mcode: "+973" },
            { ccode: "BD", value: "880", name: "Bangladesh", mcode: "+880" },
            { ccode: "BB", value: "1246", name: "Barbados", mcode: "+1246" },
            { ccode: "BY", value: "375", name: "Belarus", mcode: "+375" },
            { ccode: "BE", value: "32", name: "Belgium", mcode: "+32" },
            { ccode: "BZ", value: "501", name: "Belize", mcode: "+501" },
            { ccode: "BJ", value: "229", name: "Benin", mcode: "+229" },
            { ccode: "BM", value: "1441", name: "Bermuda", mcode: "+1441" },
            { ccode: "BT", value: "975", name: "Bhutan", mcode: "+975" },
            { ccode: "BO", value: "591", name: "Bolivia", mcode: "+591" },
            { ccode: "BA", value: "387", name: "Bosnia Herzegovina", mcode: "+387" },
            { ccode: "BW", value: "267", name: "Botswana", mcode: "+267" },
            { ccode: "BR", value: "55", name: "Brazil", mcode: "+55" },
            { ccode: "BN", value: "673", name: "Brunei", mcode: "+673" },
            { ccode: "BG", value: "359", name: "Bulgaria", mcode: "+359" },
            { ccode: "BF", value: "226", name: "Burkina Faso", mcode: "+226" },
            { ccode: "BI", value: "257", name: "Burundi", mcode: "+257" },
            { ccode: "KH", value: "855", name: "Cambodia", mcode: "+855" },
            { ccode: "CM", value: "237", name: "Cameroon", mcode: "+237" },
            { ccode: "CA", value: "1", name: "Canada", mcode: "+1" },
            { ccode: "CV", value: "238", name: "Cape Verde Islands", mcode: "+238" },
            { ccode: "KY", value: "1345", name: "Cayman Islands", mcode: "+1345" },
            { ccode: "CF", value: "236", name: "Central African Republic", mcode: "+236" },
            { ccode: "CL", value: "56", name: "Chile", mcode: "+56" },
            { ccode: "CN", value: "86", name: "China", mcode: "+86" },
            { ccode: "CO", value: "57", name: "Colombia", mcode: "+57" },
            { ccode: "KM", value: "269", name: "Comoros", mcode: "+269" },
            { ccode: "CG", value: "242", name: "Congo", mcode: "+242" },
            { ccode: "CK", value: "682", name: "Cook Islands", mcode: "+682" },
            { ccode: "CR", value: "506", name: "Costa Rica", mcode: "+506" },
            { ccode: "HR", value: "385", name: "Croatia", mcode: "+385" },
            { ccode: "CU", value: "53", name: "Cuba", mcode: "+53" },
            { ccode: "CY", value: "90", name: "Cyprus - North", mcode: "+90" },
            { ccode: "CY", value: "357", name: "Cyprus - South", mcode: "+357" },
            { ccode: "CZ", value: "420", name: "Czech Republic", mcode: "+420" },
            { ccode: "DK", value: "45", name: "Denmark", mcode: "+45" },
            { ccode: "DJ", value: "253", name: "Djibouti", mcode: "+253" },
            { ccode: "DM", value: "1809", name: "Dominica", mcode: "+1809" },
            { ccode: "DO", value: "1809", name: "Dominican Republic", mcode: "+1809" },
            { ccode: "EC", value: "593", name: "Ecuador", mcode: "+593" },
            { ccode: "EG", value: "20", name: "Egypt", mcode: "+20" },
            { ccode: "SV", value: "503", name: "El Salvador", mcode: "+503" },
            { ccode: "GQ", value: "240", name: "Equatorial Guinea", mcode: "+240" },
            { ccode: "ER", value: "291", name: "Eritrea", mcode: "+291" },
            { ccode: "EE", value: "372", name: "Estonia", mcode: "+372" },
            { ccode: "ET", value: "251", name: "Ethiopia", mcode: "+251" },
            { ccode: "FK", value: "500", name: "Falkland Islands", mcode: "+500" },
            { ccode: "FO", value: "298", name: "Faroe Islands", mcode: "+298" },
            { ccode: "FJ", value: "679", name: "Fiji", mcode: "+679" },
            { ccode: "FI", value: "358", name: "Finland", mcode: "+358" },
            { ccode: "FR", value: "33", name: "France", mcode: "+33" },
            { ccode: "GF", value: "594", name: "French Guiana", mcode: "+594" },
            { ccode: "PF", value: "689", name: "French Polynesia", mcode: "+689" },
            { ccode: "GA", value: "241", name: "Gabon", mcode: "+241" },
            { ccode: "GM", value: "220", name: "Gambia", mcode: "+220" },
            { ccode: "GE", value: "7880", name: "Georgia", mcode: "+7880" },
            { ccode: "DE", value: "49", name: "Germany", mcode: "+49" },
            { ccode: "GH", value: "233", name: "Ghana", mcode: "+233" },
            { ccode: "GI", value: "350", name: "Gibraltar", mcode: "+350" },
            { ccode: "GR", value: "30", name: "Greece", mcode: "+30" },
            { ccode: "GL", value: "299", name: "Greenland", mcode: "+299" },
            { ccode: "GD", value: "1473", name: "Grenada", mcode: "+1473" },
            { ccode: "GP", value: "590", name: "Guadeloupe", mcode: "+590" },
            { ccode: "GU", value: "671", name: "Guam", mcode: "+671" },
            { ccode: "GT", value: "502", name: "Guatemala", mcode: "+502" },
            { ccode: "GN", value: "224", name: "Guinea", mcode: "+224" },
            { ccode: "GW", value: "245", name: "Guinea - Bissau", mcode: "+245" },
            { ccode: "GY", value: "592", name: "Guyana", mcode: "+592" },
            { ccode: "HT", value: "509", name: "Haiti", mcode: "+509" },
            { ccode: "HN", value: "504", name: "Honduras", mcode: "+504" },
            { ccode: "HK", value: "852", name: "Hong Kong", mcode: "+852" },
            { ccode: "HU", value: "36", name: "Hungary", mcode: "+36" },
            { ccode: "IS", value: "354", name: "Iceland", mcode: "+354" },
            { ccode: "IN", value: "91", name: "India", mcode: "+91" },
            { ccode: "ID", value: "62", name: "Indonesia", mcode: "+62" },
            { ccode: "IQ", value: "964", name: "Iraq", mcode: "+964" },
            { ccode: "IR", value: "98", name: "Iran", mcode: "+98" },
            { ccode: "IE", value: "353", name: "Ireland", mcode: "+353" },
            { ccode: "IL", value: "972", name: "Israel", mcode: "+972" },
            { ccode: "IT", value: "39", name: "Italy", mcode: "+39" },
            { ccode: "JM", value: "1876", name: "Jamaica", mcode: "+1876" },
            { ccode: "JP", value: "81", name: "Japan", mcode: "+81" },
            { ccode: "JO", value: "962", name: "Jordan", mcode: "+962" },
            { ccode: "KZ", value: "7", name: "Kazakhstan", mcode: "+7" },
            { ccode: "KE", value: "254", name: "Kenya", mcode: "+254" },
            { ccode: "KI", value: "686", name: "Kiribati", mcode: "+686" },
            { ccode: "KP", value: "850", name: "Korea - North", mcode: "+850" },
            { ccode: "KR", value: "82", name: "Korea - South", mcode: "+82" },
            { ccode: "KW", value: "965", name: "Kuwait", mcode: "+965" },
            { ccode: "KG", value: "996", name: "Kyrgyzstan", mcode: "+996" },
            { ccode: "LA", value: "856", name: "Laos", mcode: "+856" },
            { ccode: "LV", value: "371", name: "Latvia", mcode: "+371" },
            { ccode: "LB", value: "961", name: "Lebanon", mcode: "+961" },
            { ccode: "LS", value: "266", name: "Lesotho", mcode: "+266" },
            { ccode: "LR", value: "231", name: "Liberia", mcode: "+231" },
            { ccode: "LY", value: "218", name: "Libya", mcode: "+218" },
            { ccode: "LI", value: "417", name: "Liechtenstein", mcode: "+417" },
            { ccode: "LT", value: "370", name: "Lithuania", mcode: "+370" },
            { ccode: "LU", value: "352", name: "Luxembourg", mcode: "+352" },
            { ccode: "MO", value: "853", name: "Macao", mcode: "+853" },
            { ccode: "MK", value: "389", name: "Macedonia", mcode: "+389" },
            { ccode: "MG", value: "261", name: "Madagascar", mcode: "+261" },
            { ccode: "MW", value: "265", name: "Malawi", mcode: "+265" },
            { ccode: "MY", value: "60", name: "Malaysia", mcode: "+60" },
            { ccode: "MV", value: "960", name: "Maldives", mcode: "+960" },
            { ccode: "ML", value: "223", name: "Mali", mcode: "+223" },
            { ccode: "MT", value: "356", name: "Malta", mcode: "+356" },
            { ccode: "MH", value: "692", name: "Marshall Islands", mcode: "+692" },
            { ccode: "MQ", value: "596", name: "Martinique", mcode: "+596" },
            { ccode: "MR", value: "222", name: "Mauritania", mcode: "+222" },
            { ccode: "YT", value: "269", name: "Mayotte", mcode: "+269" },
            { ccode: "MX", value: "52", name: "Mexico", mcode: "+52" },
            { ccode: "FM", value: "691", name: "Micronesia", mcode: "+691" },
            { ccode: "MD", value: "373", name: "Moldova", mcode: "+373" },
            { ccode: "MC", value: "377", name: "Monaco", mcode: "+377" },
            { ccode: "MN", value: "976", name: "Mongolia", mcode: "+976" },
            { ccode: "MS", value: "1664", name: "Montserrat", mcode: "+1664" },
            { ccode: "MA", value: "212", name: "Morocco", mcode: "+212" },
            { ccode: "MZ", value: "258", name: "Mozambique", mcode: "+258" },
            { ccode: "MN", value: "95", name: "Myanmar", mcode: "+95" },
            { ccode: "NA", value: "264", name: "Namibia", mcode: "+264" },
            { ccode: "NR", value: "674", name: "Nauru", mcode: "+674" },
            { ccode: "NP", value: "977", name: "Nepal", mcode: "+977" },
            { ccode: "NL", value: "31", name: "Netherlands", mcode: "+31" },
            { ccode: "NC", value: "687", name: "New Caledonia", mcode: "+687" },
            { ccode: "NZ", value: "64", name: "New Zealand", mcode: "+64" },
            { ccode: "NI", value: "505", name: "Nicaragua", mcode: "+505" },
            { ccode: "NE", value: "227", name: "Niger", mcode: "+227" },
            { ccode: "NG", value: "234", name: "Nigeria", mcode: "+234" },
            { ccode: "NU", value: "683", name: "Niue", mcode: "+683" },
            { ccode: "NF", value: "672", name: "Norfolk Islands", mcode: "+672" },
            { ccode: "NP", value: "670", name: "Northern Marianas", mcode: "+670" },
            { ccode: "NO", value: "47", name: "Norway", mcode: "+47" },
            { ccode: "OM", value: "968", name: "Oman", mcode: "+968" },
            { ccode: "PK", value: "92", name: "Pakistan", mcode: "+92" },
            { ccode: "PW", value: "680", name: "Palau", mcode: "+680" },
            { ccode: "PA", value: "507", name: "Panama", mcode: "+507" },
            { ccode: "PG", value: "675", name: "Papua New Guinea", mcode: "+675" },
            { ccode: "PY", value: "595", name: "Paraguay", mcode: "+595" },
            { ccode: "PE", value: "51", name: "Peru", mcode: "+51" },
            { ccode: "PH", value: "63", name: "Philippines", mcode: "+63" },
            { ccode: "PL", value: "48", name: "Poland", mcode: "+48" },
            { ccode: "PT", value: "351", name: "Portugal", mcode: "+351" },
            { ccode: "PR", value: "1787", name: "Puerto Rico", mcode: "+1787" },
            { ccode: "QA", value: "974", name: "Qatar", mcode: "+974" },
            { ccode: "RE", value: "262", name: "Reunion", mcode: "+262" },
            { ccode: "RO", value: "40", name: "Romania", mcode: "+40" },
            { ccode: "RU", value: "7", name: "Russia", mcode: "+7" },
            { ccode: "RW", value: "250", name: "Rwanda", mcode: "+250" },
            { ccode: "SM", value: "378", name: "San Marino", mcode: "+378" },
            { ccode: "ST", value: "239", name: "Sao Tome & Principe", mcode: "+239" },
            { ccode: "SA", value: "966", name: "Saudi Arabia", mcode: "+966" },
            { ccode: "SN", value: "221", name: "Senegal", mcode: "+221" },
            { ccode: "CS", value: "381", name: "Serbia", mcode: "+381" },
            { ccode: "SC", value: "248", name: "Seychelles", mcode: "+248" },
            { ccode: "SL", value: "232", name: "Sierra Leone", mcode: "+232" },
            { ccode: "SG", value: "65", name: "Singapore", mcode: "+65" },
            { ccode: "SK", value: "421", name: "Slovak Republic", mcode: "+421" },
            { ccode: "SI", value: "386", name: "Slovenia", mcode: "+386" },
            { ccode: "SB", value: "677", name: "Solomon Islands", mcode: "+677" },
            { ccode: "SO", value: "252", name: "Somalia", mcode: "+252" },
            { ccode: "ZA", value: "27", name: "South Africa", mcode: "+27" },
            { ccode: "ES", value: "34", name: "Spain", mcode: "+34" },
            { ccode: "LK", value: "94", name: "Sri Lanka", mcode: "+94" },
            { ccode: "SH", value: "290", name: "St. Helena", mcode: "+290" },
            { ccode: "KN", value: "1869", name: "St. Kitts", mcode: "+1869" },
            { ccode: "SC", value: "1758", name: "St. Lucia", mcode: "+1758" },
            { ccode: "SR", value: "597", name: "Suriname", mcode: "+597" },
            { ccode: "SD", value: "249", name: "Sudan", mcode: "+249" },
            { ccode: "SZ", value: "268", name: "Swaziland", mcode: "+268" },
            { ccode: "SE", value: "46", name: "Sweden", mcode: "+46" },
            { ccode: "CH", value: "41", name: "Switzerland", mcode: "+41" },
            { ccode: "SY", value: "963", name: "Syria", mcode: "+963" },
            { ccode: "TW", value: "886", name: "Taiwan", mcode: "+886" },
            { ccode: "TJ", value: "992", name: "Tajikistan", mcode: "+992" },
            { ccode: "TH", value: "66", name: "Thailand", mcode: "+66" },
            { ccode: "TG", value: "228", name: "Togo", mcode: "+228" },
            { ccode: "TO", value: "676", name: "Tonga", mcode: "+676" },
            { ccode: "TT", value: "1868", name: "Trinidad & Tobago", mcode: "+1868" },
            { ccode: "TN", value: "216", name: "Tunisia", mcode: "+216" },
            { ccode: "TR", value: "90", name: "Turkey", mcode: "+90" },
            { ccode: "TM", value: "993", name: "Turkmenistan", mcode: "+993" },
            { ccode: "TC", value: "1649", name: "Turks & Caicos Islands", mcode: "+1649" },
            { ccode: "TV", value: "688", name: "Tuvalu", mcode: "+688" },
            { ccode: "UG", value: "256", name: "Uganda", mcode: "+256" },
            { ccode: "UA", value: "380", name: "Ukraine", mcode: "+380" },
            { ccode: "AE", value: "971", name: "United Arab Emirates", mcode: "+971" },
            { ccode: "UY", value: "598", name: "Uruguay", mcode: "+598" },
            { ccode: "UZ", value: "998", name: "Uzbekistan", mcode: "+998" },
            { ccode: "VU", value: "678", name: "Vanuatu", mcode: "+678" },
            { ccode: "VA", value: "379", name: "Vatican City", mcode: "+379" },
            { ccode: "VE", value: "58", name: "Venezuela", mcode: "+58" },
            { ccode: "VN", value: "84", name: "Vietnam", mcode: "+84" },
            { ccode: "VG", value: "1", name: "Virgin Islands - British", mcode: "+1" },
            { ccode: "VI", value: "1", name: "Virgin Islands - US", mcode: "+1" },
            { ccode: "WF", value: "681", name: "Wallis & Futuna", mcode: "+681" },
            { ccode: "YE", value: "969", name: "Yemen", mcode: "North)(+969" },
            { ccode: "YE", value: "967", name: "Yemen", mcode: "South)(+967" },
            { ccode: "ZM", value: "260", name: "Zambia", mcode: "+260" },
            { ccode: "ZW", value: "263", name: "Zimbabwe", mcode: "+263" }
        ];
    };
    CountryPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initialize();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.countries = this.countries.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    CountryPage.prototype.dismiss = function (item) {
        this.viewCtrl.dismiss(item);
    };
    CountryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-country',template:/*ion-inline-start:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/pages/country/country.html"*/'\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of countries" (click)="dismiss(item)">\n      {{ item.name }}\n    </button>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-navbar>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-navbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/pages/country/country.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CountryPage);
    return CountryPage;
}());

//# sourceMappingURL=country.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_package_package__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_country_country__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_success_success__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_package_package__["a" /* PackagePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_country_country__["a" /* CountryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_success_success__["a" /* SuccessPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    backButtonText: '',
                    backButtonIcon: 'ios-arrow-round-back'
                }, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_package_package__["a" /* PackagePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_country_country__["a" /* CountryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_success_success__["a" /* SuccessPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_success_success__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignUpPage */] },
            { title: 'Success', component: __WEBPACK_IMPORTED_MODULE_6__pages_success_success__["a" /* SuccessPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
        this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n  <ion-footer class="aqi-footer">\n      <ion-toolbar>\n        <ion-title padding>\n          <a href="https://twitter.com/apuravchauhan">@apuravchauhan</a></ion-title>\n        <ion-buttons end>\n          <a ion-button icon-only target="_blank" href="https://twitter.com/apuravchauhan">\n            <ion-icon name="logo-twitter"></ion-icon>\n          </a>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/apuravchauhan/Stuff/Code/pricing-task/app/buy-stuff-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map