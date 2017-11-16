import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';


import { AccountLoginPage } from '../account-login/account-login';
import { AccountSignupPage } from '../account-signup/account-signup';


/**
 * Generated class for the AccountForgotPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'account-forgot-page',
  templateUrl: 'account-forgot.html',
})
export class AccountForgotPage {

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.app.setTitle('Forgot Password');
  }

  onSignup() {
    this.navCtrl.push(AccountSignupPage);
  }

  onLogin() {
    this.navCtrl.push(AccountLoginPage);
  }

}
