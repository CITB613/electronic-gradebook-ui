import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private tokenService: TokenStorageService,
    private router: Router
  ) {}

  username = '';
  password = '';
  ngOnInit(): void {}

  login() {
    const body = { username: this.username, password: this.password };
    this.http
      .post<any>('http://localhost:8080/api/login', body)
      .subscribe((resp) => {
        console.log(resp);
        const token = resp.AccessToken;
        console.log(token);
        this.tokenService.saveToken(token);
        this.router.navigateByUrl('/');
      });
  }
}
