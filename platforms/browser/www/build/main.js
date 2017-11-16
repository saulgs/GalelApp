webpackJsonp([7],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_login_account_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_forgot_account_forgot__ = __webpack_require__(114);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AccountSignupPage);

//# sourceMappingURL=account-signup.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_login_account_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_signup_account_signup__ = __webpack_require__(113);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AccountForgotPage);

//# sourceMappingURL=account-forgot.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseStorageService = (function () {
    function FirebaseStorageService() {
    }
    FirebaseStorageService.prototype.uploadImage = function (key, imageString) {
        var _this = this;
        var image = 'p_' + key + '.jpg', storageRef, parseUpload;
        return new Promise(function (resolve, reject) {
            storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('products/' + image);
            parseUpload = storageRef.putString(imageString, 'data_url');
            parseUpload.on('state_changed', function (_snapshot) {
                // We could log the progress here IF necessary
                //console.log('snapshot progess ' + _snapshot);
            }, function (_err) {
                reject(_err);
            }, function (success) {
                resolve(parseUpload.snapshot);
                _this.downloadURL = parseUpload.snapshot.downloadURL;
            });
        });
    };
    /*
        uploadImage(key: string, imageString: string){
           let image       : string  = 'p_' + key + '.jpg';
     
            firebase.storage().ref('products/' + image).putString(imageString, 'data_url').then(function(snapshot) {
                //console.log('Uploaded a data_url string!');
            });
            
        }
    */
    /*
        uploadImage(key: string, imageString: string){
            let image       : string  = 'p_' + key + '.jpg',
                storageRef  : any,
                uploadTask  : any;
    
            storageRef = firebase.storage().ref('products/' + image);
            uploadTask = storageRef.putString(image, 'data_url');
            
            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', function(snapshot){
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                //var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                //console.log('Upload is ' + progress + '% done');
                //switch (snapshot.state) {
                //case firebase.storage.TaskState.PAUSED: // or 'paused'
                  //  console.log('Upload is paused');
                    //break;
                //case firebase.storage.TaskState.RUNNING: // or 'running'
                  //  console.log('Upload is running');
                    //break;
                //}
            }, function(error) {
                // Handle unsuccessful uploads
            }, function(url) {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                this.downloadURL = uploadTask.snapshot.downloadURL;
            });
            
        }
    */
    /*
        getImage(key: string){
            let image  : string  = 'p_' + key + '.jpg',
            storageRef : any,
            url        : string;
            return firebase.storage().ref('products/' + image).getDownloadURL().then(function(url) {
                // `url` is the download URL for the image
                // Inserted into an <img> element:
                //var img = document.getElementById('myimg');
                console.log(url);
                return url;
              }).catch(function(error) {
                // Handle any errors
                return 'No se pudo mostrar la imagen';
              });
            }
        }*/
    FirebaseStorageService.prototype.getImage = function (key) {
        var image = 'p_' + key + '.jpg';
        var pathReference = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref('products/' + image);
        return pathReference.getDownloadURL().then(function (url) {
            return url;
        }).catch(function (error) {
            // Handle any errors
        });
    };
    FirebaseStorageService.prototype.getUrl = function () {
        return this.downloadURL;
    };
    return FirebaseStorageService;
}());
FirebaseStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FirebaseStorageService);

//# sourceMappingURL=firebase-storage.service.js.map

/***/ }),

/***/ 128:
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], ToastService);

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaDeProductosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(254);
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
    ListaDeProductosService.prototype.editarProducto = function (key, item) {
        return this.ReferenciaListaDeProductos.update(key, item);
    };
    return ListaDeProductosService;
}());
ListaDeProductosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
], ListaDeProductosService);

//# sourceMappingURL=lista-de-productos.service.js.map

/***/ }),

/***/ 134:
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TermsAndConditionsPage);

