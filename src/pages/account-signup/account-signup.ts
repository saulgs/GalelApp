import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

import { AccountLoginPage } from '../account-login/account-login';
import { AccountForgotPage } from '../account-forgot/account-forgot';

/**
 * Generated class for the AccountSignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'account-signup-page',
  templateUrl: 'account-signup.html',
})
export class AccountSignupPage {

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.app.setTitle('Galel - Registrarme');
  }

  onLogin() {
    this.navCtrl.push(AccountLoginPage);
  }

  onForgot() {
    this.navCtrl.push(AccountForgotPage);
  }


}
