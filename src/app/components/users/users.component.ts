import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { UserEditService } from 'src/app/services/user-edit.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public msg : string ='';
  public list: Array<any> =  [];
  public search : string =' ';
  
  public form = new FormGroup (
    { role: new FormControl(''),
      name : new FormControl(''),
      birthday : new FormControl(''),
      username : new FormControl(''),
      password: new FormControl(''),
      email : new FormControl('') ,
      phone : new FormControl('')
      
    }
  )
  
  

  constructor(public userService : UserService, public userToEdit : UserEditService) { }

  ngOnInit(): void {
    let _users : User[] = this.userService.getUsers() ;
    
    
    this.list= this.userToEdit.getUserToEdit(_users);

    

    
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
