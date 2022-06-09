import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  public school : School = new School('12','12','');
  public submitDisplay : boolean = true ;

  public test: string =' tes'
  
  schoolForm: FormGroup= new FormGroup({
    schoolName : new FormControl({value :"", disabled : true}, Validators.required),
    address : new FormControl({value :"", disabled : true}, Validators.required)
  })

  constructor(public schoolService : SchoolService) { }


  ngOnInit(): void {
     
    this.school =this.schoolService.getSchoolInfor() ;
    
    this.schoolForm.patchValue({schoolName : this.school.name, address : this.school.address})

    console.log(this.schoolForm.value);
    

     
  } 
    edit(){

      this.schoolForm.enable();

      console.log(this.schoolForm.value);
      
      this.submitDisplay= false
    }
    save() {
      // this.submitDisplay=true
      console.log(this.schoolForm.value);
      
    };
    discard() {
      this.schoolForm.patchValue({schoolName : this.school.name, address : this.school.address});
      this.schoolForm.disable();
      this.submitDisplay=true
    } ;

   
}
