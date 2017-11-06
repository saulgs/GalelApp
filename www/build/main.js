webpackJsonp([9],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.gotoMarket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__market_market__["a" /* MarketPage */]);
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"C:\Users\SGS31\Desktop\LearnProject\src\pages\cart\cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tus carrito!</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <p>Ups!</p><br>\n <p>Por los momentos no has agregado ningun producto</p><br>\n <p>Explora en nuestra tienda!</p><br>\n <div style="font-size:0px; height:40px; line-height:0px;"></div><!-- SPACER -->\n <a ion-button full> Procede a cancelar! </a>\n <a ion-button full (click)="gotoMarket()"> Explora en Galel! </a>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SGS31\Desktop\LearnProject\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrarproducto_registrarproducto__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartPage = (function () {
    function StartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPage');
    };
    StartPage.prototype.gotoRegistrarProducto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registrarproducto_registrarproducto__["a" /* RegistrarproductoPage */]);
    };
    StartPage.prototype.gotoCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
    };
    return StartPage;
}());
StartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-start',template:/*ion-inline-start:"C:\Users\SGS31\Desktop\LearnProject\src\pages\start\start.html"*/'<!--\n  Generated template for the StartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Explora en Galel!</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="gotoCart()">\n        <ion-icon name="md-cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-searchbar\n  [showCancelButton]="shouldShowCancel">\n  </ion-searchbar>\n\n</ion-header>\n\n\n<ion-content padding auto-hide>\n\n  <ion-card>\n    <img src="../../assets/catalogo/cartera-cuero.jpg"/>\n    <ion-card-content>\n      <ion-card-title>\n        Cartera de cuero\n        </ion-card-title>\n      <p>\n        Cartera de cuero hecha en Valle de Angeles\n      </p>\n      <p>\n        Precio: $20.00\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <img src="../../assets/catalogo/ceramica-lenca.jpg"/>\n    <ion-card-content>\n      <ion-card-title>\n        Jarron lenca\n        </ion-card-title>\n      <p>\n        Jarron de cerammica lenca hecho en Guajiquiro, La Paz\n      </p>\n      <p>\n        Precio: $20.00\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <img src="../../assets/catalogo/ceramica-maya.jpg"/>\n    <ion-card-content>\n      <ion-card-title>\n        Jarron Maya\n        </ion-card-title>\n      <p>\n        Jarron maya hecho en Santa Rosa de Copan\n      </p>\n      <p>\n        Precio: $20.00\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <img src="../../assets/catalogo/cofre-madera.jpg"/>\n    <ion-card-content>\n      <ion-card-title>\n        Cofre de madera\n        </ion-card-title>\n      <p>\n        Cofre de madera hecho en Ojojona, FM\n      </p>\n      <p>\n        Precio: $20.00\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <img src="../../assets/catalogo/hamacas.jpg"/>\n    <ion-card-content>\n      <ion-card-title>\n        Hamaca\n        </ion-card-title>\n      <p>\n        Hamaca hecha en San Antonio de Oriente, FM\n      </p>\n      <p>\n        Precio: $20.00\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <img src="../../assets/catalogo/sandalias-cuero.jpg"/>\n    <ion-card-content>\n      <ion-card-title>\n        Sandalias de cuero\n        </ion-card-title>\n      <p>\n        Sandalias de cuero hecha en Valle de Angeles\n      </p>\n      <p>\n        Precio: $20.00\n      </p>\n    </ion-card-content>\n  </ion-card>\n  \n\n    <ion-fab bottom right #fab>\n      <a ion-fab (click)="gotoRegistrarProducto()">\n        <ion-icon name="md-add"></ion-icon>\n      </a>\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\SGS31\Desktop\LearnProject\src\pages\start\start.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], StartPage);

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegistrarproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrarproductoPage = (function () {
    function RegistrarproductoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegistrarproductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrarproductoPage');
    };
    RegistrarproductoPage.prototype.gotoMarket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__market_market__["a" /* MarketPage */]);
    };
    return RegistrarproductoPage;
}());
RegistrarproductoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registrarproducto',template:/*ion-inline-start:"C:\Users\SGS31\Desktop\LearnProject\src\pages\registrarproducto\registrarproducto.html"*/'<!--\n  Generated template for the RegistrarproductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Vende tus artesanías!</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label color="dark" stacked>Nombre del producto</ion-label>\n    <ion-input type="text" placeholder="Ej: Zapatilla formal Otti"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="dark" stacked>Descripción</ion-label>\n    <ion-input type="text" placeholder="Ej: Zapatilla de cuero estilo oxford"></ion-input>\n  </ion-item>\n  <ion-list>\n    <ion-label color="dark" stacked>Categorías</ion-label>\n    <ion-item>\n      <ion-label>Alfareria</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Cueros</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Calzado</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Muebles</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Carpinteria</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <ion-item>\n    <ion-label color="dark" stacked>Precio</ion-label>\n    <ion-input type="text" placeholder="Ej: 130.00"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="dark" stacked>Cantidad</ion-label>\n    <ion-input type="number" placeholder="Ej: 5"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="dark" stacked>Color</ion-label>\n    <ion-input type="text" placeholder="Ej: café"></ion-input>\n  </ion-item>\n   <ion-item>\n    <ion-label color="dark" stacked>Marca</ion-label>\n    <ion-input type="text" placeholder="Ej: Otti"></ion-input>\n  </ion-item>\n  <a ion-button full (click)="gotoMarket()"> Vende ya! </a>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SGS31\Desktop\LearnProject\src\pages\registrarproducto\registrarproducto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RegistrarproductoPage);

