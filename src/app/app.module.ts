import { FirebaseStorageService } from './../services/firebase-storage/firebase-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";

//Brizo
import { HttpModule } from '@angular/http';
import { File } from '@ionic-native/file';
import { Firebase } from '@ionic-native/firebase';
import { IonicStorageModule } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';

import { MyApp } from './app.component';
import { HomePageModule } from './../pages/home/home.module';
import { CartPageModule } from './../pages/cart/cart.module';
import { MarketPage } from '../pages/market/market';
import { StartPage } from '../pages/start/start';
import { PreferencesPage } from '../pages/preferences/preferences';
import { MorePage } from '../pages/more/more';
import { RegistrarproductoPage } from '../pages/registrarproducto/registrarproducto';
import { TucuentaPage } from '../pages/tucuenta/tucuenta';
import { TufavPage } from '../pages/tufav/tufav';
import { TulistaPage } from '../pages/tulista/tulista';
import { TuordenPage } from '../pages/tuorden/tuorden';


import { AutoHideDirective } from '../directives/auto-hide/auto-hide';
import { ListaDeProductosService } from './../services/lista-de-productos/lista-de-productos.service';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { Camera } from '@ionic-native/camera';
import { ToastService } from './../services/toast/toast.service';

//@Brizo
import { AccountNameModule } from '../pages/account-name/account-name.module';
import { AccountEmailModule } from '../pages/account-email/account-email.module';
import { AccountPasswordModule } from '../pages/account-password/account-password.module';
import { AccountLoginModule } from '../pages/account-login/account-login.module';
import { AccountSignupModule } from '../pages/account-signup/account-signup.module';
import { AccountForgotModule } from '../pages/account-forgot/account-forgot.module';
import { TermsAndConditionsModule } from './../pages/terms-conditions/terms-conditions.module';  //@Brizo, lo cambié

import { Fire } from '../providers/firebase';
import { User } from '../providers/user';
import { Setup } from '../providers/setup';


@NgModule({
  declarations: [
    MyApp,
    MarketPage,
    StartPage,
    PreferencesPage,
    MorePage,
    RegistrarproductoPage,
    TucuentaPage,
    TufavPage,
    TulistaPage,
    TuordenPage,
    AutoHideDirective
  ],
  imports: [
    CartPageModule, //esto es lo correcto
    HomePageModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AccountNameModule,      //@Brizo
    AccountEmailModule,     //@Brizo
    AccountPasswordModule,  //@Brizo
    AccountLoginModule,     //@Brizo
    AccountSignupModule,    //@Brizo
    AccountForgotModule,     //@Brizo
    TermsAndConditionsModule,
    HttpModule,
    BrowserModule,
    IonicStorageModule.forRoot(),    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MarketPage,
    StartPage,
    PreferencesPage,
    MorePage,
    RegistrarproductoPage,
    TucuentaPage,
    TulistaPage,
    TufavPage,
    TuordenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaDeProductosService,
    Camera,
    ToastService,
    User,
    Fire,
    GooglePlus,
    Facebook,
    File,
    Firebase,
    Setup,
    FirebaseStorageService
  ]
})
export class AppModule {}
