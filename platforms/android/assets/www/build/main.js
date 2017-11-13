webpackJsonp([8],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaDeProductosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(196);
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

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrate_registrate__ = __webpack_require__(243);
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
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Entrar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Correo</ion-label>\n\n    <ion-input type="email"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Contraseña</ion-label>\n\n    <ion-input type="password"></ion-input>\n\n  </ion-item>\n\n  <div>\n\n    <a ion-button full (click)="gotoMarket()">Iniciar Sesión</a>\n\n  </div>\n\n  <div>\n\n    <a style="color: #387EF5" ion-button color="light" full (click)="gotoRegistrate()">Crear una cuenta</a>\n\n  </div>  \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_lista_de_productos_lista_de_productos_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrarproducto_registrarproducto__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(195);
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
    function StartPage(navCtrl, navParams, productos) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productos = productos;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registrarproducto_registrarproducto__["a" /* RegistrarproductoPage */]);
    };
    StartPage.prototype.gotoCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    StartPage.prototype.addtoCart = function () {
        //this.navCtrl.push(CartPage);
        console.log();
    };
    return StartPage;
}());
StartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-start',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\start\start.html"*/'<ion-header>\n\n  <ion-navbar color=\'primary\'>\n\n    <ion-title>¡Explora en Galel!</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="gotoCart()">\n\n        <ion-icon name="md-cart"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-searchbar \n\n  animated="true"\n\n  autocomplete="on"\n\n  placeholder=\'Buscar aqui\'\n\n  [showCancelButton]="shouldShowCancel">\n\n  </ion-searchbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding auto-hide>\n\n  \n\n  <ion-list>\n\n    <ion-card *ngFor="let item of listaDeProductos$ | async" >\n\n      <img src="../../assets/catalogo/cartera-cuero.jpg"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          <strong> {{item.name}} </strong>\n\n        </ion-card-title>\n\n        <p>\n\n          {{item.description}}\n\n        </p>\n\n        <p>\n\n            #<i>{{item.category}}</i>\n\n        </p>\n\n        <h4>\n\n          <strong> Precio: L {{item.price}} </strong>\n\n        </h4>\n\n        <button ion-item color=\'primary\' navPush="CartPage" [navParams]="{item: item}">\n\n          <ion-icon name="pricetag" color=\'white\'></ion-icon>\n\n          Comprar\n\n        </button>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n<!-- \n\n  \n\n  <ion-card>\n\n    <img src="../../assets/catalogo/ceramica-lenca.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Jarron lenca\n\n        </ion-card-title>\n\n      <p>\n\n        Jarron de cerammica lenca hecho en Guajiquiro, La Paz\n\n      </p>\n\n      <p>\n\n        Precio: $20.00\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img src="../../assets/catalogo/ceramica-maya.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Jarron Maya\n\n        </ion-card-title>\n\n      <p>\n\n        Jarron maya hecho en Santa Rosa de Copan\n\n      </p>\n\n      <p>\n\n        Precio: $20.00\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img src="../../assets/catalogo/cofre-madera.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Cofre de madera\n\n        </ion-card-title>\n\n      <p>\n\n        Cofre de madera hecho en Ojojona, FM\n\n      </p>\n\n      <p>\n\n        Precio: $20.00\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img src="../../assets/catalogo/hamacas.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Hamaca\n\n        </ion-card-title>\n\n      <p>\n\n        Hamaca hecha en San Antonio de Oriente, FM\n\n      </p>\n\n      <p>\n\n        Precio: $20.00\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img src="../../assets/catalogo/sandalias-cuero.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Sandalias de cuero\n\n        </ion-card-title>\n\n      <p>\n\n        Sandalias de cuero hecha en Valle de Angeles\n\n      </p>\n\n      <p>\n\n        Precio: $20.00\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card> -->\n\n  \n\n\n\n    <ion-fab bottom right #fab>\n\n      <a ion-fab color=\'secondary\' (click)="gotoRegistrarProducto()">\n\n        <ion-icon name="md-add"></ion-icon>\n\n      </a>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\start\start.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__services_lista_de_productos_lista_de_productos_service__["a" /* ListaDeProductosService */]])
], StartPage);

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__market_market__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_lista_de_productos_lista_de_productos_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(241);
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
    function RegistrarproductoPage(navCtrl, navParams, productos, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productos = productos;
        this.camera = camera;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__market_market__["a" /* MarketPage */]);
    };
    RegistrarproductoPage.prototype.ingresarProducto = function (item) {
        var _this = this;
        this.productos.ingresarProducto(item).then(function (ref) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__market_market__["a" /* MarketPage */], { key: ref.key });
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-registrarproducto',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\registrarproducto\registrarproducto.html"*/'<!--\n\n  Generated template for the RegistrarproductoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Vende tus artesanías!</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Nombre del producto</ion-label>\n\n    <ion-input [(ngModel)]="item.name" type="text" placeholder="Ej: Zapatilla formal Otti"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Descripción</ion-label>\n\n    <ion-input [(ngModel)]="item.description" type="text" placeholder="Ej: Zapatilla de cuero estilo oxford"></ion-input>\n\n  </ion-item>\n\n  <ion-list radio-group [(ngModel)]="item.category">\n\n    <ion-label color="dark" stacked>Categorías</ion-label>\n\n    <ion-item>\n\n      <ion-label>Alfareria</ion-label>\n\n      <ion-radio value=\'Alfareria\'></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Cueros</ion-label>\n\n      <ion-radio value=\'Cueros\'></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Calzado</ion-label>\n\n      <ion-radio value=\'Calzado\'></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Muebles</ion-label>\n\n      <ion-radio value=\'Muebles\'></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Carpinteria</ion-label>\n\n      <ion-radio value=\'Carpinteria\'></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Precio</ion-label>\n\n    <ion-input [(ngModel)]="item.price" type="number" placeholder="Ej: 130.00"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Cantidad</ion-label>\n\n    <ion-input [(ngModel)]="item.quantity" type="number" placeholder="Ej: 5"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Color</ion-label>\n\n    <ion-input [(ngModel)]="item.color" type="text" placeholder="Ej: café"></ion-input>\n\n  </ion-item>\n\n   <ion-item>\n\n    <ion-label color="dark" stacked>Marca</ion-label>\n\n    <ion-input [(ngModel)]="item.mark" type="text" placeholder="Ej: Otti"></ion-input>\n\n  </ion-item>\n\n  <br>\n\n  <button ion-button icon-start round item-right block color=\'danger\' (click)="tomarFoto()">\n\n      <ion-icon name="camera"></ion-icon>\n\n      Tomar una foto\n\n  </button>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  \n\n  <!-- COMENTAR ESTO -->\n\n  {{item | json}}\n\n\n\n  <img [src]="base64Image" *ngIf="base64Image"/>\n\n  \n\n  <a ion-button full (click)="ingresarProducto(item)"> ¡Vender! </a>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\registrarproducto\registrarproducto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__services_lista_de_productos_lista_de_productos_service__["a" /* ListaDeProductosService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
], RegistrarproductoPage);

