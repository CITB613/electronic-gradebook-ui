import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Director } from 'src/app/models/director.model';
import { DirectorService } from 'src/app/services/director.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {
  
  public director : Director = new Director('id','name',123,'email');
  public submitDisplay : boolean = true ;

  public test: string =' tes'
  
  directorForm: FormGroup= new FormGroup({
    name : new FormControl({value :"", disabled : true}, Validators.required),
    phone : new FormControl({value :"", disabled : true}, Validators.required),
    email : new FormControl({value :"", disabled : true}, Validators.required)
  
  })
  
  
  

  constructor(private directorService : DirectorService) { }

  ngOnInit(): void {
    this.director = this.directorService.getDirectorInfor();
    this.directorForm.patchValue({name: this.director.name, phone: this.director.phone, email : this.director.email})
  }
  edit(){
    this.directorForm.enable();
    this.submitDisplay= false
  }
  save() {
    this.submitDisplay=true
  };
  discard() {
    this.directorForm.patchValue({name: this.director.name, phone: this.director.phone, email : this.director.email})

    this.directorForm.disable();
      this.submitDisplay=true
  } ;

}
