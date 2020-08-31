import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { LinkComponent } from '../../utilDialog/link/link.component';
import { FileUploadComponent } from '../../utilDialog/file-upload/file-upload.component';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  isCheck:boolean = false;
  ngOnInit(): void {}
  closeDialog(){
    this.dialog.ngOnDestroy()
  }
  openLink(){
    this.dialog.open(LinkComponent)
  }
  openFileUpload(){
    this.dialog.open(FileUploadComponent);
  }
}
