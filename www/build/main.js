webpackJsonp([10],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_login_account_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_signup_account_signup__ = __webpack_require__(130);
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
 * Generated class for the AccountForgotPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountForgotPage = (function () {
    function AccountForgotPage(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountForgotPage.prototype.ionViewDidEnter = function () {
        this.app.setTitle('Forgot Password');
    };
    AccountForgotPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__account_signup_account_signup__["a" /* AccountSignupPage */]);
    };
    AccountForgotPage.prototype.onLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_login_account_login__["a" /* AccountLoginPage */]);
    };
    return AccountForgotPage;
}());
AccountForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-forgot-page',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-forgot\account-forgot.html"*/'<ion-header>\n\n  <ion-navbar color="galelBlue">\n\n    <ion-title>RECUPERAR CONTRASEÑA</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <account-forgot-form></account-forgot-form>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <div class="footer-login-font" text-center padding>\n\n    Ya tienes cuenta en GALEL? <a (click)="onLogin()"> INGRESAR</a>  -  <a (click)="onSignup()"> REGISTRARME</a>\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-forgot\account-forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AccountForgotPage);

//# sourceMappingURL=account-forgot.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_login_account_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_forgot_account_forgot__ = __webpack_require__(129);
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
 * Generated class for the AccountSignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountSignupPage = (function () {
    function AccountSignupPage(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountSignupPage.prototype.ionViewDidEnter = function () {
        this.app.setTitle('Galel - Registrarme');
    };
    AccountSignupPage.prototype.onLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_login_account_login__["a" /* AccountLoginPage */]);
    };
    AccountSignupPage.prototype.onForgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__account_forgot_account_forgot__["a" /* AccountForgotPage */]);
    };
    return AccountSignupPage;
}());
AccountSignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-signup-page',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-signup\account-signup.html"*/'<ion-header>\n\n  <ion-navbar color="galelBlue">\n\n    <ion-title>Soy nuevo en Galel</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n   <account-signup-form></account-signup-form>\n\n</ion-content>\n\n\n\n<ion-footer class="footer-login-font"> \n\n    <div text-center padding>\n\n        Ya tienes cuenta en GALEL? <a (click)="onLogin()">INGRESAR</a>  -  <a (click)="onForgot()">LA OLVIDÉ</a>\n\n    </div>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-signup\account-signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AccountSignupPage);

//# sourceMappingURL=account-signup.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.show = function (message, duration) {
        if (duration === void 0) { duration = 3000; }
        return this.toastCtrl
            .create({
            message: message,
            duration: duration,
            position: 'top'
        })
            .present();
    };
    return ToastService;
}());
ToastService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], ToastService);

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaDeProductosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaDeProductosService = (function () {
    function ListaDeProductosService(db) {
        this.db = db;
        this.ReferenciaListaDeProductos = this.db.list('lista-productos');
    }
    ListaDeProductosService.prototype.getListaDeProductos = function () {
        return this.ReferenciaListaDeProductos;
    };
    ListaDeProductosService.prototype.ingresarProducto = function (item) {
        return this.ReferenciaListaDeProductos.push(item);
    };
    return ListaDeProductosService;
}());
ListaDeProductosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
], ListaDeProductosService);

//# sourceMappingURL=lista-de-productos.service.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_lista_de_productos_lista_de_productos_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registrarproducto_registrarproducto__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(281);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StartPage = (function () {
    function StartPage(navCtrl, navParams, productos, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productos = productos;
        this.toast = toast;
        this.listaDeProductos$ = this.productos
            .getListaDeProductos() //Una lista de la Base de Datos
            .snapshotChanges() // Los datos de forma (llave, valor)
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    StartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPage');
    };
    StartPage.prototype.gotoRegistrarProducto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registrarproducto_registrarproducto__["a" /* RegistrarproductoPage */]);
    };
    StartPage.prototype.gotoCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    StartPage.prototype.addtoCart = function () {
        //this.navCtrl.push(CartPage);
        console.log();
    };
    return StartPage;
}());
StartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-start',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\start\start.html"*/'<ion-header>\n\n  <ion-navbar color=\'galelOrange\'>\n\n    <ion-title>¡Explora en Galel!</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="gotoCart()">\n\n        <ion-icon name="md-cart"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-searchbar \n\n  animated="true"\n\n  autocomplete="on"\n\n  placeholder=\'Buscar aqui\'\n\n  [showCancelButton]="shouldShowCancel">\n\n  </ion-searchbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding auto-hide>\n\n  \n\n  <ion-list>\n\n    <ion-row>\n\n        <ion-col *ngFor="let item of listaDeProductos$ | async">\n\n            <ion-card>\n\n                <img src="../../assets/catalogo/cartera-cuero.jpg"/>\n\n                <ion-fab right top>\n\n                  <button ion-fab  color="galelOrange">\n\n                    <ion-icon name="md-cart"></ion-icon>\n\n                  </button>\n\n                </ion-fab>\n\n                <ion-fab right top style="padding-top: 60px;">\n\n                  <button ion-fab  color="dontLike">\n\n                    <ion-icon name="md-heart"></ion-icon>\n\n                  </button>\n\n                </ion-fab>\n\n                <ion-card-content>\n\n                  <ion-card-title>\n\n                    <strong> {{item.name}} </strong>\n\n                  </ion-card-title>\n\n                  <p>\n\n                    {{item.description}}\n\n                  </p>\n\n                  \n\n                  <ion-item>\n\n                    <span item-left>{{item.price}}.00 L</span>\n\n                    <button ion-button icon-left clear item-end>\n\n                      <ion-icon name="md-search"></ion-icon>\n\n                      #{{item.category}}\n\n                    </button>\n\n                  </ion-item>\n\n\n\n                </ion-card-content>\n\n              </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-list>\n\n\n\n    <ion-fab bottom right #fab>\n\n      <a ion-fab color=\'galelBlue\' (click)="gotoRegistrarProducto()">\n\n        <ion-icon name="md-add"></ion-icon>\n\n      </a>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\start\start.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__services_lista_de_productos_lista_de_productos_service__["a" /* ListaDeProductosService */],
        __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__["a" /* ToastService */]])
], StartPage);

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_market__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lista_de_productos_lista_de_productos_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrarproductoPage = (function () {
    function RegistrarproductoPage(navCtrl, navParams, productos, camera, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productos = productos;
        this.camera = camera;
        this.toast = toast;
        this.item = {
            name: '',
            description: '',
            category: '',
            price: undefined,
            quantity: undefined,
            color: '',
            mark: ''
        };
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    RegistrarproductoPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad RegistrarproductoPage');
    };
    RegistrarproductoPage.prototype.gotoMarket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__market_market__["a" /* MarketPage */]);
    };
    RegistrarproductoPage.prototype.ingresarProducto = function (item) {
        var _this = this;
        this.productos.ingresarProducto(item).then(function (ref) {
            _this.toast.show(item.name + " se ha guardado");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__market_market__["a" /* MarketPage */], { key: ref.key });
        });
    };
    RegistrarproductoPage.prototype.tomarFoto = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    return RegistrarproductoPage;
}());
RegistrarproductoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-registrarproducto',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\registrarproducto\registrarproducto.html"*/'<!--\n\n  Generated template for the RegistrarproductoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="galelBlue">\n\n    <ion-title>Vende tus artesanías!</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Nombre del producto</ion-label>\n\n    <ion-input [(ngModel)]="item.name" type="text" placeholder="Ej: Zapatilla formal Otti"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Descripción</ion-label>\n\n    <ion-input [(ngModel)]="item.description" type="text" placeholder="Ej: Zapatilla de cuero estilo oxford"></ion-input>\n\n  </ion-item>\n\n  <ion-list radio-group [(ngModel)]="item.category">\n\n    <ion-label color="dark" stacked>Categorías</ion-label>\n\n    <ion-item>\n\n      <ion-label>Alfareria</ion-label>\n\n      <ion-radio value=\'Alfareria\'></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Cueros</ion-label>\n\n      <ion-radio value=\'Cueros\'></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Calzado</ion-label>\n\n      <ion-radio value=\'Calzado\'></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Muebles</ion-label>\n\n      <ion-radio value=\'Muebles\'></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Carpinteria</ion-label>\n\n      <ion-radio value=\'Carpinteria\'></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Precio</ion-label>\n\n    <ion-input [(ngModel)]="item.price" type="number" placeholder="Ej: 130.00"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Cantidad</ion-label>\n\n    <ion-input [(ngModel)]="item.quantity" type="number" placeholder="Ej: 5"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Color</ion-label>\n\n    <ion-input [(ngModel)]="item.color" type="text" placeholder="Ej: café"></ion-input>\n\n  </ion-item>\n\n   <ion-item>\n\n    <ion-label color="dark" stacked>Marca</ion-label>\n\n    <ion-input [(ngModel)]="item.mark" type="text" placeholder="Ej: Otti"></ion-input>\n\n  </ion-item>\n\n  <br>\n\n  <button ion-button icon-start round item-right block color=\'danger\' (click)="tomarFoto()">\n\n      <ion-icon name="camera"></ion-icon>\n\n      Tomar una foto\n\n  </button>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  \n\n  <!-- COMENTAR ESTO \n\n  {{item | json}}\n\n  -->\n\n\n\n  <!-- <img [src]="base64Image" *ngIf="base64Image"/> -->\n\n  \n\n  <a ion-button full (click)="ingresarProducto(item)"> ¡Vender! </a>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\registrarproducto\registrarproducto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_lista_de_productos_lista_de_productos_service__["a" /* ListaDeProductosService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__["a" /* ToastService */]])
], RegistrarproductoPage);

