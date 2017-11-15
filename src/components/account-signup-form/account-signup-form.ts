import { Component } from '@angular/core';
import { App, NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import {TermsAndConditionsPage} from '../../pages/terms-conditions/terms-conditions'

/**
 * Generated class for the AccountSignupFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'account-signup-form',
  templateUrl: 'account-signup-form.html'
})
export class AccountSignupFormComponent {

  login: {  email?: string, 
            password?: string, 
            password2?: string,
            number?: string,
            market?: string,
            direction?: string,
            toggleValue?: boolean 
        } = {};
  submitted = false;
  signFocus: any;


  constructor(
    public app: App,
    public loading: LoadingController,
    public navCtrl: NavController,
    public alert: AlertController,
    public navParams: NavParams
  ) { }
  
  onSignup(form) {

  }

  onTerms(){
    this.navCtrl.push(TermsAndConditionsPage);
  }

}
