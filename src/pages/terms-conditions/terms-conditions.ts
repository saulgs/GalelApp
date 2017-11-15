import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'terms-conditions',
  templateUrl: 'terms-conditions.html',
})
export class TermsAndConditionsPage {

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsAndConditionsPage');
  }

}
