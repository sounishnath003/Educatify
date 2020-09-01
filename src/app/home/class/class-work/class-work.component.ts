import { Component, OnInit } from '@angular/core';
import { MatDialog ,MatDialogConfig } from '@angular/material/dialog'
import { AssignmentComponent } from './assignment/assignment.component';

@Component({
  selector: 'app-class-work',
  templateUrl: './class-work.component.html',
  styleUrls: ['./class-work.component.css'],
})
export class ClassWorkComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openAssignment(type){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = "100%"
    dialogConfig.height = "100%"
    dialogConfig.data = { type: type };
    this.dialog.open(AssignmentComponent,dialogConfig)
  }
}