//# sourceMappingURL=registrarproducto.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market__ = __webpack_require__(35);
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
        selector: 'page-preferences',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\preferences\preferences.html"*/'<!--\n\n  Generated template for the PreferencesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="galelBlue">\n\n    <ion-title>Encontrá lo que querés</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h4>Categorías</h4>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Alfareria</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Cueros</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Calzado</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Muebles</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Carpintería</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n   <ion-item>\n\n    <ion-label color="dark" stacked>Precio mínimo</ion-label>\n\n    <ion-input type="text" placeholder="Ej: 13.00"></ion-input>\n\n  </ion-item>\n\n   <ion-item>\n\n    <ion-label color="dark" stacked>Precio máximo</ion-label>\n\n    <ion-input type="text" placeholder="Ej: 130.00"></ion-input>\n\n  </ion-item>\n\n  <a ion-button full (click)="gotoMarket()"> ¡Buscá ya! </a>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\preferences\preferences.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], PreferencesPage);

//# sourceMappingURL=preferences.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tucuenta_tucuenta__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tufav_tufav__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tulista_tulista__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tuorden_tuorden__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_login_account_login__ = __webpack_require__(64);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tucuenta_tucuenta__["a" /* TucuentaPage */]);
    };
    MorePage.prototype.gotoFav = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tufav_tufav__["a" /* TufavPage */]);
    };
    MorePage.prototype.gotoLista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tulista_tulista__["a" /* TulistaPage */]);
    };
    MorePage.prototype.gotoOrden = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tuorden_tuorden__["a" /* TuordenPage */]);
    };
    MorePage.prototype.gotoLogin = function () {
        console.log(this.app.getRootNavs()[0]);
        /*
        *No utilizar getRootNav() ya que en el siguiente "Major Release" desaparecera
        *
        *  this.app.getRootNav().setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
        */
        this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_6__account_login_account_login__["a" /* AccountLoginPage */], {}, { animate: true, direction: 'forward' });
    };
    return MorePage;
}());
MorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-more',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\more\more.html"*/'<!--\n\n  Generated template for the MorePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="galelBlue">\n\n    <ion-title>¡Más opciones!</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item (click)="gotoCuenta()">\n\n      <ion-icon name="md-body" item-start></ion-icon> Tu cuenta \n\n    </button>\n\n\n\n    <button ion-item (click)="gotoLista()"> \n\n      <ion-icon name="md-list" item-start></ion-icon> Tu lista\n\n    </button>\n\n\n\n    <button ion-item (click)="gotoOrden()"> \n\n      <ion-icon name="md-basket" item-start></ion-icon> Tus ordenes \n\n    </button>\n\n  \n\n    <button ion-item (click)="gotoFav()">  \n\n      <ion-icon name="md-heart" item-start></ion-icon> Tus recomendaciones \n\n    </button>\n\n  <!-- El metodo gotoLogin() aqui es diferente -->\n\n  <!-- Al navegar dentro de las tabs se crea un nav stack[] -->\n\n  <!-- Al hacer un nav push para salir de las tabs ocurre un problema -->\n\n  <!-- Abre la pagina de login dentro de las tabs -->\n\n  <!-- esto ocurre debido a que en el stack de navegacion todavia esta la pagina principal de tabs -->\n\n  <!-- y solo sustituye la tab actual por la pagina de login -->\n\n  <!-- para solucionarlo se debe obtener el id de la pagina Root de tabs -->\n\n  <!-- y sustituirlo por la de login, de esta manera se crea un nuevo stack de navegacion -->\n\n  <!-- y podemos navegar de nuevo con tranquilidad por la app -->\n\n  <!-- :v puede verlo en el archivo "src\pages\more\more.ts" v: -->\n\n    <button ion-item (click)="logout()">\n\n      <ion-icon name="md-log-out" item-start></ion-icon> Cerrar sesión \n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\more\more.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], MorePage);

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TucuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
        selector: 'page-tucuenta',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\tucuenta\tucuenta.html"*/'<!--\n\n  Generated template for the TucuentaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Tu Cuenta</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding >\n\n<div class="card">\n\n  <img src="../assets/img/Brizencio.jpg" alt="Brizencio" style="width:100%">\n\n  <h1>Alejandro Brizo</h1>\n\n  <p class="title">Vendedor de comidas tipicas</p>\n\n  <p>La Ceibita bella, Honduras</p>\n\n  <p>\n\n        Colonia Los Profesores<br>\n\n        Calle 5, Bloque D<br>\n\n        Estados Unidos\n\n  </p>\n\n  <h6>Metodo de pago</h6>\n\n    <p>\n\n      Tarjeta VISA: XXX-XXXX-XXXX-3456<br>\n\n      Internacional\n\n    </p>\n\n  <h6>Numero de telefono</h6>\n\n    <p>\n\n      Número de teléfono: +504 3305-6603\n\n    </p>\n\n <p><button class="button-card button-opacity">Contacta a Brizencio</button></p>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\tucuenta\tucuenta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TucuentaPage);

//# sourceMappingURL=tucuenta.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TufavPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the TufavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TufavPage = (function () {
    function TufavPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TufavPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TufavPage');
    };
    return TufavPage;
}());
TufavPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tufav',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\tufav\tufav.html"*/'<!--\n\n  Generated template for the TufavPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Tus Recomendaciones</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../assets/catalogo/cartera-cuero.jpg">\n\n      </ion-avatar>\n\n      <h2>Cartera de cuero</h2>\n\n      <h3>Hecha en Valle de Angeles</h3>\n\n      <p>Precio: L. 1500.00</p>\n\n    </ion-item>\n\n    <ion-item-options side="left">\n\n      <button ion-button color="danger">\n\n        <ion-icon name="md-close"></ion-icon>\n\n        Borrar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../assets/catalogo/ceramica-lenca.jpg">\n\n      </ion-avatar>\n\n      <h2>Jarron de ceramica</h2>\n\n      <h3>Ceramica lenca</h3>\n\n      <p>Precio: L. 1500.00</p>\n\n    </ion-item>\n\n    <ion-item-options side="left">\n\n      <button ion-button color="danger">\n\n        <ion-icon name="md-close"></ion-icon>\n\n        Borrar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../assets/catalogo/ceramica-maya.jpg">\n\n      </ion-avatar>\n\n      <h2>Jarron de ceramica</h2>\n\n      <h3>Ceramica maya</h3>\n\n      <p>Precio: L. 1500.00</p>\n\n    </ion-item>\n\n    <ion-item-options side="left">\n\n      <button ion-button color="danger">\n\n        <ion-icon name="md-close"></ion-icon>\n\n        Borrar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../assets/catalogo/cofre-madera.jpg">\n\n      </ion-avatar>\n\n      <h2>Cofre de madera</h2>\n\n      <h3>Hecha en Ojojona</h3>\n\n      <p>Precio: L. 1500.00</p>\n\n    </ion-item>\n\n    <ion-item-options side="left">\n\n      <button ion-button color="danger">\n\n        <ion-icon name="md-close"></ion-icon>\n\n        Borrar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\tufav\tufav.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TufavPage);

//# sourceMappingURL=tufav.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TulistaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the TulistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TulistaPage = (function () {
    function TulistaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TulistaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TulistaPage');
    };
    return TulistaPage;
}());
TulistaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tulista',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\tulista\tulista.html"*/'<!--\n\n  Generated template for the TulistaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Tu Lista</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../assets/catalogo/cartera-cuero.jpg">\n\n      </ion-avatar>\n\n      <h2>Cartera de cuero</h2>\n\n      <h3>Hecha en Valle de Angeles</h3>\n\n      <p>Precio: L. 1500.00</p>\n\n    </ion-item>\n\n    <ion-item-options side="left">\n\n      <button ion-button color="danger">\n\n        <ion-icon name="md-close"></ion-icon>\n\n        Borrar\n\n      </button>\n\n    </ion-item-options>\n\n    <ion-item-options side="right">\n\n      <button ion-button color="primary">\n\n        <ion-icon name="md-cart"></ion-icon>\n\n        Comprar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../assets/catalogo/ceramica-lenca.jpg">\n\n      </ion-avatar>\n\n      <h2>Jarron de ceramica</h2>\n\n      <h3>Ceramica lenca</h3>\n\n      <p>Precio: L. 1500.00</p>\n\n    </ion-item>\n\n    <ion-item-options side="left">\n\n      <button ion-button color="danger">\n\n        <ion-icon name="md-close"></ion-icon>\n\n        Borrar\n\n      </button>\n\n    </ion-item-options>\n\n    <ion-item-options side="right">\n\n      <button ion-button color="primary">\n\n        <ion-icon name="md-cart"></ion-icon>\n\n        Comprar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../assets/catalogo/ceramica-maya.jpg">\n\n      </ion-avatar>\n\n      <h2>Jarron de ceramica</h2>\n\n      <h3>Ceramica maya</h3>\n\n      <p>Precio: L. 1500.00</p>\n\n    </ion-item>\n\n    <ion-item-options side="left">\n\n      <button ion-button color="danger">\n\n        <ion-icon name="md-close"></ion-icon>\n\n        Borrar\n\n      </button>\n\n    </ion-item-options>\n\n    <ion-item-options side="right">\n\n      <button ion-button color="primary">\n\n        <ion-icon name="md-cart"></ion-icon>\n\n        Comprar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../assets/catalogo/cofre-madera.jpg">\n\n      </ion-avatar>\n\n      <h2>Cofre de madera</h2>\n\n      <h3>Hecha en Ojojona</h3>\n\n      <p>Precio: L. 1500.00</p>\n\n    </ion-item>\n\n    <ion-item-options side="left">\n\n      <button ion-button color="danger">\n\n        <ion-icon name="md-close"></ion-icon>\n\n        Borrar\n\n      </button>\n\n    </ion-item-options>\n\n    <ion-item-options side="right">\n\n      <button ion-button color="primary">\n\n        <ion-icon name="md-cart"></ion-icon>\n\n        Comprar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\tulista\tulista.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TulistaPage);

