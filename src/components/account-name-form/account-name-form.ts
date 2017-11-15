
import { Component } from '@angular/core';

import { AlertController, LoadingController, NavController } from 'ionic-angular';

@Component({
  selector: 'account-name-form',
  templateUrl: 'account-name-form.html'
})
export class AccountNameFormComponent {
  account: { displayName?: string } = {
    displayName: ''
  };
  submitted: boolean = false;

  constructor(
    public loading: LoadingController,
    public alert: AlertController,
    public navCtrl: NavController
  ) {
/*    this.user.pick().then((user: any) => {
      this.account.displayName = user.displayName;
    });
*/    
  }

  public onRename(form) {

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