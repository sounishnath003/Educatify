import { Component, OnInit } from '@angular/core';
import { IClassroom } from 'src/app/models/classroom.model';

import { GetClassroomService } from '../../services/getClassroom.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  constructor(private classroomService: GetClassroomService) {}

  links: any[] = [
    { label: 'Stream', path: 'stream' },
    { label: 'Classwork', path: 'class-work' },
    { label: 'People', path: 'people' },
    { label: 'Request', path: 'request' },
    { label: 'Meeting Room', path: 'meeting' },
  ];

  ngOnInit(): void {
    this.getClassroomDetails();
  }

  private async getClassroomDetails() {
    await this.classroomService.getClassData(localStorage['classId']);
  }
}
