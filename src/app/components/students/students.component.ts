import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { UserEditService } from 'src/app/services/user-edit.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  public msg: string = '';
  public list: Array<any> = [];
  public search: string = ' ';

  constructor(
    private studentService: StudentService,
    private studentEditor: UserEditService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data) => {
      this.list = data;
    });

    console.log(this.list);
  }

  editDisplay(index: number) {
    this.list[index].edit = true;
  }
  editHide(index: number) {
    this.list[index].edit = false;
  }
  editUser(index: number) {
    this.editDisplay(index);
  }

  deleteUser(id: number, index: number) {
    this.userService.deleteUser(id).subscribe((data) => {
      location.reload();
    });
  }

  updateUser(id: number, index: number) {
    this.list[index].edit = false;

    console.log(id);

    console.log(this.list[index].user);

    const body = {
      firstName: this.list[index].firstName,
      lastName: this.list[index].lastName,
    };

    this.userService.updateUser(body, id).subscribe((data) => {
      location.reload();
    });
  }
  cancelUser(index: number) {
    this.list[index].edit = false;
  }

  onChange() {
    console.log(this.search);
  }
}
