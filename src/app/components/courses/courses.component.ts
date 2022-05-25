import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';
import { UserEditService } from 'src/app/services/user-edit.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public msg : string ='';
  public list: Array<any> =  [];
  public search : string =' ';
  
  public form = new FormGroup (
    { name: new FormControl(''),
      semester : new FormControl(''),
      id_teacher : new FormControl(''),
      
      
    }
  )
  constructor(courseService : CoursesService, itemEditor : UserEditService ) {
    let items = courseService.getAllCourses();
    this.list= itemEditor.getUserToEdit(items);

    console.log(this.list[1].user.semester);
    

   }

  ngOnInit(): void {
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

  
  clear(){
    this.form.reset()
  };

  addUser() {
      
    console.log(this.form.value);
    

  } ;

  

  onChange()
  {
    console.log(this.search);
    
  }

}
