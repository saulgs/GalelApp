import { Component } from '@angular/core';
import { LoadingController, AlertController, ActionSheetController } from 'ionic-angular';
import { User } from '../../providers/user';


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
    public actionSheet: ActionSheetController,
    public user: User
  ) { 

  }

  onForgot(form) {
    let loader = this.loading.create({
      content: 'Espera un momento..',
      duration: 3000
    });

    this.submitted = true;
    if (form.valid) {
      loader.present()
        .then(() => {
          this.user.fire.auth().sendPasswordResetEmail(this.login.email)
            .then(() => {
              loader.onDidDismiss(() => {
                this.showAlert('Correo enviado', 'Revisa tu bandeja de mensajes.');
              });
              loader.dismiss();
            })
            .catch((error) => {
              loader.onDidDismiss(() => {
                this.errorHandler(error);
              });
              loader.dismiss();
            });
        }).catch(console.debug);
    }
  }

  public showAlert(title, subtitle) {
    let alert = this.alert.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }

  public errorHandler(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let handler = User.errorHandler(errorCode, errorMessage);
    this.showAlert(handler.title, handler.message);
  }

}
