import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetClassroomService } from 'src/app/services/getClassroom.service';
import { AssignmentComponent } from './assignment/assignment.component';

import { StudyMaterial } from '../../../models/classroom.model';

@Component({
  selector: 'app-class-work',
  templateUrl: './class-work.component.html',
  styleUrls: ['./class-work.component.css'],
})
export class ClassWorkComponent implements OnInit {
  public studyMaterials: StudyMaterial[];
  constructor(
    private dialog: MatDialog,
    private classroomDataService: GetClassroomService
  ) {}

  ngOnInit(): void {
    this.studyMaterials = this.classroomDataService.classroomDetails.studyMaterials;
  }

  documentUrl(link: string) {
    return `http://localhost:1337${link}`
  }

  openAssignment(type) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    dialogConfig.height = '100%';
    dialogConfig.data = { type: type };
    this.dialog.open(AssignmentComponent, dialogConfig);
  }
}
