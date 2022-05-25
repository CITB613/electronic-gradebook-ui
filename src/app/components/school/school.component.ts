import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  public school : School = new School('','','', 0);
  public submitDisplay : boolean = true ;
  
  constructor(public schoolService : SchoolService) { }

  ngOnInit(): void {
     
    this.school =this.schoolService.getSchoolInfor() ;
    
    
    

     
  } 
    edit(){
      this.submitDisplay= false
    }
    save() {
      this.submitDisplay=true
    };
    discard() {} ;
}
