import { FirebaseStorageService } from './../../services/firebase-storage/firebase-storage.service';
import { ToastService } from './../../services/toast/toast.service';
import { Item } from './../../models/item/item.model';
import { ListaDeProductosService } from './../../services/lista-de-productos/lista-de-productos.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarproductoPage } from '../registrarproducto/registrarproducto';
import { CartPage } from '../cart/cart';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  listaDeProductos$: Observable<Item[]>;
  searchQuery: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private productos: ListaDeProductosService,
    private toast: ToastService,
    private storage: FirebaseStorageService
    ) { 
    this.initializeItems();
    }

  initializeItems(){
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
    //this.toast.show(`Se han actualizado los productos.`);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad StartPage');
    //console.log(item.image);
  }

  gotoRegistrarProducto(){
    this.navCtrl.push(RegistrarproductoPage);
  }

  gotoCart(){
    this.navCtrl.push(CartPage);
  }

  addtoCart(){
    //this.navCtrl.push(CartPage);
    console.log();
  }

  getItems(ev: any){
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.listaDeProductos$ = this.listaDeProductos$.filter((Item) => {
        return (Item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
