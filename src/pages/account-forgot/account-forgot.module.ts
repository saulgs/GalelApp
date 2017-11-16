import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { AccountForgotPage } from './account-forgot';
import { AccountForgotFormComponent } from '../../components/account-forgot-form/account-forgot-form';
import { AccountLoginModule } from '../account-login/account-login.module';

@NgModule({
  declarations: [
    AccountForgotPage,
    AccountForgotFormComponent
  ],
  imports: [
    AccountLoginModule,
    IonicPageModule.forChild(AccountForgotPage),
    IonicModule.forRoot(AccountForgotFormComponent)
  ],
  exports: [
    AccountForgotPage,
    AccountForgotFormComponent
  ]
})
export class AccountForgotModule { }
