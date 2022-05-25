import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  public API :  string = '' ;

  constructor(
    
  ) { }

  // getSchoolInfor() : Observable<School>
  // {
  //   return null;
  // }
  public getSchoolInfor( ) 
  {
    return new School('123', 'School', 'Address', 123) ;
  }
}
