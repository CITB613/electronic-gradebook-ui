import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  login() {
      const body = { username: "user", password: "pass" };
      this.http.post<any>('http://localhost:8080/api/login', body).subscribe(data => {
          console.log(data);
      });
    };
}

