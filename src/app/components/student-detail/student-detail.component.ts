import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResultService } from 'src/app/services/result.service';
import { UserEditService } from 'src/app/services/user-edit.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  public msg : string ='';
  public list: Array<any> =  [];
  public search : string =' ';

  public id_student : string = 'stu';

  public form = new FormGroup (
    { id_course: new FormControl(''),
            
    }
  )

  constructor(public result : ResultService, public resultToEdit : UserEditService ) { }

  ngOnInit(): void {

    let results = this.result.getAllResults(this.id_student)
    this.list= this.resultToEdit.getUserToEdit(results)
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

  
  // clear(){
  //   this.form.reset()
  // };

  // addUser() {
      
  //   console.log(this.form.value);
    

  // } ;

  

  onChange()
  {
    console.log(this.search);
    
  }
  
    


  

}
