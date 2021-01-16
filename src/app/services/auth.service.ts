import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ILoggedUser } from '../models/loggedUser.model';

const API_URL = `http://localhost:1337`;

const headerOptions: HttpHeaders = new HttpHeaders();
headerOptions.set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private allTeachers: ILoggedUser[] = [];
  private allStudents: ILoggedUser[] = [];
  public loggedInUserDetails: ILoggedUser;

  constructor(private http: HttpClient) {}

  private async getAllUsers() {
    let serverResp = await this.http
      .get<ILoggedUser[]>(`${API_URL}/teachers`, { headers: headerOptions })
      .toPromise();
    this.allTeachers.push(...serverResp);
    const serverResp2: ILoggedUser[] = await this.http
      .get<ILoggedUser[]>(`${API_URL}/students`, { headers: headerOptions })
      .toPromise();
    this.allStudents.push(...serverResp2);
  }

  async loginAuthorization(email: string, code: string) {
    await this.getAllUsers();
    for (const student of this.allStudents) {
      if (student.email === email && student.studentCode === code) {
        return student;
      }
    }
    for (const teacher of this.allTeachers) {
      if (teacher.email === email && teacher.facultyCode === code) {
        return teacher;
      }
    }
    return null;
  }
}
