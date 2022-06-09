import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  public school : School = new School('12','12','');
  public submitDisplay : boolean = true ;

  public test: string =' tes'
  
<<<<<<< HEAD
  schoolForm: FormGroup= new FormGroup({
    schoolName : new FormControl({value :"", disabled : true}, Validators.required),
    address : new FormControl({value :"", disabled : true}, Validators.required)
  })

  constructor(public schoolService : SchoolService) { }
=======
  constructor(public schoolService : SchoolService, private http:HttpClient) { }
>>>>>>> 36445d61456e997a70309072fc84f8c2ce08dda3


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
    add() {
      const headers = { 'Authorization': 'Bearer my-token', };
      const body = { name: "this.school.name", address: "this.school.address" };
      this.http.post<any>('http://localhost:8080/api/v1/schools', body, { headers }).subscribe(data => {
          
      });
    };
  
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
