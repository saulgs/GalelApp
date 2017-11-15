import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { AccountEmailPage } from './account-email';
import { AccountEmailFormComponent } from '../../components/account-email-form/account-email-form';

@NgModule({
  declarations: [
    AccountEmailPage,
    AccountEmailFormComponent
  ],
  imports: [
    IonicModule.forRoot(AccountEmailFormComponent),
    IonicPageModule.forChild(AccountEmailPage)
  ],
  exports: [
    AccountEmailPage,
    AccountEmailFormComponent
  ]
})
export class AccountEmailModule {}
