import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TucuentaPage } from '../tucuenta/tucuenta';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  gotoCuenta(){
    this.navCtrl.push(TucuentaPage);
  }

  
  gotoLogin(){
   console.log(this.app.getRootNavs()[0]);
   /*
   *No utilizar getRootNav() ya que en el siguiente "Major Release" desaparecera
   * 
   *  this.app.getRootNav().setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
   */
    this.app.getRootNavs()[0].setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
  }
}
