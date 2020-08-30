import { Component, OnInit } from '@angular/core';
import { ClassData } from 'src/app/models/classData.model';
import {MatDialog} from '@angular/material/dialog';
import {WriteDialogComponent} from './writeDialog/writeDialog.component'
import {NotificationComponent} from './notification/notification.component'

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css'],
})
export class StreamComponent implements OnInit {
  constructor(private dialog : MatDialog) {}
  currClassData: ClassData = JSON.parse(localStorage.getItem('currClassData'));
  ngOnInit(): void {}
  openWritePanel(){
    this.dialog.open(WriteDialogComponent);
  }
  openNotificationPanel(){
    this.dialog.open(NotificationComponent);
  }
}
