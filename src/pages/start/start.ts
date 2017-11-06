import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarproductoPage } from '../registrarproducto/registrarproducto';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  gotoRegistrarProducto(){
    this.navCtrl.push(RegistrarproductoPage);
  }

  gotoCart(){
    this.navCtrl.push(CartPage);
  }

}
