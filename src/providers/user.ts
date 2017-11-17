
/** 
 * Import Ionic and others
 */
import { Injectable } from '@angular/core';
import { App, AlertController, LoadingController, Events, Platform, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { Firebase } from '@ionic-native/firebase';

/**
 * Import Facebook
 */
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';


/**
 * Import Firebase
 */
import { Fire } from './firebase';
import sha256 from 'sha256';


// providers
import { Setup } from './setup';


/**
 * 
 * 
 * @export
 * @class User
 */
@Injectable()
export class User {
    storageUserNamespace: string = 'firetask:user';
    /**
     * 
     * 
     * @type {LoadingController}
     * @memberOf User
     */
    loading: any;
    /**
     * 
     * 
     * @type {string}
     * @memberOf User
     */
    googleWebClient: string;

    /**
     * 
     * 
     * @type {string}
     * @memberOf User
     */
    googleScopes: string = 'profile email';

    /**
     * 
     * 
     * @type {any}
     * @memberOf User
     */
    facebookScopes: any = ['public_profile', 'email'];

    /**
     * 
     * 
     * @type {boolean}
     * @memberOf User
     */
    online: boolean = false;
    admob: boolean = true;

    /**
     * 
     * 
     * @type {boolean}
     * @memberOf User
     */
    offline: boolean = false;
    fire: any;
    photoBLOB: Blob;

    /**
     * Creates an instance of User.
     * 
     * 
     * @memberOf User
     */
    constructor(
        public app: App,
        public platform: Platform,
        public alert: AlertController,
        public loader: LoadingController,
        public toast: ToastController,
        public storage: Storage,
        public Fire: Fire,
        public events: Events,
        public googleplus: GooglePlus,
        public facebook: Facebook,
        public file: File,
        public firePlugin: Firebase,
        public setup: Setup
    ) {
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
    db() {
        return this.fire.database();
    }



    current() {
        return this.fire.auth().currentUser;
    }


    // sync with realtime database
    // also local storage
    sync() {
        return new Promise((resolve, reject) => {
            this.pick().then((sessionUser: any) => {
                this.ref().then((path) => {
                    this.db().ref(path).once('value').then((snapshot) => {

                        // if user is coming from signup form
                        let unnamed = 'Unnamed';
                        if (!this.current().displayName) {
                            this.current().updateProfile({
                                displayName: unnamed
                            });
                        }

                        let dbUser = snapshot.val();

                        // create user profile object
                        let profile: any = {
                            uid: this.current().uid,
                            displayName: this.current().displayName || unnamed,
                            email: this.current().email
                        }

                        // count +1 and sync profile with realtime database          
                        if (!dbUser) {
                            console.info('user:countStats');
                            // add +1 to new user stats (backend purposes, like show a total number of users in a website)
                            this.countStats();
                        }

                        // update photoURL
                        if (!dbUser.photoURL) {
                            profile.photoURL = this.current().photoURL;
                        }

                        this.db().ref(path).update(profile);

                        // merge and persists local
                        sessionUser = Object.assign(sessionUser, profile);

                        this.persist(sessionUser).then(() => {
                            resolve(sessionUser);
                        }).catch(console.debug);
                    });

                }).catch(console.debug);
            }).catch(reject);
        })

    }

    ref() {
        return new Promise((resolve, reject) => {
            this.pick().then((user: any) => {
                if (this.current()) resolve('users/' + user.uid);
            }).catch(reject)
        });
    }
    /**
     * Auth With Google
     * 
     * @param {any} cbSuccess
     * @param {any} cbError
     * @returns success: authData.idToken, authData.accessToken
     * 
     * @memberOf User
     */
    authWithGoogle() {
        return new Promise((resolve, reject) => {
            let options: any = {
                'scopes': this.googleScopes, // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
                'webClientId': this.googleWebClient,
                'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
            }
            console.debug('authWithGoogle options:');
            console.debug(options);
            // note for iOS the googleplus plugin requires ENABLE_BITCODE to be turned off in the Xcode
            this.googleplus.login(options).then(resolve).catch(reject);
        })
    }

    /**
     * Auth With Facebook
     * 
     * @param {any} cbSuccess
     * @param {any} cbError
     * @returns success: token
     * 
     * @memberOf User
     */
    authWithFacebook() {
        return new Promise((resolve, reject) => {
            this.facebook.getLoginStatus().then((res) => {
                if (res.status === 'connected') {
                    resolve(res.authResponse.accessToken);
                } else {
                    this.facebook
                        .login(this.facebookScopes)
                        .then((user) => {
                            this.facebook.getAccessToken().then(resolve).catch(reject);
                        })
                        .catch(reject);
                }
            }).catch(reject);
        });
    }

    // sign user out
    logout() {
        return new Promise((resolve, reject) => {
            // give a time to menu closing animation
            try {
                // logout facebook native
                this.facebook.logout();
                // logout firebase
                this.fire.auth().signOut();
                // logout google native
                // it can show error in dev mode, using -lc
                // try in production mode (eg. ionic run android --prod)
                //this.googleplus.logout();
                this.storage.ready().then(() => {
                    this.storage.clear();
                    this.events.publish('user:loggedOut');
                    resolve();
                }).catch(reject);
            } catch (e) { reject(e); }
        })

    }

    //@Brizo
    newUserOnDatabase(userData){
        return this.fire.database().ref('users/'+ userData.key).set({
            email: userData.email,
            number: userData.number,
            pass: userData.pass,
            username: userData.username
        });
    }

    //@Brizo
    newSellerOnDatabase(sellerData){
        return this.fire.database().ref('sellers/'+ sellerData.key).set({
            marketName: sellerData.marketName,
            marketPlace: sellerData.marketPlace
        });
    }

    //@Brizo
    addItemToCartOnDatabase(cartItemData){
        return this.fire.database().ref('cart-items/'+ cartItemData.userKey +'/'+cartItemData.itemKey).set({
            itemName: cartItemData.itemName,
            price: cartItemData.price,
            sellBy: cartItemData.sellBy,
            state: cartItemData.state
        });
    }

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
    static errorHandler(code, message) {
        let result: any = { title: 'Fail', message: message };
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
            // case 'auth/requires-recent-login':
            //   result = { title: 'Atenção', message: 'Esta é uma operação sensível e requer que você efetue o login novamente.' };
            //   break;
        }
        return result;
    }


    /**
     * Show Alert
     * 
     * @param {any} title
     * @param {any} subtitle
     * 
     * @memberOf User
     */
    showAlert(title, subtitle) {
        let alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        setTimeout(() => {
            alert.present();
        });
    }


    gcmToken() {
        if (this.current()) {
            try {
                this.firePlugin.getToken().then((token) => {
                    this.setGCMToken(token);
                }).catch(console.debug);

                this.firePlugin.onTokenRefresh().subscribe((token) => {
                    this.setGCMToken(token);
                });
            } catch (e) { };
        }
    }


    setGCMToken(token) {
        this.ref().then((path) => {
            this.db().ref(path + '/token_gcm').set(token);
        });
    }

    presence() {
        console.info('user:presence');
        let connectedRef = this.db().ref('.info/connected');
        connectedRef.on('value', (snap) => {
            if (snap.val() === true) {
                this.online = true;
                this.offline = false;
                this.events.publish('network:online');
            } else {

                this.online = false;
                this.offline = true;
                this.events.publish('network:offline');
            }
        }, () => { });

        this.fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.storage.ready().then(() => {
                    // set a key/value
                    let _user = {
                        displayName: user.displayName,
                        email: user.email,
                        emailVerified: user.emailVerified,
                        photoURL: user.photoURL,
                        providerData: user.providerData,
                        uid: user.uid
                    }
                    this.storage.set(this.storageUserNamespace, _user);
                    this.events.publish('user:loggedIn', _user);
                });
            } else {
                this.storage.ready().then(() => {
                    // set a key/value
                    this.storage.set(this.storageUserNamespace, false);
                    this.events.publish('user:loggedOut');
                }).catch(console.debug);
            }
        }, () => { });
    }

    // get user from storage
    pick() {
        return new Promise((resolve, reject) => {
            this.storage.ready().then(() => {
                this.storage.get(this.storageUserNamespace).then((user) => {
                    if (user)
                        resolve(user);
                    else
                        reject();
                }).catch(console.debug);
            }).catch(console.debug);
        });
    }

    // count +1 and sync profile with realtime database
    accounting() {
        // try to get the profile or save if it does not exist
        this.ref().then((path) => {
            this.db().ref(path).once('value').then((snapshot) => {
                // update user profile
                this.sync().then(() => {
                    if (!snapshot.val()) {
                        console.info('user:accounting');
                        // add +1 to new user stats (backend purposes, like show a total number of users in a website)
                        this.countStats();
                    }
                }).catch(console.debug);
            });
        });
    }



    /**
     * Count stats
     * 
     * add +1 to stats/users when its a new user
     * 
     * @returns {*}
     * 
     * @memberOf User
     */
    countStats(): any {
        console.log('countStats: new user');
        var stats = this.db().ref('stats/users');
        stats.transaction((current) => {
            return current + 1;
        }).catch((e) => {
            console.debug(e);
        });
    }



    /**
     * Profile Image Storage
     *
     * @param {string} path
     * @return {string} downloadURL
     *
     * @memberOf User
     */
    profileImageStorage(path: string) {
        console.debug('profileImageStorage:start');
        return new Promise((resolve, reject) => {
            const readFile: any = window['resolveLocalFileSystemURL'];
            readFile(path, (fileEntry) => {
                fileEntry.file((file) => {
                    const fileReader = new FileReader();
                    fileReader.onloadend = (result: any) => {
                        let arrayBuffer = result.target.result;
                        let blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'image/jpeg' });
                        // Create a root reference
                        var storageRef = this.fire.storage().ref('profile/' + sha256(this.setup.guid()));
                        var uploadTask = storageRef.put(blob);
                        this.photoBLOB = blob;
                        this.events.publish('user:photoBLOB', blob);
                        // Register three observers:
                        // 1. 'state_changed' observer, called any time the state changes
                        // 2. Error observer, called on failure
                        // 3. Completion observer, called on successful completion
                        console.log('Upload started:');
                        uploadTask.on('state_changed', (snapshot) => {
                            // Observe state change events such as progress, pause, and resume
                            // See below for more detail
                            let percent = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                            console.log(percent + "% done");
                            this.events.publish('user:photo:upload', percent);
                        }, (e) => {
                            // Handle unsuccessful uploads
                            console.debug(e);
                            console.debug('profileImageStorage:end');
                            reject(e);
                        }, () => {
                            // Handle successful uploads on complete
                            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                            var downloadURL = uploadTask.snapshot.downloadURL;
                            console.info('Profile pic URL:' + downloadURL);
                            console.info('Profile pic URI:' + path);
                            console.debug('profileImageStorage:end');
                            resolve(downloadURL);
                        });
                    };
                    fileReader.onerror = (e: any) => {
                        console.debug(e);
                        reject(e);
                    };
                    fileReader.readAsArrayBuffer(file);
                }, (e) => { console.debug(e); reject(e); });
            }, (e) => { console.debug(e); reject(e); });
        });
    }


    /**
     * Get Profile Image 64
     *
     * Eg: show image profile imediatly after crop
     *
     * @returns Promise<base64data>
     *
     * @memberOf User
     */
    getProfileImage64(blob: Blob) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const reader = new FileReader();
                const events = this.events;    
                reader.readAsDataURL(blob);
                reader.onloadend = function () {
                    let base64data = reader.result;
                    events.publish('user:photo64', base64data);
                    resolve(base64data);
                }
            }, 1000);
        });
    }


    // persists on device storage
    persist(user?: any) {
        return new Promise((resolve, reject) => {
            this.storage.ready().then(() => {
                this.storage.set(this.storageUserNamespace, user);
                setTimeout(() => {
                    resolve(user);
                }, 50)
            }).catch(reject);
        })
    }
}