//# sourceMappingURL=terms-conditions.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_storage_firebase_storage_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toast_toast_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lista_de_productos_lista_de_productos_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registrarproducto_registrarproducto__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(270);
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
    function StartPage(navCtrl, navParams, productos, toast, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productos = productos;
        this.toast = toast;
        this.storage = storage;
        this.listaDeProductos$ = this.productos
            .getListaDeProductos() //Una lista de la Base de Datos
            .snapshotChanges() // Los datos de forma (llave, valor)
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        //this.toast.show(`Se han actualizado los productos.`);
    }
    StartPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad StartPage');
        //console.log(item.image);
    };
    StartPage.prototype.gotoRegistrarProducto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__registrarproducto_registrarproducto__["a" /* RegistrarproductoPage */]);
    };
    StartPage.prototype.gotoCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    StartPage.prototype.addtoCart = function () {
        //this.navCtrl.push(CartPage);
        console.log();
    };
    return StartPage;
}());
StartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-start',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\start\start.html"*/'<ion-header>\n\n  <ion-navbar color=\'galelBlue\'>\n\n    <ion-title>¡Explora en Galel!</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="gotoCart()">\n\n        <ion-icon name="md-cart"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-searchbar \n\n  animated="true"\n\n  autocomplete="on"\n\n  placeholder=\'Buscar aqui\'\n\n  [showCancelButton]="shouldShowCancel">\n\n  </ion-searchbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding auto-hide>\n\n  \n\n  <ion-list>\n\n    <ion-row>\n\n        <ion-col *ngFor="let item of listaDeProductos$ | async">\n\n            <ion-card  >\n\n                <img [src]="item.image"/>\n\n                <ion-card-content>\n\n                  <ion-card-title>\n\n                    <strong> {{item.name}} </strong>\n\n                  </ion-card-title>\n\n                  <p>\n\n                    {{item.description}}\n\n                  </p>\n\n                  <p>\n\n                      #<i>{{item.category}}</i>\n\n                  </p>\n\n                  <h4>\n\n                    <strong> Precio: L {{item.price}} </strong>\n\n                  </h4>\n\n                  \n\n                  <ion-row>\n\n                    <ion-col>\n\n                        <button ion-button medium block round color=\'galelOrange\' navPush="CartPage" [navParams]="{item: item}">Añadir a carrito</button>              \n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <button ion-button medium outline block round color=\'galelOrange\' navPush="CartPage" [navParams]="{item: item}">Añadir a favoritos</button>              \n\n                    </ion-col>          \n\n                  </ion-row>\n\n                </ion-card-content>\n\n              </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    \n\n  </ion-list>\n\n\n\n<!-- \n\n  \n\n  <ion-card>\n\n    <img src="../../assets/catalogo/ceramica-lenca.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Jarron lenca\n\n        </ion-card-title>\n\n      <p>\n\n        Jarron de cerammica lenca hecho en Guajiquiro, La Paz\n\n      </p>\n\n      <p>\n\n        Precio: $20.00\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img src="../../assets/catalogo/ceramica-maya.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Jarron Maya\n\n        </ion-card-title>\n\n      <p>\n\n        Jarron maya hecho en Santa Rosa de Copan\n\n      </p>\n\n      <p>\n\n        Precio: $20.00\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img src="../../assets/catalogo/cofre-madera.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Cofre de madera\n\n        </ion-card-title>\n\n      <p>\n\n        Cofre de madera hecho en Ojojona, FM\n\n      </p>\n\n      <p>\n\n        Precio: $20.00\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img src="../../assets/catalogo/hamacas.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Hamaca\n\n        </ion-card-title>\n\n      <p>\n\n        Hamaca hecha en San Antonio de Oriente, FM\n\n      </p>\n\n      <p>\n\n        Precio: $20.00\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img src="../../assets/catalogo/sandalias-cuero.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Sandalias de cuero\n\n        </ion-card-title>\n\n      <p>\n\n        Sandalias de cuero hecha en Valle de Angeles\n\n      </p>\n\n      <p>\n\n        Precio: $20.00\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card> -->\n\n  \n\n\n\n    <ion-fab bottom right #fab>\n\n      <a ion-fab color=\'secondary\' (click)="gotoRegistrarProducto()">\n\n        <ion-icon name="md-add"></ion-icon>\n\n      </a>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\start\start.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_lista_de_productos_lista_de_productos_service__["a" /* ListaDeProductosService */],
        __WEBPACK_IMPORTED_MODULE_1__services_toast_toast_service__["a" /* ToastService */],
        __WEBPACK_IMPORTED_MODULE_0__services_firebase_storage_firebase_storage_service__["a" /* FirebaseStorageService */]])
], StartPage);

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_market__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lista_de_productos_lista_de_productos_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_firebase_storage_firebase_storage_service__ = __webpack_require__(115);
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
    function RegistrarproductoPage(navCtrl, navParams, productos, camera, toast, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productos = productos;
        this.camera = camera;
        this.toast = toast;
        this.storage = storage;
        this.item = {
            name: '',
            description: '',
            category: '',
            price: undefined,
            quantity: undefined,
            color: '',
            mark: '',
            image: ''
        };
        this.options = {
            quality: 30,
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
            //this.toast.show(`${item.name} se ha guardado`);
            _this.storage.uploadImage(ref.key, _this.base64Image).then(function (snapshot) {
                item.image = _this.storage.getUrl();
                _this.productos.editarProducto(ref.key, item);
            });
            //this.storage.getImage(ref.key).then( url => {
            //item.image = url;
            //}); 
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
        selector: 'page-registrarproducto',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\registrarproducto\registrarproducto.html"*/'<!--\n\n  Generated template for the RegistrarproductoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Vende tus artesanías!</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-button icon-start round item-right block color=\'danger\' (click)="tomarFoto()">\n\n      <ion-icon name="camera"></ion-icon>\n\n      Tomar una foto\n\n  </button>\n\n  <img [src]="base64Image" *ngIf="base64Image" width="320" height="240"/>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Nombre del producto</ion-label>\n\n    <ion-input [(ngModel)]="item.name" type="text" placeholder="Ej: Zapatilla formal Otti"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Descripción</ion-label>\n\n    <ion-input [(ngModel)]="item.description" type="text" placeholder="Ej: Zapatilla de cuero estilo oxford"></ion-input>\n\n  </ion-item>\n\n  <ion-list radio-group [(ngModel)]="item.category">\n\n    <ion-label color="dark" stacked>Categorías</ion-label>\n\n    <ion-item>\n\n      <ion-label>Alfareria</ion-label>\n\n      <ion-radio value=\'Alfareria\'></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Cueros</ion-label>\n\n      <ion-radio value=\'Cueros\'></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Calzado</ion-label>\n\n      <ion-radio value=\'Calzado\'></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Muebles</ion-label>\n\n      <ion-radio value=\'Muebles\'></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Carpinteria</ion-label>\n\n      <ion-radio value=\'Carpinteria\'></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Precio</ion-label>\n\n    <ion-input [(ngModel)]="item.price" type="number" placeholder="Ej: 130.00"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Cantidad</ion-label>\n\n    <ion-input [(ngModel)]="item.quantity" type="number" placeholder="Ej: 5"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="dark" stacked>Color</ion-label>\n\n    <ion-input [(ngModel)]="item.color" type="text" placeholder="Ej: café"></ion-input>\n\n  </ion-item>\n\n   <ion-item>\n\n    <ion-label color="dark" stacked>Marca</ion-label>\n\n    <ion-input [(ngModel)]="item.mark" type="text" placeholder="Ej: Otti"></ion-input>\n\n  </ion-item>\n\n  <br>\n\n\n\n  <br>\n\n  <br>\n\n  <br>\n\n  \n\n  <!-- COMENTAR ESTO \n\n  {{item | json}}\n\n  -->\n\n\n\n  <!-- <img [src]="base64Image" *ngIf="base64Image"/> -->\n\n  \n\n  <a ion-button full (click)="ingresarProducto(item)"> ¡Vender! </a>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\registrarproducto\registrarproducto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_lista_de_productos_lista_de_productos_service__["a" /* ListaDeProductosService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__["a" /* ToastService */],
        __WEBPACK_IMPORTED_MODULE_6__services_firebase_storage_firebase_storage_service__["a" /* FirebaseStorageService */]])
], RegistrarproductoPage);

