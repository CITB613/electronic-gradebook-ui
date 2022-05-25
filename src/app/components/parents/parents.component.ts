import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ParentService } from 'src/app/services/parent.service';
import { UserEditService } from 'src/app/services/user-edit.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  public msg : string ='';
  public list: Array<any> =  [];
  public search : string =' ';
  
  
  

  constructor(public parentService : ParentService,public userService : UserService, public userEditor : UserEditService) { }

  ngOnInit(): void {

    let parents= this.parentService.getParentList();
    this.list= this.userEditor.getUserToEdit(parents);
    console.log(parents);
    console.log(this.list[0].user.id_student);
    
    
  }

  editDisplay(index : number)
  { 
    
    this.list[index].edit = true ;
  }
  editHide(index : number )
  {
    this.list[index].edit = false ;
  }

  getStudentName(id: string )
  {
    return this.userService.getUserById(id);
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
