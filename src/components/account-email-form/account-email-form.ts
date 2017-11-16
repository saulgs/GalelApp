import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import {User} from '../../providers/user';


@Component({
  selector: 'account-email-form',
  templateUrl: 'account-email-form.html'
})
export class AccountEmailFormComponent {

  account: { email?: string } = {
    email: this.user.fire.auth().currentUser.email
  };
  submitted = false;

  constructor(
    public loading: LoadingController,
    public nav: NavController,
    public alert: AlertController,
    public user: User
  ){   }

  public onModify(form) {
    const loader = this.loading.create({
      content: 'Espera un momento..',
      duration: 10000
    });
    this.submitted = true;
    if (form.valid) {
      loader.present().then(() => {
        this.user.current().updateEmail(this.account.email).then(() => {
          this.user.sync().then(() => { // persists on db
            loader.onDidDismiss(() => {
              this.showAlert('Exito', 'Su correo ha sido cambiado.');
            })
            loader.dismiss();
          }).catch(console.debug);
        }, (e) => {
          loader.onDidDismiss(() => {
            this.errorHandler(e);
          })
          loader.dismiss();
        });
      }).catch(console.debug);
    }
  }

  showAlert(title, subtitle) {
    let alert = this.alert.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    return alert.present();
  }

  errorHandler(error){
    let errorCode = error.code;
    let errorMessage = error.message;
    let handler = User.errorHandler(errorCode, errorMessage);
    this.showAlert(handler.title, handler.message);
  }


}