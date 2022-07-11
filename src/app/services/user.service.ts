import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User, UserType } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get<Array<UserType>>('http://localhost:8080/users');
  }

  deleteUser(id: number) {
    return this.http.delete<any>(`http://localhost:8080/users/${id}`);
  }

  getUserById(id: string) {
    return id;
  }
  getNameById(id: string) {
    return id;
  }

  addUser(data: any) {
    return this.http.post<any>('http://localhost:8080/api/register', data);
  }

  updateUser(data: any, id: number) {
    return this.http.put<any>(`http://localhost:8080/users/${id}`, data);
  }
}
