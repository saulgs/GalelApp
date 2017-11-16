import { Component, Input, NgZone } from '@angular/core';
import { App } from 'ionic-angular';
//import { User } from '../../providers/user';
import { Events } from 'ionic-angular';

//import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { Crop } from '@ionic-native/crop';


@Component({
  selector: 'account-photo-manager',
  templateUrl: 'account-photo-manager.html'
})
export class AccountPhotoManagerComponent {
  @Input() profile: any;
  photo64: string;
  pct: number = 0;

  constructor(
    public app: App,
    public zone: NgZone,
//    public user: User,
    public events: Events,
//    public imagePicker: ImagePicker,
    public camera: Camera,
//    public crop: Crop
  ) {
/*    this.fetchProfile();
    this.events.subscribe('user:photo:upload', (pct) => {
      if (pct > 10)
        this.pct = pct;
    });
*/
  }

  // change the picture from camera
  picFromCamera() {
  }

  // change the picture from device library
  picFromDevice() {
  }

  fetchProfile() {
  }

}