import { Component, OnInit } from '@angular/core';
import { ItemEditorService } from 'src/app/services/item-editor.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent implements OnInit {
  public msg: string = '';
  public list: Array<any> = [];
  public search: string = ' ';

  constructor(
    private teacherService: TeacherService,
    private userService: UserService,
    private itemEditor: ItemEditorService
  ) {}

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe((data) => {
      this.list = data;
    });
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

  // clear(){
  //   this.classForm.reset()
  // };

  // addUser() {

  //   console.log(this.classForm.value);

  // } ;

  onChange() {
    console.log(this.search);
  }
}
