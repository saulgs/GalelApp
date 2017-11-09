import { Item } from './../../models/item.model';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarproductoPage } from './registrarproducto';

@NgModule({
  declarations: [
    RegistrarproductoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarproductoPage),
  ],
})
export class RegistrarproductoPageModule {
  item: Item = {
    name: "",
    description: "",
    category: "",
    price: 0,
    quantity: 0,
    color: "",
    marca: ""
  };
}
