import { Component } from '@angular/core';
import { App, AlertController, LoadingController, NavController } from 'ionic-angular';

import { MarketPage } from '../../pages/market/market';   //@Brizo


@Component({
  selector: 'account-login-form',
  templateUrl: 'account-login-form.html'
})
export class AccountLoginFormComponent {
  login: { email?: string, password?: string } = {};
  submitted = false;
  loader: any = false;

  constructor(
    public app: App,
    public loading: LoadingController,
    public alert: AlertController,
    public navCtrl: NavController
  ) { }

  public onLogin(form) {
    this.navCtrl.setRoot(MarketPage);
  }

}
