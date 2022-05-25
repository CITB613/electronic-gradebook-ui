import { Injectable } from '@angular/core';
import { CouresResult } from '../models/courseResult.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  id_students : string = '';
  result1 : CouresResult = new CouresResult( 'cour', 1,  2, 3);
  result2 : CouresResult = new CouresResult( 'cu1', 2, 3 , 4) ;



  results : Array<CouresResult> = [this.result1, this.result2]



  constructor() {
    
   }

  getAllResults(id_student: string)
  { 
    console.log(id_student);
    
    return this.results; 
  }

  addCourse(id_student :string,id_Course : string)
  { 
    console.log(id_student);
    
    let result = new CouresResult(id_Course)
    this.results.push(result);
  }
}
