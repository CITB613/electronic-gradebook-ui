import { Injectable } from '@angular/core';
import { Class } from '../models/class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  class1 : Class = new Class('01', 'class_name', 'id_Teacher')
  class2: Class = new Class('02', 'class_name', 'id_Tea');

  classList : Array<Class> = [this.class1, this.class2]

  constructor() { }

  getAllClass()
  {
    return this.classList; 
  }
}
