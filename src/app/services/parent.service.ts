import { Injectable } from '@angular/core';
import { Parent } from '../models/parent.model';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  parent1 : Parent = new Parent( new User('21', 2, 'hi', 'hi', 'ha', 'hi', '', 0  ), '1');
  parent2 : Parent = new Parent( new User('22', 2, 'hi', 'hi', 'ha', 'hi', '', 0  ), '2') ;

  parentList : Array<Parent> = [this.parent1,this.parent2] ;
  constructor(public userService:UserService) { }


  getParentList() : Array<Parent> 
  {
    return this.parentList;
  }
}
