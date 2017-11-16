import { Injectable } from '@angular/core';
import  *  as firebase from "firebase";


@Injectable()
export class FirebaseStorageService{

    //private ReferenciaFirebaseStorage = firebase.storage().ref();

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
             console.log('snapshot progess ' + _snapshot);
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

    getImage(key: string){
        let image  : string  = 'p_' + key + '.jpg',
        storageRef : any,
        url        : string;
        return firebase.storage().ref('products/' + image).getDownloadURL().then(function(url) {
            // `url` is the download URL for the image          
            // Inserted into an <img> element:
            //var img = document.getElementById('myimg');
            return url;
          }).catch(function(error) {
            // Handle any errors
            return 'No se pudo mostrar la imagen';
          });
    }
}