//# sourceMappingURL=registrarproducto.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market__ = __webpack_require__(37);
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
        selector: 'page-preferences',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\preferences\preferences.html"*/'<!--\n\n  Generated template for the PreferencesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Encontrá lo que querés</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h4>Categorías</h4>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Alfareria</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Cueros</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Calzado</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Muebles</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Carpintería</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n   <ion-item>\n\n    <ion-label color="dark" stacked>Precio mínimo</ion-label>\n\n    <ion-input type="text" placeholder="Ej: 13.00"></ion-input>\n\n  </ion-item>\n\n   <ion-item>\n\n    <ion-label color="dark" stacked>Precio máximo</ion-label>\n\n    <ion-input type="text" placeholder="Ej: 130.00"></ion-input>\n\n  </ion-item>\n\n  <a ion-button full (click)="gotoMarket()"> ¡Buscá ya! </a>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\preferences\preferences.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PreferencesPage);

//# sourceMappingURL=preferences.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tucuenta_tucuenta__ = __webpack_require__(141);
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
        selector: 'page-more',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\more\more.html"*/'<!--\n\n  Generated template for the MorePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>¡Más opciones!</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item (click)="gotoCuenta()">\n\n      <ion-icon name="md-body" item-start></ion-icon> Tu cuenta \n\n    </button>\n\n\n\n    <button ion-item> \n\n      <ion-icon name="md-list" item-start></ion-icon> Tu lista\n\n    </button>\n\n\n\n    <button ion-item> \n\n      <ion-icon name="md-basket" item-start></ion-icon> Tus ordenes \n\n    </button>\n\n  \n\n    <button ion-item> \n\n      <ion-icon name="md-heart" item-start></ion-icon> Tus recomendaciones \n\n    </button>\n\n  <!-- El metodo gotoLogin() aqui es diferente -->\n\n  <!-- Al navegar dentro de las tabs se crea un nav stack[] -->\n\n  <!-- Al hacer un nav push para salir de las tabs ocurre un problema -->\n\n  <!-- Abre la pagina de login dentro de las tabs -->\n\n  <!-- esto ocurre debido a que en el stack de navegacion todavia esta la pagina principal de tabs -->\n\n  <!-- y solo sustituye la tab actual por la pagina de login -->\n\n  <!-- para solucionarlo se debe obtener el id de la pagina Root de tabs -->\n\n  <!-- y sustituirlo por la de login, de esta manera se crea un nuevo stack de navegacion -->\n\n  <!-- y podemos navegar de nuevo con tranquilidad por la app -->\n\n  <!-- :v puede verlo en el archivo "src\pages\more\more.ts" v: -->\n\n    <button ion-item (click)="gotoLogin()">\n\n      <ion-icon name="md-log-out" item-start></ion-icon> Cerrar sesión \n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\more\more.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], MorePage);

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        selector: 'page-terminos',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\terminos\terminos.html"*/'<!--\n\n  Generated template for the TerminosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Términos y Condiciones</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h3>Términos y condiciones de uso de Galel - Souvenir Market</h3>\n\n  <p>\n\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum pulvinar velit ultrices viverra. Curabitur ac elit elementum, volutpat mi nec, tincidunt neque. Phasellus sit amet porta tortor, ac efficitur arcu. Donec at egestas ipsum. Phasellus sit amet erat augue. Nullam pretium lacinia vehicula. Sed eu tincidunt nulla. Aliquam at turpis pellentesque, posuere neque eget, finibus arcu. Vestibulum ac accumsan odio. Nulla lacinia, leo vel dictum pulvinar, magna neque sodales turpis, vel feugiat nisl lacus at ante. Maecenas sed tellus vel nulla facilisis semper. Aliquam erat volutpat. Ut venenatis nisl sit amet efficitur finibus. Aenean facilisis placerat tellus, a vulputate ex pretium ac.\n\n\n\nSed volutpat vitae ligula ac auctor. Aenean ut vestibulum nisl. Praesent posuere pretium purus vitae tristique. Donec massa leo, lacinia in turpis quis, semper mollis massa. Donec pharetra nibh ipsum, quis elementum sem mattis in. Nullam quis nisl quam. Nam vel urna ornare, rutrum risus a, egestas turpis. Nulla eu mollis urna. Proin dignissim lacus quis rutrum scelerisque. Mauris ut commodo tellus. Suspendisse iaculis, eros sed auctor vehicula, quam nisl bibendum lorem, at mattis sem nisi finibus urna.\n\n\n\nNunc lobortis varius ligula. Praesent eleifend sapien non nisl molestie aliquet at eu elit. Fusce dignissim justo quis porttitor sagittis. Phasellus id ligula ex. Cras interdum at ligula vehicula pretium. Nam eu odio a nisl maximus scelerisque. Maecenas venenatis sem ut magna sollicitudin, ac mollis sem convallis. Donec volutpat elit dui, sit amet sagittis tortor hendrerit a. Maecenas nunc lectus, faucibus eget nisl at, ultrices rutrum velit. Nullam consectetur purus id eros consectetur tincidunt. Curabitur nibh tortor, auctor non sagittis non, porta sed nisl.\n\n\n\nNulla sit amet blandit risus. Proin vel semper velit. Aenean at turpis dignissim, volutpat odio cursus, convallis dui. Etiam tristique tristique ante in mollis. Mauris suscipit metus et ipsum consequat, non sagittis nunc congue. Praesent mi ex, sodales sodales eros sit amet, cursus accumsan magna. Sed gravida luctus sodales. Aliquam sed tortor quis metus rhoncus consequat.\n\n\n\nVivamus et nunc sit amet leo malesuada consequat ac eu dui. Aenean porttitor commodo tortor a placerat. Nunc nibh diam, feugiat et velit ac, iaculis placerat est. Nunc scelerisque nisi nec viverra lacinia. Duis aliquet imperdiet fermentum. Morbi sodales leo magna, at consequat lectus lobortis vitae. Ut eu euismod justo, eu tempor lorem. Donec vestibulum sit amet diam et rutrum. Donec sed nulla imperdiet velit volutpat interdum eu nec massa. Quisque consequat eleifend purus at eleifend. Vestibulum id elementum arcu, vel tincidunt lectus. Praesent ut tellus eget dolor vehicula dictum. Praesent metus purus, fringilla nec velit id, facilisis vulputate velit. Aliquam eleifend luctus odio vitae ornare.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\terminos\terminos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TerminosPage);