//# sourceMappingURL=registrarproducto.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreferencesPage = (function () {
    function PreferencesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PreferencesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreferencesPage');
    };
    PreferencesPage.prototype.gotoMarket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__market_market__["a" /* MarketPage */]);
    };
    return PreferencesPage;
}());
PreferencesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-preferences',template:/*ion-inline-start:"C:\Users\SGS31\Desktop\LearnProject\src\pages\preferences\preferences.html"*/'<!--\n  Generated template for the PreferencesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Encuentra lo que quieres!</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h4>Categorías</h4>\n  <ion-list>\n    <ion-item>\n      <ion-label>Alfareria</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Cueros</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Calzado</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Muebles</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Carpinteria</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n  </ion-list>\n   <ion-item>\n    <ion-label color="dark" stacked>Precio mínimo</ion-label>\n    <ion-input type="text" placeholder="Ej: 13.00"></ion-input>\n  </ion-item>\n   <ion-item>\n    <ion-label color="dark" stacked>Precio máximo</ion-label>\n    <ion-input type="text" placeholder="Ej: 130.00"></ion-input>\n  </ion-item>\n  <a ion-button full (click)="gotoMarket()"> Busca ya! </a>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SGS31\Desktop\LearnProject\src\pages\preferences\preferences.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PreferencesPage);

