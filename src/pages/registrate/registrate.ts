import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TermsAndConditionsPage } from '../terms-conditions/terms-conditions';


@Component({
  selector: 'page-registrate',
  templateUrl: 'registrate.html',
})
export class RegistratePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoCompletar(){
    this.navCtrl.push(TermsAndConditionsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistratePage');
  }

}
