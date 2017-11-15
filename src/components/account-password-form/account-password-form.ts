import { Component } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';

/*
  Generated class for the AccountPasswordForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'account-password-form',
  templateUrl: 'account-password-form.html'
})
export class AccountPasswordFormComponent {

  account: { password?: string } = {
    password: ''
  };

  submitted = false;

  constructor(
    public loading: LoadingController,
    public alert: AlertController
  ) { }

  onModify(form) {

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