//# sourceMappingURL=tulista.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TuordenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the TuordenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TuordenPage = (function () {
    function TuordenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TuordenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TuordenPage');
    };
    return TuordenPage;
}());
TuordenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tuorden',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\tuorden\tuorden.html"*/'<!--\n\n  Generated template for the TuordenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Tus Ordenes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../assets/catalogo/cartera-cuero.jpg">\n\n      </ion-avatar>\n\n      <h2>Cartera de cuero</h2>\n\n      <h3>Hecha en Valle de Angeles</h3>\n\n      <p>En camino...</p>\n\n    </ion-item>\n\n    <ion-item-options side="right">\n\n      <button ion-button color="secondary">\n\n        <ion-icon name="md-close"></ion-icon>\n\n        Cancelar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../assets/catalogo/ceramica-lenca.jpg">\n\n      </ion-avatar>\n\n      <h2>Jarron de ceramica</h2>\n\n      <h3>Ceramica lenca</h3>\n\n      <p>Entregado</p>\n\n    </ion-item>\n\n    <ion-item-options side="left">\n\n      <button ion-button color="light">\n\n        <ion-icon name="md-archive"></ion-icon>\n\n        Archivar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../assets/catalogo/ceramica-maya.jpg">\n\n      </ion-avatar>\n\n      <h2>Jarron de ceramica</h2>\n\n      <h3>Ceramica maya</h3>\n\n      <p>En camino...</p>\n\n    </ion-item>\n\n    <ion-item-options side="right">\n\n      <button ion-button color="secondary">\n\n        <ion-icon name="md-close"></ion-icon>\n\n        Cancelar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../assets/catalogo/cofre-madera.jpg">\n\n      </ion-avatar>\n\n      <h2>Cofre de madera</h2>\n\n      <h3>Hecha en Ojojona</h3>\n\n      <p>Entregado</p>\n\n    </ion-item>\n\n    <ion-item-options side="left">\n\n      <button ion-button color="light">\n\n        <ion-icon name="md-archive"></ion-icon>\n\n        Archivar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\tuorden\tuorden.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TuordenPage);

//# sourceMappingURL=tuorden.js.map

/***/ }),

/***/ 172:
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
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account-email/account-email.module": [
		215
	],
	"../pages/account-forgot/account-forgot.module": [
		265
	],
	"../pages/account-login/account-login.module": [
		85
	],
	"../pages/account-name/account-name.module": [
		282
	],
	"../pages/account-password/account-password.module": [
		283
	],
	"../pages/account-signup/account-signup.module": [
		285
	],
	"../pages/cart/cart.module": [
		284
	],
	"../pages/cuentausuario/cuentausuario.module": [
		526,
		0
	],
	"../pages/market/market.module": [
		527,
		9
	],
	"../pages/more/more.module": [
		528,
		8
	],
	"../pages/preferences/preferences.module": [
		529,
		7
	],
	"../pages/registrarproducto/registrarproducto.module": [
		530,
		6
	],
	"../pages/start/start.module": [
		531,
		5
	],
	"../pages/terms-conditions/terms-conditions.module": [
		287
	],
	"../pages/tucuenta/tucuenta.module": [
		532,
		4
	],
	"../pages/tufav/tufav.module": [
		533,
		3
	],
	"../pages/tulista/tulista.module": [
		535,
		2
	],
	"../pages/tuorden/tuorden.module": [
		534,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEmailModule", function() { return AccountEmailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_email__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_email_form_account_email_form__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountEmailModule = (function () {
    function AccountEmailModule() {
    }
    return AccountEmailModule;
}());
AccountEmailModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account_email__["a" /* AccountEmailPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_email_form_account_email_form__["a" /* AccountEmailFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__components_account_email_form_account_email_form__["a" /* AccountEmailFormComponent */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_email__["a" /* AccountEmailPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_email__["a" /* AccountEmailPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_email_form_account_email_form__["a" /* AccountEmailFormComponent */]
        ]
    })
], AccountEmailModule);

//# sourceMappingURL=account-email.module.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fire; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_firebase_credentials__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
 *  Import Firebase
 */


var firebase = __WEBPACK_IMPORTED_MODULE_2_firebase__;
var Fire = (function () {
    function Fire() {
        if (!firebase.apps.length) {
            firebase = firebase.default;
            firebase.initializeApp(__WEBPACK_IMPORTED_MODULE_1__config_firebase_credentials__["a" /* FIREBASE_CONFIG */]);
        }
    }
    Fire.prototype.instance = function () {
        return firebase.default;
    };
    return Fire;
}());
Fire = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], Fire);

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SetupProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Setup = (function () {
    function Setup(http) {
        this.http = http;
    }
    Setup.prototype.guid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    Setup.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    Setup.prototype.nl2br = function (value) {
        return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };
    return Setup;
}());
Setup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], Setup);

//# sourceMappingURL=setup.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountForgotModule", function() { return AccountForgotModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_forgot__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_forgot_form_account_forgot_form__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_login_account_login_module__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AccountForgotModule = (function () {
    function AccountForgotModule() {
    }
    return AccountForgotModule;
}());
AccountForgotModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account_forgot__["a" /* AccountForgotPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_forgot_form_account_forgot_form__["a" /* AccountForgotFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__account_login_account_login_module__["AccountLoginModule"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_forgot__["a" /* AccountForgotPage */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__components_account_forgot_form_account_forgot_form__["a" /* AccountForgotFormComponent */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_forgot__["a" /* AccountForgotPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_forgot_form_account_forgot_form__["a" /* AccountForgotFormComponent */]
        ]
    })
], AccountForgotModule);

//# sourceMappingURL=account-forgot.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market__ = __webpack_require__(35);
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
        console.log(this.navParams.get('item'));
    };
    CartPage.prototype.gotoMarket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__market_market__["a" /* MarketPage */]);
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\cart\cart.html"*/'<!--\n\n  Generated template for the CartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="galelBlue">\n\n    <ion-title>Tu carrito</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n <h1></h1>\n\n <p>Ups!</p><br>\n\n <p>Por los momentos no has agregado ningun producto</p><br>\n\n <p>Explora en nuestra tienda!</p><br>\n\n <div style="font-size:0px; height:40px; line-height:0px;"></div><!-- SPACER -->\n\n <a ion-button full block round color=\'secondary\'> Realizar Compra </a>\n\n <a ion-button full block round (click)="gotoMarket()"> ¡Explora en Galel! </a>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNameModule", function() { return AccountNameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_name__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_name_form_account_name_form__ = __webpack_require__(500);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountNameModule = (function () {
    function AccountNameModule() {
    }
    return AccountNameModule;
}());
AccountNameModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account_name__["a" /* AccountNamePage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_name_form_account_name_form__["a" /* AccountNameFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__components_account_name_form_account_name_form__["a" /* AccountNameFormComponent */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_name__["a" /* AccountNamePage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_name__["a" /* AccountNamePage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_name_form_account_name_form__["a" /* AccountNameFormComponent */]
        ]
    })
], AccountNameModule);

//# sourceMappingURL=account-name.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPasswordModule", function() { return AccountPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_password__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_password_form_account_password_form__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountPasswordModule = (function () {
    function AccountPasswordModule() {
    }
    return AccountPasswordModule;
}());
AccountPasswordModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account_password__["a" /* AccountPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_password_form_account_password_form__["a" /* AccountPasswordFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__components_account_password_form_account_password_form__["a" /* AccountPasswordFormComponent */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_password__["a" /* AccountPasswordPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_password__["a" /* AccountPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_password_form_account_password_form__["a" /* AccountPasswordFormComponent */]
        ]
    })
], AccountPasswordModule);

//# sourceMappingURL=account-password.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = (function () {
    function CartPageModule() {
    }
    return CartPageModule;
}());
CartPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
        ],
    })
], CartPageModule);

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSignupModule", function() { return AccountSignupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_signup__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_signup_form_account_signup_form__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_login_account_login_module__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AccountSignupModule = (function () {
    function AccountSignupModule() {
    }
    return AccountSignupModule;
}());
AccountSignupModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account_signup__["a" /* AccountSignupPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_signup_form_account_signup_form__["a" /* AccountSignupFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__account_login_account_login_module__["AccountLoginModule"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__components_account_signup_form_account_signup_form__["a" /* AccountSignupFormComponent */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_signup__["a" /* AccountSignupPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_signup__["a" /* AccountSignupPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_signup_form_account_signup_form__["a" /* AccountSignupFormComponent */]
        ]
    })
], AccountSignupModule);

