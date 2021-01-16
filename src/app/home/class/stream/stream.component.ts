import { Component, OnInit } from '@angular/core';
import { ClassData } from 'src/app/models/classData.model';
import { MatDialog } from '@angular/material/dialog';
import { WriteDialogComponent } from './writeDialog/writeDialog.component';
import { NotificationComponent } from './notification/notification.component';
import { IClassroom } from 'src/app/models/classroom.model';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css'],
})
export class StreamComponent implements OnInit {
  public classColor: string;
  public classroom: IClassroom;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.classColor = localStorage['classColor'];
    this.classroom = JSON.parse(localStorage['currClassData']);
  }

  openWritePanel() {
    this.dialog.open(WriteDialogComponent);
  }

  openNotificationPanel() {
    this.dialog.open(NotificationComponent);
  }
}
