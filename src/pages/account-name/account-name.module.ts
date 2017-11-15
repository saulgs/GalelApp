import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { AccountNamePage } from './account-name';

import { AccountNameFormComponent } from '../../components/account-name-form/account-name-form';

@NgModule({
  declarations: [
    AccountNamePage,
    AccountNameFormComponent
  ],
  imports: [
    IonicModule.forRoot(AccountNameFormComponent),
    IonicPageModule.forChild(AccountNamePage)
  ],
  exports: [
    AccountNamePage,
    AccountNameFormComponent
  ]
})
export class AccountNameModule { }