//# sourceMappingURL=account-signup.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsAndConditionsPage = (function () {
    function TermsAndConditionsPage(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsAndConditionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsAndConditionsPage');
    };
    return TermsAndConditionsPage;
}());
TermsAndConditionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'terms-conditions',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\terms-conditions\terms-conditions.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="galelBlue">\n\n    <ion-title>Términos y Condiciones</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h3>Términos y condiciones de uso de Galel - Souvenir Market</h3>\n\n  <p>\n\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum pulvinar velit ultrices viverra. Curabitur ac elit elementum, volutpat mi nec, tincidunt neque. Phasellus sit amet porta tortor, ac efficitur arcu. Donec at egestas ipsum. Phasellus sit amet erat augue. Nullam pretium lacinia vehicula. Sed eu tincidunt nulla. Aliquam at turpis pellentesque, posuere neque eget, finibus arcu. Vestibulum ac accumsan odio. Nulla lacinia, leo vel dictum pulvinar, magna neque sodales turpis, vel feugiat nisl lacus at ante. Maecenas sed tellus vel nulla facilisis semper. Aliquam erat volutpat. Ut venenatis nisl sit amet efficitur finibus. Aenean facilisis placerat tellus, a vulputate ex pretium ac.\n\n\n\nSed volutpat vitae ligula ac auctor. Aenean ut vestibulum nisl. Praesent posuere pretium purus vitae tristique. Donec massa leo, lacinia in turpis quis, semper mollis massa. Donec pharetra nibh ipsum, quis elementum sem mattis in. Nullam quis nisl quam. Nam vel urna ornare, rutrum risus a, egestas turpis. Nulla eu mollis urna. Proin dignissim lacus quis rutrum scelerisque. Mauris ut commodo tellus. Suspendisse iaculis, eros sed auctor vehicula, quam nisl bibendum lorem, at mattis sem nisi finibus urna.\n\n\n\nNunc lobortis varius ligula. Praesent eleifend sapien non nisl molestie aliquet at eu elit. Fusce dignissim justo quis porttitor sagittis. Phasellus id ligula ex. Cras interdum at ligula vehicula pretium. Nam eu odio a nisl maximus scelerisque. Maecenas venenatis sem ut magna sollicitudin, ac mollis sem convallis. Donec volutpat elit dui, sit amet sagittis tortor hendrerit a. Maecenas nunc lectus, faucibus eget nisl at, ultrices rutrum velit. Nullam consectetur purus id eros consectetur tincidunt. Curabitur nibh tortor, auctor non sagittis non, porta sed nisl.\n\n\n\nNulla sit amet blandit risus. Proin vel semper velit. Aenean at turpis dignissim, volutpat odio cursus, convallis dui. Etiam tristique tristique ante in mollis. Mauris suscipit metus et ipsum consequat, non sagittis nunc congue. Praesent mi ex, sodales sodales eros sit amet, cursus accumsan magna. Sed gravida luctus sodales. Aliquam sed tortor quis metus rhoncus consequat.\n\n\n\nVivamus et nunc sit amet leo malesuada consequat ac eu dui. Aenean porttitor commodo tortor a placerat. Nunc nibh diam, feugiat et velit ac, iaculis placerat est. Nunc scelerisque nisi nec viverra lacinia. Duis aliquet imperdiet fermentum. Morbi sodales leo magna, at consequat lectus lobortis vitae. Ut eu euismod justo, eu tempor lorem. Donec vestibulum sit amet diam et rutrum. Donec sed nulla imperdiet velit volutpat interdum eu nec massa. Quisque consequat eleifend purus at eleifend. Vestibulum id elementum arcu, vel tincidunt lectus. Praesent ut tellus eget dolor vehicula dictum. Praesent metus purus, fringilla nec velit id, facilisis vulputate velit. Aliquam eleifend luctus odio vitae ornare.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\terms-conditions\terms-conditions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TermsAndConditionsPage);

//# sourceMappingURL=terms-conditions.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsModule", function() { return TermsAndConditionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_conditions__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsAndConditionsModule = (function () {
    function TermsAndConditionsModule() {
    }
    return TermsAndConditionsModule;
}());
TermsAndConditionsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__terms_conditions__["a" /* TermsAndConditionsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms_conditions__["a" /* TermsAndConditionsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__terms_conditions__["a" /* TermsAndConditionsPage */]
        ]
    })
], TermsAndConditionsModule);

//# sourceMappingURL=terms-conditions.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(345);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_firebase__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home_module__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cart_cart_module__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_market_market__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_start_start__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_preferences_preferences__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_more_more__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_registrarproducto_registrarproducto__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tucuenta_tucuenta__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tufav_tufav__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tulista_tulista__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tuorden_tuorden__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_auto_hide_auto_hide__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_lista_de_productos_lista_de_productos_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__firebase_credentials__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_camera__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_toast_toast_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_account_name_account_name_module__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_account_email_account_email_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_account_password_account_password_module__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_account_login_account_login_module__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_account_signup_account_signup_module__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_account_forgot_account_forgot_module__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_terms_conditions_terms_conditions_module__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_firebase__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_setup__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Brizo























//@Brizo






 //@Brizo, lo cambié



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_market_market__["a" /* MarketPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_preferences_preferences__["a" /* PreferencesPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_registrarproducto_registrarproducto__["a" /* RegistrarproductoPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_tucuenta_tucuenta__["a" /* TucuentaPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tufav_tufav__["a" /* TufavPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_tulista_tulista__["a" /* TulistaPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_tuorden_tuorden__["a" /* TuordenPage */],
            __WEBPACK_IMPORTED_MODULE_25__directives_auto_hide_auto_hide__["a" /* AutoHideDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_15__pages_cart_cart_module__["CartPageModule"],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home_module__["a" /* HomePageModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_27__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_30__pages_account_name_account_name_module__["AccountNameModule"],
            __WEBPACK_IMPORTED_MODULE_31__pages_account_email_account_email_module__["AccountEmailModule"],
            __WEBPACK_IMPORTED_MODULE_32__pages_account_password_account_password_module__["AccountPasswordModule"],
            __WEBPACK_IMPORTED_MODULE_33__pages_account_login_account_login_module__["AccountLoginModule"],
            __WEBPACK_IMPORTED_MODULE_34__pages_account_signup_account_signup_module__["AccountSignupModule"],
            __WEBPACK_IMPORTED_MODULE_35__pages_account_forgot_account_forgot_module__["AccountForgotModule"],
            __WEBPACK_IMPORTED_MODULE_36__pages_terms_conditions_terms_conditions_module__["TermsAndConditionsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/account-email/account-email.module#AccountEmailModule', name: 'AccountEmailPage', segment: 'account-email', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account-forgot/account-forgot.module#AccountForgotModule', name: 'AccountForgotPage', segment: 'account-forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account-login/account-login.module#AccountLoginModule', name: 'AccountLoginPage', segment: 'account-login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account-name/account-name.module#AccountNameModule', name: 'AccountNamePage', segment: 'account-name', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account-password/account-password.module#AccountPasswordModule', name: 'AccountPasswordPage', segment: 'account-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account-signup/account-signup.module#AccountSignupModule', name: 'AccountSignupPage', segment: 'account-signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cuentausuario/cuentausuario.module#CuentausuarioPageModule', name: 'CuentausuarioPage', segment: 'cuentausuario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/market/market.module#MarketPageModule', name: 'MarketPage', segment: 'market', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/preferences/preferences.module#PreferencesPageModule', name: 'PreferencesPage', segment: 'preferences', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registrarproducto/registrarproducto.module#RegistrarproductoPageModule', name: 'RegistrarproductoPage', segment: 'registrarproducto', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms-conditions/terms-conditions.module#TermsAndConditionsModule', name: 'TermsAndConditionsPage', segment: 'terms-conditions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tucuenta/tucuenta.module#TucuentaPageModule', name: 'TucuentaPage', segment: 'tucuenta', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tufav/tufav.module#TufavPageModule', name: 'TufavPage', segment: 'tufav', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tuorden/tuorden.module#TuordenPageModule', name: 'TuordenPage', segment: 'tuorden', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tulista/tulista.module#TulistaPageModule', name: 'TulistaPage', segment: 'tulista', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_market_market__["a" /* MarketPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_preferences_preferences__["a" /* PreferencesPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_registrarproducto_registrarproducto__["a" /* RegistrarproductoPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_tucuenta_tucuenta__["a" /* TucuentaPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_tulista_tulista__["a" /* TulistaPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tufav_tufav__["a" /* TufavPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_tuorden_tuorden__["a" /* TuordenPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_26__services_lista_de_productos_lista_de_productos_service__["a" /* ListaDeProductosService */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_29__services_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_38__providers_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_37__providers_firebase__["a" /* Fire */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_39__providers_setup__["a" /* Setup */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_start__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preferences_preferences__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_more__ = __webpack_require__(158);
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
        selector: 'page-market',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\market\market.html"*/'<ion-tabs color=\'galelOrange\'>\n\n    <ion-tab [root]="startRoot" tabTitle="Inicio" tabIcon="md-home"></ion-tab>\n\n    <ion-tab [root]="preferencesRoot" tabTitle="Filtros" tabIcon="md-funnel"></ion-tab>\n\n    <ion-tab [root]="moreRoot" tabTitle="Opciones" tabIcon="md-more"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\market\market.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], MarketPage);

//# sourceMappingURL=market.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the AccountEmailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountEmailPage = (function () {
    function AccountEmailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountEmailPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad AccountEmailPage');
    };
    return AccountEmailPage;
}());
AccountEmailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account-email',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-email\account-email.html"*/'<ion-header>\n\n  <ion-navbar color="galelBlue">\n\n    <ion-title>Cambiar Correo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <account-email-form></account-email-form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-email\account-email.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AccountEmailPage);

