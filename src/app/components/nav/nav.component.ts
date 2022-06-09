import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   school_id : string= '12';

   public adminLinks : any[] =[
    {'title': 'Manage School',
      'link': 'school'},

    {'title':'Manage Director',
      'link' : 'director'},
    {
      'title':'Manage Classes',
      'link' : 'classes'
    },
    {'title':'Manage Courses' ,
      'link': 'courses'},
    {'title':'Manage Teachers' ,
      'link': 'teachers'},
    {'title':'Manage Students' ,
      'link': 'students'},
    {'title':'Manage Parents' ,
      'link': 'parents'},
    {'title':'Manage Users' ,
      'link': 'users'},
    {'title':'Stastistics' ,
      'link': 'stastistics'}
    
  ]

  constructor(private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.activateRoute.snapshot.params['id']);
    
    this.school_id=this.activateRoute.snapshot.params['id']
    console.log(this.school_id);
    
    console.log('schools/'+ this.school_id + '/school');
    
    console.log(this.adminLinks[0]['link']);
    

  }

}
