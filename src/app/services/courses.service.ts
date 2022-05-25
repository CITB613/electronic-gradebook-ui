import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Course } from '../models/course.model';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  course1 : Course = new Course('32','CourseName', 'Semester', 'Idteacher', 0)
  course2 : Course = new Course('33','CourseName', 'Semester', 'Idteacher', 0)

  courses: Array<Course>= [this.course1, this.course2];
  constructor() { }

  getAllCourses()
  {
    return this.courses;
  }
}
