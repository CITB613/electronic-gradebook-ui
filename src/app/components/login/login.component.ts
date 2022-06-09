import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


import{FormBuilder, FormGroup, Validators,FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      
      
  }

}
