import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  public list: Array<any> =  [];

  constructor(private schoolService : SchoolService,
              private activateRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.list = this.schoolService.getSchoolList();

    this.activateRoute.snapshot.params['id']
  }
  onClick(id : string)
  {
    console.log(id);
    
  }

}
