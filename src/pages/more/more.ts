import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TucuentaPage } from '../tucuenta/tucuenta';
import { AccountLoginPage} from '../account-login/account-login';

//@Brizo
import { User } from '../../providers/user';
import { ToastService } from './../../services/toast/toast.service';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private app: App, 
    private user: User,
    private toast: ToastService
  ) {   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  gotoCuenta(){
    this.navCtrl.push(TucuentaPage);
  }

  
  gotoLogin(){
    if(this.user.logout()){
      this.toast.show('Ha cerrado sesión con Éxito. ¡Vuelve pronto!');      
      this.app.getRootNavs()[0].setRoot(AccountLoginPage, {}, {animate: true, direction: 'forward'});      
    }
  }
}
