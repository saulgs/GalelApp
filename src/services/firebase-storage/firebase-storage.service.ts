import { Injectable } from '@angular/core';
import  *  as firebase from "firebase";
import { storage } from 'firebase/app';


@Injectable()
export class FirebaseStorageService{

    //private ReferenciaFirebaseStorage = firebase.storage().ref();
    private downloadURL: any;

    constructor(){

    }

    
    uploadImage(key: string, imageString: string) : Promise<any>
    {
       let image       : string  = 'p_' + key + '.jpg',
           storageRef  : any,
           parseUpload : any;
 
       return new Promise((resolve, reject) => {
          storageRef  = firebase.storage().ref('products/' + image);
          parseUpload = storageRef.putString(imageString, 'data_url');
 
          parseUpload.on('state_changed', (_snapshot) =>
          {
             // We could log the progress here IF necessary
             //console.log('snapshot progess ' + _snapshot);
             
          },
          (_err) =>
          {
             reject(_err);
          },
          (success) =>
          {
             resolve(parseUpload.snapshot);
             this.downloadURL = parseUpload.snapshot.downloadURL;
          });
       });
    }

    getImage(key: string){
        let image  : string  = 'p_' + key + '.jpg';

        var pathReference = firebase.storage().ref('products/' + image);

        return pathReference.getDownloadURL().then(function(url) {
            return url;
        }).catch(function(error) {
            // Handle any errors
        });
    }

    getUrl(){
        return this.downloadURL;
    }
}