//# sourceMappingURL=registrarproducto.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market__ = __webpack_require__(41);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], PreferencesPage);

//# sourceMappingURL=preferences.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tucuenta_tucuenta__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_login_account_login__ = __webpack_require__(58);
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
    MorePage.prototype.gotoLogin = function () {
        console.log(this.app.getRootNavs()[0]);
        /*
        *No utilizar getRootNav() ya que en el siguiente "Major Release" desaparecera
        *
        *  this.app.getRootNav().setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
        */
        this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_3__account_login_account_login__["a" /* AccountLoginPage */], {}, { animate: true, direction: 'forward' });
    };
    return MorePage;
}());
MorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-more',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\more\more.html"*/'<!--\n\n  Generated template for the MorePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="galelBlue">\n\n    <ion-title>¡Más opciones!</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item (click)="gotoCuenta()">\n\n      <ion-icon name="md-body" item-start></ion-icon> Tu cuenta \n\n    </button>\n\n\n\n    <button ion-item> \n\n      <ion-icon name="md-list" item-start></ion-icon> Tu lista\n\n    </button>\n\n\n\n    <button ion-item> \n\n      <ion-icon name="md-basket" item-start></ion-icon> Tus ordenes \n\n    </button>\n\n  \n\n    <button ion-item> \n\n      <ion-icon name="md-heart" item-start></ion-icon> Tus recomendaciones \n\n    </button>\n\n  <!-- El metodo gotoLogin() aqui es diferente -->\n\n  <!-- Al navegar dentro de las tabs se crea un nav stack[] -->\n\n  <!-- Al hacer un nav push para salir de las tabs ocurre un problema -->\n\n  <!-- Abre la pagina de login dentro de las tabs -->\n\n  <!-- esto ocurre debido a que en el stack de navegacion todavia esta la pagina principal de tabs -->\n\n  <!-- y solo sustituye la tab actual por la pagina de login -->\n\n  <!-- para solucionarlo se debe obtener el id de la pagina Root de tabs -->\n\n  <!-- y sustituirlo por la de login, de esta manera se crea un nuevo stack de navegacion -->\n\n  <!-- y podemos navegar de nuevo con tranquilidad por la app -->\n\n  <!-- :v puede verlo en el archivo "src\pages\more\more.ts" v: -->\n\n    <button ion-item (click)="gotoLogin()">\n\n      <ion-icon name="md-log-out" item-start></ion-icon> Cerrar sesión \n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\more\more.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], MorePage);

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 160:
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
        selector: 'page-tucuenta',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\tucuenta\tucuenta.html"*/'<!--\n\n  Generated template for the TucuentaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Tu cuenta</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div>\n\n      <h3>Informacion del Usuario</h3>\n\n      <br>\n\n      <h4>Axel Córdova</h4>\n\n      <br>\n\n\n\n      <h4>Direccion</h4>\n\n      <p>\n\n        2154 Nw 23rd Ct\n\n        <br> Miami, Fl 33142-7275\n\n        <br> Estados Unidos\n\n        <br>\n\n\n\n      </p>\n\n      <br>\n\n      <br>\n\n\n\n      <h4>Ciudad/Departamento</h4>\n\n      <p>\n\n        Tegucigalpa, Francisco Morazan\n\n      </p>\n\n      <br>\n\n      <br>\n\n\n\n      <h4>Metodo de pago</h4>\n\n      <p>\n\n        Tarjeta VISA: XXX-XXXX-XXXX-3456\n\n        <br> Internacional\n\n      </p>\n\n      <br>\n\n      <br>\n\n\n\n      <h4>Numero de telefono</h4>\n\n      <p>\n\n        Número de teléfono: +504 3305-6603\n\n      </p>\n\n      <br>\n\n      <br>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\tucuenta\tucuenta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TucuentaPage);

