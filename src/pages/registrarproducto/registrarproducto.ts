import { Item } from './../../models/item/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarketPage } from '../market/market';

/**
 * Generated class for the RegistrarproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarproducto',
  templateUrl: 'registrarproducto.html',
})
export class RegistrarproductoPage {
  item: Item = {
    name: "",
    description: "",
    category: "",
    price: undefined,
    quantity: undefined,
    color: "",
    mark: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarproductoPage');
  }

  gotoMarket(){
    this.navCtrl.push(MarketPage);
  }

}
