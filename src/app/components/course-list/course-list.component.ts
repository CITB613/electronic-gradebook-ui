import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { ItemEditorService } from 'src/app/services/item-editor.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  public msg: string = '';
  public list: Array<any> = [];
  public search: string = ' ';
  public classId: number = -1;

  id_school: string = '';
  id_class: string = '';

  public form = new FormGroup({ id_course: new FormControl('') });

  constructor(
    private courseService: CoursesService,
    private itemEditor: ItemEditorService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.classId = this.activateRoute.snapshot.params['id_class'];

    this.courseService
      .getAllCoursesByClassId(this.classId)
      .subscribe((data) => {
        this.list = data;
      });

    this.id_school = this.activateRoute.parent?.snapshot.params['id'];

    this.id_class = this.activateRoute.parent?.snapshot.params['id_class'];
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

  deleteUser(id: string, index: number) {
    console.log(id);
  }

  updateUser(id: string, index: number) {
    this.list[index].edit = false;
  }
  cancelUser(index: number) {
    this.list[index].edit = false;
  }

  clear() {
    this.form.reset();
  }

  addSubject() {
    this.courseService
      .addSubject(this.form.value.id_course, this.classId)
      .subscribe((data) => {
        location.reload();
      });
  }
}
