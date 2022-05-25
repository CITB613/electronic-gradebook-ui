import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student1 : Student = new Student(new User('41',1, 'stu', '22-02-02', 'username', 'pass','', 0)) ;
  student2 : Student = new Student(new User('42',1, 'stu', '22-02-02', 'username', 'pass','', 0)) ;

  students:Array<Student> = [this.student1, this.student2]

  constructor() { }

  getAllStudents()
  {
    return this.students;
  }
}
