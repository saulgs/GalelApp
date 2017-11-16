import { Injectable } from '@angular/core';

/** 
 *  Import Firebase
 */
import * as firebaseConfig from '../config/firebase.json';

import * as Firebase from 'firebase';
let firebase: any = Firebase;

@Injectable()
export class Fire {
    constructor() {
        if (!firebase.apps.length) {
            firebase = firebase.default;
            firebase.initializeApp(firebaseConfig);
        }
    }

    instance() {
        return firebase.default;
    }
}