import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {
  submitDisplay: boolean= true;

  constructor() { }

  ngOnInit(): void {
  }
  edit(){
    this.submitDisplay= false
  }
  save() {
    this.submitDisplay=true
  };
  discard() {} ;

}
