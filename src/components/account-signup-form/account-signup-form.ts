import { Component } from '@angular/core';
import { App, NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { User } from '../../providers/user';

import {TermsAndConditionsPage} from '../../pages/terms-conditions/terms-conditions'
import {MarketPage} from '../../pages/market/market';

import { UserModel } from './../../models/user/user.model';         //Brizo
import { SellerModel } from './../../models/user/seller.model';     //Brizo

@Component({
  selector: 'account-signup-form',
  templateUrl: 'account-signup-form.html'
})
export class AccountSignupFormComponent {

  login: {  email?: string,
            username?: string, 
            password?: string, 
            password2?: string,
            number?: string,
            marketName?: string,
            marketDirection?: string,
            toggleValue?: boolean,
            termsConditions?: boolean 
        } = {}; 

  //Brizo
  userData: UserModel = {
    key: '',
    email: '',
    number: undefined,
    pass: '',
    username: ''
  };  

  //Brizo
  sellerData: SellerModel = {
    key: '',
    marketName: '',
    marketPlace: ''
  };  
  
  
  submitted = false;
  signFocus: any;


  constructor(
    public app: App,
    public loading: LoadingController,
    public navCtrl: NavController,
    public alert: AlertController,
    public navParams: NavParams,
    public userAuth: User    
  ) { }
  
  onSignup(form) {
    const loader = this.loading.create({
      content: 'Espera un momento...',
      duration: 3000
    });

    this.submitted = true;
    
    if(this.login.password != this.login.password2){
      this.login.password = '';
      this.login.password2 = '';
      let alert = this.alert.create({
        title: "Error de registro",
        subTitle: "Las contraseñas no coinciden. Intente de nuevo.",
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    if(!this.login.termsConditions){
      let alert = this.alert.create({
        title: "Aún no terminas",
        subTitle: "Debes aceptar los términos y condiciones de Galel.",
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    if (form.valid) {
      loader.present();
      this.userAuth.fire
        .auth()
        .createUserWithEmailAndPassword(this.login.email, this.login.password)
        .then(() => {
          loader.onDidDismiss(() => {
            this.userAuth.sync();
            this.registerNewUserOnDatabase()    //@Brizo 
            this.navCtrl.setRoot(MarketPage);
          });
          loader.dismiss();
        })
        .catch((error) => {
          loader.onDidDismiss(() => {
            this.errorHandler(error);
          });
          loader.dismiss();
        });
    }
  }

  errorHandler(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let handler = User.errorHandler(errorCode, errorMessage);
    let alert = this.alert.create({
      title: handler.title,
      subTitle: handler.message,
      buttons: ['OK']
    });
    alert.present();
  }

  //Brizo: Registrar un nuevo usuario en Database de firebase segun el UID de quien se haya registrado exitosamente.
  //        el uid sale desde el provider user.ts con current().uid
  registerNewUserOnDatabase(){
    //User info
    this.userData.key = this.userAuth.current().uid;
    this.userData.email = this.login.email;
    this.userData.number = this.login.number;
    this.userData.pass = this.login.password;
    this.userData.username = this.login.username;
    this.userAuth.newUserOnDatabase(this.userData);    
    
    //Seller info
    if(this.login.toggleValue){
      this.sellerData.key = this.userAuth.current().uid;      
      this.sellerData.marketName = this.login.marketName;
      this.sellerData.marketPlace = this.login.marketDirection;
    }
    this.userAuth.newSellerOnDatabase(this.sellerData);        
  }



  onTerms(){
    this.navCtrl.push(TermsAndConditionsPage);
  }

}
