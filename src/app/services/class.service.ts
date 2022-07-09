import { Injectable } from '@angular/core';
import { Class } from '../models/class.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  classList: Array<any> = [];

  constructor(private http: HttpClient) {}

  getAllClass() {
    return this.http.get<any>('http://localhost:8080/classes');
  }

  addClass(data: any) {
     return this.http.post<any>('http://localhost:8080/classes', data);
  }

  deleteClass(id: number) {
     return this.http.delete<any>(`http://localhost:8080/classes/${id}`);
  }
}