//# sourceMappingURL=account-email.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountEmailFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountEmailFormComponent = (function () {
    function AccountEmailFormComponent(loading, nav, alert, user) {
        this.loading = loading;
        this.nav = nav;
        this.alert = alert;
        this.user = user;
        this.account = {
            email: this.user.fire.auth().currentUser.email
        };
        this.submitted = false;
    }
    AccountEmailFormComponent.prototype.onModify = function (form) {
        var _this = this;
        var loader = this.loading.create({
            content: 'Espera un momento..',
            duration: 10000
        });
        this.submitted = true;
        if (form.valid) {
            loader.present().then(function () {
                _this.user.current().updateEmail(_this.account.email).then(function () {
                    _this.user.sync().then(function () {
                        loader.onDidDismiss(function () {
                            _this.showAlert('Exito', 'Su correo ha sido cambiado.');
                        });
                        loader.dismiss();
                    }).catch(console.debug);
                }, function (e) {
                    loader.onDidDismiss(function () {
                        _this.errorHandler(e);
                    });
                    loader.dismiss();
                });
            }).catch(console.debug);
        }
    };
    AccountEmailFormComponent.prototype.showAlert = function (title, subtitle) {
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        return alert.present();
    };
    AccountEmailFormComponent.prototype.errorHandler = function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var handler = __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* User */].errorHandler(errorCode, errorMessage);
        this.showAlert(handler.title, handler.message);
    };
    return AccountEmailFormComponent;
}());
AccountEmailFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-email-form',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-email-form\account-email-form.html"*/'<form #accountForm="ngForm" novalidate>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label frost stacked color="dark">Correo</ion-label>\n\n      <ion-icon ios="ios-contact-outline" md="md-contact" item-left frost color="dark"></ion-icon>\n\n      <ion-input [(ngModel)]="account.email" name="email" type="text" #email="ngModel" spellcheck="false" autocapitalize="off"\n\n        required placeholder="Su nuevo correo" color="dark"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button large outline block round (tap)="onModify(accountForm)" color="dark">Modificar</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</form>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-email-form\account-email-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* User */]])
], AccountEmailFormComponent);

//# sourceMappingURL=account-email-form.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyD5sZviORzTe9MkvWbGc20rbpK25vfvN_I",
    authDomain: "galel-app.firebaseapp.com",
    databaseURL: "https://galel-app.firebaseio.com",
    projectId: "galel-app",
    storageBucket: "galel-app.appspot.com",
    messagingSenderId: "16142321808"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForgotFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountForgotFormComponent = (function () {
    function AccountForgotFormComponent(loading, alert, actionSheet, user) {
        this.loading = loading;
        this.alert = alert;
        this.actionSheet = actionSheet;
        this.user = user;
        this.login = {};
        this.submitted = false;
    }
    AccountForgotFormComponent.prototype.onForgot = function (form) {
        var _this = this;
        var loader = this.loading.create({
            content: 'Espera un momento..',
            duration: 3000
        });
        this.submitted = true;
        if (form.valid) {
            loader.present()
                .then(function () {
                _this.user.fire.auth().sendPasswordResetEmail(_this.login.email)
                    .then(function () {
                    loader.onDidDismiss(function () {
                        _this.showAlert('Correo enviado', 'Revisa tu bandeja de mensajes.');
                    });
                    loader.dismiss();
                })
                    .catch(function (error) {
                    loader.onDidDismiss(function () {
                        _this.errorHandler(error);
                    });
                    loader.dismiss();
                });
            }).catch(console.debug);
        }
    };
    AccountForgotFormComponent.prototype.showAlert = function (title, subtitle) {
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        alert.present();
    };
    AccountForgotFormComponent.prototype.errorHandler = function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var handler = __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* User */].errorHandler(errorCode, errorMessage);
        this.showAlert(handler.title, handler.message);
    };
    return AccountForgotFormComponent;
}());
AccountForgotFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-forgot-form',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-forgot-form\account-forgot-form.html"*/'<form #loginForm="ngForm" novalidate>\n\n  <ion-list>\n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">CORREO</ion-label>\n\n      <ion-icon ios="ios-contact-outline" md="md-contact" item-left frost color="light"></ion-icon>\n\n      <ion-input type="email" [(ngModel)]="login.email" name="username" #email="ngModel" spellcheck="false" autocapitalize="off"\n\n        required placeholder="Digite su correo para recibir una confirmación" color="light"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button large outline block round (tap)="onForgot(loginForm)" color="light">Cambiar Contraseña</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <account-login-social></account-login-social>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</form>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-forgot-form\account-forgot-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* User */]])
], AccountForgotFormComponent);

//# sourceMappingURL=account-forgot-form.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_market_market__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //@Brizo

var AccountLoginFormComponent = (function () {
    function AccountLoginFormComponent(app, loading, alert, navCtrl, user) {
        this.app = app;
        this.loading = loading;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.user = user;
        this.login = {};
        this.submitted = false;
        this.loader = false;
    }
    AccountLoginFormComponent.prototype.onLogin = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loader_1 = this.loading.create({
                content: 'Espera un momento..',
                duration: 10000
            });
            loader_1.present().then(function () {
                _this.user.fire
                    .auth()
                    .signInWithEmailAndPassword(_this.login.username, _this.login.password)
                    .then(function () {
                    loader_1.onDidDismiss(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_market_market__["a" /* MarketPage */]).then(function () {
                            _this.user.sync();
                        }).catch(console.debug);
                    });
                    loader_1.dismiss();
                })
                    .catch(function (error) {
                    loader_1.onDidDismiss(function () {
                        _this.errorHandler(error);
                    });
                    loader_1.dismiss();
                });
            });
        }
    };
    AccountLoginFormComponent.prototype.errorHandler = function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var handler = __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */].errorHandler(errorCode, errorMessage);
        var alert = this.alert.create({
            title: handler.title,
            subTitle: handler.message,
            buttons: ['OK']
        });
        alert.present();
    };
    return AccountLoginFormComponent;
}());
AccountLoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-login-form',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-login-form\account-login-form.html"*/'<form #loginForm="ngForm" novalidate>\n\n  <ion-list>\n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">SU USUARIO</ion-label>\n\n      <ion-icon ios="ios-contact-outline" md="md-contact" item-left frost color="light"></ion-icon>\n\n      <ion-input type="email" [(ngModel)]="login.username" name="username" #email="ngModel" spellcheck="false" autocapitalize="off"\n\n        required placeholder="Digite su correo o nombre de usuario"></ion-input>\n\n    </ion-item>\n\n    <div class="hr-gradient-alternate"></div>  \n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">SU CONTRASEÑA</ion-label>\n\n      <ion-icon ios="ios-lock-outline" md="md-lock" item-left frost color="light"></ion-icon>\n\n      <ion-input type="password" [(ngModel)]="login.password" name="password" #password="ngModel" required placeholder="Digite su contraseña"\n\n        color="light"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button large outline block round (tap)="onLogin(loginForm)" color="light">Ingresar</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <account-login-social></account-login-social>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</form>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-login-form\account-login-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */]])
], AccountLoginFormComponent);

//# sourceMappingURL=account-login-form.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sha256__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sha256__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__setup__ = __webpack_require__(263);
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
 * Import Ionic and others
 */





/**
 * Import Facebook
 */


/**
 * Import Firebase
 */


// providers

/**
 *
 *
 * @export
 * @class User
 */
