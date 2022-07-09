import { Component, OnInit } from '@angular/core';
import { User, UserType } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { UserEditService } from 'src/app/services/user-edit.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public msg: string = '';
  public list: Array<any> = [];
  public search: string = ' ';
  public users: Array<UserType> = [];

  public form = new FormGroup({
    authority: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthDate: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    public userService: UserService,
    public userToEdit: UserEditService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.list = this.userToEdit.getUserToEdit(this.users);
      console.log(this.users);
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

    console.log(id);

    console.log(this.list[index].user);

    this.userService.updateUser(this.list[index].user, id).subscribe((data) => {
      location.reload();
    });
  }
  cancelUser(index: number) {
    this.list[index].edit = false;
  }

  clear() {
    this.form.reset();
  }

  addUser() {
    console.log(this.form.value);
    this.userService.addUser(this.form.value).subscribe((data) => {
      location.reload();
    });
  }

  onChange() {
    console.log(this.search);
  }
}