//# sourceMappingURL=tucuenta.js.map

/***/ }),

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account-email/account-email.module": [
		213
	],
	"../pages/account-forgot/account-forgot.module": [
		271
	],
	"../pages/account-login/account-login.module": [
		72
	],
	"../pages/account-name/account-name.module": [
		272
	],
	"../pages/account-password/account-password.module": [
		273
	],
	"../pages/account-signup/account-signup.module": [
		274
	],
	"../pages/cart/cart.module": [
		275
	],
	"../pages/cuentausuario/cuentausuario.module": [
		510,
		0
	],
	"../pages/market/market.module": [
		511,
		6
	],
	"../pages/more/more.module": [
		512,
		5
	],
	"../pages/preferences/preferences.module": [
		513,
		4
	],
	"../pages/registrarproducto/registrarproducto.module": [
		514,
		3
	],
	"../pages/start/start.module": [
		515,
		2
	],
	"../pages/terms-conditions/terms-conditions.module": [
		276
	],
	"../pages/tucuenta/tucuenta.module": [
		516,
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
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEmailModule", function() { return AccountEmailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_email__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_email_form_account_email_form__ = __webpack_require__(360);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__components_account_email_form_account_email_form__["a" /* AccountEmailFormComponent */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_email__["a" /* AccountEmailPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_email__["a" /* AccountEmailPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_email_form_account_email_form__["a" /* AccountEmailFormComponent */]
        ]
    })
], AccountEmailModule);

//# sourceMappingURL=account-email.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market__ = __webpack_require__(41);
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
        selector: 'page-cart',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\cart\cart.html"*/'<!--\n\n  Generated template for the CartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="galelOrange">\n\n    <ion-title>Tu carrito</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n <h1></h1>\n\n <p>Ups!</p><br>\n\n <p>Por los momentos no has agregado ningun producto</p><br>\n\n <p>Explora en nuestra tienda!</p><br>\n\n <div style="font-size:0px; height:40px; line-height:0px;"></div><!-- SPACER -->\n\n <a ion-button full block round color=\'secondary\'> Realizar Compra </a>\n\n <a ion-button full block round (click)="gotoMarket()"> ¡Explora en Galel! </a>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountForgotModule", function() { return AccountForgotModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_forgot__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_forgot_form_account_forgot_form__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_login_account_login_module__ = __webpack_require__(72);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_forgot__["a" /* AccountForgotPage */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__components_account_forgot_form_account_forgot_form__["a" /* AccountForgotFormComponent */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_forgot__["a" /* AccountForgotPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_forgot_form_account_forgot_form__["a" /* AccountForgotFormComponent */]
        ]
    })
], AccountForgotModule);

//# sourceMappingURL=account-forgot.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNameModule", function() { return AccountNameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_name__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_name_form_account_name_form__ = __webpack_require__(484);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__components_account_name_form_account_name_form__["a" /* AccountNameFormComponent */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_name__["a" /* AccountNamePage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_name__["a" /* AccountNamePage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_name_form_account_name_form__["a" /* AccountNameFormComponent */]
        ]
    })
], AccountNameModule);

//# sourceMappingURL=account-name.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPasswordModule", function() { return AccountPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_password__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_password_form_account_password_form__ = __webpack_require__(486);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__components_account_password_form_account_password_form__["a" /* AccountPasswordFormComponent */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_password__["a" /* AccountPasswordPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_password__["a" /* AccountPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_password_form_account_password_form__["a" /* AccountPasswordFormComponent */]
        ]
    })
], AccountPasswordModule);

//# sourceMappingURL=account-password.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSignupModule", function() { return AccountSignupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_signup__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_signup_form_account_signup_form__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_login_account_login_module__ = __webpack_require__(72);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__components_account_signup_form_account_signup_form__["a" /* AccountSignupFormComponent */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_signup__["a" /* AccountSignupPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_signup__["a" /* AccountSignupPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_account_signup_form_account_signup_form__["a" /* AccountSignupFormComponent */]
        ]
    })
], AccountSignupModule);