//# sourceMappingURL=terminos.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TucuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        selector: 'page-tucuenta',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\tucuenta\tucuenta.html"*/'<!--\n\n  Generated template for the TucuentaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Tu cuenta</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div>\n\n      <h3>Informacion del Usuario</h3>\n\n      <br>\n\n      <h4>Axel Córdova</h4>\n\n      <br>\n\n\n\n      <h4>Direccion</h4>\n\n      <p>\n\n        2154 Nw 23rd Ct\n\n        <br> Miami, Fl 33142-7275\n\n        <br> Estados Unidos\n\n        <br>\n\n\n\n      </p>\n\n      <br>\n\n      <br>\n\n\n\n      <h4>Ciudad/Departamento</h4>\n\n      <p>\n\n        Tegucigalpa, Francisco Morazan\n\n      </p>\n\n      <br>\n\n      <br>\n\n\n\n      <h4>Metodo de pago</h4>\n\n      <p>\n\n        Tarjeta VISA: XXX-XXXX-XXXX-3456\n\n        <br> Internacional\n\n      </p>\n\n      <br>\n\n      <br>\n\n\n\n      <h4>Numero de telefono</h4>\n\n      <p>\n\n        Número de teléfono: +504 3305-6603\n\n      </p>\n\n      <br>\n\n      <br>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\tucuenta\tucuenta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TucuentaPage);

