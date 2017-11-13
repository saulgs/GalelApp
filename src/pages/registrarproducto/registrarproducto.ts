import { MarketPage } from './../market/market';
import { ListaDeProductosService } from './../../services/lista-de-productos/lista-de-productos.service';
import { Item } from './../../models/item/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarketPage } from '../market/market';
 
@IonicPage()
@Component({
  selector: 'page-registrarproducto',
  templateUrl: 'registrarproducto.html',
})
export class RegistrarproductoPage {
  item: Item = {
    name: '',
    description: '',
    category: '',
    price: undefined,
    quantity: undefined,
    color: '',
    mark: ''
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private productos: ListaDeProductosService
  ) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RegistrarproductoPage');
  }

  gotoMarket(){
    this.navCtrl.push(MarketPage);
  }

  ingresarProducto(item: Item){
    this.productos.ingresarProducto(item).then(ref => {
      this.navCtrl.push(MarketPage, { key: ref.key } );
    })
  }

}
