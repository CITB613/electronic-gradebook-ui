import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   user1= new User('1', 2, ' name', '21-01-01', 'userName', 'Password', 'email', 123);  
   user2= new User('2', 2, ' name', '21-01-01', 'userName', 'Password', 'email', 123);  
   users : Array<User> = [this.user1, this.user2] ;
  constructor() { }

  public getUsers() :User[]{
    console.log(this.users);
    
    return this.users ;
  }

  deleteUSer(id:string ) 
  {
    
  }

  getUserById(id: string)
  {
    return id;
  }
  getNameById(id:string)
  {
    return id;
  }
}