//# sourceMappingURL=tucuenta.js.map

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		194
	],
	"../pages/cuentausuario/cuentausuario.module": [
		440,
		0
	],
	"../pages/market/market.module": [
		441,
		7
	],
	"../pages/more/more.module": [
		442,
		6
	],
	"../pages/preferences/preferences.module": [
		443,
		5
	],
	"../pages/registrarproducto/registrarproducto.module": [
		444,
		4
	],
	"../pages/start/start.module": [
		445,
		3
	],
	"../pages/terminos/terminos.module": [
		446,
		2
	],
	"../pages/tucuenta/tucuenta.module": [
		447,
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
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(195);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
        ],
    })
], CartPageModule);

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market__ = __webpack_require__(37);
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
        selector: 'page-cart',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\cart\cart.html"*/'<!--\n\n  Generated template for the CartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Tu carrito</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n <h1></h1>\n\n <p>Ups!</p><br>\n\n <p>Por los momentos no has agregado ningun producto</p><br>\n\n <p>Explora en nuestra tienda!</p><br>\n\n <div style="font-size:0px; height:40px; line-height:0px;"></div><!-- SPACER -->\n\n <a ion-button full color=\'secondary\'> Procede a cancelar </a>\n\n <a ion-button full (click)="gotoMarket()"> ¡Explora en Galel! </a>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistratePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cmpregistro_cmpregistro__ = __webpack_require__(244);
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
        selector: 'page-registrate',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\registrate\registrate.html"*/'<!--\n\n  Generated template for the RegistratePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Registrate en Galel!</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Tu nombre</ion-label>\n\n    <ion-input type="email" placeholder="Nombre completo"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Correo</ion-label>\n\n    <ion-input type="password" placeholder="email@example.com"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Contraseña</ion-label>\n\n    <ion-input type="password"></ion-input>\n\n  </ion-item>\n\n  <div>\n\n    <a ion-button full (click)="gotoCompletar()"> Registrate </a>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\registrate\registrate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RegistratePage);

