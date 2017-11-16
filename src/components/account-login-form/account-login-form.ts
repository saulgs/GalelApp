import { Component } from '@angular/core';
import { App, AlertController, LoadingController, NavController } from 'ionic-angular';

import { MarketPage } from '../../pages/market/market';   //@Brizo
import { User } from '../../providers/user';


@Component({
  selector: 'account-login-form',
  templateUrl: 'account-login-form.html'
})
export class AccountLoginFormComponent {

  login: { username?: string, password?: string } = {};
  submitted = false;
  loader: any = false;

  constructor(
    public app: App,
    public loading: LoadingController,
    public alert: AlertController,
    public navCtrl: NavController,
    public user: User
  ) { }

  public onLogin(form) {
    this.submitted = true;
    if (form.valid) {
      const loader = this.loading.create({
        content: 'Espera un momento..',
        duration: 10000
      });
      loader.present().then(() => {
        this.user.fire
          .auth()
          .signInWithEmailAndPassword(this.login.username, this.login.password)
          .then(() => {
            loader.onDidDismiss(() => {
              this.navCtrl.setRoot(MarketPage).then(() => {   //@Brizo: Market Page
                this.user.sync();
              }).catch(console.debug);
            });
            loader.dismiss();
          })
          .catch((error) => {
            loader.onDidDismiss(() => {
              this.errorHandler(error);
            });
            loader.dismiss();
          });
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

  
}
