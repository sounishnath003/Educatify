import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IClassroom } from '../models/classroom.model';

const API_URL: string = `http://localhost:1337/classrooms`;

@Injectable({
  providedIn: 'root',
})
export class GetClassroomService {
  public classroomDetails: IClassroom;
  constructor(private http: HttpClient) {}

  public async getClassData(classId: number): Promise<void> {
   this.classroomDetails = await this.http.get<IClassroom>(`${API_URL}/${classId}`).toPromise();
  }
}
