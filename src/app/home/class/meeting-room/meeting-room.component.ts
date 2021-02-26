import {
  Component,
  OnInit,
  Inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

@Component({
  selector: 'app-meeting-room',
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetingRoomComponent implements OnInit {
  signatureEndpoint = 'http://localhost:5000/';
  apiKey = 'UZfgOoyeRECwi5DfBq5n1A';
  meetingNumber = 72040070290;
  role = 0;
  leaveUrl = 'http://localhost:4200/class/:classId/meeting';
  userName = 'sounishFromWeb';
  userEmail = 'nafisoy755@izzum.com';
  passWord = 'L8DQ8F';

  constructor(public httpClient: HttpClient, @Inject(DOCUMENT) document) {}

  ngOnInit() {}

  getSignature() {
    this.httpClient
      .post(this.signatureEndpoint, {
        meetingNumber: this.meetingNumber,
        role: this.role,
      })
      .toPromise()
      .then((data: any) => {
        if (data.signature) {
          console.log(data.signature);
          this.startMeeting(data.signature);
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  startMeeting(signature) {
    document.getElementById('zmmtg-root').style.display = 'block';

    ZoomMtg.init({
      leaveUrl: this.leaveUrl,
      isSupportAV: true,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          meetingNumber: this.meetingNumber,
          userName: this.userName,
          apiKey: this.apiKey,
          userEmail: this.userEmail,
          passWord: this.passWord,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
