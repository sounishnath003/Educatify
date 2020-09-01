import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { LinkComponent } from '../../utilDialog/link/link.component';
import { FileUploadComponent } from '../../utilDialog/file-upload/file-upload.component';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent implements OnInit {

  public dialogTitle = ""
  public btn = ""
  public inputText = ""
  public isForm = false
  public isDate = true

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  isCheck: boolean = false;
  ngOnInit(): void {
    switch (this.data.type) {
      case 'assignment':
        this.dialogTitle = 'Assignment';
        this.btn = 'Assign';
        this.inputText = 'Title';
        this.isForm = false;
        this.isDate = true;
        break;
      case 'question':
        this.dialogTitle = 'Question';
        this.btn = 'Ask';
        this.inputText = 'Question Title';
        this.isForm = false;
        this.isDate = true;
        break;
      case 'quiz':
        this.dialogTitle = 'Quiz Test';
        this.btn = 'Create';
        this.inputText = 'Title';
        this.isForm = true;
        this.isDate = true;
        break;
      case 'materials':
        this.dialogTitle = 'Materials';
        this.btn = 'Post';
        this.inputText = 'Title';
        this.isForm = false;
        this.isDate = false;
        break;
    }
  }
  closeDialog() {
    this.dialog.ngOnDestroy();
  }
  openLink() {
    this.dialog.open(LinkComponent);
  }
  openFileUpload() {
    this.dialog.open(FileUploadComponent);
  }
}