var User = (function () {
    /**
     * Creates an instance of User.
     *
     *
     * @memberOf User
     */
    function User(app, platform, alert, loader, toast, storage, Fire, events, googleplus, facebook, file, firePlugin, setup) {
        this.app = app;
        this.platform = platform;
        this.alert = alert;
        this.loader = loader;
        this.toast = toast;
        this.storage = storage;
        this.Fire = Fire;
        this.events = events;
        this.googleplus = googleplus;
        this.facebook = facebook;
        this.file = file;
        this.firePlugin = firePlugin;
        this.setup = setup;
        this.storageUserNamespace = 'firetask:user';
        /**
         *
         *
         * @type {string}
         * @memberOf User
         */
        this.googleScopes = 'profile email';
        /**
         *
         *
         * @type {any}
         * @memberOf User
         */
        this.facebookScopes = ['public_profile', 'email'];
        /**
         *
         *
         * @type {boolean}
         * @memberOf User
         */
        this.online = false;
        this.admob = true;
        /**
         *
         *
         * @type {boolean}
         * @memberOf User
         */
        this.offline = false;
        //this.googleWebClient = googleConfig.webClient;
        this.loading = loader.create({
            content: 'Please wait..',
            duration: 10000,
            dismissOnPageChange: true
        });
        this.fire = Fire.instance();
    }
    /**
     * Database
     *
     * @returns firebase.database()
     *
     * @memberOf User
     */
    User.prototype.db = function () {
        return this.fire.database();
    };
    User.prototype.current = function () {
        return this.fire.auth().currentUser;
    };
    // sync with realtime database
    // also local storage
    User.prototype.sync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pick().then(function (sessionUser) {
                _this.ref().then(function (path) {
                    _this.db().ref(path).once('value').then(function (snapshot) {
                        // if user is coming from signup form
                        var unnamed = 'Unnamed';
                        if (!_this.current().displayName) {
                            _this.current().updateProfile({
                                displayName: unnamed
                            });
                        }
                        var dbUser = snapshot.val();
                        // create user profile object
                        var profile = {
                            uid: _this.current().uid,
                            displayName: _this.current().displayName || unnamed,
                            email: _this.current().email
                        };
                        // count +1 and sync profile with realtime database          
                        if (!dbUser) {
                            console.info('user:countStats');
                            // add +1 to new user stats (backend purposes, like show a total number of users in a website)
                            _this.countStats();
                        }
                        // update photoURL
                        if (!dbUser.photoURL) {
                            profile.photoURL = _this.current().photoURL;
                        }
                        _this.db().ref(path).update(profile);
                        // merge and persists local
                        sessionUser = Object.assign(sessionUser, profile);
                        _this.persist(sessionUser).then(function () {
                            resolve(sessionUser);
                        }).catch(console.debug);
                    });
                }).catch(console.debug);
            }).catch(reject);
        });
    };
    User.prototype.ref = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pick().then(function (user) {
                if (_this.current())
                    resolve('users/' + user.uid);
            }).catch(reject);
        });
    };
    /**
     * Auth With Google
     *
     * @param {any} cbSuccess
     * @param {any} cbError
     * @returns success: authData.idToken, authData.accessToken
     *
     * @memberOf User
     */
    User.prototype.authWithGoogle = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var options = {
                'scopes': _this.googleScopes,
                'webClientId': _this.googleWebClient,
                'offline': true,
            };
            console.debug('authWithGoogle options:');
            console.debug(options);
            // note for iOS the googleplus plugin requires ENABLE_BITCODE to be turned off in the Xcode
            _this.googleplus.login(options).then(resolve).catch(reject);
        });
    };
    /**
     * Auth With Facebook
     *
     * @param {any} cbSuccess
     * @param {any} cbError
     * @returns success: token
     *
     * @memberOf User
     */
    User.prototype.authWithFacebook = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.facebook.getLoginStatus().then(function (res) {
                if (res.status === 'connected') {
                    resolve(res.authResponse.accessToken);
                }
                else {
                    _this.facebook
                        .login(_this.facebookScopes)
                        .then(function (user) {
                        _this.facebook.getAccessToken().then(resolve).catch(reject);
                    })
                        .catch(reject);
                }
            }).catch(reject);
        });
    };
    // sign user out
    User.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // give a time to menu closing animation
            try {
                // logout facebook native
                _this.facebook.logout();
                // logout firebase
                _this.fire.auth().signOut();
                // logout google native
                // it can show error in dev mode, using -lc
                // try in production mode (eg. ionic run android --prod)
                //this.googleplus.logout();
                _this.storage.ready().then(function () {
                    _this.storage.clear();
                    _this.events.publish('user:loggedOut');
                    resolve();
                }).catch(reject);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    //@Brizo
    User.prototype.newUserOnDatabase = function (userData) {
        return this.fire.database().ref('users/' + userData.key).set({
            email: userData.email,
            number: userData.number,
            pass: userData.pass,
            username: userData.username
        });
    };
    //@Brizo
    User.prototype.newSellerOnDatabase = function (sellerData) {
        return this.fire.database().ref('sellers/' + sellerData.key).set({
            marketName: sellerData.marketName,
            marketPlace: sellerData.marketPlace
        });
    };
    /**
     * Error handler
     *
     * you can translate here
     *
     * @static
     * @param {any} code
     * @param {any} message
     * @returns {object} title, message
     */
    User.errorHandler = function (code, message) {
        var result = { title: 'Fail', message: message };
        switch (code) {
            case 'auth/account-exists-with-different-credential':
                result = { title: '¡Oops!', message: 'It already exists an account with the email address asserted by the credential. Login first before connecting with other accounts.' };
                break;
            case 'auth/user-not-found':
                result = { title: '¡Oops!', message: 'Usuario/correo no encontrado. ¿Seguro que tienes cuenta en GALEL?' };
                break;
            case 'auth/wrong-password':
                result = { title: '¡Oops!', message: 'Contraseña incorrecta.' };
                break;
            case 'auth/weak-password':
                result = { title: '¡Umm!', message: 'Contraseña muy débil, intenta otra de nuevo.' };
                break;
            case 'auth/invalid-email':
                result = { title: '¡Oops!', message: 'Verifica que sea un correo válido.' };
                break;
            case 'auth/email-already-in-use':
                result = { title: '¡Umm!', message: 'Este correo o nombre de usuario ya está siendo utilizado.' };
                break;
        }
        return result;
    };
    /**
     * Show Alert
     *
     * @param {any} title
     * @param {any} subtitle
     *
     * @memberOf User
     */
    User.prototype.showAlert = function (title, subtitle) {
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        setTimeout(function () {
            alert.present();
        });
    };
    User.prototype.gcmToken = function () {
        var _this = this;
        if (this.current()) {
            try {
                this.firePlugin.getToken().then(function (token) {
                    _this.setGCMToken(token);
                }).catch(console.debug);
                this.firePlugin.onTokenRefresh().subscribe(function (token) {
                    _this.setGCMToken(token);
                });
            }
            catch (e) { }
            ;
        }
    };
    User.prototype.setGCMToken = function (token) {
        var _this = this;
        this.ref().then(function (path) {
            _this.db().ref(path + '/token_gcm').set(token);
        });
    };
    User.prototype.presence = function () {
        var _this = this;
        console.info('user:presence');
        var connectedRef = this.db().ref('.info/connected');
        connectedRef.on('value', function (snap) {
            if (snap.val() === true) {
                _this.online = true;
                _this.offline = false;
                _this.events.publish('network:online');
            }
            else {
                _this.online = false;
                _this.offline = true;
                _this.events.publish('network:offline');
            }
        }, function () { });
        this.fire.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.storage.ready().then(function () {
                    // set a key/value
                    var _user = {
                        displayName: user.displayName,
                        email: user.email,
                        emailVerified: user.emailVerified,
                        photoURL: user.photoURL,
                        providerData: user.providerData,
                        uid: user.uid
                    };
                    _this.storage.set(_this.storageUserNamespace, _user);
                    _this.events.publish('user:loggedIn', _user);
                });
            }
            else {
                _this.storage.ready().then(function () {
                    // set a key/value
                    _this.storage.set(_this.storageUserNamespace, false);
                    _this.events.publish('user:loggedOut');
                }).catch(console.debug);
            }
        }, function () { });
    };
    // get user from storage
    User.prototype.pick = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.ready().then(function () {
                _this.storage.get(_this.storageUserNamespace).then(function (user) {
                    if (user)
                        resolve(user);
                    else
                        reject();
                }).catch(console.debug);
            }).catch(console.debug);
        });
    };
    // count +1 and sync profile with realtime database
    User.prototype.accounting = function () {
        var _this = this;
        // try to get the profile or save if it does not exist
        this.ref().then(function (path) {
            _this.db().ref(path).once('value').then(function (snapshot) {
                // update user profile
                _this.sync().then(function () {
                    if (!snapshot.val()) {
                        console.info('user:accounting');
                        // add +1 to new user stats (backend purposes, like show a total number of users in a website)
                        _this.countStats();
                    }
                }).catch(console.debug);
            });
        });
    };
    /**
     * Count stats
     *
     * add +1 to stats/users when its a new user
     *
     * @returns {*}
     *
     * @memberOf User
     */
    User.prototype.countStats = function () {
        console.log('countStats: new user');
        var stats = this.db().ref('stats/users');
        stats.transaction(function (current) {
            return current + 1;
        }).catch(function (e) {
            console.debug(e);
        });
    };
    /**
     * Profile Image Storage
     *
     * @param {string} path
     * @return {string} downloadURL
     *
     * @memberOf User
     */
    User.prototype.profileImageStorage = function (path) {
        var _this = this;
        console.debug('profileImageStorage:start');
        return new Promise(function (resolve, reject) {
            var readFile = window['resolveLocalFileSystemURL'];
            readFile(path, function (fileEntry) {
                fileEntry.file(function (file) {
                    var fileReader = new FileReader();
                    fileReader.onloadend = function (result) {
                        var arrayBuffer = result.target.result;
                        var blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'image/jpeg' });
                        // Create a root reference
                        var storageRef = _this.fire.storage().ref('profile/' + __WEBPACK_IMPORTED_MODULE_8_sha256___default()(_this.setup.guid()));
                        var uploadTask = storageRef.put(blob);
                        _this.photoBLOB = blob;
                        _this.events.publish('user:photoBLOB', blob);
                        // Register three observers:
                        // 1. 'state_changed' observer, called any time the state changes
                        // 2. Error observer, called on failure
                        // 3. Completion observer, called on successful completion
                        console.log('Upload started:');
                        uploadTask.on('state_changed', function (snapshot) {
                            // Observe state change events such as progress, pause, and resume
                            // See below for more detail
                            var percent = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                            console.log(percent + "% done");
                            _this.events.publish('user:photo:upload', percent);
                        }, function (e) {
                            // Handle unsuccessful uploads
                            console.debug(e);
                            console.debug('profileImageStorage:end');
                            reject(e);
                        }, function () {
                            // Handle successful uploads on complete
                            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                            var downloadURL = uploadTask.snapshot.downloadURL;
                            console.info('Profile pic URL:' + downloadURL);
                            console.info('Profile pic URI:' + path);
                            console.debug('profileImageStorage:end');
                            resolve(downloadURL);
                        });
                    };
                    fileReader.onerror = function (e) {
                        console.debug(e);
                        reject(e);
                    };
                    fileReader.readAsArrayBuffer(file);
                }, function (e) { console.debug(e); reject(e); });
            }, function (e) { console.debug(e); reject(e); });
        });
    };
    /**
     * Get Profile Image 64
     *
     * Eg: show image profile imediatly after crop
     *
     * @returns Promise<base64data>
     *
     * @memberOf User
     */
    User.prototype.getProfileImage64 = function (blob) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var reader = new FileReader();
                var events = _this.events;
                reader.readAsDataURL(blob);
                reader.onloadend = function () {
                    var base64data = reader.result;
                    events.publish('user:photo64', base64data);
                    resolve(base64data);
                };
            }, 1000);
        });
    };
    // persists on device storage
    User.prototype.persist = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.ready().then(function () {
                _this.storage.set(_this.storageUserNamespace, user);
                setTimeout(function () {
                    resolve(user);
                }, 50);
            }).catch(reject);
        });
    };
    return User;
}());
User = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_7__firebase__["a" /* Fire */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase__["a" /* Firebase */],
        __WEBPACK_IMPORTED_MODULE_9__setup__["a" /* Setup */]])
], User);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLoginSocialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_market_market__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountLoginSocialComponent = (function () {
    function AccountLoginSocialComponent(app, alert, navCtrl, user) {
        this.app = app;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.user = user;
    }
    AccountLoginSocialComponent.prototype.onLogin = function (provider) {
        var _this = this;
        switch (provider) {
            //
            // Google Login, solo haciendo bulto
            //
            /*     case 'google':
                   this.user.authWithGoogle().then((authData: any) => {
                     console.log('authData: ' + authData);
                     let googleProviderCredential = this.user.fire.auth.GoogleAuthProvider.credential(authData.idToken, authData.accessToken);
                     this.doLogin(googleProviderCredential);
                   }).catch((error) => {
                     console.debug('error auth with google: ');
                     console.debug(error);
                     alert(error)
                   });
                   break;
           */ //
            // Facebook Login
            //
            case 'facebook':
                this.user.authWithFacebook().then(function (token) {
                    var facebookProviderCredential = _this.user.fire.auth.FacebookAuthProvider.credential(token);
                    _this.doLogin(facebookProviderCredential);
                }).catch(function (error) {
                    console.debug('error auth with fb: ');
                    console.debug(error);
                });
                break;
        }
    };
    AccountLoginSocialComponent.prototype.doLogin = function (provider) {
        var _this = this;
        return this.user.fire.auth().signInWithCredential(provider).then(function (success) {
            // we dont have to do nothing because there are already an event for when user is logged
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_market_market__["a" /* MarketPage */]).then(function () {
                _this.user.sync();
            }).catch(console.debug);
        }, function (error) {
            console.debug('error sign in with credential: ');
            console.debug(error);
            _this.errorHandler(error);
        }).catch(console.debug);
    };
    AccountLoginSocialComponent.prototype.errorHandler = function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var handler = __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* User */].errorHandler(errorCode, errorMessage);
        var alert = this.alert.create({
            title: handler.title,
            subTitle: handler.message,
            buttons: ['OK']
        });
        alert.present();
    };
    return AccountLoginSocialComponent;
}());
AccountLoginSocialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-login-social',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-login-social\account-login-social.html"*/'<ion-row >\n\n    <ion-col>\n\n        <button ion-button large outline block round (tap)="onLogin(\'facebook\')" type="submit" color="primary" style="background-color:rgb(255, 255, 255);" >Conectarme con Facebook</button>\n\n    </ion-col>\n\n</ion-row>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-login-social\account-login-social.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* User */]])
], AccountLoginSocialComponent);

