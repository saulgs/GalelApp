import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MarketPage } from '../market/market'
import { RegistratePage } from '../registrate/registrate';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoMarket(){
    this.navCtrl.push(MarketPage);
  }

  gotoRegistrate(){
    this.navCtrl.push(RegistratePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