//# sourceMappingURL=registrate.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmpregistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminos_terminos__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__market_market__ = __webpack_require__(37);
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
        selector: 'page-cmpregistro',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\cmpregistro\cmpregistro.html"*/'<!--\n\n  Generated template for the CmpregistroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Completá tu registro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Dirección de domicilio</ion-label>\n\n    <ion-input type="text" placeholder="Colonia - calle,avenida - Numero casa"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Número de teléfono</ion-label>\n\n    <ion-input type="tel" placeholder="+504XXXX-XXXX"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Ciudad/Departamento</ion-label>\n\n    <ion-input type="text" placeholder="Ciudad, Departamento"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Tarjeta de débito/crédito</ion-label>\n\n    <ion-input type="number" placeholder="1234 5678 9012 3456"></ion-input>\n\n  </ion-item>\n\n   <ion-item>\n\n    <ion-label color="dark" stacked>Código CVC</ion-label>\n\n    <ion-input type="number" placeholder="CVC"></ion-input>\n\n  </ion-item>\n\n   <ion-item>\n\n    <ion-label color="dark" stacked>Fecha vencimiento de tarjeta</ion-label>\n\n    <ion-input type="date" placeholder="1234 5678 9012 3456"></ion-input>\n\n  </ion-item>\n\n  <div style="font-size:0px; height:40px; line-height:0px;"></div><!-- SPACER -->\n\n  <ion-item>\n\n    <ion-label>¿Te gustaría vender?</ion-label>\n\n    <ion-toggle [(ngModel)]="toggleValue"></ion-toggle>\n\n  </ion-item>\n\n  <ion-list *ngIf="toggleValue">\n\n    <ion-item>\n\n      <ion-label color="dark" stacked>Nombre del Negocio</ion-label>\n\n      <ion-input type="text" placeholder="Galel-Souvenir Market"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="dark" stacked>Dirección del negocio</ion-label>\n\n      <ion-input type="text" placeholder="Colonia - calle,avenida - Ciudad, Departamento"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="dark" stacked>Tarjeta de débito/crédito cargable</ion-label>\n\n      <ion-input type="number" placeholder="1234 5678 9012 3456"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="dark" stacked>Cuenta bancaria válida</ion-label>\n\n      <ion-input type="number" placeholder="Numero de cuenta"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div style="font-size:0px; height:40px; line-height:0px;"></div><!-- SPACER -->\n\n  <a style="color: #387EF5" ion-button color="light" full (click)="gotoTerminos()"> Términos y condiciones </a>\n\n  <ion-item>\n\n    <ion-label>Estoy de acuerdo</ion-label>\n\n    <ion-checkbox></ion-checkbox>\n\n  </ion-item>\n\n  <p>Al dar click en <strong>Estoy de acuerdo</strong> usted acepta los términos y condiciones de uso de Galel-Souvenir Market</p>\n\n  <a ion-button full (click)="gotoMarket()"> ¡Vamos a explorar! </a>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\cmpregistro\cmpregistro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CmpregistroPage);

