import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

/*
  Generated class for the AccountEmailForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'account-email-form',
  templateUrl: 'account-email-form.html'
})
export class AccountEmailFormComponent {
/*  account: { email?: string } = {
    email: this.user.fire.auth().currentUser.email
  };
  */
  submitted = false;
  constructor(
    public loading: LoadingController,
    public nav: NavController,
    public alert: AlertController,
  ) { 

  }

  showAlert(title, subtitle) {
    let alert = this.alert.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    return alert.present();
  }

}