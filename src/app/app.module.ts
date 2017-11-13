import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";

import { MyApp } from './app.component';
import { HomePageModule } from './../pages/home/home.module';
import { CartPageModule } from './../pages/cart/cart.module';
//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MarketPage } from '../pages/market/market';
import { StartPage } from '../pages/start/start';
import { PreferencesPage } from '../pages/preferences/preferences';
import { MorePage } from '../pages/more/more';
import { RegistratePage } from '../pages/registrate/registrate';
import { CmpregistroPage } from '../pages/cmpregistro/cmpregistro';
import { TerminosPage } from '../pages/terminos/terminos';
import { RegistrarproductoPage } from '../pages/registrarproducto/registrarproducto';
//import { CartPage } from '../pages/cart/cart';  //se comenta porque se tiene que importar el cartpage.module
import { TucuentaPage } from '../pages/tucuenta/tucuenta';

import { AutoHideDirective } from '../directives/auto-hide/auto-hide';
import { ListaDeProductosService } from './../services/lista-de-productos/lista-de-productos.service';
import { FIREBASE_CONFIG } from './firebase.credentials';


@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    LoginPage,
    MarketPage,
    StartPage,
    PreferencesPage,
    MorePage,
    RegistratePage,
    CmpregistroPage,
    TerminosPage,
    RegistrarproductoPage,
    //CartPage, //esto es incorrecto
    TucuentaPage,
    AutoHideDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CartPageModule, //esto es lo correcto
    HomePageModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    LoginPage,
    MarketPage,
    StartPage,
    PreferencesPage,
    MorePage,
    RegistratePage,
    CmpregistroPage,
    TerminosPage,
    RegistrarproductoPage,
    //CartPage,
    TucuentaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaDeProductosService
  ]
})
export class AppModule {}
