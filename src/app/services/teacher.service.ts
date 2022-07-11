import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient) {}

  getAllTeachers() {
    return this.http.get<Array<any>>('http://localhost:8080/users/teachers');
  }
}