//# sourceMappingURL=account-signup.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(270);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
        ],
    })
], CartPageModule);

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsModule", function() { return TermsAndConditionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_conditions__ = __webpack_require__(134);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms_conditions__["a" /* TermsAndConditionsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__terms_conditions__["a" /* TermsAndConditionsPage */]
        ]
    })
], TermsAndConditionsModule);

//# sourceMappingURL=terms-conditions.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_market__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrate_registrate__ = __webpack_require__(319);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistratePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_conditions_terms_conditions__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistratePage = (function () {
    function RegistratePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegistratePage.prototype.gotoCompletar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__terms_conditions_terms_conditions__["a" /* TermsAndConditionsPage */]);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], RegistratePage);

//# sourceMappingURL=registrate.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(336);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home_module__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart_module__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_market_market__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_start_start__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_preferences_preferences__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_more_more__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_registrate_registrate__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_registrarproducto_registrarproducto__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tucuenta_tucuenta__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_auto_hide_auto_hide__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_lista_de_productos_lista_de_productos_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__firebase_credentials__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_toast_toast_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_account_name_account_name_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_account_email_account_email_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_account_password_account_password_module__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_account_login_account_login_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_account_signup_account_signup_module__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_account_forgot_account_forgot_module__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_terms_conditions_terms_conditions_module__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_firebase_storage_firebase_storage_service__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























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
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_market_market__["a" /* MarketPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_preferences_preferences__["a" /* PreferencesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_registrate_registrate__["a" /* RegistratePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_registrarproducto_registrarproducto__["a" /* RegistrarproductoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tucuenta_tucuenta__["a" /* TucuentaPage */],
            __WEBPACK_IMPORTED_MODULE_18__directives_auto_hide_auto_hide__["a" /* AutoHideDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/account-email/account-email.module#AccountEmailModule', name: 'AccountEmailPage', segment: 'account-email', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account-login/account-login.module#AccountLoginModule', name: 'AccountLoginPage', segment: 'account-login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account-forgot/account-forgot.module#AccountForgotModule', name: 'AccountForgotPage', segment: 'account-forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account-name/account-name.module#AccountNameModule', name: 'AccountNamePage', segment: 'account-name', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account-password/account-password.module#AccountPasswordModule', name: 'AccountPasswordPage', segment: 'account-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account-signup/account-signup.module#AccountSignupModule', name: 'AccountSignupPage', segment: 'account-signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cuentausuario/cuentausuario.module#CuentausuarioPageModule', name: 'CuentausuarioPage', segment: 'cuentausuario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/market/market.module#MarketPageModule', name: 'MarketPage', segment: 'market', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/preferences/preferences.module#PreferencesPageModule', name: 'PreferencesPage', segment: 'preferences', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registrarproducto/registrarproducto.module#RegistrarproductoPageModule', name: 'RegistrarproductoPage', segment: 'registrarproducto', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms-conditions/terms-conditions.module#TermsAndConditionsModule', name: 'TermsAndConditionsPage', segment: 'terms-conditions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tucuenta/tucuenta.module#TucuentaPageModule', name: 'TucuentaPage', segment: 'tucuenta', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart_module__["CartPageModule"],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home_module__["a" /* HomePageModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_20__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_23__pages_account_name_account_name_module__["AccountNameModule"],
            __WEBPACK_IMPORTED_MODULE_24__pages_account_email_account_email_module__["AccountEmailModule"],
            __WEBPACK_IMPORTED_MODULE_25__pages_account_password_account_password_module__["AccountPasswordModule"],
            __WEBPACK_IMPORTED_MODULE_26__pages_account_login_account_login_module__["AccountLoginModule"],
            __WEBPACK_IMPORTED_MODULE_27__pages_account_signup_account_signup_module__["AccountSignupModule"],
            __WEBPACK_IMPORTED_MODULE_28__pages_account_forgot_account_forgot_module__["AccountForgotModule"],
            __WEBPACK_IMPORTED_MODULE_29__pages_terms_conditions_terms_conditions_module__["TermsAndConditionsModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_market_market__["a" /* MarketPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_preferences_preferences__["a" /* PreferencesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_registrate_registrate__["a" /* RegistratePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_registrarproducto_registrarproducto__["a" /* RegistrarproductoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tucuenta_tucuenta__["a" /* TucuentaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__services_lista_de_productos_lista_de_productos_service__["a" /* ListaDeProductosService */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_22__services_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_30__services_firebase_storage_firebase_storage_service__["a" /* FirebaseStorageService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 359:
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
        selector: 'page-account-email',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-email\account-email.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Change Account Email</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <account-email-form></account-email-form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-email\account-email.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AccountEmailPage);

//# sourceMappingURL=account-email.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountEmailFormComponent; });
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
  Generated class for the AccountEmailForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var AccountEmailFormComponent = (function () {
    function AccountEmailFormComponent(loading, nav, alert) {
        this.loading = loading;
        this.nav = nav;
        this.alert = alert;
        /*  account: { email?: string } = {
            email: this.user.fire.auth().currentUser.email
          };
          */
        this.submitted = false;
    }
    AccountEmailFormComponent.prototype.showAlert = function (title, subtitle) {
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        return alert.present();
    };
    return AccountEmailFormComponent;
}());
AccountEmailFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-email-form',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-email-form\account-email-form.html"*/'<form #accountForm="ngForm" novalidate>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label frost stacked color="dark">Email</ion-label>\n\n      <ion-icon ios="ios-contact-outline" md="md-contact" item-left frost color="dark"></ion-icon>\n\n      <ion-input [(ngModel)]="account.email" name="email" type="text" #email="ngModel" spellcheck="false" autocapitalize="off"\n\n        required placeholder="Your new email" color="dark"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button large outline block round (tap)="onModify(accountForm)" color="dark">Modify</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</form>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-email-form\account-email-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AccountEmailFormComponent);

