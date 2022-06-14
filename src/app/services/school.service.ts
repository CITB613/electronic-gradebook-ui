import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from '../models/school.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  constructor(private http: HttpClient) {}

  public getSchoolList() {
    return this.http.get<Array<School>>('http://localhost:8080/schools');
  }

  public addSchool(school: School) {
    const body = {
      name: school.name,
      address: school.address,
      principalId: school.principal.id,
    };
    this.http
      .post<any>('http://localhost:8080/schools', body)
      .subscribe((data) => {});
  }

  public editSchool(school: School) {
    const body = { name: school.name, address: school.address };
    this.http
      .put<any>(`http://localhost:8080/schools/${school.id}`, body)
      .subscribe((data) => {});
  }
}
