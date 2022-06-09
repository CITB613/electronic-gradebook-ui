import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  public API :  string = '' ;

  school1 : School = new School('123', 'School', 'Address');
  school2: School = new School('112', 'sc2', 'add')

  schools :Array<School>=[this.school1, this.school2]

  constructor(
    
  ) { }

  // getSchoolInfor() : Observable<School>
  // {
  //   return null;
  // }
  public getSchoolInfor( ) 
  {
    return new School('123', 'School', 'Address') ;
  }

  getSchoolList()
  {
    return this.schools;
  }
}