//# sourceMappingURL=account-email-form.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_market_market__ = __webpack_require__(41);
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
    function AccountLoginFormComponent(app, loading, alert, navCtrl) {
        this.app = app;
        this.loading = loading;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.login = {};
        this.submitted = false;
        this.loader = false;
    }
    AccountLoginFormComponent.prototype.onLogin = function (form) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_market_market__["a" /* MarketPage */]);
    };
    return AccountLoginFormComponent;
}());
AccountLoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-login-form',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-login-form\account-login-form.html"*/'<form #loginForm="ngForm" novalidate>\n\n  <ion-list>\n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">SU USUARIO</ion-label>\n\n      <ion-icon ios="ios-contact-outline" md="md-contact" item-left frost color="light"></ion-icon>\n\n      <ion-input type="email" [(ngModel)]="login.username" name="username" #email="ngModel" spellcheck="false" autocapitalize="off"\n\n        required placeholder="Digite su correo o nombre de usuario"></ion-input>\n\n    </ion-item>\n\n    <div class="hr-gradient-alternate"></div>  \n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">SU CONTRASEÑA</ion-label>\n\n      <ion-icon ios="ios-lock-outline" md="md-lock" item-left frost color="light"></ion-icon>\n\n      <ion-input type="password" [(ngModel)]="login.password" name="password" #password="ngModel" required placeholder="Digite su contraseña"\n\n        color="light"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button large outline block round (tap)="onLogin(loginForm)" color="light">Ingresar</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <account-login-social></account-login-social>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</form>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-login-form\account-login-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], AccountLoginFormComponent);

//# sourceMappingURL=account-login-form.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_start__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preferences_preferences__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_more__ = __webpack_require__(159);
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
        selector: 'page-market',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\market\market.html"*/'<ion-tabs color=\'galelBlue\'>\n\n    <ion-tab [root]="startRoot" tabTitle="Inicio" tabIcon="md-home"></ion-tab>\n\n    <ion-tab [root]="preferencesRoot" tabTitle="Filtros" tabIcon="md-funnel"></ion-tab>\n\n    <ion-tab [root]="moreRoot" tabTitle="Opciones" tabIcon="md-more"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\market\market.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], MarketPage);

//# sourceMappingURL=market.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLoginSocialComponent; });
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
 * Generated class for the AccountLoginSocialComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var AccountLoginSocialComponent = (function () {
    function AccountLoginSocialComponent(app, alert, navCtrl) {
        this.app = app;
        this.alert = alert;
        this.navCtrl = navCtrl;
    }
    AccountLoginSocialComponent.prototype.onLogin = function (provider) {
    };
    AccountLoginSocialComponent.prototype.doLogin = function (provider) {
    };
    return AccountLoginSocialComponent;
}());
AccountLoginSocialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-login-social',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-login-social\account-login-social.html"*/'<ion-row >\n\n    <ion-col>\n\n        <button ion-button large outline block round (tap)="onLogin(\'facebook\')" type="submit" color="primary" style="background-color:rgb(255, 255, 255);" >Conectarme con Facebook</button>\n\n    </ion-col>\n\n</ion-row>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-login-social\account-login-social.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], AccountLoginSocialComponent);

//# sourceMappingURL=account-login-social.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForgotFormComponent; });
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
  Generated class for the AccountForgotForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var AccountForgotFormComponent = (function () {
    function AccountForgotFormComponent(loading, alert, actionSheet) {
        this.loading = loading;
        this.alert = alert;
        this.actionSheet = actionSheet;
        this.login = {};
        this.submitted = false;
    }
    AccountForgotFormComponent.prototype.onForgot = function (form) {
    };
    AccountForgotFormComponent.prototype.showAlert = function (title, subtitle) {
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        alert.present();
    };
    return AccountForgotFormComponent;
}());
AccountForgotFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-forgot-form',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-forgot-form\account-forgot-form.html"*/'<form #loginForm="ngForm" novalidate>\n\n  <ion-list>\n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">CORREO</ion-label>\n\n      <ion-icon ios="ios-contact-outline" md="md-contact" item-left frost color="light"></ion-icon>\n\n      <ion-input type="email" [(ngModel)]="login.email" name="username" #email="ngModel" spellcheck="false" autocapitalize="off"\n\n        required placeholder="Digite su correo para recibir una confirmación" color="light"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button large outline block round (tap)="onForgot(loginForm)" color="light">Cambiar Contraseña</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <account-login-social></account-login-social>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</form>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-forgot-form\account-forgot-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], AccountForgotFormComponent);

