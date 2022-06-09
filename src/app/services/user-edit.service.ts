import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserEditService {

  public usersToEdit : Array<any>= [] ;

  constructor() { 

    
  }

  getUserToEdit(users :any[] ) {
    this.usersToEdit= [] ;
    users.forEach( (value) => { this.usersToEdit.push({user :value, edit: false}  ) } )
    return this.usersToEdit ;
  }
}
