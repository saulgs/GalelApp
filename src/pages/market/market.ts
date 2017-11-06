import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { StartPage } from '../start/start';
import { PreferencesPage } from '../preferences/preferences';
import { MorePage } from '../more/more';

/**
 * Generated class for the MarketPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-market',
  templateUrl: 'market.html'
})
export class MarketPage {

  startRoot = StartPage;
  preferencesRoot = PreferencesPage;
  moreRoot = MorePage;


  constructor(public navCtrl: NavController) {}

}
