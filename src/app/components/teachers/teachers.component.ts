import { Component, OnInit } from '@angular/core';
import { ItemEditorService } from 'src/app/services/item-editor.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  public msg : string ='';
  public list: Array<any> =  [];
  public search : string =' ';

  constructor(private teacherService : TeacherService,private itemEditor : ItemEditorService ) { }

  ngOnInit(): void {
    this.list= this.teacherService.getAllTeacherS() ;
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

  
  // clear(){
  //   this.classForm.reset()
  // };

  // addUser() {
      
  //   console.log(this.classForm.value);
    

  // } ;

  

  onChange()
  {
    console.log(this.search);
    
  }

}
