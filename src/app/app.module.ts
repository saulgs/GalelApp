import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MarketPage } from '../pages/market/market';
import { StartPage } from '../pages/start/start';
import { PreferencesPage } from '../pages/preferences/preferences';
import { MorePage } from '../pages/more/more';
import { RegistratePage } from '../pages/registrate/registrate';
import { CmpregistroPage } from '../pages/cmpregistro/cmpregistro';
import { TerminosPage } from '../pages/terminos/terminos';
import { RegistrarproductoPage } from '../pages/registrarproducto/registrarproducto';
import { CartPage } from '../pages/cart/cart';
import { TucuentaPage } from '../pages/tucuenta/tucuenta';

import { AutoHideDirective } from '../directives/auto-hide/auto-hide';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MarketPage,
    StartPage,
    PreferencesPage,
    MorePage,
    RegistratePage,
    CmpregistroPage,
    TerminosPage,
    RegistrarproductoPage,
    CartPage,
    TucuentaPage,
    AutoHideDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MarketPage,
    StartPage,
    PreferencesPage,
    MorePage,
    RegistratePage,
    CmpregistroPage,
    TerminosPage,
    RegistrarproductoPage,
    CartPage,
    TucuentaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
