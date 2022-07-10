import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: Array<Course> = [];
  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.get<any>(`http://localhost:8080/subjects`);
  }

  getAllCoursesByClassId(classId: number) {
    console.log("classId" + classId)
    return this.http.get<any>(
      `http://localhost:8080/classes/${classId}/subjects`
    );
  }

  addSubject(subjectId: number, classId: number) {
    return this.http.get<any>(
      `http://localhost:8080/classes/${classId}/subjects/${subjectId}`
    );
  }
  createSubject(data: any) {
    return this.http.post<any>('http://localhost:8080/subjects', data);
  }

  deleteSubject(id: number) {
     return this.http.delete<any>(
       `http://localhost:8080/subjects/${id}`
     );
  }
}