//# sourceMappingURL=account-forgot-form.js.map

/***/ }),

/***/ 483:
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
        selector: 'page-account-name',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-name\account-name.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Change Account Name</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <account-name-form></account-name-form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-name\account-name.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AccountNamePage);

//# sourceMappingURL=account-name.js.map

/***/ }),

/***/ 484:
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], AccountNameFormComponent);

//# sourceMappingURL=account-name-form.js.map

/***/ }),

/***/ 485:
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
        selector: 'page-account-password',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-password\account-password.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Change Password</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <account-password-form></account-password-form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\account-password\account-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AccountPasswordPage);

//# sourceMappingURL=account-password.js.map

/***/ }),

/***/ 486:
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
        selector: 'account-password-form',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-password-form\account-password-form.html"*/'<form #accountForm="ngForm" novalidate>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label frost stacked color="dark">Password</ion-label>\n\n      <ion-icon ios="ios-contact-outline" md="md-contact" item-left frost color="dark"></ion-icon>\n\n      <ion-input [(ngModel)]="account.password" name="password" type="text" #password="ngModel" spellcheck="false" autocapitalize="off"\n\n        required placeholder="Your new password" color="dark"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button large outline block round (tap)="onModify(accountForm)" color="dark">Modify</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</form>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-password-form\account-password-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AccountPasswordFormComponent);

//# sourceMappingURL=account-password-form.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSignupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_terms_conditions_terms_conditions__ = __webpack_require__(134);
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
 * Generated class for the AccountSignupFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var AccountSignupFormComponent = (function () {
    function AccountSignupFormComponent(app, loading, navCtrl, alert, navParams) {
        this.app = app;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.navParams = navParams;
        this.login = {};
        this.submitted = false;
    }
    AccountSignupFormComponent.prototype.onSignup = function (form) {
    };
    AccountSignupFormComponent.prototype.onTerms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_terms_conditions_terms_conditions__["a" /* TermsAndConditionsPage */]);
    };
    return AccountSignupFormComponent;
}());
AccountSignupFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-signup-form',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-signup-form\account-signup-form.html"*/'<form #loginForm="ngForm" novalidate>\n\n  <ion-list>\n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">CORREO</ion-label>\n\n      <ion-icon ios="ios-contact-outline" md="md-contact" item-left frost color="light"></ion-icon>\n\n      <ion-input type="email" (ionFocus)="signFocus=true" [(ngModel)]="login.email" name="email" #email="ngModel" spellcheck="false"\n\n        autocapitalize="off" required placeholder="Digita tu correo a asociar" color="light"></ion-input>\n\n    </ion-item>\n\n    <div class="hr-gradient-alternate"></div>  \n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">NOMBRE DE USUARIO</ion-label>\n\n      <ion-icon ios="ios-contact-outline" md="md-person" item-left frost color="light"></ion-icon>\n\n      <ion-input type="email" (ionFocus)="signFocus=true" [(ngModel)]="login.username" name="username" #email="ngModel" spellcheck="false"\n\n        autocapitalize="off" required placeholder="Digita tu nombre de usuario de preferencia" color="light"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">TELÉFONO</ion-label>\n\n      <ion-icon ios="ios-at-outline" md="md-at" item-left frost color="light"></ion-icon>\n\n      <ion-input type="email" (ionFocus)="signFocus=true" [(ngModel)]="login.number" name="number" #email="ngModel" spellcheck="false"\n\n        autocapitalize="off" required placeholder="Digite su numero con que puedan contactarlo/a" color="light"></ion-input>\n\n    </ion-item>    \n\n    <div class="hr-gradient-alternate"></div>\n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">CONTRASEÑA</ion-label>\n\n      <ion-icon ios="ios-lock-outline" md="md-lock" item-left frost color="light"></ion-icon>\n\n      <ion-input type="password" (ionFocus)="signFocus=true" (ionBlur)="signFocus=false" [(ngModel)]="login.password" name="password"\n\n        #password="ngModel" required placeholder="Digite su contraseña" color="light"></ion-input>\n\n    </ion-item>\n\n    <div class="hr-gradient-alternate"></div>\n\n    <ion-item class="login-form">\n\n      <ion-label frost stacked color="light">CONFIRMAR CONTRASEÑA</ion-label>\n\n      <ion-icon ios="ios-lock-outline" md="md-lock" item-left frost color="light"></ion-icon>\n\n      <ion-input type="password" (ionFocus)="signFocus=true" (ionBlur)="signFocus=false" [(ngModel)]="login.password2" name="password2"\n\n        #password="ngModel" required placeholder="Digite nuevamente la contraseña" color="light"></ion-input>\n\n    </ion-item>\n\n    <div class="hr-gradient-alternate"></div>  \n\n    <ion-item>\n\n      <ion-label frost stacked color="light" >¿Te gustaría vender?</ion-label>\n\n      <ion-toggle [(ngModel)]="login.toggleValue" name="toggleValue"></ion-toggle>\n\n    </ion-item>   \n\n\n\n    <ion-list *ngIf="login.toggleValue">\n\n      <div class="hr-gradient-alternate"></div>        \n\n      <ion-item>\n\n        <ion-label frost stacked color="light">NOMBRE DE SU NEGOCIO</ion-label>\n\n        <ion-icon ios="ios-pricetag-outline" md="md-pricetag" item-left frost color="light"></ion-icon>        \n\n        <ion-input type="text" (ionFocus)="signFocus=true" (ionBlur)="signFocus=false" [(ngModel)]="login.market" name="market" \n\n        placeholder="Ejemplo Galel-Souvenir"></ion-input>\n\n      </ion-item>\n\n      <div class="hr-gradient-alternate"></div>      \n\n      <ion-item>\n\n        <ion-label frost stacked color="light">DIRECCIÓN DE SU NEGOCIO</ion-label>\n\n        <ion-icon ios="ios-home-outline" md="md-home" item-left frost color="light"></ion-icon>        \n\n        <ion-input type="text" (ionFocus)="signFocus=true" (ionBlur)="signFocus=false" [(ngModel)]="login.direction" name="direction" \n\n        placeholder="Colonia - calle,avenida - Ciudad, Departamento"></ion-input>\n\n      </ion-item>     \n\n    </ion-list>\n\n\n\n    <div class="hr-gradient-alternate"></div>    \n\n    <a ion-button small outline block round color="light" (click)="onTerms()"> Términos y condiciones </a>\n\n    <ion-item>\n\n      <ion-label color="light">Estoy de acuerdo</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <p color="light">Al dar click en <strong>Estoy de acuerdo</strong> usted acepta los términos y condiciones de uso de Galel-Souvenir Market</p>\n\n\n\n</ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button large outline block round (tap)="onSignup(loginForm)" color="light">REGISTRARME</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <account-login-social></account-login-social>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</form>'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\components\account-signup-form\account-signup-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AccountSignupFormComponent);

