import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CmpregistroPage } from '../cmpregistro/cmpregistro';

/**
 * Generated class for the RegistratePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-registrate',
  templateUrl: 'registrate.html',
})
export class RegistratePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoCompletar(){
    this.navCtrl.push(CmpregistroPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistratePage');
  }

}
