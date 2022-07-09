import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { UserEditService } from 'src/app/services/user-edit.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public msg : string ='';
  public list: Array<any> =  [];
  public search : string =' ';

  constructor(private studentService: StudentService,private studentEditor : UserEditService) { }

  ngOnInit(): void {

   this.studentService.getAllStudents(1);

    
    console.log(this.list);
    

  }

  editDisplay(index : number)
  { 
    
    this.list[index].edit = true ;
  }
  editHide(index : number )
  {
    this.list[index].edit = false ;
  }
  editUser(index : number){
    this.editDisplay(index);
    
    
  }
  

  deleteUser(id: string ,index : number) {
    console.log(id);
    

  } ;

  updateUser(id: string,index : number) { 
    this.list[index].edit = false ;
    
    console.log(id);
    
    console.log(this.list[index].user);
    
    // this.list[index].user = item.user;
  };
  cancelUser(index : number) {
    this.list[index].edit = false;
  } ;

  
  

  

  onChange()
  {
    console.log(this.search);
    
  }

}