//# sourceMappingURL=preferences.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tucuenta_tucuenta__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MorePage = (function () {
    function MorePage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    MorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MorePage');
    };
    MorePage.prototype.gotoCuenta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tucuenta_tucuenta__["a" /* TucuentaPage */]);
    };
    MorePage.prototype.gotoLogin = function () {
        console.log(this.app.getRootNavs()[0]);
        /*
        *No utilizar getRootNav() ya que en el siguiente "Major Release" desaparecera
        *
        *  this.app.getRootNav().setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
        */
        this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {}, { animate: true, direction: 'forward' });
    };
    return MorePage;
}());
MorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-more',template:/*ion-inline-start:"C:\Users\SGS31\Desktop\LearnProject\src\pages\more\more.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mas opciones!</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item (click)="gotoCuenta()">\n      <ion-icon name="md-body" item-start></ion-icon> Tu cuenta \n    </button>\n\n    <button ion-item> \n      <ion-icon name="md-list" item-start></ion-icon> Tu lista\n    </button>\n\n    <button ion-item> \n      <ion-icon name="md-basket" item-start></ion-icon> Tus ordenes \n    </button>\n  \n    <button ion-item> \n      <ion-icon name="md-heart" item-start></ion-icon> Tus recomendaciones \n    </button>\n  <!-- El metodo gotoLogin() aqui es diferente -->\n  <!-- Al navegar dentro de las tabs se crea un nav stack[] -->\n  <!-- Al hacer un nav push para salir de las tabs ocurre un problema -->\n  <!-- Abre la pagina de login dentro de las tabs -->\n  <!-- esto ocurre debido a que en el stack de navegacion todavia esta la pagina principal de tabs -->\n  <!-- y solo sustituye la tab actual por la pagina de login -->\n  <!-- para solucionarlo se debe obtener el id de la pagina Root de tabs -->\n  <!-- y sustituirlo por la de login, de esta manera se crea un nuevo stack de navegacion -->\n  <!-- y podemos navegar de nuevo con tranquilidad por la app -->\n  <!-- :v puede verlo en el archivo "src\pages\more\more.ts" v: -->\n    <button ion-item (click)="gotoLogin()">\n      <ion-icon name="md-log-out" item-start></ion-icon> Cerrar sesión \n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\SGS31\Desktop\LearnProject\src\pages\more\more.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], MorePage);

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TerminosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TerminosPage = (function () {
    function TerminosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TerminosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TerminosPage');
    };
    return TerminosPage;
}());
TerminosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terminos',template:/*ion-inline-start:"C:\Users\SGS31\Desktop\LearnProject\src\pages\terminos\terminos.html"*/'<!--\n  Generated template for the TerminosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Términos y Condiciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Términos y condiciones de uso de Galel - Souvenir Market</h3>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum pulvinar velit ultrices viverra. Curabitur ac elit elementum, volutpat mi nec, tincidunt neque. Phasellus sit amet porta tortor, ac efficitur arcu. Donec at egestas ipsum. Phasellus sit amet erat augue. Nullam pretium lacinia vehicula. Sed eu tincidunt nulla. Aliquam at turpis pellentesque, posuere neque eget, finibus arcu. Vestibulum ac accumsan odio. Nulla lacinia, leo vel dictum pulvinar, magna neque sodales turpis, vel feugiat nisl lacus at ante. Maecenas sed tellus vel nulla facilisis semper. Aliquam erat volutpat. Ut venenatis nisl sit amet efficitur finibus. Aenean facilisis placerat tellus, a vulputate ex pretium ac.\n\nSed volutpat vitae ligula ac auctor. Aenean ut vestibulum nisl. Praesent posuere pretium purus vitae tristique. Donec massa leo, lacinia in turpis quis, semper mollis massa. Donec pharetra nibh ipsum, quis elementum sem mattis in. Nullam quis nisl quam. Nam vel urna ornare, rutrum risus a, egestas turpis. Nulla eu mollis urna. Proin dignissim lacus quis rutrum scelerisque. Mauris ut commodo tellus. Suspendisse iaculis, eros sed auctor vehicula, quam nisl bibendum lorem, at mattis sem nisi finibus urna.\n\nNunc lobortis varius ligula. Praesent eleifend sapien non nisl molestie aliquet at eu elit. Fusce dignissim justo quis porttitor sagittis. Phasellus id ligula ex. Cras interdum at ligula vehicula pretium. Nam eu odio a nisl maximus scelerisque. Maecenas venenatis sem ut magna sollicitudin, ac mollis sem convallis. Donec volutpat elit dui, sit amet sagittis tortor hendrerit a. Maecenas nunc lectus, faucibus eget nisl at, ultrices rutrum velit. Nullam consectetur purus id eros consectetur tincidunt. Curabitur nibh tortor, auctor non sagittis non, porta sed nisl.\n\nNulla sit amet blandit risus. Proin vel semper velit. Aenean at turpis dignissim, volutpat odio cursus, convallis dui. Etiam tristique tristique ante in mollis. Mauris suscipit metus et ipsum consequat, non sagittis nunc congue. Praesent mi ex, sodales sodales eros sit amet, cursus accumsan magna. Sed gravida luctus sodales. Aliquam sed tortor quis metus rhoncus consequat.\n\nVivamus et nunc sit amet leo malesuada consequat ac eu dui. Aenean porttitor commodo tortor a placerat. Nunc nibh diam, feugiat et velit ac, iaculis placerat est. Nunc scelerisque nisi nec viverra lacinia. Duis aliquet imperdiet fermentum. Morbi sodales leo magna, at consequat lectus lobortis vitae. Ut eu euismod justo, eu tempor lorem. Donec vestibulum sit amet diam et rutrum. Donec sed nulla imperdiet velit volutpat interdum eu nec massa. Quisque consequat eleifend purus at eleifend. Vestibulum id elementum arcu, vel tincidunt lectus. Praesent ut tellus eget dolor vehicula dictum. Praesent metus purus, fringilla nec velit id, facilisis vulputate velit. Aliquam eleifend luctus odio vitae ornare.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SGS31\Desktop\LearnProject\src\pages\terminos\terminos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TerminosPage);

