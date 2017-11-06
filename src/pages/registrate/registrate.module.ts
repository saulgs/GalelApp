import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistratePage } from './registrate';

@NgModule({
  declarations: [
    RegistratePage,
  ],
  imports: [
    IonicPageModule.forChild(RegistratePage),
  ],
})
export class RegistratePageModule {}
