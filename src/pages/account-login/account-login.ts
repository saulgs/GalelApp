import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountSignupPage } from '../account-signup/account-signup';
import { AccountForgotPage } from '../account-forgot/account-forgot';

/**
 * Generated class for the AccountLogin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'account-login-page',
  templateUrl: 'account-login.html',
})
export class AccountLoginPage {

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.app.setTitle('Galel - Ingresar');
  }

  onSignup() {
    this.navCtrl.push(AccountSignupPage);
  }

  onForgot() {
    this.navCtrl.push(AccountForgotPage);
  }

}