//# sourceMappingURL=terminos.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TucuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TucuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TucuentaPage = (function () {
    function TucuentaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TucuentaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TucuentaPage');
    };
    return TucuentaPage;
}());
TucuentaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tucuenta',template:/*ion-inline-start:"C:\Users\SGS31\Desktop\LearnProject\src\pages\tucuenta\tucuenta.html"*/'<!--\n  Generated template for the TucuentaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tu cuenta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n      <h3>Informacion del Usuario</h3>\n      <br>\n      <h4>Axel Córdova</h4>\n      <br>\n\n      <h4>Direccion</h4>\n      <p>\n        2154 Nw 23rd Ct\n        <br> Miami, Fl 33142-7275\n        <br> Estados Unidos\n        <br>\n\n      </p>\n      <br>\n      <br>\n\n      <h4>Ciudad/Departamento</h4>\n      <p>\n        Tegucigalpa, Francisco Morazan\n      </p>\n      <br>\n      <br>\n\n      <h4>Metodo de pago</h4>\n      <p>\n        Tarjeta VISA: XXX-XXXX-XXXX-3456\n        <br> Internacional\n      </p>\n      <br>\n      <br>\n\n      <h4>Numero de telefono</h4>\n      <p>\n        Número de teléfono: +504 3305-6603\n      </p>\n      <br>\n      <br>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SGS31\Desktop\LearnProject\src\pages\tucuenta\tucuenta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TucuentaPage);

//# sourceMappingURL=tucuenta.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		274,
		8
	],
	"../pages/cuentausuario/cuentausuario.module": [
		275,
		0
	],
	"../pages/market/market.module": [
		276,
		7
	],
	"../pages/more/more.module": [
		279,
		6
	],
	"../pages/preferences/preferences.module": [
		277,
		5
	],
	"../pages/registrarproducto/registrarproducto.module": [
		278,
		4
	],
	"../pages/start/start.module": [
		282,
		3
	],
	"../pages/terminos/terminos.module": [
		280,
		2
	],
	"../pages/tucuenta/tucuenta.module": [
		281,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistratePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cmpregistro_cmpregistro__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegistratePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistratePage = (function () {
    function RegistratePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegistratePage.prototype.gotoCompletar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cmpregistro_cmpregistro__["a" /* CmpregistroPage */]);
    };
    RegistratePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistratePage');
    };
    return RegistratePage;
}());
RegistratePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registrate',template:/*ion-inline-start:"C:\Users\SGS31\Desktop\LearnProject\src\pages\registrate\registrate.html"*/'<!--\n  Generated template for the RegistratePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrate en Galel!</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label color="dark" stacked>Tu nombre</ion-label>\n    <ion-input type="email" placeholder="Nombre completo"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="dark" stacked>Correo</ion-label>\n    <ion-input type="password" placeholder="email@example.com"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="dark" stacked>Contraseña</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n  <div>\n    <a ion-button full (click)="gotoCompletar()"> Registrate </a>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\SGS31\Desktop\LearnProject\src\pages\registrate\registrate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RegistratePage);

