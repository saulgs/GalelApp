import { Component, Input, NgZone } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'account-avatar',
  templateUrl: 'account-avatar.html'
})
export class AccountAvatarComponent {
  @Input() photoURL: string;
  @Input() hideName: boolean = false;
  @Input() photo64: string;
  blank: string = 'assets/img/user-blank.svg';

  constructor(public zone: NgZone, public events: Events) {

  }
  
}
