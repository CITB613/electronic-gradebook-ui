import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

   public adminLinks : any[] =[
    {'title': 'Manage School',
      'link':'#'
    } ,
    {'title':'Manage Director',
      'link' : '#'},

    {'title':'Manage Courses' ,
      'link': '#'},
    {'title':'Manage Teachers' ,
      'link': '#'},
    {'title':'Manage Students' ,
      'link': '#'},
    {'title':'Manage Parents' ,
      'link': '#'},
    {'title':'Manage Users' ,
      'link': '#'},
    {'title':'Stastistics' ,
      'link': '#'}
    
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.adminLinks[0]);
    
  }

}