//# sourceMappingURL=registrate.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmpregistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminos_terminos__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__market_market__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CmpregistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CmpregistroPage = (function () {
    function CmpregistroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toggleValue = false;
    }
    CmpregistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CmpregistroPage');
    };
    CmpregistroPage.prototype.gotoTerminos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__terminos_terminos__["a" /* TerminosPage */]);
    };
    CmpregistroPage.prototype.gotoMarket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__market_market__["a" /* MarketPage */]);
    };
    return CmpregistroPage;
}());
CmpregistroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cmpregistro',template:/*ion-inline-start:"C:\Users\SGS31\Desktop\LearnProject\src\pages\cmpregistro\cmpregistro.html"*/'<!--\n  Generated template for the CmpregistroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Completa tu registro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label color="dark" stacked>Direccion de domicilio</ion-label>\n    <ion-input type="text" placeholder="Colonia - calle,avenida - Numero casa"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="dark" stacked>Numero de telefono</ion-label>\n    <ion-input type="tel" placeholder="+504XXXX-XXXX"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="dark" stacked>Ciudad/Departamento</ion-label>\n    <ion-input type="text" placeholder="Ciudad, Departamento"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="dark" stacked>Tarjeta de débito/crédito</ion-label>\n    <ion-input type="number" placeholder="1234 5678 9012 3456"></ion-input>\n  </ion-item>\n   <ion-item>\n    <ion-label color="dark" stacked>Código CVC</ion-label>\n    <ion-input type="number" placeholder="CVC"></ion-input>\n  </ion-item>\n   <ion-item>\n    <ion-label color="dark" stacked>Fecha vencimiento de tarjeta</ion-label>\n    <ion-input type="date" placeholder="1234 5678 9012 3456"></ion-input>\n  </ion-item>\n  <div style="font-size:0px; height:40px; line-height:0px;"></div><!-- SPACER -->\n  <ion-item>\n    <ion-label>¿Te gustaría vender?</ion-label>\n    <ion-toggle [(ngModel)]="toggleValue"></ion-toggle>\n  </ion-item>\n  <ion-list *ngIf="toggleValue">\n    <ion-item>\n      <ion-label color="dark" stacked>Nombre del Negocio</ion-label>\n      <ion-input type="text" placeholder="Galel-Souvenir Market"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark" stacked>Dirección del negocio</ion-label>\n      <ion-input type="text" placeholder="Colonia - calle,avenida - Ciudad, Departamento"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark" stacked>Tarjeta de débito/crédito cargable</ion-label>\n      <ion-input type="number" placeholder="1234 5678 9012 3456"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark" stacked>Cuenta bancaria válida</ion-label>\n      <ion-input type="number" placeholder="Numero de cuenta"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div style="font-size:0px; height:40px; line-height:0px;"></div><!-- SPACER -->\n  <a style="color: #387EF5" ion-button color="light" full (click)="gotoTerminos()"> Términos y condiciones </a>\n  <ion-item>\n    <ion-label>Estoy de acuerdo</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n  <p>Al dar click en <strong>Estoy de acuerdo</strong> usted acepta los términos y condiciones de uso de Galel-Souvenir Market</p>\n  <a ion-button full (click)="gotoMarket()"> Vamos a explorar! </a>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\SGS31\Desktop\LearnProject\src\pages\cmpregistro\cmpregistro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CmpregistroPage);

//# sourceMappingURL=cmpregistro.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\SGS31\Desktop\LearnProject\src\pages\home\home.html"*/'<ion-slides>\n  <ion-slide style="background:url(&quot;assets/img/slide1.jpg&quot;) no-repeat center;background-size:cover;">\n    <ion-footer>\n      <h3 id="page-heading2" style="color:#FCFCFC;text-align:center;">Conoce nuestra cultura</h3>\n      <p style="color:#FFFFFF;">Ven a <strong>Honduras</strong> y disfruta</p>\n    </ion-footer>\n  </ion-slide>\n  <ion-slide style="background:url(&quot;assets/img/slide2.jpg&quot;) no-repeat center;background-size:cover;">\n    <ion-footer>\n      <h3 id="page-heading2" style="color:#FCFCFC;text-align:center;">Comparte tus artesanías</h3>\n      <p style="color:#FFFFFF;">Demuestra tu <strong>identidad</strong></p>\n    </ion-footer>\n  </ion-slide>\n  <ion-slide style="background:url(&quot;assets/img/slide3.jpg&quot;) no-repeat center;background-size:cover;">\n    <ion-footer>\n      <h3 id="page-heading2" style="color:#FCFCFC;text-align:center;">Exprésate...</h3>\n      <p style="color:#FFFFFF;">Sé <strong>Catracho</strong></p>\n    </ion-footer>\n  </ion-slide>\n  <ion-slide style="background-color: black;">\n      <img src="assets/img/slide4.jpg" alt="estela maya">\n      <a ion-button color="light" block outline (click)="gotoLogin()"> Log in </a>\n  </ion-slide>\n</ion-slides>\n'/*ion-inline-end:"C:\Users\SGS31\Desktop\LearnProject\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_market_market__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_start_start__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_preferences_preferences__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_more_more__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_registrate_registrate__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cmpregistro_cmpregistro__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_terminos_terminos__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_registrarproducto_registrarproducto__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cart_cart__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tucuenta_tucuenta__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_auto_hide_auto_hide__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_market_market__["a" /* MarketPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_preferences_preferences__["a" /* PreferencesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_registrate_registrate__["a" /* RegistratePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_cmpregistro_cmpregistro__["a" /* CmpregistroPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_terminos_terminos__["a" /* TerminosPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_registrarproducto_registrarproducto__["a" /* RegistrarproductoPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tucuenta_tucuenta__["a" /* TucuentaPage */],
            __WEBPACK_IMPORTED_MODULE_18__directives_auto_hide_auto_hide__["a" /* AutoHideDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cuentausuario/cuentausuario.module#CuentausuarioPageModule', name: 'CuentausuarioPage', segment: 'cuentausuario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/market/market.module#MarketPageModule', name: 'MarketPage', segment: 'market', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/preferences/preferences.module#PreferencesPageModule', name: 'PreferencesPage', segment: 'preferences', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registrarproducto/registrarproducto.module#RegistrarproductoPageModule', name: 'RegistrarproductoPage', segment: 'registrarproducto', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terminos/terminos.module#TerminosPageModule', name: 'TerminosPage', segment: 'terminos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tucuenta/tucuenta.module#TucuentaPageModule', name: 'TucuentaPage', segment: 'tucuenta', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_market_market__["a" /* MarketPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_preferences_preferences__["a" /* PreferencesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_registrate_registrate__["a" /* RegistratePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_cmpregistro_cmpregistro__["a" /* CmpregistroPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_terminos_terminos__["a" /* TerminosPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_registrarproducto_registrarproducto__["a" /* RegistrarproductoPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tucuenta_tucuenta__["a" /* TucuentaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_start__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preferences_preferences__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_more__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MarketPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarketPage = (function () {
    function MarketPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.startRoot = __WEBPACK_IMPORTED_MODULE_2__start_start__["a" /* StartPage */];
        this.preferencesRoot = __WEBPACK_IMPORTED_MODULE_3__preferences_preferences__["a" /* PreferencesPage */];
        this.moreRoot = __WEBPACK_IMPORTED_MODULE_4__more_more__["a" /* MorePage */];
    }
    return MarketPage;
}());
MarketPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-market',template:/*ion-inline-start:"C:\Users\SGS31\Desktop\LearnProject\src\pages\market\market.html"*/'<ion-tabs>\n    <ion-tab [root]="startRoot" tabTitle="Start" tabIcon="md-home"></ion-tab>\n    <ion-tab [root]="preferencesRoot" tabTitle="Preferences" tabIcon="md-funnel"></ion-tab>\n    <ion-tab [root]="moreRoot" tabTitle="More" tabIcon="md-more"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\SGS31\Desktop\LearnProject\src\pages\market\market.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], MarketPage);

