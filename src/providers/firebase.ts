import { Injectable } from '@angular/core';

/** 
 *  Import Firebase
 */
import { FIREBASE_CONFIG } from '../config/firebase.credentials';


import * as Firebase from 'firebase';
let firebase: any = Firebase;

@Injectable()
export class Fire {
    constructor() {
        if (!firebase.apps.length) {
            firebase = firebase.default;
            firebase.initializeApp(FIREBASE_CONFIG);
        }
    }

    instance() {
        return firebase.default;
    }
}