//# sourceMappingURL=account-login-social.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountNamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the AccountNamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountNamePage = (function () {
    function AccountNamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountNamePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad AccountNamePage');
    };
    return AccountNamePage;
}());
AccountNamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account-name',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-name\account-name.html"*/'<ion-header>\n\n  <ion-navbar color="galelBlue">\n\n    <ion-title>Change Account Name</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <account-name-form></account-name-form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-name\account-name.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AccountNamePage);

//# sourceMappingURL=account-name.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountNameFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountNameFormComponent = (function () {
    function AccountNameFormComponent(loading, alert, navCtrl) {
        this.loading = loading;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.account = {
            displayName: ''
        };
        this.submitted = false;
        /*    this.user.pick().then((user: any) => {
              this.account.displayName = user.displayName;
            });
        */
    }
    AccountNameFormComponent.prototype.onRename = function (form) {
    };
    AccountNameFormComponent.prototype.showAlert = function (title, subtitle) {
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        return alert.present();
    };
    return AccountNameFormComponent;
}());
AccountNameFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-name-form',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-name-form\account-name-form.html"*/'<form #accountForm="ngForm" novalidate>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label frost stacked color="dark">NAME</ion-label>\n\n      <ion-icon ios="ios-contact-outline" md="md-contact" item-left frost color="dark"></ion-icon>\n\n      <ion-input [(ngModel)]="account.displayName" name="displayName" type="text" #displayName="ngModel" spellcheck="false" autocapitalize="off"\n\n        required placeholder="Your new name" color="dark"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button large outline block round (tap)="onRename(accountForm)" color="dark">Rename</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</form>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-name-form\account-name-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], AccountNameFormComponent);

//# sourceMappingURL=account-name-form.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the AccountPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountPasswordPage = (function () {
    function AccountPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPasswordPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad AccountPasswordPage');
    };
    return AccountPasswordPage;
}());
AccountPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account-password',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-password\account-password.html"*/'<ion-header>\n\n  <ion-navbar color="galelBlue">\n\n    <ion-title>Cambiar Contraseña</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <account-password-form></account-password-form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-password\account-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AccountPasswordPage);

//# sourceMappingURL=account-password.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPasswordFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AccountPasswordForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var AccountPasswordFormComponent = (function () {
    function AccountPasswordFormComponent(loading, alert) {
        this.loading = loading;
        this.alert = alert;
        this.account = {
            password: ''
        };
        this.submitted = false;
    }
    AccountPasswordFormComponent.prototype.onModify = function (form) {
    };
    AccountPasswordFormComponent.prototype.showAlert = function (title, subtitle) {
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        return alert.present();
    };
    return AccountPasswordFormComponent;
}());
AccountPasswordFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-password-form',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-password-form\account-password-form.html"*/'<form #accountForm="ngForm" novalidate>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label frost stacked color="dark">Su Contraseña</ion-label>\n\n      <ion-icon ios="ios-contact-outline" md="md-contact" item-left frost color="dark"></ion-icon>\n\n      <ion-input [(ngModel)]="account.password" name="password" type="text" #password="ngModel" spellcheck="false" autocapitalize="off"\n\n        required placeholder="Your new password" color="dark"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button large outline block round (tap)="onModify(accountForm)" color="dark">Modificar</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</form>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-password-form\account-password-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AccountPasswordFormComponent);