//# sourceMappingURL=market.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\SGS31\Desktop\LearnProject\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\SGS31\Desktop\LearnProject\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoHideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AutoHideDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var AutoHideDirective = (function () {
    function AutoHideDirective(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.oldScrollTop = 0;
        console.log('Hello AutoHideDirective Directive');
    }
    AutoHideDirective.prototype.ngOnInit = function () {
        this.fabToHide = this.element.nativeElement.getElementsByClassName("fab")[0];
        this.renderer.setElementStyle(this.fabToHide, "webkitTransition", "transform 500ms, opacity 500ms");
    };
    AutoHideDirective.prototype.onContentScroll = function (e) {
        if (e.scrollTop - this.oldScrollTop > 10) {
            console.log("down");
            this.renderer.setElementStyle(this.fabToHide, "opacity", "0");
            this.renderer.setElementStyle(this.fabToHide, "webkitTransform", "scale3d(.1,.1,.1)");
        }
        else if (e.scrollTop - this.oldScrollTop < 0) {
            console.log("up");
            this.renderer.setElementStyle(this.fabToHide, "opacity", "1");
            this.renderer.setElementStyle(this.fabToHide, "webkitTransform", "scale3d(1,1,1)");
        }
        this.oldScrollTop = e.scrollTop;
    };
    return AutoHideDirective;
}());
AutoHideDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[auto-hide]',
        host: {
            '(ionScroll)': 'onContentScroll($event)'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], AutoHideDirective);

//# sourceMappingURL=auto-hide.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrate_registrate__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.gotoMarket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__market_market__["a" /* MarketPage */]);
    };
    LoginPage.prototype.gotoRegistrate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registrate_registrate__["a" /* RegistratePage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\SGS31\Desktop\LearnProject\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label color="dark" stacked>Correo</ion-label>\n    <ion-input type="email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="dark" stacked>Contraseña</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n  <div>\n    <a ion-button full (click)="gotoMarket()"> Log in </a>\n  </div>\n  <div>\n    <a style="color: #387EF5" ion-button color="light" full (click)="gotoRegistrate()"> or Create an account </a>\n  </div>  \n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\SGS31\Desktop\LearnProject\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map