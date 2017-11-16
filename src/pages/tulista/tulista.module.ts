import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TulistaPage } from './tulista';

@NgModule({
  declarations: [
    TulistaPage,
  ],
  imports: [
    IonicPageModule.forChild(TulistaPage),
  ],
})
export class TulistaPageModule {}