//# sourceMappingURL=account-password-form.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSignupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_terms_conditions_terms_conditions__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_market_market__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountSignupFormComponent = (function () {
    function AccountSignupFormComponent(app, loading, navCtrl, alert, navParams, userAuth) {
        this.app = app;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.navParams = navParams;
        this.userAuth = userAuth;
        this.login = {};
        //Brizo
        this.userData = {
            key: '',
            email: '',
            number: undefined,
            pass: '',
            username: ''
        };
        //Brizo
        this.sellerData = {
            key: '',
            marketName: '',
            marketPlace: ''
        };
        this.submitted = false;
    }
    AccountSignupFormComponent.prototype.onSignup = function (form) {
        var _this = this;
        var loader = this.loading.create({
            content: 'Espera un momento...',
            duration: 3000
        });
        this.submitted = true;
        if (this.login.password != this.login.password2) {
            this.login.password = '';
            this.login.password2 = '';
            var alert_1 = this.alert.create({
                title: "Error de registro",
                subTitle: "Las contraseñas no coinciden. Intente de nuevo.",
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        if (!this.login.termsConditions) {
            var alert_2 = this.alert.create({
                title: "Aún no terminas",
                subTitle: "Debes aceptar los términos y condiciones de Galel.",
                buttons: ['OK']
            });
            alert_2.present();
            return;
        }
        if (form.valid) {
            loader.present();
            this.userAuth.fire
                .auth()
                .createUserWithEmailAndPassword(this.login.email, this.login.password)
                .then(function () {
                loader.onDidDismiss(function () {
                    _this.userAuth.sync();
                    _this.registerNewUserOnDatabase(); //@Brizo 
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_market_market__["a" /* MarketPage */]);
                });
                loader.dismiss();
            })
                .catch(function (error) {
                loader.onDidDismiss(function () {
                    _this.errorHandler(error);
                });
                loader.dismiss();
            });
        }
    };
    AccountSignupFormComponent.prototype.errorHandler = function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var handler = __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* User */].errorHandler(errorCode, errorMessage);
        var alert = this.alert.create({
            title: handler.title,
            subTitle: handler.message,
            buttons: ['OK']
        });
        alert.present();
    };
    //Brizo: Registrar un nuevo usuario en Database de firebase segun el UID de quien se haya registrado exitosamente.
    //        el uid sale desde el provider user.ts con current().uid
    AccountSignupFormComponent.prototype.registerNewUserOnDatabase = function () {
        //User info
        this.userData.key = this.userAuth.current().uid;
        this.userData.email = this.login.email;
        this.userData.number = this.login.number;
        this.userData.pass = this.login.password;
        this.userData.username = this.login.username;
        this.userAuth.newUserOnDatabase(this.userData);
        //Seller info
        if (this.login.toggleValue) {
            this.sellerData.key = this.userAuth.current().uid;
            this.sellerData.marketName = this.login.marketName;
            this.sellerData.marketPlace = this.login.marketDirection;
        }
        this.userAuth.newSellerOnDatabase(this.sellerData);
    };
    AccountSignupFormComponent.prototype.onTerms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_terms_conditions_terms_conditions__["a" /* TermsAndConditionsPage */]);
    };
    return AccountSignupFormComponent;
}());
AccountSignupFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-signup-form',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-signup-form\account-signup-form.html"*/'<form #loginForm="ngForm" novalidate>\n\n  <ion-list>\n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">CORREO</ion-label>\n\n      <ion-icon ios="ios-contact-outline" md="md-contact" item-left frost color="light"></ion-icon>\n\n      <ion-input type="email" (ionFocus)="signFocus=true" [(ngModel)]="login.email" name="email" #email="ngModel" spellcheck="false"\n\n        autocapitalize="off" required placeholder="Digita tu correo a asociar" color="light"></ion-input>\n\n    </ion-item>\n\n    <div class="hr-gradient-alternate"></div>  \n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">NOMBRE DE USUARIO</ion-label>\n\n      <ion-icon ios="ios-contact-outline" md="md-person" item-left frost color="light"></ion-icon>\n\n      <ion-input type="email" (ionFocus)="signFocus=true" [(ngModel)]="login.username" name="username" #username="ngModel" spellcheck="false"\n\n        autocapitalize="off" required placeholder="Digita tu nombre de usuario de preferencia" color="light"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">TELÉFONO</ion-label>\n\n      <ion-icon ios="ios-at-outline" md="md-at" item-left frost color="light"></ion-icon>\n\n      <ion-input type="email" (ionFocus)="signFocus=true" [(ngModel)]="login.number" name="number" #number="ngModel" spellcheck="false"\n\n        autocapitalize="off" required placeholder="Digite su numero con que puedan contactarlo/a" color="light"></ion-input>\n\n    </ion-item>    \n\n    <div class="hr-gradient-alternate"></div>\n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">CONTRASEÑA</ion-label>\n\n      <ion-icon ios="ios-lock-outline" md="md-lock" item-left frost color="light"></ion-icon>\n\n      <ion-input type="password" (ionFocus)="signFocus=true" (ionBlur)="signFocus=false" [(ngModel)]="login.password" name="password"\n\n        #password="ngModel" required placeholder="Digite su contraseña" color="light"></ion-input>\n\n    </ion-item>\n\n    <div class="hr-gradient-alternate"></div>\n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">CONFIRMAR CONTRASEÑA</ion-label>\n\n      <ion-icon ios="ios-lock-outline" md="md-lock" item-left frost color="light"></ion-icon>\n\n      <ion-input type="password" (ionFocus)="signFocus=true" (ionBlur)="signFocus=false" [(ngModel)]="login.password2" name="password2"\n\n        #password2="ngModel" required placeholder="Digite nuevamente la contraseña" color="light"></ion-input>\n\n    </ion-item>\n\n    <div class="hr-gradient-alternate"></div>  \n\n    <ion-item>\n\n      <ion-label frost stacked color="light" >¿Te gustaría vender?</ion-label>\n\n      <ion-toggle [(ngModel)]="login.toggleValue" name="toggleValue"></ion-toggle>\n\n    </ion-item>   \n\n\n\n    <ion-list *ngIf="login.toggleValue">\n\n      <div class="hr-gradient-alternate"></div>        \n\n      <ion-item>\n\n        <ion-label frost stacked color="light">NOMBRE DE SU NEGOCIO</ion-label>\n\n        <ion-icon ios="ios-pricetag-outline" md="md-pricetag" item-left frost color="light"></ion-icon>        \n\n        <ion-input type="text" (ionFocus)="signFocus=true" (ionBlur)="signFocus=false" [(ngModel)]="login.marketName" name="market" \n\n        placeholder="Ejemplo Galel-Souvenir"></ion-input>\n\n      </ion-item>\n\n      <div class="hr-gradient-alternate"></div>      \n\n      <ion-item>\n\n        <ion-label frost stacked color="light">DIRECCIÓN DE SU NEGOCIO</ion-label>\n\n        <ion-icon ios="ios-home-outline" md="md-home" item-left frost color="light"></ion-icon>        \n\n        <ion-input type="text" (ionFocus)="signFocus=true" (ionBlur)="signFocus=false" [(ngModel)]="login.marketDirection" name="direction" \n\n        placeholder="Colonia - calle,avenida - Ciudad, Departamento"></ion-input>\n\n      </ion-item>     \n\n    </ion-list>\n\n\n\n    <div class="hr-gradient-alternate"></div>    \n\n    <a ion-button small outline block round color="light" (click)="onTerms()"> Términos y condiciones </a>\n\n    <ion-item>\n\n      <ion-label color="light">Estoy de acuerdo</ion-label>\n\n      <ion-checkbox [(ngModel)]="login.termsConditions" name="termsConditions">   </ion-checkbox>\n\n    </ion-item>\n\n    <p color="light">Al dar click en <strong>Estoy de acuerdo</strong> usted acepta los términos y condiciones de uso de Galel-Souvenir Market</p>\n\n\n\n</ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button large outline block round (tap)="onSignup(loginForm)" color="light">REGISTRARME</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <account-login-social></account-login-social>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</form>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-signup-form\account-signup-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* User */]])
], AccountSignupFormComponent);

//# sourceMappingURL=account-signup-form.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_login_account_login__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';
 //@Brizo
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_account_login_account_login__["a" /* AccountLoginPage */]; //@Brizo
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(523);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
        //this.navCtrl.push(LoginPage);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\home\home.html"*/'<ion-slides>\n\n \n\n  <ion-slide style="background:url(&quot;assets/img/slide1.jpg&quot;) no-repeat center;background-size:cover;">\n\n    <ion-footer>\n\n      <h3 id="page-heading2" style="color:#FCFCFC;text-align:center;">Conoce nuestra cultura</h3>\n\n      <p style="color:#FFFFFF;">Ven a <strong>Honduras</strong> y disfruta</p>\n\n    </ion-footer>\n\n  </ion-slide>\n\n  <ion-slide style="background:url(&quot;assets/img/slide2.jpg&quot;) no-repeat center;background-size:cover;">\n\n    <ion-footer>\n\n      <h3 id="page-heading2" style="color:#FCFCFC;text-align:center;">Comparte tus artesanías</h3>\n\n      <p style="color:#FFFFFF;">Demuestra tu <strong>identidad</strong></p>\n\n    </ion-footer>\n\n  </ion-slide>\n\n  <ion-slide style="background:url(&quot;assets/img/slide3.jpg&quot;) no-repeat center;background-size:cover;">\n\n    <ion-footer>\n\n      <h3 id="page-heading2" style="color:#FCFCFC;text-align:center;">Exprésate...</h3>\n\n      <p style="color:#FFFFFF;">Sé <strong>Catracho</strong></p>\n\n    </ion-footer>\n\n    </ion-slide>\n\n\n\n  <ion-slide style="background-color: black;">\n\n      <img src="assets/img/slide4.jpg" alt="estela maya">\n\n      <a ion-button color="light" block outline (click)="gotoLogin()">Entrar</a>\n\n  </ion-slide>\n\n</ion-slides>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 524:
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

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyD5sZviORzTe9MkvWbGc20rbpK25vfvN_I",
    authDomain: "galel-app.firebaseapp.com",
    databaseURL: "https://galel-app.firebaseio.com",
    projectId: "galel-app",
    storageBucket: "galel-app.appspot.com",
    messagingSenderId: "16142321808"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_signup_account_signup__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_forgot_account_forgot__ = __webpack_require__(129);
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
 * Generated class for the AccountLogin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountLoginPage = (function () {
    function AccountLoginPage(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountLoginPage.prototype.ionViewDidEnter = function () {
        this.app.setTitle('Galel - Ingresar');
    };
    AccountLoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_signup_account_signup__["a" /* AccountSignupPage */]);
    };
    AccountLoginPage.prototype.onForgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__account_forgot_account_forgot__["a" /* AccountForgotPage */]);
    };
    return AccountLoginPage;
}());
AccountLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-login-page',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-login\account-login.html"*/'<ion-content>\n\n  <br /><br />\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col text-center>          \n\n          <img src="assets/Galel-Logo.png" style="max-width: 250px">\n\n      </ion-col>\n\n    </ion-row>\n\n      <ion-row>\n\n      <ion-col>\n\n           <account-login-form></account-login-form>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer class="footer-login-font" text-center padding>\n\n¿NO TIENES CUENTA? <a color="light" (tap)="onSignup()">REGISTRARME</a> - <a color="light" (tap)="onForgot()">RECUPERAR</a>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-login\account-login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AccountLoginPage);

//# sourceMappingURL=account-login.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLoginModule", function() { return AccountLoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_login_form_account_login_form__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_account_login_social_account_login_social__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// pages

// components


var AccountLoginModule = (function () {
    function AccountLoginModule() {
    }
    return AccountLoginModule;
}());
AccountLoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account_login__["a" /* AccountLoginPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_login_form_account_login_form__["a" /* AccountLoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_account_login_social_account_login_social__["a" /* AccountLoginSocialComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_login__["a" /* AccountLoginPage */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__components_account_login_form_account_login_form__["a" /* AccountLoginFormComponent */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__components_account_login_social_account_login_social__["a" /* AccountLoginSocialComponent */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_login__["a" /* AccountLoginPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_login_form_account_login_form__["a" /* AccountLoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_account_login_social_account_login_social__["a" /* AccountLoginSocialComponent */]
        ]
    })
], AccountLoginModule);

//# sourceMappingURL=account-login.module.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.js.map