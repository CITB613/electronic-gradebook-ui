import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { User } from '../models/user.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  student1: Student = new Student('st1', 'name 1', 'id_class1');

  students: Array<Student> = [this.student1];

  constructor(private http: HttpClient) {}

  getAllStudents() {
    return this.http.get<any>(
      `http://localhost:8080/users/students`
    );
  }

  getAllStudentsByClassId(classId: number) {
    return this.http.get<any>(
      `http://localhost:8080/classes/${classId}/students`
    );
  }

  enrollStudent(studentId: number, classId: number) {
    return this.http.get<any>(
      `http://localhost:8080/classes/${classId}/enrollment/students/${studentId}`
    );
  }

  unenrollStudent(studentId: number, classId: number) {
    return this.http.delete<any>(
      `http://localhost:8080/classes/${classId}/enrollment/students/${studentId}`
    );
  }
}
