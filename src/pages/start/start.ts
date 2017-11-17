import { ToastService } from './../../services/toast/toast.service';
import { Item } from './../../models/item/item.model';
import { ListaDeProductosService } from './../../services/lista-de-productos/lista-de-productos.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarproductoPage } from '../registrarproducto/registrarproducto';
import { CartPage } from '../cart/cart';
import { Observable } from 'rxjs/Observable';

import { CartItemModel } from './../../models/item/cart_item.model';         //@Brizo
import {User} from '../../providers/user';                              //@Brizo

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  listaDeProductos$: Observable<Item[]>;

  //Brizo
  cartItemData: CartItemModel = {
    userKey: '',
    itemKey: '',
    itemName: '',
    price: undefined,
    sellBy: '',
    state: ''  
  };  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private productos: ListaDeProductosService,
    private toast: ToastService,
    private user: User
  ) { 
    this.listaDeProductos$ = this.productos
    .getListaDeProductos() //Una lista de la Base de Datos
    .snapshotChanges() // Los datos de forma (llave, valor)
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  gotoRegistrarProducto(){
    this.navCtrl.push(RegistrarproductoPage);
  }

  gotoCart(){
    this.navCtrl.push(CartPage);
  }


  addtoCart(item){
    console.log("addToCart()");
    this.cartItemData.userKey = this.user.current().uid;
    this.cartItemData.itemKey = item.key;
    this.cartItemData.itemName = item.name;
    this.cartItemData.price = item.price;
    this.cartItemData.sellBy = '';
    this.cartItemData.state = 'En carrito'

    if(this.user.addItemToCartOnDatabase(this.cartItemData)){
      this.toast.show(`${item.name} agregado a su carrito.`);      
    }

  }

}
