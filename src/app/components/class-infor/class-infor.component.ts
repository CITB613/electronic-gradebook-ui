import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemEditorService } from 'src/app/services/item-editor.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-class-infor',
  templateUrl: './class-infor.component.html',
  styleUrls: ['./class-infor.component.css']
})
export class ClassInforComponent implements OnInit {

  public msg : string ='';
  public list: Array<any> =  [];
  public search : string =' ';

  public classForm = new FormGroup (
    { name: new FormControl(''),
      
      
      
    }
  )
  constructor(private studentService : StudentService, private ItemEditor : ItemEditorService, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.list = this.studentService.getAllStudents() ;
    console.log(this.list);
    console.log(this.activateRoute.snapshot.params['id']);
    
    
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
    this.classForm.reset()
  };

  addUser() {
      
    console.log(this.classForm.value);
    

  } ;

  

  onChange()
  {
    console.log(this.search);
    
  }

}
