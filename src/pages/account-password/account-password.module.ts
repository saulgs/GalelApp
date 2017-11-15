import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { AccountPasswordPage } from './account-password';
import { AccountPasswordFormComponent } from '../../components/account-password-form/account-password-form';
@NgModule({
  declarations: [
    AccountPasswordPage,
    AccountPasswordFormComponent
  ],
  imports: [
    IonicModule.forRoot(AccountPasswordFormComponent),
    IonicPageModule.forChild(AccountPasswordPage),
  ],
  exports: [
    AccountPasswordPage,
    AccountPasswordFormComponent
  ]
})
export class AccountPasswordModule {}
