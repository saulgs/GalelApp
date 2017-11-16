import { Component } from '@angular/core';
import { AlertController, NavController, App } from 'ionic-angular';

/**
 * Generated class for the AccountLoginSocialComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'account-login-social',
  templateUrl: 'account-login-social.html'
})
export class AccountLoginSocialComponent {
  text: string;

  constructor(
    public app: App,
    public alert: AlertController,
    public navCtrl: NavController
  ) {

   }

  onLogin(provider) {

  }

  doLogin(provider) {

  }

}