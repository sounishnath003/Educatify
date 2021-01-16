import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IStudent } from '../models/student.model';

const API_URL = `http://localhost:1337`;

const headerOptions: HttpHeaders = new HttpHeaders();
headerOptions.set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private allTeachers = [];
  private allStudents: IStudent[] = [];

  constructor(private http: HttpClient) {}

  private async getAllUsers() {
    let serverResp = await this.http
      .get(`${API_URL}/teachers`, { headers: headerOptions })
      .toPromise();
    this.allTeachers.push(serverResp);
    const serverResp2: IStudent[] = await this.http
      .get<IStudent[]>(`${API_URL}/students`, { headers: headerOptions })
      .toPromise();
    this.allStudents.push(...serverResp2);
  }

  async loginAsTeacher() {}

  async loginAsStudent(email: string, studentcode: string) {
    await this.getAllUsers();
    for (const student of this.allStudents) {
      if (student.email === email && student.studentCode === studentcode) {
        
        return student;
      }
    }
    return null;
  }
}
