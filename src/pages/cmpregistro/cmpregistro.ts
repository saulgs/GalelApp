import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TerminosPage } from '../terminos/terminos';
import { MarketPage } from '../market/market'

/**
 * Generated class for the CmpregistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cmpregistro',
  templateUrl: 'cmpregistro.html',
})
export class CmpregistroPage {

  toggleValue: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CmpregistroPage');
  }

  gotoTerminos(){
    this.navCtrl.push(TerminosPage);
  }

  gotoMarket(){
    this.navCtrl.push(MarketPage);
  }

}
