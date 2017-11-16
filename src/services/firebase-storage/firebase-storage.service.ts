<<<<<<< HEAD
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
//import * as firebase from 'firebase/app';
//import 'firebase/storage';

export interface File { name: string; }

@Injectable()
export class FirebaseStorage {

    private filesCollection: AngularFirestoreCollection<File>;
    files: Observable<File[]>;

    constructor(private afs: AngularFirestore) {
        this.filesCollection = this.afs.collection<File>('files');
        this.files = this.filesCollection.valueChanges();
    }

    addFile(File: File) {
        this.filesCollection.add(File);
=======
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
>>>>>>> master
    }
}