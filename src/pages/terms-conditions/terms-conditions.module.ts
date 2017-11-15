import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsAndConditionsPage } from './terms-conditions';

@NgModule({
  declarations: [
    TermsAndConditionsPage,
  ],
  imports: [
    IonicPageModule.forChild(TermsAndConditionsPage),
  ],
  exports:[
    TermsAndConditionsPage
  ]
})
export class TermsAndConditionsModule {}
