import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/classroom.model';
import { GetClassroomService } from 'src/app/services/getClassroom.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  public teacherData: Teacher;
  public studentData: Teacher[];

  constructor(private classroomService: GetClassroomService) {}

  ngOnInit(): void {
    this.teacherData = this.classroomService.classroomDetails.teacher;
    this.studentData = this.classroomService.classroomDetails.students;

    console.log(this.teacherData);
  }
}