//# sourceMappingURL=account-signup-form.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_login_account_login__ = __webpack_require__(58);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(507);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(318);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\home\home.html"*/'<ion-slides>\n\n \n\n  <ion-slide style="background:url(&quot;assets/img/slide1.jpg&quot;) no-repeat center;background-size:cover;">\n\n    <ion-footer>\n\n      <h3 id="page-heading2" style="color:#FCFCFC;text-align:center;">Conoce nuestra cultura</h3>\n\n      <p style="color:#FFFFFF;">Ven a <strong>Honduras</strong> y disfruta</p>\n\n    </ion-footer>\n\n  </ion-slide>\n\n  <ion-slide style="background:url(&quot;assets/img/slide2.jpg&quot;) no-repeat center;background-size:cover;">\n\n    <ion-footer>\n\n      <h3 id="page-heading2" style="color:#FCFCFC;text-align:center;">Comparte tus artesanías</h3>\n\n      <p style="color:#FFFFFF;">Demuestra tu <strong>identidad</strong></p>\n\n    </ion-footer>\n\n  </ion-slide>\n\n  <ion-slide style="background:url(&quot;assets/img/slide3.jpg&quot;) no-repeat center;background-size:cover;">\n\n    <ion-footer>\n\n      <h3 id="page-heading2" style="color:#FCFCFC;text-align:center;">Exprésate...</h3>\n\n      <p style="color:#FFFFFF;">Sé <strong>Catracho</strong></p>\n\n    </ion-footer>\n\n    </ion-slide>\n\n\n\n  <ion-slide style="background-color: black;">\n\n      <img src="assets/img/slide4.jpg" alt="estela maya">\n\n      <a ion-button color="light" block outline (click)="gotoLogin()">Entrar</a>\n\n  </ion-slide>\n\n</ion-slides>\n\n'/*ion-inline-end:"C:\Users\axels\Documents\GitHub\GalelApp\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 508:
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

/***/ 509:
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

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_signup_account_signup__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_forgot_account_forgot__ = __webpack_require__(114);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AccountLoginPage);

//# sourceMappingURL=account-login.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLoginModule", function() { return AccountLoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_login_form_account_login_form__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_account_login_social_account_login_social__ = __webpack_require__(481);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_login__["a" /* AccountLoginPage */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__components_account_login_form_account_login_form__["a" /* AccountLoginFormComponent */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__components_account_login_social_account_login_social__["a" /* AccountLoginSocialComponent */])
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

},[320]);
//# sourceMappingURL=main.js.map