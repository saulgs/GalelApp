import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { AccountSignupPage } from './account-signup';
import { AccountSignupFormComponent } from '../../components/account-signup-form/account-signup-form';

import { AccountLoginModule } from '../account-login/account-login.module';

@NgModule({
  declarations: [
    AccountSignupPage,
    AccountSignupFormComponent
  ],
  imports: [
    AccountLoginModule,
    IonicModule.forRoot(AccountSignupFormComponent),
    IonicPageModule.forChild(AccountSignupPage),
  ],
  exports: [
    AccountSignupPage,
    AccountSignupFormComponent
  ]
})
export class AccountSignupModule { }
