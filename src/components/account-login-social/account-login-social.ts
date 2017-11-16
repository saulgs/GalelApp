import { Component } from '@angular/core';
import { AlertController, NavController, App } from 'ionic-angular';
import { User } from '../../providers/user';

import {MarketPage} from '../../pages/market/market'

@Component({
  selector: 'account-login-social',
  templateUrl: 'account-login-social.html'
})
export class AccountLoginSocialComponent {
  text: string;

  constructor(
    public app: App,
    public alert: AlertController,
    public navCtrl: NavController,
    public user: User
  ) { }

  onLogin(provider) {
    switch (provider) {
      //
      // Google Login, solo haciendo bulto
      //
      case 'google':
        this.user.authWithGoogle().then((authData: any) => {
          console.log('authData: ' + authData);
          let googleProviderCredential = this.user.fire.auth.GoogleAuthProvider.credential(authData.idToken, authData.accessToken);
          this.doLogin(googleProviderCredential);
        }).catch((error) => {
          console.debug('error auth with google: ');
          console.debug(error);
          alert(error)
        });
        break;
      //
      // Facebook Login
      //
      case 'facebook':
        this.user.authWithFacebook().then((token) => {
          let facebookProviderCredential = this.user.fire.auth.FacebookAuthProvider.credential(token);
          this.doLogin(facebookProviderCredential);
        }).catch((error) => {
          console.debug('error auth with fb: ');
          console.debug(error);
        });
        break;
    }
  }


  doLogin(provider) {
    return this.user.fire.auth().signInWithCredential(provider).then((success) => {
      // we dont have to do nothing because there are already an event for when user is logged
      this.navCtrl.setRoot(MarketPage).then(() => {   //@Brizo: Market Page
        this.user.sync();
      }).catch(console.debug);
    }, (error) => {
      console.debug('error sign in with credential: ');
      console.debug(error);
      this.errorHandler(error);
    }).catch(console.debug);
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

}