import { Component } from '@angular/core';
import { LoadingController, AlertController, ActionSheetController } from 'ionic-angular';

/*
  Generated class for the AccountForgotForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'account-forgot-form',
  templateUrl: 'account-forgot-form.html'
})
export class AccountForgotFormComponent {

  login: { email?: string } = {};
  submitted = false;

  constructor(
    public loading: LoadingController,
    public alert: AlertController,
    public actionSheet: ActionSheetController
  ) { 

  }

  onForgot(form) {

  }

  public showAlert(title, subtitle) {
    let alert = this.alert.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }

}
