import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

import { HttpClient } from '@angular/common/http';


import{FormBuilder, FormGroup, Validators,FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';



=======
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
>>>>>>> 36445d61456e997a70309072fc84f8c2ce08dda3
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

<<<<<<< HEAD
  loginForm: FormGroup = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  })

  usernameErr: boolean = false;
  constructor( private formBuilder: FormBuilder, private http : HttpClient
   , private route : Router
    )
  
  { }

  ngOnInit(): void {

  }
  onSubmit()
  {
    // if(this.loginForm.invalid)
    // {
    //   alert('Please enter username and password')

    //   return;
    // }
    
    // this.http.post<any>('http link', this.loginForm.value).subscribe((
    //   res:{status: number, description ?: string, token? :string, user? :any}
    // ) =>
    // {
    //   if(res.status==200)
    //   {
    //  this.route.navigate([''])
    //   }
    // }
    // )

    this.route.navigate([''])
      
      
=======
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
>>>>>>> 36445d61456e997a70309072fc84f8c2ce08dda3
  }
}
