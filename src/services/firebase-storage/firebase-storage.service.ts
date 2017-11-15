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
    }
}