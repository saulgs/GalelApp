import { Component } from '@angular/core';
import { App, NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { User } from '../../providers/user';

import {TermsAndConditionsPage} from '../../pages/terms-conditions/terms-conditions'
import {MarketPage} from '../../pages/market/market';

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
    public navParams: NavParams,
    public user: User
  ) { }
  
  onSignup(form) {
    const loader = this.loading.create({
      content: 'Please wait..',
      duration: 3000
    });
    this.submitted = true;
    if (form.valid) {
      loader.present();
      this.user.fire
        .auth()
        .createUserWithEmailAndPassword(this.login.email, this.login.password)
        .then(() => {
          loader.onDidDismiss(() => {
            this.user.sync();
            this.navCtrl.setRoot(MarketPage);
          });
          loader.dismiss();
        })
        .catch((error) => {
          loader.onDidDismiss(() => {
            this.errorHandler(error);
          });
          loader.dismiss();
        });
    }
  }

  errorHandler(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let handler = User.errorHandler(errorCode, errorMessage);
    let alert = this.alert.create({
      title: handler.title,
      subTitle: handler.message,
      buttons: ['OK']
    });
    alert.present();
  }

  onTerms(){
    this.navCtrl.push(TermsAndConditionsPage);
  }

}
