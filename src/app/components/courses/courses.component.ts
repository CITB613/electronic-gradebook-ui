import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';
import { UserEditService } from 'src/app/services/user-edit.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  public msg: string = '';
  public list: Array<any> = [];
  public search: string = ' ';

  public form = new FormGroup({
    name: new FormControl(''),
    semester: new FormControl(''),
    teacherId: new FormControl(''),
  });
  constructor(
    private courseService: CoursesService,
    itemEditor: UserEditService
  ) {}

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
  }

  ngOnDestroy() {}
  editDisplay(index: number) {
    this.list[index].edit = true;
  }
  editHide(index: number) {
    this.list[index].edit = false;
  }
  editUser(index: number) {
    this.editDisplay(index);
  }

  deleteSubject(id: number, index: number) {
    this.courseService.deleteSubject(id).subscribe((data) => {
      location.reload();
    });
  }

  updateUser(id: string, index: number) {
    this.list[index].edit = false;

    console.log(id);

    console.log(this.list[index].user);
  }
  cancelUser(index: number) {
    this.list[index].edit = false;
  }

  clear() {
    this.form.reset();
  }

  createSubject() {
    this.courseService.createSubject(this.form.value).subscribe((data) => {
      location.reload();
    });
  }

  onChange() {
    console.log(this.search);
  }
}
