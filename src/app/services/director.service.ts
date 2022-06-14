import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Director, DirectorType } from '../models/director.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DirectorService {
  constructor(private http: HttpClient) {}

  getDirectorInfor() {
    return new Director('id', 'Director', 123, 'email');
  }

  public getPrincipals() {
    return this.http.get<Array<DirectorType>>(
      'http://localhost:8080/users/principals'
    );
  }
}
