import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';
import { HttpClient } from '@angular/common/http';
import { DirectorType } from 'src/app/models/director.model';
import { DirectorService } from 'src/app/services/director.service';

const defaultFormValues = {
  id: '',
  name: '',
  address: '',
  principal: { firstName: '', lastName: '', birthDate: '' },
};

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],
})
export class SchoolComponent implements OnInit {
  public submitDisplay: boolean = true;
  public list: Array<School> = [];
  public principals: Array<DirectorType> = [];

  schoolForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl({ value: '' }, Validators.required),
    address: new FormControl({ value: '' }, Validators.required),
    principal: new FormControl({ value: '' }, Validators.required),
  });

  constructor(
    private schoolService: SchoolService,
    private directorService: DirectorService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.schoolForm.setValue(defaultFormValues);

    this.schoolService.getSchoolList().subscribe((data) => {
      this.list = data;
    });

    this.directorService.getPrincipals().subscribe((data) => {
      this.principals = data;
    });
  }

  editSchool(school: School) {
    this.schoolForm.setValue(school);
  }

  submit() {
    console.log(this.schoolForm.value);
    if (this.schoolForm.value.id === '') {
      this.schoolService.addSchool(this.schoolForm.value);
    } else {
      this.schoolService.editSchool(this.schoolForm.value);
    }
  }

  discard() {
    this.schoolForm.setValue(defaultFormValues);
  }
}
