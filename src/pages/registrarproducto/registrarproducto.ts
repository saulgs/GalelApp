import { ToastService } from './../../services/toast/toast.service';
import { MarketPage } from './../market/market';
import { ListaDeProductosService } from './../../services/lista-de-productos/lista-de-productos.service';
import { Item } from './../../models/item/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FirebaseStorage, File } from "./../../services/firebase-storage/firebase-storage.service";

 
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
  
  public file: File;
  public base64Image: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private productos: ListaDeProductosService,
    private camera: Camera,
    private toast: ToastService,
    private firebaseStorage: FirebaseStorage
  ) {}
  
  private options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RegistrarproductoPage');
  }

  gotoMarket(){
    this.navCtrl.push(MarketPage);
  }

  ingresarProducto(item: Item){
    this.productos.ingresarProducto(item).then(ref => {
      this.firebaseStorage.addFile(this.file);
      this.toast.show(`${item.name} se ha guardado`);
      this.navCtrl.push(MarketPage, { key: ref.key } );
    })    
  }

  tomarFoto(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.file.name = this.base64Image;
     }, (err) => {
      // Handle error
      this.toast.show(`No se pudo tomar la fotografia.`);
     });
  }
}
