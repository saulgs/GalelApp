import { Injectable } from '@angular/core';
import  *  as firebase from "firebase";


@Injectable()
export class FirebaseStorageService{

    private ReferenciaFirebaseStorage = firebase.storage().ref();

    constructor(){

    }

    
    uploadImage(key: string, imageString: string) : Promise<any>
    {
       let image       : string  = 'pic_' + key + '.jpg',
           storageRef  : any,
           parseUpload : any;
 
       return new Promise((resolve, reject) =>
       {
          storageRef       = firebase.storage().ref('products/' + image);
          parseUpload      = storageRef.putString(imageString, 'data_url');
 
          parseUpload.on('state_changed', (_snapshot) =>
          {
             // We could log the progress here IF necessary
             // console.log('snapshot progess ' + _snapshot);
          },
          (_err) =>
          {
             reject(_err);
          },
          (success) =>
          {
             resolve(parseUpload.snapshot);
          });
       });
    }
}