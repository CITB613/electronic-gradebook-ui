import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from 'src/app/services/class.service';
import { UserEditService } from 'src/app/services/user-edit.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  public msg: string = '';
  public list: Array<any> = [];
  public search: string = ' ';

  public id_school: string = '';

  public classForm = new FormGroup({
    grade: new FormControl(''),
    group: new FormControl(''),
  });
  constructor(
    private classService: ClassService,
    itemEditor: UserEditService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.classService.getAllClass().subscribe((data) => {
      console.log(data);
      this.list = data;
    });

    this.id_school = this.activateRoute.snapshot.params['id'];
    console.log(this.activateRoute.snapshot.paramMap.get('id'));

    this.id_school = this.activateRoute.parent?.snapshot.params['id'];

    console.log(this.activateRoute.parent?.snapshot.params['id']);
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
    this.classService.deleteClass(id).subscribe((data) => {
      location.reload();
    });
  }

  updateUser(id: string, index: number) {
    this.list[index].edit = false;

    console.log(id);

    console.log(this.list[index].user);

    // this.list[index].user = item.user;
  }
  cancelUser(index: number) {
    this.list[index].edit = false;
  }

  clear() {
    this.classForm.reset();
  }

  addUser() {
    this.classService.addClass(this.classForm.value).subscribe((data) => {
      location.reload();
    });
  }

  onChange() {
    console.log(this.search);
  }
}