//# sourceMappingURL=cmpregistro.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(114);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\home\home.html"*/'<ion-slides>\n\n<!--   \n\n  <ion-slide style="background:url(&quot;assets/img/slide1.jpg&quot;) no-repeat center;background-size:cover;">\n\n    <ion-footer>\n\n      <h3 id="page-heading2" style="color:#FCFCFC;text-align:center;">Conoce nuestra cultura</h3>\n\n      <p style="color:#FFFFFF;">Ven a <strong>Honduras</strong> y disfruta</p>\n\n    </ion-footer>\n\n  </ion-slide>\n\n  <ion-slide style="background:url(&quot;assets/img/slide2.jpg&quot;) no-repeat center;background-size:cover;">\n\n    <ion-footer>\n\n      <h3 id="page-heading2" style="color:#FCFCFC;text-align:center;">Comparte tus artesanías</h3>\n\n      <p style="color:#FFFFFF;">Demuestra tu <strong>identidad</strong></p>\n\n    </ion-footer>\n\n  </ion-slide>\n\n  <ion-slide style="background:url(&quot;assets/img/slide3.jpg&quot;) no-repeat center;background-size:cover;">\n\n    <ion-footer>\n\n      <h3 id="page-heading2" style="color:#FCFCFC;text-align:center;">Exprésate...</h3>\n\n      <p style="color:#FFFFFF;">Sé <strong>Catracho</strong></p>\n\n    </ion-footer>\n\n    </ion-slide> -->\n\n\n\n  <ion-slide style="background-color: black;">\n\n      <img src="assets/img/slide4.jpg" alt="estela maya">\n\n      <a ion-button color="light" block outline (click)="gotoLogin()">Entrar</a>\n\n  </ion-slide>\n\n</ion-slides>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(303);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home_module__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_market_market__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_start_start__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_preferences_preferences__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_more_more__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_registrate_registrate__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cmpregistro_cmpregistro__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_terminos_terminos__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_registrarproducto_registrarproducto__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tucuenta_tucuenta__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_auto_hide_auto_hide__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_lista_de_productos_lista_de_productos_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__firebase_credentials__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { HomePage } from '../pages/home/home';









//import { CartPage } from '../pages/cart/cart';  //se comenta porque se tiene que importar el cartpage.module





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            //HomePage,
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_market_market__["a" /* MarketPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_preferences_preferences__["a" /* PreferencesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_registrate_registrate__["a" /* RegistratePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_cmpregistro_cmpregistro__["a" /* CmpregistroPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_terminos_terminos__["a" /* TerminosPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_registrarproducto_registrarproducto__["a" /* RegistrarproductoPage */],
            //CartPage, //esto es incorrecto
            __WEBPACK_IMPORTED_MODULE_19__pages_tucuenta_tucuenta__["a" /* TucuentaPage */],
            __WEBPACK_IMPORTED_MODULE_20__directives_auto_hide_auto_hide__["a" /* AutoHideDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cuentausuario/cuentausuario.module#CuentausuarioPageModule', name: 'CuentausuarioPage', segment: 'cuentausuario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/market/market.module#MarketPageModule', name: 'MarketPage', segment: 'market', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/preferences/preferences.module#PreferencesPageModule', name: 'PreferencesPage', segment: 'preferences', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registrarproducto/registrarproducto.module#RegistrarproductoPageModule', name: 'RegistrarproductoPage', segment: 'registrarproducto', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terminos/terminos.module#TerminosPageModule', name: 'TerminosPage', segment: 'terminos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tucuenta/tucuenta.module#TucuentaPageModule', name: 'TucuentaPage', segment: 'tucuenta', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart_module__["CartPageModule"],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home_module__["a" /* HomePageModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_22__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            //HomePage,
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_market_market__["a" /* MarketPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_preferences_preferences__["a" /* PreferencesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_registrate_registrate__["a" /* RegistratePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_cmpregistro_cmpregistro__["a" /* CmpregistroPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_terminos_terminos__["a" /* TerminosPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_registrarproducto_registrarproducto__["a" /* RegistrarproductoPage */],
            //CartPage,
            __WEBPACK_IMPORTED_MODULE_19__pages_tucuenta_tucuenta__["a" /* TucuentaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_21__services_lista_de_productos_lista_de_productos_service__["a" /* ListaDeProductosService */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__["a" /* Camera */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_start__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preferences_preferences__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_more__ = __webpack_require__(139);
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
        selector: 'page-market',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\market\market.html"*/'<ion-tabs color=\'primary\'>\n\n    <ion-tab [root]="startRoot" tabTitle="Inicio" tabIcon="md-home"></ion-tab>\n\n    <ion-tab [root]="preferencesRoot" tabTitle="Filtros" tabIcon="md-funnel"></ion-tab>\n\n    <ion-tab [root]="moreRoot" tabTitle="Opciones" tabIcon="md-more"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\market\market.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], MarketPage);

//# sourceMappingURL=market.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(286);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(286);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 438:
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

/***/ 439:
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

/***/ })

},[287]);
//# sourceMappingURL=main.js.map