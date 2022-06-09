import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teacher1 : Teacher = new Teacher('id1', 'teacher');
  teacher2 : Teacher = new Teacher('id2', 'teacher');

  teacherList: Array<Teacher> = [this.teacher1, this.teacher2]

  constructor() { }

  getAllTeacherS()
  {
    return this.teacherList;
  }
}
