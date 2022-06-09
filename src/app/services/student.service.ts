import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student1 : Student = new Student('st1', 'name 1', 'id_class1') ;
  student2 : Student = new Student('42', 'name 2', 'id_2', ) ;

  students:Array<Student> = [this.student1, this.student2]

  constructor() { }

  getAllStudents()
  {
    return this.students;
  }
}
