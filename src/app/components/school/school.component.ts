import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  public school : School = new School('','','', 0);
  public submitDisplay : boolean = true ;
  
  constructor(public schoolService : SchoolService, private http:HttpClient) { }

  ngOnInit(): void {
     
    this.school =this.schoolService.getSchoolInfor() ;
    
    
    

     
  } 
    edit(){
      this.submitDisplay= false
    }
    add() {
      const headers = { 'Authorization': 'Bearer my-token', };
      const body = { name: "this.school.name", address: "this.school.address" };
      this.http.post<any>('http://localhost:8080/api/v1/schools', body, { headers }).subscribe(data => {
          
      });
    };
  
    save() {
      this.submitDisplay=true
    };
    discard() {} ;
}
