import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';

// pages
import { AccountLoginPage } from './account-login';

// components
import { AccountLoginFormComponent } from '../../components/account-login-form/account-login-form';
import { AccountLoginSocialComponent } from '../../components/account-login-social/account-login-social';

@NgModule({
  declarations: [
    AccountLoginPage,
    AccountLoginFormComponent,
    AccountLoginSocialComponent
  ],
  imports: [
    IonicPageModule.forChild(AccountLoginPage),
    IonicModule.forRoot(AccountLoginFormComponent),
    IonicModule.forRoot(AccountLoginSocialComponent)
  ],
  exports: [
    AccountLoginPage,
    AccountLoginFormComponent,
    AccountLoginSocialComponent
  ]
})
export class AccountLoginModule { }
