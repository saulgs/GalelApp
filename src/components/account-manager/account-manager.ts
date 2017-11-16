// stuff
import { Component, NgZone, Input } from '@angular/core';
import { AlertController, LoadingController, NavController, App } from 'ionic-angular';

// pages
import { AccountNamePage } from '../../pages/account-name/account-name';
import { AccountEmailPage } from '../../pages/account-email/account-email';
import { AccountPasswordPage } from '../../pages/account-password/account-password';

/**
 * Generated class for the AccountManager component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular 2 Components.
 * 
 * @export
 * @class AccountManagerComponent
 */
@Component({
  selector: 'account-manager',
  templateUrl: 'account-manager.html'
})
export class AccountManagerComponent {

  @Input() profile: any;
  @Input() facebookConnected: boolean = false;
  @Input() googleConnected: boolean = false;
  admobEnabled: boolean;

  constructor(
    public app: App,
    public zone: NgZone,
    public loading: LoadingController,
    public nav: NavController,
    public alert: AlertController
  ) {
    //this.fetchProfile();
    //this.fetchProviders();
    //this.admobEnabled = user.admob;
  }

  changeName() {
    this.nav.push(AccountNamePage);
  }

  changeEmail() {
    this.nav.push(AccountEmailPage);
  }

  changePassword() {
    this.nav.push(AccountPasswordPage);
  }

  showAlert(title, subtitle) {
    let alert = this.alert.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    return alert.present();
  }

}